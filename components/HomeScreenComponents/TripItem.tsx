import React from "react";
import { View, Text } from "@/components/Themed";
import { TouchableOpacity } from "react-native";

interface TripItemProps {
  item: {
    id: number;
    title: string;
    driver: string;
    price: number;
  };
}

const TripItem: React.FC<TripItemProps> = ({ item }) => (
  <TouchableOpacity>
    <View className="flex flex-row gap-2 justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <Text className="text-xs font-semibold mb-2">{item.title}</Text>
      <Text className="text-xs text-gray-500 mb-2"> {item.driver}</Text>
      <Text className="text-xs text-green-500 font-bold">
        السعر: ${item.price}
      </Text>
    </View>
  </TouchableOpacity>
);

export default TripItem;
