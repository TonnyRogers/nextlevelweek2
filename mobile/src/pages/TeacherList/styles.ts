import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;
`;

export const TeacherLister = styled.ScrollView`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput.attrs(
  {
    placeholderTextColor: '#C1bccc',
  }
)`
  height:54px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const FilterButton = styled(RectButton)`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: #d4c2ff;
`;

export const SubmitButton = styled(RectButton)`
  background: #04D361;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubmitButtonText = styled.Text`
  color: #FFF;
  font-family: Archivo_700Bold;
  font-size: 16px;
`;