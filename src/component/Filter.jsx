import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';
import {subCategories} from '../data';
import { FlatList } from 'react-native-gesture-handler';
const Filter = ({isfilterOpen, setisFilterOpen}) => {
  const [category, setCategory] = useState('Veg');
  const [checkbox, setCheckBox] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState([])

  const handleSelected = () => {
    setSelectedSubCategory((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]);
  }

  const slideAnim = useRef(new Animated.Value(2000)).current; // 🔥 Bottom se slide animation ke liye
  useEffect(() => {
    if (isfilterOpen) {
      Animated.timing(slideAnim, {
        toValue: 0, // 🆙 Bottom se upar aayega
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300, // 🔽 Niche chala jayega
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isfilterOpen]);

  return (
    <Modal transparent={true} animationType="none" visible={isfilterOpen}>
      {/* 🔥 Backdrop (black opacity) pe click karne se close hoga */}
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={() => setisFilterOpen(false)}></TouchableOpacity>
      {/* 🔥 Bottom se upar open hone wala Modal */}

      <Animated.View
        style={[styles.modalBox, {transform: [{translateY: slideAnim}]}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Food Product Filter </Text>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setisFilterOpen(!isfilterOpen)}>
            <Image
              style={{
                width: 16,
                height: 16,
                resizeMode: 'contain',
                tintColor: '#ad954d',
              }}
              source={require('../assets/close.png')}
            />
          </TouchableOpacity>
        </View>

        {/* Category Box */}
        <View style={styles.categoryContainer}>
          <Text style={styles.textTitle}>Category</Text>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setCategory('Veg')}>
              <View style={styles.radioOuterVeg}>
                {category === 'Veg' && <View style={styles.radioInnerVeg} />}
              </View>
              <Text style={styles.radioText}>Veg</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setCategory('Non-Veg')}>
              <View style={styles.radioOuterNonVeg}>
                {category === 'Non-Veg' && (
                  <View style={styles.radioInnerNonVeg} />
                )}
              </View>
              <Text style={styles.radioText}>Non-Veg</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SubCategory Box */}

        <View style={styles.categoryContainer}>
          <Text style={styles.textTitle}>Subcategory</Text>


        
        <FlatList data={subCategories}
        renderItem={({item}) => (
            <View style={styles.bestsellercontainer}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                checkbox ? {backgroundColor: '#ad954d'} : {},
              ]}
              onPress={() => setCheckBox(!checkbox)}>
              {checkbox && (
                <Image
                  source={require('../assets/check.png')}
                  style={{width: 20, height: 20, tintColor: '#fff'}}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.textTitle}>{item}</Text>
          </View>
        )}
        />

        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // 🔥 Background Opacity Effect
  },
  modalBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '80%', // 🔥 80% screen cover karega
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  titleContainer: {
    backgroundColor: '#ad954d',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 10,
  },
  closeBtn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 25,
    elevation: 10,
  },
  categoryContainer: {
    margin: 20,
    backgroundColor: '#e5e7eb',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 3,
    elevation: 6,
    gap: 10,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioText: {
    marginLeft: 8,
    fontSize: 16,
  },
  radioOuterVeg: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInnerVeg: {
    width: 12,
    height: 12,
    backgroundColor: 'green',
    borderRadius: 25,
  },
  radioOuterNonVeg: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: 'red',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInnerNonVeg: {
    width: 12,
    height: 12,
    backgroundColor: 'red',
    borderRadius: 25,
  },
  simpleRadioOuter: {
    borderWidth: 1.5,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestsellercontainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ad954d',
  },
});

export default Filter;
