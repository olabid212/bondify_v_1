import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import NextButton from "../../../../components/ui/NextButton";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const UploadPhoto = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState(Array(6).fill(null));

  const pickImage = async (index) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = result.assets[0].uri;
      setPhotos(updatedPhotos);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-app">
    
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 px-4">
            <View className="mt-8 mb-6">
              <Text className="text-[25px] font-SatoshiBold text-white mb-2">
                Upload your photos
              </Text>
              <Text className="text-white  text-sm">
                We'd love to see you. Upload a photo for your dating journey. Upload at least 3 clearer pictures
              </Text>
            </View>

            {/* Photo Upload Boxes */}
            <View className="flex-1 flex-row flex-wrap  justify-between gap-y-4">
              {photos.map((photo, index) => (
                <TouchableOpacity
                  key={index}
                  className="w-[30%] h-[22%] border  border-ash  rounded-xl items-center justify-center"
                  onPress={() => pickImage(index)}
                  activeOpacity={0.7}
                >
                  {photo ? (
                    <Image
                      source={{ uri: photo }}
                      className="w-full h-full rounded-xl"
                      contentFit="cover"
                    />
                  ) : (
                    <Ionicons name="add" size={28} color="#bbb" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            {/* Next Button */}
            <View className="w-full items-end pb-6 mt-10">
              <NextButton
                variant="white"
                onPress={() => {
                  // You could validate or store `photos` here
                  router.push("/profile-answers");
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
    
    </SafeAreaView>
  );
};

export default UploadPhoto;
