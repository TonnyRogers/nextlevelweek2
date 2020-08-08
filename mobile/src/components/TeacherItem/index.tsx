import React from 'react';
import { Image } from 'react-native';

import { 
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceHour,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText
} from './styles';
import hearOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4' }} />
        <ProfileInfo>
          <Name>Tony Amaral</Name>
          <Subject>Química</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>
        Além de testes automatizados, CI & CD, metodologia TDD e sempre busco estar por dentro das novidades, mas também já trabalhei com outras tecnologias como PHP, C#, .Net, alguns contatos com o Flutter e Dart.
        Nas horas vagas gosto de fazer trilhas, acampar, viagens em geral e sempre fotografar por onde passo.
      </Bio>
      <Footer>
        <Price>
          Preço/Hora {'   '}
          <PriceHour>R$20,00</PriceHour>
        </Price>
        <ButtonsContainer>
          <FavoriteButton style={{ backgroundColor: '#e33d3d' }} >
            {/* <Image source={hearOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </FavoriteButton>

          <ContactButton >
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;