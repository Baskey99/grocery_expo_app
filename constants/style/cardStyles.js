import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./colors";

const { width, height } = Dimensions.get("window");

export const cardStyles = StyleSheet.create({
  recommendedContainer: {
    marginTop: 25,
    paddingLeft: 10,
  },
  mainPadding: {
    padding: 10,
  },
  regularFoodContainer: {
    marginVertical: 10,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  itemContainer: {
    marginRight: 15,
    width: width * 0.3,
    overflow: "hidden",
    marginBottom: 15,
  },
  regularFoodImage: {
    width: width * 0.28,
    height: width * 0.28,
  },
  bookmarkIcon: {
    position: "absolute",
    zIndex: 2,
    top: 5,
    right: 5,
  },
  bookmarkIconImage: {
    width: 15,
    height: 18,
  },
  itemImage: {
    width: "100%",
    height: 100,
  },
  discountContainer: {
    position: "absolute",
    bottom: 8,
    left: 8,
    zIndex: 2,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: {
    width: 14,
    height: 14,
  },
  itemInfo: {
    marginTop: 8,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  centerText: {
    textAlign: "center",
    opacity: 0.4,
    marginVertical: 10,
  },
});
