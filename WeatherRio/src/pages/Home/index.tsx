import React from 'react';
import { Image, View } from 'react-native';

import {
  Header,
  ContentTitle,
  CityName,
  UFName,
  ContainerCity,
  Container,
} from './styles';

import { CardClimate, CardInfoClimate } from '../../components';

import arrow from '../../assets/expand-arrow.png';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <ContentTitle>
            <ContainerCity>
              <CityName>São Paulo, </CityName>
              <UFName>SP</UFName>
            </ContainerCity>
            <Image
              source={arrow}
              style={{ height: 14, width: 14, marginTop: -5 }}
            />
          </ContentTitle>
        </Header>

        <CardClimate />

        <CardInfoClimate />
      </Container>
    </>
  );
};

export default Home;
