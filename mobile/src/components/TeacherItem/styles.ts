import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  background: #FFF;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 14px;
  margin: 0 24px;
  line-height: 24px;
`;

export const Footer = styled.View`
  background: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 14px;
`;

export const PriceHour = styled.Text`
  font-family: Archivo_700Bold;
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)`
   background: ${ props => props.favorited ? '#e33d3d' : '#8257e5' } ;
   width: 56px;
   height: 56px;
   border-radius: 8px;
   justify-content: center;
   align-items: center;
   margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background: #04D361;
  flex: 1;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  flex-direction: row;
`;

export const ContactButtonText = styled.Text`
  color: #FFF;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;
