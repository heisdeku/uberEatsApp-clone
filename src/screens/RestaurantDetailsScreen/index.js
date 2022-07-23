import React from "react";
import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import { styles } from "./styles";

const restaurant = restaurants[2];
const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant.dishes}
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
