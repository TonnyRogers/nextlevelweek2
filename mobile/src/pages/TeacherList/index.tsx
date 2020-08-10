import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import { 
    Container, 
    TeacherLister, 
    SearchForm,  
    Label,
    Input,
    InputGroup,
    InputBlock,
    FilterButton,
    SubmitButton,
    SubmitButtonText
} from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible ] = useState(false);
  const [ teacherList, setTeacherList ] = useState([]);
  const [ subject, setSubject ] = useState('');
  const [ weekDay, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('');
  const [ favorites, setFavorites ] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then( response => {
      console.log(response);
      if(response) {
        const favoritesList = JSON.parse(response);
        const favoritesListIds = favoritesList.map((teacher: Teacher) => (teacher.id));
        setFavorites(favoritesListIds); 
      }
    });
  }

  useEffect(() => {
    async function getTeacherList() {
      const response = await api.get('/classes');
      setTeacherList(response.data);
    }

    getTeacherList();
    loadFavorites();
  }, []);

  async function searchTeachers(){
    const response = await api.get('/classes',{ params: {
      week_day: weekDay,
      time,
      subject
    } });

    setTeacherList(response.data);
    toggleFiltersVisible();
  }

  function toggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  return (
      <Container>
        <PageHeader 
          title="Proffys Disponiveis" 
          headerRight={
            <FilterButton onPress={toggleFiltersVisible}> 
              <Feather name="filter" size={20} color="#FFF" /> 
            </FilterButton>
          }
        >
          { isFilterVisible && (
            <SearchForm>
            <Label>Matéria</Label>
            <Input 
              placeholder="Qual a matéria?" 
              value={subject}
              onChangeText={setSubject}
            />

            <InputGroup>

              <InputBlock>
                <Label>Dia da semana</Label>
                <Input 
                  placeholder="Qual o dia?" 
                  value={weekDay}
                  onChangeText={setWeekDay}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input 
                  placeholder="Qual horário?" 
                  value={time}
                  onChangeText={setTime}
                />
              </InputBlock>

            </InputGroup>

            <SubmitButton onPress={() => searchTeachers()}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
          ) }
        </PageHeader>
        <TeacherLister 
          data={teacherList}
          keyExtractor={(item: Teacher) => String(item.id)}
          renderItem={ ({item}) => (
            <TeacherItem teacher={item} favorited={favorites.includes(item.id)} />
          ) }
          contentContainerStyle={{ paddingHorizontal:16, paddingBottom: 16 }}
        />
      </Container>
  );
}

export default TeacherList;