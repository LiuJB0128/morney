import {useState} from 'react';
import {createId} from './lib/createId';

const useTags = () => { //封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    {id: createId(), name: '其他'},
    {id: createId(), name: '餐饮'},
    {id: createId(), name: '交通'},
    {id: createId(), name: '购物'}
  ]);
  return {tags, setTags};
};

export {useTags};