import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { Avatar, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../theme';

const Training = () => {
  return (
    <View style={classes.root}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        // horizontal={true}
        keyExtractor={(d, i) => i.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={classes.listRoot}>
            <View style={classes.listLeftRoot}>
              <Icon name="play-box" size={40} color={colors.primary.main} />

              <View style={classes.listLeftTextRoot}>
                <Text style={classes.name}>Training Video</Text>
                <Text style={classes.title}>Provider Name</Text>
                <Text style={classes.address}>June 20, 2021</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Training

const classes = StyleSheet.create({
  root: {
    flex: 1,
    // marginHorizontal: 20,
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
    alignItems: 'center'
  },
  listLeftTextRoot: {
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 13,
    color: colors.primary.main,
    fontWeight: '300',
  },
  address: {
    fontSize: 12,
    // color: colors.hr.dark
  },
});