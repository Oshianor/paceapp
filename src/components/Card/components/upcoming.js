import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Subheading, Surface, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img from '../../../image';
import {APP_HEIGHT, APP_WIDTH, colors} from '../../../theme';

const Upcoming = ({navigate}) => {

  console.log('navigate', navigate);
  return (
    <TouchableOpacity
      style={classes.root}
      onPress={() => navigate('HomeStack', {screen: 'ViewEvent'})}>
      <View style={classes.container}>
        <Image source={img.setupBG} style={classes.img} />
        <View style={classes.leftRoot}>
          <View style={classes.topRoot}>
            <Text>19 APR 2022</Text>
            <Icon name="bookmark-outline" size={25} color={colors.black} />
          </View>
          <View style={classes.bodyRoot}>
            <Text style={classes.bodyText}>
              Content inside the ImageBackground item
            </Text>
          </View>
          <View style={classes.bottomRoot}>
            <Icon name="map-marker" size={15} color={colors.grey.main} />
            <Text style={classes.bottomContentText}>
              Agungi Eti-osa, Lekki, London
            </Text>
          </View>
        </View>
      </View>

      <View style={classes.hr} />
    </TouchableOpacity>
  );
};

export default Upcoming;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    // height: 160,
    // width: APP_WIDTH / 1.5,
    borderRadius: 15,
    // marginVertical: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    height: 130,
    width: 110,
    borderRadius: 10
  },
  leftRoot: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
    // alignItems: 'center'
  },
  topRoot: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyText: {
    fontWeight: '800',
    color: colors.black,
  },
  bottomRoot: {
    // flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginRight: 10,
  },
  bottomContentText: {
    color: colors.grey.dark,
  },

  hr: {
    borderBottomWidth: 1,
    borderBottomColor: colors.hr.light,
    marginVertical: 15
  },
});

