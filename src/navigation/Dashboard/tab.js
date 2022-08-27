import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Avatar} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/dashboard/home';
import InboxScreen from '../../screens/dashboard/inbox';
import EventScreen from '../../screens/dashboard/events';
import MessageScreen from '../../screens/dashboard/message';
import {colors} from '../../theme';
import { HomeHeader } from '../../components/Header';
import img from '../../image';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary.main,
        tabBarStyle: {backgroundColor: colors.primary.light},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation: {navigate}, route}) => ({
          headerRight: () => (
            <TouchableOpacity
              style={classes.right}
              onPress={() => navigate('Login')}>
              <Avatar.Image size={40} source={img.setupBG} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={classes.left}
              onPress={() => navigate('HomeStack', {route: 'Search'})}
            >
              <Ionicons
                name="search-outline"
                size={30}
                color={colors.primary.light}
              />
            </TouchableOpacity>
          ),
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="InboxScreen"
        component={InboxScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Events',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-check"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Message',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="forum" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const classes = StyleSheet.create({
  right: {
    marginRight: 15,
  },
  left: {
    marginLeft: 15,
    // marginRight: 15,
  },
});

// headerShown: false,
          // header: () => (
          //   <HomeHeader />
          // ),