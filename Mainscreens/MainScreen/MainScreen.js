import React, { Component } from "react";
import {
  View,
  ListView,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
  BackHandler,
  ActivityIndicator,
  Alert,
  Platform
} from "react-native";
import {
  Spinner,
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Input
} from "native-base";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import { Images, Fonts, Metrics, Colors } from "../../../Themes/";
import Modal from "react-native-modal";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      user_Back: "false",
	animating: true 
    };
  }
  componentWillMount() {
    console.log("componentWillMount=======");
    var that = this;
    //clearTimeout(this.timeoutHandle); 
    BackHandler.addEventListener("hardwareBackPress", function() {
      Alert.alert(
        "Quit App?",
        "Are you sure you want to exit App?",
        [
          { text: "Yes", onPress: () => BackHandler.exitApp() },
          { text: "No", onPress: () => true }
        ],
        { cancelable: true }
      );
      return true;
    });

    AsyncStorage.multiGet(["user_Back"]).then(data => {
      console.log(data[0][1]);
      if (data[0][1] != null) {
        this.setState({ user_Back: data[0][1] });
      } else {
        this.setState({ user_Back: "true" });
      }
    });

    AsyncStorage.multiSet([["ScreenName", "FirstScreen"]]);
  }

  componentDidMount() {
    this.setState({ isModalVisible: true });
    this.timeoutHandle = setTimeout(()=>{
              // Add your logic for the transition
		this._moveToFood()
         }, 4000);

  }

  _toggleModal = () => this.setState({ isModalVisible: false });

  _moveToAntiqueruby() {
    AsyncStorage.multiSet([["FirstAntiqueruby", "true"]]);
    this.props.navigation.navigate("DrawerStackAntiqueruby");
  }

  _moveToECommerce() {
    AsyncStorage.multiSet([["FirstECommerce", "true"]]);
    this.props.navigation.navigate("DrawerStackECommerce");
  }

  _moveToECommerceDevelopment() {
    AsyncStorage.multiSet([["FirstECommerceDevelopment", "true"]]);
    this.props.navigation.navigate("DrawerStackECommerceDevelpoment");
  }

  _moveToBlog() {
    AsyncStorage.multiSet([["FirstBlog", "true"]]);
    this.props.navigation.navigate("DrawerStackBlog");
  }

  _moveToBubbdy() {
    this.props.navigation.navigate("MainStackBubbdy");
  }

  _moveToTraveling() {
    this.props.navigation.navigate("IntroductionScreen");
  }

  _moveToFood() {
    this.props.navigation.navigate("Walkthrough");
  }

  _moveToVehicle() {
    this.props.navigation.navigate("DrawerStackVehical");
  }

  _moveToHotel() {
    this.props.navigation.navigate("DrawerStackHotel");
  }

  _moveToCryptoPortfolio() {
    this.props.navigation.navigate("MainStackCryptoPortfolio");
  }

  _moveToFoodRecipe() {
    this.props.navigation.navigate("DrawerStackFoodRecipes");
  }

  _moveToNewsMediaRecipe() {
    this.props.navigation.navigate("DrawerStackNewsMedia");
  }

  render() {
    var that = this;
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

   let ic_logo = {
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
          <View style={styles.mainView}>
	     <Image source={ic_logo} style={styles.logoImg} />
          	<View style={styles.btnsec}>
                
		 
             <ActivityIndicator
               animating = {this.animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
	      
              </View>
	 </View>
           </LinearGradient>
       
    );
  }
}

export default MainScreen;
