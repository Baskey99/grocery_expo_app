import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "../../assets/icons";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import { signUp } from "../../lib/auth";

export default function SignUp() {
  const router = useRouter();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    const name = nameRef.current.trim();
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();
    const confirmPassword = confirmPasswordRef.current.trim();

    if (!name || !email || !password || !confirmPassword) {
      return Alert.alert("Sign Up", "Please fill all the fields");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Sign Up", "Passwords do not match");
    }

    try {
      setLoading(true);
      const data = await signUp(email, password);
      console.log("✅ Supabase sign-up success:", data);

      Alert.alert("Success", "Account created successfully!");
      router.push("/login");
    } catch (err) {
      console.error("❌ Sign-up error:", err.message);
      Alert.alert("Error", err.message);
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
          <Text style={styles.welcomeText}>Create</Text>
          <Text style={styles.welcomeText}>Your Account</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.formText}>Please fill in the details below</Text>

          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="Full Name"
            onChangeText={(val) => (nameRef.current = val)}
          />

          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Email Address"
            onChangeText={(val) => (emailRef.current = val)}
          />

          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Password"
            secureTextEntry
            onChangeText={(val) => (passwordRef.current = val)}
          />

          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(val) => (confirmPasswordRef.current = val)}
          />

          <Button title="Sign Up" loading={loading} onPress={handleSignUp} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={[styles.footerText, styles.linkText]}>Login</Text>
          </Pressable>
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
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
  linkText: {
    color: theme.colors.primaryDark,
    fontWeight: theme.fonts.semibold,
  },
});
