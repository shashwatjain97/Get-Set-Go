import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
const { width, height } = Dimensions.get("window");

import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  screenBg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "black"
  },
  profileNameText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.02
  },
    middleMainView: {
    width: Metrics.WIDTH * 0.85,
    height: Metrics.HEIGHT * 0.55,
    alignSelf: "center",
    paddingTop: 3
  },
    infoText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(16),
    color: "#424242",
    fontFamily: Fonts.type.sfuiDisplayRegular
  },
    gradientStyle: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
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

  logostyle: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.35,
    height: Metrics.WIDTH * 0.35,
    backgroundColor: "transparent",
    resizeMode: "contain"
  },
  backArrow: {
    marginTop: 10,
    width: 30,
    alignItems: "center"
  },
  header: {
    backgroundColor: "transparent",
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 10
      }
    }),
    elevation: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },

  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "transparent"
  },

  right: {
    flex: 0.5
  },
  view2: {
    marginTop: Metrics.HEIGHT * 0.02,
    borderRadius: 5,
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.6,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "transparent"
  },
  itememail: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.08
  },
  inputemail: {
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: Colors.hintblue
  },

  iconitem: {
    color: Colors.hintblue
  },

  buttondialogsignup: {
    backgroundColor: Colors.loginGreen,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.01,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.65,
    height: Metrics.HEIGHT * 0.07,
    justifyContent: "center"
  },
  buttonsignin: {
    alignSelf: "center",
    fontSize: 15,
    fontFamily: Fonts.type.SFUIDisplaySemibold,
    color: "white"
  },

  view3: {
    width: Metrics.WIDTH,
    justifyContent: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.01
  },

  buttontext: {
    alignSelf: "center",
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: "#424242",
    fontSize: Fonts.moderateScale(16)
  },

  signInTxtBg: {
    paddingLeft: Metrics.WIDTH * 0.01
  }
});
export default styles;
