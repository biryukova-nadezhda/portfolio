import React from 'react';
import classNames from 'classnames';
import style from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode,
  className: string,
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={ classNames(style.container, className) }>
      { children }
    </div>
  )
}