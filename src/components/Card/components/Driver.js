import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {colors} from '../../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, Caption, Subheading, Surface} from 'react-native-paper';
import FeaterIcon from 'react-native-vector-icons/Feather';
import { cloudfront } from '../../../api';
import {useSelector, useDispatch} from 'react-redux';

const DriverDetails = ({data}) => {
  const {order} = useSelector(({track}) => track);

  if (!order) {
    return null
  }

  return (
    <Surface style={classes.bottomRoot}>
      {order.rider ? (
        <>
          <View style={classes.userRoot}>
            {order.rider.img ? (
              <Avatar.Image
                source={{uri: cloudfront + order.rider.img}}
                size={40}
              />
            ) : (
              <Avatar.Text label={order.rider.name.substr(0, 2)} size={40} />
            )}
            <View style={classes.user}>
              <Caption style={classes.userCaption}>Your Shipper</Caption>
              <Subheading style={classes.userName}>
                {order.rider.name}
              </Subheading>
            </View>
          </View>
          <View style={classes.actionRoot}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `tel:${order.rider.countryCode}${order.rider.phoneNumber}`,
                )
              }
              style={classes.actionButtonRoot}>
              <FeaterIcon name="phone-call" size={30} style={classes.icon} />
              <Caption style={classes.actionButtonText}>Call</Caption>
            </TouchableOpacity>
            {/* <TouchableOpacity style={classes.actionButtonRoot}>
          <FeaterIcon name="message-square" size={30} style={classes.icon} />
          <Caption style={classes.actionButtonText}>Message</Caption>
        </TouchableOpacity> */}
          </View>
        </>
      ) : (
        <View style={classes.userRoot}>
          <Subheading style={classes.userName}>
            No Rider has been assigned to this order
          </Subheading>
        </View>
      )}
    </Surface>
  );
};

export default DriverDetails;

const classes = StyleSheet.create({
  bottomRoot: {
    position: 'absolute',
    bottom: 0,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 110,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  userRoot: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    marginHorizontal: 5,
  },
  userCaption: {
    lineHeight: 12,
    fontSize: 11,
  },
  userName: {
    lineHeight: 16,
    fontSize: 15,
    fontWeight: '600',
  },
  actionRoot: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  actionButtonRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  actionButtonText: {
    fontSize: 9,
    fontWeight: '400',
  },
  icon: {
    opacity: 0.6,
    fontWeight: '300',
  },
});
{/* <key>LSApplicationQueriesSchemes</key>
<array> 
  <string>tel</string> 
  <string>telprompt</string> 
</array>  */}