/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useRef } from 'react'
import styles from './styles'
import {
    View, Text, TouchableHighlight, Image, Platform
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import hold from '../../../assets/hold.png';
import go from '../../../assets/go.png';
import { connect } from 'react-redux';
import { play } from '../../utils/audio';
const Main = props => {
    const { time, random } = props;
    const [progress, setProgress] = useState(0);
    const [isPolling, setPolling] = useState(false);
    const ref = useRef(null);
    const startPolling = () => {
        ref.current = setInterval(() => {
            setProgress(progress => {
                if (progress === time) {
                    return progress;
                } else {
                    return progress + 1;
                }
            });
        }, 1000);
    }
    const stopPolling = () => {
        if (ref.current) {
            clearInterval(ref.current);
        }
        ref.current = null;
    }
    const togglePolling = () => {
        if (isPolling) {
            stopPolling();
        } else {
            startPolling();
        }
        setPolling(polling => !polling);
    }
    useEffect(() => {
        togglePolling();
    }, []);
    const fill = progress * (100 / time);
    const remTime = time - progress;
    let msg = remTime;
    if (remTime === time) {
        msg = 'On Your Marks'
        play('marks');
    }
    if (!remTime) {
        play('go');
        msg = 'Go';
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
                        fill={fill}
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
                                        msg
                                    }
                                </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={[styles.position]}>
                        <Image source={go} style={[styles.image]} />
                    </View>
                </View>
                <TouchableHighlight onPress={togglePolling} style={[styles.button]}>
                    <Text style={[styles.buttonText]}>{isPolling ? 'Stop' : 'Resume'}</Text>
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
