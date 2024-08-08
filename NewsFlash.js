import { View, Text, ScrollView, Animated, StyleSheet } from 'react-native';
import React, { useRef, useEffect } from 'react';

const NewsFlash = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const textWidth = 400;

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.marqueview}>
        <Text style={styles.fixedText}>NEWSFLASH</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ overflow: 'hidden', flex: 1 }}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [textWidth, -400],
                  }),
                },
              ],
            }}>
            <Text style={styles.marque}>WELCOME TO ANDHRA PRADESH EXCISE COMPLAINT MANAGEMENT SYSTEM</Text>
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsFlash;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  marqueview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  fixedText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'red',
    paddingVertical: 10,
    marginRight: 10,
  },
  marque: {
    fontSize: 16,
    fontWeight: '700',
    color: 'blue',
    paddingVertical: 10,
  },
});






