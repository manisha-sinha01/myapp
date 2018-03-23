import React, { Component } from 'react';
import { Text,View,StyleSheet,ScrollView,KeyboardAvoidingView } from 'react-native';
import { Card, CardItem,Body,Container,Content,Button } from 'native-base';
import t from 'tcomb-form-native';
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';

const Form = t.form.Form;
/*const GardenName = t.enums({
  'Ghatia Tea Estate': 'Ghatia',
  'Chandighat Tea Estate': 'Chandighat',
  'Ghillidary Tea Estate': 'Ghillidary',
  'Mazbat Tea Estate': 'Mazbat',
});*/

const TeaTypes = t.enums({
  'CTC TEA': 'CTC TEA',
  'ORTHODOX TEA': 'ORTHODOX TEA',
  'GREEN TEA':'GREEN TEA',
  'NON SALEABLE TEA':'NON SALEABLE TEA'
});


const FilForm = t.struct({

  grade: t.maybe(t.String),
  teatype: TeaTypes,
  invpr: t.maybe(t.String),
  invsuf: t.maybe(t.String)

});

var options= {
  fields: {

     grade: {
       label: 'GRADE',
       error: 'Insert a value to proceed',
     },
     invpr: {
       label:'PREFIX'
     },
     invsuf: {
       label: 'SUFFIX'
     },
     teatype: {
       label: 'TEA TYPES',
       error: 'Select a value to proceed',
     }
  }
};

export default class FilteredForm extends Component {

     constructor(props){
       super(props);
       this.state={
         queryString: '',
         doctype: 'Tea Invoice'

       }
       url= 'https://runga.rungamatteegroup.com/api/resource/'+this.state.doctype+'/?fields=["invpr","invsuf","grade","status","dop","kgs","mark","tea_brand","fineleaf","sold_rate","sale_date","customer"]'

   }

  clearform= () => {
    this.setState({
      value:null
    });
  }

  urlFormation(value){
    let flag=0;
     let url='';
     var myArray =[
       //{name: 'estatename',value: value.estatename},
       {name: 'grade', value: value.grade},

       {name: 'teatype', value: value.teatype},
       {name: 'invpr',value: value.invpr},
       {name: 'invsuf', value: value.invsuf}
     ];
     console.log(myArray);

     for(let i=0;i<myArray.length;i++){
        flag=0;
       if(myArray[i].value==null)
         continue;

        else{
          if(i==0)
           url= url + ',["Tea Invoice", "'+myArray[i].name+'", "=", "'+myArray[i].value+'"]';
           else{
             if( i!=myArray.length-1 )
              {
               url= url + ',["Tea Invoice", "'+myArray[i].name+'", "=", "'+myArray[i].value+'"]';
             }
                else{
                if(i==myArray.length-1){
                  flag=1;
                url= url + ',["Tea Invoice", "'+myArray[i].name+'", "=", "'+myArray[i].value+'"]]';}
              }

           }
           }}
           if(flag==0)
             url =url + ']';

     return url;
  }

  handleSubmit = () => {
    var url = 'https://runga.rungamatteegroup.com/api/resource/Tea Invoice/?fields=["invpr","invsuf","grade","status","dop","kgs","mark","tea_brand","fineleaf","sold_rate","sale_date","customer"]';
    const value= this._form.getValue();

    var queryString= this.urlFormation(value);

     this.setState({
       queryString: queryString,

     });
     const { params } = this.props.navigation.state;
     const qS1 = params ? params.queryString : null;

       url+='&filters=['+qS1+queryString+'&limit_page_length=20';

     console.log(url);
    this.clearform();
    this.props.navigation.navigate('DataDisplay',{
      url: url
    })
  }
  render(){
    return(
    <ScrollView enableEmptySections={true}>
    <KeyboardAvoidingView
        behavior= 'padding'
         style={styles.container}
        enableEmptySections={true}>
       <Text style={{fontWeight: 'bold'}}> Please Fill In The Details Below </Text>
       <Card>
       <ScrollView>
        <CardItem>
         <Body>
           <Form

               ref={c => this._form = c}

               type={FilForm}
               options={options}
            />
            <Button rounded
              style={styles.buttonst}
              onPress={this.handleSubmit}>
                <Text>Done</Text>
            </Button>
           </Body>
         </CardItem>
         </ScrollView>
         </Card>

       </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT= Dimensions.get('window').height;

const styles= StyleSheet.create({
  container:{

    height: DEVICE_HEIGHT-200,
    width: DEVICE_WIDTH-20,
    paddingLeft: 20,
    paddingTop:5,

  },
  buttonst: {
      width: DEVICE_WIDTH-200,
      paddingRight: 50,
      paddingLeft: 50,
      alignItems: 'center'
  }
})
