import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const screenWidth = Dimensions.get('window').width;
  const componentSize = screenWidth * 0.8;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Booking App</Text>
      <TextInput
        style={[styles.input, {width: componentSize}]}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Username"
      />
      <TextInput
        style={[styles.input, {width: componentSize}]}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Login Logic')}
        style={[styles.button, styles.btnColor, {width: componentSize}]}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('Forgot Password Logic')}
        style={[styles.button, {width: componentSize}]}>
        <Text style={[styles.buttonText, styles.linkColor]}>
          Forgot Password ?
        </Text>
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

export default Login;
