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
  WebView,
  TouchableWithoutFeedback,
  Linking,
  ScrollView
} from "react-native";
import { Content, Header, Left, Right, Body } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-ionicons';
import Video from 'react-native-video';
import HTML from 'react-native-render-html';
import Hyperlink from 'react-native-hyperlink';
import Iframe from 'react-iframe';
import AsyncStorage from "@react-native-community/async-storage";


export default class TrendingRecipesDetails1 extends Component {
  constructor(props) {
    super(props);



    this.state = {

	title:this.props.navigation.state.params.coursename,
	category:this.props.navigation.state.params.categoryname,
	price:this.props.navigation.state.params.price,
	discount:this.props.navigation.state.params.discounted_price,
	lerningoutcomes:(JSON.parse(this.props.navigation.state.params.learning_outcomes)).text,
  isheadingArray:(JSON.parse(this.props.navigation.state.params.learning_outcomes)).is_heading,
  videotype:this.props.navigation.state.params.video_type,
	youtubeurl:this.props.navigation.state.params.youtube_url,
	vimeourl:this.props.navigation.state.params.vimeo_url,
	description:this.props.navigation.state.params.description,
  duration:this.props.navigation.state.params.duration,
  rating:this.props.navigation.state.params.average_rating,
  skilllevel:this.props.navigation.state.params.skilllevel,
  language:this.props.navigation.state.params.language,
  url:'',

  repeat: false,
  rate: 1,
  volume: 1,
  muted: false,
  resizeMode: 'contain',
  duration1: 0.0,
  currentTime: 0.0,
  paused: false,
  overlay: false,
  rateText: '1.0',
  pausedText: 'Play',
  hideControls: false,






       /*  if(this.props.navigation.state.params.skill_level_id==='1')
		{
	    skilllevel:'Beginner'
		}
          else if(this.props.navigation.state.params.skill_level_id==='2')
		{
	    skilllevel:'Intermediate'
		}
	  else if(this.props.navigation.state.params.skill_level_id==='3')
		{
	    skilllevel:'Expert'
		}
         else
	   {
           skilllevel:'Beginner1'
	   } */




      suggestedRecipes: [
        {
          id: 1,
          recipeimg: Images.pizzafoodrecipe,
          recipename: "Neapolitan Pizza Traditional",
          recipetime: "20 min"
        },
        {
          id: 2,
          recipeimg: Images.pastarecipe,
          recipename: "Fusilli bucati" + "\n" + "Pasta",
          recipetime: "15 min"
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
          recipeimg: Images.Chinessroll,
          recipename: "Chiness Vegetable" + "\n" + "Roll",
          recipetime: "20 min"
        }
      ]
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

  renderSkill(){
	  if(this.state.skilllevel === '1')
			{
		return <Text style={[styles.subText,{fontSize: Fonts.moderateScale(15)}]}> Skill Level {"\n \n"} Beginner</Text>;
			}
	else if(this.state.skilllevel === '2')
			{
		return <Text style={[styles.subText,{fontSize: Fonts.moderateScale(15)}]}> Skill Level {"\n \n"} Intermediate</Text>;
			}
	else if(this.state.skilllevel === '3')
			{
		return <Text style={[styles.subText,{fontSize: Fonts.moderateScale(15)}]}> Skill Level {"\n \n"} Expert</Text>;
			}
	else {
		return null;
	    }
	}

  renderLanguage(){

	  if(this.state.skilllevel === '1')
			{
		return <Text style={[styles.subText,{fontSize: Fonts.moderateScale(15)}]}> Language {"\n \n"} English</Text>;
			}
	else if(this.state.skilllevel === '2')
			{
		return <Text style={[styles.subText,{fontSize: Fonts.moderateScale(15)}]}> Language {"\n \n"} Hindi </Text>;
			}
	else if(this.state.skilllevel === '1,2')
			{
		return <Text style={[styles.subText,{fontSize: Fonts.moderateScale(15)}]}> Language {"\n \n"} English,Hindi </Text>;
			}
	else {
		return null;
	    }
	}

  renderWebview()
  {
     return  <WebView
         source = {{ uri:
         'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint' }}
         />;

  }

  renderVideo(){
    if(this.state.videotype === 'Vimeo')
    {
      return (<View>
          <Iframe url={this.state.vimeourl}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
         </View>);

    }
    else if (this.state.videotype === 'Youtube')
    {
    return ( <View>
    <Iframe url={this.state.youtubeurl}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      </View>  );
    }
  }

  renderLearningOutcomes(){

  return this.state.lerningoutcomes.map((person,index) => {

      if(this.state.isheadingArray[index] === '1'){
      return <Text
        style={[
          styles.ingredientTitle,
          { fontSize: Fonts.moderateScale(21),color: "#787878", }
        ]}
      >
          {person}
          </Text>;
      }
    else if(this.state.isheadingArray[index] === '0'){
    return <Text
      style={[
        styles.ingredientTitle,
        { fontSize: Fonts.moderateScale(17) }
      ]}
    >
    &#10003;  {person}
   </Text> ;

      }
      else
      {
      return <Text
        style={[
          styles.ingredientTitle,
          { fontSize: Fonts.moderateScale(17) }
        ]}
      >
         * {person}
     </Text>
      }

  });

}

onLoad=(data) => {
  //set Duration
  this.setState({duration1: data.duration});
}

 // this calls every 250ms
onPress=(data) => {
  // set current time
  this.setState({currentTime: data.currentTime});
}

// Video ends
onEnd=() => {
  // set pausedText and paused, set video current time is 0
  this.setState({pausedText: 'Play', paused: true});
  this.video.seek(0);
}

async _shareReffer() {

   try{
      let userdata = await AsyncStorage.getItem('userdata');
      let parsed = JSON.parse(userdata);
     // this.setState({text: parsed.data.userdata.token})
      var reffer = parsed.data.userdata.referral_link;



  }

  catch(error){
      alert(error);
  }

 // this.setState({text: this.state.myToken})
 Share.share({
  message: reffer,
  url: 'Visit a new & awesome learning platform',
  title: 'Get Set Go'
}, {
  // Android only:
  dialogTitle: 'Share Get Set Go',
  // iOS only:
  excludedActivityTypes: [
    'com.apple.UIKit.activity.PostToTwitter'
  ]
})


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
                  {this.state.title}
                </Text>

		 <Text style={[styles.itemTitleName,{
                               fontSize: Fonts.moderateScale(20),
				color: "#e8e8e8",
                              }]}>
                          {this.state.category}
                        </Text>
	      </View>


		 <View style={styles.infoMainView}>
                  <View style={styles.caloriesView}>
                    <Text style={styles.titleText}>Duration</Text>
                    <Text style={styles.subText}>{this.state.duration}</Text>
                  </View>

                  <View style={styles.verticalDivider} />

                  <View style={styles.centerView}>
                    { this.renderSkill() }
                  </View>

                  <View style={styles.verticalDivider} />

                  <View style={styles.centerView}>
                    { this.renderLanguage() }
                  </View>

                  <View style={styles.verticalDivider} />

                  <View style={styles.carbView}>
                    <Text style={[styles.titleText, { textAlign: "right" }]}>
                      Videos
                    </Text>
                    <Text style={[styles.subText, { textAlign: "right" }]}>

                    </Text>
                  </View>
                </View>

            </View>
          </ImageBackground>


          <Text
            style={{
    color: "#ff0000",
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(26),
   paddingHorizontal: 10,
    paddingVertical: 15
  }}
          >
             ₹ {this.state.discount}
          </Text>



	<Text style={[styles.ingredientTitle,{textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize: Fonts.moderateScale(20)}]}>
		₹ {this.state.price}
	</Text>

 <View style={{flex:1}}>
  {this.renderWebview()}
 </View>

<TouchableOpacity
          style={[
                  styles.btnBg,
                  {
                    backgroundColor: "#F05522",
                  }
                ]}
                onPress={() =>
// this.setState({text: item.course_name})

  this.props.navigation.navigate("PaymentMethod3",
  {
coursename:this.state.title,
discounted_price:this.state.discount,
  })
                }
              >
                <Text style={styles.btnText}>BUY THIS COURSE</Text>
              </TouchableOpacity>

	 <View style={styles.horizontalDivider} />

       <Text
           style={styles.ingredientTitle}>
             Learning Outcomes
          </Text>

   <View>
    { this.renderLearningOutcomes() }
    </View>

<View style={styles.horizontalDivider} />

         <Text style={styles.ingredientTitle}>Description of course</Text>

         <HTML html = {this.state.description} imagesMaxWidth={Dimensions.get('window').width} />

	    <View style={styles.horizontalDivider} />

    <View style={styles.horizontalDivider} />

         <Text
            style={{
    color: "#ff0000",
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(20),
     paddingHorizontal: 10,
    paddingVertical: 15
  }}>
             Ratings  {this.state.rating}
        </Text>

        <View style={styles.horizontalDivider} />

        <TouchableOpacity style={styles.youtubeStyle}>
        <Icon name="logo-youtube" />
         </TouchableOpacity>

        <View style={styles.horizontalDivider} />

        <TouchableOpacity style={styles.youtubeStyle}>
        <Icon name="logo-vimeo" />
        </TouchableOpacity>

          <View style={styles.horizontalDivider} />

  </Content>
      </View>
    );
  }

 /*
 <View>
 { this.state.lerningoutcomes.map((person,index) => (


   <Text
      style={[
        styles.ingredientTitle,
        { fontSize: Fonts.moderateScale(21) }
      ]}
    >
       { person }
   </Text>

 ))}
 </View>

 <TouchableWithoutFeedback
 style={styles.fullScreen}
 onPress={() => this.setState({paused: !this.state.paused})}
 >

   <Video
      ref={(ref: Video) => {
        this.video = ref
      }}
      style={styles.fullScreen}
      source={{uri: "https://youtu.be/swigQ10SL_w"}}   // Can be a URL or a local file.                                      // Store reference
      repeat={this.state.repeat}
      rate={this.state.rate}
      volume={this.state.volume}
      muted={this.state.muted}
      resizeMode={this.state.resizeMode}
      paused={this.state.paused}
      onLoad={this.onLoad}
      onProgress={this.onProgress}
      onEnd={this.onEnd}
      onBuffer={this.onBuffer}                // Callback when remote video is buffering
      onError={this.videoError}               // Callback when video cannot be loaded
      style={styles.backgroundVideo} />

  </TouchableWithoutFeedback>

 */

}
