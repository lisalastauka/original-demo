import React from 'react';
import { GoTo, Container, SidebarContainer } from './styled';
import media from '../../styled-components/media';

const navigation = [
  {
    title: 'ТОКЕНЫ',
    className: 'section_home',
  },
  // {
  //   title: 'PROMO',
  //   className: 'section_promo',
  // },
  // {
  //   title: 'WHAT IS ORIGINAL',
  //   className: 'section_whatIs',
  // },
  {
    title: 'КАК РАБОТАЕТ OIN',
    className: 'section_work',
  },
  // {
  //   title: 'COMPANIES',
  //   className: 'section_companies',
  // },
  // {
  //   title: 'ADVISERS',
  //   className: 'section_advisers',
  // },
  {
    title: 'ДОРОЖНАЯ КАРТА',
    className: 'section_roadmap',
  },
  {
    title: 'ОСНОВАТЕЛИ',
    className: 'section_founders',
  },
  {
    title: 'КОМАНДА',
    className: 'section_team',
  },
  {
    title: 'КОНСУЛЬТАНТЫ',
    className: 'section_advisers',
  },
  // {
  //   title: 'PARTNERS',
  //   className: 'section_partners',
  // },
  {
    title: 'ПРОДАЖА ТОКЕНОВ',
    className: 'section_tokenSale',
  },
  {
    title: 'ПРОСТРАНСТВО OIN',
    className: 'section_summary',
  },
  {
    title: 'ПРИЛОЖЕНИЕ',
    className: 'section_app',
  },
  {
    title: 'ДОКУМЕНТЫ',
    className: 'section_documents',
  },
  // {
  //   title: 'CONTACTS',
  //   className: 'section_contact',
  // },
];

const scrollTo = (selector) => {
  const elem = document.querySelector(`.${selector}`);

  const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  console.log(width);

  window.scroll({ top: elem.offsetTop - (width < 768 ? 75 : 150), left: window.scrollX, behavior: 'auto' });
}

export default (props) => (
  <Container>
    {navigation.map(section => (
      <GoTo white={props.white}
        key={section.className}
        onClick={() => scrollTo(section.className)}
      >
        {section.title}
      </GoTo>
    ))}
  </Container>
);

export const Sidebar = ({open, closeTab}) => (
  <SidebarContainer isOpen={open}>
    {navigation.map(section => (
      <GoTo
        key={section.className}
        onClick={() => {scrollTo(section.className); closeTab();}}
      >
        {section.title}
      </GoTo>
    ))}
  </SidebarContainer>
);
