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
    View,
    Text,
    TouchableHighlight
} from 'react-native'

import Start from '../../../assets/start.svg'
import Setting from '../../../assets/setting.svg'

const Main = ({}) => {
    return (
        <View style={[styles.start]}>
            <View style={[styles.content]}>
                <TouchableHighlight>
                    <View style={[styles.startTrigger]}>
                        <Start
                            width={'100%'}
                            height={'100%'}
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={[styles.values]}>
                        <Text style={[styles.text]}>5.00</Text>
                        <Text style={[styles.text]}>Tap to Change</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={[styles.footer]}>
                <TouchableHighlight>
                    <View style={[styles.setting]}>
                        <Setting
                            width={'100%'}
                            height={'100%'}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Main
