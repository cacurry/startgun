import { StyleSheet, Dimensions, Platform } from 'react-native'
import randomIcon from '../../../assets/random.png'

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#09172f',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        padding: 30,
        paddingTop: 0,
        paddingBottom: 50
    },
    close: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 30 : 20,
        right: 20
    },
    closeIcon: {
        width: 38,
        height: 38,
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
        paddingBottom: 13,
        marginBottom: 13,
        paddingRight: 8,
    },
    label: {
        width: 95,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
    },
    slider: {
        width: 90
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
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        width: Platform.OS === 'ios' ? 90 : 100,
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