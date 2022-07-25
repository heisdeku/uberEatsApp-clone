import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import { styles } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  useEffect(() => {
    //fetch restaurant with the id
    DataStore.query(Restaurant, id).then(setRestaurant);
  }, []);

  if (!restaurant) {
    return (
      <ActivityIndicator
        style={{ marginTop: 50 }}
        color={"blue"}
        size={"large"}
      />
    );
  }
  console.log(restaurant);
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
