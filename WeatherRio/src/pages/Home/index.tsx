import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';

import { IWeather } from '../../store/modules/weather/types';

import { useSelector, useDispatch } from 'react-redux';
import { setWeatherData } from '../../store/modules/weather/actions';

import api from '../../services/api';

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
  const [dataWeather, setDataWeather] = useState<IWeather[]>([]);

  const weather = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get('/weather?q=Sao%20Paulo&appid=cab0b063b14e7ebbff4cfbde7816ba52')
      .then(response => {
        setDataWeather(response.data);
        dispatch(setWeatherData(response.data));
      });
  }, [dispatch]);

  console.log(weather);

  console.log(dataWeather);

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
