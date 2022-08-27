import React from 'react';
import {TextField} from '../../../components/TextField';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from '../../../components/Button';
import BackButton from '../../../navigation/custom/BackButton';
import {validateEmail} from '../../../utils';
import {api} from '../../../api';
import {feedbackAction} from '../../../store/actions';
import constants from '../../../utils/constants';
import {colors} from '../../../theme';
import {FeedBack} from '../../../components/Feedback';
import axios from 'axios';
const {DEVICE_HEIGHT} = constants;

const ForgotPassword = ({navigation: {navigate, goBack}}) => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const submit = () => {
    // if (!validateEmail(email)) {
    //   dispatch(
    //     feedbackAction.launch({
    //       open: true,
    //       severity: 'w',
    //       msg: 'invalid email',
    //     }),
    //   );
    //   return;
    // }
    // setLoading(true);
    // axios
    //   .post(api.forgotPassword, {
    //     email,
    //     verificationMode: 'otp',
    //   })
    //   .then((res) => {
    //     const {msg} = res.data;
    //     dispatch(feedbackAction.launch({open: true, severity: 's', msg}));
    //     navigate('OTP', {email});
    //   })
    //   .catch((err) => {
    //     if (err.response) {
    //       console.log('error', err.response);
    //       const {msg} = err.response.data;
    //       dispatch(feedbackAction.launch({open: true, severity: 'w', msg}));
    //       return;
    //     }
    //     dispatch(
    //       feedbackAction.launch({open: true, severity: 'w', msg: `${err}`}),
    //     );
    //   })
    //   .finally(() => setLoading(false));
  };
  return (
    <SafeAreaView style={classes.root}>
      <View style={classes.headerRoot}>
        <BackButton goBack={() => goBack()} color={colors.black} />
      </View>
      <View style={classes.bodyRoot}>
        <View style={classes.textRoot}>
          <Text variant="titleLarge" style={classes.textHeader}>
            Forgotten Password?
          </Text>
          <Text style={classes.headerCaption}>
            Enter your email to receive a password reset link
          </Text>
        </View>

        <TextField
          label="Enter Email Address"
          value={email}
          placeholder=""
          keyboardType="email-address"
          placeholderTextColor="grey"
          onChangeText={input => {
            setEmail(input);
          }}
        />

        <View style={classes.buttonRoot}>
          <Button label="Recover Account" loading={loading} onPress={submit} />
        </View>
      </View>

      <FeedBack />
    </SafeAreaView>
  );
};

export default ForgotPassword;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerRoot: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bodyRoot: {
    flex: 8,
    marginHorizontal: 20,
  },
  textRoot: {
    marginVertical: 20,
  },
  textHeader: {
    fontWeight: '500',
    color: colors.black,
  },
  headerCaption: {
    marginVertical: 5,
  },
  buttonRoot: {
    marginVertical: 20,
  },
});
