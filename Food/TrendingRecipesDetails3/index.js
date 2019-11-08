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
import AsyncStorage from "@react-native-community/async-storage";



export default class TrendingRecipesDetails3 extends Component {
  constructor(props) {
    super(props);



    this.state = {
  course_id:this.props.navigation.state.params.course_id,
	coursname:this.props.navigation.state.params.coursename,
	category:this.props.navigation.state.params.categoryname,
  imagepath:this.props.navigation.state.params.imagepath,
	duration:this.props.navigation.state.params.duration,
  review_given:this.props.navigation.state.params.review_given,
  slug:this.props.navigation.state.params.slug,
  videos:'abc',








    };
  }

  componentWillMount() {

    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("Favorites");
    return true;
  };

  _postData = async () => {
  /*let formData = new FormData();
  formData.append('username','admin');
  formData.append('password','admin'); */
  //AsyncStorage.getItem('token').then((token) => this.setState({ 'token': token }))

  this.setState({animating:true})

  var courseId_ = this.props.navigation.state.params.course_id;

  //this.setState({videos: courseId_})

  try{
      let userdata = await AsyncStorage.getItem('userdata');
      let parsed = JSON.parse(userdata);
     // this.setState({text: parsed.data.userdata.token})
       var mytoken = parsed.data.userdata.token;
    //   this.setState({userName:parsed.data.userdata.name})


  }

  catch(error){
      alert(error);
  }
  // var token = this.state.myToken;

  let collection={}

        collection.token=mytoken,
        collection.course_id=courseId_

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
    api: 'view_course',
    data: collection,
  }),
}).then((response) => response.json())
  .then((responseJson) => {
  this.setState({videos: responseJson.data.course.course_name})
  //this.setState({videos: JSON.stringify(responseJson)})
  //this.setState({videos: courseId})
    //let parsed2 = JSON.parse(userdata);
    this.setState({

  //  myrecipe: responseJson.data.list,
    animating: false,

    })

  })
    .catch((error) => {

    console.log(error)
  })

    // AsyncStorage.getItem('token').then((token) => this.setState({ 'token': token }))
}

  render() {
	const { navigation } = this.props;
  return (
    <View style={styles.mainView}>
          <Content>
            <ImageBackground style={styles.imgBg} source={{uri: navigation.getParam('imagepath')}} imageStyle={{resizeMode: 'contain'}}>
              <View style={styles.shadowView}>
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

                  <Body style={styles.body} />

                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() => this._shareReffer()}
                    >
                      <MaterialIcons
                        name="share"
                        color="#FFFFFF"
                        size={25}
                        style={{ marginRight: 15 }}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <MaterialIcons
                        name="star-border"
                        color="#FFFFFF"
                        size={25}
                        style={{ marginRight: 10 }}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <MaterialIcons name="more-vert" color="#FFFFFF" size={25} />
                    </TouchableOpacity>
                  </Right>
                </Header>

                <View style={{ bottom: 0, position: "absolute" }}>
                  <Text style={styles.itemTitleName}>
                    {this.state.coursname}
                  </Text>

  		 <Text style={[styles.itemTitleName,{
                                 fontSize: Fonts.moderateScale(20),
  				color: "#e8e8e8",
                                }]}>
                            {this.state.category}
                          </Text>
  	      </View>
              </View>
            </ImageBackground>

<TouchableOpacity
            style={[
                    styles.btnBg,
                    {
                      backgroundColor: "#F05522",
                    }
                  ]}
                  onPress={() => this._postData()
  // this.setState({text: item.course_name})
                  }
                >
                  <Text style={styles.btnText}>See Content</Text>
                </TouchableOpacity>

                <Text
                  style={{
          color: "#ff0000",
          fontFamily: Fonts.type.robotoMedium,
          fontSize: Fonts.moderateScale(26),
         paddingHorizontal: 10,
          paddingVertical: 15
        }}
                >
                   ₹ {this.state.videos}
                </Text>



    </Content>
        </View>
      );

   }


}
