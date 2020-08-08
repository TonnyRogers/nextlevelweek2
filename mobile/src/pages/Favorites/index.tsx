import React from 'react';
import { View } from 'react-native';

import { Container, TeacherLister } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus Proffys Favoritos" />
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

export default Favorites;