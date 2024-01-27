import React from 'react';
import {Text, View} from 'react-native';
import StatItem from '../../items/statItem';

export default function StatsCard() {
  return (
    <View
      style={{
        marginBottom: 80,
        backgroundColor: 'white',
        width: '100%',
        padding: 16,
        borderRadius: 12,
        shadowColor: 'gray',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.13,
        shadowRadius: 2,

        elevation: 10,
        marginVertical: 16,
      }}>
      <View
        style={{
          gap: 16,
          alignItems: 'flex-end',
          transform: [{rotate: '90deg'}],
        }}>
        <StatItem height={100} sura={'Al-Fatiah'} bg={'#CCD6EB'} />
        <StatItem height={150} sura={'Al-Nissa'} bg={'#CCC4D5'} />
        <StatItem height={100} sura={'Al-Baqarah'} bg={'#CCD6EB'} />
        <StatItem height={200} sura={'Al-Maidah'} bg={'#A398AF'} />
        <StatItem height={150} sura={'Al-Imran'} bg={'#CCC4D5'} />
        <StatItem height={200} sura={'Yunus'} bg={'#A398AF'} />
        <StatItem height={100} sura={'Hud'} bg={'#CCD6EB'} />
        <StatItem height={100} sura={'Al-Isra'} bg={'#CCD6EB'} />
        <StatItem height={200} sura={'Al-Hajj'} bg={'#A398AF'} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <View
            style={{
              height: 16,
              width: 16,
              borderRadius: 24,
              backgroundColor: '#A398AF',
            }}
          />
          <Text style={{fontFamily: 'Inter-SemiBold'}}>Very good</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <View
            style={{
              height: 16,
              width: 16,
              borderRadius: 24,
              backgroundColor: '#CCC4D5',
            }}
          />
          <Text style={{fontFamily: 'Inter-SemiBold'}}>Good</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <View
            style={{
              height: 16,
              width: 16,
              borderRadius: 24,
              backgroundColor: '#CCD6EB',
            }}
          />
          <Text style={{fontFamily: 'Inter-SemiBold'}}>Average</Text>
        </View>
      </View>
    </View>
  );
}
