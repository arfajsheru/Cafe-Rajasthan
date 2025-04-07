import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useContext} from 'react';
import axios from 'axios';
import {FoodItemContext} from '../context/FoodItemContext';
const ListItem = () => {
  const {foodList, LAPTOP_IP, fetchFoodList} = useContext(FoodItemContext);

  const removeFood = async id => {
    try {
      const response = await axios.post(`${LAPTOP_IP}:4000/api/food/remove`, {
        id,
      });
      if (response.data.success) {
        console.warn(response.data.message);
        await fetchFoodList();
      } else {
        console.warn(response.data.message);
      }
    } catch (error) {
      console.log('Error deleting food: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={foodList}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.itemcontainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.image}} />
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

              <TouchableOpacity
                style={styles.closebtn}
                onPress={() => removeFood(item._id)}>
                <Image
                  style={styles.closeIcon}
                  source={require('../assets/close.png')}
                />
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.categoryContainer,
                {borderColor: item.category === 'Veg' ? 'green' : 'red'},
              ]}>
              <View
                style={[
                  styles.categoryInner,
                  {backgroundColor: item.category === 'Veg' ? 'green' : 'red'},
                ]}
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
  foodCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  foodCountText: {
    fontSize: 16,
    fontWeight: 'bold',
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
    opacity: 0.2, // Black effect with opacity
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
    width: 15,
    height: 15,
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
