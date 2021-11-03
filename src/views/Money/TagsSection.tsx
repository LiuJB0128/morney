import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;

  > ol {
    padding: 0 4px;
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 16px;
      margin: 8px 12px;

      &.selected {
        background: #f60;
      }
    }
  }

  > button {
    border: none;
    background: none;
  }
`;

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['其他', '餐饮', '交通', '购物']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={() => onToggleTag(tag)}
              className={getClass(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>设置</button>
    </Wrapper>
  );
};

export {TagsSection};