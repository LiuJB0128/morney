import styled from 'styled-components';

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

export {NumberPadSection};