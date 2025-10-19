import { Image, TouchableOpacity, View } from "react-native";
import { phoneStyles as styles } from "../../constants/style/phoneStyles";

export default function SocialLogin() {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.gimg}
          resizeMode="contain"
          source={require("../../assets/iconImage/google.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.gimg}
          resizeMode="contain"
          source={require("../../assets/iconImage/apple.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.gimg}
          resizeMode="contain"
          source={require("../../assets/iconImage/facebook.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
