import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {Button} from '../../components/Button';
import img from '../../image';
import {colors} from '../../theme';
import {useDispatch} from 'react-redux';
import {accountAction} from '../../store/actions';


const VerificationCompleted = ({navigation: {goBack, navigate}}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={classes.root}>
      <Image source={img.icon} style={classes.img} />

      <View style={classes.container}>
        <Image source={img.securityImg} />
        <Title style={classes.title}>Verify Your Email Address</Title>
        <Paragraph style={classes.Paragraph}>
          We sent a confirmation Email to te***@gmail.com. Check your mail and continue
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
    </SafeAreaView>
  );
};

export default VerificationCompleted;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary.main,
  },
  img: {
    width: 45,
    height: 45,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
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
