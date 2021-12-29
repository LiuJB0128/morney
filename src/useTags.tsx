import {useState} from 'react';

const useTags = () => { //封装一个自定义 Hook
  const [tags, setTags] = useState<string[]>(['其他', '餐饮', '交通', '购物']);
  return {tags, setTags};
};

export {useTags};