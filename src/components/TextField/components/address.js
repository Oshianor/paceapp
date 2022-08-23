import React from 'react';
import {TouchableOpacity, StyleSheet, View, Platform} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {APP_WIDTH, colors} from '../../../theme';

const limit = Math.round(APP_WIDTH / 11);

const AddressField = (props) => {
  const theme = useSelector(({theme}) => theme);
  return (
    <TouchableOpacity onPress={props.onPress} style={props.rootStyle}>
      <View
        style={[
          classes.labelRoot,
          props.labelRoot,
          {backgroundColor: theme.dark ? colors.black : colors.white},
        ]}>
        <Subheading style={classes.label}>{props.label}</Subheading>
      </View>
      <View
        style={[
          classes.container,
          props.type === 'outlined' ? classes.outlined : classes.line,
          props.containerStyle,
        ]}>
        {props.icon && <View style={{marginVertical: 7, marginHorizontal: 10}}>{props.icon}</View>}
        {/* <Subheading style={[classes.textField, props.TextFieldStyle]}>
          {props?.value?.length > limit
            ? `${props.value.substring(0, limit)} ...`
            : props.value}
        </Subheading> */}
        <Subheading
          style={[classes.textField, props.TextFieldStyle]}
          numberOfLines={1}>
          {props?.value}
        </Subheading>
      </View>
    </TouchableOpacity>
  );
};

AddressField.defaultProps = {
  type: 'outlined',
};

export default AddressField;

const classes = StyleSheet.create({
  root: {
    width: '100%',
  },
  labelRoot: {
    // marginBottom: -12,
    // zIndex: 1,
    width: '100%',
  },
  label: {
    fontSize: 16,
    padding: 0,
    margin: 0,
    fontWeight: '400',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    // alignItems: "baseline",
    height: 48,
    paddingVertical: 5
  },
  outlined: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 7,
  },
  line: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  textField: {
    // paddingHorizontal: 10,
    paddingRight: 10,
    paddingVertical: 10,
    width: '90%',
    color: colors.black,
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    lineHeight: Platform.OS === 'ios' ? 15 : 13,
  },
  iconRoot: {
    justifyContent: 'center',
    flex: 0.1,
    marginHorizontal: 5,
  },
  icon: {
    opacity: 0.39,
  },
});
