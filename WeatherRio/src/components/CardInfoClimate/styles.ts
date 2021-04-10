import styled from 'styled-components/native';

export const Container = styled.View`
  width: 87%;
  height: 80px;
  background-color: #ffffff;
  margin-top: 32px;
  border-radius: 10px;
  elevation: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.View`
  width: 75px;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 13px;
  line-height: 14px;
  color: #808080;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  line-height: 16px;
  margin-top: 8px;
  color: #333333;
`;
