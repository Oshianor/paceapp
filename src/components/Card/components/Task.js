import React from 'react'
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import {
  Surface,
  Subheading,
  Caption,
  Paragraph,
  ActivityIndicator,
  Avatar,
} from 'react-native-paper';
import { colors } from '../../../theme';
import Icon from "react-native-vector-icons/Feather";
import {useSelector, useDispatch} from 'react-redux';
import Clipboard from '@react-native-community/clipboard';
import { feedbackAction, orderAction, trackAction } from '../../../store/actions';
import { formatMoney } from "../../../utils"
import { useNavigation } from '@react-navigation/native';
import axios from "axios"
import { api, cloudfront } from '../../../api';
import img from "../../../image"

const order = {
  pending: 'Get Ready',
  enrouteToPickup: 'Driver On his way to Pickup',
  arrivedAtPickup: 'Driver has arrived at Pickup',
  pickedup: 'Package with driver',
  enrouteToDelivery: 'Ready to Deliver',
  arrivedAtDelivery: 'Driver has arrived at Delivery',
  delivered: 'Delivered',
  cancelled: 'Order Cancelled',
};


const Task = ({ item }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const {dark} = useSelector(({theme}) => theme);
  const hr = {
    borderBottomColor: dark ? colors.hr.dark : colors.hr.light,
    borderBottomWidth: 1,
  };
  const [loading, setLoading] = React.useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(item.orderId);
    dispatch(feedbackAction.launch({ open: true, severity: "s", msg: "Order ID has been copied to your clipboard" }));
  };

  const handleProcced = async () => {
    setLoading(true);
    if (item.entry.status === 'request') {
      axios
        .get(`${api.vehicle}/${item.entry.vehicle}`)
        .then((res) => {
          dispatch(
            orderAction.setOrderData({
              entry: item.entry,
              pickupType: item.entry.pickupType,
            }),
          );
          dispatch(orderAction.setOrderData({selectedVehicle: res.data.data}));
          navigate('Home', {screen: 'Payment'});
          setLoading(false);
        }).catch((err) => {
          console.log('error', err);
          setLoading(false);
          console.log('error', err.response);
        });
    } else {
      axios
        .get(`${api.orderHistory}/${item._id}`)
        .then((res) => {
          setLoading(false);
          dispatch(trackAction.setTrackData({ orderId: item.orderId, order: item, history: res.data.data }))
          navigate('Home', {screen: 'TrackShipment'});
        })
        .catch((err) => {
          setLoading(false);
          console.log('error', err);
          console.log('error', err.response);
        });
    }
  }

  return (
    <Surface style={classes.root}>
      <View style={[classes.headerRoot, hr]}>
        <View>
          <Subheading>
            {
              item.entry.status === 'request'
              ? 'Await payment process'
              : order[item.status]
            }
          </Subheading>
          <TouchableOpacity onPress={copyToClipboard} style={classes.orderId}>
            <Caption
              style={classes.orderIDcontent}>{`#${item.orderId}`}</Caption>
            <Icon name="copy" size={20} color={colors.primary.main} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            classes.headerIconRoot,
            item.entry.status === 'request' && classes.request,
            item.status === 'delivered' && classes.delivered,
          ]}>
          <Icon
            name={item.status === 'delivered' ? 'arrow-down' : 'arrow-up-right'}
            size={15}
            color={colors.white}
          />
        </View>
      </View>
      <View style={[classes.bodyRoot, hr]}>
        <View>
          <Subheading style={classes.bodyHeaderText}>
            {' '}
            * Pickup address
          </Subheading>
          <Caption style={classes.content}>{item.pickupAddress}</Caption>
        </View>

        <View>
          <Subheading style={classes.bodyHeaderText}>
            * Delivery address
          </Subheading>
          <Caption style={classes.content}>{item.deliveryAddress}</Caption>
        </View>
      </View>

      <View style={[classes.footerRoot, hr]}>
        <View>
          <Subheading style={classes.bodyHeaderText}>Payment</Subheading>
          <Paragraph style={classes.bodyHeaderText1}>
            ₦{formatMoney(item.estimatedCost)}
          </Paragraph>
          {item.transaction && (
            <Caption style={classes.content}>
              {item.transaction.paymentMethod === 'cash'
                ? 'Cash Payment on Pickup'
                : 'Card Payment Processed'}
            </Caption>
          )}
        </View>

        <TouchableOpacity
          disabled={loading}
          onPress={handleProcced}
          style={classes.buttonRoot}>
          {loading && (
            <ActivityIndicator
              color={colors.white}
              size={15}
              style={{marginRight: 10}}
            />
          )}
          <Caption style={classes.buttonText}>
            {item.entry.status === 'request' ? 'Complete Order' : 'Track Order'}
          </Caption>
          <Icon name="arrow-right" size={10} color={colors.white} />
        </TouchableOpacity>
      </View>

      {item.status === 'delivered' && (
        <View style={classes.rateRoot}>
          <Caption style={classes.rateText}>
            What did you think of your dispatch rider? Please rate the quality
            of service.
          </Caption>
          <View style={classes.rateBody}>
            <View style={classes.rateShipper}>
              {item.rider.img ? (
                <Avatar.Image
                  source={{uri: cloudfront + item.rider.img}}
                  size={40}
                />
              ) : (
                <Avatar.Text label={item.rider.name.substr(0, 2)} size={40} />
              )}
              <View style={classes.user}>
                <Subheading style={classes.userName}>
                  {item.rider.name}
                </Subheading>
                <Caption style={classes.userCaption}>Dispatch rider</Caption>
              </View>
            </View>
            {!item.userRated ? (
              <TouchableOpacity
                disabled={loading}
                onPress={() => navigate('Rate', {rider: item.rider, orderId: item._id })}
                style={classes.buttonRateRoot}>
                <Caption style={classes.buttonText}>Rate Rider</Caption>
                <Icon name="arrow-right" size={10} color={colors.white} />
              </TouchableOpacity>
            ) : (
              <ImageBackground source={img.star} style={classes.starRoot}>
                <Subheading>{item.userRating.rating}</Subheading>
              </ImageBackground>
            )}
          </View>
        </View>
      )}
    </Surface>
  );
}

export default Task;

const classes = StyleSheet.create({
  root: {
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  headerRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerIconRoot: {
    width: 32,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary.main,
  },
  content: {
    fontSize: 13,
    fontWeight: '400',
  },
  bodyRoot: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bodyHeaderText: {
    fontSize: 15,
    color: colors.primary.main,
  },
  footerRoot: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRoot: {
    backgroundColor: colors.primary.main,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    marginRight: 5,
  },
  orderId: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderIDcontent: {
    fontSize: 13,
    fontWeight: '400',
    marginRight: 10,
  },
  request: {backgroundColor: colors.red},
  delivered: {backgroundColor: 'green'},
  rateRoot: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rateText: {
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 11,
  },
  rateBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateShipper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonRateRoot: {
    backgroundColor: colors.secondary.main,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
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
  starRoot: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
});