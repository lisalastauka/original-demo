import React from 'react';
import { Container, Title, Wrapper } from './../Main/styled';
import { Platform, Box, Left, Right } from './styled';
import { isMobile } from './../../utils/helpers';
import { LogoSmall } from './../Logo';
import { Translate as T } from 'react-i18nify';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <Wrapper white className='section_work'>
        <Container>
          <Title marine>
            <Box>
              <Left >
                <T value="howItWorks.title.left" />
              </Left>
              {!isMobile && <LogoSmall />}
              <Right>
                {isMobile && <LogoSmall />}
                <T value="howItWorks.title.right" />
              </Right>
            </Box>
          </Title>
          <Platform desktop>
            <T value="howItWorks.img.main" dangerousHTML />
          </Platform>
          <Platform mobile>
            <T value="howItWorks.img.main_mobile" dangerousHTML />
          </Platform>
        </Container>
      </Wrapper>
    );
  }
}
