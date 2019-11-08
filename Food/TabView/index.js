import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import WelcomeScreen from "../WelcomeScreen/index";
import OrderHistory from "../OrderHistory/index";
import Favorites from "../Favorites/index";
import Notifications from "../Notifications/index";
import Profiles from "../Profiles/index";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabView = createBottomTabNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
	tabBarLabel:'Featured',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="star" size={25} color={tintColor} />
        )
      }
    },
    OrderHistory: {
      screen: OrderHistory,
      navigationOptions: {

        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="file-document-box"
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
	tabBarLabel:'My Courses',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="play" size={25} color={tintColor} />
        )
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
	tabBarLabel:'Wishlist',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="heart" size={25} color={tintColor} />
        )
      }
    },
    Profiles: {
      screen: Profiles,
      navigationOptions: {
        tabBarLabel:'Profile',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user-circle" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      activeTintColor: "#f05522",
      inactiveTintColor: "#75777d",
      showIcon: true,
      showLabel: true
    }
  }
);
export default TabView;
