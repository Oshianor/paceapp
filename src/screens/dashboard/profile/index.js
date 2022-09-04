import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, IconButton} from '../../../components/Button';
import {APP_WIDTH, colors} from '../../../theme';
const {width} = Dimensions.get('screen');
import {useSelector} from 'react-redux';
import {cloudfront} from '../../../api';
import {version} from '../../../../package.json';
import {LinkList} from '../../../components/List';

const Profile = ({navigation: {navigate}}) => {
  const {user} = useSelector(({account}) => account);

  if (!user) {
    return null;
  }

  return (
    <View style={classes.root}>
      <View style={classes.header}>
        {user.img ? (
          <Avatar.Image source={{uri: `${cloudfront}${user.img}`}} size={75} />
        ) : (
          <Avatar.Text
            label={user ? user.name.substring(0, 2).toUpperCase() : 'UK'}
            // style={classes.img}
            size={75}
          />
        )}
        <Text style={classes.Text}>{user.name}</Text>
        <Text style={classes.Title}>{user.email}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={classes.buttonRoot}
          onPress={() => navigate('Profile')}>
          <View style={classes.buttonContain}>
            <Icon
              name="account-circle-outline"
              size={20}
              style={classes.buttonIcon}
            />
            <Text style={classes.buttonText}>My Profile</Text>
          </View>
          <Icon name="chevron-right" size={20} style={classes.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={classes.buttonRoot}
          onPress={() => navigate('Contact')}>
          <View style={classes.buttonContain}>
            <Icon name="contacts" size={20} style={classes.buttonIcon} />
            <Text style={classes.buttonText}>Contacts</Text>
          </View>
          <Icon name="chevron-right" size={20} style={classes.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={classes.buttonRoot}
          onPress={() => navigate('Repository')}>
          <View style={classes.buttonContain}>
            <Icon
              name="source-repository-multiple"
              size={20}
              style={classes.buttonIcon}
            />
            <Text style={classes.buttonText}>Repository</Text>
          </View>
          <Icon name="chevron-right" size={20} style={classes.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={classes.buttonRoot}
          onPress={() => navigate('Resources')}>
          <View style={classes.buttonContain}>
            <Icon name="semantic-web" size={20} style={classes.buttonIcon} />
            <Text style={classes.buttonText}>Resources</Text>
          </View>
          <Icon name="chevron-right" size={20} style={classes.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={classes.buttonRoot}
          onPress={() => navigate('Settings')}>
          <View style={classes.buttonContain}>
            <Icon name="cog-outline" size={20} style={classes.buttonIcon} />
            <Text style={classes.buttonText}>Settings</Text>
          </View>
          <Icon name="chevron-right" size={20} style={classes.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={classes.buttonRoot}
          onPress={() => navigate('Support')}>
          <View style={classes.buttonContain}>
            <Icon
              name="help-circle-outline"
              size={20}
              style={classes.buttonIcon}
            />
            <Text style={classes.buttonText}>Help & Support</Text>
          </View>

          <Icon name="chevron-right" size={20} style={classes.buttonIcon} />
        </TouchableOpacity>
      </View>

      <View style={{bottom: 1, position: 'absolute'}}>
        <TouchableOpacity
          style={classes.buttonBottomRoot}
          onPress={() => {
            // AsyncStorage.clear();
            // dispatch(accountAction.setToken(null));
            // dispatch(accountAction.setUserData(null));
            // navigate('Onboarding');
          }}>
          <Icon name="logout" size={20} style={classes.buttonIcon} />
          <Text style={classes.buttonText}>Logout</Text>
        </TouchableOpacity>
        <Text style={classes.version}>v{version}</Text>
      </View>
    </View>
  );
};

export default Profile;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // marginVertical: 20,
    marginHorizontal: 20,
  },
  header: {
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img: {borderRadius: 10},
  Text: {
    // marginVertical: 5,
    textTransform: 'capitalize',
  },
  Title: {
    fontSize: 14,
    fontWeight: '500',
  },
  Text: {
    marginVertical: 5,
  },
  buttonRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  buttonContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 10,
    color: colors.primary.main,
  },
  buttonBottomRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  buttonText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'left',
  },
  version: {
    color: 'white',
    opacity: 0.5,
  },
});
