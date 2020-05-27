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
import { connect } from 'react-redux';
import { ActionNames } from '../../redux/actions';
import Start from '../../../assets/start.svg'
import Setting from '../../../assets/setting.svg'
import { } from '../../utils/audio';
const Main = props => {
    const { navigate, time, setTime } = props;
    return (
        <View style={[styles.start]}>
            <View style={[styles.content]}>
                <TouchableHighlight
                    onPress={() => {
                        navigate('CountDown');
                    }}
                >
                    <View style={[styles.startTrigger]}>
                        <Start
                            width={'100%'}
                            height={'100%'}
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={[styles.values]}>
                        <Text style={[styles.text]}>{time.toFixed(2)}</Text>
                        <Text style={[styles.text]}>Tap to Change</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={[styles.footer]}>
                <TouchableHighlight onPress={() => {
                    console.log('Settings pressed');
                }}>
                    <View style={[styles.setting]}>
                        <Setting
                            onPress={() => {
                                console.log('on pressed');
                            }}
                            width={'100%'}
                            height={'100%'}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const mapStateToProps = ({ ui }) => {
    const { time } = ui;
    return {
        time
    }
}
const bindAction = dispatch => {
    return {
        setTime: value => {
            return dispatch({
                type: ActionNames.SET_UI_PROPERTY,
                payload: {
                    name: 'time',
                    value
                }
            })
        }
    }
}
export default connect(mapStateToProps, bindAction)(Main)
