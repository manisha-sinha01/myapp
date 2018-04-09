import React, {Component } from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  footer:
  {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1.5,
    borderTopColor: 'black'
  },

  loadMoreBtn:
  {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText:
  {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  }
})

export default style;
