import React from 'react';
import { View } from 'react-native';

import { Container, Content, Title, Description } from './styles';

const CardInfoClimate: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Vento</Title>
        <Description>33 m/h</Description>
      </Content>

      <Content>
        <Title>Humidade</Title>
        <Description>23 km</Description>
      </Content>

      <Content>
        <Title>Visibilidade</Title>
        <Description>64 %</Description>
      </Content>
    </Container>
  );
};

export default CardInfoClimate;
