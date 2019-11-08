import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
  StatusBar,
  Button,
  ScrollView,
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
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Images, Metrics, Fonts, Colors } from "../../../Themes/";
import AsyncStorage from "@react-native-community/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Rating, AirbnbRating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';




export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {

      text:'',
      review: "",
      animating: false,

      myrecipe:  [
      {
        id: 1,
        image_path: "https://sites.google.com/site/mayanoureddineseportfolio/_/rsrc/1480595496706/my-courses/my%20courses.png",
        course_name: "See Your Courses Here",
        duration: "20 min"
      },

    ],
    };
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



  _postData = async () => {
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
    //   this.setState({userName:parsed.data.userdata.name})


  }

  catch(error){
      alert(error);
  }
  // var token = this.state.myToken;

  let collection={}

        collection.token=mytoken,


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
    api: 'ongoing_courses',
    data: collection,
  }),
}).then((response) => response.json())
  .then((responseJson) => {
  //this.setState({text: responseJson.data.list})
  //this.setState({text: JSON.stringify(responseJson)})
    //let parsed2 = JSON.parse(userdata);
    this.setState({

    myrecipe: responseJson.data.list,
    animating: false,

    })

  })
    .catch((error) => {

    console.log(error)
  })

    // AsyncStorage.getItem('token').then((token) => this.setState({ 'token': token }))
}

renderMyCourses(){

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
  <ScrollView
    horizontal={false}
    >
    { this.state.myrecipe.map((item, index) => {

return(
  <TouchableOpacity
          key={index}
          style={styles.myrecipeslistbg}
          onPress={() =>
// this.setState({text: item.course_name})

this.props.navigation.navigate("TrendingRecipesDetails3",
{
course_id:item.id,
coursename:item.course_name,
categoryname:item.category_name,
imagepath:item.image_path,
duration:item.duration,
review_given:item.review_given,
slug:item.slug,
})
          }
        >
        <View
        style={{
        flex:1,
        justifyContent: 'flex-start',
        alignSelf:'baseline',
          }}
          >
<View
style={{
flex:1,
flexDirection: "row",
justifyContent: 'flex-start',
alignSelf:'baseline',
  }}
  >
          <Image
            source={{uri:item.image_path}}
            style={styles.myrecipeslistimagesbg}
          />
          <View
          style={{
          flex:1,
          flexDirection: "column",
          justifyContent: 'flex-start',
          alignSelf:'baseline',
            }}
            >

          <Text style={[styles.descriptiontext,{
                 fontSize: Fonts.moderateScale(15),
                }]}>
            {item.course_name}
          </Text>
<Text style={[styles.descriptiontext,{
                 fontSize: Fonts.moderateScale(12),
                }]}>
            {item.category_name}
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
               {item.duration}
            </Text>
          </View>
</View>
</View>
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
  65% Completed
</Text>
<Progress.Bar progress={0.65} width={250}
              padding={0.5} marginVertical={0.5}
 />

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

          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
            enableAutomaticScroll={false}
            enableAutoAutomaticScrol="true"
            enableOnAndroid={true}
          >

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
              <Title style={styles.headertitle}>My Courses</Title>
            </Body>
            <Right style={styles.right} />
          </Header>

          <Button onPress={this._postData} title="See My courses"/>

            <Text style={styles.profileNameText}>{this.state.text}</Text>

         <View>
           {this.renderMyCourses()}
         </View>


        </Container>
      </KeyboardAwareScrollView>
  </View>
    </ScrollView>
    );
  }
}
