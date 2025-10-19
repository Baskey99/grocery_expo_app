import React from "react";
import { Button, Text, View } from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { useSharedState } from "../../context/SharedStateContext";

export default function ProfileScreen() {
  const { scrollY, scrollYGlobal, scrollToTop } = useSharedState();

  // Animated scroll handler
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;      // per-tab scroll
      scrollYGlobal.value = event.contentOffset.y; // global scroll
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <Button title="Scroll to top" onPress={scrollToTop} />

      <Animated.FlatList
        data={Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ padding: 20, borderBottomWidth: 1 }}>
            <Text>{item}</Text>
          </View>
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
}
