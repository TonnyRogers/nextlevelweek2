import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Content = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #FFF;
  font-size: 32px;
  line-height: 37px;
  max-width: 240px;
`;

export const Description = styled.Text`
  font-family: Poppins_400Regular;
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
`;

export const OkButton = styled(RectButton)`
  margin: 40px 0;
  background: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OkButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #FFF;
  font-size: 16px;
`;