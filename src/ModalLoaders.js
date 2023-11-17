import {StyleSheet, Button, Text, View} from 'react-native';
import Loader from 'react-native-modal-loader';
import React from 'react';

const ModalLoaders = () => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Loader loading={true} color="green" size="large" />
      {/* <Button title="Press me!" /> */}
    </View>
  );
};

export default ModalLoaders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
