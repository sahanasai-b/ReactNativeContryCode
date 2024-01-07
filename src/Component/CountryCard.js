//dependies import ==>
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CountryCard = ({country, appTheme}) => {
  return (
    <View
      style={[
        styles.card,
        {backgroundColor: appTheme === 'dark' ? '#555' : '#fff'},
      ]}>
      <Image
        source={{uri: country.flags.png}}
        style={styles.flag}
        resizeMode="contain"
      />
      <Text
        style={{
          color: appTheme === 'dark' ? '#fff' : '#333',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {country.name}
      </Text>
      <Text style={{color: appTheme === 'dark' ? '#aaa' : '#666'}}>
        <Text style={{fontWeight: 'bold'}}>Population:</Text>
        {country.population}
      </Text>
      <Text style={{color: appTheme === 'dark' ? '#aaa' : '#666'}}>
        <Text style={{fontWeight: 'bold'}}>Region: </Text>
        {country.region}
      </Text>
      <Text style={{color: appTheme === 'dark' ? '#aaa' : '#666'}}>
        <Text style={{fontWeight: 'bold'}}>Capital: </Text>
        {country.capital}
      </Text>
    </View>
  );
};

//styles ==>
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#dddd',
    borderRadius: 5,
    padding: 23,
    margin: 10,
    alignItems: 'center',
  },
  flag: {
    width: '110%',
    height: 250,
    marginBottom: 10,
  },
});

export default CountryCard;
