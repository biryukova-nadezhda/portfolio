import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './FormContact.module.css';
import { Button } from '../Button/Button';
import { Popup } from '../Popup/Popup';
import { FormInput } from '../FormElements/FormInput';
import { FormTextarea } from '../FormElements/FormTextarea';
import { useFormElement } from '../../assets/utils/useFormElement';

export const FormContact = () => {
  /* 
    Объект с текстом сообщений об ошибках, в зависимости , какую проверку они проходят
  */
  const errorMessage = {
    isEmpty: 'Поле не может быть пустым',
    minLength: 'Поле должно содержать достаточное количество символов',
    maxLength: 'Максимальное колическтво символов в поле превышено',
    email: 'Некорректный email-адрес',
  };

  /* 
    Задаем состояния для сообщения и свойства для показа popup
  */
  const [popupMessage, setPopupMessage] = useState('');
  const [popupActive, setPopupActive] = useState(false);

  /* 
    Используя хук useRef - получаем форму
  */
  const formRef = useRef<HTMLFormElement>(null);

  /* 
    Объявляем объекты соответсвующий полей формы, которые должны пройти проверку на валидность
  */
  const name = useFormElement('', { isEmpty: true, minLength: 2, maxLength: 18 });
  const email = useFormElement('', { isEmpty: true, email: false });
  const message = useFormElement('', { isEmpty: true, minLength: 2 });

  /* 
    Функция обработки события submit на форме.
    1. При клике на кнопку сразу показываем сообщение посредством Popup о том, что сообщение отправляется
    2. Инициализируем объект emailjs и с его помощью отправляем данные с формы на email
    3. Если отправка произошла успешно - очищаем форму, если произошла ошибка- показываем ее через Popup
    4. Когда запрос окончен, оповещаем пользователя о том, что сообщение отправлено и закрываем popup
  */
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPopupMessage('Сообщение отправляется...');
    setPopupActive(true);

    emailjs
      .sendForm(
        'service_j2o9dmk',
        'template_9zdos2h',
        e.currentTarget,
        'mmUDpcbqS6zvtpk_1'
      )
      .then((result) => {
        console.log(result.text);
        clearForm();

      }, (error) => {
        console.log(error.text);
        setPopupMessage(error.text);

        setTimeout(() => {
          closePopup();
        }, 3500);
      })
      .finally(() => {
        setPopupMessage('Ваше сообщение отправлено! С вами свяжутся в ближайшее время.');
        setTimeout(() => {
          closePopup();
        }, 3500);
      });
  };

  /* 
    Функция очищения полей формы
  */
  const clearForm = (): void => {
    name.setIsFocused(false);
    name.setValue('');

    email.setIsFocused(false);
    email.setValue('');

    message.setIsFocused(false);
    message.setValue('');
  };

  /* 
  Функция закрытия окна popup
  */
  const closePopup = (): void => {
    setPopupActive(false);
    setPopupMessage('');
  };

  return (
    <form ref={ formRef } className={ style.form } onSubmit={ handlerSubmit }>
      <h3 className={ style.title }>Связаться</h3>

      <FormInput
        id="name"
        name="user_name"
        type="text"
        placeholder="Email"
        required={ true }
        labelText="Имя *"
        classEL={ {
          wrapper: style.wrapper_field,
          blockInput: style.block_input,
          input: style.field,
          label: style.label,
          errorMessage: style.errorMessage
        } }
        errorArray={ [
          name.isFocused && name.isEmpty ? errorMessage.isEmpty : '',
          name.isFocused && name.minLength ? errorMessage.minLength : '',
          name.isFocused && name.maxLength ? errorMessage.maxLength : '',
        ] }
        value={ name.value }
        onChange={ name.handlerChange }
        onBlur={ name.handlerBlur }
      />

      <FormInput
        id="email"
        name="user_email"
        type="email"
        placeholder="Имя"
        required={ true }
        labelText="Email *"
        classEL={ {
          wrapper: style.wrapper_field,
          blockInput: style.block_input,
          input: style.field,
          label: style.label,
          errorMessage: style.errorMessage
        } }
        errorArray={ [
          email.isFocused && email.isEmpty ? errorMessage.isEmpty : '',
          email.isFocused && email.email ? errorMessage.email : ''
        ] }
        value={ email.value }
        onChange={ email.handlerChange }
        onBlur={ email.handlerBlur }
      />

      <FormTextarea
        id="message"
        name="message"
        placeholder="Сообщение"
        required={ true }
        labelText="Сообщение *"
        classEL={ {
          wrapper: style.wrapper_field,
          blockInput: style.block_input,
          textarea: style.field,
          label: style.label,
          errorMessage: style.errorMessage
        } }
        errorArray={ [
          message.isFocused && message.isEmpty ? errorMessage.isEmpty : '',
          message.isFocused && message.minLength ? errorMessage.minLength : ''
        ] }
        value={ message.value }
        onChange={ message.handlerChange }
        onBlur={ message.handlerBlur }
      />

      <Button
        type='submit'
        classBtn={ style.btn }
        text='Отправить'
        title='Кнопка отправки формы для связи'
        disabled={ !name.isValid || !email.isValid || !message.isValid }
      />

      { popupActive && <Popup message={ popupMessage } /> }
    </form>
  );
};