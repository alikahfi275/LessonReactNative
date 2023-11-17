import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetMoviesQuery } from "../store/apiSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { data, isLoading, error } = useGetMoviesQuery();

  console.log();

  const movie = data?.movies;
  console.log(data);

  if (isLoading) {
    console.log("loading");
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error.error);
    return <Text>Error fetching products: {error.error}</Text>;
  }

  return (
    <View>
      <FlatList
        data={movie}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.containerItem}
            onPress={() => {
              navigation.navigate("Details", { item });
            }}>
            <Text>{item.title}</Text>
            <Text>{item.releaseYear}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerItem: {
    padding: 20,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
