import React, { useRef, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, Image, Dimensions, Animated } from 'react-native';
import GovLink from './GovLink';
import * as Animatable from 'react-native-animatable';
import styles from './Homecss'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ApPfofile from './ApPfofile';
import ImageList from './ImageList';



const { width } = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const cardAnimation = useRef(new Animated.Value(0)).current;
  const pulseAnimation = useRef(new Animated.Value(1)).current;
  const floatAnimation = useRef(new Animated.Value(0)).current;
  const blinkAnimation = useRef(new Animated.Value(1)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(cardAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnimation, {
          toValue: -10,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnimation, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [floatAnimation]);

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
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const animatedCardStyle = {
    opacity: cardAnimation,
    transform: [
      {
        translateY: cardAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
      { translateY: floatAnimation }
    ],
  };

  const blinkStyle = {
    opacity: blinkAnimation,
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
        <View style={styles.mailpto}>
          <Entypo name='mail' size={width * 0.05} style={{ color: 'white' }} />
          <Text style={styles.mailText} onPress={() => Linking.openURL('mailto:ap.excise@gmail.com')}>ap.excise@gmail.com</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Image source={{ uri: 'https://www.improsys.in/images/complaint/complaint-management-software.webp' }} style={styles.image1} />
        </View>

        <View style={styles.c}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Animated.View style={styles.button}>
              <Animated.Text style={[styles.buttonText, blinkStyle]}>LOGIN</Animated.Text>
            </Animated.View>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <Animatable.View style={[styles.buttonContainer, { transform: [{ scale: pulseAnimation }]}]}>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('UserComplaint')}>
              <Image source={{ uri: 'https://www.improsys.in/images/complaint/complaint-management-software.png' }} style={styles.buttonImage} />
              <Text style={styles.buttonText1}>REGISTER YOUR COMPLAINT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Tracker')}>
              <Image source={{ uri: 'https://www.corposec.at/wp-content/uploads/2021/10/gps_symbol.jpg' }} style={styles.buttonImage} />
              <Text style={styles.buttonText1}>TRACK YOUR COMPLAINT</Text>
            </TouchableOpacity>


          </Animatable.View>
        </View>

        <GovLink />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Functions</Text>
          <View style={styles.blogContent}>
            <View style={styles.iconsview}>
              <Entypo name='dot-single' size={15} style={styles.icon}/>
              <Text style={styles.text1}>Regulating the Production, Manufacture, Possession, Transport, Import, Export, Purchase and Sale of Liquor (wholesale trade of liquor)</Text>
            </View>
         
            <View style={styles.iconsview}>
              <Entypo name='dot-single' size={15} style={styles.icon}/>
              <Text style={styles.text1}>Prevention of illicit traffic in Narcotic Drugs and Psychotropic substances under N. D. P. S. Act, 1985.</Text>
            </View>
            <View style={styles.iconsview}>
              <Entypo name='dot-single' size={15} style={styles.icon}/>
              <Text style={styles.text1}>Prevention of illicit traffic in Narcotic Drugs and Psychotropic substances under N. D. P. S. Act, 1985.</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Latest Blogs</Text>
          <ScrollView style={styles.blogScrollView}>
            <View style={styles.blogContent}>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
              <View style={styles.iconsview}>
                <FontAwesome5 name='hand-point-right' size={15} style={styles.icon}/>
                <Text style={styles.text1}>The Prohibition and Excise Department is a major revenue earning department of the State.</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <Animated.View style={[styles.card, animatedCardStyle]}>
          <View >
            <TouchableOpacity onPress={() => navigation.navigate('AgentDashboard')}>
              <Text style={styles.cardTitle}>AgentDashboard</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardContent}>
            View the status of your registered complaints. Keep track of the progress and updates.
          </Text>
        </Animated.View>

        <Animated.View style={[styles.card, animatedCardStyle]}>
          <View >
            <TouchableOpacity onPress={() => navigation.navigate('AgentComplaint')}>
              <Text style={styles.cardTitle}>Agent</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardContent}>
            Access the admin dashboard to manage and resolve complaints efficiently. Monitor the overall system performance.
          </Text>
          
        </Animated.View>

        <ApPfofile/>

        <Animated.View style={[styles.card, animatedCardStyle]}>
          <View >
           
              <Text style={styles.cardTitle}>About Us</Text>
           
          </View>
          <Text style={styles.cardContent}>
            The Excise Department of Andhra Pradesh is responsible for enforcing laws
            related to the production, distribution, and consumption of alcoholic beverages,
            tobacco products, and other controlled substances. Our mission is to ensure public safety,
            promote responsible consumption, and prevent illegal activities. <Text style={{ color: 'green' }} onPress={() => navigation.navigate('AboutUS')}>View More</Text>
          </Text>
        </Animated.View>
{/* <ImageList/> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Designed, Developed and Hosted by Ridhitek Pvt. Ltd.</Text>
          <Text style={styles.footerText}>e-Governance - Web Portal, Copyright © 2024 Andhra Pradesh Excise Department, India | All rights reserved.</Text>
          <Text style={styles.footerText}>Best viewed in Chrome v-87.0.4280.141, Microsoft Edge v-87.0.664.75, Firefox v-83.0 Browsers. Resolution: 1280x800 to 1920x1080</Text>
          <Text style={styles.footerText}>Version: 1.0.3 | Last Updated On 10-06-2024 18:35 PM</Text>
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity onPress={() => openLink('https://www.facebook.com')} style={styles.iconContainer}>
            <FontAwesome name="facebook" size={30} color="#3b5998" style={styles.iconS} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.twitter.com')} style={styles.iconContainer}>
            <FontAwesome name="twitter" size={30} color="#00acee" style={styles.iconS} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.youtube.com')} style={styles.iconContainer}>
            <FontAwesome name="youtube" size={30} color="#FF0000" style={styles.iconS} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.brand}>@Powered By <Text style={{ color: '#0E7452' }} onPress={() => openLink('https://www.ridhitek.com')}>Ridhitek</Text></Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
