import { StyleSheet, Dimensions, Platform } from 'react-native'

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#09172f',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
    },
    time: {
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        alignItems: 'center',
        top: Platform.OS === 'ios' ? 80 : 30,
    },
    back: {
        position: 'absolute',
        width: '100%',
        zIndex: 4,
        left: 20,
        top: Platform.OS === 'ios' ? 70 : 25
    },
    backIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    text: {
        color: '#ced0d6',
        fontSize: 18,
        textTransform: 'uppercase',
    },
    timer: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 4
    },
    holdImg: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    progress: {
        alignItems: 'center',
        paddingTop: 60
    },
    fill: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 45,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    position: {
        marginTop: -100
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: '#666d79',
        width: 180,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 50
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '500'
    }

})

export default styles