import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import {TextInput} from 'react-native-gesture-handler';
import { FoodItemContext } from '../context/FoodItemContext';

const CustomeScreenHeader = () => {
  const {searchTerm, setSearchTerm, handleSearchItems} = useContext(FoodItemContext);

  useEffect(() => {
    handleSearchItems()
  },[searchTerm]) 
  return (
    <View style={styles.inputcontainer}>
      <Image style={styles.backicon} source={require('../assets/search.png')} />
      <TextInput style={styles.input}
      value={searchTerm}
      placeholder="Search here..."
      onChangeText={(text) => setSearchTerm(text)}
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
