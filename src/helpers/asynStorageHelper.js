import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e)
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e)
  }
};

export const getValue = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
  } catch (e) {
    console.log(e)
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e)
  }
};