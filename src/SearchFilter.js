// npm install --save react-native-vector-icons

import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchFilter = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const listhRef = useRef();
  const [ind, setInd] = useState(0);
  const [oldData, setOldData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response);
        setOldData(response);
      });
  }, []);

  const onSearch = text => {
    if (text == '') {
      setData(oldData);
    } else {
      let tempList = data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          height: 70,
          marginTop: 20,
          // justifyContent: "space-between",
        }}>
        <View
          style={{
            width: '80%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.4,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 15,
          }}>
          <EvilIcons
            name="search"
            size={30}
            color="black"
            style={{marginHorizontal: 10}}
          />
          <TextInput
            placeholder="Search ..."
            ref={searchRef}
            value={search}
            style={{flex: 1}}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
          />
          {search == '' ? null : (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => {
                searchRef.current.clear();
                onSearch('');
                setSearch('');
              }}>
              <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={{
            marginHorizontal: 15,
          }}
          onPress={() => {
            setVisible(true);
          }}>
          <MaterialCommunityIcons name="air-filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        ref={listhRef}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={ind}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                borderRadius: 10,
                borderWidth: 0.5,
                alignSelf: 'center',
                marginTop: 20,
                marginBottom: index == data.length - 1 ? 20 : 0,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: 60,
                  height: '90%',
                  marginLeft: 10,
                  borderRadius: 10,
                }}
              />
              <View style={{width: '80%'}}>
                <Text
                  style={{fontWeight: '600', marginLeft: 10, marginTop: 10}}>
                  {/* Substring buat memangkas string */}
                  {item.title.substring(0, 30)}
                </Text>
                <Text style={{fontSize: 12, margin: 10}}>
                  {/* Substring buat memangkas string */}
                  {item.description.substring(0, 50)}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      fontWeight: '800',
                      color: 'green',
                    }}>
                    {'$ ' + item.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '800',
                      color: 'orange',
                      marginLeft: 'auto',
                    }}>
                    {'$ ' + item.rating.rate}
                  </Text>
                  <AntDesign
                    name="star"
                    size={18}
                    color="orange"
                    style={{marginRight: 30, marginLeft: 5}}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              width: '80%',
              height: 200,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                let tempList = data.sort((a, b) =>
                  a.title > b.title ? 1 : -1,
                );
                setData(tempList);
                // ketika scrool balik lagi ke awal
                listhRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>Sort By Name</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => a.price - b.price));
                listhRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                low to High Price
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => b.price - a.price));
                listhRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                High to Low Price
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => a.rating.rate - b.rating.rate));
                listhRef.current.scrollToIndex({animated: true, index: 0});
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>Sort By Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
