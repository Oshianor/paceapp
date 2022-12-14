import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {colors} from '../../../theme';

const TextField = (props) => {
  const theme = useSelector(({theme}) => theme);
  return (
    <View style={props.rootStyle}>
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
        {props.icon && <View style={classes.iconDispay}>{props.icon}</View>}
        <TextInput
          style={[classes.textField, props.TextFieldStyle]}
          {...props}
        />
      </View>
    </View>
  );
};

TextField.defaultProps = {
  type: 'outlined',
};

export default TextField;

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
    paddingHorizontal: 10,
    width: '100%',
    color: colors.black,
    fontSize: 16,
  },
  iconRoot: {
    justifyContent: 'center',
    flex: 0.1,
    marginHorizontal: 5,
  },
  icon: {
    opacity: 0.39,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
    margin: 5,
  },
  iconDispay: {
    marginVertical: 13,
    marginLeft: 10,
  },
});
