import telegram from '../img/icon/icon_telegram.svg';
import linked from '../img/icon/icon_linkedin.svg';
import github from '../img/icon/icon_github_contact.svg';
import instagram from '../img/icon/icon_instagram.svg';

export interface IContacts {
  name: string,
  imgSrc: string,
  href: string
}

export const contacts: IContacts[] = [
  {
    name: 'Telegram',
    imgSrc: telegram,
    href: 'https://t.me/BirukovaNadzeya'
  },
  {
    name: 'LinkedIn',
    imgSrc: linked,
    href: 'https://www.linkedin.com/in/nadzeya-birukova/'
  },
  {
    name: 'GitHub',
    imgSrc: github,
    href: 'https://github.com/biryukova-nadezhda'
  },
  {
    name: 'Instagram',
    imgSrc: instagram,
    href: 'https://instagram.com/nadzeyka_.96?igshid=ZDdkNTZiNTM='
  },
];
