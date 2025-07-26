import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import NextButton from "../../../../components/ui/NextButton";
import { useRouter } from "expo-router";

const Age = () => {
    const [selectedAge, setSelectedAge] = useState(25);
    const router = useRouter()

  const ages = Array.from({ length: 100 }, (_, i) => i + 1); // Age 1 - 100

    return (
      <View className='bg-app flex-1'>
        <View style={styles.container}>
          <Text style={styles.title}>How Old Are You?</Text>
          <Text style={styles.subtitle}>Please provide your age in years</Text>

          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedAge}
              onValueChange={(itemValue) => setSelectedAge(itemValue)}
              itemStyle={styles.pickerItem}
            >
              {ages.map((age) => (
                <Picker.Item key={age} label={String(age)} value={age} />
              ))}
            </Picker>
          </View>
        </View>
        <View className="w-full items-end pb-6">
          <NextButton variant="white" onPress={() => router.push("/gender")} />
        </View>
      </View>
    );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "#111111",
  },
  title: {
    fontSize: 25,
    fontFamily: "SatoshiBold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Satoshi",
    marginBottom: 30,
  },
  pickerWrapper: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  pickerItem: {
    fontSize: 30,
    height: 200,
    fontFamily: "SatoshiBold",
    color: "#fff",
  },
  button: {
    marginTop: 30,
    width: "80%",
    borderRadius: 30,
    overflow: "hidden",
  },
});
