import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import img from '../../../image';
import BackButton from '../../../navigation/custom/BackButton';
import {APP_WIDTH, colors} from '../../../theme';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { Button } from '../../../components/Button';
import { AboutTab } from '../../../components/Tab';



const ViewEvent = ({navigation: {navigate, goBack}}) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {key: 'aboutEvent', title: 'About Event'},
      {key: 'speakers', title: 'Speakers'},
      {key: 'agenda', title: 'Agenda'},
      {key: 'venue', title: 'Venue'},
      {key: 'price', title: 'Price'},
      {key: 'accomodation', title: 'Accomodation'},
    ]);

    const renderTabBar = props => (
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={{
          backgroundColor: colors.primary.main,
        }}
        activeColor={colors.primary.main}
        inactiveColor={colors.grey.main}
        style={{backgroundColor: 'transparent', height: 40}}
        tabStyle={{width: 'auto'}}
        labelStyle={{ textTransform: "capitalize" }}
      />
    );
  return (
    <View style={classes.root}>
      <ScrollView>
        <ImageBackground source={img.setupBG} style={classes.img}>
          <SafeAreaView style={classes.BackButton}>
            <BackButton goBack={() => goBack()} />
          </SafeAreaView>
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

            <View style={classes.register}>
              <Button
                label="Register"
                rootStyle={classes.button}
                onPress={() => {}}
              />
              <Button
                label="Save to registered events"
                rootStyle={classes.button}
                // labelStyle={{ fontSize: 8 }}
                onPress={() => {}}
              />
            </View>

            <TabView
              navigationState={{index, routes}}
              renderTabBar={renderTabBar}
              renderScene={SceneMap({
                aboutEvent: AboutTab,
                speakers: AboutTab,
                agenda: AboutTab,
                venue: AboutTab,
                price: AboutTab,
                accomodation: AboutTab,
              })}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              style={{flex: 1, height: 300}}
            />
          </Surface>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default ViewEvent;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
  BackButton: {
    marginLeft: 15,
  },
  bodyRoot: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // height: 900,
    marginTop: Platform.OS == 'ios' ? 100 : 120,
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
  pagerView: {
    flex: 1,
  },
  register: {
    marginHorizontal: 20,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center"
  },
  button: {
    marginVertical: 10,
    // height: 40,
    // width: APP_WIDTH / 2.5
  },
});
