import React, {useState} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Entypo} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

export default function HomeScreen() {

    const [isOnline, setIsOnline] = useState(false)

    const onGoPress = () => {
        setIsOnline(!isOnline)
    }

    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDEnv304ZlcDYlVAv6fWhEb38bwG29RnsY';

    return (
        <View>
            <MapView
                style={{height: Dimensions.get('window').height - 70, width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 28.450627,
                    longitude: -16.263045,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}
            >
                <MapViewDirections
                    lineDashPattern={[0]}
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={4}
                    strokeColor="black"
                />
            </MapView>

            <Pressable 
                onPress={() => console.log('balance')} 
                style={styles.balanceButton}
            >
                <Text style={styles.balanceText}>
                    <Text style={{color: 'green'}}>$</Text>
                    {' '}
                    0.00
                </Text>
            </Pressable>

            <Pressable 
                onPress={() => console.log('data')} 
                style={[styles.roundButton, {top: 10, left: 10}]}
            >
                <Entypo name="menu" size={24} color='#4a4a4a' />
            </Pressable>

            <Pressable 
                onPress={() => console.log('data')} 
                style={[styles.roundButton, {top: 10, right: 10}]}
            >
                <Entypo name="menu" size={24} color='#4a4a4a' />
            </Pressable>
            
            <Pressable 
                onPress={() => console.log('data')} 
                style={[styles.roundButton, {bottom: 110, left: 10}]}
            >
                <Entypo name="menu" size={24} color='#4a4a4a' />
            </Pressable>

            <Pressable 
                onPress={() => console.log('data')} 
                style={[styles.roundButton, {bottom: 110, right: 10}]}
            >
                <Entypo name="menu" size={24} color='#4a4a4a' />
            </Pressable>
            
            <Pressable 
                onPress={onGoPress} 
                style={styles.goButton}
            >
                <Text style={styles.goText}>{isOnline ? 'END': 'Go'}</Text>
            </Pressable>

            <LinearGradient
                // Button Linear Gradient
                colors={['#4c669f', '#3b5998']}>

                <View style={styles.buttonContainer}>
                    <Entypo name="menu" size={24} color='#4a4a4a' />
                    {isOnline 
                        ? <Text style={styles.buttonText}>You're Online</Text>
                        : <Text style={styles.buttonText}>You're Offline</Text>
                    }
                    
                    <Entypo name="menu" size={24} color='#4a4a4a' />
                </View>
            </LinearGradient>
        </View>
    )
}