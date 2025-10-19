import { TouchableOpacity, View } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets/icons";
import { Colors } from "../../constants/style/colors";
import { homeStyles as styles } from "../../constants/style/homeStyles";
import { useSharedState } from "../../context/SharedStateContext";
import CustomText from "../CustomText";

export default function LocationSection() {
  const { scrollYGlobal } = useSharedState();
  const textColor = "#fff";

  const opacityFadingStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [0, 80], [0, 1]);
    console.log("opacity---", opacity);
    return { opacity };
  });

  return (
    <Animated.View style={''}>
      <SafeAreaView edges={["top"]} />
      <View style={styles.flexRowBetween}>
        <View style={styles.flexRowGap}>
          <Icon
            name="location"
            color={textColor}
            size={32}
            strokeWidth={1.8}
            style={{ marginRight: 8 }}
          />

          <View>
            <TouchableOpacity style={styles.flexRow}>
              <CustomText variant="h5" color={textColor}>
                Erangel, Pochinki
              </CustomText>
              <Icon
                name="arrowDown"
                color={textColor}
                size={18}
                strokeWidth={1.8}
                style={{ marginLeft: 4, marginTop: 4 }}
              />
            </TouchableOpacity>

            <CustomText color={textColor}>Chennai, Tamil Nadu</CustomText>
          </View>
        </View>

        <View style={styles.flexRowGap}>
          <TouchableOpacity style={styles.profileAvatar}>
            {/* <Image source={require("../../assets/iconImage/golden_circle.png")} style={styles.goldenCircle} /> */}
            {/* <Image source={require("../../assets/iconImage/facebook.png")} resizeMode="contain" style={styles.profileImage} /> */}
            <Icon
              name="user"
              color={Colors.tertiary}
              size={26}
              strokeWidth={1.8}
              style={{ marginLeft: 2, marginTop: 4, marginBottom: 4 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}
