import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
const ListItem = () => {
  const itemlist = [
    {
      name: 'Veggie Burger',
      des: 'A delicious vegetarian burger with fresh lettuce and cheese.',
      current_price: 199,
      original_price: 249,
      offer: 20,
      category: 'Veg',
      subcategory: 'Burgers',
      image: require('../assets/category1.jpg'),
      rating: {stars: '4.5', views: '1020'},
      bestSeller: true,
    },
    {
      name: 'Margherita Pizza',
      des: 'Classic Margherita pizza with fresh basil and mozzarella cheese.',
      current_price: 299,
      original_price: 349,
      offer: 15,
      category: 'Veg',
      subcategory: 'Pizza',
      image: require('../assets/category2.jpg'),
      rating: {stars: '4.7', views: '2100'},
      bestSeller: true,
    },
    {
      name: 'Chicken Biryani',
      des: 'Aromatic and flavorful chicken biryani with basmati rice.',
      current_price: 399,
      original_price: 499,
      offer: 20,
      category: 'Non-Veg',
      subcategory: 'Biryani',
      image: require('../assets/category3.jpg'),
      rating: {stars: '4.8', views: '3200'},
      bestSeller: false,
    },
    {
      name: 'Paneer Butter Masala',
      des: 'Creamy and rich paneer butter masala with Indian spices.',
      current_price: 299,
      original_price: 350,
      offer: 10,
      category: 'Veg',
      subcategory: 'Curry',
      image: require('../assets/category4.jpg'),
      rating: {stars: '4.6', views: '1500'},
      bestSeller: true,
    },
    {
      name: 'Chiken Loipop',
      des: 'Tender chicken in a creamy, spiced sauce. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      current_price: 249,
      original_price: 299,
      offer: 15,
      category: 'Non-Veg',
      subcategory: 'Cakes',
      image: require('../assets/category5.jpg'),
      rating: {stars: '4.9', views: '5000'},
      bestSeller: true,
    }, 
    {
      name: 'Veggie Burger',
      des: 'A delicious vegetarian burger with fresh lettuce and cheese.',
      current_price: 199,
      original_price: 249,
      offer: 20,
      category: 'Veg',
      subcategory: 'Burgers',
      image: require('../assets/category1.jpg'),
      rating: {stars: '4.5', views: '1020'},
      bestSeller: true,
    },
    {
      name: 'Margherita Pizza',
      des: 'Classic Margherita pizza with fresh basil and mozzarella cheese.',
      current_price: 299,
      original_price: 349,
      offer: 15,
      category: 'Veg',
      subcategory: 'Pizza',
      image: require('../assets/category2.jpg'),
      rating: {stars: '4.7', views: '2100'},
      bestSeller: true,
    },
    {
      name: 'Chicken Biryani',
      des: 'Aromatic and flavorful chicken biryani with basmati rice.',
      current_price: 399,
      original_price: 499,
      offer: 20,
      category: 'Non-Veg',
      subcategory: 'Biryani',
      image: require('../assets/category3.jpg'),
      rating: {stars: '4.8', views: '3200'},
      bestSeller: false,
    },
    {
      name: 'Paneer Butter Masala',
      des: 'Creamy and rich paneer butter masala with Indian spices.',
      current_price: 299,
      original_price: 350,
      offer: 10,
      category: 'Veg',
      subcategory: 'Curry',
      image: require('../assets/category4.jpg'),
      rating: {stars: '4.6', views: '1500'},
      bestSeller: true,
    },
    {
      name: 'Chiken Loipop',
      des: 'Tender chicken in a creamy, spiced sauce. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      current_price: 249,
      original_price: 299,
      offer: 15,
      category: 'Non-Veg',
      subcategory: 'Cakes',
      image: require('../assets/category5.jpg'),
      rating: {stars: '4.9', views: '5000'},
      bestSeller: true,
    },
    {
      name: 'Veggie Burger',
      des: 'A delicious vegetarian burger with fresh lettuce and cheese.',
      current_price: 199,
      original_price: 249,
      offer: 20,
      category: 'Veg',
      subcategory: 'Burgers',
      image: require('../assets/category1.jpg'),
      rating: {stars: '4.5', views: '1020'},
      bestSeller: true,
    },
    {
      name: 'Margherita Pizza',
      des: 'Classic Margherita pizza with fresh basil and mozzarella cheese.',
      current_price: 299,
      original_price: 349,
      offer: 15,
      category: 'Veg',
      subcategory: 'Pizza',
      image: require('../assets/category2.jpg'),
      rating: {stars: '4.7', views: '2100'},
      bestSeller: true,
    },
    {
      name: 'Chicken Biryani',
      des: 'Aromatic and flavorful chicken biryani with basmati rice.',
      current_price: 399,
      original_price: 499,
      offer: 20,
      category: 'Non-Veg',
      subcategory: 'Biryani',
      image: require('../assets/category3.jpg'),
      rating: {stars: '4.8', views: '3200'},
      bestSeller: false,
    },
    {
      name: 'Paneer Butter Masala',
      des: 'Creamy and rich paneer butter masala with Indian spices.',
      current_price: 299,
      original_price: 350,
      offer: 10,
      category: 'Veg',
      subcategory: 'Curry',
      image: require('../assets/category4.jpg'),
      rating: {stars: '4.6', views: '1500'},
      bestSeller: true,
    },
    {
      name: 'Chiken Loipop',
      des: 'Tender chicken in a creamy, spiced sauce. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      current_price: 249,
      original_price: 299,
      offer: 15,
      category: 'Non-Veg',
      subcategory: 'Cakes',
      image: require('../assets/category5.jpg'),
      rating: {stars: '4.9', views: '5000'},
      bestSeller: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={itemlist}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.itemcontainer}>
            <View style={styles.imageContainer}>
  <Image style={styles.image} source={item.image} />
  <View style={styles.overlay} />
</View>
            <View style={styles.priceContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDesc}>{item.des}</Text>
              <View style={styles.prices}>
                <Text style={styles.itemDupPrice}>Rs.{item.current_price}</Text>
                <Text style={styles.itemOriPrice}>
                  Rs.{item.original_price}
                </Text>
              </View>
              <View style={styles.offerContainer}>
                <Text style={styles.offerText}>{item.offer}% OFF</Text>
              </View>

              <View style={styles.closebtn}>
                <Image
                  style={styles.closeIcon}
                  source={require('../assets/close.png')}
                />
              </View>
            </View>

            <View
              style={[styles.categoryContainer, { borderColor: item.category === "Veg" ? "green" : "red" }]}
            >
              <View
                style={[styles.categoryInner, { backgroundColor: item.category === "Veg" ? "green" : "red" }]}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  itemcontainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    padding: 2,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 5,
  },
  imageContainer: {
    position: 'relative',
    width: 80,
    height: 90,
  },
  
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.2,  // Black effect with opacity
    borderRadius: 2,
  },
  priceContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'col',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  itemDupPrice: {
    fontSize: 18,
    fontWeight: 500,
  },
  itemOriPrice: {
    color: '#808080', // ✅ Gray color
    fontSize: 15, // ✅ Font size 15
    textDecorationLine: 'line-through', // ✅ Line-through effect
    fontWeight: '400', // ✅ Font weight 400
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5,
  },
  itemDesc: {
    width: '100%',
    fontSize: 11,
    color: '#64748B',
  },
  offerContainer: {
    borderWidth: 1.5,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: '#EA580C',
  },
  offerText: {
    fontSize: 12,
    fontWeight: 900,
    color: '#EA580C',
  },
  closeIcon: {
    width: 12,
    height: 12,
  },
  closebtn: {
    position: 'absolute',
    right: 2,
    top: 2,
  },
  categoryContainer: {
    position: 'absolute',
    borderWidth: 2,
    height: 20,
    width: 20,
    left: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryInner: {
    width: 12,
    height: 12,
    borderRadius: 25,
  },
});
