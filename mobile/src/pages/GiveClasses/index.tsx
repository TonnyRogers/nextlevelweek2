import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { 
  Container,
  Content,
  Title,
  Description,
  OkButton,
  OkButtonText
} from './styles';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content resizeMode="contain" source={giveClassesBgImage}>
        <Title>
          Quer ser um Proffy? 
        </Title>
        <Description>
          Para começar, você precisa se cadastrar como professor
          na plataforma web.
        </Description>
      </Content>

      <OkButton onPress={() => navigation.goBack()}>
        <OkButtonText>Tudo Bem</OkButtonText>
      </OkButton>
    </Container>
  );
}

export default GiveClasses;