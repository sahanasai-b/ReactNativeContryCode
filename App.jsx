// dependies Import ==>
import React, {useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//project file import ==>
import HomeScreen from './src/Screens/HomeScreen.js';
import CountryDetailScreen from './src/Screens/CountryDetailScreen.js';
import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';

const App = () => {
  //const ==>
  const deviceColorScheme = useColorScheme();
  const [appTheme, setAppTheme] = useState(deviceColorScheme || 'light');
  const Stack = createNativeStackNavigator();
  const theme = appTheme === 'dark' ? DarkTheme : DefaultTheme;

  //<==

  //Methods ==>
  const toggleTheme = () => {
    const newTheme = appTheme === 'light' ? 'dark' : 'light';
    setAppTheme(newTheme);
  };

  const getButtonStyle = () => {
    return {
      backgroundColor: appTheme === 'dark' ? 'black' : 'white',
      color: appTheme === 'dark' ? 'white' : 'black',
    };
  };
  //<==

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            header: () => (
              <View
                style={[
                  styles.homeStackContainer,
                  {backgroundColor: appTheme === 'dark' ? 'black' : 'white'},
                ]}>
                <Text
                  style={[
                    styles.topHeaderView,
                    {color: appTheme === 'dark' ? 'white' : 'black'},
                  ]}>
                  Where is the World?
                </Text>
                <Image
                  source={require('./src/Assests/editIcon.png')}
                  style={styles.imageStyles}
                  onPress={toggleTheme}
                />
                <Text onPress={toggleTheme} style={getButtonStyle()}>
                  Dark Mode{' '}
                </Text>
              </View>
            ),
          }}>
          {({navigation}) => (
            <HomeScreen
              navigation={navigation}
              appTheme={appTheme}
              toggleTheme={toggleTheme}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="CountryDetail"
          component={CountryDetailScreen}
          initialParams={{appTheme}}
          options={{
            headerShown: true,
            headerTitle: 'Country Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//styles ==>
const styles = StyleSheet.create({
  homeStackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  topHeaderView: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  imageStyles: {
    width: 20,
    height: 20,
    marginLeft: 150,
  },
});
export default App;
