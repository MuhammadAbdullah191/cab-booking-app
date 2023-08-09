import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { CrudApi } from '../api/shared/curdApi';
import Toast from 'react-native-toast-message';

const Signup = ({navigation}) => {
  const [phone, setPhone] = React.useState('');
  const screenWidth = Dimensions.get('window').width;
  const componentSize = screenWidth * 0.8;
	const [isLoading, setIsLoading] = useState(false); 

  const sendOtp = async () => {
    const phoneRegex = /^(\+92|0)?3[0-9]{9}$/;

    const body = {
      phone: "03175098343"
    }

    if (phoneRegex.test(phone)) {
      setIsLoading(true);
      CrudApi.postRecord('otps', body).then((res) => {
        Toast.show({
          type: 'info',
          text1: '👋 Otp sent successfully'
        });
        navigation.navigate('OtpScreen')
      }).catch((err)=>{
        Toast.show({
          type: 'error',
          text1: 'Error while sending otp',
          text2: 'Please try again '
        });
      }).finally(() => {
        setIsLoading(false);
      });

    } else {
      Toast.show({
        type: 'error',
        text1: 'Invalid Phone number',
        text2: 'Please try again '
      });
    }
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Booking App</Text>
      <TextInput
        style={[styles.input, {width: componentSize}]}
        onChangeText={setPhone}
        value={phone}
        placeholder="phone"
      />
      <TouchableOpacity
        onPress={() => sendOtp()}
        style={[styles.button, styles.btnColor, {width: componentSize}]}>
        {isLoading ? (
					<ActivityIndicator size="small" color="#ffffff" />
				) : (
					<Text style={styles.buttonText}>Send OTP</Text>
				)}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login', {name: 'Jane'})}
        style={[styles.button, {width: componentSize}]}>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 30,
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  btnColor: {
    backgroundColor: '#3498db',
  },
  linkColor: {
    color: 'black',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Signup;
