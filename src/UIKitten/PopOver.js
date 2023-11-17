import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Layout, Popover, Text} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const PopoverStyledBackdropShowcase = () => {
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = () => (
    <Button onPress={() => setVisible(true)}>TOGGLE POPOVER</Button>
  );

  return (
    <Popover
      backdropStyle={styles.backdrop}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}
      style={{top: 480, borderRadius: 10}}>
      <Layout style={styles.content}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
            marginVertical: 15,
          }}>
          <View style={{alignItems: 'center'}}>
            <Icon name="camera-image" size={40} color="green" />
            <Text style={{textAlign: 'center'}}>Gallery</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Icon name="camera" size={40} color="orange" />
            <Text style={{textAlign: 'center'}}>Camera</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Icon name="trash-can" size={40} color="#900" />
            <Text style={{textAlign: 'center'}}>Remove</Text>
          </View>
        </View>
        <Text
          onPress={() => setVisible(false)}
          style={{
            textAlign: 'center',
            padding: 10,
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
          }}>
          CANCEL
        </Text>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  content: {
    width: 350,
    justifyContent: 'center',
    borderRadius: 20,
  },
  avatar: {
    marginHorizontal: 4,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
