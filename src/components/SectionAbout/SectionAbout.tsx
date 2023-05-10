import React from 'react';
import style from './SectionAbout.module.css';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import photo from '../../assets/img/about.jpg';

export const SectionAbout: React.FC = () => {
  return (
    <Section className={ style.section }>
      <Container className={ style.container }>
        <div className={ style.block_text }>
          <p className={ style.text }>
            Привет! Меня зовут Надежда и я  начинающий фронтенд-разработчик с опытом создания личных проектов. Мое увлечение веб-разработкой началось не так давно, когда я увидела, как из обычного макета можно создать живой сайт. Это мгновенно покорило меня и стало стартом моей карьеры в IT.
          </p>

          <p className={ style.text }>
            Мой опыт в разработке личных проектов позволил мне стать более самостоятельной и находчивой. Я научилась быстро решать проблемы и исправлять ошибки, не боясь рутинной работы. В то же время, я люблю учиться новым технологиям, чтобы достичь лучших результатов в своей работе.
          </p>

          <p className={ style.text }>
            Быстро самостоятельно обучаюсь и готова делиться своими знаниями и опытом с другими. Я ценю работу в команде и уверена, что взаимодействие и обмен опытом с более опытными коллегами помогут мне развиваться профессионально.
          </p>

          <p className={ style.text }>
            Я открыта для новых вызовов и готова использовать все возможности, которые представятся в моей работе. С нетерпением жду новых возможностей, чтобы расти и развиваться вместе с командой!
          </p>
        </div>
        <div className={ style.block_img }>
          <img
            src={ photo }
            alt="Фотография Надежды Бирюковой"
            className={ style.img }
          />

          <a href="/doc/Birukova_Nadzeya_ru.pdf" target="_blanck" title="Ссылка на резюме Бирюковой Надежды" className={ style.btn } >
            Резюме
          </a>
        </div>
      </Container>
    </Section>
  );
};