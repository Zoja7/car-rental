import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <nav>
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
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          {' '}
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
