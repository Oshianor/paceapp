import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Surface, Subheading } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { colors } from '../../../theme';
const Offline = () => {
  return (
    <View style={classes.root} >
      <Surface style={classes.container}>
        <Icon name="airplane-off" size={20} color={colors.primary.main} />
        <Subheading style={classes.text} >You’re offline</Subheading>
      </Surface>
    </View>
  );
}

export default Offline

const classes = StyleSheet.create({
  root: {position: 'absolute', bottom: 0, paddingHorizontal: 20, width: "100%"},
  container: {
    justifyContent: 'center',
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 1
  },
  text: {
    color: colors.primary.main,
    marginHorizontal: 10
  }
});