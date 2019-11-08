import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  Share,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  BackHandler,
  Linking,
  WebView,
  ScrollView
} from "react-native";
import { Content, Header, Left, Right, Body } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-ionicons';
import HTML from 'react-native-render-html';
import Hyperlink from 'react-native-hyperlink';



export default class TrendingRecipesDetails2 extends Component {
  constructor(props) {
    super(props);
	
	

    this.state = {

	title:this.props.navigation.state.params.coursename,
	category:this.props.navigation.state.params.categoryname,
	price:this.props.navigation.state.params.price,
	discount:this.props.navigation.state.params.discounted_price,
	lerningoutcomes:(JSON.parse(this.props.navigation.state.params.learning_outcomes)).text,
	youtubeurl:this.props.navigation.state.params.youtube_url,
	vimeourl:this.props.navigation.state.params.vimeo_url,
	description:this.props.navigation.state.params.description,
        duration:this.props.navigation.state.params.duration,
        rating:this.props.navigation.state.params.average_rating,
        skilllevel:this.props.navigation.state.params.skilllevel,        
        language:this.props.navigation.state.params.language,
        slug:this.props.navigation.state.params.slug,

        url:'https://getsetgoworld.com/course/'+this.props.navigation.state.params.slug,
	
 

	
		

    };
  }

  componentWillMount() {
	
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("WelcomeScreen");
    return true;
  };


	


  render() {
	const { navigation } = this.props;
	
	
        
    return (
	<View style = { styles.container }>
	  <WebView
        source={{uri:this.state.url}}
        style={{marginTop: 20}}
      />
	</View>
	);
   }


}
