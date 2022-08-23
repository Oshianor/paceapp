import React from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import { Caption, Paragraph, Subheading } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { colors } from '../../../theme'
const { width } = Dimensions.get("screen");

const Nav = ({icon, title, description, button, backgroundColor, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[classes.root, {backgroundColor}]}>
      <Icon name={icon} size={50} color={colors.primary.main} />
      <View style={classes.contentRoot}>
        <Subheading style={classes.contentTitle}>{title}</Subheading>
        <Caption style={classes.contentDetails}>{description}</Caption>
      </View>

      <View style={classes.buttonRoot}>
        <Caption style={classes.buttonText}>{button}</Caption>
        <Icon name="arrow-right" size={10} color={colors.primary.main} />
      </View>
    </TouchableOpacity>
  );
};

export default Nav

const classes = StyleSheet.create({
  root: {
    height: width / 2,
    width: width / 2.5,
    borderRadius: 10,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    margin: 10
  },
  contentRoot: {
    marginTop: 10,
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  contentDetails: {
    fontSize: 8,
    lineHeight: 10,
    color: colors.black,
    opacity: 0.6,
  },
  buttonRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonText: {
    fontSize: 12,
    color: colors.primary.main,
  },
});