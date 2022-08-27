import React from 'react'
import {StyleSheet, View, SafeAreaView, Platform, TouchableOpacity} from 'react-native';
import {Text, Avatar} from 'react-native-paper';
import { colors } from '../../../theme';
import img from '../../../image';
import { SearchField } from '../../TextField';
import Icon from 'react-native-vector-icons/Ionicons';

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const current = new Date();

const HomeHeader = (props) => {
  return (
    <SafeAreaView style={classes.root}>
      <View style={classes.top}>
        <TouchableOpacity>
          <Avatar.Image size={40} source={img.setupBG} />
        </TouchableOpacity>

        <TouchableOpacity style={classes.leftbody}>
          <Icon name="search-outline" size={30} color={colors.primary.light} />
          <Text variant="labelLarge" style={classes.leftHeader}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={classes.bottom}>
        <SearchField placeholder="Search for events" />
      </View> */}
    </SafeAreaView>
  );
}

export default HomeHeader

const classes = StyleSheet.create({
  root: {
    height: Platform.OS === "ios" ? 90 : 80,
    backgroundColor: colors.primary.main,
  },
  top: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  leftbody: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center'
  },
  leftHeader: {
    color: colors.white,
    fontWeight: "400",
    fontSize: 16
  },
  bottom: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
});