import styled from 'styled-components/native';

interface SpaceProps {
  spaceLeft?: void;
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 87%;
  height: 168px;
  background-color: #5773ff;
  border-radius: 10px;
  margin-top: 32px;
  elevation: 1;
`;

export const Content = styled.View<SpaceProps>`
  height: 132px;
  width: 42%;

  margin-right: ${({ spaceLeft }) => (spaceLeft ? '-16px' : '0px')};
`;

export const Climate = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-top: 8px;
`;

export const TimeCourse = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 8px;
  color: #ffffff;
`;

export const Temperature = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;

  color: #ffffff;
`;

export const ThermalSensation = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
