import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text } from "react-native-paper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, APP_HEIGHT, APP_WIDTH } from '../../../theme';

const LinkList = ({navigate}) => {
  return (
    <>
      <TouchableOpacity
        style={classes.buttonRoot}
        onPress={() => navigate('Profile')}>
        <Icon
          name="account-circle-outline"
          size={20}
          style={classes.buttonIcon}
        />
        <Text style={classes.buttonText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={classes.buttonRoot}
        onPress={() => navigate('AddressBook')}>
        <Icon name="contacts" size={20} style={classes.buttonIcon} />
        <Text style={classes.buttonText}>Address Book</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={classes.buttonRoot}
        onPress={() => navigate('Settings')}>
        <Icon name="cog-outline" size={20} style={classes.buttonIcon} />
        <Text style={classes.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={classes.buttonRoot}
        onPress={() => navigate('Support')}>
        <Icon name="help-circle-outline" size={20} style={classes.buttonIcon} />
        <Text style={classes.buttonText}>Help & Support</Text>
      </TouchableOpacity>
    </>
  );
};

export default LinkList

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
    color: colors.primary.main,
  },
  buttonText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
  },
  version: {
    color: 'white',
    opacity: 0.5,
  },
});