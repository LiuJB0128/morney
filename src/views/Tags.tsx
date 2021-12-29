import {Layout} from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  border-left: 15px solid #f5f5f5;
  border-right: 15px solid #f5f5f5;
  border-top: 5px solid #f5f5f5;

  > li {
    background: #FFFFFF;
    border: 5px solid #f5f5f5;
    border-radius: 10px;
    line-height: 30px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      height: 30px;
      width: 30px;
      fill: #707070;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 10px 65px;
  border-radius: 15px;
  background: #FF9E00;
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="more"/>
          </li>
        )}
      </TagList>
      <Center>
        <Button>添加分类</Button>
      </Center>
    </Layout>
  );
}

export {Tags};