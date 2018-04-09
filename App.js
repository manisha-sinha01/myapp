import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import DataPrint from './src/components/GardenTabs/DataPrint.js'
import ListOfMenu from './src/components/List/ListOfMenu.js';
import LoginForm from './src/components/LoginScreen/Form1.js';

import FilteredForm from './src/components/FilterForm/FilteredForm.js';
import DataDisplay from './src/components/FilteredData/DataDisplay.js';
import MainPage from './src/components/common/MainPage.js';
import Ghatia from './src/components/GardenTabs/Ghatia.js';
import Mazbat from './src/components/GardenTabs/Mazbat.js';
import Chandighat from './src/components/GardenTabs/Chandighat.js';
import Ghilidary from './src/components/GardenTabs/Ghilidary.js';


const stackNav1 = StackNavigator({
  FilteredForm: {screen: FilteredForm},
  DataDisplay : {screen : DataDisplay},
  DataPrint : {screen: DataPrint}
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
)

const GhatiaStack = StackNavigator({
  Ghatia : { screen: Ghatia},
  DataPrint : {screen: DataPrint},
  stackNav1: {screen: stackNav1},

},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})

const MazbatStack = StackNavigator({
  Mazbat : { screen: Mazbat},
  DataPrint : {screen: DataPrint},
  stackNav1: {screen: stackNav1},

},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})

const ChandighatStack = StackNavigator({
  Chandighat : { screen: Chandighat},
  DataPrint : {screen: DataPrint},
  stackNav1: {screen: stackNav1},

},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})

const GhilidaryStack = StackNavigator({
  Ghilidary : { screen: Ghilidary},
  stackNav1: {screen: stackNav1},

},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})

const TeaInvoice = TabNavigator({
   GHT : {screen: GhatiaStack},
   MZT : {screen: MazbatStack},
   CGT : {screen: ChandighatStack},
   GHD : {screen: GhilidaryStack},

},
{
  tabBarPosition:'bottom',
})


const stackNavNew = StackNavigator({
  ListOfMenu : {screen : ListOfMenu},
  TeaInvoice : {screen : TeaInvoice},

},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})

const stackAccess= StackNavigator({
  ListOfMenu : {screen : stackNavNew},
  TeaInvoice : {screen : TeaInvoice},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})


const LoginStack = StackNavigator({
  LoginForm: {screen: LoginForm},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }

})
const DrawerStack = DrawerNavigator({
  'List Of Menu': {screen: stackAccess},
  'Tea Invoice' : {screen : TeaInvoice},

    'Extra' : {screen : MainPage},
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack },
},
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
       title : 'TeaRp',

      headerLeft:
      <Icon name="menu"
           style={{paddingLeft:10}}
           onPress={() =>
           navigation.navigate('DrawerOpen')}>
        </Icon>

    })
})

// login stack


// Manifest of possible screens
const App = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'TeaRp',
  initialRouteName: 'loginStack'
})

export default App;
