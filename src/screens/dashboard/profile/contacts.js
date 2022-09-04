import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { Avatar, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../theme';

const Contacts = () => {
  return (
    <View style={classes.root}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        // horizontal={true}
        keyExtractor={(d, i) => i.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={classes.listRoot}>
            <View style={classes.listLeftRoot}>
              <Avatar.Text label={'UK'} size={50} />
              <View style={classes.listLeftTextRoot}>
                <Text style={classes.name}>Dr John Kevin</Text>
                <Text style={classes.title}>Heart Surgeon</Text>
                <Text style={classes.address}>Sakaxhaka Clic</Text>
              </View>
            </View>

            <Icon
              name="message-bulleted"
              size={30}
              color={colors.primary.main}
              style={{
                marginHorizontal: 20,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Contacts

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
    alignItems: 'center',
  },
  listLeftTextRoot: {
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    fontSize: 13,
    color: colors.primary.main,
    fontWeight: '300',
  },
  address: {
    fontSize: 13,
    // color: colors.hr.dark
  },
});