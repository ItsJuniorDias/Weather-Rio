import React from 'react';
import { View } from 'react-native';

import { Container, Content, Title, Description } from './styles';

interface ICardInfoCliamte {
  wind: number;
  humidity: number;
  visibility: number;
}

const CardInfoClimate: React.FC<ICardInfoCliamte> = ({
  wind,
  humidity,
  visibility,
}) => {
  return (
    <Container>
      <Content>
        <Title>Vento</Title>
        <Description>{wind} m/h</Description>
      </Content>

      <Content>
        <Title>Humidade</Title>
        <Description>{humidity} km</Description>
      </Content>

      <Content>
        <Title>Visibilidade</Title>
        <Description>{visibility / 100} %</Description>
      </Content>
    </Container>
  );
};

export default CardInfoClimate;
