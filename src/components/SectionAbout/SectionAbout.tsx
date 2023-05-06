import React from 'react';
import style from './SectionAbout.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import photo from '../../assets/img/about.jpg';
import { ReactComponent as IconResume } from '../../assets/img/icon/icon_download.svg';

export const SectionAbout: React.FC = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <div className={ style.block_text }>
          <p className={ style.text }>
            Фронтенд-разработчик с опытом разработки личных проектов с использованием различных технологий. Быстро самостоятельно обучаюсь и не боюсь рутинной работы.
          </p>

          <p className={ style.text }>
            Готова учиться новым технологиям, чтобы достичь лучших результатов в своей работе.  Я ценю работу в команде и готова делиться своими знаниями и опытом с другими, а также перенимать знания у более опытных коллег.
          </p>
        </div>
        <div className={ style.block_img }>
          <img
            src={ photo }
            alt="Фотография Надежды Бирюковой"
            className={ style.img }
          />

          <a href="/doc/Birukova_Nadzeya_ru.pdf" target="_blanck" title="Ссылка на резюме Бирюковой Надежды" className={ style.btn } >
            <IconResume />
            Резюме
          </a>
        </div>
      </Container>
    </Section>
  );
};