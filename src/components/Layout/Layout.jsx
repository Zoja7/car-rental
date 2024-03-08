import Container from 'components/Container/Container'
import Loader from 'components/Loader/Loader'
import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container>
       <header className="headerStyle">
        <NavLink  className="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerLink" to="/Catalog">
          Catalog
        </NavLink>
        <NavLink className="headerLink" to="/favorite">
          Favorite
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          {' '}
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}

export default Layout
