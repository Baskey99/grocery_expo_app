import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import { supabase } from "../../lib/supabase";

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  // ✅ Get session and listen for auth changes
  useEffect(() => {
    const initSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);

      if (session) getProfile(session);
    };

    initSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) getProfile(session);
      }
    );

    return () => {
      subscription?.subscription?.unsubscribe();
    };
  }, []);

  // ✅ Fetch profile
  const getProfile = async (activeSession) => {
    try {
      setLoading(true);
      if (!activeSession?.user) throw new Error("No user in the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select("username, website, avatar_url")
        .eq("id", activeSession.user.id)
        .single();

      if (error && status !== 406) throw error;

      if (data) {
        setUsername(data.username || "");
        setWebsite(data.website || "");
        setAvatarUrl(data.avatar_url || "");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update profile
  const updateProfile = async () => {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session.user.id,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;

      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Sign out
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.replace("/login");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  // ✅ Show loader while fetching session or profile
  if (loading) {
    return (
      <ScreenWrapper bg="white">
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={styles.loadingText}>Loading profile...</Text>
        </View>
      </ScreenWrapper>
    );
  }

  // ✅ Prevent render if no session
  if (!session) {
    return (
      <ScreenWrapper bg="white">
        <View style={styles.loaderContainer}>
          <Text style={styles.loadingText}>No session found. Please log in.</Text>
          <Button title="Go to Login" onPress={() => router.replace("/login")} />
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Header */}
        <View>
          <Text style={styles.welcomeText}>Your</Text>
          <Text style={styles.welcomeText}>Profile</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.formText}>
            Update your details and manage your account
          </Text>

          <Input
            label="Email"
            placeholder="Email"
            value={session?.user?.email || ""}
            editable={false}
          />

          <Input
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <Input
            label="Website"
            placeholder="Enter your website"
            value={website}
            onChangeText={(text) => setWebsite(text)}
          />

          <Button
            title={loading ? "Updating..." : "Update Profile"}
            loading={loading}
            onPress={updateProfile}
          />

          <Button
            title="Sign Out"
            onPress={handleSignOut}
            style={styles.signOutButton}
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
    fontSize: hp(1.6),
  },
  signOutButton: {
    backgroundColor: theme.colors.rose,
  },
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 15,
    fontSize: hp(1.8),
    color: theme.colors.text,
  },
});
