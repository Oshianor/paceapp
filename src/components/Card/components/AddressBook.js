import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { APP_WIDTH, colors } from '../../../theme';

const AddressBook = ({item, size, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        classes.root,
        item.default && classes.selected,
        size === 'sm' && classes.smallRoot,
      ]}>
      {size === 'lg' && <Large item={item} />}
      {size === 'sm' && <Small item={item} />}
    </TouchableOpacity>
  );
};

AddressBook.defaultProps = {
  selected: false,
  size: 'lg',
};

export default AddressBook;

const Large = ({item}) => {
  return (
    <View style={classes.largeRoot}>
      <Icon
        name="navigation"
        size={15}
        color={item.default ? '#1E9B0E' : colors.black}
      />
      <View style={classes.largeBody}>
        {item.default ? (
          <Subheading style={classes.header}>
            Default Address({`${item.description}`})
          </Subheading>
        ) : (
          <Subheading style={classes.header}>
            ({`${item.description}`})
          </Subheading>
        )}

        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Name</Subheading>
          <Subheading style={classes.sectionBody}>{item.fullName}</Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Phone Number</Subheading>
          <Subheading style={classes.sectionBody}>
            {`+${item.countryCode}${item.phoneNumber}`}
          </Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Address</Subheading>
          <Subheading style={classes.sectionBody}>{item.address}</Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>State/Country</Subheading>
          <Subheading style={classes.sectionBody}>{`${item.state}, ${item.country}`}</Subheading>
        </View>
      </View>
      {/* {selected && (
        <Icon
          name="check-circle"
          size={20}
          color={item.default ? '#1E9B0E' : colors.black}
        />
      )} */}
    </View>
  );
};


const Small = ({item}) => {
  return (
    <View style={[classes.largeRoot]}>
      <View style={classes.largeBody}>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Name</Subheading>
          <Subheading style={classes.sectionBody}>{item.fullName}</Subheading>
        </View>
        <View style={classes.section}>
          <Subheading style={classes.sectionHeader}>Address</Subheading>
          <Subheading style={classes.sectionBody}>{item.address}</Subheading>
        </View>
      </View>
      {item.default && (
        <Icon
          name="check-circle"
          size={25}
          color={item.default ? '#1E9B0E' : colors.black}
        />
      )}
    </View>
  );
};

const classes = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(51, 51, 51, 0.1)',
    marginVertical: 10,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: 'rgba(30, 155, 14, 0.1)',
  },
  section: {},
  sectionHeader: {
    fontWeight: '600',
    fontSize: 12,
  },
  sectionBody: {
    fontWeight: '400',
    opacity: 0.7,
    fontSize: 14,
  },
  largeRoot: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: "baseline"
  },
  smallRoot: {
    width: APP_WIDTH / 1.5
  },
  largeBody: {
    flexDirection: 'column',
    marginLeft: 10
  },
  header: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 13
  },
});
