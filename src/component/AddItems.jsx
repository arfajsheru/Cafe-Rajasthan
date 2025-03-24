import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {Text, TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const AddItems = () => {
  const [imageUri, setImageUri] = useState(null);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Veg');
  const [selectedCategory, setSelectedCategory] = useState('Chicken Rise');
  const [rating, setRating] = useState({
    stars: '',
    views: '',
  });
  const [original_price, setOriginal_Price] = useState(0);
  const [current_Price, setCurrent_Price] = useState(0);
  const [offer, setOffer] = useState(0);
  const [checkbox, setCheckBox] = useState(false);

  const categories = ['Dahi & Salad', 'Chinese Starter', 'Soup','Chiken Sauce', 'Others'];

  // Image Picker function
  const pickImage = () => {
    let options = {mediaType: 'photo', quality: 1};
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // Add Item handler
  const onSubmitHandler = async () => {
    try {
      const formdata = new FormData();
      formdata.append('name', itemName),
        formdata.append('des', description),
        formdata.append('category', category),
        formdata.append('subcategory', selectedCategory),
        formdata.append('offer', offer),
        formdata.append('original_price', original_price),
        formdata.append('current_price', current_Price),
        formdata.append('bestSeller', checkbox),
        formdata.append(
          'rating',
          JSON.stringify({stars: rating.stars, views: rating.views}),
        );
      if (imageUri) {
        formdata.append('image', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'upload.jpg',
        });
      }

      const response = await axios.post(
        `https://foodserver-five.vercel.app/api/food/add`,
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };


  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Image Upload */}
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>Upload Image</Text>
            <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
              <Image
                source={
                  imageUri ? {uri: imageUri} : require('../assets/download.png')
                }
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          {/* Product Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>Product Name</Text>
            <TextInput
              onChangeText={text => setItemName(text)}
              style={styles.input}
              placeholder="Type here"
            />
          </View>

          {/* Product Description */}
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>Product Description</Text>
            <TextInput
              onChangeText={text => setDescription(text)}
              style={[styles.input, styles.textArea]}
              multiline
              numberOfLines={4}
              placeholder="Type here"
            />
          </View>

          {/* Product Category */}
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>Product Category</Text>
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

          {/* Product Subcategory */}
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>Product Sub Category</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={setSelectedCategory}
                style={styles.picker}>
                <Picker.Item label="Select Category" value={null} />
                {categories.map((cat, index) => (
                  <Picker.Item key={index} label={cat} value={cat} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Ratings, Views, Offer */}
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.textTitle}>Ratings</Text>
              <TextInput
                onChangeText={text => setRating({...rating, stars: text})}
                style={styles.input}
                keyboardType="numeric"
                placeholder="Type here"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.textTitle}>Views</Text>
              <TextInput
                onChangeText={text => setRating({...rating, views: text})}
                style={styles.input}
                keyboardType="numeric"
                placeholder="Type here"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.textTitle}>Offer</Text>
              <TextInput
                onChangeText={text => setOffer(text)}
                style={styles.input}
                keyboardType="numeric"
                placeholder="Type here"
              />
            </View>
          </View>

          {/* Pricing */}
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.textTitle}>Original Price</Text>
              <TextInput
                onChangeText={text => setOriginal_Price(text)}
                style={styles.input}
                keyboardType="numeric"
                placeholder="Type here"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.textTitle}>Discounted Price</Text>
              <TextInput
                onChangeText={text => setCurrent_Price(text)}
                style={styles.input}
                keyboardType="numeric"
                placeholder="Type here"
              />
            </View>
          </View>

          {/* Bestseller  */}
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
                  style={{width: 22, height: 22, tintColor: '#fff'}}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.textTitle}>Add to bestseller</Text>
          </View>

          <TouchableOpacity style={styles.addbtn} onPress={onSubmitHandler}>
            <Text style={styles.textTitle}>AddItem</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddItems;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    minWidth: '78%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#f7e6b9',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#b5caf2',
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',
    width: '100%',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#b5caf2',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bestsellercontainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ad954d',
  },
  addbtn: {
    marginTop: 25,
    borderWidth: 1.5,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#fff',
    backgroundColor: '#ad954d',
    borderRadius: 3,
  },
});
