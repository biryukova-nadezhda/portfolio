import React from 'react';
import style from './SectionSkills.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { skills } from '../../assets/data/skills';
import { ISkills } from '../../assets/data/skills';

export const SectionSkills: React.FC = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <h2 className={ style.title }>Я работаю с ...</h2>

        <ul className={ style.list }>
          {
            skills.map((skill :ISkills) => {
              return (
                <li key={ crypto.randomUUID() } className={ style.item }>
                  <img src={ skill.imgSrc } alt={ `Иконка ${ skill.name }` } className={ style.img } />
                  <p className={ style.name }>{ skill.name }</p>
                </li>
              )
            })
          }
        </ul>
      </Container>
    </Section>
  );
};