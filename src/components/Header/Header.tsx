import React, { useState } from 'react';
import style from './Header.module.css';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={ classNames(style.header, active ? style.header_active : '') }>
      <Container className={ style.container }>
        <Navigation active={ active } setActive={ setActive } />
      </Container>
    </header>
  );
};