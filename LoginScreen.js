// LoginScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PhoneContext } from './PhoneContext'; // Import PhoneContext

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const { setPhoneNumber: setContextPhoneNumber } = useContext(PhoneContext); // Use setPhoneNumber from context

  const handleContinue = () => {
    const phoneRegex = /^0[0-9]{9}$/; // Regex to ensure the number starts with '0'
    if (phoneRegex.test(phoneNumber)) {
      setContextPhoneNumber(phoneNumber); // Save phone number to context
      navigation.navigate('OTPScreen', { phoneNumber });
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Đăng nhập</Text>
        <Text style={styles.note}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F2E9E9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 20, // Dịch card lên trên
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2C3E50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 5,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#ECF0F1',
  },
  note: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7F8C8D',
  },
  button: {
    backgroundColor: '#F291A3', // Màu nền nút
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Màu chữ nút
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
