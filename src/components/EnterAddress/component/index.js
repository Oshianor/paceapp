import React, {useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {colors} from '../../../theme';
import { GOOGLE_MAPS_APIKEY } from "../../../api"

const EnterAddressComponent = (props) => {
  const ref = useRef();
  const {selectDestinationFunction, renderLeftFunction} = props;

  const CustomInput = <TextInput style={styles.textField} {...props} />;

  const renderLeftButton = () => (
    <TouchableOpacity
      onPress={() => renderLeftFunction()}
      style={{alignSelf: 'center'}}>
      <Icon name="arrow-left" size={28} color={colors.primary.main} />
    </TouchableOpacity>
  );

  const selectDestination = (data, details) => {
    console.log(data);
    const address = ref.current?.getAddressText();
    const latDelta =
      Number(details.geometry.viewport.northeast.lat) -
      Number(details.geometry.viewport.southwest.lat);
    const lngDelta =
      Number(details.geometry.viewport.northeast.lng) -
      Number(details.geometry.viewport.southwest.lng);
    const destination = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: latDelta,
      longitudeDelta: lngDelta,
      address,
    };
    selectDestinationFunction(destination);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Enter Street name"
        returnKeyType={'search'}
        listViewDisplayed="auto"
        fetchDetails={true}
        onPress={selectDestination}
        renderLeftButton={renderLeftButton}
        textInputProps={{
          autoFocus: true,
          //  InputComp: CustomInput,
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
          components: 'country:ng',
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        styles={{
          textInputContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          },
          textInput: {
            paddingHorizontal: 10,
            width: '100%',
            color: '#2AC940',
            fontSize: 16,
          },
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    paddingHorizontal: 16,
    width: '100%',
    height: '100%',
  },
  textField: {
    paddingHorizontal: 10,
    width: '100%',
    color: '#2AC940',
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
  },
});

export default EnterAddressComponent;
