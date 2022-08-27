import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {Button} from '../../components/Button';


const Terms = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView style={classes.root}>
      <View style={classes.content}>
        <Text variant="titleLarge" style={classes.title}>
          Terms And Conditions
        </Text>
        <Text variant="bodyMedium" style={classes.body}>
          A guide to using Tailwind with common CSS preprocessors like Sass,
          Less, and Stylus. Since Tailwind is a PostCSS plugin, there’s nothing
          stopping you from using it with Sass, Less, Stylus, or other
          preprocessors, just like you can with other PostCSS plugins like
          Autoprefixer. It’s important to note that you don’t need to use a
          preprocessor with Tailwind — you typically write very little CSS on a
          Tailwind project anyways so using a preprocessor just isn’t as
          beneficial as it would be in a project where you write a lot of custom
          CSS. This guide only exists as a reference for people who need to
          integrate Tailwind with a preprocessor for reasons outside of their
          control, not because it is a recommended practice.
        </Text>
      </View>

      <View style={classes.buttonRoot}>
        <Button label="Accept" onPress={() => navigate('Speciality')} />
      </View>
    </SafeAreaView>
  );
};

export default Terms;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  content: {
    flex: 3,
    justifyContent: 'center'
  },
  title: {
    marginVertical: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  body: {
    marginVertical: 10,
  },
  buttonRoot: {
    flex: 1,
    marginVertical: 20,
    // marginHorizontal: 20,
  },
});