import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import { supabase } from "../lib/supabase";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch session on mount
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("session---", session);
      setSession(session);
      setLoading(false);

      if (session && session.user) {
        router.replace("/home"); // redirect to main app screen
      } else {
        router.replace("/welcome"); // redirect to auth flow
      }
    };

    fetchSession();

    // Listen for auth state changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session && session.user) {
          router.replace("/home");
        } else {
          router.replace("/welcome");
        }
      }
    );

    return () => {
      subscription?.subscription?.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <ScreenWrapper bg="white">
        <ActivityIndicator
          size="large"
          color={theme.colors.primary}
          style={styles.loader}
        />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper bg="white">
      <Text style={styles.text}>Redirecting...</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignSelf: "center",
    marginTop: 100,
  },
  text: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 18,
    color: theme.colors.text || "#333",
  },
});
