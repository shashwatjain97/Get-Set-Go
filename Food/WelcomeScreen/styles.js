import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#e8e8e8"
  },

  Welcome_mainBg: {
    height: Metrics.HEIGHT*0.28,
    width: Metrics.WIDTH*0.95,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  Hi_bg : {
        marginTop:Metrics.HEIGHT * 0.06,
        marginLeft:Metrics.HEIGHT * 0.023,
        marginEnd:Metrics.HEIGHT * 0.023,
        borderRadius: 5,
    		shadowColor: "#000",
    		shadowOffset: { width: 0, height: 2 },
   		shadowOpacity: 0.3,
   	        shadowRadius: 5,
                elevation: 5
              },

  ProfileImg: {
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.HEIGHT * 0.08,
    borderRadius: Metrics.HEIGHT * 0.04,
    borderWidth: 2,
    borderColor: "#fff"
  },
  header: {
    height: Metrics.HEIGHT * 0.13,
    justifyContent: "center",
    alignItems: "center"
  },

  profileNameText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(16),
    color: "#2e2e2e",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ProfileDesText: {
    marginLeft: Metrics.HEIGHT * 0.03,
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(18),
    marginTop: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.7
  },

  SearchBg: {
    backgroundColor: "#fff",
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
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.05
  },
   mainsubview: {
    flex: 1,
    marginTop: Metrics.HEIGHT * 0.03,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleviewbg: {
    marginTop: 5,
    paddingHorizontal: 10,

    flexDirection: "row",
    justifyContent: "space-between"
  },
   titletext: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(16),
    textAlign: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontWeight: "100"
  },
     moreview: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(16),
    textAlign: "center",
    justifyContent: "center",
    color: "#FF3D00",
    marginRight: 5,
    fontWeight: "100"
  },

  select: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(23),
    color: Colors.snow
  },

  choose: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow
  },

  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Metrics.WIDTH * 0.02,
    marginTop: Metrics.HEIGHT * 0.02
  },

  musicname: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12),
    textAlign: "center",
    backgroundColor: "transparent"
  },

  next: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(14),
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: Metrics.HEIGHT * 0.02
  },

  nextview: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.1
  },

  txtBg: {
    marginBottom: Metrics.HEIGHT * 0.01,
    marginHorizontal: Metrics.WIDTH * 0.01,
    borderRadius: Metrics.HEIGHT * 0.006,
    paddingVertical: Metrics.HEIGHT * 0.02,
    paddingHorizontal: Metrics.WIDTH * 0.03,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center"
  },

  selectedButton: {
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: Metrics.HEIGHT * 0.005
    },
    elevation: Fonts.moderateScale(8)
  },

  gradientStyle: {
    width: Metrics.WIDTH * 0.85,
    height: Metrics.HEIGHT * 0.6,
    marginBottom: Metrics.HEIGHT * 0.01,
    marginHorizontal: Metrics.WIDTH * 0.06,
    borderColor: "#fff",
    borderRadius: Metrics.HEIGHT * 0.008,
    justifyContent: "center"
  },

  arrow: {
    paddingTop: Metrics.HEIGHT * 0.07,
    paddingLeft: Metrics.WIDTH * 0.03
  },

  RestaurantsSearch: {
    width: Metrics.WIDTH * 0.7,
    marginLeft: Metrics.HEIGHT * 0.01
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
   myrecipesbg: {
    height: Metrics.HEIGHT * 0.40,
    paddingHorizontal: 5,
    marginTop: Metrics.HEIGHT * 0.03,
    flexDirection: "row"
  },
  myrecipeslistbg: {
    marginHorizontal: 5,
    height: Metrics.HEIGHT * 0.35,
    backgroundColor: "#FFFFFF",
    width: Metrics.WIDTH * 0.6,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
   ratingStar: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.HEIGHT * 0.01
  },
  myrecipeslistimagesbg: {
    height: Metrics.HEIGHT * 0.18,
    resizeMode: "contain",
    width: Metrics.WIDTH * 0.6,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  descriptiontext: {
    marginTop: 1.5,
    color: "#263238",
    marginLeft: 5,
    paddingHorizontal: 5,
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(15)
  },
  txtBg: {
    marginBottom: Metrics.HEIGHT * 0.01,
    marginHorizontal: Metrics.WIDTH * 0.01,
    borderRadius: Metrics.HEIGHT * 0.006,
    paddingVertical: Metrics.HEIGHT * 0.02,
    paddingHorizontal: Metrics.WIDTH * 0.03,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center"
  },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 200
   },
  searchText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(13),
    alignSelf: "center",
    alignItems: "center"
  }
});

export default styles;
