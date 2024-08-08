import React, { useRef, useEffect } from 'react';
import {  Text, View, TouchableOpacity, Linking, Dimensions, Animated } from 'react-native';
import styles from './Govcss'; 
const { width, height } = Dimensions.get('window');

const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

const GovLink = () => {
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

    const createScrollAnimation = () => {
        const scrollX = new Animated.Value(0);
        Animated.loop(
            Animated.timing(scrollX, {
                toValue: -width,
                duration: 9000,
                useNativeDriver: true,
            })
        ).start();
        return scrollX;
    };

    const scrollX1 = createScrollAnimation();
    const scrollX2 = createScrollAnimation();
    const scrollX3 = createScrollAnimation();
    const scrollX4 = createScrollAnimation();

    const blinkStyle = {
        opacity: blinkAnimation,
    };

    return (
        <View>
        


            <View style={styles.card}>
                <Animated.View style={[styles.cardTitleContaine]}>
                    < Animated.Text style={[styles.cardTitle,]}> Gov. Links</Animated.Text>
                </Animated.View>
                <TouchableOpacity onPress={() => openLink('https://www.india.gov.in/')}>
                    <Animated.Text style={[styles.link, blinkStyle]}>
                        Government of India
                    </Animated.Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.cbic.gov.in/')}>
                    <Animated.Text style={[styles.link, blinkStyle]}>
                        Central Board of Indirect Taxes and Customs
                    </Animated.Text>
                </TouchableOpacity>
             
                 <TouchableOpacity onPress={() => openLink('https://excise.ap.gov.in/')}>
                    <Animated.Text style={[styles.link,blinkStyle]}>
                        Andhra Pradesh Excise Department
                    </Animated.Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.ap.gov.in/')}>
                    <Animated.Text style={[styles.link,blinkStyle]}>
                        Government of Andhra Pradesh
                    </Animated.Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default GovLink;

