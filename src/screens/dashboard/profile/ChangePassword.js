import React from 'react';
import { View, StyleSheet } from "react-native";
import {Password} from '../../../components/TextField';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../theme';
import { Subheading } from 'react-native-paper';
import { Button } from '../../../components/Button';
import axios from "axios";
import { api } from '../../../api';
import {useDispatch, useSelector} from 'react-redux';
import { Preloader } from '../../../components/Feedback';
import { feedbackAction } from '../../../store/actions';


const ChangePassword = ({ navigation: { goBack } }) => {
  const dispatch = useDispatch();
  const {token} = useSelector(({account}) => account);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState({
    oldPassword: '',
    newPassword: '',
  });

  const handleChangePassword = async () => {
    try {
      if (value.oldPassword === "") {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: "Current Password is required",
          }),
        );
        return 
      }

      if (value.newPassword === '') {
        dispatch(
          feedbackAction.launch({
            open: true,
            severity: 'w',
            msg: "New Password is required",
          }),
        );
        return;
      }

      setLoading(true);
      const change = await axios.post(api.changePassword, { ...value }, { headers: { "x-auth-token": token } });
      setLoading(false);
      dispatch(
        feedbackAction.launch({
          open: true,
          severity: 's',
          msg: change.data.msg,
        }),
      );
      goBack()
    } catch (error) {
      console.log("error", error);
      console.log('error', error.response);
      setLoading(false);
      dispatch(feedbackAction.launch({ open: true, severity: "w", msg: error.response.data.msg }));
    }
  }

  return (
    <View style={classes.root}>
      <View style={classes.header}>
        <Subheading style={classes.headerText}>
          Change your account password
        </Subheading>
      </View>
      <Password
        label="Current Password"
        icon={<Icon name="lock" size={20} color={colors.red} />}
        onChangeText={(oldPassword) => setValue({...value, oldPassword})}
        value={value.oldPassword}
        placeholder="Enter Current Password"
      />
      <Password
        label="New Password"
        icon={<Icon name="lock" size={20} color={colors.red} />}
        onChangeText={(newPassword) => setValue({...value, newPassword})}
        value={value.newPassword}
        placeholder="Enter New Password"
      />
      <Button
        label="Change Password"
        loading={loading}
        rootStyle={classes.buttonRoot}
        onPress={handleChangePassword}
      />
      <Preloader visible={loading}/>
    </View>
  );
}

export default ChangePassword

const classes = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    marginVertical: 10,
  },
  headerText: {
    textAlign: "center"
  },
  buttonRoot: {
    marginVertical: 10
  },
});