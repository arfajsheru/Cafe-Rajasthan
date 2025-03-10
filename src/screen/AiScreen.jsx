import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import {OPENAI_API} from "@env"

const AiChatScreen = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! hii how can I help you" }
  ]);


  const sendMessage = async () => {
    if (!query) return;

    const newMessages = [...messages, { role: "user", content: query }];
    setMessages(newMessages);
    setQuery("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [...newMessages, { role: "user", content: query }],
        },
        {
          headers: {
            "Authorization": `Bearer ${OPENAI_API}`,
            "Content-Type": "application/json"
          }
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.role === "user" ? styles.userMsg : styles.botMsg}>
            <Text style={styles.text}>{msg.content}</Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.inputAndBtn}>

      <TextInput
        style={styles.input}
        placeholder="write your message here"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
        <Text style={{fontSize:18, fontWeight:500, color:"#fff"}}>Send</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  chatContainer: { flex: 1, marginBottom: 10 },
  userMsg: { backgroundColor: "#ad954d", padding: 10, borderRadius: 3, marginVertical: 5, alignSelf: "flex-end" },
  botMsg: { backgroundColor: "#c7d1ea", padding: 10, borderRadius: 3, marginVertical: 5, alignSelf: "flex-start" },
  text: { fontSize: 16, color: "black" },
  input: {flex:1, borderWidth: 1.5, padding: 10, borderRadius: 3, borderColor:'#ad954d' },
  inputAndBtn: {flexDirection:'row', justifyContent:'space-between', gap:10,},
  sendBtn: { paddingHorizontal:20,backgroundColor:'#ad954d', justifyContent:'center', alignContent:'center', borderRadius:3}
});

export default AiChatScreen;
