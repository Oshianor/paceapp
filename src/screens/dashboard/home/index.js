import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-paper';
import {Featured, Upcoming} from '../../../components/Card';

const Home = ({ navigation: { navigate } }) => {

  return (
    <View style={classes.root}>
      <ScrollView>
        <View style={classes.featuredRoot}>
          <Text variant="titleMedium" style={classes.featuredTitle}>
            Featured Events
          </Text>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            horizontal={true}
            keyExtractor={(d, i) => i.toString()}
            renderItem={({item}) => (
              <Featured item={item} navigate={navigate} />
            )}
          />
        </View>

        <View style={classes.upcomingRoot}>
          <Text variant="titleMedium" style={classes.featuredTitle}>
            Upcoming Events
          </Text>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            keyExtractor={(d, i) => i.toString()}
            renderItem={({item}) => (
              <Upcoming item={item} navigate={navigate} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  featuredRoot: {
    marginLeft: 20,
    marginVertical: 10,
  },
  featuredTitle: {
    fontWeight: '700',
    marginVertical: 10,
  },
  upcomingRoot: {
    marginHorizontal: 20,
    flex: 1
  },
});




















// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   FlatList,
// } from 'react-native';
// import {Text} from 'react-native-paper';
// import {Featured, Upcoming} from '../../../components/Card';

// const Home = () => {
//   return (
//     <View style={classes.root}>
//       <View style={classes.featuredRoot}>
//         <Text variant="titleMedium" style={classes.featuredTitle}>
//           Featured Events
//         </Text>
//         <FlatList
//           data={[1, 2, 3, 4, 5]}
//           horizontal={true}
//           keyExtractor={(d, i) => i.toString()}
//           renderItem={({item}) => <Featured item={item} />}
//         />
//       </View>
//       <View style={classes.upcomingRoot}>
//         <Text variant="titleMedium" style={classes.featuredTitle}>
//           Upcoming Events
//         </Text>
//         <FlatList
//           data={[1, 2, 3, 4, 5]}
//           keyExtractor={(d, i) => i.toString()}
//           renderItem={({item}) => <Upcoming item={item} />}
//         />
//       </View>
//     </View>
//   );
// };

// export default Home;

// const classes = StyleSheet.create({
//   root: {
//     flex: 1,
//   },
//   featuredRoot: {
//     marginLeft: 20,
//     marginVertical: 20,
//   },
//   featuredTitle: {
//     fontWeight: '700',
//     marginVertical: 10,
//   },
//   upcomingRoot: {
//     marginHorizontal: 20,
//   },
// });
