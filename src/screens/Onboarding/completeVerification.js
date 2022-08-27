import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {Button} from '../../components/Button';
import img from '../../image';
import {colors} from '../../theme';
import {useDispatch} from 'react-redux';
import {accountAction} from '../../store/actions';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {api} from '../../api';

const VerificationCompleted = ({navigation: {goBack, navigate}}) => {
  const dispatch = useDispatch();
  return (
    <View style={classes.root}>
      <Image source={img.securityImg} />
      <Title style={classes.title}>Verification Completion</Title>
      <Paragraph style={classes.Paragraph}>
        Your phone number has been verified and account creation completed
      </Paragraph>
      <Button
        label="Verify My EMAIL"
        onPress={() => {
          // dispatch(accountAction.setSignInStatus({isSignedIn: true}));
          // AsyncStorage.setItem(api.userAuthKey, JSON.stringify(true));
          navigate('Dashboard');
        }}
      />
    </View>
  );
};

export default VerificationCompleted;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 21,
    marginVertical: 10,
  },
  Paragraph: {
    color: colors.white,
    fontWeight: '300',
    fontSize: 13,
    // marginVertical: 20,
    marginBottom: 50,
    textAlign: 'center',
  },
});
