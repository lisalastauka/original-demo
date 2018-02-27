import React from 'react';
import { GoTo, Container, SidebarContainer } from './styled';
import { Translate as T } from 'react-i18nify';

const navigation = [
  {
    title: <T value="navigation.tokens" />,
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
    title: <T value="navigation.work" />,
    className: 'section_work',
  },
  // {
  //   title: 'COMPANIES',
  //   className: 'section_companies',
  // },
  {
    title: <T value="navigation.roadmap" />,
    className: 'section_roadmap',
  },
  {
    title: <T value="navigation.speakers" />,
    className: 'section_speakers',
  },
  {
    title: <T value="navigation.founders" />,
    className: 'section_founders',
  },
  {
    title: <T value="navigation.team" />,
    className: 'section_team',
  },
  {
    title: <T value="navigation.advisors" />,
    className: 'section_advisors',
  },
  // {
  //   title: 'PARTNERS',
  //   className: 'section_partners',
  // },
  {
    title: <T value="navigation.tokenSale" />,
    className: 'section_tokenSale',
  },
  {
    title: <T value="navigation.summary" />,
    className: 'section_summary',
  },
  {
    title: <T value="navigation.app" />,
    className: 'section_app',
  },
  {
    title: <T value="navigation.documents" />,
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
