import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: #ffff;
    font-size: 20px;
    line-height: 48px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
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

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(11) {
        border-right: 1px solid #dadce0;
        border-bottom: 1px solid #dadce0;
        background: #f1f3f4;
      }

      &:nth-child(12),
      &:nth-child(13),
      &:nth-child(14) {
        border-right: 1px solid #dadce0;
        background: #f1f3f4;
      }

      &:nth-child(4) {
        border-bottom: 1px solid #dadce0;
        background: #f1f3f4;
      }

      &:nth-child(8) {
        background: #f1f3f4;
      }
    }

    @media (max-height: 570px) {
      > button {
        height: 40px;

        &.ok {
          height: 80px;
        }
      }
    }
  }
`;

export {Wrapper};