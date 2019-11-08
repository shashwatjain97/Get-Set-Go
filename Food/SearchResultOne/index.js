import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  TextInput,
  ListView,
  Easing,
  Platform
} from "react-native";
import styles from "./styles";

import { Images, Metrics, Fonts, Colors } from "../../../Themes/";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar,
} from "../../../Components/react-native-scrollable-tab-view";
import Rating from "react-native-rating";

const FoodDetailsOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-egsalad.jpg";

const FoodDetailsTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-fc.jpg";

const FoodDetailsThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-kai.jpg";

const FoodDetailsFour =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-perrys.jpg";

const FoodDetailsFive =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-tejas.jpg";

const FoodDetailsSix =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg";

const GridFoodDetailsOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-egsalad.jpg";

const GridFoodDetailsTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-QuailDish.jpg";

const GridFoodDetailsThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cocktail.jpg";

const GridFoodDetailsFour =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CremeBrulee.jpg";

const GridFoodDetailsFive =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-FiletCarpetBagger.jpg";

const GridFoodDetailsSix =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-LambBurger.jpg";

const TopReviewArrayOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Oysters.jpg";
const TopReviewArrayTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-burger.jpg";

const TopReviewArrayThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CarpetBaggerAppetizer.jpg";

const PopularArrayOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CremeBrulee.jpg";
const PopularArrayTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-cafeannie.jpg";

const PopularArrayThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cocktail.jpg";

const RecommendedArrayOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-CremeBrulee.jpg";

const RecommendedArrayTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/cake_dessert_syrup_baking.jpg";

var FoodDetails = [
  {
    id: 1,
    Foodimg: { uri: FoodDetailsOne },
    is_Favorite: true,
    rating: 4,
    FoodName: "egsalad"
  },
  {
    id: 2,
    Foodimg: { uri: FoodDetailsTwo },
    is_Favorite: false,
    rating: 4,
    FoodName: "Cocobolo Poolside Bar + Grill"
  },
  {
    id: 3,
    Foodimg: { uri: FoodDetailsThree },
    is_Favorite: false,
    rating: 4,
    FoodName: "Steak Salad"
  },
  {
    id: 4,
    Foodimg: { uri: FoodDetailsFour },
    is_Favorite: false,
    rating: 4,
    FoodName: "perrys"
  },
  {
    id: 5,
    Foodimg: { uri: FoodDetailsFive },
    is_Favorite: true,
    rating: 4,
    FoodName: "Stuffed Trout"
  },
  {
    id: 6,
    Foodimg: { uri: FoodDetailsSix },
    is_Favorite: false,
    rating: 4,
    FoodName: "Carpet Bagger Appetizer"
  }
];

var GridFoodDetails = [
  {
    id: 1,
    Foodimg: { uri: GridFoodDetailsOne },
    is_Favorite: true,
    rating: 4,
    FoodName: "Stuffed Trout"
  },
  {
    id: 2,
    Foodimg: { uri: GridFoodDetailsTwo },
    is_Favorite: false,
    rating: 4,
    FoodName: "Quail Dish"
  },
  {
    id: 3,
    Foodimg: { uri: GridFoodDetailsThree },
    is_Favorite: false,
    rating: 4,
    FoodName: "Cocktail"
  },
  {
    id: 4,
    Foodimg: { uri: GridFoodDetailsFour },
    is_Favorite: false,
    rating: 4,
    FoodName: "Creme Brulee"
  },
  {
    id: 5,
    Foodimg: { uri: GridFoodDetailsFive },
    is_Favorite: true,
    rating: 4,
    FoodName: "Filet Carpet Bagger"
  },
  {
    id: 6,
    Foodimg: { uri: GridFoodDetailsSix },
    is_Favorite: false,
    rating: 4,
    FoodName: "Lamb Burger"
  }
];

var TopReviewArray = [
  {
    id: 1,
    Foodimg: { uri: TopReviewArrayOne },
    is_Favorite: true,
    rating: 4,
    FoodName: "Oysters"
  },
  {
    id: 2,
    Foodimg: { uri: TopReviewArrayTwo },

    is_Favorite: false,
    rating: 4,
    FoodName: "burger"
  },
  {
    id: 3,
    Foodimg: { uri: TopReviewArrayThree },

    is_Favorite: false,
    rating: 4,
    FoodName: "FiletCarpetBagger"
  }
];

