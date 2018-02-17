import React from 'react';
import { howItWorks } from './../../constants/texts';
import media from '../../styled-components/media';
import { Container, Title, Wrapper } from './../Main/styled';
import { Platform, Box, Left, Right } from './styled';
import { isMobile } from './../../utils/helpers';
import { LogoSmall } from './../Logo';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <Wrapper white className='section_work'>
        <Container>
          <Title marine>
            <Box horizontal>
              <Left >
                КАК РАБОТАЕТ
              </Left>
              {!isMobile && <LogoSmall />}
              <Right>
                {isMobile && <LogoSmall />}
                OIN SPACE
              </Right>
            </Box>
          </Title>
          <Platform desktop src='/images/main.svg' />
          <Platform mobile src='/images/main_mobile.svg' />
        </Container>
      </Wrapper>
    );
  }
}
