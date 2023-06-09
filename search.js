import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header } from './template';

export const SearchScreen = ({navigation, route}) => {
    return (
        <View>
            <Header />
        <Text>This is the search page. You searched for {route.params.query}. Currently there's nothing here</Text>
        </View>
    );
  };