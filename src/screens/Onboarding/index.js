import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Title, Subheading} from 'react-native-paper';
import {Button} from '../../components/Button';
// import img from '../../image';
import {colors} from '../../theme';

const Onboarding = ({navigation: {navigate}}) => {
  return (
    <View style={classes.root}>
      {/* <ImageBackground source={img.setupBG} style={classes.headerRoot} /> */}
      <View style={classes.bodyRoot}>
        <Title style={classes.title}>Welcome to Exalt Courier App</Title>

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
    </View>
  );
};

export default Onboarding;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerRoot: {
    flex: 5,
  },

  bodyRoot: {
    flex: 2,
    justifyContent: 'space-evenly',
    // alignItems: "center",
    flexDirection: 'column',
    marginBottom: 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 21,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  button: {
    marginVertical: 10,
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
