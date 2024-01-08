//dependies import ==>
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const CountryDetailScreen = ({route, navigation}) => {
  //const ==>
  const {country, appTheme} = route.params;
  //<==


  return (
    <View
      style={[
        styles.container,
        {backgroundColor: appTheme === 'dark' ? 'black' : '#fff'},
      ]}>
      <Image source={{uri: country.flags.png}} style={styles.image} />
      <View
        style={[
          styles.card,
          {backgroundColor: appTheme === 'dark' ? '#333' : '#fff'},
        ]}>
        <Text
          style={[
            styles.countryName,
            {color: appTheme === 'dark' ? '#fff' : '#333'},
          ]}>
          {country.name}
        </Text>
        <Text style={{color: appTheme === 'dark' ? '#fff' : '#333'}}>
          Region: {country.region}
        </Text>
        <Text style={{color: appTheme === 'dark' ? '#fff' : '#333'}}>
          Population: {country.population}
        </Text>
        <Text style={{color: appTheme === 'dark' ? '#fff' : '#333'}}>
          Capital: {country.capital}
        </Text>
        <Text style={{color: appTheme === 'dark' ? '#fff' : '#333'}}>
          Border Countries:
        </Text>
        <View style={styles.buttonContainer}>
          {country?.borders?.map(borderCountry => (
            <TouchableOpacity
              key={borderCountry}
              style={[
                styles.button,
                {backgroundColor: appTheme === 'dark' ? '#555' : '#eee'},
              ]}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>{borderCountry}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

//styles ==>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
  },
  buttonText: {
    color: '#000',
  },
});
//<==

export default CountryDetailScreen;
