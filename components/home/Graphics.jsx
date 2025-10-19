import Lottie from "lottie-react";
import { Text, View } from "react-native";
import { homeStyles as styles } from "../../constants/style/homeStyles";

export default function Graphics() {
  return (
    <View style={styles.lottieContainer}>
      <Lottie
        animationData={require("../../assets/animations/event.json")}
        loop
        autoplay
        style={styles.lottie}
        
      />
      <Text>Graphics</Text>
    </View>
  );
}
