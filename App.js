import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/components/Home';
import { Checkin } from './src/components/Checkin';
import { Info } from './src/components/Info';
import { Navbar } from './src/components/Navbar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
      name="Home"
      component={Home}
      /> 
      <Stack.Screen
      name="Checkin"
      component={Checkin}
      />
       <Stack.Screen
      name="Info"
      component={Info}
      />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

