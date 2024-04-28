import {
  ScrollView,
  Image,
  TouchableOpacity,
  SectionList,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import TripItem from "@/components/HomeScreenComponents/TripItem";
import ExpenseItem from "@/components/HomeScreenComponents/expenseItem";

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
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-gray-100">
        <View className="flex-row justify-between items-center mx-4 mt-6 rounded-lg overflow-hidden shadow-md">
          <View className="flex-1 bg-green-200 py-4 px-6">
            <View className="flex-row-reverse justify-between items-center bg-green-200 space-x-2">
              <Image
                className="h-8 w-8"
                source={require("./../../assets/images/icon.png")}
              />
              <Text className="text-gray-500 text-[15px] font-semibold">
                إجمالي الدخل
              </Text>
            </View>
            <Text className="text-2xl font-bold mt-2">$100</Text>
          </View>
          <View className="flex-1 py-4 px-6 text-black bg-red-100">
            <View className="flex-row items-center bg-red-100 space-x-2">
              <Image
                className="h-8 w-8 tint-white"
                source={require("./../../assets/images/icon.png")}
              />
              <Text className=" font-semibold">إجمالي المصروفات</Text>
            </View>
            <Text className="text-2xl font-bold  mt-2">$100</Text>
          </View>
        </View>
        <View className="mt-6 mx-4 p-2 rounded">
          <View className="flex flex-row justify-between">
            <View>
              <TouchableOpacity className="bg-blue-200 rounded py-2 px-4">
                <Text className="text-white">+</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-lg font-semibold text-gray-700 mb-4">
              آخر الرحلات
            </Text>
          </View>
          <View className="flex flex-row justify-between gap-2 m-2">
            <Text className="text-xs text-gray-500 mb-2"> عنوان</Text>
            <Text className="text-xs text-gray-500 mb-2"> السائق</Text>
            <Text className="text-xs text-gray-500 mb-2"> السعر</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={lastTrips}
            renderItem={({ item }) => <TripItem item={item} />}
          />
        </View>
        <View className="mt-6 mx-4 p-2 rounded">
          <View className="flex flex-row justify-between">
            <View>
              <TouchableOpacity className="bg-blue-200 rounded py-2 px-4">
                <Text className="text-white">+</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-lg font-semibold text-gray-700 mb-4">
              آخر المصروفات
            </Text>
          </View>
          <View className="flex flex-row justify-between gap-2 m-2">
            <Text className="text-xs text-gray-500 mb-2"> عنوان</Text>
            <Text className="text-xs text-gray-500 mb-2"> السائق</Text>
            <Text className="text-xs text-gray-500 mb-2"> السعر</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={lastExpenses}
            renderItem={({ item }) => <ExpenseItem item={item} />}
          />
          {/* <FlatList data={lastExpenses} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
