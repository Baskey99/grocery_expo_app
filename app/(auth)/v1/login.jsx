import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "../../../assets/icons";
import CustomText from "../../../components/CustomText";
import BreakerText from "../../../components/ui/BreakerText";
import PhoneInput from "../../../components/ui/PhoneInput";
import SocialLogin from "../../../components/ui/SocialLogin";
import { loginStyles as styles } from "../../../constants/style/authStyles";
import useKeyboardOffsetHeight from "../../../utils/useKeyboardOffsetHeight";

export default function LoginScreen() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(keyboardOffsetHeight == 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardOffsetHeight * 0.25,
        duration: 500,
        useNativeDriver: true,
      })
    }
  }, [keyboardOffsetHeight]);

  const handleLogin = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
  };
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
        style={{
          transform: [{ translateY: animatedValue }],
        }}
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

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={loading}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText variant="h5" color="#fff">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>

        <BreakerText text="or" />

        <SocialLogin />
      </Animated.ScrollView>
      <View style={styles.footer}>
        <CustomText>By continuing, you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of Service</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>

    </View>
  );
}
