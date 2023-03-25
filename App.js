import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable, TextInput } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header } from '@rneui/themed';
import {TodayScreen} from './today_page.js';
import {SearchScreen} from './search.js';
import { SettingsScreen } from './settings.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
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

const TestScreen = ({navigation}) => {
  let header_height = 45;
  return (
    <View
      style={[styles.container,]}>
      <View
        style={{
            height: header_height,
            flexDirection: 'row',
            backgroundColor: 'darkgray',
        }}>
        <Pressable onPress={() =>
          navigation.navigate('Home')
        }>
          <Image
            source={require('./img/home.png')}
            style={{width: header_height, height: header_height}}
          />
        </Pressable>
        <TextInput
          style={{flex: 1, height: header_height, borderWidth: 2}}
          onSubmitEditing={(val) => navigation.navigate('Search', {query: val.nativeEvent.text})}
        />
          <Pressable onPress={() =>
            navigation.navigate('Search', {query: ""})
          }>
            <Image
              source={require('./img/search.png')}
              style={{width: header_height, height: header_height}}
            />
          </Pressable>
        <Pressable onPress={() =>
          navigation.navigate('Settings')
        }>
          <Image
            source={require('./img/settings.png')}
            style={{width: header_height, height: header_height}}
          />
        </Pressable>
      </View>
    </View>
  );
};

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//       {/* Rest of your app code */}
//     </NavigationContainer>
//   );
// };

const HomeScreen = ({navigation}) => {
  return (
    <View>
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
  );
};

// export default function MyStack() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

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