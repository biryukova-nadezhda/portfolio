import React from 'react';
import style from './Popup.module.css';

interface PopupProps {
  message: string;
};

export const Popup: React.FC<PopupProps> = ({ message }) => {
  return(
    <div className={ style.popup }>
      <p>{ message }</p>
    </div>
  );
};