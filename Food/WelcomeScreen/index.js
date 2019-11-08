import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  BackHandler,
  TextInput
} from "react-native";


import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import { Content, Header, Left, Right, Body } from "native-base";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Rating, AirbnbRating } from 'react-native-ratings';
import AsyncStorage from "@react-native-community/async-storage";
import LinearGradient from "react-native-linear-gradient";
import { WebView } from 'react-native-webview';

const Welcome_mainBg =
  "https://i.ibb.co/Pmd0kDc/gradient-mobile-isometric-technology-background-52683-4499.jpg";



export default class WelcomeScreen extends Component {
   constructor(props) {
    super(props);

    this.state = {

	      text:'',
        userName:'User',
        myToken:'',
        animating: false,
	      isLoading: false,
	      weburl:'',
	      searchtext: '',
        category:'',
	      myrecipe:  [
        {
          id: 1,
          image_path: "https://wifd.in/img/wifd-courses.png",
          course_name: "See Courses Here",
          duration: "20 min"
        },

      ],
	myrecipe1:  [
        {
          id: 1,
          recipeimg: Images.frankierecipe,
          recipename: "Vegetable Indian Rolls",
          recipetime: "20 min"
        },
        {
          id: 2,
          recipeimg: Images.PaneerBiryaniRecipe,
          recipename: "Panner Biriyani",
          recipetime: "30 min"
        },
        {
          id: 3,
          recipeimg: Images.Chinessroll,
          recipename: "Chiness Vegetable" + "\n" + "Roll",
          recipetime: "20 min"
        },
        {
          id: 4,
          recipeimg: Images.Vegburger,
          recipename: "Vegetable burgers" + "\n",
          recipetime: "20 min"
        },
        {
          id: 5,
          recipeimg: Images.pizzafoodrecipe,
          recipename: "Neapolitan Pizza Traditional",
          recipetime: "20 min"
        },
        {
          id: 6,
          recipeimg: Images.pastarecipe,
          recipename: "Fusilli bucati" + "\n" + "Pasta",
          recipetime: "15 min"
        },
        {
          id: 7,
          recipeimg: Images.tacostrecipe,
          recipename: "Mexican Tacos ",
          recipetime: "20 min"
        }
      ],

  favoriterecipe: [
        {
          id: 1,
          recipeimg: Images.frankierecipe,
          recipename: "Vegetable Indian Rolls",
          recipetime: "20 min"
        },
        {
          id: 2,
          recipeimg: Images.PaneerBiryaniRecipe,
          recipename: "Panner Biriyani",
          recipetime: "30 min"
        },
        {
          id: 3,
          recipeimg: Images.Chinessroll,
          recipename: "Chiness Vegetable" + "\n" + "Roll",
          recipetime: "20 min"
        },
        {
          id: 4,
          recipeimg: Images.Vegburger,
          recipename: "Vegetable burgers" + "\n",
          recipetime: "20 min"
        },
        {
          id: 5,
          recipeimg: Images.pizzafoodrecipe,
          recipename: "Neapolitan Pizza Traditional",
          recipetime: "20 min"
        },
        {
          id: 6,
          recipeimg: Images.pastarecipe,
          recipename: "Fusilli bucati" + "\n" + "Pasta",
          recipetime: "15 min"
        },
        {
          id: 7,
          recipeimg: Images.tacostrecipe,
          recipename: "Mexican Tacos ",
          recipetime: "20 min"
        }
      ]
    };

   //this._loadToken();
  }


   updateValue(text,field)
	{
	  if(field=='searchtext')
	    {
		this.setState({
		   searchtext:text,
		})
	    }
	  }

 ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}


