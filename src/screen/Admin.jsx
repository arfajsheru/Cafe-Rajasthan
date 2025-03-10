import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import OrderList from '../component/OrderList';
import AdminSidebar from '../component/AdminSidebar';
import AddItems from '../component/AddItems';
import {AdminContext} from '../context/AdminContext';
import ListItem from '../component/ListItem';

const Admin = () => {
  const {selectedScreen} = useContext(AdminContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require('../assets/AppLogo.png')}
          />
          <Text style={styles.headerText}>
            <Text style={{color: '#ad954d'}}>Admin</Text>
            <Text style={{color: 'black', marginLeft: 10}}> Panel</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}></View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <AdminSidebar />
        {selectedScreen === 'AddItem' && <AddItems />}
        {selectedScreen === 'OrderList' && <OrderList />}
        {selectedScreen === 'ItemList' && <ListItem />}
      </View>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logoContainer: {
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'NotoSerifKhojki-Medium',
    marginLeft: 5,
    marginTop: -9,
    paddingVertical: 5,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  logoutBtn: {
    borderWidth: 1,
    width: 100,
    paddingVertical: 10,
    borderRadius: 2,
    backgroundColor: '#ad954d',
  },
  row: {
    height: 1,
    width: '100%',
    backgroundColor: '#b5caf2',
  },
});
