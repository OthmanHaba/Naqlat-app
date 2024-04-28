import React from "react";
import { View, Text } from "@/components/Themed";

interface ExpenseItemProps {
  item: {
    id: number;
    driver: string;
    title: string;
    price: number;
  };
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item }) => (
  <View className="flex flex-row gap-2 justify-between bg-white p-4 rounded-lg shadow-md mb-4">
    <Text className="text-xs font-semibold mb-2">{item.title}</Text>
    <Text className="text-xs text-gray-500 mb-2"> {item.driver}</Text>
    <Text className="text-xs text-red-200 font-bold">السعر: ${item.price}</Text>
  </View>
);

export default ExpenseItem;
