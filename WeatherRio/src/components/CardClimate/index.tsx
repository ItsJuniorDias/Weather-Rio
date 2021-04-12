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

interface ICardClimate {
  id: number;
  description: string;
  temp: number;
  feelsLike?: number;
}

const CardClimate: React.FC<ICardClimate> = ({
  id,
  description,
  temp,
  feelsLike,
}) => {
  console.log(description);

  const newNumberInteger = Math.round(temp);
  const celsiusNumber = newNumberInteger - 273.15;

  const newFeelsInteger = Math.round(feelsLike);
  const celsiusFeelsNumber = newFeelsInteger - 273.15;

  const renderTitleWeather = () => {
    switch (description) {
      case 'clear sky':
        return 'Céu limpo';
      default:
        return 'Céu limpo';
    }
  };

  return (
    <Container>
      <Content>
        <Image style={{ marginLeft: -8 }} source={Rain} />
        <Climate>{renderTitleWeather()}</Climate>
        <TimeCourse>Manhã</TimeCourse>
      </Content>

      <Content spaceLeft>
        <Temperature>{Math.round(celsiusNumber)}º</Temperature>
        <ThermalSensation>
          Temp. {Math.round(celsiusFeelsNumber)}º
        </ThermalSensation>
      </Content>
    </Container>
  );
};

export default CardClimate;
