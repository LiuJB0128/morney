import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import {Layout} from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';

type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #FF9E00;
`;
const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="back"/>
        <span>编辑分类</span>
        <Icon/>
      </Topbar>
      <div>
        <span>名称</span>
        <input type="text" placeholder={tag.name}/>
      </div>
      <div>
        <Button>删除分类</Button>
      </div>
    </Layout>
  );
};

export {Tag};