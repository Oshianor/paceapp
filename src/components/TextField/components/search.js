import React from 'react';
import {TextInput, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {APP_WIDTH, colors} from '../../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchField = (props) => {
  const theme = useSelector(({theme}) => theme);
  return (
    <View style={[classes.root, props.rootStyle]}>
      <View style={[classes.container, classes.outlined, props.containerStyle]}>
        <TextInput
          style={[classes.textField, props.TextFieldStyle]}
          {...props}
        />
        <TouchableOpacity style={classes.iconFilter}>
          <Icon name="filter" size={25} color={colors.primary.main} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

SearchField.defaultProps = {
  type: 'outlined',
};

export default SearchField;

const classes = StyleSheet.create({
  root: {
    // width: '100%',
  },
  container: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    // alignItems: "baseline",
    height: 40,
    backgroundColor: colors.white,
  },
  outlined: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
  },
  textField: {
    paddingHorizontal: 10,
    width: APP_WIDTH / 1.4,
    color: colors.black,
    fontSize: 16,
    maxWidth: APP_WIDTH / 1.2,
    color: colors.primary.main
  },
  iconDispay: {
    marginVertical: 5,
    marginLeft: 10,
  },
  iconFilter: {
    marginVertical: 5,
    marginRight: 10,
  },
});
