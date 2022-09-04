import React from 'react';
import {View, StyleSheet, TouchableOpacity, SectionList} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {APP_WIDTH, colors} from '../../../theme';
import {Button, IconButton} from '../../../components/Button';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Repository = () => {
  return (
    <View style={classes.root}>
      <View style={classes.buttonContainer}>
        <Button
          label="CME Certificate"
          labelStyle={classes.buttonText}
          rootStyle={classes.buttonRoot}
        />
        <Button
          label="Other Document"
          labelStyle={classes.buttonText}
          rootStyle={classes.buttonRoot}
        />
      </View>

      <View style={classes.hr} />

      <View style={classes.buttonContainer}>
        <Text>CME CREDITS</Text>
        <IconButton
          icon={<Icon name="plus-circle" size={25} color={colors.white} />}
          label="Add Credits"
          labelStyle={classes.buttonText2}
          rootStyle={classes.buttonRoot2}
        />
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <TouchableOpacity style={classes.listRoot}>
            <View style={classes.listLeftRoot}>
              <View style={classes.box}>
                <Text style={classes.creditVal}>5</Text>
                <Text style={classes.creditText}>CREDITS</Text>
              </View>
              <View style={classes.content}>
                <Text style={classes.name}>{item}</Text>
                <Text style={classes.date}>APR 20</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={classes.headerRoot}>
            <Text>{title}</Text>
            <Text>Total Credit: 6</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Repository;

const classes = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonRoot: {
    width: APP_WIDTH / 2.5,
    height: 45,
  },
  buttonRoot2: {
    width: APP_WIDTH / 3,
    height: 45,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.white,
  },
  buttonText2: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
  },
  hr: {
    borderBottomColor: colors.hr.main,
    borderBottomWidth: 1,
  },
  headerRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 5,
    borderBottomColor: colors.primary.main,
    borderBottomWidth: 1,
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
    fontWeight: '600',
  },
  creditVal: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '700',
  },
  creditText: {
    fontSize: 8,
    color: colors.white,
    fontWeight: '500',
  },
  date: {
    fontWeight: '300',
    fontSize: 12,
    color: colors.primary.main,
  },
  content: {
    marginHorizontal: 10,
  },
});
