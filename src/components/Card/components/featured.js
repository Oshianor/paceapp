import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img from '../../../image';
import {APP_HEIGHT, APP_WIDTH, colors} from '../../../theme';

const Featured = ({navigate}) => {
  return (
    <ImageBackground
      source={img.setupBG}
      style={classes.rootBg}
      imageStyle={{borderRadius: 15}}>
      <TouchableOpacity
        onPress={() => navigate('HomeStack', {screen: 'ViewEvent'})}
        style={classes.root}>
        <View style={classes.topRoot}>
          <Surface style={classes.topDate}>
            <Text style={classes.topDateText}>19</Text>
            <Text style={classes.topDateText}>APR</Text>
          </Surface>
        </View>

        <View style={classes.bodyRoot}>
          <Text style={classes.bodyText}>
            Content inside the ImageBackground item
          </Text>
        </View>

        <View style={classes.bottomRoot}>
          <View style={classes.bottomContent}>
            <Icon name="map-marker" size={15} color={colors.white} />
            <Text style={classes.bottomContentText}>
              Agungi Eti-osa, Lekki, London
            </Text>
          </View>

          <View style={classes.bottomIcon}>
            <Icon name="bookmark-outline" size={35} color={colors.white} />
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Featured;

const classes = StyleSheet.create({
  rootBg: {
    flex: 1,
    height: 200,
    // height: APP_HEIGHT / 2.5,
    width: APP_WIDTH / 1.9,
    marginRight: 20,
    // padding: 10,
    borderRadius: 15,
    // opacity: 0.6,
  },
  root: {
    flex: 1,
    height: 200,
    width: APP_WIDTH / 1.9,

    marginRight: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,.4)',
  },

  topRoot: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  topDate: {
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topDateText: {
    fontSize: 12,
  },
  bodyRoot: {
    flex: 3,
    justifyContent: 'center',
  },
  bodyText: {
    fontWeight: '800',
    color: colors.white,
  },

  bottomRoot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomContent: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bottomContentText: {
    color: colors.white,
  },
  bottomIcon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
