import React from 'react';
import style from './SectionSkills.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { skills } from '../../assets/data/skills';
import SvgIcon from '../SvgIcon/SvgIcon';

export const SectionSkills: React.FC = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <h2 className={ style.title }>Я работаю с ...</h2>

        <ul className={ style.list }>
          {
            skills.map((skill: string) => {
              return (
                <li key={crypto.randomUUID()} className={style.item}>
                  <SvgIcon name="skills-sprite" id={skill.toLowerCase().replace(/\s/g, "")} className={ style.icon }/>
                  <p className={ style.name }>{ skill }</p>
                </li>
              )
            })
          }
        </ul>
      </Container>
    </Section>
  );
};