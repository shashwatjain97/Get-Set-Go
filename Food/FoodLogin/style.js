import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
   },

  mainImg: {
    flex: 1
  },

  logoImg: {
    height: Metrics.HEIGHT * 0.15,
    width: Metrics.WIDTH * 0.6,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: Metrics.HEIGHT * 0.11
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
    paddingTop: 30
  },

  infoText: {
    alignItems: "center",
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
  secondDivider: {
    height: 1,
    backgroundColor: "#8C8C8C",
    ...Platform.select({
      ios: { marginTop: 15 },
      android: {
        marginTop: 0
      }
    })
  },
 btnBg: {
    width: Metrics.WIDTH * 0.85,
    backgroundColor: "#F05522",
    flexDirection: "row",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  btnText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(15),
    color: "#FFFFFF"
  },
   gradientStyle: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  bottomMainView: {
    alignItems: "center",
    marginVertical: Metrics.HEIGHT * 0.03
  },
  activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   },

  signUpText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(15),
    color: "#424242",
    marginTop: Metrics.HEIGHT * 0.03
  },
  gradientStyle: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },
});

export default styles;
