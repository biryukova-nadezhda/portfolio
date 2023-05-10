import React from 'react';
import classNames from 'classnames';
import style from './Button.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  classBtn: string;
  text?: string;
  title: string;
  onClick?: () => void;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  position?: 'left' | 'right';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ type, classBtn, text, title, onClick, icon: Icon, position='left', disabled  }) => {
  return (
    <button
      type={ type }
      title={ title }
      className={ classNames(style.btn, classBtn)}
      style={{
        flexDirection: `${position==='left' ? 'row' : 'row-reverse'}`
      }}
      onClick={ onClick }
      disabled={ disabled }
    >
      { Icon && <Icon /> }
      { text && text }
    </button>
  );
};