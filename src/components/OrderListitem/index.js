import { View, Text, Image } from "react-native";
import React from "react";

const OrderListItem = ({ order }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        paddingBottom: 10,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
      }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />
      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 Items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;
