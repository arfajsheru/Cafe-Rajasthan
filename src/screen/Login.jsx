import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const gestureSequence = useRef([]);
  const correctPattern = ['UP', 'UP', 'DOWN', 'LEFT', 'RIGHT'];
  const timeoutRef = useRef(null);

  const resetGesture = () => {
    gestureSequence.current = [];
    console.log('Gesture sequence reset!');
  };

  const handleLogin = () => {
    if (email === 'test@gmail.com' && password === '123456') {
      navigation.replace('Main');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter correct details.');
    }
  };

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
    timeoutRef.current = setTimeout(resetGesture, 3000); // 2 sec timeout

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

  const panGesture = Gesture.Pan().onEnd(event => {
    runOnJS(handleGestureEnd)(event);
  });

  return (
    <GestureHandlerRootView >
      <GestureDetector gesture={panGesture}>
        <View style={styles.container}>
        <View style={styles.loginBox}>
          <StatusBar backgroundColor={'#ad954f'} barStyle={'dark-content'} />
          {/* Logo Image */}
          <Image
            source={require('../assets/AppLogo.png')}
            style={styles.logo}
          />

          {/* Login Title */}
          <Text style={styles.title}>"Greate to have you back!"</Text>

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

          {/* Login Button */}
          <TouchableOpacity style={styles.loginbtn}>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>

          <View style={styles.registrcontianer}>
            <Text style={styles.registertext}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[{color:'#ad954f'}, ]}>Register</Text>
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
  loginBox: {
    width: '90%',
    padding: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ad954f',
    backgroundColor: '#fff',
    borderRadius: 3, // 🔹 Corners round kar diye
    shadowColor: '#000', // 🔹 Black shadow
    shadowOffset: {width: 0, height: 5}, // 🔹 Niche shadow
    shadowOpacity: 0.5, // 🔹 Shadow ki transparency
    shadowRadius: 6, // 🔹 Shadow blur effect
    elevation: 5, // 🔹 Android ke liye
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'NotoSerifKhojki-Bold',
    fontSize: 23,
    color: '#ad954f',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontFamily: 'NotoSerifKhojki-Regular',
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
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center', // ✅ Horizontally center
    justifyContent: 'center', // ✅ Vertically center
    marginBottom:20,
  },
  logintext: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'medium',
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
    fontSize:15,
    color:'gray',
  }
});
