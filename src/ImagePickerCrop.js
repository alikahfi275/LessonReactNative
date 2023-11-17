import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import user from '../src/assets/user.jpg';

const ImagePickerCrop = () => {
  const [profile, setProfile] = useState(null);
  const openFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image.path);
      console.log(image);
      setProfile(image);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const removeImage = () => {
    ImagePicker.clean()
      .then(() => {
        setProfile(false);
      })
      .catch(e => {
        alert(e);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={
          profile ? {uri: `data:${profile.mime};base64,${profile.data}`} : user
        }
        style={{borderRadius: 100, width: 200, height: 200}}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => openFile()}
        style={{
          padding: 10,
          backgroundColor: 'grey',
          borderRadius: 50,
          marginTop: 60,
        }}>
        <Text>ImagePickerCrop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openCamera()}
        style={{
          padding: 10,
          backgroundColor: 'grey',
          borderRadius: 50,
          marginTop: 10,
        }}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeImage()}
        style={{
          padding: 10,
          backgroundColor: 'grey',
          borderRadius: 50,
          marginTop: 10,
        }}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerCrop;

const styles = StyleSheet.create({});
