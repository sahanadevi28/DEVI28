
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
         <Text>Load (kg) <TextInput style = {styles.input}
            keyboardType = 'numeric' /></Text>
                

        <Text>Empty (kg)<TextInput style = {styles.input}
            keyboardType = 'numeric' /></Text>
        
        <Text >Price:  <TextInput  style = {styles.input}
            keyboardType = 'numeric'/> </Text>
       
        <Text>Total Weight (kg):  <TextInput style = {styles.input}
            keyboardType = 'numeric'/></Text>
        
         <Text>No of Bags:   <TextInput style = {styles.input}
            keyboardType = 'numeric'/></Text>
       
         <Text >Price: <TextInput  style = {styles.input}
            keyboardType = 'numeric'/> </Text>
        
         <Text>Remaining:  <TextInput style = {styles.input}
            keyboardType = 'numeric' /></Text>
        
         <Text >Price: <TextInput  style = {styles.input}
            keyboardType = 'numeric'/> </Text>
        
         <Text>Total Amount:  <TextInput style = {styles.input}
            keyboardType = 'numeric'/> </Text>
        
        
      </View>
    );
  }
}
const styles = StyleSheet.create ( {
  container: {
    flex                        :   1,
    justifyContent              :   'center',
    flexDirection               :   'column',
    padding                     :   20
  },
  group: {
    marginTop                   :   20
  },
  title:  {
    fontSize                    :   20
  },
  input:  {
    padding                     :   10,
    flex                        :   1, 
    height                      :   20,
    width                       :   60,
    marginTop                   :   10,
    borderColor: '#7a42f4',
    borderWidth                 :   2
  },
  button: {
    borderWidth                 :   1,
    padding                     :   10,
    backgroundColor             :   'lightblue'
  },
  buttonText: {
    fontSize                    :   20 
  }
}
);
