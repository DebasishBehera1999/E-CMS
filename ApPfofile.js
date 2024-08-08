import {  Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import React from 'react';
import styles from './Profilecss'; 
const ApPfofile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://media.assettype.com/homegrown%2Fimport%2Fimg%2Fbook%2Fnxrsbazjmj-1510844729.jpg' }} style={styles.imageBackground}>
        <View style={styles.overlay} />
        <ScrollView contentContainerStyle={styles.contentContainer}>
        
          <Image source={require('./assets/apmap.png')} style={styles.image1} />
          <Text style={styles.text}>ANDHRA PRADESH</Text>
          
<View style={styles.A}> 
    <View style={styles.B}>
    <Text style={styles.text1}>Capital City:</Text>
    <Text style={styles.text2}>Amaravati</Text>
    </View>
    <View style={styles.B}>
    <Text style={styles.text1}>Population:</Text>
    <Text style={styles.text2}>94,600,000 </Text>
    </View>
    <View style={styles.B}>
    <Text style={styles.text1}>Area:</Text>
    <Text style={styles.text2}>162,970 km2 </Text>
    </View>
</View>

<Text style={styles.text}>Administrative Units</Text>
   <View style={styles.A}> 
    <View style={styles.B}>
    <Text style={styles.text3}>26 DISTRICT</Text>
    
    </View>
    <View style={styles.B}>
    <Text style={styles.text4}> 679 MANDAL</Text>
    
    </View>
 
</View> 

<View style={styles.A}> 
    <View style={styles.B}>
   < Text style={styles.text1}>About Andhra Pradesh</Text>
   <Text style={styles.text1}>Eminent Personalities</Text>
            <Text style={styles.text1}>Literature</Text>
            <Text style={styles.text1}>Land and People</Text>
    </View>
  
    <View style={styles.B}>
    < Text style={styles.text1}>Wildlife</Text>
            <Text style={styles.text1}>Ancient</Text>
            <Text style={styles.text1}>Topography</Text>
            < Text style={styles.text1}>E-Magazines</Text>
    </View>
</View>        
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ApPfofile;
