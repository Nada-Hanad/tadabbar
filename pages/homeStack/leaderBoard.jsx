import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFF',
    width: '100%',
    minHeight: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: 'Amiri-Regular',

    fontSize: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCD6EB',
  },
  avatarText: {
    fontFamily: 'Inter-Bold',
  },
  c1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  wrap: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  int: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 7,
    borderWidth: 1,
    borderColor: '#E9ECF5',
  },
});

export default function LeaderBoard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingVertical: 32}}>
        <View style={styles.header}>
          <View>
            <SvgUri
              uri={
                'https://res.cloudinary.com/wildme/image/upload/v1706308775/Vector_tgfhvn.svg'
              }
            />
            <Text style={styles.headerText}>Asslamualaikum Lyna,</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>L</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
