import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import { CrudApi } from "../api/shared/curdApi";
import Toast from 'react-native-toast-message';
import { storeValue } from "../helpers/asynStorageHelper";

const OtpScreen = ({navigation}) => {
	const [code, setCode] = useState('');
	const [isLoading, setIsLoading] = useState(false); 

	const verifyOtp = () => {
		const regex = /^\d{6}$/;
		if (regex.test(code)) {
			const body = {
				phone: '+923175098343',
				otp: code
			}
			setIsLoading(true);

			CrudApi.postRecord('users', body)
				.then((res) => {
					storeValue('token', res?.data?.token)
					Toast.show({
						type: 'info',
						text1: 'Otp verified successfully',
						text2: 'Welcome to the app 👋'
					});
					navigation.navigate('Dashboard')
				})
				.catch((err) => {
					Toast.show({
						type: 'error',
						text2: 'Incorrect OTP'
					});
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			Toast.show({
				type: 'error',
				text1: 'Otp should be atleast 6 digits',
				text2: 'Please try again '
			});
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Booking App</Text>
			<TextInput
				style={[styles.input]}
				onChangeText={setCode}
				value={code}
				placeholder="enter otp"
			/>
			<TouchableOpacity
				onPress={() => verifyOtp()}
				style={[styles.button, styles.btnColor]}
				disabled={isLoading}
			>
				{isLoading ? (
					<ActivityIndicator size="small" color="#ffffff" />
				) : (
					<Text style={styles.buttonText}>Verify OTP</Text>
				)}
			</TouchableOpacity>
		</View>
	)
}

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
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 5,
		width: 200
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
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OtpScreen;