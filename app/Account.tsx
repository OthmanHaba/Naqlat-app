import { StatusBar } from "expo-status-bar";
import { FlatList, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

interface ITruckAccount {
  id: number;
  name: string;
  income: number;
  expense: number;
}

const TruckData: ITruckAccount[] = [
  { id: 1, name: "truck1", income: 400, expense: 100 },
  { id: 2, name: "truck2", income: 600, expense: 200 },
];

export default function ModalScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="bg-white mx-4 my-4 p-4 rounded-lg shadow-md">
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm text-gray-600 font-roboto-400">
            Total Income
          </Text>
          <Text className="text-sm text-gray-600 font-roboto-400">
            Total Expense
          </Text>
        </View>
        <View className="flex-row justify-between">
          <View className="flex-row items-center">
            <Text className="text-base font-roboto-700 mr-2">1200</Text>
            <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
          </View>
          <View className="flex-row items-center">
            <Text className="text-base font-roboto-700 mr-2">1200</Text>
            <Ionicons name="remove-circle-outline" size={24} color="#F44336" />
          </View>
        </View>
        <View className="flex-row justify-between mt-3">
          <Text className="text-sm text-gray-600 font-roboto-400">Total</Text>
          <Text className="text-base font-roboto-700">0</Text>
        </View>
      </View>
      <FlatList
        scrollEnabled={false}
        data={TruckData}
        renderItem={({ item }) => (
          <View className="bg-white mx-4 my-2 p-4 rounded-lg shadow-md">
            <View className="flex-row justify-between mb-2">
              <Text className="text-base font-roboto-700 text-gray-800">
                {item.name}
              </Text>
              <Text className="text-sm font-roboto-400 text-gray-600">
                Total Trips: 5
              </Text>
            </View>
            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <Ionicons name="cash-outline" size={18} color="#4CAF50" />
                <Text className="text-sm font-roboto-400 text-gray-600 ml-2">
                  Income: {item.income}
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="cash-outline" size={18} color="#F44336" />
                <Text className="text-sm font-roboto-400 text-gray-600 ml-2">
                  Expense: {item.expense}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
