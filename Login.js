import { Text, View, TouchableOpacity, Animated, Image, Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';
import Svg, { Path } from 'react-native-svg';
import styles from './Logincss'; 
const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  const button1Position = useRef(new Animated.Value(-200)).current;
  const button2Position = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnimation]);

  const blinkAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [blinkAnimation]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(button1Position, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(button2Position, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [button1Position, button2Position]);

  const blinkStyle = {
    opacity: blinkAnimation,
  };

  return (
    <View style={styles.container}>
      <Svg height={height} width={width} viewBox="0 10 60 20" style={styles.svg}>
        <Path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="rgb(57, 27, 112)" />
        <Path d="M 0 50 C 150 150 330 -0 500 50 L 500 0 L 0 0" fill="#0E7452" opacity="0.9" />
        <Path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#0E7452" opacity="0.4" />
      </Svg>
      <View style={styles.content}>
        <View style={styles.box}>
          <View style={styles.imageview}>
            <Image source={require('./assets/apgovlogo.png')} style={styles.image} />
          </View>
          <View style={styles.c}>
            <TouchableOpacity onPress={() => navigation.navigate('User')}>
              <Animated.View style={[styles.button, { transform: [{ translateX: button1Position }] }]}>
                <Animated.Text style={[styles.buttonText, blinkStyle]}>USER</Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
          <View style={styles.c}>
            <TouchableOpacity onPress={() => navigation.navigate('Employee')}>
              <Animated.View style={[styles.button, { transform: [{ translateX: button2Position }] }]}>
                <Animated.Text style={[styles.buttonText, blinkStyle]}>AGENT</Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;






