// yarn add react-native-responsive-dimensions

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const ResponsiveDimensions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sampleText}>
        RContrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </Text>
    </View>
  );
};

export default ResponsiveDimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: responsiveHeight(100), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  sampleText: {
    fontSize: responsiveScreenFontSize(2), // 2% of total screen size
    textAlign: 'justify',
  },
});
