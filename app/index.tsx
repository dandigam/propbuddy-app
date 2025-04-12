import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import Login from '@/components/Login';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            return router.replace('/login/loginScreen'); 
        }, 10000);

        return () => clearTimeout(timer); 
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://img.icons8.com/ios-filled/100/ffffff/home.png' }} // Replace with your house icon URL or local asset
                style={styles.icon}
            />
            <Text style={styles.text}>PROP Buddy</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    icon: {
        width: 100,
        height: 100,
    },
});

export default SplashScreen;