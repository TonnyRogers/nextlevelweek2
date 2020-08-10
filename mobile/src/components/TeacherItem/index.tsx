import React, { useState } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
import hearOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

export interface Teacher {
    id: number,
    name: string,
    avatar: string,
    subject: string,
    bio: string,
    cost: number,
    whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher,
  favorited: boolean,
  callback: any,
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited, callback }) => {
  const [ isFavorited, setIsFavorited ] = useState<boolean>(favorited);

  async function handleLinkToWhatsapp(teacherId: number) {
    await api.post('/connections', { user_id: teacherId });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if( favorites ) {
      favoritesArray = JSON.parse(favorites);
    }

    if(isFavorited ) {
      const filteredIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        if(teacherItem.id === teacher.id) {
          return true;
        }
      });

      favoritesArray.splice(filteredIndex,1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar || `https://api.adorable.io/avatars/285/${teacher.name}.png` }} />
        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>
      <Footer>
        <Price>
          Preço/Hora {'   '}
          <PriceHour>R${teacher.cost}</PriceHour>
        </Price>
        <ButtonsContainer>
          <FavoriteButton onPress={handleToggleFavorite} favorited={isFavorited} >
            {isFavorited
              ? (<Image source={unfavoriteIcon} />)
              : (<Image source={hearOutlineIcon} />)}
            
          </FavoriteButton>

          <ContactButton onPress={() => handleLinkToWhatsapp(teacher.id)} >
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;