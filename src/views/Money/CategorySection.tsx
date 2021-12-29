import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 16px;

  > ul {
    display: flex;
    background: #FF9E00;
    justify-content: center;
    

    > li {
      width: 25%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      
      

      &.selected::after {
        content: '';
        display: block;
        background: #000;
        height: 3px;
        position: absolute;
        bottom: 0;
        width: 50%;
        left: 25%;
      }
    }
  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value;

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};