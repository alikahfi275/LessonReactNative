import React, {useEffect, useState} from 'react';
import PinCode, {
  hasUserSetPinCode,
  deleteUserPinCode,
  getStoredPinCode,
} from '@haskkor/react-native-pincode';
import AsyncStorage from '@react-native-community/async-storage';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';
import {Button} from 'react-native';

const PinCodeScreen = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    // Check if biometric authentication is available
    TouchID.isSupported()
      .then(biometryType => setIsBiometricSupported(true))
      .catch(() => setIsBiometricSupported(false));
  }, []);

  const handleResult = async (isPinCodeCorrect, clear) => {
    if (isPinCodeCorrect) {
      // PIN is correct, perform the desired action
      console.log('PIN is correct!');

      // Check if biometric authentication is supported
      if (isBiometricSupported) {
        // Attempt biometric authentication
        try {
          const credentials = await Keychain.getGenericPassword();
          if (credentials) {
            const {username, password} = credentials;
            await TouchID.authenticate('Authenticate with Biometrics', {
              username,
              passcodeFallback: false,
            });
            // Biometric authentication successful, perform further actions if needed
          }
        } catch (error) {
          console.log('Biometric authentication failed or cancelled:', error);
        }
      }

      // You can navigate to another screen or perform any other action here
    } else {
      // PIN is incorrect, handle accordingly
      console.log('Incorrect PIN. Please try again.');
      // Clear the entered PIN
      clear();
    }
  };

  const resetPinCode = async () => {
    // Delete the stored PIN from AsyncStorage and Keychain
    await AsyncStorage.removeItem('pinCodeExample');
    await Keychain.resetGenericPassword();
    // Additionally, you might want to reset any biometric credentials if stored
    deleteUserPinCode();
  };

  return (
    <PinCode
      status={'enter'}
      storedPin={hasUserSetPinCode()}
      touchIDDisabled={!isBiometricSupported}
      titleEnter="Enter your PIN"
      subTitleEnter="Enter your 4-digit PIN code"
      maxAttempts={3}
      pinCodeKeychainName="pinCodeExample"
      handleResult={handleResult}
      styleMainContainer={{backgroundColor: 'white'}}>
      <Button title="Reset PIN" onPress={resetPinCode} />
    </PinCode>
  );
};

export default PinCodeScreen;
