import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, TopBar, Title, Header } from './styles';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string,
  headerRight?: ReactNode,
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight , children }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={() => navigation.navigate('LandingPage')} >
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>
        <Title> {title} </Title>
        { headerRight }
      </Header>


      {children}
    </Container>
  );
}

export default PageHeader;