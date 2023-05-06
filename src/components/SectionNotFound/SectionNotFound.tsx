import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SectionNotFound.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';

export const SectionNotFound: React.FC = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <h1 className={ style.title }>Похоже, ты&nbsp;заблудился</h1>
        <p className={ style.description }>
          Попробуй вернуться на главную страницу
        </p>
        <NavLink to="/" className={ style.link }>Главная</NavLink>
      </Container>
    </Section>
  );
};