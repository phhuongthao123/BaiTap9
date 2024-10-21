// HomeScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const getPhoneNumber = async () => {
      try {
        const value = await AsyncStorage.getItem('phoneNumber');
        if (value !== null) {
          setPhoneNumber(value);
        }
      } catch (error) {
        Alert.alert('Lỗi', 'Không thể lấy số điện thoại.');
      }
    };

    getPhoneNumber();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('phoneNumber'); // Xóa số điện thoại khỏi AsyncStorage
      navigation.navigate('LoginScreen'); // Quay lại màn hình đăng nhập
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể đăng xuất.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Chúc mừng!</Text>
        <Text style={styles.message}>Số điện thoại {phoneNumber} đã đăng nhập thành công</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F2E9E9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3E50',
    textAlign: 'center',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    color: '#7F8C8D',
  },
  button: {
    backgroundColor: '#F291A3',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
