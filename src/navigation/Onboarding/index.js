import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Welcome from '../../screens/Onboarding';
// import Login from '../../screens/Onboarding/login';
import Register from '../../screens/Onboarding/register';
// import VerificationCompleted from '../../screens/Onboarding/completeVerification';
// import Verification from '../../screens/Onboarding/verification';
// import ForgotPassword from '../../screens/Onboarding/ForgotPassword';
// import OTPVerification from '../../screens/Onboarding/ForgotPassword/OTPVerification';
// import ResetPassword from '../../screens/Onboarding/ForgotPassword/resetPassword';

const Stack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="screen">
      <Stack.Screen
        name="Welcome"
        options={{headerShown: false}}
        component={Welcome}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={Register}
      />
      {/* <Stack.Screen
        name="Verification"
        options={{headerShown: false}}
        component={Verification}
      />
      <Stack.Screen
        name="VerificationCompleted"
        options={{headerShown: false}}
        component={VerificationCompleted}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{headerShown: false}}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="OTP"
        options={{headerShown: false}}
        component={OTPVerification}
      />
      <Stack.Screen
        name="Reset"
        options={{headerShown: false}}
        component={ResetPassword}
      /> */}
    </Stack.Navigator>
  );
};

export default Onboarding;