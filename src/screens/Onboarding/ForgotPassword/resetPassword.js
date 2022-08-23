import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Title, Subheading} from 'react-native-paper';
import {Button} from '../../../components/Button';
import {colors} from '../../../theme';
import {TextField} from '../../../components/TextField';
import BackButton from '../../../navigation/custom/BackButton';
import {useDispatch} from 'react-redux';
import {feedbackAction} from '../../../store/actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import constants from '../../../utils/constants';
import axios from 'axios';
import {api} from '../../../api';

const ResetPassword = ({
  navigation: {navigate, goBack},
  route: {
    params: {email, otp},
  },
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submit = () => {
    if (password !== confirmPassword) {
      dispatch(
        feedbackAction.launch({
          open: true,
          severity: 'w',
          msg: 'passwords do not match',
        }),
      );
      return;
    }
    setLoading(true);
    axios
      .post(api.resetPassword, {
        email,
        token: otp,
        password,
      })
      .then((res) => {
        dispatch(
          feedbackAction.launch({open: true, severity: 's', msg: res.data.msg}),
        );
        navigate('Login');
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
        setLoading(false);
      });
  };
  return (
    <KeyboardAwareScrollView
      style={classes.root}
      contentContainerStyle={{marginTop: constants.DEVICE_HEIGHT * 0.1}}>
      <View style={classes.headerRoot}>
        <BackButton goBack={() => goBack()} />
      </View>
      <View style={classes.bodyRoot}>
        <Title style={classes.bodyTitle}>Set New Password</Title>
        <TextField
          label="New Password"
          value={password}
          secureTextEntry
          onChangeText={(input) => {
            setPassword(input);
          }}
          password
        />
        <View>
          <TextField
            label="Confirm New Password"
            value={confirmPassword}
            secureTextEntry
            onChangeText={(input) => {
              setConfirmPassword(input);
            }}
            password
            rootStyle={{marginBottom: 10}}
            onSubmitEditing={() => {
              if (password !== confirmPassword) {
                dispatch(
                  feedbackAction.launch({
                    open: true,
                    severity: 'w',
                    msg: 'passwords do not match',
                  }),
                );
              }
            }}
          />
        </View>

        <Button label="Set New Password" loading={loading} onPress={submit} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bodyRoot: {
    flex: 4,
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  bodyTitle: {
    fontSize: 28,
  },
  footerRoot: {
    // borderTopColor: colors.hr,
    // borderTopWidth: 1,
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  hr: {
    borderBottomColor: colors.hr.light,
    borderBottomWidth: 1,
    height: 10,
  },
  signupRoot: {
    height: 120,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopColor: colors.hr.light,
    borderTopWidth: 1,
    width: '100%',
    paddingVertical: 20,
  },
  signupRight: {
    color: colors.primary.main,
  },
  signupLeft: {
    color: colors.grey.main,
  },
});
