import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

const FonstScaleResponsive = () => {
  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);
  return (
    <View style={{padding: 20}}>
      <Text style={styles.txt}>
        RContrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
      </Text>
    </View>
  );
};

export default FonstScaleResponsive;

// const styles = StyleSheet.create({
//   txt: {
//     fontSize: 20,
//   },
// });
const makeStyles = fontScale =>
  StyleSheet.create({
    txt: {
      fontSize: 12 / fontScale,
    },
  });
