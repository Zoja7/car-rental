import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding-right: 320px;
  padding-left: 320px;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #fff;
  background-color: #205ae2;
  font-size: 24px;
  font-weight: 500px;
  line-height: 0.03;
`;

export const StyledLink = styled(NavLink)`
  color: #ede7e7;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: white;
    text-decoration: underline;
  }
  &:focus {
    color:  white;
    text-decoration: underline;
  }
`;

export const MainWrapper = styled.main`
/* background-color: beige; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top:120px;
position: relative;
`;