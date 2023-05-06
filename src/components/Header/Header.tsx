import React from 'react';
import style from './Header.module.css';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';

export const Header: React.FC = () => {
  return (
    <header className={ style.header }>
      <Container className={ style.container }>
        <Navigation />
      </Container>
    </header>
  );
};