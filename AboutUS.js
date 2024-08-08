import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions, Linking } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
// import ImageList from './ImageList';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Aboutcss'; 
import ImageList from './ImageList';

const { width, height } = Dimensions.get('window');

const AboutUs = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

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
<View  style={styles.mailpto}>
<Entypo name='mail' size={width * 0.05} style={{ color: 'white' }} />
<Text style={styles.mailText} onPress={()=>{Linking.openURL('mailto:ap.excise@gmail.com')}}>ap.excise@gmail.com</Text>
</View>
    {/* <View style={styles.mailpto}>
    <FontAwesome name='globe' size={width * 0.05} style={{ color: 'white' }} />
          <Text style={styles.contactText} onPress={() => { Linking.openURL('https://www.ap.gov.in') }}>
            www.ap.gov.in
          </Text></View>       */}
</View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
         {/* <View style={styles.imageContainer}>
          <Image source={require('../../assets/img_list/banner_excise.jpg')} style={styles.img} />
        </View>  */}
        <View style={styles.borderContainer}>
          <Text style={styles.subhead}>About Excise Department</Text>
          <Text style={styles.description}>
            The Excise Department of Andhra Pradesh is responsible for enforcing laws related to the production, distribution, and consumption of alcoholic beverages, tobacco products, and other controlled substances. Our mission is to ensure public safety, promote responsible consumption, and prevent illegal activities.
          </Text>
        </View>
        <View style={styles.borderContainer}>

<View style={styles.icon}>
<Text style={styles.subhead}>Mission</Text>
{/* <Image source={{ uri: 'https://w7.pngwing.com/pngs/924/981/png-transparent-mission-statement-vision-statement-business-art-our-mission-text-service-logo-thumbnail.png' }} style={styles.image1} /> */}
</View>
          <Text style={styles.description}>
            Our mission is to protect public health and safety by regulating and controlling the manufacture, sale, and distribution of alcohol and tobacco products. We aim to promote responsible consumption and prevent illegal activities through effective enforcement and education.
          </Text>
        </View>
        <View style={styles.borderContainer}>
          <View style={styles.icon}>
          <Text style={styles.subhead}>Vision</Text>
          {/* <Image source={{ uri: 'https://w7.pngwing.com/pngs/61/290/png-transparent-computer-icons-company-reverse-search-vision-statement-vision-miscellaneous-service-trademark-thumbnail.png' }} style={styles.image1} /> */}
          </View>
          <Text style={styles.description}>
            Our vision is to create a safe and healthy environment for the citizens of Andhra Pradesh by ensuring compliance with excise laws, reducing illegal activities, and promoting responsible consumption of excisable goods.
          </Text>
        </View>
        <View style={styles.borderContainer}>
          <Text style={styles.subhead}>Functions</Text>
          <Text style={styles.description}>
            - Regulation and control of the production and distribution of alcohol and tobacco products.
          </Text>
          <Text style={styles.description}>
            - Issuance of licenses for the sale of excisable goods.
          </Text>
          <Text style={styles.description}>
            - Enforcement of laws and regulations related to excisable goods.
          </Text>
          <Text style={styles.description}>
            - Conducting inspections and investigations to ensure compliance.
          </Text>
          <Text style={styles.description}>
            - Educating the public about the risks associated with alcohol and tobacco consumption.
          </Text>
          <Text style={styles.description}>
            - Collaborating with other government agencies and law enforcement to prevent illegal activities.
          </Text>
        </View>
        <ImageList/>
        <View style={styles.borderContainer}>
        <View style={styles.contactItem}>
          <Entypo name='mail' size={width * 0.05} style={{ color: 'black' }} />
          <Text style={styles.contactText} onPress={() => { Linking.openURL('mailto:ap.excise@gmail.com') }}>
            ap.excise@gmail.com
          </Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name='phone' size={width * 0.05} style={{ color: 'black' }} />
          <Text style={styles.contactText} onPress={() => { Linking.openURL('tel:+911234567890') }}>
            +91 123 456 7890
          </Text>
        </View>
        <View style={styles.contactItem}>
          <Entypo name='location-pin' size={width * 0.05} style={{ color: 'black' }} />
          <Text style={styles.contactText}>
            Amaravati, Andhra Pradesh
          </Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name='globe' size={width * 0.05} style={{ color: 'black' }} />
          <Text style={styles.contactText} onPress={() => { Linking.openURL('https://www.ap.gov.in') }}>
            www.ap.gov.in
          </Text>
        </View>
      </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Designed, Developed and Hosted by Ridhitek Pvt. Ltd.</Text>
          <Text style={styles.footerText}>e-Governance - Web Portal, Copyright © 2024 Andhra Pradesh Excise Department, India | All rights reserved.</Text>
          <Text style={styles.footerText}>Best viewed in Chrome v-87.0.4280.141, Microsoft Edge v-87.0.664.75, Firefox v-83.0 Browsers. Resolution: 1280x800 to 1920x1080</Text>
          <Text style={styles.footerText}>Version: 1.0.3 | Last Updated On 10-06-2024 18:35 PM</Text>
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity onPress={() => openLink('https://www.facebook.com')} style={styles.iconContainer}>
            <FontAwesome name="facebook" size={30} color="#3b5998" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.twitter.com')} style={styles.iconContainer}>
            <FontAwesome name="twitter" size={30} color="#00acee" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.youtube.com')} style={styles.iconContainer}>
            <FontAwesome name="youtube" size={30} color="#FF0000" style={styles.icon} />
          </TouchableOpacity>
          
        </View>

        <View>
          <Text style={styles.brand}>@Powered By <Text style={{ color: 'green' }} onPress={() => openLink('https://www.ridhitek.com')}>Ridhitek</Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default AboutUs;

// const styles = StyleSheet.create({

// });
