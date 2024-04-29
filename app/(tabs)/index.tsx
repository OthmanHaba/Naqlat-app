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
        <View className="flex-row justify-between">
          <View className="flex-col items-center py-8 px-6 rounded-lg overflow-hidden shadow ">
            <View className="flex-row items-center mb-4 ">
              <Ionicons name="cash-outline" size={32} color="green-700" />
              <Text className="text-green-700  text-lg font-bold ml-2">
                إجمالي الدخل
              </Text>
            </View>
            <Text className="text-xl font-bold text-green-700">$100</Text>
          </View>
          <View className="flex-col items-center py-8 px-6 rounded-lg overflow-hidden shadow ">
            <View className="flex-row  items-center mb-4">
              <Ionicons name="cash-outline" size={32} color="red-700" />
              <Text className="text-red-700 text-lg font-bold ml-2">
                إجمالي المصروفات
              </Text>
            </View>
            <Text className="text-xl font-bold text-red-700">$50</Text>
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
