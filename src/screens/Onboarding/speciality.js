import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from '../../components/Button';
import {Radio} from '../../components/Radio';
import { colors } from '../../theme';
import img from '../../image';

const list = [
  'Allergy and Immunology',
  "Anesthesiology",
  "Dermatology",
  "Diagnostic Radiology", 
  "Emergency Medicine",
  "Internal Medicine",
  "Leadership and Management in Medicine",
  "Meical Genetics",
  "Neurology",
  "Neclear Medicine",
  "Obstetrics and Gynecology",
  "Ophthalmology",
  "Pathology",
  "Pharmacology",
  "Physical Medicine and Rehabilitation",
  "Preventive Medicine",
  "Psychiatry",
  "Radiation Oncology",
  "Surgery",
  "Urology"
]

const Speciality = ({navigation: {navigate}}) => {
  const [selected, setSelected] = React.useState([]);

    const handleChange = select => {
      console.log('select', select);

      // check if it includes
      if (!selected.includes(select)) {
        const newSelect = [select, ...selected];
        setSelected(newSelect);
      } else {
        const newSelect = [...selected];
        // find the index
        const selectIndex = newSelect.indexOf(select);
        newSelect.splice(selectIndex, 1);
        setSelected(newSelect);
      }
    };

    const humanize = str => {
      return str.replace(/[^A-Z0-9]+/gi, '_').toLowerCase();
    };

  return (
    <SafeAreaView style={classes.root}>
      <ScrollView contentContainerStyle={classes.contentRoot}>
        <View style={classes.content}>
          <Image source={img.icon} style={classes.img} />

          <Text variant="titleLarge" style={classes.title}>
            What speciality are you interested in?
          </Text>
          <Text variant="bodySmall" style={classes.titleCaption}>
            Choose as many as you want
          </Text>

          <View style={classes.listRoot}>
            {list.map((ls, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => handleChange(humanize(ls))}
                style={classes.list}>
                <Radio
                  rootStyle={classes.radioRoot}
                  selected={selected.includes(humanize(ls))}
                  selectedStyle={classes.selectedStyle}
                />
                <Text style={classes.radioText}>{ls}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={classes.buttonRoot}>
        <Button
          label="Complete Signup"
          onPress={() => navigate('Terms')}
          rootStyle={classes.buttonRyt}
          labelStyle={classes.buttonLabel}
        />
      </View>
    </SafeAreaView>
  );
};

export default Speciality;

const classes = StyleSheet.create({
  root: {
    flex: 1,

    backgroundColor: colors.primary.main,
  },
  contentRoot: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  img: {
    width:45,
    height:45,
  },
  content: {
    // flex: 3,
    justifyContent: 'center',
  },
  title: {
    marginVertical: 10,
    fontWeight: '700',
    width: '70%',
    color: colors.white,
  },
  titleCaption: {
    color: colors.grey.light,
  },
  listRoot: {
    marginVertical: 15,
  },
  list: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioRoot: {
    width: 20,
    height: 20,
    borderColor: colors.white,
    borderRadius: 3,
  },
  selectedStyle: {
    borderColor: colors.white,
  },
  radioText: {
    color: colors.white,
    marginHorizontal: 10,
  },
  buttonRoot: {
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  buttonRyt: {
    marginVertical: 10,
    backgroundColor: colors.primary.light,
  },
  buttonLabel: {
    color: colors.primary.main,
  },
});