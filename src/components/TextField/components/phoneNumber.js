import * as React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Subheading} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {colors} from '../../../theme';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { api } from "../../../api";

const TextField = (props) => {
  const theme = useSelector(({theme}) => theme);
  const {cc} = useSelector(({account}) => account);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
      handleCountry();
  }, []);

  const handleCountry = async () => {
    if (typeof cc[0] === "undefined") {
      try {
        setLoading(true);
        console.log('count11');

        const country = await axios.get(api.country);
        const cc = [];
        country.data.data.forEach((element) => {
          cc.push({value: element.cc, label: element.cc});
        });
        console.log('count22');

        dispatch(accountAction.setCountry({cc, country: country.data.data}));
        setLoading(false);
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
        setLoading(false);
      }
    }

  }
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
        {props.icon && <View style={classes.iconTextField}>{props.icon}</View>}
        {!loading ? (
          <RNPickerSelect
            onValueChange={(value) => props.onValueChange(value)}
            value={props.ccValue}
            items={cc}
            style={{
              viewContainer: {
                alignContent: 'center',
                justifyContent: 'center',
                marginLeft: -7,
                width: 60,
                ...props.viewContainer,
              },
              inputIOS: {
                fontSize: 17,
                color: colors.primary.main,
              },
              inputAndroid: {
                fontSize: 16,
                color: colors.primary.main,
              },
            }}
            Icon={() => {
              return (
                <View style={classes.iconRoot}>
                  <Icon
                    name="menu-down"
                    size={20}
                    style={[classes.icon, {color: '#000'}]}
                  />
                </View>
              );
            }}
          />
        ) : (
          <ActivityIndicator size={20} color={colors.primary.main} />
        )}
        
        <TextInput
          style={[classes.textField, props.TextFieldStyle]}
          {...props}
          keyboardType="phone-pad"
          editable
          maxLength={10}
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
    paddingLeft: 0,
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
  iconRoot: {
    alignContent: 'center',
    justifyContent: 'center',
    // width: '100%',
    // flex: 0.1,
    marginLeft: 10,
    // marginTop: 5,
  },
  iconTextField: {
    marginVertical: 12,
    marginHorizontal: 10
  },
});