var PopularArray = [
  {
    id: 1,
    Foodimg: { uri: PopularArrayOne },

    is_Favorite: true,
    rating: 4,
    FoodName: "Creme Brulee"
  },
  {
    id: 2,
    Foodimg: { uri: PopularArrayTwo },
    is_Favorite: false,
    rating: 4,
    FoodName: "cafeannie"
  },
  {
    id: 3,
    Foodimg: { uri: PopularArrayThree },
    is_Favorite: false,
    rating: 4,
    FoodName: "Cocktail"
  },
  {
    id: 4,
    Foodimg: { uri: TopReviewArrayThree },
    is_Favorite: false,
    rating: 4,
    FoodName: "Carpet Bagger Appetizer"
  }
];

var RecommendedArray = [
  {
    id: 1,
    Foodimg: { uri: RecommendedArrayOne },
    is_Favorite: false,
    rating: 4,
    FoodName: "Filet Carpet Bagger"
  },
  {
    id: 2,
    Foodimg: { uri: RecommendedArrayTwo },
    is_Favorite: false,
    rating: 4,
    FoodName: "cake_dessert"
  }
];

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

export default class SearchResultOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      
      dataSource: ds.cloneWithRows(FoodDetails),
      dataSourceTwo: ds.cloneWithRows(GridFoodDetails),
      dataSourceTopReview: ds.cloneWithRows(TopReviewArray),
      dataSourcePopular: ds.cloneWithRows(PopularArray),
      dataSourceRecommended: ds.cloneWithRows(RecommendedArray),
      review: "",
      MenuList: false,
      GridList: true
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("TabView");
    return true;
  };

  /* Grid FavoritPost START */
  favoritePostClick1Grid(FoodId) {
    for (var i = 0; i < GridFoodDetails.length; i++) {
      if (GridFoodDetails[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < GridFoodDetails.length; i++) {
          if (GridFoodDetails[i].id == FoodId) {
            newArray1.push({
              id: GridFoodDetails[i].id,
              Foodimg: GridFoodDetails[i].Foodimg,
              FoodName: GridFoodDetails[i].FoodName,
              rating: GridFoodDetails[i].rating,
              is_Favorite: !GridFoodDetails[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: GridFoodDetails[i].id,
              Foodimg: GridFoodDetails[i].Foodimg,
              FoodName: GridFoodDetails[i].FoodName,
              rating: GridFoodDetails[i].rating,
              is_Favorite: GridFoodDetails[i].is_Favorite
            });
          }
        }

        GridFoodDetails = newArray1;
        this.setState({ dataSourceTwo: ds.cloneWithRows(GridFoodDetails) });
      }
    }
  }
  /* Grid FavoritPost END */

  /* List FavoritPost START */
  favoritePostClick1(FoodId) {
    for (var i = 0; i < FoodDetails.length; i++) {
      if (FoodDetails[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < FoodDetails.length; i++) {
          if (FoodDetails[i].id == FoodId) {
            newArray1.push({
              id: FoodDetails[i].id,
              Foodimg: FoodDetails[i].Foodimg,
              FoodName: FoodDetails[i].FoodName,
              rating: FoodDetails[i].rating,
              is_Favorite: !FoodDetails[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: FoodDetails[i].id,
              Foodimg: FoodDetails[i].Foodimg,
              FoodName: FoodDetails[i].FoodName,
              rating: FoodDetails[i].rating,
              is_Favorite: FoodDetails[i].is_Favorite
            });
          }
        }

        FoodDetails = newArray1;
        this.setState({ dataSource: ds.cloneWithRows(FoodDetails) });
      }
    }
  }
  /* List FavoritPost END */

  favoritePostClick1Popular(FoodId) {
    for (var i = 0; i < PopularArray.length; i++) {
      if (PopularArray[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < PopularArray.length; i++) {
          if (PopularArray[i].id == FoodId) {
            newArray1.push({
              id: PopularArray[i].id,
              Foodimg: PopularArray[i].Foodimg,
              FoodName: PopularArray[i].FoodName,
              rating: PopularArray[i].rating,
              is_Favorite: !PopularArray[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: PopularArray[i].id,
              Foodimg: PopularArray[i].Foodimg,
              FoodName: PopularArray[i].FoodName,
              rating: PopularArray[i].rating,
              is_Favorite: PopularArray[i].is_Favorite
            });
          }
        }

        PopularArray = newArray1;
        this.setState({ dataSourcePopular: ds.cloneWithRows(PopularArray) });
      }
    }
  }
  favoritePostClick1GridPopular(FoodId) {
    for (var i = 0; i < PopularArray.length; i++) {
      if (PopularArray[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < PopularArray.length; i++) {
          if (PopularArray[i].id == FoodId) {
            newArray1.push({
              id: PopularArray[i].id,
              Foodimg: PopularArray[i].Foodimg,
              FoodName: PopularArray[i].FoodName,
              rating: PopularArray[i].rating,
              is_Favorite: !PopularArray[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: PopularArray[i].id,
              Foodimg: PopularArray[i].Foodimg,
              FoodName: PopularArray[i].FoodName,
              rating: PopularArray[i].rating,
              is_Favorite: PopularArray[i].is_Favorite
            });
          }
        }

        PopularArray = newArray1;
        this.setState({ dataSourcePopular: ds.cloneWithRows(PopularArray) });
      }
    }
  }

  favoritePostClick1GridTopreview(FoodId) {
    for (var i = 0; i < TopReviewArray.length; i++) {
      if (TopReviewArray[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < TopReviewArray.length; i++) {
          if (TopReviewArray[i].id == FoodId) {
            newArray1.push({
              id: TopReviewArray[i].id,
              Foodimg: TopReviewArray[i].Foodimg,
              FoodName: TopReviewArray[i].FoodName,
              rating: TopReviewArray[i].rating,
              is_Favorite: !TopReviewArray[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: TopReviewArray[i].id,
              Foodimg: TopReviewArray[i].Foodimg,
              FoodName: TopReviewArray[i].FoodName,
              rating: TopReviewArray[i].rating,
              is_Favorite: TopReviewArray[i].is_Favorite
            });
          }
        }

        TopReviewArray = newArray1;
        this.setState({
          dataSourceTopReview: ds.cloneWithRows(TopReviewArray)
        });
      }
    }
  }

  favoritePostClick1Topreview(FoodId) {
    for (var i = 0; i < TopReviewArray.length; i++) {
      if (TopReviewArray[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < TopReviewArray.length; i++) {
          if (TopReviewArray[i].id == FoodId) {
            newArray1.push({
              id: TopReviewArray[i].id,
              Foodimg: TopReviewArray[i].Foodimg,
              FoodName: TopReviewArray[i].FoodName,
              rating: TopReviewArray[i].rating,
              is_Favorite: !TopReviewArray[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: TopReviewArray[i].id,
              Foodimg: TopReviewArray[i].Foodimg,
              FoodName: TopReviewArray[i].FoodName,
              rating: TopReviewArray[i].rating,
              is_Favorite: TopReviewArray[i].is_Favorite
            });
          }
        }

        TopReviewArray = newArray1;
        this.setState({
          dataSourceTopReview: ds.cloneWithRows(TopReviewArray)
        });
      }
    }
  }

  favoritePostClick1GridRecommended(FoodId) {
    for (var i = 0; i < RecommendedArray.length; i++) {
      if (RecommendedArray[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < RecommendedArray.length; i++) {
          if (RecommendedArray[i].id == FoodId) {
            newArray1.push({
              id: RecommendedArray[i].id,
              Foodimg: RecommendedArray[i].Foodimg,
              FoodName: RecommendedArray[i].FoodName,
              rating: RecommendedArray[i].rating,
              is_Favorite: !RecommendedArray[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: RecommendedArray[i].id,
              Foodimg: RecommendedArray[i].Foodimg,
              FoodName: RecommendedArray[i].FoodName,
              rating: RecommendedArray[i].rating,
              is_Favorite: RecommendedArray[i].is_Favorite
            });
          }
        }

        RecommendedArray = newArray1;
        this.setState({
          dataSourceRecommended: ds.cloneWithRows(RecommendedArray)
        });
      }
    }
  }

  favoritePostClick1Recommended(FoodId) {
    for (var i = 0; i < RecommendedArray.length; i++) {
      if (RecommendedArray[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < RecommendedArray.length; i++) {
          if (RecommendedArray[i].id == FoodId) {
            newArray1.push({
              id: RecommendedArray[i].id,
              Foodimg: RecommendedArray[i].Foodimg,
              FoodName: RecommendedArray[i].FoodName,
              rating: RecommendedArray[i].rating,
              is_Favorite: !RecommendedArray[i].is_Favorite
            });
          } else {
            newArray1.push({
              id: RecommendedArray[i].id,
              Foodimg: RecommendedArray[i].Foodimg,
              FoodName: RecommendedArray[i].FoodName,
              rating: RecommendedArray[i].rating,
              is_Favorite: RecommendedArray[i].is_Favorite
            });
          }
        }

        RecommendedArray = newArray1;
        this.setState({
          dataSourceRecommended: ds.cloneWithRows(RecommendedArray)
        });
      }
    }
  }

  /* List renderRow START */
  _renderRow = rowData => {
    var that = this;

    return (
      <View style={styles.mainListRenderRow}>
        <View style={styles.Foodimg}>
          <Image source={rowData.Foodimg} style={styles.Foodimg} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: Metrics.HEIGHT * 0.01,
              marginBottom: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStar}
              editable={false}
            />
            <Text style={styles.reviewText}>238 reviews</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  /* List renderRow END */

  /* Grid renderRow START */

  _renderRowGrid = rowData => {
    var that = this;

    return (
      <View style={styles.listMainviewBg}>
        <View style={styles.FoodimgGrid}>
          <Image source={rowData.Foodimg} style={styles.FoodimgGrid} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Grid(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Grid(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginBottom: Metrics.HEIGHT * 0.01,
              marginLeft: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStarGrid}
              editable={false}
            />
            {/*<Text style={[styles.reviewText, { width: Metrics.HEIGHT * 0.09 }]}>
              238 reviews
            </Text>*/}
          </View>
          <Text style={styles.reviewText}>238 reviews</Text>
        </TouchableOpacity>
      </View>
    );
  };

  /* Grid renderRow END */

  _renderPopularGrid = rowData => {
    var that = this;

    return (
      <View style={styles.listMainviewBg}>
        <View style={styles.FoodimgGrid}>
          <Image source={rowData.Foodimg} style={styles.FoodimgGrid} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridPopular(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridPopular(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginBottom: Metrics.HEIGHT * 0.01,
              marginLeft: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStarGrid}
              editable={false}
            />
          </View>
          <Text style={styles.reviewText}>238 reviews</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderPopular = rowData => {
    var that = this;

    return (
      <View style={styles.mainListRenderRow}>
        <View style={styles.Foodimg}>
          <Image source={rowData.Foodimg} style={styles.Foodimg} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Popular(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Popular(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: Metrics.HEIGHT * 0.01,
              marginBottom: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStar}
              editable={false}
            />
            <Text style={styles.reviewText}>238 reviews</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _renderRowGridTopreview = rowData => {
    var that = this;

    return (
      <View style={styles.listMainviewBg}>
        <View style={styles.FoodimgGrid}>
          <Image source={rowData.Foodimg} style={styles.FoodimgGrid} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridTopreview(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridTopreview(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginBottom: Metrics.HEIGHT * 0.01,
              marginLeft: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStarGrid}
              editable={false}
            />
          </View>
          <Text style={styles.reviewText}>238 reviews</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderRowTopreview = rowData => {
    var that = this;

    return (
      <View style={styles.mainListRenderRow}>
        <View style={styles.Foodimg}>
          <Image source={rowData.Foodimg} style={styles.Foodimg} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Topreview(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Topreview(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: Metrics.HEIGHT * 0.01,
              marginBottom: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStar}
              editable={false}
            />
            <Text style={styles.reviewText}>238 reviews</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _renderRowGridRecommended = rowData => {
    var that = this;

    return (
      <View style={styles.listMainviewBg}>
        <View style={styles.FoodimgGrid}>
          <Image source={rowData.Foodimg} style={styles.FoodimgGrid} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridRecommended(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1GridRecommended(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginBottom: Metrics.HEIGHT * 0.01,
              marginLeft: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStarGrid}
              editable={false}
            />
          </View>
          <Text style={styles.reviewText}>238 reviews</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderRowRecommended = rowData => {
    var that = this;

    return (
      <View style={styles.mainListRenderRow}>
        <View style={styles.Foodimg}>
          <Image source={rowData.Foodimg} style={styles.Foodimg} />
          {rowData.is_Favorite == true ? (
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Recommended(rowData.id);
              }}
              style={styles.hearticon}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#f05522"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.hearticon}
              underlayColor="transparent"
              onPress={() => {
                this.favoritePostClick1Recommended(rowData.id);
              }}
            >
              <AntDesign
                name="heart"
                size={25}
                color="#ffffff"
                style={{ alignSelf: "flex-end", top: 5, right: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetails")}
        >
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: Metrics.HEIGHT * 0.01,
              marginBottom: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
              onChange={rating => console.log(rating)}
              selectedStar={Images.seletedstar}
              unselectedStar={Images.starEmpty1}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 350
              }}
              stagger={80}
              maxScale={2.4}
              starStyle={styles.ratingStar}
              editable={false}
            />
            <Text style={styles.reviewText}>238 reviews</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("black", true);
      StatusBar.setTranslucent(true);
    }

    const { navigation } = this.props;

    return (
      <View style={styles.mainview}>
        <View style={styles.SearchTabMain}>
          <View style={styles.searchMainView}>
            <View style={styles.SearchBg}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TabView")}
                style={{ alignSelf: "center" }}
              >
                <MaterialIcons
                  name="keyboard-backspace"
                  size={30}
                  color="#262628"
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                />
              </TouchableOpacity>
              <View
                style={[
                  styles.borderVertical,
                  { marginLeft: Metrics.HEIGHT * 0.01 }
                ]}
              />
              <AntDesign
                name="search1"
                size={20}
                color="#c2c4ca"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.01
                }}
              />
              <TextInput
                style={styles.RestaurantsSearch}
                maxLength={40}
                placeholder="Restaurants"
                placeholderTextColor="#262628"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
              />
              <View style={styles.borderVertical} />
              <Entypo
                name="location-pin"
                size={30}
                color="#f05522"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.01
                }}
              />
              <Text style={styles.locationText}>Italia</Text>
            </View>
          </View>
        </View>
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={"transparent"}
          tabBarActiveTextColor={"white"}
          tabBarInactiveTextColor={"#f8aa91"}
          tabBarTextStyle={styles.tabText}
          style={{
            backgroundColor: "transparent"
          }}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <View tabLabel="Nearby">
            <View
              style={{
                backgroundColor: "#f5f5f5",
                height: Metrics.HEIGHT * 0.9
              }}
            >
              <View style={styles.FilterMainBg}>
                <FontAwesome
                  name="filter"
                  size={20}
                  color="#c2c4ca"
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.02
                  }}
                />
                <Text style={styles.filterText}>Filter</Text>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      GridList: true,
                      MenuList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.GridList ? (
                    <Entypo name="grid" size={25} color="#262628" />
                  ) : (
                    <Entypo name="grid" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      MenuList: true,
                      GridList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.MenuList ? (
                    <Entypo name="list" size={25} color="#262628" />
                  ) : (
                    <Entypo name="list" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>
              </View>
              {this.state.GridList ? (
                <View>
                  <View style={styles.mainListContentGrid}>
                    <ListView
                      contentContainerStyle={styles.listContentGrid}
                      dataSource={this.state.dataSourceTwo}
                      renderRow={this._renderRowGrid.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}

              {this.state.MenuList ? (
                <View>
                  <View style={styles.mainListContent}>
                    <ListView
                      contentContainerStyle={styles.listContent}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          </View>

          <View tabLabel="Popular">
            <View
              style={{
                backgroundColor: "#f5f5f5",
                height: Metrics.HEIGHT * 0.9
              }}
            >
              <View style={styles.FilterMainBg}>
                <FontAwesome
                  name="filter"
                  size={20}
                  color="#c2c4ca"
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.02
                  }}
                />
                <Text style={styles.filterText}>Filter</Text>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      GridList: true,
                      MenuList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.GridList ? (
                    <Entypo name="grid" size={25} color="#262628" />
                  ) : (
                    <Entypo name="grid" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      MenuList: true,
                      GridList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.MenuList ? (
                    <Entypo name="list" size={25} color="#262628" />
                  ) : (
                    <Entypo name="list" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>
              </View>
              {this.state.GridList ? (
                <View>
                  <View style={styles.mainListContentGrid}>
                    <ListView
                      contentContainerStyle={styles.listContentGrid}
                      dataSource={this.state.dataSourcePopular}
                      renderRow={this._renderPopularGrid.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}

              {this.state.MenuList ? (
                <View>
                  <View style={styles.mainListContent}>
                    <ListView
                      contentContainerStyle={styles.listContent}
                      dataSource={this.state.dataSourcePopular}
                      renderRow={this._renderPopular.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          </View>

          <View tabLabel="Top review">
            <View
              style={{
                backgroundColor: "#f5f5f5",
                height: Metrics.HEIGHT * 0.9
              }}
            >
              <View style={styles.FilterMainBg}>
                <FontAwesome
                  name="filter"
                  size={20}
                  color="#c2c4ca"
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.02
                  }}
                />
                <Text style={styles.filterText}>Filter</Text>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      GridList: true,
                      MenuList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.GridList ? (
                    <Entypo name="grid" size={25} color="#262628" />
                  ) : (
                    <Entypo name="grid" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      MenuList: true,
                      GridList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.MenuList ? (
                    <Entypo name="list" size={25} color="#262628" />
                  ) : (
                    <Entypo name="list" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>
              </View>
              {this.state.GridList ? (
                <View>
                  <View style={styles.mainListContentGrid}>
                    <ListView
                      contentContainerStyle={styles.listContentGrid}
                      dataSource={this.state.dataSourceTopReview}
                      renderRow={this._renderRowGridTopreview.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}

              {this.state.MenuList ? (
                <View>
                  <View style={styles.mainListContent}>
                    <ListView
                      contentContainerStyle={styles.listContent}
                      dataSource={this.state.dataSourceTopReview}
                      renderRow={this._renderRowTopreview.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          </View>

          <View tabLabel="Recommended">
            <View
              style={{
                backgroundColor: "#f5f5f5",
                height: Metrics.HEIGHT * 0.9
              }}
            >
              <View style={styles.FilterMainBg}>
                <FontAwesome
                  name="filter"
                  size={20}
                  color="#c2c4ca"
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.02
                  }}
                />
                <Text style={styles.filterText}>Filter</Text>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      GridList: true,
                      MenuList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.GridList ? (
                    <Entypo name="grid" size={25} color="#262628" />
                  ) : (
                    <Entypo name="grid" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      MenuList: true,
                      GridList: false
                    })
                  }
                  style={{
                    alignSelf: "center",
                    marginLeft: Metrics.HEIGHT * 0.01
                  }}
                >
                  {this.state.MenuList ? (
                    <Entypo name="list" size={25} color="#262628" />
                  ) : (
                    <Entypo name="list" size={25} color="#c2c4ca" />
                  )}
                </TouchableOpacity>
              </View>
              {this.state.GridList ? (
                <View>
                  <View style={styles.mainListContentGrid}>
                    <ListView
                      contentContainerStyle={styles.listContentGrid}
                      dataSource={this.state.dataSourceRecommended}
                      renderRow={this._renderRowGridRecommended.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}

              {this.state.MenuList ? (
                <View>
                  <View style={styles.mainListContent}>
                    <ListView
                      contentContainerStyle={styles.listContent}
                      dataSource={this.state.dataSourceRecommended}
                      renderRow={this._renderRowRecommended.bind(this)}
                      enableEmptySections
                      pageSize={4}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}
