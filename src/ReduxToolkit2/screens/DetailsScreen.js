import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  console.log("Hasil", item);

  //   const product = data[0];

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
      <Text style={{ fontSize: 50, fontWeight: "bold" }}>
        {item.releaseYear}
      </Text>
      <Text style={{ fontSize: 50, fontWeight: "bold" }}>{item.title}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
