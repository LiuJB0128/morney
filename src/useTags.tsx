import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['其他', '餐饮', '交通', '购物']);
  return {tags, setTags};
};

export {useTags};