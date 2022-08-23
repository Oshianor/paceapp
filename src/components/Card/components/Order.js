import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Surface, Subheading, Avatar, Caption, Card} from 'react-native-paper';
import { useDispatch} from 'react-redux';
import {colors} from '../../../theme';
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { cloudfront } from '../../../api';


const Order = ({item}) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  return (
    <View style={classes.largeRoot}>
      <FeatherIcon name={'navigation-2'} size={15} color={'#1E9B0E'} />
      <View style={classes.largeBody}>
        <Subheading style={classes.header}>Your Order Info</Subheading>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Item</Subheading>
          <Subheading style={classes.sectionBody}>{item.itemName}</Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Quantity</Subheading>
          <Subheading style={classes.sectionBody}>{item.quantity}</Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Pick Up</Subheading>
          <Subheading style={classes.sectionBody}>
            {item.pickupAddress}
          </Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Drop Off</Subheading>
          <Subheading style={classes.sectionBody}>
            {item.deliveryAddress}
          </Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>
            Vehicle ({item.vehicle.type})
          </Subheading>
          <Image
            source={{uri: `${cloudfront}${item.vehicle.img}`}}
            style={classes.bg}
          />
        </View>
      </View>
    </View>
  );
};

export default Order;

const classes = StyleSheet.create({
  bg: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  section: {},
  sectionHeader: {
    fontWeight: '800',
    fontSize: 11,
    lineHeight: 12,
  },
  sectionBody: {
    fontWeight: '400',
    opacity: 0.7,
    fontSize: 14,
    lineHeight: 17,
  },
  largeRoot: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: colors.intermediate.light,
    borderRadius: 10,
    marginVertical: 10,
  },
  largeBody: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  header: {
    fontWeight: '800',
    fontSize: 13,
    lineHeight: 15,
  },

  buttonRoot: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
  },
});
