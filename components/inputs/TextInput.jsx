import React, { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

const TextInput = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  error,
  keyboardType = "default",
  phone,
  maxLength,
  className,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <View className="mb-4 w-full">
      {label && (
        <Text className="text-lg  font-SatoshiMedium mb-2">{label}</Text>
      )}
      <View className={`flex-row items-center h-14 px-4 rounded-xl border border-ash ${className} `}>

        <RNTextInput
          className="flex-1 text-white font-SatoshiMedium "
          placeholder={placeholder}
          placeholderTextColor="#A4A4A4"
          autoCapitalize="none"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          maxLength={phone ? 11 : maxLength}
          {...rest}
        />

        {/* Show toggle icon for password */}
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePassword}>
            <Feather
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={22}
              color="#555"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
};

export default TextInput;
