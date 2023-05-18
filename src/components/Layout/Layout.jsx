import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: #000000;
  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <div
      style={{
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <header className={css.Header}>
        <nav className={css.Nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main className={css.Main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
