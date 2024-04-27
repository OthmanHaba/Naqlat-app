import { ScrollView, Image, FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

const lastTrips = [
  {
    id: 1,
    title: "رحلة إلى سان فرانسيسكو",
    driver: "جون دو",
    price: 120,
  },
  {
    id: 2,
    title: "رحلة نهاية الأسبوع",
    driver: "جين سميث",
    price: 80,
  },
  {
    id: 3,
    title: "رحلة عمل",
    driver: "مايكل جونسون",
    price: 180,
  },
];

export default function HomeScreen() {
  const renderTripItem = ({ item }) => (
    <View className="flex bg-white p-4 rounded-lg shadow-md mb-4">
      <Text className="text-lg font-semibold mb-2">{item.title}</Text>
      <Text className="text-gray-500 mb-2">السائق: {item.driver}</Text>
      <Text className="text-green-500 font-bold">السعر: ${item.price}</Text>
    </View>
  );

  return (
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
        <Text className="text-lg font-semibold text-gray-700 mb-4">
          آخر الرحلات
        </Text>
        <FlatList
          data={lastTrips}
          renderItem={renderTripItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
}
