import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: #ffffff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.333333%;
      text-align: center;

      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
        }

        &.selected {
          color: #FF8C19;

          .icon {
            fill: #FF8C19;
          }
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export {Nav};