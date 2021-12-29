import {useState} from 'react';

const useTags = () => { //封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    {id: 1, name: '其他'},
    {id: 2, name: '餐饮'},
    {id: 3, name: '交通'},
    {id: 4, name: '购物'}
  ]);
  return {tags, setTags};
};

export {useTags};