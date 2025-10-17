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

export default function SignUp() {
  const router = useRouter();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (
      !nameRef.current ||
      !emailRef.current ||
      !passwordRef.current ||
      !confirmPasswordRef.current
    ) {
      Alert.alert("Sign Up", "Please fill all the fields");
      return;
    }

    if (passwordRef.current !== confirmPasswordRef.current) {
      Alert.alert("Sign Up", "Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      // TODO: call your API here
      // await signUpUser(nameRef.current, emailRef.current, passwordRef.current);
      Alert.alert("Success", "Account created successfully!");
      router.push("/login"); // navigate back to login
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Welcome */}
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
            onChangeText={(value) => (nameRef.current = value)}
          />

          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Email Address"
            onChangeText={(value) => (emailRef.current = value)}
          />

          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
          />

          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(value) => (confirmPasswordRef.current = value)}
          />

          {/* Buttons */}
          <Button title="Sign Up" loading={loading} onPress={onSubmit} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.semibold,
                },
              ]}
            >
              Login
            </Text>
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
    gap: 5,
    fontSize: hp(1.6),
  },
});
