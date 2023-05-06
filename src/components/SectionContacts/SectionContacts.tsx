import React from 'react';
import classNames from 'classnames';
import style from './SectionContacts.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { contacts } from '../../assets/data/contacts';
import { IContacts } from '../../assets/data/contacts';

export const SectionContacts = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <form className={ style.form }>
          <h3 className={ style.title }>Связаться</h3>

          <div className={ style.wrapper_field }>
            <input id="name" name="name" type="text" placeholder="Имя" className={ classNames(style.field_error, style.field) } />
            <label htmlFor='name' className={ style.label }>Имя</label>
          </div>

          <div className={ style.wrapper_field }>
            <input id="email" name="email" type="email" placeholder="Email" className={ style.field } />
            <label htmlFor='email' className={ style.label }>Email</label>
          </div>

           <div className={ style.wrapper_field }>
            <textarea id="message" className={ style.field } placeholder='Сообщение'></textarea>
            <label htmlFor="message" className={ style.label }>Сообщение</label>
          </div>

          <Button
            type='submit'
            classBtn={ style.btn }
            text='Отправить'
            title='Кнопка отправки формы для связи'
            onClick={ () => console.log('click form submit') }
          />
        </form>

        <ul className={ style.list }>
          {
            contacts.map((contact : IContacts) => {
              return (
                <li key={ contact.name } className={ style.item }>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={ contact.href }
                    title={ `Ссылка на профиль ${ contact.name }` }
                    className={ style.link }
                    style={ {
                      backgroundImage: `url(${ contact.imgSrc })`
                    } }
                  >
                  </a>
                </li>
              )
            })
          }
        </ul>
      </Container>
    </Section>
  );
};