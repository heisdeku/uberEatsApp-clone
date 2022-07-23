import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
