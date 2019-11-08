import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  HeaderBg: {
    backgroundColor: "#5d0ffa",
    borderBottomWidth: 1
  },

  left: {
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
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18)
  },
  titleText: {
    color: "#C2C4CA",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    paddingHorizontal: 15,
    marginTop: Metrics.HEIGHT * 0.06,
    marginBottom: 10
  },
  infoText: {
  fontSize: Fonts.moderateScale(16),
  color: "#424242",
  fontFamily: Fonts.type.sfuiDisplayRegular
},
firstDivider: {
height: 1,
backgroundColor: "#8C8C8C",
...Platform.select({
  ios: { marginTop: 15, marginBottom: 30 },
  android: {
    marginTop: 0,
    marginBottom: 20
  }
})
},
ProfileDesText: {
  marginLeft: Metrics.HEIGHT * 0.03,
  fontFamily: Fonts.type.sfuiDisplaySemibold,
  color: "#454545",
  fontSize: Fonts.moderateScale(18),
  marginTop: Metrics.HEIGHT * 0.03,

},
searchText: {
  fontFamily: Fonts.type.sfuiDisplaySemibold,
  color: "#FFFFFF",
  fontSize: Fonts.moderateScale(13),
  alignSelf: "center",
  alignItems: "center"
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
  marginTop: Metrics.HEIGHT * 0.04,

},
SearchMainBg1: {
  backgroundColor: "#ebce15",
  ...Platform.select({
    ios: {
      height: Metrics.HEIGHT * 0.06
    },
    android: {
      height: Metrics.HEIGHT * 0.08
    }
  }),
  width: Metrics.WIDTH * 0.5,
  borderRadius: 5,
  marginTop: Metrics.HEIGHT * 0.04,

},

  addNewView: {
    marginTop: 20,
    backgroundColor: Colors.snow,
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },

  addNewCard: {
    color: "#9B9B9B",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginLeft: 20,
    width: Metrics.WIDTH * 0.7
  },

  titleText: {
    color: "#000000",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    paddingHorizontal: 15,
    marginTop: Metrics.HEIGHT * 0.06,
    marginBottom: 10
  },
  titleText1: {
    color: "#545454",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    paddingHorizontal: 15,
    marginTop: Metrics.HEIGHT * 0.06,
    marginBottom: 10
  },
 SearchMainBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.05
      },
      android: {
        height: Metrics.HEIGHT * 0.07
      }
    }),
    width: Metrics.WIDTH * 0.65,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.04,
    justifyContent: "center"
  },
  SearchMainBg1: {
    backgroundColor: "#f0a122",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.04
      },
      android: {
        height: Metrics.HEIGHT * 0.06
      }
    }),
    width: Metrics.WIDTH * 0.45,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.04,
    justifyContent: "center"
  },
  searchText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(13),
    alignSelf: "center",
    alignItems: "center"
  },


  nameText: {
    color: "#4A4A4A",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    width: Metrics.WIDTH * 0.85
  }
});

export default styles;
