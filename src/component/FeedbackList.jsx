import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  LayoutAnimation,
  Image,
} from 'react-native';
import axios from 'axios';
import {FoodItemContext} from '../context/FoodItemContext';
import {AuthContext} from '../context/AuthContext';



const FeedbackList = () => {
  const {LAPTOP_IP} = useContext(FoodItemContext);
  const {token} = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(`${LAPTOP_IP}:4000/api/feedback/all`, {
        headers: {token},
      });
      setFeedbacks(response.data.feedbacklist);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } catch (error) {
      console.log('Error fetching feedbacks:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const getRatingColor = rating => {
    if (rating === 'Terrible') {
      return '#e74c3c'; // red
    } else if (rating === 'Bad') {
      return '#e67e22'; // orange
    } else if (rating === 'Okay') {
      return '#f1c40f'; // yellow
    } else if (rating === 'Good') {
      return '#2ecc71'; // green
    } else if (rating === 'Excellent') {
      return '#3498db'; // blue
    } else {
      return '#ad954d'; // default/fallback color
    }
  };


    if (loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#ad954d" />
          <Text style={{marginTop: 10, fontWeight: '600'}}>Loading Feedback Items...</Text>
        </View>
      );
    }

  const renderItem = ({item, index}) => (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Image
          style={{width: 40, height: 40, marginRight: 10}}
          source={require('../assets/profile.png')}
        />
        <View>
          <Text style={styles.name}>{item.name || 'Unknown User'}</Text>
          <Text style={styles.email}><Text style={styles.userIdText}>UserId:</Text> {item.userId}</Text>
        </View>
      </View>

      <Text style={[styles.rating, {color: getRatingColor(item.rating)}]}>
        ⭐ Rating: {item.rating}
      </Text>
      <Text style={styles.reason}>"{item.reason}"</Text>

      <View style={styles.metaBox}>
        <Text style={styles.meta}>
          📞 Contact: {item.connected ? 'Yes' : 'No'}
        </Text>
        <Text style={styles.meta}>
          🤝 Support: {item.wantToHelp ? 'Yes' : 'No'}
        </Text>
      </View>

      <Text style={styles.date}>
        🕒 {new Date(item.createdAt).toLocaleString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Feedback</Text>
      {feedbacks.length === 0 ? (
        <Text style={styles.emptyState}>
          No feedbacks yet. Be the first to share!
        </Text>
      ) : (
        <FlatList
          data={feedbacks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default FeedbackList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  loaderContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    color: '#2c3e50',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ad954d',
     borderRightWidth: 4,
    borderRightColor: '#ad954d',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingBottom: 6,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  email: {
    fontSize: 13,
    color: '#7f8c8d',
    marginTop: 2,
  },
  userIdText: {
    fontSize:15,
    fontWeight:'bold',
    color:'black'
  },
  rating: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 6,
  },
  reason: {
    fontSize: 15,
    color: '#34495e',
    marginTop: 6,
    fontStyle: 'italic',
  },
  metaBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    fontSize: 13,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'right',
  },
  emptyState: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 50,
  },
});
