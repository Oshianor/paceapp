import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { Avatar, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../theme';

const Resources = ({ navigation: { navigate } }) => {
  return (
    <View style={classes.root}>
      <TouchableOpacity style={classes.listRoot} onPress={() => navigate("Training")}>
        <View style={classes.listLeftRoot}>
          <Icon name="play-box" size={40} color={colors.primary.main} />
          <Text style={classes.name}>Training Video</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={classes.listRoot} onPress={() => navigate("Literature")}>
        <View style={classes.listLeftRoot}>
          <Icon name="file" size={40} color={colors.primary.main} />
          <Text style={classes.name}>Literature Review</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={classes.listRoot} onPress={() => navigate("CME")}>
        <View style={classes.listLeftRoot}>
          <Icon name="folder-multiple" size={40} color={colors.primary.main} />
          <Text style={classes.name}>CME on Demand</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Resources

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
    alignItems: "center"
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 10
  }
});