import React from 'react';
import style from './SectionHome.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import photo from '../../assets/img/home.jpg';

export const SectionHome: React.FC = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <h1 className={ style.title }>
          Привет!<br /> Меня зовут Надежда!
        </h1>
        <img
          src={ photo }
          alt="Фотография Надежды Бирюковой"
          className={ style.img }
        />
      </Container>
    </Section>
  );
};