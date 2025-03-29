import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FoodItemContext} from '../context/FoodItemContext';

const FoodDetails = ({route}) => {
  const {product} = route.params;
  const navigation = useNavigation();
  const {cartItems, updateCartItems, addToCart} = useContext(FoodItemContext);
  const formatViews = views => {
    if (views >= 10000000) return (views / 10000000).toFixed(1) + 'Cr';
    if (views >= 100000) return (views / 100000).toFixed(1) + 'L';
    if (views >= 1000) return (views / 1000).toFixed(1) + 'K';
    return views;
  };

  return (
    
    <ScrollView style={styles.container}>
      {/* Image and offer */}
      <View style={{position: 'relative'}}>
        <Image style={styles.image} source={product.image} />
        <View style={styles.offerContainer}>
          <Text style={styles.offerText}>
            {product.offer}%{'\n'}OFF
          </Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        {/* Name Item */}
        <Text style={styles.name}>{product.name}</Text>

        {/* Star Ratings & Views */}
        <View style={styles.starView}>
          <View style={styles.starContainer}>
            {Array.from({length: Math.floor(product.rating.stars)}).map(
              (_, index) => (
                <Text key={index} style={styles.star}>
                  ★
                </Text>
              ),
            )}
            {product.rating.stars % 1 !== 0 && (
              <Text style={styles.star}>☆</Text>
            )}
          </View>
          <Text style={styles.view}>
            {formatViews(product.rating.view) || 0} Views
          </Text>
        </View>

        {/* Item Price */}
        <View style={styles.price}>
          <Text style={styles.currentPrice}>₹{product.current_Price}</Text>
          <Text style={styles.originalPrice}>₹{product.original_Price}</Text>
        </View>

        {/* Description */}
        <Text style={styles.desc}>
          {product.description} At Cafe Rajasthan, we bring you flavors made
          with love and the finest ingredients. Whether you crave something
          crispy, juicy, spicy, or sweet, every bite is a delight. Taste the
          magic of Cafe Rajasthan!
        </Text>

        {/* Category & Subcategory */}
        <Text style={styles.categoryText}>
          <Text style={styles.categoryLabel}>Category:</Text> {product.category}{' '}
          {product.subCategory}
        </Text>

        {/* Button add to cart */}
        <View style={styles.priceandbtn}>
          {!cartItems[product.id] ? (
            <TouchableOpacity
              style={styles.addbtn}
              activeOpacity={1}
              onPress={() => addToCart(product.id)}>
              <Text style={styles.addbtntext}>Add To Cart</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.veiwCartContainer}>
              <View style={styles.addbtnquantity} activeOpacity={1}>
                <TouchableOpacity onPress={() => updateCartItems(product.id)}>
                  <Image
                    style={styles.minusandplusbtn}
                    source={require('../assets/minus.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.addbtnquantityText}>
                  {cartItems[product.id]}
                </Text>
                <TouchableOpacity onPress={() => addToCart(product.id)}>
                  <Image
                    style={styles.minusandplusbtn}
                    source={require('../assets/plus.png')}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.viewcart} onPress={() => navigation.navigate("Main", { screen: "Cart" })}>
                <Image style={{width:20, height:20, }} source={require('../assets/cart.png')} />
                <Text style={styles.viewCartText}>View Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Information Details */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Image
              source={require('../assets/cod.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>Cash On Delivery Available</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require('../assets/delivery.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>Delivery within 30 minutes</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require('../assets/fresh.png')}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>Freshness Guaranteed</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 50,
    backgroundColor: '#ad954d',
    borderRadius: 25,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
  },
  image: {
    height: 340,
    width: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'column',
    gap: 5,
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 18,
    color: '#ad954d',
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  originalPrice: {
    fontSize: 25,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    color: '#888',
  },
  currentPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ad954d',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  offerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#ea580c',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderRightWidth: 3,
    borderColor: 'white',
  },
  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  desc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 20,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  categoryLabel: {
    fontWeight: 'bold',
    color: '#444',
  },
  infoContainer: {
    marginTop: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  infoText: {
    fontSize: 14,
    color: '#444',
    fontWeight: 'bold',
  },
  priceandbtn: {
    marginTop: 10,
  },
  addbtn: {
    paddingVertical: 3,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ad954d',
  },
  addbtntext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  addbtnquantityText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 1,
  },
  addbtnquantity: {
    borderWidth: 2,
    borderColor: '#ad954f',
    backgroundColor: '#ad954f',
    flexDirection: 'row',
    paddingVertical: 3,
    width:'47%',
    height: 45,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnpriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minusandplusbtn: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  veiwCartContainer: {
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    paddingHorizontal:5,
  },
  viewcart: {
    width:'47%',
    flexDirection:'row',
    gap:5,
    borderWidth:2,
    borderRadius:5,
    borderColor:'#ad954d',
    justifyContent:'center',
    alignItems:'center',
  },
  viewCartText: {
    fontSize:18,
    fontWeight:600,
  }
});
