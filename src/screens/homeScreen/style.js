import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    buttonText: {
        fontSize: 22,
        color: '#4a4a4a',
    },
    roundButton: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10
    },
    goButton: {
        position: 'absolute',
        backgroundColor: '#1495ff',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        bottom: 110,
        left: Dimensions.get('window').width / 2 - 37

    },
    goText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',

    },
    balanceButton: {
        position: 'absolute',
        backgroundColor: '#1c1c1c',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        top: 10,
        left: Dimensions.get('window').width / 2 - 50 
    },
    balanceText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export default styles;