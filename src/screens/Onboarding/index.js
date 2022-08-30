import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {Title, Subheading} from 'react-native-paper';
import {Button} from '../../components/Button';
import img from '../../image';
import {colors} from '../../theme';

const Onboarding = ({navigation: {navigate}}) => {
  return (
    <View style={classes.root}>
      <ImageBackground source={img.bgdoc} style={classes.headerRoot}>
      <View style={classes.bodyRoot}>
        <View style={classes.titleRoot}>
          <Image source={img.icon} style={{width: 45, height: 45}} />
          <Title style={classes.title}>Welcome to PACE</Title>
        </View>

        <View style={classes.buttonRoot}>
          <Button
            label="Sign In"
            rootStyle={classes.buttonRyt}
            labelStyle={classes.buttonLabel}
            onPress={() => navigate('Login')}
          />
          <Button
            label="Create account"
            rootStyle={classes.button}
            onPress={() => navigate('Register')}
          />
        </View>

        {/* <View style={classes.hr} />
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Subheading style={classes.order}>Order with Exalt</Subheading>
        </TouchableOpacity> */}
      </View>
      </ImageBackground>

    </View>
  );
};

export default Onboarding;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary.main,
  },
  headerRoot: {
    flex: 1,
    // backgroundColor: colors.primary.main,
    backgroundColor: 'rgba(0,0,0,.8)',
  },

  bodyRoot: {
    flex: 2,
    justifyContent: 'space-evenly',
    // alignItems: "center",
    flexDirection: 'column',
    marginBottom: 40,
  },
  titleRoot: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 23,
    color: colors.white
  },
  button: {
    marginVertical: 10,
    borderColor: colors.primary.light,
    borderWidth: 1,
  },
  buttonRyt: {
    marginVertical: 10,
    backgroundColor: colors.primary.light,
  },
  buttonLabel: {
    color: colors.primary.main,
  },
  buttonRoot: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  hr: {
    borderBottomColor: colors.hr.light,
    borderBottomWidth: 1,
    marginVertical: 10,
    height: 10,
  },
  order: {
    color: colors.primary.main,
    // marginVertical: 10,
    fontWeight: '500',
    marginHorizontal: 20,
  },
});
