import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const ProfileScreen = ({navigation, route}) => {
    return (
        <Text>This is {route.params.name}'s profile</Text>
    
        );
  };