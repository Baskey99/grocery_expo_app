import { Platform, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Graphics from "../../components/home/Graphics";
import { homeStyles as styles } from "../../constants/style/homeStyles";
import { useSharedState } from "../../context/SharedStateContext";
import HeaderSection from "../../components/home/HeaderSection";

const DeliveryScreen = () => {
  const insets = useSafeAreaInsets();
  const { scrollYGlobal } = useSharedState();

  // Animate background color opacity based on scroll
  const backgroundColorChanges = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [0, 50], [0, 1]);
    return {
      backgroundColor: `rgba(255,255,255,${opacity})`,
    };
  });

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 50],
      [0, -50],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY }],
    };
  });

  const moveUpStyleNotExrapolate = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGlobal.value, [0, 50], [0, -50]);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ height: Platform.OS === "android" ? insets.top : 0 }} />
      <Animated.View style={moveUpStyle}>
        <Animated.View style={moveUpStyleNotExrapolate}>
          <Graphics />
        </Animated.View>
        <Animated.View
          style={[backgroundColorChanges, styles.topHeader]}
        >
          <HeaderSection />
        </Animated.View>
      </Animated.View>
      <Animated.View style={moveUpStyle}></Animated.View>
    </View>
  );
};

export default DeliveryScreen;
