/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';

import { IWeather } from '../../store/modules/weather/types';

import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { setWeatherDataRequest } from '../../store/modules/weather/actions';

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
import { IState } from '../../store';

const Home: React.FC = () => {
  const weather = useSelector<IState, IWeather[]>(state => state.weather.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWeatherDataRequest());
  }, [dispatch]);

  console.log(weather);

  const { id } = weather;
  const { feels_like, temp } = weather.main;
  const { description } = weather.weather[0];

  console.log(id, temp, description, feels_like);

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

        <CardClimate
          id={id}
          feelsLike={feels_like}
          temp={temp}
          description={description}
        />

        <CardInfoClimate />
      </Container>
    </>
  );
};

export default Home;
