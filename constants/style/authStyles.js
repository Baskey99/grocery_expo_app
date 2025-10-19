import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./colors";

const { width, height } = Dimensions.get("window");

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: width * 0.8,
    height: height * 0.4,
    // resizeMode: "contain",
    marginTop: 80,
  },
  treeImage: {
    width: width * 0.4,
    height: height * 0.14,
    // resizeMode: "contain",
  },
  msgText: {
    textAlign: "center",
  },
  animatedContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  cover: {
    width: "100%",
    height: height * 0.4,
    // resizeMode: "cover",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: "center",
    marginHorizontal: 20,
  },
  breakerContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    overflow: "hidden",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    position: "absolute",
    backgroundColor: Colors.border,
    zIndex: -1,
  },
  breakerText: {
    opacity: 0.8,
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 45,
    marginVertical: 5,
    borderRadius: 8,
  },
  footer: {
    position: "absolute",
    bottom: 26,
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footerTextContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 5,
  },
  footerText: {
    // textDecorationLine: "underline",
    fontSize: 10,
  },
});
