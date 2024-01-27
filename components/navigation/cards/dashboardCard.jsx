import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    padding: 16,
    backgroundColor: '#CCD6EB',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  seperator: {
    height: 0.7,
    width: '90%',
    backgroundColor: '#828282',
  },
});

export default function DashboardCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontFamily: 'Inter-Bold', fontSize: 20, color: 'black'}}>
          Continue learning
        </Text>
        <Text style={{fontFamily: 'Inter-Regular'}}>Last seen 12h ago</Text>
      </View>
      <View style={styles.seperator} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}>
          <View>
            <SvgUri
              style={{width: 50, height: 50, position: 'relative'}}
              uri={
                'https://res.cloudinary.com/wildme/image/upload/v1706321592/muslim_1_1_xn9ekm.svg'
              }
            />
            <Text
              style={{
                fontFamily: 'Inter-SemiBold',
                fontSize: 16,
                color: 'black',
                position: 'absolute',
                top: '10%',
                right: '40%',
              }}>
              1
            </Text>
          </View>
          <View>
            <Text
              style={{fontFamily: 'Inter-Bold', color: 'black', fontSize: 18}}>
              Al-Fatiha
            </Text>
            <Text style={{fontFamily: 'Inter-Regular'}}>Meccan • 7 verses</Text>
          </View>
        </View>
        <Text style={{fontFamily: 'Amiri-Bold', color: 'black', fontSize: 22}}>
          الفاتحة
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 8,
        }}>
        <Text style={{fontFamily: 'Inter-Regular', color: 'black'}}>
          2 episodes left for the next level
        </Text>
        <Text style={{fontFamily: 'Inter-Regular', color: 'black'}}>5/7</Text>
      </View>
      <View
        style={{
          height: 10,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 16,
        }}>
        <View
          style={{
            backgroundColor: '#556485',
            height: '100%',
            width: '71.42%',
            borderRadius: 16,
          }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          gap: 8,
        }}>
        <SvgUri
          height={24}
          width={24}
          uri={
            'https://res.cloudinary.com/wildme/image/upload/v1706340363/star-01_ohwbyn.svg'
          }
        />
        <Text style={{color: '#556485', fontFamily: 'InterRegular'}}>
          Level 1
        </Text>
      </View>
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: '#556485',
          borderRadius: 20,
          alignSelf: 'flex-end',
        }}>
        <Text style={{color: 'white', fontFamily: 'Inter-SemiBold'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
