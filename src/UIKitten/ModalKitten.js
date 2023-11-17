import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Modal, Text} from '@ui-kitten/components';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ModalWithBackdropShowcase = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        style={{top: 570}}>
        <Card
          disabled={true}
          style={{
            width: 350,
            borderRadius: 10,
            backgroundColor: 'red',
            padding: 0,
            margin: 0,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
              borderTopWidth: 1,
              paddingTop: 10,
              borderColor: 'lightgray',
              marginTop: 20,
            }}>
            CANCEL
          </Text>
          {/* <Button onPress={() => setVisible(false)}>CANCEL</Button> */}
        </Card>
      </Modal>
      <Card>
        <Text>
          The Maldives, officially the Republic of Maldives, is a small country
          in South Asia, located in the Arabian Sea of the Indian Ocean. It lies
          southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from
          the Asian continent
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
