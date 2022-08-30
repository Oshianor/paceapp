import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
  Image,
  Keyboard,
} from 'react-native';
import {Title, Subheading, Caption} from 'react-native-paper';
import {Button} from '../../components/Button';
import {feedbackAction} from '../../store/actions';
import {APP_WIDTH, colors} from '../../theme';
import {TextField, PhoneNumber, Password} from '../../components/TextField';
import BackButton from '../../navigation/custom/BackButton';
import {validateEmail} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Preloader} from '../../components/Feedback';
import axios from 'axios';
import { api } from '../../api';
import img from '../../image';


// console.log('colors', colors.black);
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
      

      navigate('Speciality');
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
          <Image source={img.iconBlue} style={classes.img} />
          <Title style={classes.bodyTitle}>Create Account</Title>
          <TextField
            label="Title"
            onChangeText={text => setValue({...value, firstName: text})}
            value={value.firstName}
            placeholder="Your Title"
            rootStyle={classes.inputRoot}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextField
              label="First Name"
              onChangeText={text => setValue({...value, firstName: text})}
              value={value.firstName}
              rootStyle={classes.inputSplitRoot}
              placeholder="First Name"
            />
            <TextField
              label="Last Name"
              onChangeText={text => setValue({...value, lastName: text})}
              value={value.lastName}
              rootStyle={classes.inputSplitRoot}
              placeholder="Last Name"
            />
          </View>

          <TextField
            label="Email Address"
            onChangeText={text => setValue({...value, email: text})}
            value={value.email}
            keyboardType="email-address"
            rootStyle={classes.inputRoot}
            placeholder="yourmail@email.com"
          />
          <Password
            label="Password"
            onChangeText={text => setValue({...value, password: text})}
            value={value.password}
            rootStyle={classes.inputRoot}
            placeholder="Enter Password"
          />
          <Password
            label="Confirm Password"
            onChangeText={text => setValue({...value, password: text})}
            value={value.password}
            rootStyle={classes.inputRoot}
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
      {/* <Preloader visible={isLoading} /> */}
    </SafeAreaView>
  );
};


export default Register;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerRoot: {
    // flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginBottom: 10
  },
  bodyRoot: {
    flex: 10,
    marginHorizontal: 20,
    // marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  img: {
    width: 45,
    height: 45,
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
    backgroundColor: 'white',
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
  inputRoot: {
    marginVertical: 4,
  },
  inputSplitRoot: {
    width: APP_WIDTH / 2.3,
    marginVertical: 4,
  },
});