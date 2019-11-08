import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.snow
  },

  imgBg: {
    height: Metrics.HEIGHT * 0.5,
    width: Metrics.WIDTH,

  },
	fullScreen: {
	 position: 'absolute',
	 top: 0,
	 left: 0,
	 bottom: 0,
	 right: 0,
 },
   btnBg: {
    width: Metrics.WIDTH * 0.65,
    height: Metrics.HEIGHT * 0.05,
    backgroundColor: "#F05522",
    flexDirection: "row",
    paddingVertical: 12,
    borderColor: '#fff',
    marginLeft:30,
    marginRight:30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(15),
    color: "#FFFFFF"
  },


  shadowView: {
    height: Metrics.HEIGHT * 0.5,
    width: Metrics.WIDTH,
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },

  HeaderBg: {
    backgroundColor: "transparent",
    borderBottomWidth: 1
  },

  left: {
    flex: 1,
    marginLeft: 5
  },

  body: {
    flex: 2
  },

  right: {
    flex: 2,
    marginRight: 5,
    flexDirection: "row"
  },

  itemTitleName: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(29),
    paddingHorizontal: 10
  },

  infoMainView: {
    flexDirection: "row",
    marginVertical: Metrics.HEIGHT * 0.025
  },

  caloriesView: {
    width: Metrics.WIDTH * 0.25,
    paddingLeft: 10
  },

  centerView: {
    width: Metrics.WIDTH * 0.25,
    alignItems: "center"
  },

  carbView: {
    width: Metrics.WIDTH * 0.22,
    paddingRight: 10
  },

  verticalDivider: {
    width: 1,
    backgroundColor: "#F1F5F7"
  },

  titleText: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14)
  },

  subText: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(20),
    marginTop: 10
  },

  ingredientTitle: {
    color: "#263238",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(26),
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  youtubeStyle: {
  paddingLeft: 8,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
},


  horizontalDivider: {
    height: 0.5,
    backgroundColor: "#BDBDBD"
  },

  recipeDiscription: {
    color: "#263238",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    paddingHorizontal: 20,
    paddingVertical: 0
  },

  likeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Metrics.HEIGHT * 0.05,
    paddingBottom: Metrics.HEIGHT * 0.03,
    paddingHorizontal: 10
  },

  likeText: {
    color: "#263238",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(18)
  },

  viewAllText: {
    color: "#FF3D00",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(15)
  },

  suggestedBg: {
    height: Metrics.HEIGHT * 0.47,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
    marginTop: Metrics.HEIGHT * 0.03,
    flexDirection: "row"
  },

  suggestedListBg: {
    marginHorizontal: 5,
    height: Metrics.HEIGHT * 0.45,
    backgroundColor: "#FFFFFF",
    width: Metrics.WIDTH * 0.5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },

  itemImg: {
    height: Metrics.HEIGHT * 0.32,
    resizeMode: "cover",
    width: Metrics.WIDTH * 0.5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },

  itemName: {
    marginVertical: 5,
    color: "#263238",
    paddingHorizontal: 5,
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14)
  },

  timeView: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
    paddingHorizontal: 5
  }
});

export default styles;
