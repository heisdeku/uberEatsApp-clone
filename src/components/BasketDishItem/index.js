import { View, Text } from "react-native";
import React from "react";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "lightgrey",
          paddingHorizontal: 5,
          marginRight: 5,
          paddingVertical: 2,
          borderRadius: 2,
        }}
      >
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
    </View>
  );
};

export default BasketDishItem;
