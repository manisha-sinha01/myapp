import React, { Component } from 'react';
import { View, Text,ImageBackground, StyleSheet } from 'react-native';

import WallpaperImg from '../images/Wallpaper.jpg';

export default class Wallpaper extends Component {

  render(){
    return(
      <ImageBackground style={styles.picture}
             source={WallpaperImg}>
         { this.props.children }

      </ImageBackground>

    );
  }
}
const styles=StyleSheet.create({

  picture:{
    flex: 1,
    width: null,
    height: null
  },
});
