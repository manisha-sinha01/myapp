import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
import { Container,Content,Fab,Icon,Button } from 'native-base';

export default class options extends Component {

  constructor(props) {
    super(props);
    this.state={
      active : true
    };
  }
  handleDisplay(){
    const url = 'https://runga.rungamatteegroup.com/api/resource/Tea Invoice/?fields=["invpr","invsuf","grade","status","dop","kgs","mark","tea_brand","fineleaf","sold_rate","sale_date","customer"]'
     this.props.navigation.navigate('DataDisplay',{
      url: url
    });
  }

 render() {
    return (
    <Container>

      <View style={styles.container}>

        <Fab
         active={this.state.active}
         direction="up"
         style={{ backgroundColor: '#5067FF' }}
         position="bottomRight"
         onPress={() => this.setState({ active: !this.state.active })}>
         <Icon name="menu" />
            <Button style={{ backgroundColor: '#34A34F' }}
             onPress={() => {this.props.navigation.navigate('FilteredForm')}}>

              <Icon name="search" />
            </Button>
            <Button style={{ backgroundColor: '#34A34F' }}
             onPress={() => {this.handleDisplay()}}>

              <Icon name="add" />
            </Button>

        </Fab>
      </View>

  </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})
