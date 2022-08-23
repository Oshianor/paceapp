import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const Dropdown = (props) => {
  const { cc } = useSelector(({ account }) => account)
  return (
    <RNPickerSelect
      {...props}
      items={cc}
      style={{
        viewContainer: {
          alignContent: 'center',
          justifyContent: 'center',
          width: 200,
          ...props.viewContainer,
        },
        inputIOS: {
          fontSize: 24,
          paddingVertical: 12,
          paddingHorizontal: 10,
          color: '#fff',
          paddingRight: 30,
        },
        inputAndroid: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          width: 600,
          color: '#fff',
          paddingRight: 30,
        },
      }}
      Icon={() => {
        return (
          <View style={classes.iconRoot}>
            <Icon
              name="menu-down"
              size={20}
              style={[classes.icon, {color: '#fff'}]}
            />
          </View>
        );
      }}
    />
  );
};


export default Dropdown;

const classes = StyleSheet.create({
  root: {
    // width: '100%',
    marginVertical: 5,
  },
  labelRoot: {
    marginBottom: -12,
    backgroundColor: 'white',
    zIndex: 1,
    width: 70,
  },
  label: {
    fontSize: 14,
    padding: 0,
    margin: 0,
    fontWeight: '500',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
  },
  iconRoot: {
    alignContent: 'center',
    justifyContent: 'center',
    // width: '100%',
    flex: 0.1,
    marginHorizontal: 5,
    marginTop: 10,
  },
  icon: {
    opacity: 0.39,
  },
});