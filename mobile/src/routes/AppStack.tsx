import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import LandingPage from '../pages/LandingPage';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

function AppStack() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Landing">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="GiveClasses" component={GiveClasses} />
        <Stack.Screen name="Study" component={StudyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack;