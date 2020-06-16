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
import { connect } from 'react-redux'
import { ActionNames } from '../../redux/actions'
import Start from '../../../assets/start.svg'
import Setting from '../../../assets/setting.svg'
import RNPickerSelect from 'react-native-picker-select'
import {} from '../../utils/audio'

const Main = props => {
    const {navigate, time, setTime} = props
    return (
        <View style={[styles.start]}>
            <View style={[styles.content]}>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => {
                        navigate('CountDown')
                    }}
                >
                    <View style={[styles.startTrigger]}>
                        <Start
                            width={'100%'}
                            height={'100%'}
                        />
                    </View>
                </TouchableHighlight>
                <RNPickerSelect
                    onValueChange={setTime}
                    items={Array(10).fill().map((x, i) => {
                        const sec = i + 5
                        return {
                            label: sec + ' seconds',
                            value: sec
                        }
                    })}
                >
                    <View style={[styles.values]}>
                        <Text style={[styles.text]}>{time.toFixed(2)}</Text>
                        <Text style={[styles.text]}>Tap to Change</Text>
                    </View>
                </RNPickerSelect>
            </View>
            <View style={[styles.footer]}>
                <TouchableHighlight underlayColor='transparent' onPress={() => {
                    navigate('Settings')
                }}>
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
const mapStateToProps = ({ui}) => {
    const {time} = ui
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
