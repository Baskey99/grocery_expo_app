import { TouchableOpacity, View } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { SafeAreaView } from "react-native-web";
import Icon from "../../assets/icons";
import { Colors } from "../../constants/style/colors";
import { homeStyles as styles } from "../../constants/style/homeStyles";
import { useSharedState } from "../../context/SharedStateContext";

export default function SearchBar() {
  const { scrollYGlobal } = useSharedState();

  const textColorAnimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGlobal.value, [0, 80], [255, 0]);
    return {
      color: `rgb(${textColor},${textColor},${textColor})`,
    };
  });
  return (
    <>
        <SafeAreaView edges={["top"]} />
        <View style={[styles.flexRowBetween, styles.padding]}>
            <TouchableOpacity style={styles.searchInputContainer}
            activeOpacity={0.8} >
                <Icon
                    name="search"
                    color={Colors.primary}
                    size={10}
                    strokeWidth={1.8}
                    style={{ marginLeft: 2, marginTop: 4, marginBottom: 4 }}
                />
                <Icon
                    name="mic"
                    color={Colors.primary}
                    size={10}
                    strokeWidth={1.8}
                    style={{ marginLeft: 2, marginTop: 4, marginBottom: 4 }}
                />
            </TouchableOpacity>
            {/* <Pressable style={styles.vegMode} onPress={() => console.log("veg mode")}>
                <Animated.Text style={[textColorAnimation, styles.animatedText]}>
                    Veg
                </Animated.Text>
                <Animated.Text style={[textColorAnimation, styles.animatedSubText]}>
                    Mod
                </Animated.Text>
                <Image source={require("../../assets/iconImage/switch_on.png")}  style={styles.switch} />

            </Pressable> */}
        </View>
    </>
  );
}
