import styled from 'styled-components';

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

export {OutPutSection};