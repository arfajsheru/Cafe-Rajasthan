import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ChatBoat = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* AI Bubble */}
      <TouchableOpacity style={styles.aiContainer} activeOpacity={0.9} onPress={() => navigation.navigate('AiScreen')}>
        <Image style={styles.aiicon} source={require("../assets/AiIcon.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatBoat;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom:35,
    right:6,
    flexDirection: 'row',
  },
  aiContainer: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 50, // Full round effect
  },
  aiicon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor:"#ad954d"
  },
});
