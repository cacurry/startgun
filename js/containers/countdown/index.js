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
import {delay} from '../../utils/common';
import { play } from '../../utils/audio';
let interval;
let timeout;
const Main = props => {
    const { time, random, holdTime } = props;
    const [progress, setProgress] = useState(0);
    const [isPolling, setPolling] = useState(false);
    const [isFinished, setFinish] = useState(false);
    const startPolling = () => {
        interval = setInterval(() => {
            setProgress(progress => {
                if (progress === time) {
                    delay(holdTime).then(()=>{
                        setFinish(true);
                    });
                    return progress+1;
                }
                return progress + 1;
            });
        }, 1000);
    }
    const stopPolling = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }
    const togglePolling = () => {
        setPolling(isPolling => !isPolling);
    }
    const click = () => {
        if (isFinished) {
            setFinish(false);
            setProgress(0);
        } else {
            togglePolling();
        }
    };
    useEffect(() => {
        if (isPolling) {
            startPolling();
        } else {
            stopPolling();
        }
    }, [isPolling]);
    useEffect(() => {
        if (isFinished) {
            togglePolling();
        }
    }, [isFinished]);
    useEffect(() => {
        togglePolling();
        return () => {
            interval = null;
        }
    }, []);
    const fill = progress * (100 / time);
    const remTime = time - progress;
    let msg = remTime;
    if (remTime === time) {
        msg = 'On Your Marks'
        play('marks');
    }
    if (!remTime) {
        msg = 'Get Set';
        play('set');
    }
    if (remTime<0) {
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
                <TouchableHighlight onPress={click} style={[styles.button]}>
                    <Text style={[styles.buttonText]}>{isPolling ? 'Stop' : isFinished ? 'Reset' : 'Resume'}</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const mapStateToProps = ({ ui }) => {
    const { time, random, holdTime } = ui;
    return {
        time,
        random,
        holdTime
    }
}
export default connect(mapStateToProps)(Main)
