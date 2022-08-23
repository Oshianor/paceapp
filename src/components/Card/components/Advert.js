import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Subheading, Surface} from 'react-native-paper';
import img from '../../../image';
const {width} = Dimensions.get('screen');
import { colors } from "../../../theme"

class Slider extends React.Component {
  state = {
    current: 0
  }

  onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log('Visible items are', viewableItems);
    console.log('Changed in this iteration', changed);
    this.setState({
      current: viewableItems[0].index
    });
  };

  render() {
    const { current } = this.state;
    const data = [
      img.mastercardBanner,
      img.pizza
    ];
    return (
      <>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(d, i) => i.toString()}
          renderItem={({item}) => (
            <Surface style={classes.surface}>
              <Image source={item} style={classes.bg} />
            </Surface>
          )}
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
        />
        <View style={classes.indicatorRoot}>
          {data.map((d, i) => (
            <View key={i} style={[classes.indicator, i === current && classes.currentIndicator]} />
          ))}
        </View>
      </>
    );
  }
}

export default Slider;


const classes = StyleSheet.create({
  surface: {
    height: 168,
    marginVertical: 10,
    backgroundColor: 'black',
    // justifyContent: 'center',
    borderRadius: 10,
    // alignItems: 'center',
    marginRight: 20,
  },
  bg: {
    height: 168,
    // height: width / 2.2,
    // width: width / 2.1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  indicatorRoot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 20,
    height: 5,
    borderRadius: 2,
    backgroundColor: colors.ligthGrey,
    marginHorizontal: 2
  },
  currentIndicator: {
    backgroundColor: colors.black,
  },
});