import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Subheading, ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../theme';

const DefaultButton = ({
  label,
  labelStyle,
  rootStyle,
  onPress,
  loading,
  loadingColor,
  disabled,
  icon
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={onPress}
      style={[classes.root, rootStyle]}>
      {loading && (
        <View style={classes.preloader}>
          <ActivityIndicator
            size="small"
            animating={true}
            color={loadingColor}
          />
        </View>
      )}
      {label && (
        <Subheading style={[classes.label, labelStyle]}>{label}</Subheading>
      )}
      {icon}
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  loadingColor: colors.white,
  loading: false,
  label: null,
};

export default DefaultButton;

const classes = StyleSheet.create({
  root: {
    width: '100%',
    height: 53,
    backgroundColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    color: '#FFF',
    // fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontWeight: '600',
    textTransform: "uppercase"
  },
  preloader: {
    marginHorizontal: 5,
  },
});