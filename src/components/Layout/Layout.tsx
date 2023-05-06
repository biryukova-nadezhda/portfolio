import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import style from './Layout.module.css';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={ style.main }>
        <Outlet />
      </main>
    </>
  );
};