import React from 'react';
import { View, StyleSheet } from "react-native";
import { Caption, Subheading } from 'react-native-paper';
import { colors } from '../../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';


const statusMap = {
  driverAccepted: 'Driver accepted this Order',
  pending: 'Get Ready',
  enrouteToPickup: 'Driver On his way to Pickup',
  arrivedAtPickup: 'Driver arrived at Pickup Location',
  pickedup: 'Package with driver',
  confirmPayment: 'Payment has been confirmed',
  enrouteToDelivery: 'Ready to Deliver',
  arrivedAtDelivery: 'Driver has arrived at Delivery Location',
  delivered: 'Delivered',
  cancelled: 'Order Cancelled',
};

const Stepper = () => {
  const {history} = useSelector(({track}) => track);
  const last = history.length - 1;
  return (
    <View style={classes.root}>
      {history.map((data, index) => (
        <View
          key={index}
          style={[
            classes.content,
            index === last && {paddingBottom: 0, borderLeftWidth: 0},
          ]}>
          <View style={classes.contentHeader}>
            <Check />
            <Subheading style={classes.headerText}>
              {statusMap[data.type]}
            </Subheading>
          </View>
          <View style={classes.contentBody}>
            <Caption>
              {data.address.length > 30
                ? `${data.address.substring(0, 30)}...`
                : data.address}
            </Caption>
            <Caption>{moment(data.createdAt).format('Do MMM HH:MMa')}</Caption>
          </View>
        </View>
      ))}
    </View>
  );
}

const Check = () => {
  return (
    <View style={classes.circle}>
      <Icon name="check" size={15} color="#f8aa26" />
    </View>
  );
}

export default Stepper

const classes = StyleSheet.create({
  root: {
    flex: 1,
    // marginHorizontal: 20,
  },
  content: {
    borderLeftWidth: 2,
    borderLeftColor: '#f8aa26',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  contentBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    borderColor: '#f8aa26',
    borderRadius: 20,
    width: 20,
    height: 20,
    borderWidth: 2,
    marginLeft: -10,
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  contentHeader: {
    marginLeft: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    lineHeight: 15,
    fontSize: 15
  },
});