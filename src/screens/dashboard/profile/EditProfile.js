import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Password, TextField, PhoneNumber} from '../../../components/TextField';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../theme';
import {Subheading} from 'react-native-paper';
import {Button} from '../../../components/Button';
import axios from 'axios';
import {api} from '../../../api';
import {useDispatch, useSelector} from 'react-redux';
// import {Preloader} from '../../../components/Feedback';
import {feedbackAction} from '../../../store/actions';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import ImagePicker from 'react-native-image-crop-picker';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import img from '../../../image';
import Axios from 'axios';

const ChangePassword = ({navigation: {goBack}}) => {
  const [imageSelected, selectImage] = React.useState(false);
  const dispatch = useDispatch();
  const {token, user} = useSelector(({account}) => account);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState({
    email: user ? user.email : '',
    name: '',
    countryCode: '234',
    phoneNumber: '',
  });

  // React.useEffect(() => {
  //   setValue({...value, name: user.name});
  // }, []);

  // const select = React.useCallback(() => {
  //   //selectImage(true);
  //   ImagePicker.openPicker({
  //     multiple: false,
  //     mediaType: 'photo',
  //     includeBase64: true,
  //     cropping: true,
  //   }).then((images) => {
  //     //console.log('the images', images);
  //     selectImage(images.data);
  //   });
  // }, []);

  // const handleSubmit = () => {
  //   value.name.trim();
  //   if (
  //     (value.name.length < 2 && value.phoneNumber === '') ||
  //     value.phoneNumber.length !== 10
  //   ) {
  //     dispatch(
  //       feedbackAction.launch({
  //         open: true,
  //         severity: 'w',
  //         msg: 'Please ensure fields are filled with valid input',
  //       }),
  //     );
  //     return;
  //   }
  //   let reqObj = {...value};

  //   for (let key in reqObj) {
  //     if (reqObj[key] === '') {
  //       delete reqObj[key];
  //     }
  //   }
  //   if (
  //     typeof reqObj.phoneNumber === 'undefined' ||
  //     reqObj.phoneNumber === ''
  //   ) {
  //     delete reqObj.countryCode;
  //   } else {
  //     reqObj.phoneNumber = `${reqObj.countryCode}${reqObj.phoneNumber}`;
  //     delete reqObj.countryCode;
  //   }

  //   setLoading(true);
  //   Axios.patch(
  //     api.updateProfile,
  //     {
  //       ...reqObj,
  //       image: imageSelected ? imageSelected : null,
  //     },
  //     {
  //       headers: {
  //         'x-auth-token': token,
  //         'Content-type': 'application/json',
  //       },
  //     },
  //   )
  //     .then((res) => {
  //       const {msg} = res.data;
  //       dispatch(feedbackAction.launch({open: true, severity: 's', msg}));
  //     })
  //     .catch((err) => {
  //       if (err?.response?.data) {
  //         console.log('error', err.response);
  //         const {msg} = err.response.data;
  //         dispatch(feedbackAction.launch({open: true, severity: 'w', msg}));
  //         return;
  //       }
  //       dispatch(
  //         feedbackAction.launch({open: true, severity: 'w', msg: `${err}`}),
  //       );
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
      <View style={classes.header}>
        <Subheading style={classes.headerText}>Update your Profile</Subheading>
      </View>
      <TextField
        label="Email Address"
        onChangeText={text => setValue({...value, email: text})}
        value={value.email}
        keyboardType="email-address"
        placeholder="yourmail@email.com"
        editable={false}
        rootStyle={{opacity: 0.6}}
      />

      <PhoneNumber
        label="Phone Number"
        ccValue={value.countryCode}
        onValueChange={countryCode => setValue({...value, countryCode})}
        // icon={<Icon name="cellphone-iphone" size={20} color={colors.red} />}
        rootStyle={classes.textFieldRoot}
        value={value.phoneNumber}
        onChangeText={text => setValue({...value, phoneNumber: text})}
        placeholder="Your Number"
      />

      <TextField
        label="First Name"
        onChangeText={text => setValue({...value, name: text})}
        value={value.name}
        placeholder="First Name"
        rootStyle={classes.TextField}
      />

      <TextField
        label="Last Name"
        onChangeText={text => setValue({...value, name: text})}
        value={value.name}
        rootStyle={classes.TextField}
        placeholder="Last Name"
      />

      <TextField
        label="Website"
        onChangeText={text => setValue({...value, name: text})}
        value={value.name}
        rootStyle={classes.TextField}
        placeholder="Website"
      />
      <TextField
        label="Twitter"
        onChangeText={text => setValue({...value, name: text})}
        value={value.name}
        rootStyle={classes.TextField}
        placeholder="Twitter"
      />
      <TextField
        label="Facebook"
        onChangeText={text => setValue({...value, name: text})}
        value={value.name}
        rootStyle={classes.TextField}
        placeholder="Facebook"
      />
      <TextField
        label="Instagram"
        onChangeText={text => setValue({...value, name: text})}
        value={value.name}
        rootStyle={classes.TextField}
        placeholder="Instagram"
      />

      {/* {!imageSelected ? (
        <TouchableOpacity onPress={select} style={classes.imgContainer}>
          <Image source={img.camera} />
        </TouchableOpacity>
      ) : (
        <View style={classes.imgContainer}>
          <View>
            <Image
              style={[classes.imageSize]}
              source={{uri: `data:image/jpeg;base64,${imageSelected}`}}
              resizeMode="cover"
            />
            {imageSelected && (
              <FontIcon
                name="trash"
                style={{position: 'absolute', left: 5, top: 5}}
                size={25}
                color="red"
                onPress={() => {
                  selectImage(false);
                }}
              />
            )}
            {imageSelected && (
              <FontIcon
                name="camera"
                style={{position: 'absolute', left: 130, bottom: 95}}
                color={colors.white}
                onPress={select}
                size={28}
              />
            )}
          </View>
        </View>
      )} */}

      <Button
        label="Update Profile"
        loading={loading}
        rootStyle={classes.buttonRoot}
        // onPress={handleSubmit}
      />
      {/* <Preloader visible={loading} /> */}
    </ScrollView>
  );
};

export default ChangePassword;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    marginVertical: 10,
  },
  headerText: {
    textAlign: 'center',
  },
  buttonRoot: {
    marginVertical: 10,
  },
  imageSize: {width: 300, height: 200},
  imgContainer: {
    marginVertical: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
