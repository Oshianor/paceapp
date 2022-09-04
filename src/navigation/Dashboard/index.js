import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tab';
import HomeStack from './home';
import ProfileStack from './profile';

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
      <Stack.Screen
        name="ProfileStack"
        options={{headerShown: false}}
        component={ProfileStack}
      />
    </Stack.Navigator>
  );
};

export default Dashboard;
