import React, { Component } from 'react';
import { KeyboardAvoidingView,TouchableOpacity,Keyboard,Platform,ScrollView,View,Text,Image,StyleSheet,Button,Alert,AsyncStorage } from 'react-native';
import Dimensions from 'Dimensions';
import {StackNavigator} from 'react-navigation';
import t from 'tcomb-form-native';
import Wallpaper from './Wallpaper.js';
import Logo from './Logo.js';

var Form = t.form.Form;

var User = t.struct({
  username: t.String,
  password: t.String,
  rememberMe: t.Boolean
}, {

  name: 'User',
  strict: true,
  defaultProps: {
    username: 'this.state.d.username',
    password: 'this.state.d.password',

  }
});

var options = {
  fields: {
    username:{
      error: 'Insert a valid username',
      value: 'Enter the Username'
    },
    password: {
      password: true,
      secureTextEntry: true,
      value: 'password',
      error: 'Insert a valid username',
      config:{
            passwordHidden: true,
          }
    }
  }
};

export default class Form1 extends Component {

  constructor(props){
    super(props)
    this.state= {
      username: '',
      password: '',
      d: {
        username : '',
        password : ''
      }
    }
  }

 /*getInitialState = () => {
   return {
     value : {
       username: this.state.d.username,
       password: this.state.d.password
     }
   }
 }*/

  handleSubmit = async() => {
    Keyboard.dismiss();
    const value=this._form.getValue();
    let username= value.username;
    let password= value.password;
    let remember= value.rememberMe;
    this.setState({
      username: username,
      password: password,

    })

     if(remember === true)
     {
          let myArray = {username: username,
                       password: password}
            //const myArray = Object.assign({},this.state.myArray,{username : username});
          //  myArray = Object.assign({},this.state.myArray,{password : password});
           /*this.setState({
             myArray
           });*/

           AsyncStorage.setItem("myArray",JSON.stringify(myArray));
         }
           let values = await AsyncStorage.getItem("myArray");
           this.setState({d:JSON.parse(values)});
           console.log("The values are: " + this.state.d.username+ " "+ this.state.d.password);
        //   value.username = d.username;
        //   value.password = d.password;
      //  console.log("the value is " + AsyncStorage.getItem(myArray.username))

            let url= 'http://runga.rungamatteegroup.com/api/method/login?usr='+ username +'&pwd='+password;
            console.log(url);
             fetch(url,
            {
             method: 'POST',
             headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
             },

            })
             .then( (response) => response.json() )
             .then( (responseJson) => {console.log(responseJson);
                                if(responseJson.message=='Logged In'){
                                    Alert.alert(
                                      'Message',
                                      'Welcome '+ responseJson.full_name,
                                      [
                                        {text: 'Ok', onPress: () => this.props.navigation.navigate('drawerStack')},
                                      ],)
                                }
                                else{
                                  Alert.alert(
                                    'Message',
                                    'Sorry! Try Again',
                                    [
                                      {text: 'Ok'}
                                    ],
                                    {cancelable: false}
                                  )
                                }
                              })
             .catch( (error) => {
               console.error(error);
             });
    }
    loginAgain = async() => {
      let values = await AsyncStorage.getItem("myArray");
      this.setState({d:JSON.parse(values)});
      console.log("The values are: " + this.state.d.username+ " "+ this.state.d.password);
      //console.log("The values are: " + this.state.d.username+ " "+ this.state.d.password);
   let url= 'http://runga.rungamatteegroup.com/api/method/login?usr='+ this.state.d.username +'&pwd='+this.state.d.password;
      console.log(url);
       fetch(url,
      {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },

      })
       .then( (response) => response.json() )
       .then( (responseJson) => {console.log(responseJson);
                          if(responseJson.message=='Logged In'){
                              Alert.alert(
                                'Message',
                                'Welcome '+ responseJson.full_name,
                                [
                                  {text: 'Ok', onPress: () => this.props.navigation.navigate('drawerStack')},
                                ],)
                          }
                          else{
                            Alert.alert(
                              'Message',
                              'Sorry! Try Again',
                              [
                                {text: 'Ok'}
                              ],
                              {cancelable: false}
                            )
                          }
                        })
       .catch( (error) => {
         console.error(error);
       });
    }
  render(){
   return(
    <Wallpaper>
      <Logo />
      <KeyboardAvoidingView
          behavior= 'padding'

          style={styles.container}>

        <Form ref={c => this._form = c}
             type={User}
             options= {options}/>
             <View style={styles.btn}>
        <Button title="Login"
                onPress={this.handleSubmit}/>
                <Button onPress = {this.loginAgain}
                 style= {{paddingLeft: 45}}
                title= "LOGIN AS REMEMBERED USER"/>
         </View>
    </KeyboardAvoidingView>
    </Wallpaper>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles=StyleSheet.create({
  btn: {
    flexDirection: 'row'
  },
  container: {
     width: DEVICE_WIDTH-40,
    justifyContent: 'center',
    paddingBottom: 300,
    paddingLeft: 45,
  },

})
