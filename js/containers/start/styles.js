import { StyleSheet, Dimensions, Platform } from 'react-native'

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#09172f',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        paddingTop: 100
    },
    startTrigger: {
        width: Dimensions.get('window').width - 10,
        height: Dimensions.get('window').width / 1.4 - 10,
        alignSelf: 'center',
    },
    values: {
        marginTop: 34
    },
    text: {
        textAlign: 'center',
        color: '#e0e0df',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
        textTransform: 'uppercase',
        fontFamily: 'Barlow-Regular',
    },
    small: {
        fontSize: 10
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