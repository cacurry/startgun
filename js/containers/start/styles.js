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
})

export default styles