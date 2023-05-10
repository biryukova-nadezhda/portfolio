import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import style from './Navigation.module.css';

interface NavigationProps {
  active: boolean;
  setActive: (active: boolean) => void;
};

export const Navigation: React.FC<NavigationProps> = ({ active, setActive }) => {
  return (
    <nav className={ style.navigation }>
      <ul className={ classNames(style.list, active ? style.list_active : '') } onClick={() => setActive(false)}>
        <li className={ style.item }>
          <NavLink to="/" className={ style.link }>Главная</NavLink>
        </li>

        <li className={ style.item }>
          <NavLink to="/about" className={ style.link }>Обо мне</NavLink>
        </li>

        <li className={ style.item }>
          <NavLink to="/projects" className={ style.link }>Проекты</NavLink>
        </li>

        <li className={ style.item }>
          <NavLink to="/contacts" className={ style.link }>Контакты</NavLink>
        </li>
      </ul>

      <button
        type='button'
        title='Кнопка меню'
        className={ style.btn }
        onClick={ () => setActive(!active) }
      ></button>
    </nav>
  );
};