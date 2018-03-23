import React, { Component } from 'react';
import { StyleSheet,Text,View,Image } from 'react-native';
import LogoImg from '../images/Logo.jpg';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={LogoImg} style={styles.image}/>
        <Text style={styles.text}> TeaRp </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container :{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,

  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 15,
  }

});
