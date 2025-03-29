import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();

  const item = {
    id: '1',
    name: 'Paneer Tikka, Butter Naan',
    username: 'rahul_123',
    location: 'Mumbai, India',
    items: 2,
    methode: 'Online Payment',
    payment: 'Completed',
    date: '2024-03-06',
    price: 550,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.textTitle}>All Orders</Text>
        <View style={styles.navigateBtn}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../assets/cart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Image
              style={{width: 24, height: 24, tintColor: 'black'}}
              source={require('../assets/wishlist.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Order items */}
      <ScrollView style={styles.itemContainer}>
        <Text style={styles.title}>My Orders</Text>

        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
        <View style={styles.order}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/orderbox.png')}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>🛍 Items: {item.items}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📅 Date: {item.date}</Text>
            <Text>🛒 Method: {item.methode}</Text>
            <Text style={styles.payment}>{item.payment}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#ad954d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  navigateBtn: {
    flexDirection: 'row',
    gap: 15,
  },
  itemContainer: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  order: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#b5caf2',
    marginBottom: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  orderInfo: {
    flex: 1,
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#555',
  },
  location: {
    fontSize: 13,
    color: '#777',
  },
  details: {
    marginTop: 10,
  },
  payment: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
