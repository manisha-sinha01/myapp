import React, { Component } from 'react';
import{
  View,
  Text,
  Navigator,
}from 'react-native';

//import Logo from '/home/manisha/react-projects/TeaRp/app/LoginFolder/Logo.js';
import Wallpaper from '/home/manisha/myapp/src/components/LoginScreen/Wallpaper.js';
import Logo from '/home/manisha/myapp/src/components/LoginScreen/Logo.js';
import Form from '/home/manisha/myapp/src/components/LoginScreen/Form1.js';
import MainPage from '/home/manisha/myapp/src/components/common/MainPage.js';

export default class Login extends Component{

  render(){
    return(
      <Wallpaper>
         <Logo />
         <Form />
      </Wallpaper>
    );
  }
}
