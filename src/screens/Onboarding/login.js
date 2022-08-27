import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {Text, Subheading} from 'react-native-paper';
import {Button} from '../../components/Button';
import {colors} from '../../theme';
import {TextField, Password} from '../../components/TextField';
import BackButton from '../../navigation/custom/BackButton';
import {useDispatch} from 'react-redux';
import {api} from '../../api';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Preloader} from '../../components/Feedback';
import {accountAction, feedbackAction} from '../../store/actions';
import {validateEmail} from '../../utils';
import axios from 'axios';

  console.log('colors', colors.black);


const Login = ({navigation: {goBack, navigate}}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
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
      // setIsLoading(true);
      dispatch(
        feedbackAction.launch({
          loading: true,
        }),
      );
      const login = await axios.post(api.login, {
        email: value.email.trim(),
        password: value.password,
      });

      // await AsyncStorage.setItem(
      //   'token',
      //   JSON.stringify(login.headers['x-auth-token']),
      // );
      // await AsyncStorage.setItem('user', JSON.stringify(login.data.data));
      dispatch(accountAction.setToken(login.headers['x-auth-token']));
      dispatch(accountAction.setUserData(login.data.data));
      dispatch(
        feedbackAction.launch({
          open: true,
          severity: 's',
          msg: login.data.msg,
        }),
      );
      navigate('Dashboard');
      // setIsLoading(false);
      dispatch(
        feedbackAction.launch({
          loading: false,
        }),
      );
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
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={classes.root}>
      <View style={classes.headerRoot}>
        <BackButton goBack={() => goBack()} color={colors.black} />
      </View>
      <View style={classes.bodyRoot}>
        <Text style={classes.bodyTitle}>Login</Text>
        <TextField
          label="Email Address"
          value={value.email}
          onChangeText={(email) => setValue({...value, email})}
          placeholder="Enter Email Address"
        />
        <View style={{marginTop: 25}}>
          <Password
            label="Password"
            value={value.password}
            onChangeText={(password) => setValue({...value, password})}
            placeholder="Enter password"
          />
          <Text
            onPress={() => {
              navigate('ForgotPassword');
            }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontSize: 12,
              color: colors.primary.main,
            }}>
            Forgot Password?
          </Text>
        </View>

        <Button label="Sign In" onPress={submit} rootStyle={{marginTop: 40}} />
      </View>
      <View style={classes.footerRoot}>
        {/* <View style={{flexGrow: 1}} /> */}
        <View style={classes.signupRoot}>
          <Subheading style={classes.signupLeft}>
            Don't Have An Account Yet?
          </Subheading>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <Subheading style={classes.signupRight}> Sign Up.</Subheading>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Preloader visible={isLoading} /> */}
    </KeyboardAvoidingView>
  );
};

export default Login;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerRoot: {
    justifyContent: 'center',
    marginLeft: 3,
    flex: 1,
  },
  bodyRoot: {
    marginHorizontal: 20,
    // justifyContent: 'space-evenly',
    marginTop: 20,
    flex: 5,
    justifyContent: 'flex-start',
  },
  bodyTitle: {
    fontSize: 28,
    marginBottom: 20,
  },
  footerRoot: {
    // borderTopColor: colors.hr,
    // borderTopWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
  },
  hr: {
    borderBottomColor: colors.hr.light,
    borderBottomWidth: 1,
    height: 10,
  },
  signupRoot: {
    // height: 120,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopColor: colors.hr.light,
    borderTopWidth: 1,
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  signupRight: {
    color: colors.primary.main,
  },
  signupLeft: {
    color: colors.secondary.main,
  },
});
