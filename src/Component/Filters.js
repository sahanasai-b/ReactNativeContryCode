import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// import { Picker } from '@react-native-picker/picker';

const FilterCountry = ({onSelect, appTheme}) => {
  const selectHandler = regionName => {
    onSelect(regionName);
  };

  return (
    <View
      style={[
        styles.filterStyles,
        {borderWidth: 1, borderColor: appTheme == 'dark' ? '#fff' : '#333'},
      ]}>
      <View style={styles.container}>
        <Text style={[styles.textStyle,{color :appTheme == 'dark' ? '#fff' : '#333'}]}>Filter By Region</Text>
        <Image
          source={require('../Assests/arrow-down.png')}
          style={styles.imageStyle}
        />
      </View>
      {/* <Picker
        selectedValue={'All Regions'}
        style={{ color: appTheme === "dark" ? '#fff' : 'black' }}
        onValueChange={(itemValue) => selectHandler(itemValue)}
      >
        <Picker.Item label="Filter by Region" value="All Regions" />
        <Picker.Item label="Africa" value="Africa" />
        <Picker.Item label="America" value="America" />
        <Picker.Item label="Asia" value="Asia" />
        <Picker.Item label="Europe" value="Europe" />
        <Picker.Item label="Oceania" value="Oceania" />
      </Picker> */}
    </View>
  );
};

//styles ==>
const styles = StyleSheet.create({
  filterStyles: {
    borderRadius: 3,
    width: '50%',
    marginTop: 10,
    height: 50,
    marginLeft: 10,
    backgroundColor: 'fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  textStyle: {
    marginTop: 10,
  },
  imageStyle: {
    marginLeft: 'auto',
    marginTop: 10,
  },
});
export default FilterCountry;
