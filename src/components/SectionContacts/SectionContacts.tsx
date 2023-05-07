import React from 'react';
import style from './SectionContacts.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { contacts } from '../../assets/data/contacts';
import { IContacts } from '../../assets/data/contacts';
import { FormContact } from '../FormContact/FomrContact';

export const SectionContacts = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <FormContact />

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