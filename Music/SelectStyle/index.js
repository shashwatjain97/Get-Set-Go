import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  ListView,
  FlatList,
  ImageBackground,
  ScrollView,
  Picker,
  I18nManager,
  Dimensions
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Header
} from "native-base";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import Icons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-community/async-storage";


export default class SelectStyle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLots: []
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      AsyncStorage.multiSet([["user_Back", "false"]]);
      that.props.navigation.push("FirstScreen");
      return true;
    });

    this.setState({
      selectedLots: [4, 6, 10],
      maxFevouriteItem: 7 //allow maximum genres selection, you can change range from here
    });
  }

  BackArrow = () => {
    AsyncStorage.multiSet([["user_Back", "false"]]);
    this.props.navigation.push("Walkthrough");
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

    this.setState({ selectedLots: tmp });
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={
        this.state.selectedLots.includes(item.id)
          ? [styles.txtBg, styles.selectedButton]
          : [styles.txtBg, { backgroundColor: "transparent" }]
      }
      onPress={() => this.onSelected(item.id)}
    >
      <Text
        style={
          this.state.selectedLots.includes(item.id)
            ? [styles.musicname, { color: "#131e7e" }]
            : [styles.musicname, { color: "#fff" }]
        }
      >
        {" "}
        {item.musicname}
      </Text>
    </TouchableOpacity>
  );

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

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
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.75 }}
        end={{ x: 0.75, y: 0.0 }}
        locations={[0.0, 1.0]}
        colors={["#ffffff", "#000000"]}
        style={styles.gradientStyle}
      >
        <View>
          <View>
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => this.BackArrow()}
            >
              <Icons
                name="arrow-back"
                size={25}
                color="white"
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>

            <View style={styles.header}>
              <Text style={styles.select}>Select your interest areas</Text>
              <Text style={styles.choose}>
                Choose favourites
              </Text>
            </View>
          </View>

          <FlatList
            contentContainerStyle={styles.listContent}
            data={appData}
            keyExtractor={appData => appData.id}
            renderItem={this._renderItem}
          />

          <View style={styles.nextview}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("FoodLogin")}
            >
              <Text style={styles.next}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
