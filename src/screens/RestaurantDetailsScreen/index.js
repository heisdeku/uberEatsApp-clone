import React from "react";
import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import { styles } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restaurants[2];
const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant.dishes}
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
