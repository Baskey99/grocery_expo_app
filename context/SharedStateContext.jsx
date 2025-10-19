import React, { createContext, useContext } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

// Define the context type
const SharedStateContext = createContext(undefined);

export const SharedStateProvider = ({ children }) => {
  // Shared animated values
  const scrollY = useSharedValue(0);
  const scrollYGlobal = useSharedValue(0);

  // Scroll-to-top function (animates both shared values to 0)
  const scrollToTop = () => {
    scrollY.value = withTiming(0, { duration: 300 });
    scrollYGlobal.value = withTiming(0, { duration: 300 });
  };

  return (
    <SharedStateContext.Provider value={{ scrollY, scrollYGlobal, scrollToTop }}>
      {children}
    </SharedStateContext.Provider>
  );
};

// Custom hook to access shared state
export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};
