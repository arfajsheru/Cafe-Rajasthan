import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { FoodItemContext } from '../context/FoodItemContext';

const SuggestProducts = () => {
  const { setModalVisible, modalVisible } = useContext(FoodItemContext);
  const [productName, setProductName] = useState('');

  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardView}
          >
            <ScrollView
              contentContainerStyle={styles.scrollView}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Suggest a Product</Text>
                <Text style={styles.modalSubtext}>
                  Didn't find what you were looking for? Suggest the product below.
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Enter product name..."
                  placeholderTextColor="#777"
                  multiline={true}
                  numberOfLines={5}
                  value={productName}
                  onChangeText={setProductName}
                />

                <TouchableOpacity style={styles.submit} onPress={() => console.log('Product Submitted:', productName)}>
                  <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
                  <Image style={styles.closeIcon} source={require('../assets/close.png')} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SuggestProducts;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  keyboardView: {
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ad954d',
    marginBottom: 10,
  },
  modalSubtext: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 120,
    borderWidth: 1.5,
    borderColor: '#ad954d',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
  },
  submit: {
    backgroundColor: '#ad954d',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  submitText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  closeBtn: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 20,
  },
  closeIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: '#ad954d',
  },
});
