import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tab';
import HomeStack from './home';

const Stack = createNativeStackNavigator();

const Dashboard = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen
        name="HomeStack"
        options={{headerShown: false}}
        component={HomeStack}
      />
    </Stack.Navigator>
  );
};

export default Dashboard;
