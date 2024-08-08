import { StyleSheet, Text, View, Image, Linking, Dimensions } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Headcss'; 
const { width, height } = Dimensions.get('window');

const Head = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={require('./assets/apgovlogo.png')} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ANDHRA PRADESH</Text>
          <Text style={styles.title1}>PROHIBITION & EXCISE DEPARTMENT</Text>
        </View>
      </View>
      
      <View style={styles.b}>
        <View style={styles.mailpto}>
          <Entypo name='mail' size={width * 0.05} style={{ color: 'white' }} />
          <Text 
            style={styles.mailText} 
            onPress={() => Linking.openURL('mailto:ap.excise@gmail.com')}
          >
            ap.excise@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Head;


