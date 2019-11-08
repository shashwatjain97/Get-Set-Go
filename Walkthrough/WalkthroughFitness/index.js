
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,BackHandler, I18nManager} from 'react-native';
import { Container, Right, Header, Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Screen Styles
import styles from './styles';

export default class WalkthroughFitness extends Component {

  constructor(props) {
 		super(props);
 		this.state = {};
 	}

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('FirstScreen')
	   	return true;
	  });
	}

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
		}

		const swiperImage = 'https://image.freepik.com/free-photo/two-potted-cactus-plant-stacked-books-isolated-white-background_23-2147924512.jpg';

    var data = [
      {
        id: 1,
        title: 'Our Philosophy',
        description: 'GetSetGo believes that everyone has the right to get educated.',
      },
      {
        id: 2,
        title: 'Key to Success',
        description: 'You can use the courses available on this platform to learn a new skill that you have been planning to within 4-5 weeks. Whether you are someone who is looking for simple courses or master courses, we have them all.',
      },
      {
        id: 3,
        title: 'Our Principles',
        description: '1. Providing World Class Education at an affordable Price. \n 2. Creating the skill based environment among the youths. \n 3. Creating Young & Dynamic Leaders.',
      },
      {
        id: 4,
        title: 'Our Values ',
        description: '1. Integrity \n 2. Teamwork \n 3. Commitment \n 4. Abundance \n 5. Freedom ',
      },
    ]

    return(
    <Container style={styles.container}>
     <ImageBackground source={{uri:swiperImage}} style={styles.imageContainer}>
      <View style={styles.slidesec}>
       <Header style={styles.header}>
         <Left style={styles.left}>
           <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('FirstScreen')}>
             <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
           </TouchableOpacity>
         </Left>
         <Body style={styles.body}>
         </Body>
         <Right style={styles.right}/>
       </Header>
       <Swiper
         ref='swiper'
         showsButtons={false}
         loop={true}
         autoplay={true}
	 activeDot={<View style={styles.activeDot}/>}
         dot={<View style={styles.dot}/>}
         paginationStyle={styles.paginationStyle}>
           {
            data.map((item, index) => {
               return (
                 <View style={styles.slider} key={index}>
                     <Text style={styles.headertext}>{item.title}</Text>
                     <Text style={styles.desctext}>{item.description}</Text>
                </View>
               )
             })
           }
        </Swiper>
       </View>
      </ImageBackground>
	
      <TouchableOpacity style={styles.nextButton}
          onPress = {() => this.props.navigation.navigate("SelectCategories")}>
          <Text style={styles.nextText}>SKIP</Text>
      </TouchableOpacity>
    </Container>


    );
  }
}
