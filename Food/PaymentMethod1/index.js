import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  BackHandler,
  ActivityIndicator,
  Image,
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

export default class PaymentMethod1 extends Component {
  constructor(props) {
    super(props);

    this.state = {

       animating: false,
       create_date_start:'',
       create_date_end:'',
       result1:'',
       result2:'',
      bankAccountArray: [
        {
          id: 1,
          account: "Franklin Campbell - ***7809"
        },
        {
          id: 2,
          account: "Franklin Campbell - ***2354"
        }
      ],

      creditCardArray: [
        {
          id: 1,
          card: "**** **** **** 2759",
          cardImg: Images.visa_food
        },
        {
          id: 2,
          card: "franklin_camp@gmail.com",
          cardImg: Images.paypal_food
        },
        {
          id: 3,
          card: "**** **** **** 1351",
          cardImg: Images.master_food
        }
      ]
    };
  }

  updateValue(text,field)
  {
    if(field=='create_date_start')
      {
    this.setState({
       create_date_start:text,
    })
      }
     else if(field=='create_date_end')
    {
        this.setState({
         create_date_end:text,
      })
    }
  }

  _earning = async () => {
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
    this.props.navigation.navigate("Profiles");
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
      <Text style={styles.titleText1}>List : {this.state.result1}</Text>
      <Text style={styles.titleText1}>Referral Income : {this.state.result2}</Text>
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
            <Title style={styles.headertitle}>My Earnings</Title>
          </Body>
          <Right style={styles.right}>
            <Ionicons name="ios-search" size={25} color="#FFFFFF" />
          </Right>
        </Header>

        <View style={{ flex: 1 }}>
          <Content>



	  <View style={{ flex: 1,
    marginTop: Metrics.HEIGHT * 0.001,
    marginHorizontal: Metrics.WIDTH * 0.05,
    alignItems: 'center' }}>

    	 <Text style={styles.titleText}>Choose Dates</Text>


		 <DatePicker
        style={{width: '70%',marginBottom: 10,marginBottom: 10}}
        date={this.state.create_date_start}
        mode="date"
        placeholder="Create Start Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 2
          },
          dateInput: {
           borderColor: '#234456',
           borderWidth: 1,
           borderRadius: 4,
           marginLeft: 36,
           paddingLeft: 15,
          },
	 placeholderText: {
                      fontSize: 18,
                      color: '#234456'
                  }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(text) => this.updateValue(text,'create_date_start')}
      />

	   <DatePicker
        style={{width: '70%',marginBottom: 10,marginBottom: 10}}
        date={this.state.create_date_end}
        mode="date"
        placeholder="Create End Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 2
          },
          dateInput: {
           	borderColor: '#234456',
                borderWidth: 1,
                borderRadius: 4,
                marginLeft: 36,
                paddingLeft: 15,
          },
	  placeholderText: {
                      fontSize: 18,
                      color: '#234456'
                  }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(text) => this.updateValue(text,'create_date_end')}
      />

	  <TouchableOpacity
              style={styles.SearchMainBg}
                onPress={() => this._earning()}
            >
              <Text style={styles.searchText}>Submit Query</Text>
            </TouchableOpacity>

	   <TouchableOpacity
              style={styles.SearchMainBg1}
            >
              <Text style={styles.searchText}>Reset</Text>
            </TouchableOpacity>


	</View>

           <Text style={styles.titleText}>Results</Text>

               {this.renderIndicator()}


	   </Content>
        </View>
      </View>
    );
  }
}
