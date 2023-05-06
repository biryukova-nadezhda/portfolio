import React from 'react';
import style from './CardProject.module.css';
import { IProject } from '../../assets/data/projects';

interface CardProjectProps {
  card: IProject,
};

export const CardProject: React.FC<CardProjectProps> = ({ card }) => {
  return (
    <article className={ style.card }>
      <img
        src={ card.srcImgShort }
        alt={ `Изображение сайта ${ card.title }` }
        className={ style.img }
      />

      <div className={ style.content }>
        <h3 className={ style.title }>{ card.title }</h3>

        <p className={ style.explanation }>
          { card.description }
        </p>

        <div className={ style.block_link }>
          <a
            href={ card.links.deploy }
            rel='noreferrer'
            target='_blank'
            className={ style.link }
          >Сайт</a>
          <a
            href={ card.links.git }
            rel='noreferrer'
            target='_blank'
            className={ style.link }
          >GitHub</a>
        </div>
      </div>
    </article>
  );
};