import React from 'react';
import classNames from 'classnames';
import style from './Section.module.css';

interface SectionProps {
  children: React.ReactNode,
  className?: string,
}

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={ classNames(style.section, className) }>
      { children }
    </section>
  )
}