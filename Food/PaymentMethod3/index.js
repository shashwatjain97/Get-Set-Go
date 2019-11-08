import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  BackHandler,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  Image,
  I18nManager,
  TouchableOpacity
} from "react-native";
import { Content, Header, Left, Right, Body, Title } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import styles from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import DatePicker from 'react-native-datepicker';
import AsyncStorage from "@react-native-community/async-storage";

export default class PaymentMethod3 extends Component {
  constructor(props) {
    super(props);

    this.state = {

       animating: false,
       title:this.props.navigation.state.params.coursename,
       discount:this.props.navigation.state.params.discounted_price,
       name:'',
       email:'',
       contact:'',
       address1:'',
       address2:'',
       city:'',
       zipcode:'',
       promocode:'',



    };
  }

  updateValue(text,field)
  {
    if(field=='name')
      {
    this.setState({
       name:text,
    })
      }
     else if(field=='email')
    {
        this.setState({
         email:text,
      })
    }
    else if(field=='contact')
   {
       this.setState({
        contact:text,
     })
   }
   else if(field=='address1')
  {
      this.setState({
       address1:text,
    })
  }
  else if(field=='address2')
 {
     this.setState({
      address2:text,
   })
 }
 else if(field=='city')
{
    this.setState({
     city:text,
  })
}
else if(field=='zipcode')
{
   this.setState({
    zipcode:text,
 })
}
else if(field=='promocode')
{
   this.setState({
    promocode:text,
 })
}
  }

  _Buy = async () => {
  /*let formData = new FormData();
  formData.append('username','admin');
  formData.append('password','admin'); */
  //AsyncStorage.getItem('token').then((token) => this.setState({ 'token': token }))

  this.setState({animating:true})

  try{
      let userdata = await AsyncStorage.getItem('userdata');
      let parsed = JSON.parse(userdata);
     // this.setState({text: parsed.data.userdata.token})
            var mytoken = parsed.data.userdata.token;
       this.setState({userName:parsed.data.userdata.name})


  }

  catch(error){
      alert(error);
  }
  // var token = this.state.myToken;

  let collection={}

        collection.token=mytoken,
        collection.create_date_start=this.state.create_date_start,
        collection.create_date_end=this.state.create_date_end,
        collection.page='1'

   // this.setState({text: token})

  await fetch('https://getsetgoworld.com/dev_env/webservice',{
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Authorization' : 'Basic YWRtaW46MTIzNEBhZG1pbg==',
    'x-api-key' : '123456',
    'Content-Type': 'application/json'

  },
  body: JSON.stringify({
    device_id: '123',
    version: '1',
    api: 'my_earnings',
    data: collection,
  }),
}).then((response) => response.json())
  .then((responseJson) => {
  //this.setState({text: responseJson.data.list[0]})
  this.setState({result1: responseJson.data.list})
  this.setState({result2: responseJson.data.income.ri})
    //let parsed2 = JSON.parse(userdata);
    this.setState({
          animating: false,
              })

  })
    .catch((error) => {

    console.log(error)
  })

    // AsyncStorage.getItem('token').then((token) => this.setState({ 'token': token }))
}



  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("TrendingRecipesDetails1");
    return true;
  };

