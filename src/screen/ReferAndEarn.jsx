import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ReferAndEarn = () => {
  const referralSteps = [
    'Share referral code or link with friends.',
    'When they place their first order, you both earn rewards.',
    'Redeem your coupon at checkout to claim your rewards.',
  ];

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
      {/* offer box  */}
      <View style={styles.get}>
        <View style={styles.box}>
          <View style={styles.iconText}>
            <Text style={styles.heading}>You Get</Text>
            <Image source={require('../assets/gift.png')} style={styles.icon} />
          </View>
          <Text style={styles.description}>
            25% off up to{' '}
            <Text style={{color: 'black', fontWeight: 'bold'}}>₹200</Text> on
            your next order
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.iconText}>
            <Text style={styles.heading}>They Get</Text>
            <Image source={require('../assets/gift.png')} style={styles.icon} />
          </View>
          <Text style={styles.description}>
            25% off up to{' '}
            <Text style={{color: 'black', fontWeight: 'bold'}}>₹50</Text> on
            their first order
          </Text>
        </View>
      </View>

      <View style={styles.codeContainer}>
        <Text style={styles.sharcode}>Share code</Text>
        <View style={styles.codeText}>
          <Text style={styles.reffercode}>RNF167</Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/copy.png')}
          />
        </View>
      </View>

      <View style={styles.referwork}>
        <Text style={styles.worktext}>How referral works?</Text>
        <View style={styles.referSteps}>
          {referralSteps.map((step, index) => (
            <View key={index} style={styles.stepcontainer}>
              <View style={styles.stepindex}>
                <Text style={styles.stepindexText}>{index + 1}</Text>
              </View>
              <Text style={styles.referStepText}>{step}</Text>
            </View>
          ))}
          <View style={styles.dottedborder}></View>
        </View>
      </View>
    </View>
  );
};

export default ReferAndEarn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginBottom: 20,
  },
  firstHeading: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ad954d',
  },
  secondHeading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  thirdHeading: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdf7ec',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: '#ad954d',
    elevation: 10,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ad954d',
    marginRight: 6,
  },
  get: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  box: {
    width: '48%',
    backgroundColor: '#fdf7ec',
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#ad954d',
    height: 130,
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 6,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#333',
    marginRight: 8,
  },
  description: {
    fontSize: 18,
    color: '#555',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#ad954d',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#ad954d',
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: '#fdf7ec',
    elevation: 6,
  },
  codeText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  sharcode: {
    fontSize: 17,
    fontWeight: 'medium',
    color: 'gray',
  },
  reffercode: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ad954d',
  },
  referwork: {
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#ad954d',
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: '#fdf7ec',
    elevation: 4,
  },
  worktext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  referSteps: {
    position:'relative',
    marginLeft: 10,
    gap: 20,
    zIndex:1,
    
  },
  referStepText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 20,
  },
  stepcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepindex: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#ad954d',
    alignSelf: 'flex-start',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepindexText: {
    fontSize:15,
    fontWeight:'medium'
  },
  dottedborder:{
    position:'absolute',
    borderWidth:1,
    height:"100%",
    left:9,
    borderStyle:'dotted',
    zIndex:-1,
  }
});
