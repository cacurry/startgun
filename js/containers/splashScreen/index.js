/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import SplashSVG from '../../../assets/splash.svg'

const Main = ({}) => {
    return (
        <View style={[styles.splash]}>
            <View style={[styles.content]}>
                <SplashSVG
                    preserveAspectRatio="xMidYMid slice"
                    width={'100%'}
                    height={'100%'}
                />
            </View>
        </View>
    )
}

export default Main