renderIndicator(){
  if(this.state.animating){
  return (
        <View>
    <ActivityIndicator
            animating = {this.animating}
            color = '#bc2b78'
            size = "large"
            style = {styles.activityIndicator}/>
  </View>
);
}
else {
  return (
    <View>

    </View>
  )
}


}



  render() {
    return (
      <View style={styles.mainView}>
        <Header style={styles.HeaderBg} transparent>
          <Left style={styles.left}>
            <TouchableOpacity onPress={() => this.backPressed()}>
              <MaterialIcons
                name="keyboard-backspace"
                color="#FFFFFF"
                size={25}
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title style={styles.headertitle}>Buy</Title>
          </Body>
          <Right style={styles.right}>
            <Ionicons name="ios-search" size={25} color="#FFFFFF" />
          </Right>
        </Header>

        <View style={{ flex: 1 }}>
          <Content>



	  <View style={{ flex:1 }}>

    	 <Text style={[styles.ProfileDesText ,{
                             fontSize: Fonts.moderateScale(18),
                            }]}>Purchase course {this.state.title} </Text>

       <Text style={[styles.ProfileDesText ,{
                             fontSize: Fonts.moderateScale(15),
                            }]}>
            Amount: {this.state.discount}
      </Text>

       <View style={styles.firstDivider} />

       <TextInput
               ref="name"
               style={styles.infoText}
               maxLength={30}
               placeholder="Name"
               placeholderTextColor="#8f8f8f"
               underlineColorAndroid="transparent"
               autoCapitalize="none"
               keyboardType="default"
               textAlign={I18nManager.isRTL ? "right" : "left"}
               onChangeText={(text) => this.updateValue(text,'name')}
               value={this.state.name}
               onSubmitEditing={event => {
                 this.refs.email.focus();
               }}
               returnKeyType="next"
             />

         <View style={styles.firstDivider} />

         <TextInput

                 ref="email"
                 style={styles.infoText}
                 maxLength={30}
                 placeholder="Email"
                 placeholderTextColor="#8f8f8f"
                 underlineColorAndroid="transparent"
                 autoCapitalize="none"
                 keyboardType="default"
                 textAlign={I18nManager.isRTL ? "right" : "left"}
                 onChangeText={(text) => this.updateValue(text,'email')}
      value={this.state.email}
      onSubmitEditing={event => {
                   this.refs.contact.focus();
                 }}
                 returnKeyType="next"
               />

             <View style={styles.firstDivider} />

         <TextInput
                     ref="contact"
                     style={styles.infoText}
                     maxLength={30}
                     placeholder="Contact"
                     placeholderTextColor="#8f8f8f"
                     underlineColorAndroid="transparent"
                     autoCapitalize="none"
                     keyboardType="number-pad"
                     textAlign={I18nManager.isRTL ? "right" : "left"}
                     onChangeText={(text) => this.updateValue(text,'contact')}
         value={this.state.contact}
         onSubmitEditing={event => {
                       this.refs.address1.focus();
                     }}
                     returnKeyType="next"
                   />

          <View style={styles.firstDivider} />

          <TextInput
                  ref="address1"
                  style={styles.infoText}
                  maxLength={30}
                  placeholder="Address Line 1"
                  placeholderTextColor="#8f8f8f"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="default"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  onChangeText={(text) => this.updateValue(text,'address1')}
                  value={this.state.address1}
                  onSubmitEditing={event => {
                    this.refs.address2.focus();
                  }}
                  returnKeyType="next"
                />

            <View style={styles.firstDivider} />

       <TextInput
                    ref="address2"
                    style={styles.infoText}
                    maxLength={30}
                    placeholder="Address Line 2"
                    placeholderTextColor="#8f8f8f"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType="default"
                    textAlign={I18nManager.isRTL ? "right" : "left"}
                    onChangeText={(text) => this.updateValue(text,'address2')}
        value={this.state.address2}
                    onSubmitEditing={event => {
                      this.refs.city.focus();
                    }}
                    returnKeyType="next"
                  />

              <View style={styles.firstDivider} />

         <TextInput
                      ref="city"
                      style={styles.infoText}
                      maxLength={30}
                      placeholder="City"
                      placeholderTextColor="#8f8f8f"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="default"
                      textAlign={I18nManager.isRTL ? "right" : "left"}
                      onChangeText={(text) => this.updateValue(text,'city')}
          value={this.state.firstname}
                      onSubmitEditing={event => {
                        this.refs.city.focus();
                      }}
                      returnKeyType="next"
                    />

                <View style={styles.firstDivider} />



             <TextInput

                            ref="zipcode"
                            style={styles.infoText}
                            maxLength={30}
                            placeholder="Zip Code"
                            placeholderTextColor="#8f8f8f"
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            keyboardType="number-pad"
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            onChangeText={(text) => this.updateValue(text,'zipcode')}
                value={this.state.zipcode}
                onSubmitEditing={event => {
                              this.refs.promocode.focus();
                            }}
                            returnKeyType="next"
                          />

             <View style={styles.firstDivider} />

             <View
                style={{
                  flexDirection: "row",
              }}
              >

           <TextInput
                          ref="promocode"
                          style={[styles.infoText,{  width: Metrics.WIDTH * 0.4}]}
                          maxLength={30}
                          placeholder="Promo Code"
                          placeholderTextColor="#8f8f8f"
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          keyboardType="default"
                          textAlign={I18nManager.isRTL ? "right" : "left"}
                          onChangeText={(text) => this.updateValue(text,'promocode')}
              value={this.state.promocode}
                          onSubmitEditing={event => {
                            this.refs.promocode.focus();
                          }}
                          returnKeyType="next"
                        />

                        <TouchableOpacity
                                 style={styles.SearchMainBg1}
                               >
                                 <Text style={styles.searchText}>Apply</Text>
                               </TouchableOpacity>

                  </View>

                   <View style={styles.firstDivider} />





	  <TouchableOpacity
              style={styles.SearchMainBg}
                onPress={() => this._Buy()}
            >
              <Text style={styles.searchText}>Submit Query</Text>
            </TouchableOpacity>




	</View>

        {this.renderIndicator()}


	   </Content>
        </View>
      </View>
    );
  }
}
