import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LoadingModal} from 'react-native-loading-modal';

const LoadingModals = () => {
  return (
    <View>
      <LoadingModal modalVisible={true} />
    </View>
  );
};

export default LoadingModals;

const styles = StyleSheet.create({});
