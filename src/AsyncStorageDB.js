// npm install @react-native-async-storage/async-storage

import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageDB = () => {
  const [dataUser, setDataUser] = useState(null);
  const users = {
    name: 'AKAEL PROJECT',
    age: 26,
  };
  const setData = () => {
    // AsyncStorage.setItem("name", "Akael");
    // AsyncStorage.setItem("age", "24");

    AsyncStorage.setItem('users', JSON.stringify(users));
  };

  const getData = async () => {
    // const name = await AsyncStorage.getItem("name");
    // const age = await AsyncStorage.getItem("age");
    // console.log(name);
    // console.log(typeof age, age);

    const users = await AsyncStorage.getItem('users');
    const user = JSON.parse(users);
    console.log(user);
    setDataUser(user);
  };

  useEffect(() => {
    getData();
  }, []);

  const clearData = () => {
    AsyncStorage.clear();
  };

  return (
    <View style={{padding: 20}}>
      <View style={{marginVertical: 20}}>
        <Button title="Set Data" onPress={setData} />
      </View>
      <Button title="Show Data" onPress={getData} />
      <View style={{marginVertical: 20}}>
        <Button title="Clear Data" onPress={clearData} />
      </View>
      {dataUser ? (
        <View>
          <Text>{dataUser.name}</Text>
          <Text>{dataUser.age}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default AsyncStorageDB;

const styles = StyleSheet.create({});
