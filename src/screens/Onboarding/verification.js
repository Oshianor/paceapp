import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import {Title, Subheading, Caption, Paragraph} from 'react-native-paper';
import {Button} from '../../components/Button';
import img from '../../image';
import {APP_WIDTH, colors} from '../../theme';
import {TextField} from '../../components/TextField';
import BackButton from '../../navigation/custom/BackButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {api, baseURL} from '../../api';
import {Preloader} from '../../components/Feedback';
import {useDispatch, useSelector} from 'react-redux';
import {accountAction, feedbackAction} from '../../store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CountDown from 'react-native-countdown-component';
import axios from 'axios';

const Verification = ({
  navigation: {goBack, navigate},
  route: {
    params: {email, countryCode, phoneNumber},
  },
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(Math.random());
  const [sendForOTP, canSendForOTP] = useState(false);

  const handleVerification = async () => {
    try {
      if (value.length !== 4) {
        return;
      }

      Keyboard.dismiss();
      // setIsLoading(true);
      dispatch(
        feedbackAction.launch({
          loading: true,
        }),
      );

      const verify = await axios.post(api.verify, {
        OTPCode: value,
        email: email,
      });
      console.log('verify', verify);

      // setIsLoading(false);
      dispatch(
        feedbackAction.launch({
          loading: false,
        }),
      );
      AsyncStorage.multiSet([
        ['token', verify.headers['x-auth-token']],
        ['user', JSON.stringify(verify.data.data)],
      ]);
      dispatch(accountAction.setUserData(verify.data.data));
      dispatch(accountAction.setToken(verify.headers['x-auth-token']));
      dispatch(
        feedbackAction.launch({
          open: true,
          severity: 's',
          msg: verify.data.msg,
        }),
      );
      // navigate('VerificationCompleted');
      navigate('Dashboard', {screen: 'Home'});
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        const {msg} = err.response.data;
        dispatch(feedbackAction.launch({open: true, severity: 'w', msg, loading: false }));
        return;
      }
      dispatch(
        feedbackAction.launch({open: true, severity: 'w', msg: `${err}`, loading: false }),
      );
    }
  };

  const fetchOTP = () => {
    if (!sendForOTP) {
      return;
    }
    setIsLoading(true);
    axios
      .get(api.getOTP + email)
      .then((res) => {
        const {msg} = res.data;
        dispatch(feedbackAction.launch({open: true, severity: 's', msg}));
        setId(Math.random());
        canSendForOTP(false);
      })
      .catch((err) => {
        if (err.response) {
          const {msg} = err.response.data;
          dispatch(feedbackAction.launch({open: true, severity: 'w', msg}));
          return;
        }
        dispatch(
          feedbackAction.launch({open: true, severity: 'w', msg: `${err}`}),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView style={classes.root}>
      <View style={classes.headerRoot}>
        <BackButton goBack={() => goBack()} color={colors.black} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={classes.bodyRoot}>
        <View>
          <View>
            <Title style={classes.bodyTitle}>OTP Verification </Title>
            <Paragraph style={classes.bodyTitleDetails}>
              Enter the 4-digit code sent to you at
            </Paragraph>
          </View>

          <View style={classes.chnageNumberRoot}>
            <Subheading style={classes.chnageNumber}>{email}</Subheading>
            {/* <TouchableOpacity>
                <Subheading style={classes.chnageNumberButton}>
                  Change
                </Subheading>
              </TouchableOpacity> */}
          </View>
        </View>

        <OTPInputView
          style={styles.root}
          pinCount={4}
          code={value} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={(code) => setValue(code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <View>
          <Button label="Submit" onPress={handleVerification} />

          <View style={classes.resendRoot}>
            <Subheading
              style={[
                classes.resendRootText,
                {color: sendForOTP ? colors.green.main : colors.secondary.main},
              ]}
              onPress={fetchOTP}>
              Resend Code in{' '}
            </Subheading>
            <TouchableOpacity>
              <CountDown
                until={120}
                onFinish={() => canSendForOTP(true)}
                id={id.toString()}
                timeToShow={['M', 'S']}
                // onFinish={onCountDownFinish}
                digitStyle={{backgroundColor: 'transparent'}}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -10,
                }}
                timeLabels={{m: '', s: ''}}
                digitTxtStyle={{color: colors.primary.main, fontSize: 18}}
                showSeparator
                separatorStyle={{color: colors.primary.main}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={classes.footerRoot} />
      <Preloader visible={isLoading} size="large" />
    </SafeAreaView>
  );
};

export default Verification;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bodyRoot: {
    flex: 5,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  bodyTitle: {
    fontSize: 28,
  },
  bodyTitleDetails: {
    fontSize: 14,
    color: colors.secondary.main,
    fontWeight: '300',
  },
  chnageNumberRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  chnageNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.secondary.main,
  },
  chnageNumberButton: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.primary.main,
  },
  content: {
    fontWeight: '200',
  },
  contentRed: {
    fontWeight: '200',
    color: colors.primary.main,
  },
  textStyle: {
    fontSize: 70,
    marginVertical: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    textAlign: 'center',
    width: 70,
    height: 90,
    fontWeight: '500',
    color: 'black',
  },
  containerStyle: {},
  resendRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  resendRootText: {
    fontSize: 16,
    lineHeight: 16,
    paddingBottom: 3,
    fontWeight: '600',
  },
  resendRootCount: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary.main,
  },
  footerRoot: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  borderStyleBase: {
    // width: 30,
    // height: 90,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    width: APP_WIDTH / 5,
    marginHorizontal: 5,
    height: 70,
    borderWidth: 0,
    borderBottomWidth: 5,
    borderBottomColor: colors.primary.main,
    fontSize: 50,
    lineHeight: 60,
    color: colors.black,
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
