import { Pressable, TextInput, View } from "react-native";
import { Colors } from "../../constants/style/colors";
import { phoneStyles as styles } from "../../constants/style/phoneStyles";
import CustomText from "../CustomText";

export default function PhoneInput({
  value,
  onChangeText,
  onBlur,
  onFocus,
  icon,
}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <CustomText variant="h5">🇮🇳</CustomText>
        {icon && icon}
      </Pressable>

      <View style={styles.phoneInputContainer}>
        <CustomText variant="h7">+91</CustomText>
        <TextInput
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
          value={value}
          maxLength={10}
          placeholderTextColor={Colors.lightText}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.input}
        />
      </View>
    </View>
  );
}
