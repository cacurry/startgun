/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect,useRef } from 'react'
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
import { connect } from 'react-redux';
import { poll } from '../../utils/common';
import { play } from '../../utils/audio';
const Main = props => {
    const { time, random } = props;
    const [fill, setFill] = useState(0);
    const [ref,setRef]=useRef();
    useEffect(() => {
        setRef(poll(time, setFill));
    }, []);
    const progress = 100 * fill / time;
    const rem = time - fill;
    useEffect(() => {
        return;
        if (rem) {
            if (rem === time) {
                play('marks');
            }
        } else {
            play('go');
        }
    }, [fill]);
    const stop=()=>{
        if(ref.current instanceof Function){
            
        }
    }
    return (
        <View style={[styles.countdown]}>
            <View style={[styles.content]}>
                <TouchableHighlight style={[styles.time]}>
                    <View>
                        <Text style={[styles.text]}>Hold Time</Text>
                        {
                            random ?
                                <Image source={hold} style={[styles.holdImg]} /> :
                                <Text style={[styles.timer]}>{time}s</Text>
                        }
                    </View>
                </TouchableHighlight>
                <View style={[styles.progress]}>
                    <AnimatedCircularProgress
                        size={320}
                        width={20}
                        backgroundWidth={3}
                        fill={progress}
                        tintColor="#f1c857"
                        tintColorSecondary="#f1c857"
                        backgroundColor="#404a5b"
                        arcSweepAngle={280}
                        rotation={220}
                        lineCap={Platform.OS === 'ios' ? 'round' : 'butt'}
                    >
                        {
                            () => (
                                <Text style={[styles.fill]}>
                                    {
                                        rem ? rem === time ? 'on your mark' : rem : 'go'
                                    }
                                </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={[styles.position]}>
                        <Image source={go} style={[styles.image]} />
                    </View>
                </View>
                <TouchableHighlight style={[styles.button]}>
                    <Text style={[styles.buttonText]}>Stop</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const mapStateToProps = ({ ui }) => {
    const { time, random } = ui;
    return {
        time,
        random
    }
}
export default connect(mapStateToProps)(Main)
