import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (name && email && password.length >= 6) {
      Alert.alert('Signup Successful', 'Now login with your details.');
      navigation.navigate('Login');
    } else {
      Alert.alert('Invalid Details', 'Please enter all details correctly.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#ad954f"} barStyle={'dark-content'} />
      <View style={styles.loginBox}>
        {/* Logo Image */}
        <Image source={require('../assets/AppLogo.png')} style={styles.logo} />

        {/* Signup Title */}
        <Text style={styles.title}>"Welcome to new cafe rajasthan!"</Text>

        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.loginbtn} onPress={handleSignup}>
          <Text style={styles.logintext}>Register</Text>
        </TouchableOpacity>

        <View style={styles.registrcontianer}>
          <Text style={styles.registertext}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#ad954f', fontWeight: 'bold'}}>Login here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginBox: {
    width: '90%',
    padding: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ad954f',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'NotoSerifKhojki-Bold',
    fontSize: 20,
    color: '#ad954f',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ad954f',
    borderWidth: 1.3,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loginbtn: {
    backgroundColor: '#ad954f',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logintext: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  registrcontianer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingVertical: 8,
  },
  registertext: {
    fontSize: 15,
    color: 'gray',
  },
});
