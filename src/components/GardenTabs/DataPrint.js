import React, {Component} from 'react';
import {Text,View,ScrollView,Button} from 'react-native';

export default class DataPrint extends Component {

  constructor(props){
    super(props);
    this.state={

      new1: {},
      url: '',
      isLoading: false,
    }
  }


  componentWillMount(){

   const { params } = this.props.navigation.state;
  const url = params ? params.url : console.log("hi ");

    if(url){
      this.setState(
      {isLoading: true});
     console.log(url);


    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
           this.setState({new1: responseJson.data});
    })
  }

}

  render(){
    if(this.state.isLoading === true){
    return(
     <View>

      <ScrollView>
         <Text> STATUS: {this.state.new1.status} </Text>
         <Text> OWN MIXING PERCENTAGE: {this.state.new1.ownprc} </Text>
         <Text> BAG SERIAL FROM: {this.state.new1.bag_from} </Text>
         <Text> INVOICE SUFFIX: {this.state.new1.invsuf} </Text>
         <Text> GRADE: {this.state.new1.grade} </Text>
         <Text> CREATION: {this.state.new1.creation} </Text>
         <Text> TEA TYPE: {this.state.new1.teatype} </Text>
         <Text> TARE WEIGHT: {this.state.new1.tare_wt} </Text>
         <Text> BOUGHT LEAF MIXING PERCENTAGE: {this.state.new1.boughtprc} </Text>
         <Text> STOCK ENTRY: {this.state.new1.stock_entry} </Text>
         <Text> COMPANY: {this.state.new1.company} </Text>
         <Text> OWNER: {this.state.new1.owner} </Text>
         <Text> COST-CENTER: {this.state.new1.cost_center} </Text>
         <Text> REALISATION%: {this.state.new1.realisation} </Text>
          <Text> BAGS: {this.state.new1.bags} </Text>
          <Text> IS REPACK: {this.state.new1.is_repack} </Text>
          <Text> MANUFACTURING FROM: {this.state.new1.manfrom} </Text>
          <Text> CBL RATE: {this.state.new1.cbl_rate} </Text>
          <Text> PACKING: {this.state.new1.prepacking} </Text>
          <Text> TITLE: {this.state.new1.title} </Text>
          <Text> BULK TEA DETAILS: {this.state.new1.lots} </Text>
          <Text> OBL RATE: {this.state.new1.obl_rate} </Text>
          <Text> MANUFACTURING EXP: {this.state.new1.manufacturing_exp} </Text>
          <Text> MARK: {this.state.new1.mark} </Text>
          <Text> NET RATE: {this.state.new1.net_rate} </Text>
          <Text> INVOICE PREFIX: {this.state.new1.invpr} </Text>
          <Text> MAIN GRADE: {this.state.new1.msin_grade} </Text>
          <Text> OBL QTY: {this.state.new1.obl_kg} </Text>
          <Text> MANUFACTURING TO: {this.state.new1.manto} </Text>
          <Text> OWN LEAF: {this.state.new1.ol_kg} </Text>
          <Text> FINE-LEAF: {this.state.new1.fineleaf} </Text>
          <Text> KILOGRAM: {this.state.new1.kgs} </Text>
          <Text> EXPENCES: {this.state.new1.expence} </Text>
          <Text> QUANTITY: {this.state.new1.prekgs} </Text>
          <Text> BAGS: {this.state.new1.prebags} </Text>
          <Text> GROSS AMOUNT: {this.state.new1.gross_amount} </Text>
          <Text> ITEM CODE: {this.state.new1.item_code} </Text>
          <Text> WAREHOUSE: {this.state.new1.warehouse} </Text>
          <Text> PACKET TYPE: {this.state.new1.packet_type} </Text>
          <Text> BAG SERIAL TO: {this.state.new1.bag_to} </Text>
          <Text> TOTAL AMOUNT: {this.state.new1.net_amount} </Text>
          <Text> PURCHASE TEA RATE: {this.state.new1.pt_rate} </Text>
          <Text> TEA BRAND: {this.state.new1.tea_brand} </Text>
          <Text> CBL KG: {this.state.new1.cbl_kg} </Text>
          <Text> NET WEIGHT: {this.state.new1.net_wt} </Text>
          <Text> PACKATE-KG: {this.state.new1.pt_kg} </Text>
          <Text> PURCHASE TEA MIXING%: {this.state.new1.purchase_tea_prc} </Text>
          <Text> INVOICE INFO: {this.state.new1.preinvoice_title} </Text>
          <Text> VALUATION RATE: {this.state.new1.valuation_rate} </Text>
          <Text> DATE OF PACKING: {this.state.new1.dop} </Text>
          <Text> CROP YEAR: {this.state.new1.crop_year} </Text>
          <Text> GROSS RATE: {this.state.new1.sold_rate} </Text>
      </ScrollView>
   </View>
  );
}
    else{
      return(null);

    }
  }
}
