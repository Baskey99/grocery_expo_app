import { useEffect } from "react";
import { Image, Platform, StatusBar, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import CustomText from "../components/CustomText";
import { splashStyles as styles } from "../constants/style/authStyles";
import { resetAndNavigate } from "../utils/NavigationUtils";

export default function SignIn() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate("sign-up");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require("../assets/images/logo_t.png")}
      />
      <Animated.View
        style={styles.animatedContainer}
        entering={FadeInDown.delay(400).duration(800)}
      >
        <Image
          style={styles.treeImage}
          resizeMode="contain"
          source={require("../assets/images/tree.png")}
        />
        <CustomText variant="h1" style={styles.msgText} color="#FFFFFF">
          From Kitchen to doorstep, grocery shopping has never been easier.
        </CustomText>
      </Animated.View>
    </View>
  );
}
