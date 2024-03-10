import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, MainWrapper, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <StyledLink className="headerLink" to="/">
          Home
        </StyledLink>
        <StyledLink className="headerLink" to="/catalog">
          Catalog
        </StyledLink>
        <StyledLink className="headerLink" to="/favorite">
          Favorite
        </StyledLink>
      </HeaderStyled>
      <Container>
        <MainWrapper>
          <Suspense fallback={<Loader />}>
            {' '}
            <Outlet />
          </Suspense>
        </MainWrapper>
      </Container>
    </>
  );
};

export default Layout;
