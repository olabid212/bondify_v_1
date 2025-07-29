// components/GlobalPhoneInput.jsx
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import CountryPicker, {
  DARK_THEME,
  LIGHT_THEME,
} from "react-native-country-picker-modal";

const GlobalPhoneInput = ({ onChangePhone, onChangeCountry }) => {
  const [countryCode, setCountryCode] = useState("NG");
  const [callingCode, setCallingCode] = useState("234");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    onChangeCountry?.(country);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countryPickerContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFlag
          withCallingCodeButton
          withFilter
          withCallingCode
          withAlphaFilter
          onSelect={onSelect}
          theme={LIGHT_THEME}
          containerButtonStyle={styles.countryPickerButton}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => {
          setPhoneNumber(text);
          onChangePhone?.(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 10,
    alignItems: "center",
    height: 48,
    overflow: "hidden",
  },
  countryPickerContainer: {
    borderRightWidth: 1,
    borderColor: "#dadada",
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: "100%",
    justifyContent: "center",
  },
  countryPickerButton: {
    height: "100%",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#000",
    backgroundColor: '#fff',
    fontFamily: "SatoshiMedium",
    height: "100%",
  },
});

export default GlobalPhoneInput;
