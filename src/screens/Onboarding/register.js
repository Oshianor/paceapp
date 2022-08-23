import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
  Keyboard,
} from 'react-native';
import {Title, Subheading, Caption} from 'react-native-paper';
import {Button} from '../../components/Button';
import {feedbackAction} from '../../store/actions';
import {colors} from '../../theme';
import {TextField, PhoneNumber, Password} from '../../components/TextField';
import BackButton from '../../navigation/custom/BackButton';
import {validateEmail} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Preloader} from '../../components/Feedback';
import axios from 'axios';
import { api } from '../../api';


const Register = ({navigation: { navigate, goBack }}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState({
    email: '',
    firstName: '',
    lastName: '',
    countryCode: '234',
    password: '',
    phoneNumber: '',
  });


  const handleCreateAccount = async () => {
    Keyboard.dismiss();
    try {
      if (!validateEmail(value.email.trim())) {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: 'A valid email is required',
          }),
        );
        return;
      }
      if (value.password === '') {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: 'Password is required',
          }),
        );
        return;
      }
      if (value.phoneNumber === '') {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: 'Phone Number is required',
          }),
        );
        return;
      }
      if (value.countryCode === '') {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: 'Select a country code',
          }),
        );
        return;
      }
      if (value.firstName === '') {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: 'First Name is required',
          }),
        );
        return;
      }
      if (value.lastName === '') {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: 'First Name is required',
          }),
        );
        return;
      }

      dispatch(
        feedbackAction.launch({
          loading: true,
        }),
      );

      const register = await axios.post(api.register, {
        name: `${value.firstName.trim()} ${value.lastName.trim()}`,
        email: value.email.trim(),
        platform: Platform.OS,
        password: value.password,
        type: 'Logistics',
        countryCode: value.countryCode,
        phoneNumber: value.phoneNumber.trim(),
      });
      console.log('register', register);

      // setIsLoading(false);
      dispatch(
        feedbackAction.launch({
          loading: false,
        }),
      );

      navigate('Verification', {...value});
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        const {msg} = err.response.data;
        dispatch(feedbackAction.launch({open: true, severity: 'w', msg, loading: false}));
        return;
      }
      dispatch(
        feedbackAction.launch({open: true, severity: 'w', msg: `${err}`, loading: false}),
      );
    }
  }

  return (
    <SafeAreaView style={classes.root}>
      <View style={classes.headerRoot}>
        <BackButton goBack={() => goBack()} color={colors.black} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={classes.bodyRoot}>
        <ScrollView>
          <Title style={classes.bodyTitle}>Create Account</Title>
          <TextField
            label="First Name"
            icon={
              <Icon
                name="account-circle-outline"
                size={20}
                color={colors.red}
              />
            }
            onChangeText={(text) => setValue({...value, firstName: text})}
            value={value.firstName}
            placeholder="Your Name"
          />
          <TextField
            label="Last Name"
            onChangeText={(text) => setValue({...value, lastName: text})}
            icon={
              <Icon
                name="account-circle-outline"
                size={20}
                color={colors.red}
              />
            }
            value={value.lastName}
            placeholder="Another Name"
          />
          <TextField
            label="Email Address"
            icon={<Icon name="email" size={20} color={colors.red} />}
            onChangeText={(text) => setValue({...value, email: text})}
            value={value.email}
            keyboardType="email-address"
            placeholder="yourmail@email.com"
          />
          <PhoneNumber
            label="Phone Number"
            ccValue={value.countryCode}
            onValueChange={(countryCode) => setValue({...value, countryCode})}
            icon={<Icon name="cellphone-iphone" size={20} color={colors.red} />}
            rootStyle={classes.textFieldRoot}
            value={value.phoneNumber}
            onChangeText={(text) => setValue({...value, phoneNumber: text})}
            placeholder="Your Number"
          />
          <Password
            label="Password"
            icon={<Icon name="lock" size={20} color={colors.red} />}
            onChangeText={(text) => setValue({...value, password: text})}
            value={value.password}
            placeholder="Enter Password"
          />

          <View style={classes.buttonRoot}>
            <Button label="Create Account" onPress={handleCreateAccount} />
            <Caption style={classes.content}>
              By continuing, I confirm that I have read & agree to the{' '}
              <Caption style={classes.contentRed}> Terms & conditions </Caption>{' '}
              and
              <Caption style={classes.contentRed}> Privacy Policy</Caption>
            </Caption>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={classes.footerRoot}>
        <View style={classes.signupRoot}>
          <Subheading style={classes.signupLeft}>
            Already Have An Account?
          </Subheading>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Subheading style={classes.signupRight}> Login.</Subheading>
          </TouchableOpacity>
        </View>
      </View>
      <Preloader visible={isLoading} />
    </SafeAreaView>
  );
};


export default Register;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerRoot: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bodyRoot: {
    flex: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  bodyTitle: {
    fontSize: 28,
  },
  content: {
    fontWeight: '200',
  },
  contentRed: {
    fontWeight: '200',
    color: colors.primary.main,
  },
  footerRoot: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // backgroundColor: "white"
  },
  hr: {
    borderBottomColor: colors.hr.light,
    borderBottomWidth: 1,
    height: 10,
  },
  signupRoot: {
    backgroundColor: "white",
    // height: 120,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopColor: colors.hr.light,
    borderTopWidth: 1,
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  signupRight: {
    color: colors.primary.main,
  },
  signupLeft: {
    color: colors.secondary.main,
  },
  buttonRoot: {
    marginVertical: 20,
    // marginHorizontal: 20,
  },
});