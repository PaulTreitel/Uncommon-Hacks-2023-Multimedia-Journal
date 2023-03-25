import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header } from '@rneui/themed';
import {TodayScreen} from './today_page.js';
import {SearchScreen} from './search.js';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const TestScreen = ({navigation}) => {
  return (
    <View
      style={[styles.container,]}>
        <View
        style={{
            height: 75,
            flexDirection: 'row',
        }}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
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