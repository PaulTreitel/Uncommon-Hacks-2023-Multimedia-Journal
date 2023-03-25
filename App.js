import { StyleSheet, Text, View, Button, Image, Pressable, TextInput } from 'react-native';
import * as React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TodayScreen} from './today_page.js';
import {SearchScreen} from './search.js';
import { SettingsScreen } from './settings.js';
import { Header } from './template.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome '} }
        />
        <Stack.Screen
          name="Today"
          component={TodayScreen}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const TestScreen = () => {
  return (
    <View>
      <Header/>
    </View>
  )
}

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View style={{flexDirection: "column"}}>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Today', {name: 'Jane'})
          }
        />
        <View style={styles.container}/>
        <Button
          title="Go to THE TEST PAGE"
          onPress={() =>
            navigation.navigate('Test')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});