import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  I18nManager
} from "react-native";
import { Content } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import styles from "./style";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Toast, {DURATION} from 'react-native-easy-toast';
import AsyncStorage from "@react-native-community/async-storage";
import LinearGradient from "react-native-linear-gradient";
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

const food_login_bg =
  "https://i.pinimg.com/750x/6a/ec/0f/6aec0fb9f6ebc7acabbb6e19866b2ab1.jpg";

const styles1 = StyleSheet.create({
	container:{
	flex:1,
	backgroundColor:'#fff',
	alignItems:'center',
	justifyContent:'center',
	},
	item:{
	flex:1,
	alignSelf:'stretch',
	margin: 10,
	alignItems: 'center',
	justifyContent:'center',
	borderBottomWidth:1,
	borderBottomColor:'#eee',

	}
});


export default class FoodLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      data: '',
      animating1: false,
      isLoading: false,
      dataSource: null,
      text:'abc',
      pushData: [],
     loggedIn: false
    };
  }



  componentWillMount() {

    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("SelectCategories");
    return true;
  };



  componentDidMount(){
      GoogleSignin.hasPlayServices({autoResolve:true}).then(() => {

      })
      .catch((err) => {
        console.log("Play services error", err.code, err.message);
      })

      GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '698564841034-p7b5ltbkvcv2mj3do4tcqu195en9hln6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //hostedDomain: '', // specifies a hosted domain restriction
  //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  //accountName: '', // [Android] specifies an account name on the device that should be used
  //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});



	}



  getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // user has not signed in yet
          this.setState({ loggedIn: false });
        } else {
          // some other error
          this.setState({ loggedIn: false });
        }
      }
    };

  _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo: userInfo, loggedIn: true });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };

_signOut = async () => {
   //Remove user session from the device.
   try {
     await GoogleSignin.revokeAccess();
     await GoogleSignin.signOut();
     this.setState({ userInfo: null }); // Remove the user from your app's state as well
   } catch (error) {
     console.error(error);
   }
 };


  updateValue(text,field)
	{
	  if(field=='username')
	    {
		this.setState({
		   username:text,
		})
	    }
	   else if(field=='password')
		{
		    this.setState({
		     password:text,
			})
		}
	}

    _login = async () => {



 	let collection={}
	collection.email=this.state.username,
	collection.password=this.state.password

	//console.warn(collection);


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
    	api: 'login',
    	data: collection

  }),
}).then((response) => response.json())
   .catch(error => console.error('Error:', error))
  .then((responseJson) => {
	//this.setState({text: JSON.stringify(responseJson)})
	this.setState({text: JSON.stringify(responseJson),
		   animating1: false,
	});

      	if(responseJson.msg === 'User logged in successfully !')
		{
		  this.props.navigation.navigate("TabView");
		  AsyncStorage.setItem('userdata' ,JSON.stringify(responseJson));
		}
	//this.props.navigation.navigate("TabView");

	this.refs.toast.show(JSON.stringify(responseJson.msg));
});

	/*  try{

	 await AsyncStorage.setItem('token' ,JSON.stringify(responseJson));

	}catch(error){
		console.log(error.message);
	} */

}

_fbAuth() {
   LoginManager.logInWithPermissions(['public_profile']).then(function(result){
     if(result.isCancelled){
       console.log('Login was cancelled');
     } else {

       console.log('Login was a success' + result.grantedPermissions.toString());
       this.props.navigation.navigate("TabView");
     }
   },function(error){
     console.log('An error occured: ' + error);
   })
}

   render() {

	 let ic_logo = {
      uri:
        "https://i.ibb.co/98j57cm/Whats-App-Image-2019-10-15-at-7-29-23-PM.jpg"
    };

    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }

	  return (
       <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        locations={[0.0, 1.0]}
        colors={["#f5f5f5", "#f5f5f5"]}
        style={styles.gradientStyle}
      >

      <View style={styles.mainView}>

          <Image source={ic_logo} style={styles.logoImg} />

          <View style={styles.middleMainView}>
            <Content>
              <TextInput
                ref="username"
               	style={styles.infoText}
                maxLength={30}
                placeholder="Username"
                placeholderTextColor="#8f8f8f"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(text) => this.updateValue(text,'username')}
		            value={this.state.username}
                onSubmitEditing={event => {
                  this.refs.password.focus();
                }}
                returnKeyType="next"
              />

              <View style={styles.firstDivider} />

              <TextInput
                secureTextEntry
                ref="password"
                style={styles.infoText}
                maxLength={16}
                placeholder="Password"
                placeholderTextColor="#8f8f8f"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                onChangeText={(text) => this.updateValue(text,'password')}
		value={this.state.password}
		returnKeyType="done"
              />

            <View style={styles.secondDivider} />
             <TouchableOpacity
                onPress={()=>this._login()}
                style={[
                  styles.btnBg,
                  {
                    backgroundColor: "#F05522",
                    marginTop: Metrics.HEIGHT * 0.1
                  }
                ]}
              >
                <Text style={styles.btnText}>LOGIN</Text>
              </TouchableOpacity>

	      <ActivityIndicator
               animating = {this.state.animating1}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
	      <Toast ref="toast"
		      position='top'
		      positionValue={200}
                      fadeInDuration={750}
                      fadeOutDuration={1000}
                      opacity={0.8}
			/>
            </Content>

        <Text>
   	    {this.state.text}
        </Text>

          </View>

          <View style={styles.bottomMainView}>
          <GoogleSigninButton
    style={{ width: '85%', height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={()=>this._signIn()}
    disabled={this.state.isSigninInProgress} />
            <TouchableOpacity
              onPress={()=>this._fbAuth()}
              style={[styles.btnBg, { backgroundColor: "#2A64D1" }]}
            >
            <EvilIcons name="sc-facebook" color="#FFFFFF" size={30} />
              <Text style={styles.btnText}>CONNECT WITH FACEBOOK</Text>
            </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("FoodSignUp")} >
            <Text style={styles.signUpText}>
              Don't have an account?{" "}
              <Text style={{ color: "#F05522" }}>Sign Up</Text>
            </Text>
	      </TouchableOpacity>
          </View>

      </View>
	 </LinearGradient>
    );

}


}
