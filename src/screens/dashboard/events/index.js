import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {Text} from 'react-native-paper';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {APP_WIDTH, colors} from '../../../theme';
import {Featured, Upcoming} from '../../../components/Card';


const Home = ({navigation: {navigate}}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'registeredEvent', title: 'Registered Event'},
    {key: 'saved', title: 'Saved Events'},
    {key: 'pastEvent', title: 'Past Event'},
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
      // tabStyle={{width: '100%'}}
      labelStyle={{textTransform: 'capitalize', fontWeight: '600'}}
    />
  );

  return (
    <SafeAreaView style={classes.root}>
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          registeredEvent: () => (
            <View style={classes.body}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={(d, i) => i.toString()}
                renderItem={({item}) => (
                  <Upcoming item={item} navigate={navigate} />
                )}
              />
            </View>
          ),
          saved: () => (
            <View style={classes.body}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={(d, i) => i.toString()}
                renderItem={({item}) => (
                  <Upcoming item={item} navigate={navigate} />
                )}
              />
            </View>
          ),
          pastEvent: () => (
            <View style={classes.body}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={(d, i) => i.toString()}
                renderItem={({item}) => (
                  <Upcoming item={item} navigate={navigate} />
                )}
              />
            </View>
          ),
        })}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        // style={{flex: 1, height: 300}}
      />
    </SafeAreaView>
  );
};

export default Home;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  body: {
    marginHorizontal: 20,
    marginVertical: 20
  },
});
