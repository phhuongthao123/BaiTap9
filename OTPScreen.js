import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params; // Nhận số điện thoại từ LoginScreen

  const handleVerifyOtp = () => {
    // Kiểm tra mã OTP (giả sử mã OTP đúng là '123456')
    if (otp === '123456') {
      navigation.navigate('SuccessScreen'); // Chuyển đến trang thành công
    } else {
      Alert.alert("Lỗi", "Mã OTP không đúng. Vui lòng thử lại.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Xác minh OTP</Text>
        <Text style={styles.subHeader}>
          Mã OTP đã được gửi về số điện thoại {phoneNumber}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập mã OTP"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
          maxLength={6} // Giới hạn mã OTP 6 số
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss} // Ẩn bàn phím khi nhấn xong
        />

        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Xác minh</Text>
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
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2C3E50',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7F8C8D',
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
  button: {
    backgroundColor: '#F291A3',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
