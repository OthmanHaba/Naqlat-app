import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Create = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full items-center justify-center">
        <View className="flex p-2 m-2 flex-col items-center">
          <View className="rounded mb-3 flex flex-row w-full">
            <TextInput
              className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="الاسم"
            />
          </View>
          <View className="rounded flex flex-row w-full">
            <TextInput
              className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="رقم الهاتف"
              keyboardType="phone-pad"
            />
          </View>

          <View className="flex flex-row items-center justify-center mt-4">
            <Link href="/(tabs)/driver" asChild>
              <TouchableOpacity className="bg-gray-300 p-4 w-1/2 rounded flex items-center">
                <Text>اضافة</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Create;
