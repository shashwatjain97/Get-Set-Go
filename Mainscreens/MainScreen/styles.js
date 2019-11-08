import { Platform, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },

  mainView: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: Metrics.HEIGHT * 0.4
  },
  logoImg: {
    height: Metrics.HEIGHT * 0.2,
    width: Metrics.WIDTH * 0.7,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: Metrics.HEIGHT * 0.11
  },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   },

  buttonText: {
    fontSize: Fonts.moderateScale(18),
    color: "white",
    textAlign: "center"
  },
  gradientStyle: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  upcomingText: {
    color: "red",
    fontSize: Fonts.moderateScale(14),
    textAlign: "center"
  },

  btnsec: {
    alignItems: "center",
    alignSelf: "center"
  },

  btnStyle: {
    marginTop: 15,
    width: width * 0.88,
    backgroundColor: "grey",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10
  },

  header: {
    backgroundColor: "grey",
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        height: 56
      },
      android: {
        height: 66,
        paddingTop: 10
      }
    }),
    elevation: 0
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

  banner: {
    width: Metrics.WIDTH * 0.9,
    height: Metrics.HEIGHT * 0.28,
    borderRadius: 9,

    resizeMode: "contain",
    alignSelf: "center"
  },

  bannerView: {
    width: Metrics.WIDTH * 0.9,
    height: Metrics.HEIGHT * 0.28,
    borderRadius: 9,
    alignSelf: "center"
  },
  successMessage: {
    backgroundColor: "transparent"
  },

  mainModelSec: {
    backgroundColor: "#ffffff",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width: Metrics.WIDTH * 0.9,
    alignSelf: "center"
  }
});

export default styles;
