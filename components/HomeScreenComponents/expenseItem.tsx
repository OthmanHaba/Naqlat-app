// ExpenseItem.tsx
import React from "react";
import { View, Text } from "@/components/Themed";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ExpenseItemProps {
  item: {
    id: number;
    driver: string;
    title: string;
    price: number;
  };
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item }) => (
  <TouchableOpacity
    className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-2"
    activeOpacity={0.7}
  >
    <View className="flex-row items-center">
      <Ionicons name="cash-outline" size={24} color="#DC2626" />
      <View className="ml-4">
        <Text className="text-base font-semibold text-gray-800">
          {item.title}
        </Text>
        <Text className="text-sm text-gray-500">{item.driver}</Text>
      </View>
    </View>
    <Text className="text-lg font-bold text-red-600">-${item.price}</Text>
  </TouchableOpacity>
);

export default ExpenseItem;
