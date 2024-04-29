import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DriverItem from "@/components/Driver/DriverItem";
import { Ionicons } from "@expo/vector-icons";

interface Driver {
  id: number;
  name: string;
  salary: number;
  trips: number;
  rating: number;
}

const drivers: Driver[] = [
  { id: 1, name: "Driver 1", salary: 1000, trips: 5, rating: 4.5 },
  { id: 2, name: "Driver 2", salary: 1500, trips: 8, rating: 4.8 },
  { id: 3, name: "Driver 3", salary: 1200, trips: 6, rating: 4.2 },
  { id: 4, name: "Driver 4", salary: 900, trips: 4, rating: 4.0 },
  { id: 5, name: "Driver 5", salary: 1100, trips: 7, rating: 4.6 },
];

const DriverScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="bg-indigo-600 px-4 py-3 flex-row justify-between items-center rounded-lg mx-4 my-2 shadow-md">
        <View className="flex-row items-center">
          <TouchableOpacity className="bg-white rounded-full p-2 mr-2">
            <Ionicons name="add" size={24} color="indigo" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-white">
            Add New Driver
          </Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-300 mr-1">Total drivers:</Text>
          <Text className="text-lg font-semibold text-white">
            {drivers.length}
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="bg-white rounded-lg mx-4 shadow-md divide-y divide-gray-200">
          <FlatList
            data={drivers}
            renderItem={({ item }) => <DriverItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={
              <View className="px-4 py-2 bg-indigo-100">
                <Text className="text-indigo-800 font-semibold">
                  Driver List
                </Text>
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DriverScreen;
