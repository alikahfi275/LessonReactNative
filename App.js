import * as React from 'react';
import * as eva from '@eva-design/eva';
import {View, Text, PermissionsAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/ReduxToolkit2/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/ReduxToolkit2/store/store';
import ResponsiveDimensions from './src/ResponsiveDimensions';
import FonstScaleResponsive from './src/FonstScaleResponsive';
import LoadingModals from './src/LoadingModals';
import ModalLoaders from './src/ModalLoaders';
import ImagePickerCrop from './src/ImagePickerCrop';
import {useEffect} from 'react';
import UIKitten from './src/UIKitten/UIKitten';
import {ApplicationProvider} from '@ui-kitten/components';
import {ModalWithBackdropShowcase} from './src/UIKitten/ModalKitten';
import VectorIcons from './src/VectorIcons';
import {PopoverStyledBackdropShowcase} from './src/UIKitten/PopOver';
import ProfileComponent from './src/ProfileComponent/ProfileComponent';
import DynamicForm from './src/DynamicForm/DynamicForm';
import FingerPrint from './src/Biometrik/FingerPrint';
import PinCodeScreen from './src/PinCode/PinCodeScreen';
import InfiniteScroll from './src/infiniteScrollFlatlist/InfiniteScroll';

const Stack = createNativeStackNavigator();

function App() {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="infinite" component={InfiniteScroll} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  );
}

export default App;
