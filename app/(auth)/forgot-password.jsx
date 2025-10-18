import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Icon from "../../assets/icons";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import { sendPasswordReset } from "../../lib/auth";

const REDIRECT_URL = process.env.EXPO_PUBLIC_SUPABASE_REDIRECT_URL;

export default function ForgotPassword() {
  const router = useRouter();
  const emailRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current) {
      Alert.alert("Forgot Password", "Please enter your email");
      return;
    }

    try {
      setLoading(true);
      const data = await sendPasswordReset(
        emailRef.current.trim(),
        REDIRECT_URL
      );
      console.log("✅ Supabase password reset success:", data);

      Alert.alert("Success", "Password reset email sent! Check your inbox.");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Header */}
        <View>
          <Text style={styles.welcomeText}>Forgot</Text>
          <Text style={styles.welcomeText}>Password</Text>
        </View>

        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../../assets/images/welcome.png")}
        />

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.formText}>
            Enter your email to receive a password reset link
          </Text>

          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Email Address"
            onChangeText={(value) => (emailRef.current = value)}
          />

          <Button
            title="Send Reset Link"
            loading={loading}
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  formText: {
    color: theme.colors.text,
    fontSize: hp(1.5),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
});
