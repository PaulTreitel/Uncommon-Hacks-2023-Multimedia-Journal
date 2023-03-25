import { StyleSheet, Text, View, Button, Image, Pressable, TextInput } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

const header_height = 35;
const header_margin = 6;


export const Header = () => {
    const navigation = useNavigation();
    return (
      <View style={{height: header_height + header_margin}}>
        <View
          style={{flex: 1}}>
          <View
            style={{
                height: header_height + header_margin,
                flexDirection: 'row',
                backgroundColor: 'darkgray',
            }}>
            <Pressable 
              onPress={() => navigation.navigate('Home')}
              style={[header_styles.header_box]}
            >
              <Image
                source={require('./img/home.png')}
                style={{width: header_height, height: header_height}}
              />
            </Pressable>
            <TextInput
              style={[header_styles.header_box,
                {
                  flex: 1, 
                  height: header_height, 
                  borderWidth: 2
                }]}
              onSubmitEditing={(val) => navigation.navigate('Search', {query: val.nativeEvent.text})}
            />
              <Pressable
                onPress={() => navigation.navigate('Search', {query: ""})}
                style={[header_styles.header_box]}
              >
                <Image
                  source={require('./img/search.png')}
                  style={{width: header_height, height: header_height}}
                />
              </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Settings')}
              style={[header_styles.header_box]}
            >
              <Image
                source={require('./img/settings.png')}
                style={{width: header_height, height: header_height}}
              />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

const header_styles = StyleSheet.create({
    header_box: {
        marginHorizontal: 5,
        marginTop: 3,
    },
});