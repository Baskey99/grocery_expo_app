import { useState } from "react";
import { Animated, Image, Platform, StatusBar, View } from "react-native";
import Icon from "../../../assets/icons";
import CustomText from "../../../components/CustomText";
import BreakerText from "../../../components/ui/BreakerText";
import PhoneInput from "../../../components/ui/PhoneInput";
import { loginStyles as styles } from "../../../constants/style/authStyles";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image
        style={styles.cover}
        resizeMode="cover"
        source={require("../../../assets/images/login.png")}
      />
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.bottomContainer}
      >
        <CustomText variant="h2" style={styles.title}>
          India's #1 delivery app
        </CustomText>
        <BreakerText text="Login or Sign Up" />

        <PhoneInput
          onFocus={() => console.log("on focus")}
          onBlur={() => console.log("on blur")}
          onChangeText={setPhone}
          value={phone}
          icon={<Icon name="arrowDown" size={26} strokeWidth={1.6} />}
        />
      </Animated.ScrollView>
    </View>
  );
}
