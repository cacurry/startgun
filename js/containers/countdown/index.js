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
    View, Text, TouchableHighlight, Image, Platform
} from 'react-native'
import { Circle } from 'react-native-svg'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import ready from '../../../assets/ready.png'
import set from '../../../assets/set.png'
import go from '../../../assets/go.png'
import hold from '../../../assets/hold.png'

const Main = ({}) => {
    return (
        <View style={[styles.countdown]}>
            <View style={[styles.content]}>
                <TouchableHighlight style={[styles.time]}>
                    <View>
                        <Text style={[styles.text]}>Hold Time</Text>
                        <Text style={[styles.timer]}>1.74s</Text>
                       {/* <Image source={hold} style={[styles.holdImg]}/>*/}
                    </View>
                </TouchableHighlight>
                <View style={[styles.progress]}>
                    <AnimatedCircularProgress
                        size={320}
                        width={20}
                        backgroundWidth={3}
                        fill={100}
                        tintColor="#f1c857"
                        tintColorSecondary="#f1c857"
                        backgroundColor="#404a5b"
                        arcSweepAngle={280}
                        rotation={220}
                        lineCap={Platform.OS === 'ios' ? 'round' : 'butt'}
                    >
                        {
                            (fill) => (
                                <Text style={[styles.fill]}>
                                    go
                                </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={[styles.position]}>
                        <Image source={go} style={[styles.image]}/>
                    </View>
                </View>
                <TouchableHighlight style={[styles.button]}>
                    <Text style={[styles.buttonText]}>Stop</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Main
