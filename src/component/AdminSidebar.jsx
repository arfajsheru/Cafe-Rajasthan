import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AdminContext} from '../context/AdminContext';

const AdminSidebar = () => {
  const {selectedScreen, setSelectedScreen} = useContext(AdminContext);
  return (
    <View style={styles.list}>
      <TouchableOpacity
        onPress={() => setSelectedScreen('AddItem')}
        activeOpacity={1}>
        <View
          style={[
            styles.btncontainer,
            selectedScreen === 'AddItem' ? {backgroundColor: '#fff'} : {},
          ]}>
          <Image
            style={styles.imageicon}
            source={require('../assets/add.png')}
          />
          <Text style={styles.btnText}>Add Item</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedScreen('ItemList')}
        activeOpacity={1}>
        <View
          style={[
            styles.btncontainer,
            selectedScreen === 'ItemList' ? {backgroundColor: '#fff'} : {},
          ]}>
          <Image
            style={styles.imageicon}
            source={require('../assets/itemlist.png')}
          />
          <Text style={styles.btnText}>Item List</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedScreen('OrderList')}
        activeOpacity={1}>
        <View
          style={[
            styles.btncontainer,
            selectedScreen === 'OrderList' ? {backgroundColor: '#fff'} : {},
          ]}>
          <Image
            style={styles.imageicon}
            source={require('../assets/orderlist.png')}
          />
          <Text style={styles.btnText}>Order List</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedScreen('FeedbackList')}
        activeOpacity={1}>
        <View
          style={[
            styles.btncontainer,
            selectedScreen === 'FeedbackList' ? {backgroundColor: '#fff'} : {},
          ]}>
          <Image
            style={styles.imageicon}
            source={require('../assets/feedback.png')}
          />
          <Text style={styles.btnText}>FeedbackList</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AdminSidebar;

const styles = StyleSheet.create({
  btncontainer: {
    height: 70,
    borderWidth: 1.5,
    borderColor: '#b5caf2',
    borderRightWidth: 0,
    borderRadius: 3,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '22%',
    flexDirection: 'col',
    gap: 20,
    paddingTop: 20,
    borderRightWidth: 1.5,
    borderColor: '#b5caf2',
    backgroundColor: '#f2d993',
  },
  imageicon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#ad954d',
  },
  btnText: {
    fontSize: 12,
    fontWeight: 700,
  },
});
