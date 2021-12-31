import {Layout} from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { Center } from 'components/Center';
import { Space } from 'components/Space';

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
    
    
    > a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
    }

    .icon {
      height: 30px;
      width: 30px;
      fill: #707070;
    }
  }
`;



function Tags() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="more"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={addTag}>添加分类</Button>
      </Center>
    </Layout>
  );
}

export {Tags};