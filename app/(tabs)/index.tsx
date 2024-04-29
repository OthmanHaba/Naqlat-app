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
        <View className="flex-row justify-between items-center mx-4 mt-6 rounded-2xl overflow-hidden shadow-lg">
          <View className="flex-1 bg-green-600 py-6 px-8">
            <View className="flex-row-reverse justify-between items-center bg-green-600 space-x-2">
              <Ionicons name="cash-outline" size={24} color="white" />
              <Text className="text-white text-lg font-bold">إجمالي الدخل</Text>
            </View>
            <Text className="text-4xl font-bold mt-2 text-white">$100</Text>
          </View>
          <View className="flex-1 py-6 px-8 bg-red-600">
            <View className="flex-row items-center bg-red-600 space-x-2">
              <Ionicons name="cash-outline" size={24} color="white" />
              <Text className="text-white font-bold text-lg">
                إجمالي المصروفات
              </Text>
            </View>
            <Text className="text-4xl font-bold mt-2 text-white">$100</Text>
          </View>
        </View>
        <View className="mt-6 mx-4 p-6 rounded-2xl bg-white shadow-lg">
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity
              className="bg-indigo-600 rounded-full py-3 px-4"
              activeOpacity={0.7}
            >
              <Ionicons name="add-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-gray-800">
              آخر الرحلات
            </Text>
          </View>
          <View className="flex-row justify-between gap-2 mb-4">
            <Text className="text-sm text-gray-600 font-semibold"> عنوان</Text>
            <Text className="text-sm text-gray-600 font-semibold"> السائق</Text>
            <Text className="text-sm text-gray-600 font-semibold"> السعر</Text>
          </View>
          <FlatList
            data={lastTrips}
            renderItem={({ item }) => <TripItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-gray-200 my-2" />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View className="mt-6 mx-4 p-6 rounded-2xl bg-white shadow-lg">
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity
              className="bg-indigo-600 rounded-full py-3 px-4"
              activeOpacity={0.7}
            >
              <Ionicons name="add-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-gray-800">
              آخر المصروفات
            </Text>
          </View>
          <View className="flex-row justify-between gap-2 mb-4">
            <Text className="text-sm text-gray-600 font-semibold"> عنوان</Text>
            <Text className="text-sm text-gray-600 font-semibold"> السائق</Text>
            <Text className="text-sm text-gray-600 font-semibold"> السعر</Text>
          </View>
          <FlatList
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
