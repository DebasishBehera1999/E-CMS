import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

const circleAnimation = {
  0: { scale: 1 },
  0.5: { scale: 1.1 },
  1: { scale: 1 },
};

const Buttons = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.View animation={circleAnimation} iterationCount="infinite" direction="alternate" duration={2000} style={styles.buttonContainer}>
        <Animatable.View animation="bounceIn" delay={1000} style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserComplaint')}>
            <Image source={{ uri: 'https://png.pngtree.com/png-vector/20220825/ourmid/pngtree-register-now-label-with-megaphone-transparent-background-vector-illustration-design-png-image_6123775.png' }} style={styles.buttonImage} />
            <Text style={styles.buttonText}>REGISTER YOUR COMPLAINT</Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="bounceIn" delay={2000} style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tracker')}>
            <Image source={{ uri: 'https://www.corposec.at/wp-content/uploads/2021/10/gps_symbol.jpg' }} style={styles.buttonImage} />
            <Text style={styles.buttonText}>TRACK YOUR COMPLAINT</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});


