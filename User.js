import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Dimensions,Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';
import styles from './Usercss'; 
const { width, height } = Dimensions.get('window');

export default function User({ navigation }) {
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (email === '' || password === '') {
            setEmailVerify(true);
            setPasswordValid(true);
        } else {
            navigation.navigate('Home');
        }
    };

    const Email = (em) => {
        setEmail(em);
        if (em === '') {
            setEmailVerify(true);
        } else {
            setEmailVerify(false);
        }
    };

    const Password = (em) => {
        setPassword(em);
        if (em === '') {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    };

    return (
   <View style={styles.container}>  
   <ScrollView>
            <StatusBar />
            <Svg height={height} width={width} viewBox={`0 0 ${width} ${height}`} style={styles.svg}>
                <Path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="rgb(57, 27, 112)" />
                <Path d="M 0 50 C 150 150 330 -0 500 50 L 500 0 L 0 0" fill="#0E7452" opacity="0.8" />
                <Path d="M 0 150 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#0E7452" opacity="0.5" />
            </Svg>
         <View style={[styles.content,styles.car]}>
                <View style={styles.imageview}>
                    <Image source={require('./assets/apgovlogo.png')} style={styles.image} />
                </View>
                <View style={styles.form}>
                    <Text style={styles.text}>Complaint Id :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="complaint id"
                        value={email}
                        onChangeText={Email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {emailVerify ? <Text style={styles.err}>Enter valid email address</Text> : null}
                    <Text style={styles.text}>Password :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={Password}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    {/* <Ionicons size={20} style={styles.icon} name={showPassword ? 'eye-off' : 'eye'} onPress={() => { setShowPassword(!showPassword); }} /> */}
                    {passwordValid ? <Text style={styles.err}>Enter Valid Password</Text> : null}
                    <TouchableOpacity style={styles.touch} onPress={handleLogin}>
                        <Text style={styles.t1}>Login</Text>
                    </TouchableOpacity>
                </View>
          </View>
          </ScrollView>
       </View>
    );
}



