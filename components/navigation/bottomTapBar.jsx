/* eslint-disable indent */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

const styles = StyleSheet.create({
  wrapper: {width: '100%', backgroundColor: '#F9FAFF'},
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopEndRadius: 18,
    borderTopStartRadius: 16,
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'Inter-Medium',
  },
});
export default function MyTabBar({state, descriptors, navigation}) {
  const icons = {
    Home: {
      en: 'https://res.cloudinary.com/wildme/image/upload/v1706306005/home_tpiipe.svg',
      dis: 'https://res.cloudinary.com/wildme/image/upload/v1706306868/home-02_xkyxy1.svg',
    },
    Chapters: {
      en: 'https://res.cloudinary.com/wildme/image/upload/v1706308128/book-open-01_1_rqhuld.svg',
      dis: 'https://res.cloudinary.com/wildme/image/upload/v1706308128/book-open-01_jolghn.svg',
    },
    Challenges: {
      en: 'https://res.cloudinary.com/wildme/image/upload/v1706342679/target-04_1_yebk7i.svg',
      dis: 'https://res.cloudinary.com/wildme/image/upload/v1706342679/target-04_mi7ify.svg',
    },
    Leaderboard: {
      dis: 'https://res.cloudinary.com/wildme/image/upload/v1706342679/trophy-01_rao20z.svg',
      en: 'https://res.cloudinary.com/wildme/image/upload/v1706342679/trophy-01_1_qhlksw.svg',
    },
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const icon = icons[route.name];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.navItem}>
              <SvgUri
                width={24}
                height={24}
                uri={isFocused ? icon.en : icon.dis}
              />

              <Text
                style={[
                  styles.text,
                  {fontSize: 12},

                  {color: isFocused ? '#556485' : '#CCD6EB'},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
