import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  Sign,
  Frame,
  IconLabel,
  Symbol
} from './SharedLayout.styled';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Symbol to="/">
          <Logo>
            <Frame role="img" aria-label="computer icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1623/1623681.png"
                alt="Dog"
                width="50px"
              />
            </Frame>
            <IconLabel>Canine</IconLabel>
            <IconLabel>Cove</IconLabel>
          </Logo>
        </Symbol>
        <div className={css.advertContainer}>
          <div className={css.advert} >
            Cast your vote in the Town Hall
          </div>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link className={css.signLink} to="/town_hall">
            Town Hall
            <Sign />
          </Link>
          <Link to="/library">Library</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/cinema">Cinema</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
