import { Stack } from "expo-router";
import { SharedStateProvider } from "../context/SharedStateContext";

export default function RootLayout() {
  return (
    <SharedStateProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SharedStateProvider>
  );
}