async componentDidMount() {

  try{
     let userdata = await AsyncStorage.getItem('userdata');
     let parsed = JSON.parse(userdata);
    // this.setState({text: parsed.data.userdata.token})
            var mytoken = parsed.data.userdata.token;
      this.setState({userName:parsed.data.userdata.name})
      this.setState({myToken:parsed.data.userdata.token})

 }

 catch(error){
    // alert(error);
     this.setState({userName:'User'});
 }
    //this._postData();


    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

 componentWillMount(){
	 //this._postData();
   this.setState({
     selectedLots: [],
     maxFevouriteItem: 1 //allow maximum genres selection, you can change range from here
   });

}

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("FoodLogin");
    return true;
  };

  onSelected(id) {
    let tmp = this.state.selectedLots;

    if (tmp.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);
    } else {
      if (tmp.length < this.state.maxFevouriteItem) {
        tmp.push(id);
      } else {
        alert(
          "You can choose only " + this.state.maxFevouriteItem + " styles!"
        );
      }
    }
  //  this.setState({ category: item.musicname });
    this.setState({ selectedLots: tmp });
  }

  _renderItem = ({ item }) => (
  //  this.setState({ category: item.musicname });
    <TouchableOpacity
      style={
        this.state.selectedLots.includes(item.id)
          ? [styles.txtBg, styles.selectedButton]
          : [styles.txtBg, { backgroundColor: "#cfcfcf" }]
      }
      onPress={() => this._postCategory(item)}
    >
      <Text
        style={
          this.state.selectedLots.includes(item.id)
            ? [styles.musicname, { color: "#131e7e" }]
            : [styles.musicname, { color: "#212121" }]
        }
      >
        {" "}
        {item.musicname}
      </Text>
    </TouchableOpacity>

  );

 renderWebview(append){

		return  <WebView
        source={{uri: 'https://getsetgoworld.com/course/' + append}}
        style={{marginTop: 20}}
      />;

	}

