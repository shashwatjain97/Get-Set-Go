import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  AsyncStorage,
  ScrollView,
  ActivityIndicator,
  ListView,
  Easing,
  Platform
} from "react-native";
import {
  Content,
  Container,
  Icon,
  Right,
  Header,
  Left,
  Title,
  Body
} from "native-base";
import styles from "./styles";
import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Rating from "react-native-rating";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";




export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
	text:'',

        animating: false,
	isLoading: false,

	orderHistory: [
  {
    id: 1,
    FoodImg: { uri: '' },
    FoodPrice: "",
    FoodName: ""
  },

],

 }
   }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("FoodLogin");
    return true;
  };

  renderOrders(){

    if(this.state.animating)
  {
  return (

  <ActivityIndicator
   animating = {this.animating}
   color = '#bc2b78'
   size = "large"
   style = {styles.activityIndicator}/>

  );
  }
  else{
  return (

    <View>
    <ScrollView>
      { this.state.orderHistory.map((item, index) => {

  return(
    <TouchableOpacity
      key={index}

    /*  onPress={() =>
// this.setState({text: item.course_name})
        this.props.navigation.navigate("TrendingRecipesDetails1",
{
coursename:item.course_name,
categoryname:item.category_name,
imagepath:item.image_path,
vimeo_url:item.vimeo_url,
youtube_url:item.youtube_url,
description:item.description,
learning_outcomes:item.learning_outcomes,
duration:item.duration,
price:item.price,
discounted_price:item.discounted_price,
average_rating:item.average_rating,
follow_up_link:item.follow_up_link,
skilllevel:item.skill_level_id,
language:item.language_id,
})
      } */
    >
<View
        style={{
flex:1,
          flexDirection: "row",
          justifyContent: 'flex-start',
          alignSelf:'baseline',
        }}
      >

      <Text style={[styles.descriptiontext,{
             fontSize: Fonts.moderateScale(15),
            }]}>
        {item.course_name} |
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start"
        }}
      >
        <MaterialCommunityIcons
          name="clock-outline"
          color="#263238"
          size={18}
          style={{ marginLeft: 5, marginTop: 2 }}
        />
        <Text
          style={[
            styles.descriptiontext,
            {
              marginLeft: 5,
              marginTop: 2,
              fontSize: Fonts.moderateScale(13)
            }
          ]}
        >
           {item.purchase_date} |
        </Text>
      </View>


<Text
          style={[styles.descriptiontext,{fontSize: Fonts.moderateScale(15)}]}
        >
          ₹ {item.amount}
        </Text>
</View>
    </TouchableOpacity>

        )
      })

  }
    </ScrollView>
    </View>
  );
    }


  }



  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
	  <ScrollView>
      <View style={styles.mainView}>
        <Container>
          <Header style={styles.HeaderBg} transparent>
            <Left style={styles.leftheader}>
              <TouchableOpacity>
                <View>
                  <AntDesign
                    name="search1"
                    size={20}
                    color="#fff"
                    style={{
                      alignSelf: "center",
                      marginLeft: Metrics.HEIGHT * 0.015
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Title style={styles.headertitle}>ORDER HISTORY</Title>
            </Body>
            <Right style={styles.right} />
          </Header>
          <View style={styles.MainListBg}>

	    <TouchableOpacity
              style={styles.SearchMainBg}
              onPress={() => this._orderHistory()}
            >
              <Text style={styles.searchText}>Tap Here To Get Order History</Text>
      </TouchableOpacity>


            <View>
             {this.renderOrders()}
             </View>


          </View>
        </Container>
      </View>
	</ScrollView>
    );
  }

 _orderHistory = async () => {

	let collection={}

	this.setState({animating:true})

	try{
	    let userdata = await AsyncStorage.getItem('userdata');
	    let parsed = JSON.parse(userdata);
	   // this.setState({text: parsed.data.userdata.token})
            var mytoken = parsed.data.userdata.token;

	}

	catch(error){
	    alert(error);
	}

	collection.token=mytoken


	//this.setState({text: JSON.stringify(collection)});
	//console.warn(collection);


	var url = 'https://getsetgoworld.com/dev_env/webservice'

 	//this.setState({text: "Clicked"})

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
    	api: 'order_history',
    	 data: collection

  }),
}).then((response) => response.json())
  .then((responseJson) => {
	//this.setState({text: JSON.stringify(responseJson)})


       /*	if(responseJson.msg === 'User logged in successfully !')
		{
		  this.props.navigation.navigate("TabView");
		  AsyncStorage.setItem('userdata' ,JSON.stringify(responseJson));
		}*/
	//  this.setState({text: JSON.stringify(responseJson)});
	 // orderHistory: responseJson.data.list;
	  this.setState({
		orderHistory: responseJson.data.list,
		 animating: false,
	});
	  //this.setState({text: JSON.stringify(myrecipe1)});
	 // this.props.navigation.navigate("SearchResultOne");
})
.catch((error) => { console.log(error) })

}

}
