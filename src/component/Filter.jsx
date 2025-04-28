import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';
import {menu_list} from '../data';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {FoodItemContext} from '../context/FoodItemContext';
const Filter = ({isfilterOpen, setisFilterOpen, filterProdcut, setFilterProduct}) => {
  const {category, setCategory, selectedSubCategory, setSelectedSubCategory} = useContext(FoodItemContext);
  const {foodList} = useContext(FoodItemContext);


  const handleSelected = item => {
    setSelectedSubCategory(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item],
    );
  };

  const applyFilter = () => {
    let foodItemsCopy = foodList.slice();
  
    // category ke hisaab se filter karna
    if (category === 'Veg' || category === 'Non-Veg') {
      foodItemsCopy = foodItemsCopy.filter((item) => item.category === category);
    }
  
    // subcategory ke hisaab se filter karna
    if (selectedSubCategory.length > 0) {
      foodItemsCopy = foodItemsCopy.filter((item) => {
        return selectedSubCategory.includes(item.subcategory);
      });
    }
  
    setFilterProduct(foodItemsCopy);
    setisFilterOpen(!isfilterOpen);
  };
  



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
        {/* Filter Title */}
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
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 50}}
          keyboardShouldPersistTaps="handled">
            
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
            <FlatList
              data={menu_list}
              scrollEnabled={false}
              renderItem={({item}) => {
                const isChecked = selectedSubCategory.includes(item.menu_name);
                return (
                  <View style={styles.bestsellercontainer}>
                    <TouchableOpacity
                      style={[
                        styles.checkbox,
                        isChecked ? {backgroundColor: '#ad954d'} : {},
                      ]}
                      onPress={() => handleSelected(item.menu_name)}>
                      {isChecked && (
                        <Image
                          source={require('../assets/check.png')}
                          style={{width: 20, height: 20, tintColor: '#fff'}}
                        />
                      )}
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>{item.menu_name}</Text>
                  </View>
                );
              }}
            />
          </View>

          {/* Buttton Apply Filter */}
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={applyFilter} style={styles.button}  activeOpacity={0.7}>
              <Text>Apply</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
              <Text>Clear All</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
    textTransform: 'capitalize',
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
    alignItems: 'flex-start',
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
  btnContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  button: {
    height: 35,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ad954d',
    borderRadius: 2,
  },
});

export default Filter;
