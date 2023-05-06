import html from '../img/icon/icon_html.svg';
import css from '../img/icon/icon_css.svg';
import js from '../img/icon/icon_js.svg';
import ts from '../img/icon/icon_ts.svg';
import scss from '../img/icon/icon_scss.svg';
import react from '../img/icon/icon_react.svg';
import redux from '../img/icon/icon_redux.svg';
import npm from '../img/icon/icon_npm.svg';
import yarn from '../img/icon/icon_yarn.svg';
import jest from '../img/icon/icon_jest.svg';
import eslint from '../img/icon/icon_eslint.svg';
import webpack from '../img/icon/icon_webpack.svg';
import git from '../img/icon/icon_git.svg';
import github from '../img/icon/icon_github.svg';
import vercel from '../img/icon/icon_vercel.svg';
import json from '../img/icon/icon_json.svg';
import figma from '../img/icon/icon_figma.svg';
import photoshop from '../img/icon/icon_photoshop.svg';
import appveyor from '../img/icon/icon_appveyor.svg';

export interface ISkills {
  name: string,
  imgSrc: string
}

export const skills: ISkills[] = [
  {
    name: 'HTML',
    imgSrc: html,
  },
  {
    name: 'CSS',
    imgSrc: css,
  },
  {
    name: 'JavaScript',
    imgSrc: js,
  },
  {
    name: 'TypeScript',
    imgSrc: ts,
  },
  {
    name: 'SCSS',
    imgSrc: scss,
  },
  {
    name: 'React',
    imgSrc: react,
  },
  {
    name: 'Redux Toolkit',
    imgSrc: redux,
  },
  {
    name: 'NPM',
    imgSrc: npm,
  },
  {
    name: 'Yarn',
    imgSrc: yarn,
  },
  {
    name: 'Jest',
    imgSrc: jest,
  },
  {
    name: 'ESLint',
    imgSrc: eslint,
  },
  {
    name: 'Webpack',
    imgSrc: webpack,
  },
  {
    name: 'Git',
    imgSrc: git,
  },
  {
    name: 'GitHub',
    imgSrc: github,
  },
  {
    name: 'Vercel',
    imgSrc: vercel,
  },
  {
    name: 'JSON',
    imgSrc: json,
  },
  {
    name: 'Figma',
    imgSrc: figma,
  },
  {
    name: 'Adobe Photoshop',
    imgSrc: photoshop,
  },
  {
    name: 'AppVeyor',
    imgSrc: appveyor,
  }
];