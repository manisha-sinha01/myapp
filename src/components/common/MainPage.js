import React, {Component} from 'react';
import { Text,View,StyleSheet } from 'react-native';

export default class MainPage extends Component {
  render(){
    return(
      <View style={styles.main}>
        <Text>Hi </Text>

      </View>
    );
  }
}

const styles= StyleSheet.create({
  main: {
    flex: 0.99
  }
})
