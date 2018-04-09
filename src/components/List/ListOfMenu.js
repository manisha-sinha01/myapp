import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { Container,Header,Body,Card,CardItem,Left,Icon,List,ListItem } from 'native-base';

import Dimensions from 'Dimensions';
import {TabNavigator,StackNavigator} from 'react-navigation';


export default class ListOfMenu extends Component {
  render(){
       const { navigate } = this.props.navigation;
    return(

    <ScrollView enableEmptySections={true}>
      <Container style={styles.container}
        enableEmptySections={true}>
        <Card>

          <List style={styles.content}>
           <ListItem>

             <Body>
             <TouchableOpacity onPress = {() => {navigate('TeaInvoice')}}>

             <Text style={{fontWeight: 'bold'}}>TEA INVOICES</Text>
              </TouchableOpacity>

             </Body>

            </ListItem>
          </List>
          <List style={styles.content}>
           <ListItem>

             <Body>
             <TouchableOpacity onPress = {() => {}}>
             <Text style={{fontWeight: 'bold'}}>TEA REPORTS</Text>
             </TouchableOpacity>
             </Body>

            </ListItem>
          </List>
        </Card>
      </Container>
    </ScrollView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT= Dimensions.get('window').height;

const styles= StyleSheet.create({
  container:{
  height: DEVICE_HEIGHT-300,
  paddingTop:5,
  },
  content: {
    height: DEVICE_HEIGHT-800,
    width: DEVICE_WIDTH-20,
  }
})
