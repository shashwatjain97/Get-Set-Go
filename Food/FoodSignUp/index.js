import React, { Component } from "react";
import {
  TouchableHighlight,
  Modal,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  StatusBar,
   TextInput,
  AsyncStorage,
  ActivityIndicator,
  Platform,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Text,
  Content,
  Form,
  Item,
  Button,
  Input,
  CheckBox,
  Body,
  Footer,
  Icon,
  Header,
  Left,
  Right,
  Title
} from "native-base";

import { Fonts, Metrics, Colors } from "../../../Themes/";
// Screen Styles
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Toast, {DURATION} from 'react-native-easy-toast';
import LinearGradient from "react-native-linear-gradient";
import DatePicker from 'react-native-datepicker';


export default class Signup_05 extends Component {
    constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email:'',
      contact:'',
      dob:'',
      password:'',
      confirmpassword:'',
      data: '',
      animating1: false,
      isLoading: false,
      dataSource: null,
      text:'abc',
    };
  }


  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("FoodLogin");
      return true;
    });
  }

  updateValue(text,field)
	{
	  if(field=='firstname')
	    {
		this.setState({
		   firstname:text,
		})
	    }
	   else if(field=='lastname')
		{
		    this.setState({
		     lastname:text,
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
	    else if(field=='dob')
		{
		    this.setState({
		     dob:text,
			})
		}
	   else if(field=='password')
		{
		    this.setState({
		     password:text,
			})
		}
            else if(field=='confirmpassword')
		{
		    this.setState({
		     confirmpassword:text,
			})
		}
	}

  _signup = async () => {
	
	let collection={}
	collection.name=this.state.firstname,
	collection.lastname=this.state.lastname,
	collection.email=this.state.email,
	collection.contact=this.state.contact,
	collection.dob=this.state.dob,
	collection.password=this.state.password,
	collection.confirm_password=this.state.confirmpassword,
	
	console.warn(collection);
        var url = 'https://getsetgoworld.com/dev_env/webservice'
		
 	this.setState({text: "Clicked"})
        this.setState({animating1:true})	

	fetch(url,{
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
    	api: 'register',
    	data: collection
	 
  }),
}).then((response) => response.json())
   .catch(error => console.error('Error:', error))
  .then((responseJson) => {
	//this.setState({text: JSON.stringify(responseJson)})
	this.setState({text: responseJson.msg,
		animating1: false,
	});
        AsyncStorage.setItem('token' ,responseJson.data.token);
	if(responseJson.msg === 'User registered successfully !')
		{
		  this.props.navigation.navigate("TabView");	
		}

	this.refs.toast.show(JSON.stringify(responseJson.msg));
}); 
}

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }
    let pic = {
      uri:
        "https://i.pinimg.com/750x/6a/ec/0f/6aec0fb9f6ebc7acabbb6e19866b2ab1.jpg"
    };

    let logo13 = {
      uri:
        "https://i.ibb.co/98j57cm/Whats-App-Image-2019-10-15-at-7-29-23-PM.jpg"
    };
    return (
        <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        locations={[0.0, 1.0]}
        colors={["#f5f5f5", "#f5f5f5"]}
        style={styles.gradientStyle}
      >
      
	 <View style={styles.container}>
          <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("FoodLogin")}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body} />
            <Right style={styles.right} />
          </Header>
	
          <Image source={logo13} style={styles.logostyle} />
	    <ActivityIndicator
               animating = {this.state.animating1}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>

            <KeyboardAvoidingView style={styles.middleMainView} behavior="padding" enabled>
          
            <Content>
		
	      <TextInput
                ref="firstname"
               	style={styles.infoText}
                maxLength={30}
                placeholder="First Name"
                placeholderTextColor="#8f8f8f"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(text) => this.updateValue(text,'firstname')}
		value={this.state.firstname}
                onSubmitEditing={event => {
                  this.refs.lastname.focus();
                }}
                returnKeyType="next"
              />

              <View style={styles.firstDivider} />

              <TextInput
                
               	ref="lastname"
                style={styles.infoText}
                maxLength={30}
                placeholder="Last Name"
                placeholderTextColor="#8f8f8f"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(text) => this.updateValue(text,'lastname')}
		value={this.state.lastname}                
		onSubmitEditing={event => {
                  this.refs.lastname.focus();
                }}
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
                  this.refs.dob.focus();
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
                
                ref="dob"
                style={styles.infoText}
                maxLength={30}
                placeholder="DOB"
                placeholderTextColor="#8f8f8f"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="number-pad"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(text) => this.updateValue(text,'dob')}
		value={this.state.dob}                
		onSubmitEditing={event => {
                  this.refs.password.focus();
                }}
                returnKeyType="next"
              /> 
		
	       <DatePicker
        style={{width: 200}}
        date={this.state.dob}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          
        }}
        onDateChange={(text) => this.updateValue(text,'dob')}
      />
        </View>

		 <View style={styles.firstDivider} />

	      <TextInput
                secureTextEntry
                ref="password"
                style={styles.infoText}
                maxLength={30}
                placeholder="Password"
                placeholderTextColor="#8f8f8f"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(text) => this.updateValue(text,'password')}
		value={this.state.password}                
		onSubmitEditing={event => {
                  this.refs.confirmpassword.focus();
                }}
                returnKeyType="next"
              />  

		 <View style={styles.firstDivider} />		

	      <TextInput
                secureTextEntry
                ref="confirmpassword"
                style={styles.infoText}
                maxLength={30}
                placeholder="Confirm Password"
                placeholderTextColor="#8f8f8f"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(text) => this.updateValue(text,'confirmpassword')}
		value={this.state.confirmpassword}                
		returnKeyType="done"
              />     
               <Toast ref="toast"
		      position='top'
		      positionValue={200}
                      fadeInDuration={750}
                      fadeOutDuration={1000}
                      opacity={0.8}		
			/>                               
	    </Content>
     
         </KeyboardAvoidingView>
	    
          <TouchableHighlight
            info
            style={styles.buttondialogsignup}
            onPress={()=>this._signup()}
          >
            <Text autoCapitalize="words" style={styles.buttonsignin}>
              Sign Up
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.view3}>
          <TouchableOpacity
            style={styles.signInTxtBg}
            onPress={() => this.props.navigation.navigate("FoodLogin")}
          >
	    <Text autoCapitalize="words" style={styles.buttontext}>
            Already have an account?
          </Text>
            <Text style={styles.buttontext}>Sign In</Text>
          </TouchableOpacity>
	 
        </View>
	
      </LinearGradient>
    );
  }
}
