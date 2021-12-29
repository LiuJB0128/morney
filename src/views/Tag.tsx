import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import {Layout} from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

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
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Tag: React.FC = () => {
  const {findTag, updateTag} = useTags();
  let {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name="back"/>
        <span>编辑分类</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
        <Input label="名称" type="text" placeholder={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除分类</Button>
      </Center>
    </Layout>
  );
};

export {Tag};