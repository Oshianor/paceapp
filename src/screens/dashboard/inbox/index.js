import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import { colors } from '../../../theme';

const Home = () => {
  return (
    <SafeAreaView style={classes.root}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        // horizontal={true}
        keyExtractor={(d, i) => i.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={classes.listRoot}>
            <View style={classes.listLeftRoot}>
              <Avatar.Text label="RX" size={45} />
              <View style={classes.content}>
                <Text style={classes.name}>Payment due this week!</Text>
                <Text style={classes.date}>2 hours ago</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  listRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: colors.hr.light,
    borderBottomWidth: 1,
  },
  listLeftRoot: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  box: {
    width: 45,
    height: 45,
    backgroundColor: colors.primary.main,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: '400',
  },
  content: {
    marginHorizontal: 10,
  },
  date: {
    fontWeight: '400',
    fontSize: 11,
    color: colors.grey.main,
  },
});
