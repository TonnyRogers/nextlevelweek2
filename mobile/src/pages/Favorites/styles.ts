import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;
`;

export const TeacherLister = styled(FlatList)`
  margin-top: -40px;
`;