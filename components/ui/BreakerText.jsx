import { View } from "react-native";
import { loginStyles as styles } from "../../constants/style/authStyles";
import CustomText from "../CustomText";

export default function BreakerText({ text}) {
  return (
    <View style={styles.breakerContainer}>
      <View style={styles.horizontalLine} />
      <CustomText
        fontSize={12}
        style={styles.breakerText}
      >
        {text}
      </CustomText>
      <View style={styles.horizontalLine} />
    </View>
  );
}

