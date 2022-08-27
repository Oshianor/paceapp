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


const CompleteRegistration = ({navigation: { navigate, goBack }}) => {
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
      
      navigate('Terms');
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
            onChangeText={text => setValue({...value, firstName: text})}
            value={value.firstName}
            rootStyle={classes.inputRoot}
            placeholder="Your Name"
          />
          <TextField
            label="Last Name"
            onChangeText={text => setValue({...value, lastName: text})}
            value={value.lastName}
            rootStyle={classes.inputRoot}
            placeholder="Another Name"
          />
          <PhoneNumber
            label="Phone Number"
            ccValue={value.countryCode}
            onValueChange={countryCode => setValue({...value, countryCode})}
            rootStyle={classes.inputRoot}
            value={value.phoneNumber}
            onChangeText={text => setValue({...value, phoneNumber: text})}
            placeholder="Your Number"
          />
          <TextField
            label="Website"
            onChangeText={text => setValue({...value, lastName: text})}
            value={value.lastName}
            rootStyle={classes.inputRoot}
            placeholder="Another Name"
          />
          <TextField
            label="Facebook"
            onChangeText={text => setValue({...value, lastName: text})}
            value={value.lastName}
            rootStyle={classes.inputRoot}
            placeholder="Another Name"
          />
          <TextField
            label="Twitter"
            onChangeText={text => setValue({...value, lastName: text})}
            value={value.lastName}
            rootStyle={classes.inputRoot}
            placeholder="Another Name"
          />
          <TextField
            label="LinkedIN"
            onChangeText={text => setValue({...value, lastName: text})}
            value={value.lastName}
            rootStyle={classes.inputRoot}
            placeholder="Another Name"
          />
          <TextField
            label="Address"
            onChangeText={text => setValue({...value, lastName: text})}
            value={value.lastName}
            rootStyle={classes.inputRoot}
            placeholder="Another Name"
          />

          <View style={classes.buttonRoot}>
            <Button label="Next" onPress={handleCreateAccount} />
            <Caption style={classes.content}>
              By continuing, I confirm that I have read & agree to the{' '}
              <Caption style={classes.contentRed}> Terms & conditions </Caption>{' '}
              and
              <Caption style={classes.contentRed}> Privacy Policy</Caption>
            </Caption>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* <Preloader visible={isLoading} /> */}
    </SafeAreaView>
  );
};


export default CompleteRegistration;

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
  buttonRoot: {
    marginVertical: 20,
    // marginHorizontal: 20,
  },
  inputRoot: {
    marginVertical: 4,
  },
});