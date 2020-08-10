import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { 
  Container, 
  Banner, 
  Title, 
  TitleBold,
  ButtonsContainer,
  StudyButton,
  StudyButtonText,
  GiveClassesButton,
  GiveClassesButtonText,
  TotalConnections
} from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const LandingPage: React.FC = () => {
  const navigation = useNavigation();
  const [ totalConnections, setTotalConnections ] = useState(0);

  useEffect(() => {
    async function getTeacherList() {
      const response = await api.get('/connections');
      setTotalConnections(response.data.total);
    }

    getTeacherList();
  }, []);

  return (
    <Container>
      <Banner source={landingImg} />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold> O que deseja fazer ?</TitleBold>
      </Title>

      <ButtonsContainer>
        <StudyButton onPress={() => navigation.navigate('Study')}>
          <Image source={studyIcon} />
          <StudyButtonText>Estudar</StudyButtonText>
        </StudyButton>
        <GiveClassesButton onPress={() => navigation.navigate('GiveClasses')}>
          <Image source={giveClassesIcon} />
          <GiveClassesButtonText>Dar Aulas</GiveClassesButtonText>
        </GiveClassesButton>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default LandingPage;