import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 120px;
  text-align: center;
  margin-bottom: 22px;
  border-radius: 4px;
`;

export const StyledLink = styled(NavLink)`
  color: #161616;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: #c51b64;
  }
  &:focus {
    color: #c51b64;
    text-decoration: underline;
  }
`;
