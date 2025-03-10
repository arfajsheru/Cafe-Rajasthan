import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomeScreenHeader = () => {
  return (
    <View style={styles.inputcontainer}>
      <Image style={styles.backicon} source={require('../assets/search.png')} />
      <TextInput style={styles.input}
      placeholder="Search here..."
      autoFocus={true}
      
      />
      <TouchableOpacity activeOpacity={1}>
        <Image
          style={styles.voiceicon}
          source={require('../assets/voice.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomeScreenHeader;

const styles = StyleSheet.create({
  backicon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  voiceicon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor:'#ad954f'
  },
  inputcontainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#fff',
    marginLeft: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 14,
    fontWeight: 500,
    color: 'gray',
  },
});
