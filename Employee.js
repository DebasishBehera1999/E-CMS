import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import styles from './Employeecss'; 
const { width, height } = Dimensions.get('window');

export default function Employee() {
    const [current, setCurrent] = useState('Agent');
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === '' || password === '') {
            setEmailVerify(email === '');
            setPasswordValid(password === '');
        } else {
            switch (current) {
                case 'Agent':
                    navigation.navigate('AgentDashboard');
                    break;
                case 'DC':
                    navigation.navigate('DCdashboard');
                    break;
                case 'EHO':
                    navigation.navigate('EHO');
                    break;
                default:
                    break;
            }
        }
    };

    const Email = (em) => {
        setEmail(em);
        setEmailVerify(em === '');
    };

    const Password = (pwd) => {
        setPassword(pwd);
        setPasswordValid(pwd === '');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar />
                <Svg height={height / 2} width={width} viewBox={`0 0 ${width} ${height / 2}`} style={styles.svg}>
                    <Path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="rgb(57, 27, 112)" />
                    <Path d="M 0 50 C 150 150 330 -0 500 50 L 500 0 L 0 0" fill="#0E7452" opacity="0.8" />
                    <Path d="M 0 150 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#0E7452" opacity="0.5" />
                </Svg>
                <View style={styles.content}>
                    <View style={styles.imageview}>
                        <Image source={require('./assets/apgovlogo.png')} style={styles.image} />
                    </View>
                    <View style={styles.radioview}>
                        <RadioButtonGroup
                            containerStyle={styles.radioGroup}
                            selected={current}
                            onSelected={(value) => setCurrent(value)}
                            radioBackground="green"
                        >
                            <RadioButtonItem value="Agent" label="Agent" style={styles.radioButton} />
                            <RadioButtonItem value="DC" label="DC" style={styles.radioButton} />
                            <RadioButtonItem value="EHO" label="EHO" style={styles.radioButton} />
                        </RadioButtonGroup>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.text}>Employee Id :</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Employee id"
                            value={email}
                            onChangeText={Email}
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

