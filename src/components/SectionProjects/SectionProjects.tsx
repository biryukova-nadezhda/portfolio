import React from 'react';
import style from './SectionProjects.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { CardProject } from '../CardProject/CardProject';
import { projects } from '../../assets/data/projects';
import { IProject } from '../../assets/data/projects';

export const SectionProjects = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        {
          projects.map((project :IProject) => <CardProject key={ crypto.randomUUID() } card={ project } />)
        }
      </Container>
    </Section>
  );
};