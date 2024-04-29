import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IDriverComponent {
  item: {
    id: number;
    name: string;
    salary: number;
    trips: number;
    avatar: string; // Added avatar property
  };
}

const DriverItem: React.FC<IDriverComponent> = ({ item }) => {
  return (
    <View className="bg-white rounded-lg shadow-lg mb-4 mx-2">
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <Image
          source={{ uri: item.avatar }} // Use the avatar property to render the image
          className="w-12 h-12 rounded-full mr-4"
        />
        <View>
          <Text className="text-lg font-bold text-indigo-700">{item.name}</Text>
          <Text className="text-sm text-gray-500">ID: {item.id}</Text>
        </View>
        <TouchableOpacity className="bg-indigo-500 rounded-full p-2 ml-auto">
          <Ionicons name="ellipsis-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between px-4 py-3">
        <View className="flex-row items-center">
          <Ionicons name="cash-outline" size={24} color="indigo" />
          <Text className="text-indigo-700 font-semibold ml-2">
            ${item.salary}
          </Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="car-outline" size={24} color="indigo" />
          <Text className="text-indigo-700 font-semibold ml-2">
            {item.trips} trips
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DriverItem;
