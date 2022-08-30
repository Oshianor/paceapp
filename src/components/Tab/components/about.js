import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const About = () => {
  return (
    <View style={classes.root}>
      <View style={classes.formatRoot}>
        <Text style={classes.formatHeaderText}>Format: </Text>
        <Text style={classes.formatCaptionText}>
          Diadics lectures for hands-on learning
        </Text>

        <View>
          <Text style={classes.formatCaptionText}>~ 1,200 Participants</Text>
          <Text style={classes.formatCaptionText}>
            {'> '} 30 AMA PRA Category 1 Credits
          </Text>
        </View>
      </View>

      <View style={classes.formatRoot}>
        <Text style={classes.formatHeaderText}>Highlights: </Text>
        <Text style={classes.formatCaptionText}>
          Diadics lectures for hands-on learning
        </Text>

        <View>
          <Text style={classes.formatCaptionText}>* 1,200 Participants</Text>
          <Text style={classes.formatCaptionText}>
            * 30 AMA PRA Category 1 Credits
          </Text>
        </View>
      </View>
    </View>
  );
}

export default About;

const classes = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
  },
  formatRoot: {
    // marginVertical: 10,
  },
  formatHeaderText: {
    fontSize: 15,
    fontWeight: '800',
  },
});