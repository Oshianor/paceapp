import React from 'react' 
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useSelector } from "react-redux";
import { colors } from '../../theme';

const BackButton = ({goBack, color}) => {
  if (goBack) {
    return (
      <TouchableOpacity style={classes.root} onPress={() => goBack()}>
        <Icon name="chevron-left" size={30} color={color ? color : colors.white} />
      </TouchableOpacity>
    );
  } else {
    return (
      <Icon name="chevron-left" size={30} color={colors.white} style={classes.root} />
    )
  }
    
};

BackButton.defaultProps = {
  color: colors.white
}

export default BackButton



const classes = StyleSheet.create({
  root: {
    // marginLeft: 20,
  },
  img: {
    height: 15,
    width: 9,
  },
});