import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Content,
  Climate,
  TimeCourse,
  Temperature,
  ThermalSensation,
} from './styles';

import Rain from '../../assets/Rain.png';

const CardClimate: React.FC = () => {
  return (
    <Container>
      <Content>
        <Image style={{ marginLeft: -8 }} source={Rain} />
        <Climate>Chuva Pesada</Climate>
        <TimeCourse>Manhã</TimeCourse>
      </Content>

      <Content spaceLeft>
        <Temperature>29º</Temperature>
        <ThermalSensation>Temp. 30º</ThermalSensation>
      </Content>
    </Container>
  );
};

export default CardClimate;
