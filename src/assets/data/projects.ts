import antic_short from '../img/projects/antic_short.png';
import antic from '../img/projects/antic.png';
import brainCards_short from '../img/projects/brainCards_short.png';
import brainCards from '../img/projects/brainCards.png';
import floor_short from '../img/projects/floor_short.png';
import floor from '../img/projects/floor.png';
import yourMeal_short from '../img/projects/yourMeal_short.png';
import yourMeal from '../img/projects/yourMeal.png';

export interface IProject {
  title: string,
  description: string,
  srcImg: string,
  srcImgShort: string,
  links: {
    git: string,
    deploy: string
  }
}

export const projects: IProject[] = [
  {
    title: 'Brain cards',
    description: 'Сервис по запоминанию слов, написанный на JavaScript, позволяющий пользователям добавлять, редактировать и удалять существующиее категории. В каждой категории слов имеется режим изучения, в виде поворотных карточек для наиболее комфортного процесса изучения',
    srcImg: brainCards,
    srcImgShort: brainCards_short,
    links: {
      git: 'https://github.com/biryukova-nadezhda/brainCards',
      deploy: 'https://biryukova-nadezhda.github.io/brainCards/',
    },
  },

  {
    title: 'Теплый пол',
    description: 'Адаптивный сайт компании по производству теплых полов на React JS, помогающий легко и удобно ознакомиться с компанией и предоставляемыми услугами. Наличие формы заказа звонка, а также калькулятора предварительного рассчета стоимости услуги, облегчает пользователям выбор.',
    srcImg: floor,
    srcImgShort: floor_short,
    links: {
      git: 'https://github.com/biryukova-nadezhda/underfloor-heating',
      deploy: 'https://main--dulcet-platypus-4f9a5d.netlify.app/',
    },
  },

  {
    title: 'Your Meal',
    description: 'Адаптивный сайт по продаже фастфуда, реализованный на React JS с использованием Redux Toolkit, позволяющий пользователям легко и быстро ознакомиться с ассортиментом, а также заказывать выбранные позиции онлайн.',
    srcImg: yourMeal,
    srcImgShort: yourMeal_short,
    links: {
      git: 'https://github.com/biryukova-nadezhda/burger-react',
      deploy: 'https://master--grand-starship-c16270.netlify.app/',
    },
  },

  {
    title: 'Antic',
    description: 'Адаптивный сайт компании, которая занимается продаже мебели и гарнитуры к ней, реализованный на JavaScript с использованием классового подхода, а акже на препроцессоре SCSS для стилизации элементов. Сайт позволяет ознакомиться с ассортиментом продукции и связаться с компанией.',
    srcImg: antic,
    srcImgShort: antic_short,
    links: {
      git: 'https://github.com/biryukova-nadezhda/Antic',
      deploy: 'https://biryukova-nadezhda.github.io/Antic/#',
    },
  }, 
];
