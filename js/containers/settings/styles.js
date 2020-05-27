import { StyleSheet, Dimensions, Platform } from 'react-native'

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
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    logo: {
        marginBottom: 20
    },
    welcome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        marginBottom: 15
    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20
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
        width: 80,
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
        justifyContent: 'space-between'
    },
    time: {
        color: '#fff',
        fontSize: 15,
    },
    unit: {
        color: '#586372',
        marginTop: -2
    },
    button: {
        borderWidth: 2,
        borderColor: '#fff',
        padding: 10,
        width: 110,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#525c6d',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        marginTop: Platform.OS === 'ios' ? 3 : 1
    },
    icon: {
        marginTop: -2
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