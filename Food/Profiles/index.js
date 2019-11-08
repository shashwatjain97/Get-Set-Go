import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  Share,
  Platform,
  ImageBackground,
  ScrollView
} from "react-native";

import styles from "./styles";
import { Metrics, Fonts, Colors, Images } from "../../../Themes";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";



export default class Profiles extends Component {
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
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <ImageBackground source={Images.ProfileBG} style={styles.ProfileBG}>
          <TouchableOpacity
            style={styles.Settingicon}
            underlayColor="transparent"
          >
            <Ionicons
              name="md-settings"
              size={25}
              color="#fff"
              style={{ alignSelf: "flex-end", top: 5, right: 10 }}
            />
          </TouchableOpacity>

          <View style={styles.MainProfileDetails}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={Images.ProfileUserImg}
                style={styles.ProfileUserImg}
              />
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.ProfileUserName}>Shashwat Jain</Text>
                <Text style={styles.ProfileUserAdd}>
                  6226 USA California
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View
          style={[
            styles.OrderHistroyMainBg,
            { marginTop: Metrics.HEIGHT * 0.02 }
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles.OrderHistoryCircle,
                { backgroundColor: "#4a90e2" }
              ]}
            >
              <MaterialCommunityIcons
                name="file-document-box"
                size={20}
                color={"#fff"}
                style={{ alignSelf: "center" }}
              />
            </View>
            <Text style={styles.OrderHistoryText}>Orders History</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="right"
              size={20}
              color="#c2c4ca"
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>

        <View style={styles.MainProfileDetail}>
          <ScrollView>
            <View style={styles.OrderHistroyMainBg}>
              <TouchableOpacity
                style={{ flexDirection: "row",  width: Metrics.WIDTH, }}
                onPress={() => this.props.navigation.navigate("PaymentMethod")}
              >
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#87bf4a" }
                  ]}
                >
                  <MaterialIcons
                    name="payment"
                    size={20}
                    color={"#fff"}
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>Bank Details</Text>
            <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
                </TouchableOpacity>
            </View>

	 <View style={styles.BorderHorizontal} />

            <View style={styles.OrderHistroyMainBg}>
	      <TouchableOpacity
                style={{ flexDirection: "row",   width: Metrics.WIDTH, }}
                onPress={() => this.props.navigation.navigate("PaymentMethod1")}
              >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#f05522" }
                  ]}
                >
                  <FontAwesome
                    name="trophy"
                    size={20}
                    color={"#fff"}
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>My Earnings</Text>
	     </View>


              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.BorderHorizontal} />

            <View style={styles.OrderHistroyMainBg}>
	     <TouchableOpacity
                style={{ flexDirection: "row",  width: Metrics.WIDTH, }}
                onPress={() => this.props.navigation.navigate("PaymentMethod2")}
              >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#f5a623" }
                  ]}
                >
                  <Ionicons
                    name="md-settings"
                    size={25}
                    color="#fff"
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>Transactions</Text>

              </View>

              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.BorderHorizontal} />

            <View style={styles.OrderHistroyMainBg}>
              <TouchableOpacity
                style={{ flexDirection: "row",  width: Metrics.WIDTH }}
                onPress={() => this._shareReffer()}
              >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#50e3c2" }
                  ]}
                >
                  <FontAwesome5
                    name="user-plus"
                    size={20}
                    color={"#fff"}
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>Invite Friends</Text>
              </View>
	            <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
              	</TouchableOpacity>
            </View>

		  <View style={styles.OrderHistroyMainBg}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}

                onPress={() => this.props.navigation.navigate("FoodLogin")}
              >
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#87bf4a" }
                  ]}
                >
                <AntDesign
                  name="logout"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
                </View>
                <Text style={styles.OrderHistoryText}>Log Out</Text>
              </TouchableOpacity>
		</View>
            <View style={styles.BorderHorizontal} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
