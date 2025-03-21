import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CartItem from '../component/CartItem';
import {ScrollView} from 'react-native-gesture-handler';

const Cart = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      name: 'Dahi Raita',
      description: 'Fresh curd mixed with special spices.',
      current_Price: 40,
      original_Price: 60,
      offer: 20,
      category: 'Veg',
      subCategory: 'Dahi Salad',
      image: require('../assets/food1.jpg'),
      rating: {stars: 4.5, view: 1400},
    },
    {
      id: '2',
      name: 'Paneer Butter Masala',
      description: 'Rich creamy tomato-based curry with soft paneer cubes.',
      current_Price: 180,
      original_Price: 220,
      offer: 18,
      category: 'Veg',
      subCategory: 'Main Course',
      image: require('../assets/food2.jpg'),
      rating: {stars: 4.7, view: 2500},
    },
    {
      id: '3',
      name: 'Chicken Biryani',
      description: 'Spiced basmati rice cooked with marinated chicken.',
      current_Price: 250,
      original_Price: 300,
      offer: 17,
      category: 'Non-Veg',
      subCategory: 'Rice & Biryani',
      image: require('../assets/food3.jpg'),
      rating: {stars: 4.8, view: 5000},
    },
    {
      id: '4',
      name: 'Aloo Paratha',
      description: 'Stuffed wheat flatbread with spiced mashed potatoes.',
      current_Price: 60,
      original_Price: 80,
      offer: 25,
      category: 'Veg',
      subCategory: 'Breakfast',
      image: require('../assets/food4.jpg'),
      rating: {stars: 4.6, view: 1200},
    },
  ];

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Left Side - Back Arrow & My Cart */}
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.arrowicon}
              source={require('../assets/rightarrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.cartText}>My Cart</Text>
        </View>

        {/* Right Side - Search & Wishlist */}
        <View style={styles.rightSection}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              style={[styles.icon, styles.rightIcon]}
              source={require('../assets/search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Image
              style={[styles.icon, styles.wishlistIcon]}
              source={require('../assets/wishlist.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.cartContainer}>
          {/* Applu coupon */}
          <View style={styles.couponContainer}>
            <View style={styles.subContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.discounticon}
                  source={require('../assets/discount.png')}
                />
              </TouchableOpacity>

              <Text>Apply Coupon</Text>
            </View>

            <TouchableOpacity>
              <Image
                style={styles.discounticon}
                source={require('../assets/rightarrow.png')}
              />
            </TouchableOpacity>
          </View>

          {/* Cart content */}
          <Text style={styles.sectionTitle}>Review Your Order</Text>
          <View style={styles.cartItemContainer}>
            <View style={styles.CartHeader}>
              <Text style={styles.headerText}>
                Dlievery in {'\n'}
                <Text style={styles.timeText}>17 mins</Text>
              </Text>
              <Text style={styles.headerText}>18 items</Text>
            </View>

            <View style={{marginTop: 10}}>
              <FlatList
                data={data}
                keyExtractor={item => item.id.toString()} // ✅ Unique key extractor
                renderItem={({item}) => <CartItem item={item} />}
                ListEmptyComponent={() => <View style={styles.emptyContainer}>

                  <Image style={{width:200, height:200, tintColor:"#D1D5DB"}} source={require("../assets/emptycart.png")} />
                  <Text style={styles.emptyText}>Empty Cart</Text>

                </View>} // ✅ Empty state handle karna
              />
            </View>
          </View>
          
          <View style={styles.itemMissed}>
            <Text style={styles.textmissed}>Missed Somthing? 
              
              </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Menu')}>
              <Text style={styles.textNavigation}>Add more items</Text>

            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Bill Details</Text>

          <View style={styles.billContainer}>
            <Text style={styles.billHeader}>Bill Details</Text>

            <View style={styles.secPrice}>
              <Text style={styles.text}>Item Total MRP</Text>
              <Text style={styles.price}>₹900</Text>
            </View>

            <View style={styles.secPrice}>
              <Text style={styles.text}>Discount</Text>
              <Text style={styles.discount}>-₹900</Text>
            </View>

            <View style={styles.secPrice}>
              <Text style={styles.text}>Delivery Fee</Text>
              <Text style={styles.price}>₹10</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.secPrice}>
              <Text style={styles.totalText}>To Pay</Text>
              <Text style={styles.totalPrice}>₹800</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Process To Chekout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#ad954d',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {paddingBottom: 20},
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  arrowicon: {
    width: 20,
    height: 20,
    transform: [{rotate: '180deg'}],
  },
  rightIcon: {
    marginRight: 15,
  },
  wishlistIcon: {
    tintColor: 'black',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cartContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  discounticon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    elevation: 15,
    marginVertical: 12,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cartItemContainer: {
    borderRadius: 15,
    backgroundColor: '#e5e7eb',
    marginTop: 5,
    padding: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginTop: 10,
  },
  CartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ad954d',
    borderStyle: 'dotted',
    paddingBottom: 6,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 500,
    color: '#777d8c',
  },
  timeText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#AD954D',
  },
  billContainer: {
    borderRadius: 12,
    backgroundColor: '#e5e7eb',
    marginTop: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  billHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  secPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#959595',
    textDecorationLine: 'line-through',
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: '#ad954d',
    marginVertical: 8,
    borderStyle: 'dotted',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ad954d',
  },
  btn: {
    backgroundColor: '#ad954d',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    borderRadius:3,
  },
  btntext: {
    fontSize:18,
    fontWeight:700,
    color: "#fff"
  },
  emptyContainer: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  emptyText: {
    fontSize:50,
    fontWeight:900,
    color: "#D1D5DB",
  }, 
  itemMissed: {
    backgroundColor:"#e5e7eb",
    padding:5,
    paddingVertical:15,
    marginTop:10,
    borderRadius:15,
    flexDirection:'row',
    justifyContent:'center',gap:4,
    alignItems:'center'
  },
  textmissed: {
    fontSize:15, 
    fontWeight:600,
  },
  textNavigation: {
    fontSize:15, 
    fontWeight:600,
    color:"#ad954d"
  },

});
