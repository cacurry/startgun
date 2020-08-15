import { StyleSheet, Dimensions, Platform } from 'react-native'
import randomIcon from '../../../assets/random.png'

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#09172f',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        padding: 30
    },
    close: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 20,
        right: 20
    },
    closeIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    logo: {
        marginBottom: 20
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        marginBottom: 15
    },
    text: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 40
    },
    actions: {},
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#5a616d',
        paddingBottom: 15,
        marginBottom: 15
    },
    label: {
        width: 85,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
    },
    slider: {
        width: 110
    },
    ranges: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -12
    },
    time: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
    unit: {
        color: '#586372',
        marginTop: -2,
        fontSize: 12,
    },
    button: {
        borderWidth: 2,
        borderColor: '#fff',
        padding: 10,
        width: 90,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#525c6d',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
        textTransform: 'capitalize',
        /*marginTop: Platform.OS === 'ios' ? 3 : 1*/
    },
    icon: {
        /*marginTop: -2*/
        marginLeft: 2
    },
    randomIcon: {
        resizeMode: 'contain',
        marginLeft: 2,
        marginBottom: -3
    },
    yellowBtn: {
        borderColor: '#f1c857',
        backgroundColor: '#4e4c39'
    },
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 40 : 60,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    setting: {
        width: 30,
        height: 30
    },
    copyright: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#999',
        marginTop: 8
    }
})

export default styles