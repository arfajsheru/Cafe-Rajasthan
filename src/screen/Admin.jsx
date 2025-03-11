import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import React, { useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import OrderList from '../component/OrderList';
import AdminSidebar from '../component/AdminSidebar';
import AddItems from '../component/AddItems';
import { AdminContext } from '../context/AdminContext';
import ListItem from '../component/ListItem';

const Admin = () => {
  const { selectedScreen } = useContext(AdminContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image style={styles.backImage} source={require("../assets/next.png")} />
        </TouchableOpacity>
        
        {/* Title ko Center me lane ka Fix */}
        <View style={styles.logoContainer}>
          <Text style={styles.headerText}>
            <Text style={{ color: '#fff' }}>Admin</Text>
            <Text style={{ color: 'black' }}> Panel</Text>
          </Text>
        </View>
      </View>

      <View style={styles.row}></View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ad954d',
    paddingHorizontal: 10,
    paddingVertical: 25,
    position: 'relative',
  },
  backButton: {
    borderWidth:2,
    borderColor:'black',
    borderRadius:25,justifyContent:'center', alignItems:'center',
  },
  backImage: {
    width: 25, height: 25, resizeMode: 'contain',
    tintColor: '#fff',
    transform: [{ rotate: '180deg' }]
  },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: "-50%"}], // Exact Center Fix
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  row: {
    height: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});
