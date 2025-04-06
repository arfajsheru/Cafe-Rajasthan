import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ReferAndEarn = () => {
  return (
    <View style={styles.container}>
      {/* Text reffer heading */}
      <View style={styles.textContainer}>
        <Text style={styles.firstHeading}>Earn ₹200</Text>
        <Text style={styles.secondHeading}>For every friend you refer</Text>
        <Text style={styles.thirdHeading}>
          Earn ₹1000 for the first 5 referrals
        </Text>
      </View>

      {/* Invite Via reffer Link */}
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Invite via referral link</Text>
        <Image
          style={{width: 20, height: 20, tintColor: '#ad954d'}}
          source={require('../assets/link.png')}
        />
      </View>

      <View style={styles.get}>
        <View style={styles.youGet}>
          <View style={styles.iconText}>
            <Text style={styles.heading}>You Get</Text>
            <Image source={require('../assets/gift.png')} style={styles.icon} />
          </View>
          <Text style={styles.description}>
            25% off up to ₹200 on your next order
          </Text>
        </View>

        <View style={styles.theyGet}>
          <View style={styles.iconText}>
            <Text style={styles.heading}>They Get</Text>
            <Image source={require('../assets/gift.png')} style={styles.icon} />
          </View>
          <Text style={styles.description}>
            25% off up to ₹200 on their next order
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReferAndEarn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 3,
  },
  firstHeading: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#ad954d',
  },
  secondHeading: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  thirdHeading: {
    fontWeight: 'medium',
    fontSize: 16,
    color: 'gray',
  },
  linkContainer: {
    flexDirection: 'row',
    gap: 6,
    backgroundColor: '#f2e9d2',
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: '#ad954d',
  },
  linkText: {
    fontSize: 15,
    fontWeight: 500,
    color: '#ad954d',
  },
  get: {
    backgroundColor:'red',
    padding:5,
    marginTop:20,
  },
  youGet: {
    backgroundColor: 'green',
    borderRadius: 12,
  },
  theyGet: {
    backgroundColor: 'yellow',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
