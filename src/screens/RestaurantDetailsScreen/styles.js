import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  subTitle: {
    color: "#525252",
    fontSize: 15,
  },
});
