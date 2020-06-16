/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react'
import styles from './styles'
import {
    View, Text, TouchableHighlight, Image, Platform
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import hold from '../../../assets/hold.png';
import go from '../../../assets/go.png';
import Setting from '../../../assets/setting.svg'
import ready from '../../../assets/ready.png';
import set from '../../../assets/set.png';
import { connect } from 'react-redux';
import { delay } from '../../utils/common';
import { play } from '../../utils/audio';
const DISTANCE = 'DISTANCE';
const SPRINTS = 'SPRINTS';
let interval;
let timeout;
const Main = props => {
    const { time, random, holdTime, event, sound,back } = props;
    const [isPolling, setPolling] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (isPolling) {
            startPolling();
        } else {
            stopPolling();
        }
    }, [isPolling]);
    const startPolling = () => {
        if (!progress && event === SPRINTS) {
            setMessage('On Your Marks');
        }
        interval = setInterval(() => {
            setProgress(progress => {
                progress = progress + (100 / time);
                if (progress === 100) {
                    if (event === DISTANCE) {
                        setMessage('On Your Marks');
                    }
                    if (event === SPRINTS) {
                        setMessage('Get Set');
                        timeout = delay(holdTime, () => {
                            setMessage('Go');
                            timeout = '';
                        });
                    }
                    setPolling(false);
                } else {
                    if (event === SPRINTS) {
                        if (progress > 0) {
                            setMessage('');
                        }
                    }
                }
                return progress;
            });
        }, 1000);
    }
    const onFinish = () => {
        setProgress(0);
        setMessage('');
        setPolling(false);
    }
    const stopPolling = (isUnMount) => {
        if (interval) {
            clearInterval(interval);
            interval = '';
        }
        if (isUnMount && timeout) {
            clearTimeout(timeout);
            timeout = '';
        }
    }
    useEffect(() => {
        setPolling(true);
        return () => {
            stopPolling(true);
        }
    }, []);
    let source = ready;
    useEffect(() => {
        switch (message) {
            case 'On Your Marks': {
                play('marks').then(() => {
                    if (event === DISTANCE) {
                        setMessage('Go');
                    }
                });
                break;
            }
            case 'Get Set': {
                play('set');
                break;
            }
            case 'Go': {
                if (sound === 'Whistle') {
                    play('whistle').then(onFinish);
                } else {
                    play('go').then(onFinish);
                }
                break;
            }
        }
    }, [message]);
    switch (message) {
        case 'On Your Marks': {
            break;
        }
        case 'Get Set': {
            source = set;
            break;
        }
        case 'Go': {
            source = go;
            break;
        }
    }
    const click = () => {
        if (timeout) {
            return;
        }
        setPolling(polling => !polling);
    }
    const remTime = time - (progress * time) / 100;
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
                                        message || (parseInt(remTime))
                                    }
                                </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={[styles.position]}>
                        <Image source={source} style={[styles.image]} />
                    </View>
                </View>
                <TouchableHighlight onPress={click} style={[styles.button]}>
                    <Text style={[styles.buttonText]}>{isPolling ? 'Stop' : 'Start'}</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const mapStateToProps = ({ ui }) => {
    const { time, random, holdTime, event, sound } = ui;
    return {
        time,
        random,
        holdTime,
        event,
        sound
    }
}
export default connect(mapStateToProps)(Main)
