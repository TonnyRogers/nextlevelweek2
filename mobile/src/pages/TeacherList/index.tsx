import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View,Text } from 'react-native';
import { Feather } from '@expo/vector-icons';


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
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible ] = useState(false);

  return (
      <Container>
        <PageHeader 
          title="Proffys Disponiveis" 
          headerRight={
            <FilterButton onPress={() => setIsFilterVisible(!isFilterVisible)}> 
              <Feather name="filter" size={20} color="#FFF" /> 
            </FilterButton>
          }
        >
          { isFilterVisible && (
            <SearchForm>
            <Label>Matéria</Label>
            <Input placeholder="Qual a matéria?" />

            <InputGroup>

              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholder="Qual o dia?" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual horário?" />
              </InputBlock>

            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
          ) }
        </PageHeader>
        <TeacherLister contentContainerStyle={{ paddingHorizontal:16, paddingBottom: 16 }}>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </TeacherLister>
      </Container>
  );
}

export default TeacherList;