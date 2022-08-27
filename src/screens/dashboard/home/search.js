import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {Upcoming} from '../../../components/Card';

const Search = ({navigation: {navigate}}) => {
  return (
    <View style={classes.root}>
      <View style={classes.upcomingRoot}>
        <Text variant="titleMedium" style={classes.featuredTitle}>
         Searched Events
        </Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6,7,8,9]}
          keyExtractor={(d, i) => i.toString()}
          renderItem={({item}) => <Upcoming item={item} />}
        />
      </View>
    </View>
  );
};

export default Search;

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
    flex: 1,
  },
});
