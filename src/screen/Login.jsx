import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const {
    setToken,
    data,
    gestureSequence,
    correctPattern,
    timeoutRef,
    resetGesture,
    currState,
    toggleAuth,
    handleChange,
  } = useContext(AuthContext);

  const handleGestureEnd = event => {
    const {translationX, translationY} = event;
    let direction = null;

    if (translationY < -50) direction = 'UP';
    else if (translationY > 50) direction = 'DOWN';
    else if (translationX < -50) direction = 'LEFT';
    else if (translationX > 50) direction = 'RIGHT';

    if (direction) {
      gestureSequence.current.push(direction);
      console.log('Gesture detected:', direction);
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(resetGesture, 3000);

    if (
      gestureSequence.current.length === correctPattern.length &&
      gestureSequence.current.every(
        (val, index) => val === correctPattern[index],
      )
    ) {
      runOnJS(navigation.replace)('Main');
      resetGesture();
    } else if (gestureSequence.current.length > correctPattern.length) {
      resetGesture();
    }
  };

  const handleAuth = async () => {
    try {
      const url =
        currState === 'Login'
          ? `${process.env.LAPTOP_IP_ADDRESS}:4000/api/user/login`
          : `${process.env.LAPTOP_IP_ADDRESS}:4000/api/user/register`;
      const response = await axios.post(url, data);
      console.log(url)
      const token = response.data.token;
      setToken(token);
      await AsyncStorage.setItem('token', token);

      console.log(await AsyncStorage.getItem('token'));

      if (response.data.success) {
        Alert.alert('Success', response.data.message);
        if (currState === 'Login') {
          // Navigate to Main Screen

          navigation.replace('Main');
        } else {
          toggleAuth();
        }
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'Something went wrong. Try again!');
    }
  };

  const panGesture = Gesture.Pan().onEnd(event => {
    runOnJS(handleGestureEnd)(event);
  });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <View style={styles.container}>
          <View style={styles.authBox}>
            <StatusBar backgroundColor={'#ad954f'} barStyle={'dark-content'} />

            {/* Logo */}
            <Image
              source={require('../assets/AppLogo.png')}
              style={styles.logo}
            />

            <Text style={styles.title}>
              {currState === 'Login'
                ? 'Greate to have you back!'
                : 'Welcome to new cafe rajasthan!'}
            </Text>

            {/* Name Field (Only for Signup) */}
            {currState === 'Signup' && (
              <>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  value={data.name}
                  onChangeText={text => handleChange('name', text)}
                />
              </>
            )}

            {/* Email Field */}
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={data.email}
              onChangeText={text => handleChange('email', text)}
            />

            {/* Password Field */}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={data.password}
              onChangeText={text => handleChange('password', text)}
            />

            {/* Login/Signup Button */}
            <TouchableOpacity style={styles.authBtn} onPress={handleAuth}>
              <Text style={styles.authText}>
                {currState === 'Login' ? 'Login' : 'Signup'}
              </Text>
            </TouchableOpacity>

            {/* Toggle Login/Signup */}
            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>
                {currState === 'Login'
                  ? "Don't have an account?"
                  : 'Already have an account?'}
              </Text>
              <TouchableOpacity onPress={toggleAuth}>
                <Text style={styles.toggleLink}>
                  {currState === 'Login' ? ' Register' : ' Login'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  authBox: {
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
    fontSize: 23,
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
  authBtn: {
    backgroundColor: '#ad954f',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  authText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  toggleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingVertical: 8,
  },
  toggleText: {
    fontSize: 15,
    color: 'gray',
  },
  toggleLink: {
    fontSize: 15,
    color: '#ad954f',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
