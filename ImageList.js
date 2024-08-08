import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Imagecss'; 
const { width } = Dimensions.get('window');

const images = [
  { src: require('./assets/mi.png'), url: 'https://www.makeinindia.com/' },
  { src: require('./assets/skill.png'), url: 'https://skilluniverse.apssdc.in/' },
  { src: require('./assets/di.png'), url: 'https://www.digitalindia.gov.in/' },
  { src: require('./assets/election.png'), url:  'https://eci.gov.in/'  },
  { src: require('./assets/eita.png'), url: 'https://apeita.ap.gov.in/' },
  { src: require('./assets/images.jpeg'), url: 'https://e-pragati.in/' },
  { src: require('./assets/tech.png'), url: 'https://apts.gov.in/' },
];

const ImageList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + direction;
        if (nextIndex >= images.length) {
          nextIndex = images.length - 1;
          setDirection(-1);
        } else if (nextIndex < 0) {
          nextIndex = 0;
          setDirection(1);
        }
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [direction]);

  const onScrollEnd = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = images.length - 1;
    }
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
  };

  const handlePrev = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = 0;
    }
    setCurrentIndex(prevIndex);
    flatListRef.current.scrollToIndex({ animated: true, index: prevIndex });
  };

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer} onPress={() => openLink(item.url)}>
            <Image source={item.src} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.leftArrow} onPress={handlePrev}>
        <Entypo name="chevron-left" size={30} color="lightgray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightArrow} onPress={handleNext}>
        <Entypo name="chevron-right" size={30} color="lightgray" />
      </TouchableOpacity>
    </View>
  );
};


export default ImageList;


