import React from 'react';
import {Animated, View, Text, Image, Button} from 'react-native';

const App = () => {
  const logo = require('../assets/images/logo.png');
  const writing = 'Welcome to the animated page!';
  const image = require('../assets/images/splash.png');

  const logoX = new Animated.Value(0);
  const logoOpacity = new Animated.Value(1);
  const writingX = new Animated.Value(-200);
  const writingOpacity = new Animated.Value(0);
  const imageScale = new Animated.Value(0);
  const imageY = new Animated.Value(500);
  const buttonY = new Animated.Value(20);

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          top: logoX,
          left: 0,
          opacity: logoOpacity,
          transform: [{translateX: logoX}],
        }}>
        <Image source={logo} />
      </Animated.View>

      <Animated.View
        style={{
          width: 300,
          height: 100,
          position: 'absolute',
          top: writingX,
          left: 100,
          opacity: writingOpacity,
          transform: [{translateX: writingX}],
        }}>
        <Text>{writing}</Text>
      </Animated.View>

      <Animated.View
        style={{
          width: '80%',
          height: 500 * 0.8,
          position: 'absolute',
          bottom: imageY,
          left: 10,
          opacity: 1,
          transform: [{scaleY: imageScale}],
        }}>
        <Image source={image} />
      </Animated.View>

      <Animated.View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: buttonY,
        }}>
        <Button title="Start" />
      </Animated.View>
    </View>
  );
};

export default App;
