import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SearchField } from '../../components/TextField';
import Home from '../../screens/dashboard/profile';
import Profile from '../../screens/dashboard/profile/EditProfile';
import Contact from '../../screens/dashboard/profile/contacts';
import Repository from '../../screens/dashboard/profile/repository';
import Resource from '../../screens/dashboard/profile/resources';
import Training from '../../screens/dashboard/profile/training';
import Literature from '../../screens/dashboard/profile/literature';
import CME from '../../screens/dashboard/profile/cme';
import BackButton from '../custom/BackButton';
import {Avatar, Text} from 'react-native-paper';
import {Platform, StyleSheet} from 'react-native';
import { colors } from '../../theme';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search" headerMode="screen">
      <Stack.Screen
        name="Home"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
          headerStyle: {
            // backgroundColor: colors.white,
          },
          headerTitle: () => <Text style={classes.headerText}>Profile</Text>,
        })}
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
        })}
        component={Profile}
      />
      <Stack.Screen
        name="Contact"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
          headerTitle: () => <Text style={classes.headerText}>Contacts</Text>,
        })}
        component={Contact}
      />
      <Stack.Screen
        name="Repository"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
          headerTitle: () => <Text style={classes.headerText}>Repository</Text>,
        })}
        component={Repository}
      />
      <Stack.Screen
        name="Resources"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
          headerTitle: () => <Text style={classes.headerText}>Resource</Text>,
        })}
        component={Resource}
      />
      <Stack.Screen
        name="Training"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
          headerTitle: () => <Text style={classes.headerText}>Training</Text>,
        })}
        component={Training}
      />
      <Stack.Screen
        name="Literature"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
          headerTitle: () => <Text style={classes.headerText}>Literature</Text>,
        })}
        component={Literature}
      />
      <Stack.Screen
        name="CME"
        options={({navigation: {goBack}}) => ({
          headerLeft: () =>
            Platform.OS === 'ios' ? (
              <BackButton goBack={() => goBack()} color={colors.white} />
            ) : null,
          headerTitle: () => <Text style={classes.headerText}>CME</Text>,
        })}
        component={CME}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const classes = StyleSheet.create({
  headerText: {
    fontWeight: '500',
    fontSize: 15,
    color: colors.white
  },
});