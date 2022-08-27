import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SearchField } from '../../components/TextField';
import Search from '../../screens/dashboard/home/search';
import BackButton from '../custom/BackButton';
import ViewEvent from '../../screens/dashboard/home/viewEvent';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search" headerMode="screen">
      <Stack.Screen
        name="Search"
        options={({navigation: {goBack}}) => ({
          headerTitle: () => <SearchField />,
          headerLeft: () => <BackButton goBack={() => goBack()} />,
        })}
        component={Search}
      />
      <Stack.Screen
        name="ViewEvent"
        // options={({navigation: {goBack}}) => ({
        //   headerLeft: () => <BackButton goBack={() => goBack()} />,
        // })}
        options={{headerShown: false}}
        component={ViewEvent}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
