//dependicies import ==>
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
//project file import ==>
import CountryCard from '../Component/CountryCard';
import FilterCountry from '../Component/Filters';
import {apiURL} from '../services/api';

const HomeScreen = ({navigation, appTheme}) => {
  //const ==>
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  //<==

  //useeffect ==>
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(
      country =>
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedRegion === '' || country.region === selectedRegion),
    );

    setFilteredCountries(filtered);
  }, [search, countries, selectedRegion]);
  //<==

  //api calls ==>
  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      const person = response.data;
      setCountries(person);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getAllCountries = async region => {
    try {
      const res = await axios.get(`${apiURL}/region/${region}`);
      if (!res.ok) throw new Error('Something went wrong!');
      const data = await res.json();
      setSelectedRegion(data);
    } catch (error) {
      setError(error.message);
    }
  };

  //<==

  //actions ==>
  const handleCountryPress = country => {
    navigation.navigate('CountryDetail', {country});
  };
  //<==

  return (
    <View>
      <View
        style={[
          styles.container,
          {backgroundColor: appTheme == 'dark' ? '#333' : 'white'},
        ]}>
        <Image
          source={require('../Assests/search.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Search for a country"
          value={search}
          onChangeText={text => setSearch(text)}
          placeholderTextColor={appTheme === 'dark' ? 'white' : 'black'}
        />
      </View>
      <View>
        <FilterCountry
          onSelect={getAllCountries}
          appTheme={appTheme}
          selectedRegion={selectedRegion}
        />
      </View>
      <FlatList
        data={filteredCountries}
        keyExtractor={item => item.alpha3Code}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleCountryPress(item)}>
            <CountryCard country={item} appTheme={appTheme} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

//styles ==> 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    padding: 5,
    shadowRadius: 4,
    marginLeft: 13,
    marginRight: 13,
    borderBottomColor: 'red',
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
export default HomeScreen;
