import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Surface, Subheading, Avatar, Caption, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeaterIcon from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../../../theme';
import { Button } from '../../Button';
import { deliveryAction } from "../../../store/actions"

const ConfirmPickup = () => {
  const dispatch = useDispatch();
  const {dark} = useSelector(({theme}) => theme);

  return (
    <View style={classes.root}>
      <Surface style={classes.container}>
        <View style={classes.actionRoot}>
          <View style={classes.item}>
            <Icon
              name="chevron-down"
              size={20}
              color={dark ? colors.secondary.light : colors.secondary.dark}
            />
            <TimeDistance />
          </View>

          <View style={classes.item}>
            <TouchableOpacity style={classes.actionButtonRoot}>
              <FeaterIcon
                name="phone-call"
                size={30}
                color={dark ? colors.secondary.light : colors.secondary.dark}
              />
            </TouchableOpacity>
            <TouchableOpacity style={classes.actionButtonRoot}>
              <FeaterIcon
                name="message-square"
                size={30}
                color={dark ? colors.secondary.light : colors.secondary.dark}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Button
          label="Confirm Pickup Code"
          rootStyle={classes.ButtonRoot}
          labelStyle={classes.Button}
        />

        <TouchableOpacity style={classes.productRoot}>
          <Caption style={classes.arriveButton}>
            Arrived at Pickup Location
          </Caption>
        </TouchableOpacity>
      </Surface>
    </View>
  );
};

export default ConfirmPickup;

const TimeDistance = () => {
  const {dark} = useSelector(({theme}) => theme);
  return (
    <View style={[classes.timeDistanceRoot, { backgroundColor: dark ? colors.white : colors.black }]}>
      <Caption style={[classes.timeDistanceText, { color: dark ? colors.black : colors.white }]} >45 mins</Caption>
      <View
        style={[
          classes.hr,
          {borderRightColor: dark ? colors.secondary.main : colors.secondary.light},
        ]}
      />
      <Caption style={[classes.timeDistanceText, { color: dark ? colors.black : colors.white }]} >45 mins</Caption>
    </View>
  );
}

const classes = StyleSheet.create({
  root: {position: 'absolute', bottom: 0, paddingHorizontal: 20, width: '100%'},
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 1,
    paddingHorizontal: 20,
  },
  timeDistanceRoot: {
    height: 35,
    width: 130,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  hr: {
    height: 20,
    borderRightWidth: 1,
  },
  ButtonRoot: {
    backgroundColor: colors.primary.main,
    marginVertical: 20,
  },
  Button: {
    // color: colors.primary.main,
  },
  productId: {
    color: colors.primary.main,
  },
  productRoot: {
    alignItems: 'center',
    flexDirection: 'row',
    fontWeight: '300',
  },
  actionRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  actionButtonRoot: {
    justifyContent: 'center',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arriveButton: {
    fontSize: 15,
  },
});
