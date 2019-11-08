import React, { Component } from "react";
import {
  View,
  ListView,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
  BackHandler,
  Alert,
  Platform
} from "react-native";
import {
  Spinner,
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Input
} from "native-base";
import { connect } from "react-redux";
import styles from "./styles";
import { AdMobRewarded, AdMobInterstitial } from "react-native-admob";
import AsyncStorage from "@react-native-community/async-storage";
class AdMobScreen extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);

    AdMobRewarded.removeAllListeners();
    AdMobInterstitial.removeAllListeners();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    BackHandler.exitApp();
    return true;
  };

  componentDidMount() {
    AdMobRewarded.setAdUnitID("ca-app-pub-9305524442270513/4456491277");

    AdMobRewarded.addEventListener("rewarded", reward =>
      console.log("AdMobRewarded => rewarded", reward)
    );
    AdMobRewarded.addEventListener("adLoaded", () => {});
    AdMobRewarded.addEventListener("adFailedToLoad", error => {});
    AdMobRewarded.addEventListener("adOpened", () => {});
    AdMobRewarded.addEventListener("videoStarted", () => {});
    AdMobRewarded.addEventListener("adClosed", () => {
      AdMobRewarded.requestAd();
    });
    AdMobRewarded.addEventListener("adLeftApplication", () => {});

    AdMobRewarded.requestAd();

    AdMobInterstitial.setAdUnitID("ca-app-pub-9305524442270513/7553726314");

    AdMobInterstitial.addEventListener("adLoaded", () => {});
    AdMobInterstitial.addEventListener("adFailedToLoad", error => {});
    AdMobInterstitial.addEventListener("adOpened", () => {});
    AdMobInterstitial.addEventListener("adClosed", () => {
      AdMobInterstitial.requestAd();
    });
    AdMobInterstitial.addEventListener("adLeftApplication", () => {});

    AdMobInterstitial.requestAd();
  }

  showRewarded() {
    AdMobRewarded.showAd();
  }

  showInterstitial() {
    AdMobInterstitial.showAd();
  }

  render() {
    var that = this;
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon style={{ color: "white" }} name="ios-menu" />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title style={{ color: "white" }}>Antiqueruby AdMob</Title>
          </Body>
          <Right style={styles.right} />
        </Header>

        <Content style={{ backgroundColor: "white" }}>
          <View style={styles.container}>
            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => that.props.navigation.navigate("AdMob_Banner")}
              >
                <Text style={styles.buttonText}>Banner Ad</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={this.showInterstitial}
              >
                <Text style={styles.buttonText}>Interstitial Ad</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={this.showRewarded}
              >
                <Text style={styles.buttonText}>Rewarded Video Ad</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AdMobScreen;
