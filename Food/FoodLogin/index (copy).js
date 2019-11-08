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
  ActivityIndicator,
  I18nManager
} from "react-native";
import { Content } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import styles from "./style";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const food_login_bg =
  "https://i.pinimg.com/750x/6a/ec/0f/6aec0fb9f6ebc7acabbb6e19866b2ab1.jpg";

const styles1 = StyleSheet.create({
	container:{
	flex:1,
	backgroundColor:'#fff',
	alignItem:'center',
	justifyContent:'center',
	},
	item:{
	flex:1,
	alignSelf:'stretch',
	margin: 10,
	alignItem: 'center',
	justifyContent:'center',
	borderBottomWidth:1,
	borderBottomColor:'#eee'
	}
});


export default class FoodLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      data: '',
      isLoading: true,
      dataSource: null,
    };
  }

 

  componentWillMount() {
   
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }
  
  componentDidMount(){
   return fetch('https://getsetgoworld.com/dev_env/webservice', {
  method: 'POST',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
     'x-api-key':123456,
     'Authorization': 'Basic YWRtaW46MTIzNEBhZG1pbg=='
  },
  body: JSON.stringify({
    device_id: '123',
    version: '1',
    api: 'login',
    email:'sanjayvrahate@gmail.com',
    password:'30arrufour'
  }),
	})
      .then( (response) => response.json() )
      .then( (responseJson) => {	
	
	this.setState({
		isLoading: false,
		dataSource: responseJson.movies,
		})

    })

       .catch((error)=> {
		console.log(error)
	}); 
	
     }
	
  /* fetch('https://getsetgoworld.com/dev_env/webservice', {
  method: 'POST',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
     'x-api-key':123456,
     'Authorization': 'Basic YWRtaW46MTIzNEBhZG1pbg=='
  },
  body: JSON.stringify({
    device_id: '123',
    version: '1',
    api: 'login',
    email:'sanjayvrahate@gmail.com',
    password:'30arrufour'
  }),
	}); */
     
      
 
/*backPressed = () => {
    this.props.navigation.navigate("FirstScreen");
    return true;
  };*/

  render() {
 
	if(this.state.isLoading)
		{

	return
	(
	   <View style={styles1.container}>
		<ActivityIndicator/>
	   </View>
	  )	
			
	}
      else {
	 
	  let movies = this.state.dataSource.map((val,key)=> {
			return <View key={key} style={styles1.item}>
			    <Text>{val.title}</Text>
			  </View>
		});
    return (
	
	<View style={styles1.container}>
	 	{movies}
	</View>
	
 	);
	
     }


 /*  let ic_logo = {
      uri:
        "https://i.ibb.co/98j57cm/Whats-App-Image-2019-10-15-at-7-29-23-PM.jpg"
    };

    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.mainView}>
        <ImageBackground source={{ uri: food_login_bg }} style={styles.mainImg}>
          <Image source={ic_logo} style={styles.logoImg} />

          <View style={styles.middleMainView}>
            <Content>
              <TextInput
                ref="username"
                style={styles.infoText}
                maxLength={30}
                placeholder="Username"
                placeholderTextColor="#757575"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                value={this.state.userName}
                onChangeText={userName => this.setState({ userName: userName })}
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
                placeholderTextColor="#757575"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                value={this.state.password}
                onChangeText={password => this.setState({ password: password })}
                returnKeyType="done"
              />

           /*   <View style={styles.secondDivider} /> */

           /*   <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TabView")}
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
            </Content>
 
        <Text> 
   	    {this.state.data}
        </Text>
  
          </View>

          <View style={styles.bottomMainView}>
            <TouchableOpacity
              style={[styles.btnBg, { backgroundColor: "#2A64D1" }]}
            >
              <EvilIcons name="sc-facebook" color="#FFFFFF" size={30} />
              <Text style={styles.btnText}>CONNECT WITH FACEBOOK</Text>
            </TouchableOpacity>

            <Text style={styles.signUpText}>
              Don't have an account?{" "}
              <Text style={{ color: "#F05522" }}>Sign Up</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
} */

