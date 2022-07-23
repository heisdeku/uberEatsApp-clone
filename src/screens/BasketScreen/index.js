import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
    </View>
  );
};

const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>{restaurant.name}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 19, marginTop: 20 }}>
        Your Items
      </Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
        ListFooterComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 2,
    borderRadius: 2,
  },
});

export default BasketScreen;
