import React, { useState } from "react";
import { View, FlatList, Text, ScrollView } from "react-native";

// Sample driver data
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
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View className="bg-white p-4 rounded-lg my-2 mx-4">
        <View className="flex flex-row justify-between">
          <Text>drivers</Text>
          <Text>4</Text>
        </View>
        <View className="flex flex-row justify-between">
          <Text>total salary</Text>
          <Text>10</Text>
        </View>
      </View>
      <View>
        <FlatList
          scrollEnabled={false}
          data={drivers}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default DriverScreen;
