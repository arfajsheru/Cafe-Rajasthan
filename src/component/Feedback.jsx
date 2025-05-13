import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {FoodItemContext} from '../context/FoodItemContext';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';

const Feedback = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [reasonError, setReasonError] = useState('');
  const [serverError, setServerError] = useState('');
  const [selected, setSelected] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const {BACKEND_URL, LAPTOP_IP} = useContext(FoodItemContext);
  const {token} = useContext(AuthContext);
  const data = [
    {name: 'Terrible', image: require('../assets/terrible.png')},
    {name: 'Bad', image: require('../assets/Bad.png')},
    {name: 'Okay', image: require('../assets/okay.png')},
    {name: 'Good', image: require('../assets/good.png')},
    {name: 'Amazing', image: require('../assets/amazing.png')},
  ];

  const handleSubmit = async () => {
    // Reset errors before validating again
    setRatingError('');
    setReasonError('');
    setServerError('');
    setNameError('');

    let hasError = false;
    if (!token) {
      setServerError("Please log in to sumbit feedback.")
      return;
    }

    if (!name.trim()) {
      setNameError('Please enter your name.');
      hasError = true;
    }
    if (selected === null) {
      setRatingError('Please select a rating.');
      hasError = true;
    }

    if (!feedbackText.trim()) {
      setReasonError('Please enter your feedback.');
      hasError = true;
    }

    if (hasError) return;

    const feedbackData = {
      name,
      rating: data[selected]?.name,
      reason: feedbackText,
      connected: checkbox1,
      wantToHelp: checkbox2,
    };

    try {
      const response = await axios.post(
        `${LAPTOP_IP}:4000/api/feedback/submit`,
        feedbackData,
        {headers: {token}},
      );

      setSelected(null);
      setFeedbackText('');
      setCheckbox1(false);
      setCheckbox2(false);
      setServerError('');
      setName('');
      alert('Feedback submitted!');
    } catch (error) {
      const message = error?.response?.data?.message || 'Something went wrong.';
      setServerError(message);
      console.log('Error submitting feedback:', message);
    }
  };

  const renderCheckbox = (checked, toggle) => (
    <TouchableOpacity
      onPress={toggle}
      style={[styles.checkboxBox, checked && styles.checkboxBoxChecked]}>
      {checked && (
        <Image
          source={require('../assets/check.png')}
          style={styles.checkIcon}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <Text style={styles.title}>Give Feedback</Text>
            <Text style={styles.des}>
              What do you think of the issue search engine with Cafe Rajasthan?
            </Text>

            <View style={styles.boxes}>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.iconContainer,
                    selected === index && styles.selectedIcon,
                  ]}
                  onPress={() => setSelected(index)}
                  activeOpacity={0.7}>
                  <Image style={styles.image} source={item.image} />
                  <Text style={styles.label}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {ratingError ? (
              <Text style={{color: 'red', marginTop: -10, marginBottom: 8}}>
                {ratingError}
              </Text>
            ) : null}

            <Text style={styles.inputLabel}>Your Name</Text>
            <TextInput
              style={styles.nameinput}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
            {nameError ? (
              <Text style={{color: 'red', marginTop: -10, marginBottom: 10}}>
                {nameError}
              </Text>
            ) : null}

            <Text style={styles.inputLabel}>
              What are the main reasons for your rating?
            </Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Your feedback..."
              value={feedbackText}
              onChangeText={setFeedbackText}
            />
            {reasonError ? (
              <Text style={{color: 'red', marginTop: -10, marginBottom: 10}}>
                {reasonError}
              </Text>
            ) : null}

            <View style={styles.checkboxContainer}>
              {renderCheckbox(checkbox1, () => setCheckbox1(!checkbox1))}
              <Text style={styles.checkboxLabel}>
                Yes, I'm okay being contacted if needed
              </Text>
            </View>

            <View style={styles.checkboxContainer}>
              {renderCheckbox(checkbox2, () => setCheckbox2(!checkbox2))}
              <Text style={styles.checkboxLabel}>
                Happy to support improvements in the future.
              </Text>
            </View>

            {serverError ? (
              <Text
                style={{color: 'red', textAlign: 'center', marginBottom: 10}}>
                {serverError}
              </Text>
            ) : null}

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.8}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
  des: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  boxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  iconContainer: {
    width: '18%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#ad954d',
    backgroundColor: '#fff',
  },
  selectedIcon: {
    backgroundColor: '#f2d587',
    borderColor: 'black',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: '#444',
    marginBottom: 6,
  },
  input: {
    height: 100,
    borderColor: '#ad954d',
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 4,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  nameinput: {
    height: 45,
    borderColor: '#ad954d',
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 4,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flexShrink: 1,
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#ad954d',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxBoxChecked: {
    backgroundColor: '#ad954d',
  },
  checkIcon: {
    width: 14,
    height: 14,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
  submitBtn: {
    backgroundColor: '#ad954d',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
