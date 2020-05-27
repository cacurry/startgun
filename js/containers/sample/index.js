/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import styles from './styles'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native'

const Main = ({}) => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.body}>
                        <Text>Sample</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Main
