import React, {Component} from 'react';
import { Text,View,ListView,ScrollView,ActivityIndicator,TouchableOpacity,TouchableHighlight,StyleSheet} from 'react-native';
import { ListItem,List,Left,Body,Right,Icon,Fab,Button } from 'native-base';
import s from './styles.js';

export default class Chandighat extends Component {
  constructor(props){
    super(props);
    this.page_length=20;
    this.state = {
      new: [],
      fetching_from_server: false,
      url: 'https://runga.rungamatteegroup.com/api/resource/Tea Invoice?fields=["invpr","invsuf","grade","status","dop","kgs","mark","tea_brand","fineleaf","sold_rate","sale_date","customer"]&filters=[["Tea Invoice", "estatename", "=", "Chandighat Tea Estate"]]&limit_page_length='+this.page_length
    }

    this.ds= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});
  }

  renderHeader1(){
    return(
      <View

      style={s.footer}>
      <TouchableOpacity activeOpacity = { 0.9 }
      onPress={() => {this.props.navigation.navigate('FilteredForm',{
        queryString: '["Tea Invoice", "estatename", "=", "Chandighat Tea Estate"]',
        name: 'Chandighat'
      })}}
      style={s.loadMoreBtn}>
          <Text>Filter Data</Text>

      </TouchableOpacity>
  </View>
    );
  }


  loadMoreData = () => {
    this.page_length = this.page_length + 20;

      this.setState({ fetching_from_server: true }, () =>
      {
          clearTimeout(this.timer);

          this.timer = -1;

          this.timer = setTimeout(() =>
          {
              fetch('https://runga.rungamatteegroup.com/api/resource/Tea Invoice?fields=["invpr","invsuf","grade","status","dop","kgs","mark","tea_brand","fineleaf","sold_rate","sale_date","customer"]&filters=[["Tea Invoice", "estatename", "=", "Chandighat Tea Estate"]]&limit_page_length='+this.page_length)
              .then((response) => response.json())
              .then((responseJson) =>
              {
                  this.setState({ new: [ ...this.state.new, ...responseJson.data ], fetching_from_server: false });
              })
              .catch((error) =>
              {
                  console.error(error);
              });
          }, 1500);
      });
  }
   renderFooter1(){
       return(

         <View
         style={s.footer}>
         <TouchableOpacity activeOpacity = { 0.9 } onPress = { this.loadMoreData } style={s.loadMoreBtn}>
             <Text>Load More</Text>
             {
                 ( this.state.fetching_from_server )
                 ?
                     <ActivityIndicator color = "black" style = {{ marginLeft: 8 }} />
                 :
                     null
             }
         </TouchableOpacity>
     </View>

       )
   }
  componentDidMount(){

    const url= 'https://runga.rungamatteegroup.com/api/resource/Tea Invoice?fields=["name","invpr","invsuf","grade","status","dop","kgs","mark","tea_brand","fineleaf","sold_rate","sale_date","customer"]&filters=[["Tea Invoice", "estatename", "=", "Chandighat Tea Estate"]]&limit_page_length='+this.page_length;

    this.setState({
      url : url
    })
    console.log(this.state.url);
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
     const sold = <Text> SOLD </Text> ;
     const unsold = <Text> UNSOLD </Text>;
    return(
      <View enableEmptySections={true}>

       <ScrollView enableEmptySections={true}>

         <ListView
               enableEmptySections={true}
              dataSource={this.ds.cloneWithRows(this.state.new)}
                renderHeader = {this.renderHeader1.bind(this)}
               renderRow={(rowData) => <ScrollView>
                 <ListItem style={{height: 100}}>

                    <Body>
                    <TouchableHighlight onPress={() => {
                      this.props.navigation.navigate('DataPrint',{
                      url : 'https://runga.rungamatteegroup.com/api/resource/Tea%20Invoice/'+rowData.name
                    })}}>
                    <Text style={{fontWeight: 'bold'}}>
                        {rowData.invpr}-{rowData.invsuf} {rowData.grade}
                     </Text>
                     </TouchableHighlight>
                    <Text>
                       TOTAL WEIGHT : {rowData.kgs}
                    </Text>

                    <Text>
                       FINE-LEAF : {rowData.fineleaf}
                    </Text>
                    <Text>
                       RATE : {rowData.sold_rate} (
                              {rowData.sale_date})
                    </Text>
                     </Body>
                      <Right>
                        <Text style={{fontWeight: 'bold'},{backgroundColor: 'yellow'}}>
                           {rowData.customer ? sold : unsold}
                        </Text>
                      </Right>
                    </ListItem>

                </ScrollView>}
                   renderFooter= {this.renderFooter1.bind(this)}
              />

         </ScrollView>

       </View>

    );
  }
}
