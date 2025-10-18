import { Platform, StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const fontSizeMap = {
  h1: { android: 24, ios: 22 },
  h2: { android: 22, ios: 20 },
  h3: { android: 20, ios: 18 },
  h4: { android: 18, ios: 16 },
  h5: { android: 16, ios: 14 },
  h6: { android: 12, ios: 10 },
  h7: { android: 10, ios: 9 },
};

const CustomText = ({
  variant,
  fontSize,
  style,
  color,
  children,
  numberOfLines,
  onLayout,
  ...props
}) => {
  let computedFontSize =
    Platform.OS === "android"
      ? RFValue(fontSize || 12)
      : RFValue(fontSize || 10);

  if (variant && fontSizeMap[variant]) {
    const defaultSize = fontSizeMap[variant][Platform.OS];
    computedFontSize = RFValue(fontSize || defaultSize);
  }
  return (
    <Text
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
      onLayout={onLayout}
      style={[styles.text, { color: color, fontSize: computedFontSize }, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default CustomText;
