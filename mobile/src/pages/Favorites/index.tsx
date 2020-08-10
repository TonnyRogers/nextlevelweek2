import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


import api from '../../services/api';
import { Container, TeacherLister } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useNavigation, useIsFocused, useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [ teacherList, setTeacherList ] = useState([]);
  async function getTeacherList() {
    const response = await AsyncStorage.getItem('favorites');
    console.log(response);
    if(response) {
      const favorites = JSON.parse(response);
      console.log('load');
      console.log(favorites);
      setTeacherList(favorites);
    }
  }

  useEffect(() => {
    getTeacherList();
  }, []);

  return (
    <Container>
      <PageHeader title="Meus Proffys Favoritos" />
      <TeacherLister 
          data={teacherList}
          keyExtractor={(item: Teacher) => String(item.id)}
          renderItem={ ({item}) => (
            <TeacherItem teacher={item} favorited={true} callback={ () => getTeacherList} />
          ) }
          contentContainerStyle={{ paddingHorizontal:16, paddingBottom: 16 }}
      />
    </Container>
);
}

export default Favorites;