import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Card, Modal} from '@ui-kitten/components';

const UIKitten = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={visible}>
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>DISMISS</Button>
        </Card>
      </Modal>
      <Text onPress={() => setVisible(true)}>UIKitten</Text>
    </View>
  );
};

export default UIKitten;

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
