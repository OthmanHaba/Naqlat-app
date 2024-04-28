import { View, Text } from "react-native";
import React from "react";

interface IDriverCompnent {
  item: {
    id: number;
    name: string;
  };
}

const DriverItem: React.FC<IDriverCompnent> = ({ item }) => {
  return (
    <View className="bg-white p-2">
      <Text>{item.name}</Text>
    </View>
  );
};

export default DriverItem;
