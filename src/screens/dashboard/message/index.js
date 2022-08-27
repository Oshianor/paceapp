import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const Home = () => {
  return (
    <SafeAreaView style={classes.root}>
      <Text>MESSAGE</Text>
    </SafeAreaView>
  );
};

export default Home;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
});
