import { StyleSheet, Dimensions, Platform } from 'react-native'

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#09172f',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
    },
    startTrigger: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 1.4,
        alignSelf: 'center'
    },
    values: {
        marginTop: 40
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
        textTransform: 'uppercase'
    },
    setting: {
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 40 : 60,
        left: 40,
        zIndex: 2
    }
})

export default styles