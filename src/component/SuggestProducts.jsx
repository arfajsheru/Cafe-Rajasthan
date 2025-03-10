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
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { FoodItemContext } from '../context/FoodItemContext';

const SuggestProducts = () => {
  const { setModalVisible, modalVisible } = useContext(FoodItemContext);
  const [productName, setProductName] = useState('');

  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      {/* Background Overlay */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
          {/* Keyboard Avoiding View */}
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.keyboardView}
          >
            <ScrollView 
              contentContainerStyle={styles.scrollView} 
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Suggest Product</Text>
                <Text style={styles.modalSubtext}>
                  Didn't find what you are looking for? Please suggest the products.
                </Text>

                {/* Input Box */}
                <TextInput
                  style={styles.input}
                  placeholder="Enter product name..."
                  placeholderTextColor="#aaa"
                  multiline={true}
                  numberOfLines={5}
                  value={productName}
                  onChangeText={setProductName}
                  autoFocus={true}
                />

                {/* Submit Button */}
                <TouchableOpacity style={styles.submit}>
                  <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>

                {/* Close Button */}
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
    alignItems: 'center',
  },
  keyboardView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    position: 'relative',
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
    textTransform: 'capitalize',
    color: '#ad954d',
    marginTop: 20,
  },
  modalSubtext: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 180,
    borderWidth: 1,
    borderColor: '#ad954d',
    borderRadius: 3,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
    marginTop: 20,
  },
  submit: {
    backgroundColor: '#ad954f',
    borderRadius: 3,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  closeBtn: {
    position: 'absolute',
    right: 15,
    top: 9,
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 25,
  },
  closeIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#ad954d',
  },
});
