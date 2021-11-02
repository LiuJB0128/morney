import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 16px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        background: #333;
        height: 3px;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const OutPutSection = styled.section`
  display: flex;
  flex-direction: column;

  > span {
    background: #ffff;
    font-size: 20px;
    line-height: 48px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);
  }
`;

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;

  > ol {
    padding: 0 4px;
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 16px;
      margin: 8px 12px;
    }
  }

  > button {
    border: none;
    background: none;
  }
`;

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 16px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NumberPadSection = styled.section`
  > div {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok {
        height: 192px;
        float: right;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(12) {
        background: #c1c1c1;
      }
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(14) {
        background: #a9a9a9;
      }
      &:nth-child(8) {
        background: #9a9a9a;
      }
    }
  }
`;

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
        <ol>
          <li>其他</li>
          <li>餐饮</li>
          <li>交通</li>
          <li>购物</li>
        </ol>
        <button>设置</button>
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