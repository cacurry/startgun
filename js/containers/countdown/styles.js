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
        top: Platform.OS === 'ios' ? 70 : 30,
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
        fontSize: 14,
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
        paddingTop: 180
    },
    fill: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 45,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    msg: {
        fontSize: 35
    },
    position: {
        marginTop: -65
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: '#666d79',
        width: 108,
        height: 27,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 100
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: '500',
        lineHeight: 20
    }

})

export default styles