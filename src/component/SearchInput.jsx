import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import RollingBar from 'react-native-rolling-bar';

const SearchInput = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchContainer}>
      <Image
        source={require('../assets/search.png')}
        style={styles.searchIcon}
      />
      <TouchableOpacity style={styles.rollingcontainer} onPress={() => navigation.navigate('Search')} activeOpacity={1}>
        <Text style={styles.titlesearch}>Search for</Text>

        <RollingBar interval={3000} defaultStyle={false}>
          <Text style={styles.text}>"Non-Veg Items"</Text>
          <Text style={styles.text}>"Veg Items"</Text>
          <Text style={styles.text}>"Paneer"</Text>
          <Text style={styles.text}>"Roti" </Text>
          <Text style={styles.text}>"Prawns" </Text>
          <Text style={styles.text}>"Soup" </Text>
        </RollingBar>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 8,
    height: 45,
    marginVertical: 15,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    tintColor:'#ad954d',
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  voiceIcon: {
    width: 30,
    height: 30,
    tintColor: '#ad954f',
  },
  voiceBorder: {
    borderLeftWidth: 0.9,
    paddingLeft: 5,
    borderColor: '#ad954f',
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    color: '#ad954f',
  },
  titlesearch: {
    fontSize: 15,
    fontWeight: 400,
    color: 'gray',
  },
  rollingcontainer: {
    flexDirection:'row',
    gap:5
  }
});
