import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { PersonalCard, Image, Description, Name } from './styled';
import { Dashed } from './../Main/styled';

export default ({name, description, list, image, linked, fb, logos, grey}) => (
  <PersonalCard xs={12} md={4} lg={6}>
    <Row between='xs'>
      <Col xs={12} lg={6}>
        <Row>
          <Col xs={7} sm={5} md={12}>
            <Dashed nomargin grey={grey}>
              <Image src={image}/>
            </Dashed>
          </Col>
          <Col xs={5} sm={7} style={{display: 'flex', alignItems: 'flex-end'}}>
            { linked &&
              <a href={linked} target='_blank'>
                <img  src='/images/logos/ln.svg'/>
              </a> }
            { fb &&
              <a href={fb} target='_blank'>
                <img src='/images/logos/facebook-3.svg'/>
              </a> }
            </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6}>
      <Name>{name}</Name>
      <Description>{description}</Description>
        <ul>
          {list.map((li) => <li>{li}</li>)}
        </ul>
        <img src={logos} />
      </Col>
    </Row>
  </PersonalCard>
);
