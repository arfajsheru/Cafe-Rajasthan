import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState, useRef, useEffect} from 'react';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import {Animated, Easing} from 'react-native';

const AiScreen = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {role: 'assistant', content: 'Hello! Hii, how can I help you?'},
  ]);
  const flatListRef = useRef(null);

  const formatResponse = text => {
    return text.replace(/\*\*(.*?)\*\*/g, '🔥 $1 🔥').replace(/[*#-]/g, '');
  };

  const sendMessage = async () => {
    if (!query) return;
    const newMessages = [...messages, {role: 'user', content: query}];
    setMessages(newMessages);
    setQuery('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: newMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const botReply = response.data.choices[0].message.content;
      const formattedReply = formatResponse(botReply);

      setMessages([
        ...newMessages,
        {role: 'assistant', content: formattedReply},
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages([
        ...newMessages,
        {role: 'assistant', content: 'Oops! Something went wrong.'},
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [messages]);

  const renderItem = ({item}) => (
    <View style={item.role === 'user' ? styles.userMsg : styles.botMsg}>
      <Text
        style={item.content.startsWith('*') ? styles.boldText : styles.text}>
        {item.content}
      </Text>
    </View>
  );

  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  const pulseAnimation = (animatedValue, delay) => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0.3,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    if (loading) {
      pulseAnimation(dot1, 0);
      pulseAnimation(dot2, 150);
      pulseAnimation(dot3, 300);
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 20}}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({animated: true})
        }
      />

      {loading && (
        <View style={styles.dotPulseWrapper}>
          <Animated.View style={[styles.dot, {opacity: dot1}]} />
          <Animated.View style={[styles.dot, {opacity: dot2}]} />
          <Animated.View style={[styles.dot, {opacity: dot3}]} />
        </View>
      )}

      <View style={styles.inputAndBtn}>
        <TextInput
          style={styles.input}
          placeholder="Write your message here"
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#fff'}}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AiScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
  chatContainer: {flex: 1, marginBottom: 10},
  userMsg: {
    backgroundColor: '#ad954d',
    padding: 10,
    borderRadius: 3,
    marginVertical: 5,
    alignSelf: 'flex-end',
  },
  botMsg: {
    backgroundColor: '#c7d1ea',
    padding: 10,
    borderRadius: 3,
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  text: {fontSize: 16, color: 'black'},
  boldText: {fontSize: 18, fontWeight: 'bold', color: '#000'}, // Bold aur bada text
  input: {
    flex: 1,
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 3,
    borderColor: '#ad954d',
  },
  inputAndBtn: {flexDirection: 'row', justifyContent: 'space-between', gap: 10, alignItems:'center', paddingTop:10},
  sendBtn: {
    paddingHorizontal: 20,
    paddingVertical: 11,
    backgroundColor: '#ad954d',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 3,
  },
  dotPulseWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',

    justifyContent: 'center',
    gap: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#ad954d',
    opacity: 0.3,
  },
});