renderCourses(){

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
    style={styles.myrecipesbg}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  >
    { this.state.myrecipe.map((item, index) => {

return(
  <TouchableOpacity
          key={index}
          style={styles.myrecipeslistbg}
          onPress={() =>
// this.setState({text: item.course_name})

this.props.navigation.navigate("TrendingRecipesDetails1",
{
coursename:item.course_name,
categoryname:item.category_name,
imagepath:item.image_path,
video_type:item.video_type,
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
slug:item.slug,
})
          }
        >
<View
style={{
flex:1,
flexDirection: "column",
justifyContent: 'flex-start',
alignSelf:'baseline',
  }}
  >
          <Image
            source={{uri:item.image_path}}
            style={styles.myrecipeslistimagesbg}
          />
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
<Rating
type='star'
imageSize={20}
readonly
onFinishRating={this.ratingCompleted}
/>
<Text
             style={[styles.descriptiontext,{textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize: Fonts.moderateScale(13)}]}
            >
₹ {item.price}

            </Text>
<Text
              style={[styles.descriptiontext,{fontSize: Fonts.moderateScale(15)}]}
            >
              ₹ {item.discounted_price}
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

    //setTimeout(function(){that.setState({timePassed: true})}, 1000);

    var appData = [
      {
        id: 1,
        musicname: "Brain & Memory"
      },
      {
        id: 2,
        musicname: "Freedom Mastery"
      },
      {
        id: 3,
        musicname: "Freedom Setup Challenge"
      },
      {
        id: 4,
        musicname: "Funnel Building"
      },
      {
        id: 5,
        musicname: "Digital Marketing"
      },
      {
        id: 6,
        musicname: "Bright Career"
      }
    ];

  if(this.state.isLoading){
		return(

		  <ActivityIndicator
               animating = {this.animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>

		);
	}

  else {
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
           <View
              style={{
                flexDirection: "row",
                marginTop: Metrics.HEIGHT * 0.09,
                marginLeft: Metrics.HEIGHT * 0.03
              }}
            >
	   <Image source={Images.ProfileImg} style={styles.ProfileImg} />
              <Text style={styles.profileNameText}>Hi, {this.state.userName}</Text>
            </View>
	 <View
              style={styles.Hi_bg}
            >
          <ImageBackground
            source={{ uri: Welcome_mainBg }}
            style={styles.Welcome_mainBg}
          >
         <Text style={[styles.ProfileDesText ,{
                               fontSize: Fonts.moderateScale(18),
                              }]}>
              Learn on your schedule
	</Text>
	  <Text style={[styles.ProfileDesText ,{
                               fontSize: Fonts.moderateScale(15),
                              }]}>
             Anywhere,anytime. Start learning today !
        </Text>
	  <Text style={[styles.ProfileDesText ,{
                               fontSize: Fonts.moderateScale(18),
                              }]}>
                    GET SET GO
	    </Text>
	   </ImageBackground>
	   </View>
            <View style={styles.SearchBg}>
              <AntDesign
                name="search1"
                size={20}
                color="#c2c4ca"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.015
                }}
              />
              <TextInput
		ref="searchtext"
                style={styles.RestaurantsSearch}
                maxLength={40}
                placeholder="Search for intresting courses.."
                placeholderTextColor="#c2c4ca"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
		onChangeText={(text) => this.updateValue(text,'searchtext')}
		value={this.state.searchtext}
                keyboardType="default"
                returnKeyType="done"
              />
              <Entypo
                name="location-pin"
                size={25}
                color="#f05522"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.01
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.SearchMainBg}
              onPress={() => this._search()}
            >
              <Text style={styles.searchText}>SEARCH</Text>
            </TouchableOpacity>

            <Text
              style={[
                styles.descriptiontext,
                {
                  marginLeft: 5,
                  marginTop: 4,
                  fontSize: Fonts.moderateScale(17),
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }
              ]}
            >
               Categories
            </Text>

            <FlatList
              contentContainerStyle={styles.listContent}
              data={appData}
              keyExtractor={appData => appData.id}
              renderItem={this._renderItem}
            />

           <View style={styles.mainsubview}>

              <Button onPress={this._postData} title="Tap to see all courses"/>

              <View>
                {this.renderCourses()}
              </View>

              <Text style={styles.profileNameText}>{this.state.text}</Text>

	      </View>


	        </KeyboardAwareScrollView>
      </View>
        </ScrollView>

    );
  }
}

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
	     this.setState({userName:parsed.data.userdata.name})
     }

	catch(error){
	    alert(error);
	}
  // var token = this.state.myToken;

  let collection={}

        collection.token=mytoken,
        collection.category='',
	collection.course='',
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
    api: 'courses',
    data: collection,
  }),
}).then((response) => response.json())
  .then((responseJson) => {
	//this.setState({text: responseJson.data.list[0]})
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

  //this.renderCourses();

    // AsyncStorage.getItem('token').then((token) => this.setState({ 'token': token }))
}

_postCategory = async (item) => {
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

var cat = item.musicname;

let collection={}

      collection.token=mytoken,
      collection.category='',
      collection.course='',
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
  api: 'courses',
  data: collection,
}),
}).then((response) => response.json())
.then((responseJson) => {
//this.setState({text: responseJson.data.list[0]})
//this.setState({text: cat})
  //let parsed2 = JSON.parse(userdata);
  this.setState({

  myrecipe: responseJson.data.list,
  animating: false,

  })

})
  .catch((error) => {

  console.log(error)
})

//this.renderCourses();

  // AsyncStorage.getItem('token').then((token) => this.setState({ 'token': token }))
}

async _loadToken() {

	 try{
	    let userdata = await AsyncStorage.getItem('userdata');
	    let parsed = JSON.parse(userdata);
	   // this.setState({text: parsed.data.userdata.token})

	    this.setState({
		    myToken:parsed.data.userdata.token,
		    //text:parsed.data.userdata.token
		})

	}

	catch(error){
	    alert(error);
	}

 // this.setState({text: this.state.myToken})

}

 _search = async () => {

	let collection={}

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

	collection.token=mytoken,
  collection.category='',
	collection.course=this.state.searchtext,
	collection.page='1'


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
    	api: 'courses',
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
	  this.setState({text: "Searched Results"});
	  this.setState({myrecipe: responseJson.data.list,
		 animating: false,
	});
	  //this.setState({text: JSON.stringify(myrecipe1)});
	 // this.props.navigation.navigate("SearchResultOne");



})
.catch((error) => { console.log(error) })

}
}
