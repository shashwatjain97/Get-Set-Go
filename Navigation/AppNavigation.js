import React, { Component } from "react";
import { Dimensions,ActivityIndicator,StatusBar,AsyncStorage,StyleSheet,View } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
const { width, height } = Dimensions.get("window");
import FirstScreen from "../Containers/Mainscreens/MainScreen/MainScreen";
/* Antiqueruby Screens List START */

import SelectStyle from "../Containers/Music/SelectStyle/index";

//main screens
/*import HomeScreen from "../Containers/Mainscreens/SignIn/Signin";
import SignUp from "../Containers/Mainscreens/SignUp/Signup";
import Walkthrough1 from "../Containers/Mainscreens/Walkthrough/Walkthrough";
import Social from "../Containers/Mainscreens/Social/Social";
import Profile from "../Containers/Mainscreens/Profile/Profile";
import Drawer from "../Containers/Mainscreens/Drawer/Drawer";
import AdMob from "../Containers/Mainscreens/AdMob/admob"; */
//SignUp
//import SignUp_05 from "../Containers/SignUp/SignUp_05/index";
// Walkthrough
import Walkthrough_17 from "../Containers/Walkthrough/WalkthroughFitness/index";

/* Food List START */
import SearchResultOne from "../Containers/Food/SearchResultOne/index";
import FoodLogin from "../Containers/Food/FoodLogin/index";
import FoodSignUp from "../Containers/Food/FoodSignUp/index";
import ProductDetails from "../Containers/Food/ProductDetails/index";
import TabView from "../Containers/Food/TabView/index";
import BookTable from "../Containers/Food/BookTable/index";
import AllCategories from "../Containers/Food/AllCategories/index";
import Reviews from "../Containers/Food/Reviews/index";
import SearchScreen from "../Containers/Food/SearchScreen/index";
import PaymentMethod from "../Containers/Food/PaymentMethod/index";
import PaymentMethod1 from "../Containers/Food/PaymentMethod1/index";
import PaymentMethod2 from "../Containers/Food/PaymentMethod2/index";
import PaymentMethod3 from "../Containers/Food/PaymentMethod3/index";
/* Food List END */

/* Food Recipe START */
import TrendingRecipesDetails2 from "../Containers/Food/TrendingRecipesDetails2/index";
import TrendingRecipesDetails3 from "../Containers/Food/TrendingRecipesDetails3/index";
import TrendingRecipesDetails1 from "../Containers/Food/TrendingRecipesDetails1/index";
import TrendingRecipes from "../Containers/FoodRecipe/TrendingRecipes/index";

/* Food Recipe END */


/* Antiqueruby Drawer START */
/* const DrawerStackAntiqueruby = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Drawer: { screen: Drawer },
    Profile: { screen: Profile },
    SignUp: { screen: SignUp },
    Walkthrough: { screen: Walkthrough },
    Social: { screen: Social },
    AdMob: { screen: AdMob },
    SignUp_05: { screen: SignUp_05 },
    Walkthrough_17: { screen: Walkthrough_17 },

   },
  {
    gesturesEnabled: false,
    contentComponent: SideBar,
    drawerLockMode: "locked-closed"
  }
);*/

/*const DrawerNavigationAntiqueruby = createStackNavigator(
  {
    DrawerStackAntiqueruby: { screen: DrawerStackAntiqueruby }
  },
  {
    headerMode: "none",
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false
    })
  }
); */
/*Antiqueruby Drawer END*/



/*Blog Drawer START*/
/* const DrawerStackBlog = createDrawerNavigator(
  {
    CategoryList: { screen: CategoryList },
    Category: { screen: Category },
    CategoryDetail: { screen: CategoryDetail },
    Favorite: { screen: Favorite },
    Search: { screen: Search }
  },
  {
    gesturesEnabled: false,
    contentComponent: BlogSideMenu
  }
);

const DrawerNavigationBlog = createStackNavigator(
  {
    DrawerStackBlog: { screen: DrawerStackBlog }
  },
  {
    headerMode: "none",
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false
    })
  }
); */
/*Blog Drawer END*/



/*Food Drawer START*/
const MainStackFood = createStackNavigator(
  {
    TabView: { screen: TabView },
    SearchResultOne: { screen: SearchResultOne },
    ProductDetails: { screen: ProductDetails },
    TrendingRecipesDetails1: { screen: TrendingRecipesDetails1 },
    TrendingRecipesDetails2: {screen: TrendingRecipesDetails2},
    TrendingRecipesDetails3: {screen: TrendingRecipesDetails3},
    BookTable: { screen: BookTable },
    AllCategories: { screen: AllCategories },
    Reviews: { screen: Reviews },
    SearchScreen: { screen: SearchScreen },
    PaymentMethod: { screen: PaymentMethod },
    PaymentMethod1: { screen: PaymentMethod1 },
    PaymentMethod2: { screen: PaymentMethod2 },
    PaymentMethod3:{ screen: PaymentMethod3 }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
/*Food Drawer END*/



const styles = StyleSheet.create({
	container: {
	   flex: 1,
 	   justifyContent: 'center',
	   alignItems: 'center',

	}
});

/* Food Recipes Drawer END */

// main stack
const AuthStack = createStackNavigator(
  {
    FirstScreen: { screen: FirstScreen },
    Walkthrough:{screen: Walkthrough_17 },
    SelectCategories:{screen: SelectStyle },
    FoodLogin: { screen: FoodLogin },
    FoodSignUp:{screen: FoodSignUp}
  },
  {
    headerMode: "none",
    navigationOptions: {
    gesturesEnabled: false
    }
  }
);


/*const PrimaryNav = createStackNavigator(
  {
    AuthStack: { screen: AuthStack },
    MainStackFood: { screen: MainStackFood }


   // DrawerStackFoodRecipes: { screen: DrawerStackFoodRecipes },

  },
  {
    headerMode: "none",
    initialRouteName: "mainStack",
    gesturesEnabled: false
  }
); */

// const App = createAppContainer(PrimaryNav);

//const AuthStack = createStackNavigator({MainStackFoodBefore: MainStackFoodBefore});

class AuthLoadingScreen extends Component {
	constructor(props){
	   super(props);
	   this._loadData();
	}

	render() {
	   return(
	   <View style={styles.container}>
		<ActivityIndicator/>
		<StatusBar barStyle="default"/>
	   </View>
	);
	}

     _loadData = async()=>{
	   const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
	   this.props.navigation.navigate(isLoggedIn !== '1'?'Auth':'App');
	}
}

//export default createAppContainer(PrimaryNav);

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainStackFood,
      Auth: AuthStack,
     },
  	{
	   initialRoutName: 'AuthLoading',
	}

));
