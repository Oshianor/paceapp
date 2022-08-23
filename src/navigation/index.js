import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './Onboarding';
// import Dashboard from './Dashboard';
import {useDispatch, useSelector} from 'react-redux';
import {accountAction} from '../store/actions';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {token} = useSelector(({account}) => account);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // GetAuth().then(result => {
    //   dispatch(accountAction.setToken(result));
    // });
  }, []);

  
  return (
    <Stack.Navigator initialRouteName="Onboarding" headerMode="float">
      {/* {token ? (
        <Stack.Screen
          name="Dashboard"
          options={{headerShown: false}}
          component={Dashboard}
        />
      ) : (
        <Stack.Screen
          name="Onboarding"
          options={{headerShown: false}}
          component={Onboarding}
        />
      )} */}
      <Stack.Screen
        name="Onboarding"
        options={{headerShown: false}}
        component={Onboarding}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
