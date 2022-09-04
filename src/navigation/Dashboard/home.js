import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SearchField } from '../../components/TextField';
import Search from '../../screens/dashboard/home/search';
import BackButton from '../custom/BackButton';
import ViewEvent from '../../screens/dashboard/home/viewEvent';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search" headerMode="screen">
      <Stack.Screen
        name="Search"
        options={({navigation: {goBack}}) => ({
          headerTitle: () => <SearchField />,
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} />
            ) : null,
        })}
        component={Search}
      />
      <Stack.Screen
        name="ViewEvent"
        options={{headerShown: false}}
        component={ViewEvent}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
