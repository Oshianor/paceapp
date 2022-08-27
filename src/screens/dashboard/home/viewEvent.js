import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Platform,
} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import img from '../../../image';
import BackButton from '../../../navigation/custom/BackButton';
import {APP_WIDTH, colors} from '../../../theme';

const ViewEvent = ({navigation: {navigate, goBack}}) => {
  return (
    <View style={classes.root}>
      <ImageBackground source={img.setupBG} style={classes.img}>
        <SafeAreaView style={classes.BackButton}>
          <BackButton goBack={() => goBack()} />
        </SafeAreaView>
        <ScrollView>
          <Surface style={classes.bodyRoot}>
            <View style={classes.headerRoot}>
              <View style={classes.top}>
                <Text style={classes.headerText}>
                  Society of cardiovacur anesthesiologist (SCA) 2021 annual
                  meetings and workshops
                </Text>
                <Icon name="bookmark-outline" size={40} />
              </View>

              <View style={classes.itemRoot}>
                <Surface style={classes.itemIcon} elevation={2}>
                  <Icon
                    name="calendar-outline"
                    size={20}
                    color={colors.white}
                  />
                </Surface>
                <Text style={classes.itemText}>APR 21-27, 2022</Text>
              </View>

              <View style={classes.itemRoot}>
                <Surface style={classes.itemIcon} elevation={2}>
                  <Icon
                    name="location-outline"
                    size={20}
                    color={colors.white}
                  />
                </Surface>
                <Text style={classes.itemText}>Montreal, Quebec, Canada</Text>
              </View>
            </View>
          </Surface>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ViewEvent;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {},
  BackButton: {
    marginLeft: 15,
  },
  bodyRoot: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 400,
    marginTop: Platform.OS == 'ios' ? 100 : 200,
    elevation: 5,
  },
  headerRoot: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '300',
    // textTransform: "capitalize",
    width: APP_WIDTH / 1.5,
  },
  itemRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  itemIcon: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.primary.main,
    marginRight: 15,
  },
  itemText: {},
});
