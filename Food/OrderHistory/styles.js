import { Platform, StyleSheet, Dimensions, I18nManager } from "react-native";
import { Images, Metrics, Fonts, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },

  HeaderBg: {
    backgroundColor: "#0e84eb",
    ...Platform.select({
      ios: {},
      android: {
        height: Metrics.HEIGHT * 0.13
      }
    })
  },

  leftheader: {
    flex: 1
  },

  body: {
    flex: 3
  },

  right: {
    flex: 1
  },

  headertitle: {
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "#ffffff",
    fontWeight: "normal",
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14)
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    }),
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  MainListBg: {
    backgroundColor: "#f5f5f5",
    flex: 1
  },
  searchText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(13),
    alignSelf: "center",
    alignItems: "center"
  },

  mainRenderView: {
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.01,
    backgroundColor: "#fff",
    borderRadius: 3
  },

  FoodImg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.HEIGHT * 0.1
      },
      android: {
        width: Metrics.WIDTH * 0.23,
        height: Metrics.HEIGHT * 0.13
      }
    }),
    borderRadius: 8,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02
  },

  FoodName: {
    color: "#262628",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.7
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.7
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02
  },

  FoodAdd: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14)
  },

  ratingStar: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.HEIGHT * 0.01
  },
   profileNameText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(25),
    color: "#000000",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.02
  },


  reviewText: {
    color: "#d4d6da",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.01
  },

  borderHorizontal: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1
  },

  DateTimeMainView: {
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02
  },
   SearchMainBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.04,
    justifyContent: "center"
  },

  DateTimeText: {
    color: "#262628",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.01
  },
  descriptiontext: {
    marginTop: 1.5,
    color: "#263238",
    marginLeft: 5,
    paddingHorizontal: 5,
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(15)
  },
   activityIndicator: {
      flex: 1,
      alignItems: 'center',
      height: 80
   },

  MoneyText: {
    color: "#f05522",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(17),
    alignSelf: "center"
  },
  myrecipesbg: {

    paddingHorizontal: 5,
    marginTop: Metrics.HEIGHT * 0.03,
    flexDirection: "column"
  },
  myrecipeslistbg: {
    marginHorizontal: 5,
    height: Metrics.HEIGHT * 0.24,
    backgroundColor: "#FFFFFF",
    width: Metrics.WIDTH * 0.6,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  myrecipeslistimagesbg: {
    height: Metrics.HEIGHT * 0.18,
    resizeMode: "contain",
    width: Metrics.WIDTH * 0.6,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
});

export default styles;
