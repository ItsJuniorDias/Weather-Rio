import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 48px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
`;

export const ContentTitle = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 135px;
  height: 35px;
  /* background-color: red; */
  border-radius: 8px;
  margin-top: 16px;
`;

export const ContainerCity = styled.View`
  display: flex;
  flex-direction: row;
`;

export const CityName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 16px;
  text-align: center;

  color: #333333;
`;

export const UFName = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 16px;
  text-align: center;

  color: #333333;
`;
