import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';
import { CategorySection } from './Money/CategorySection';
import { NotesSection } from './Money/NotesSection';
import { NumberPadSection } from './Money/NumberPadSection';
import { OutPutSection } from './Money/OutPutSection';
import { TagsSection } from './Money/TagsSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <OutPutSection>
        <span>￥0</span>
      </OutPutSection>
      <TagsSection>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="添加备注"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div className="clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="ok">确定</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>清零</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;