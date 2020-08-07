import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: Poppins_400Regular;
`;

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const StudyButton = styled(RectButton)`
  height: 150px;
  width: 48%;
  background: #9871f5;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const StudyButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #FFF;
  font-size: 20px;
`;

export const GiveClassesButton = styled(RectButton)`
  height: 150px;
  width: 48%;
  background: #04d361;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const GiveClassesButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #FFF;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;

