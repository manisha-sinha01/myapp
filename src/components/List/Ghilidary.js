import React, {Component} from 'react';
import { Text,View,ListView,ScrollView} from 'react-native';
import { ListItem,List,Left,Body,Right,Icon,Fab,Button } from 'native-base';

export default class Ghatia extends Component {
  constructor(props){
    super(props);
    this.state = {
      new: [],

    }
    this.ds= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});
  }

  componentDidMount(){

    const url= 'https://runga.rungamatteegroup.com/api/resource/Tea Invoice?fields=["name","grade","status","invpr","invsuf","estatename","dop"]&filters=[["Tea Invoice", "estatename", "=", "Ghillidary Tea Estate"]]';
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then( (responseJson) => {
       this.setState({
         new: responseJson.data
       });

    })
    .catch((error) => console.error(error));
  }
  render(){
    return(
      <View>

       <ScrollView>

         <ListView
              dataSource={this.ds.cloneWithRows(this.state.new)}
               renderRow={(rowData) => <ScrollView>
                                      <ListItem style={{height: 40}}>

                                         <Body>
                                         <Text style={{fontWeight: 'bold'}}>
                                             {rowData.invpr}-{rowData.invsuf}
                                          </Text>
                                         <Text>
                                            GRADE : {rowData.grade}
                                         </Text>
                                         <Text>
                                           PACKING-TYPE : {rowData.packet_type}
                                         </Text>
                                         <Text>
                                            QUANTITY : {rowData.kgs}
                                         </Text>
                                          </Body>
                                           <Right>
                                             <Text style={{fontWeight: 'bold'}}>
                                                {rowData.status}
                                             </Text>
                                           </Right>
                                         </ListItem>

                                       </ScrollView>}
                                         />
                                         <Fab
                                          active={this.state.active}
                                          direction="left"
                                          style={{ backgroundColor: '#5067FF' }}
                                          position="topRight"
                                          onPress={() => this.setState({ active: !this.state.active })}>
                                          <Icon name="menu" />
                                             <Button style={{ backgroundColor: '#34A34F' }}
                                              onPress={() => {this.props.navigation.navigate('FilteredForm',{
                                                queryString: '["Tea Invoice", "estatename", "=", "Ghillidary Tea Estate"]'
                                              })}}>

                                               <Icon name="search" />
                                             </Button>
                                             <Button style={{ backgroundColor: '#34A34F' }}
                                              onPress={() => {}}>

                                               <Icon name="add" />
                                             </Button>

                                         </Fab>

         </ScrollView>

       </View>

    );
  }
}
