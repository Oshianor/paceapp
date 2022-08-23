import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Caption, Subheading} from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {APP_HEIGHT, colors} from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {accountAction} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import { cloudfront } from "../../api";
import { version } from "../../../package.json";

const CustomDrawerContentComponent = ({navigation: {navigate}}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector(({account}) => account);

  return (
    <SafeAreaView style={classes.root}>
      {user && (
        <View style={classes.header}>
          {user.img ? (
            <Avatar.Image
              source={{uri: `${cloudfront}${user.img}`}}
              size={100}
            />
          ) : (
            <Avatar.Text
              label={user ? user.name.substring(0, 2).toUpperCase() : 'UK'}
              size={100}
            />
          )}
          <Subheading style={classes.headerText}>
            {user ? user.name : ''}
          </Subheading>
        </View>
      )}

      <View style={classes.body}>
        <ScrollView>
          <TouchableOpacity
            style={classes.buttonRoot}
            onPress={() => navigate('Home', { screen: "Home" })}>
            <Icon name="home-outline" size={20} style={classes.buttonIcon} />
            <Subheading style={classes.buttonText}>Home</Subheading>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.buttonRoot}
            onPress={() => navigate('Shipment')}>
            <Icon name="truck" size={20} style={classes.buttonIcon} />
            <Subheading style={classes.buttonText}>Shipping</Subheading>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.buttonRoot}
            onPress={() => navigate('Payment')}>
            <Icon
              name="credit-card-outline"
              size={20}
              style={classes.buttonIcon}
            />
            <Subheading style={classes.buttonText}>Payments</Subheading>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.buttonRoot}
            onPress={() => navigate('Profile')}>
            <Icon
              name="account-circle-outline"
              size={20}
              style={classes.buttonIcon}
            />
            <Subheading style={classes.buttonText}>My Profile</Subheading>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.buttonRoot}
            onPress={() => navigate('AddressBook')}>
            <Icon name="contacts" size={20} style={classes.buttonIcon} />
            <Subheading style={classes.buttonText}>Address Book</Subheading>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.buttonRoot}
            onPress={() => navigate('Settings')}>
            <Icon name="cog-outline" size={20} style={classes.buttonIcon} />
            <Subheading style={classes.buttonText}>Settings</Subheading>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.buttonRoot}
            onPress={() => navigate('Support')}>
            <Icon
              name="help-circle-outline"
              size={20}
              style={classes.buttonIcon}
            />
            <Subheading style={classes.buttonText}>Help & Support</Subheading>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={{bottom: 10, position: 'absolute', paddingHorizontal: 20}}>
        <TouchableOpacity
          style={classes.buttonRoot}
          onPress={() => {
            AsyncStorage.clear();
            dispatch(accountAction.setToken(null));
            dispatch(accountAction.setUserData(null));
            // navigate('Onboarding');
          }}>
          <Icon name="logout" size={20} style={classes.buttonIcon} />
          <Subheading style={classes.buttonText}>Logout</Subheading>
        </TouchableOpacity>
        <Caption style={classes.version}>v{version}</Caption>
      </View>
      {/* <Logout open={open} setOpen={() => setOpen(false)} /> */}
    </SafeAreaView>
  );
};

const classes = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary.main,
  },
  header: {
    backgroundColor: colors.primary.main,
    height: APP_HEIGHT / 4,
    marginLeft: 20,
    // width: 313,
    justifyContent: 'center',
    borderBottomColor: colors.hr.main,
    borderBottomWidth: 0.5,
  },
  headerImg: {
    height: 33.08,
    width: 149,
  },
  headerText: {
    color: colors.white,
    marginVertical: 5,
    textTransform: 'capitalize',
  },
  body: {
    backgroundColor: colors.primary.main,
    paddingHorizontal: 20,
    // flex: 10,
    height: APP_HEIGHT / 1.5,
    // marginBottom: 100
  },
  buttonRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  buttonIcon: {
    marginRight: 10,
    color: '#FFF',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '300',
  },
  version: {
    color: "white",
    opacity: .5,
  },
});

export default CustomDrawerContentComponent;
