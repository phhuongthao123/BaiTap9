import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PhoneContext } from './PhoneContext'; // Import PhoneContext

const SuccessScreen = () => {
  const navigation = useNavigation();
  const { phoneNumber } = useContext(PhoneContext); // Get phone number from context

  const handleGoBack = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Chúc mừng!</Text>
        <Text style={styles.message}>Số điện thoại {phoneNumber} đã đăng nhập thành công</Text>

        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Quay về trang chính</Text>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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

export default SuccessScreen;
