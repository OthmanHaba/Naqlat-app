import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import TripItem from "@/components/HomeScreenComponents/TripItem";
import ExpenseItem from "@/components/HomeScreenComponents/expenseItem";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import axios from "axios";
import { supabase } from "../subabase/subabase";

interface ITripItem {
  id: number;
  title: string;
  driver: string;
  price: number;
}

interface IExpenseItem {
  id: number;
  title: string;
  driver: string;
  price: number;
}

const lastTrips: ITripItem[] = [
  {
    id: 1,
    title: "نقلة رخام",
    driver: "رامي",
    price: 12000,
  },
  {
    id: 2,
    title: "شامنت",
    driver: "وحيد",
    price: 8000,
  },
  {
    id: 3,
    title: "رشاد",
    driver: "علي",
    price: 2000,
  },
  {
    id: 4,
    title: "نقلة رخام",
    driver: "علي",
    price: 14000,
  },
];

const lastExpenses: IExpenseItem[] = [
  {
    id: 1,
    driver: "محمد علي",
    title: "بنزين",
    price: 20,
  },
  {
    id: 2,
    driver: "محمد علي",
    title: "spare",
    price: 20,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={getTrips}
            className="flex-col items-center px-6 py-8 overflow-hidden bg-red-500 rounded-lg shadow "
          >
            <View className="flex-row items-center mb-4 ">
              <Ionicons name="cash-outline" size={32} color="green-700" />
              <Text className="ml-2 text-lg font-bold text-green-700">
                إجمالي الدخل
              </Text>
            </View>
            <Text className="text-xl font-bold text-green-700">$100</Text>
          </TouchableOpacity>
          <View className="flex-col items-center px-6 py-8 overflow-hidden rounded-lg shadow ">
            <View className="flex-row items-center mb-4">
              <Ionicons name="cash-outline" size={32} color="red-500" />
              <Text className="ml-2 text-lg font-bold text-red-500">
                إجمالي المصروفات
              </Text>
            </View>
            <Text className="text-xl font-bold text-red-500">$50</Text>
          </View>
        </View>
        <View className="p-6 mx-4 mt-6 bg-white shadow-lg rounded-2xl">
          <View className="flex-row items-center justify-between mb-6">
            <Link href="/createTrip" asChild>
              <TouchableOpacity
                className="px-4 py-3 bg-indigo-600 rounded-full"
                activeOpacity={0.7}
              >
                <Ionicons name="add-outline" size={24} color="white" />
              </TouchableOpacity>
            </Link>

            <Text className="text-2xl font-bold text-gray-800">
              آخر الرحلات
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={lastTrips}
            renderItem={({ item }) => <TripItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-gray-200 my-2" />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View className="p-6 mx-4 mt-6 bg-white shadow-lg rounded-2xl">
          <View className="flex-row items-center justify-between mb-6">
            <Link href="/createExpense" asChild>
              <TouchableOpacity
                className="px-4 py-3 bg-indigo-600 rounded-full"
                activeOpacity={0.7}
              >
                <Ionicons name="add-outline" size={24} color="white" />
              </TouchableOpacity>
            </Link>
            <Text className="text-2xl font-bold text-gray-800">
              آخر المصروفات
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={lastExpenses}
            renderItem={({ item }) => <ExpenseItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-gray-200 my-2" />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
