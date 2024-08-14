//temel kütüphane -> React
//useState -> bilgi tutmaya sağlar (kullanıcı adı vb)
import React, { useState } from 'react';

//kullanıcağımız bileşenler
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


//tüm giriş ekranını temsil ediyor
export default function LoginScreen() {
    //username ve password alma = useState boş string olarak başlatıyor
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //giriş bilgileri kontrollü
  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Success', 'You are logged in!');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  //html kısmı
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

//css kısmı
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
