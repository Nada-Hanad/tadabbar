import React from 'react';
import {Text, View} from 'react-native';

export default function StatItem({height, sura, bg}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}>
      <View
        style={{
          width: height,
          height: 16,
          borderRadius: 4,
          backgroundColor: bg,
        }}
      />
      <Text style={{fontFamily: 'Inter-SemiBold', width: 100}}>{sura}</Text>
    </View>
  );
}
