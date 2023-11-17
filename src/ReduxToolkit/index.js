import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from './action/FetchProducts';

const ReduxToolkitAPI = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state);
  const Produks = JSON.stringify(product);

  console.log('====================================');
  console.log(Produks);
  console.log('====================================');

  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 20}}
        onPress={() => {
          dispatch(fetchProducts());
        }}>
        <Text>Call API</Text>
      </TouchableOpacity>
      <FlatList
        data={Produks}
        renderItem={({item}) => <Text>{item.rating}</Text>}
      />
    </ScrollView>
  );
};

export default ReduxToolkitAPI;

const styles = StyleSheet.create({});
