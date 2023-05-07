import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './FormContact.module.css';
import { Button } from '../Button/Button';
import { Popup } from '../Popup/Popup';

export const FormContact = () => {
  const [popupMessage, setPopupMessage] = useState('');
  const [popupActive, setPopupActive] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j2o9dmk',
        'template_9zdos2h',
        e.currentTarget,
        'mmUDpcbqS6zvtpk_1'
      )
      .then((result) => {
        console.log(result.text);
        setPopupMessage('Ваше сообщение отправлено! С вами свяжутся в ближайшее время.');
        setPopupActive(true);

        setTimeout(() => {
          clearForm();
        }, 500);

        setTimeout(() => {
          closePopup();
        }, 3500);
      }, (error) => {
        console.log(error.text);
        setPopupMessage(error.text);
        setPopupActive(true);

        setTimeout(() => {
          closePopup();
        }, 3500);
      });
  }

  const clearForm = () => {
    formRef.current?.reset();
  };

  const closePopup = () => {
    setPopupActive(false);
    setPopupMessage('');
  };

  const emailValid = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validField = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, type?: string): boolean => {
    const isEmpty = e.currentTarget.value.trim().length === 0;

    if (isEmpty) {
      e.currentTarget.classList.add(`${ style.field_error }`);
      return false;
    };

    if (type === 'email' && !emailValid(e.currentTarget.value.trim())) {
      e.currentTarget.classList.add(`${ style.field_error }`);
      return false;
    };

    e.currentTarget.classList.remove(`${ style.field_error }`);
    return true;
  };

  return (
    <form ref={ formRef } onSubmit={ sendEmail } className={ style.form }>
      <h3 className={ style.title }>Связаться</h3>

      <div className={ style.wrapper_field }>
        <input
          id="name"
          name="user_name"
          type="text"
          placeholder="Имя"
          className={ style.field }
          required
          onBlur={ (e: React.FormEvent<HTMLInputElement>) => {
            validField(e);
          } }
        />
        <label htmlFor='name' className={ style.label }>Имя</label>
      </div>

      <div className={ style.wrapper_field }>
        <input
          id="email"
          name="user_email"
          type="email"
          placeholder="Email"
          className={ style.field }
          required
          onBlur={ (e: React.FormEvent<HTMLInputElement>) => {
            validField(e, 'email');
          } }
        />
        <label htmlFor='email' className={ style.label }>Email</label>
      </div>

      <div className={ style.wrapper_field }>
        <textarea
          id="message"
          name="message"
          placeholder="Сообщение"
          className={ style.field }
          required
          onBlur={ (e: React.FormEvent<HTMLTextAreaElement>) => {
            validField(e);
          } }
        ></textarea>
        <label htmlFor="message" className={ style.label }>Сообщение</label>
      </div>

      <Button
        type='submit'
        classBtn={ style.btn }
        text='Отправить'
        title='Кнопка отправки формы для связи'
      />

      { popupActive && <Popup message={ popupMessage } /> }
    </form>
  );
};