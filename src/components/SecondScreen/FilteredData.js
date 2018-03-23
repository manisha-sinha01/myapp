import React, { Component } from 'react';
import { View, Text, ListView,ScrollView } from 'react-native'
import { Button } from 'native-base';
import FilteredForm from '/home/manisha/myapp/src/components/SecondScreen/FilteredForm.js';
import Wallpaper from '/home/manisha/myapp/src/components/LoginScreen/Wallpaper.js';

export default class FilteredData extends Component{

  constructor(props){
    super(props);
    this.state = {
      new: []
    }
    this.ds= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});

  }

 componentDidMount(){
   let doctype='Tea Invoice';
   let url ='https://runga.rungamatteegroup.com/api/resource/'+doctype+'?fields=["name","grade","status","invpr","invsuf","estatename","dop"]';
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
    <Wallpaper>

     <ScrollView>
      <FilteredForm />
      </ScrollView>

    </Wallpaper>
    );
  }
}
/*
<View>

  <ListView
    dataSource={this.ds.cloneWithRows(this.state.new)}
    renderRow={(rowData) => <Text>Name:{rowData.name}
                                  Grade:{rowData.grade}
                                  status:{rowData.status}
                                  date-of-Packing: {rowData.dop}</Text>} />

</View>*/
