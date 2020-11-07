/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */ 

const seconds = [
  { label: '1 second', value: 1 },
  { label: '2 seconds', value: 2 },
  { label: '3 seconds', value: 3 },
  { label: '4 seconds', value: 4 },
  { label: '5 seconds', value: 5 },
  { label: '6 seconds', value: 6 },
  { label: '7 seconds', value: 7 },
  { label: '8 seconds', value: 8 },
  { label: '9 seconds', value: 9 },
  { label: '10 seconds', value: 10 },
  { label: '11 seconds', value: 11 },
  { label: '12 seconds', value: 12 },
  { label: '13 seconds', value: 13 },
  { label: '14 seconds', value: 14 },
  { label: '15 seconds', value: 15 },
  { label: '16 seconds', value: 16 },
  { label: '17 seconds', value: 17 },
  { label: '18 seconds', value: 18 },
  { label: '19 seconds', value: 19 },
  { label: '20 seconds', value: 20 },
  { label: '21 seconds', value: 21 },
  { label: '22 seconds', value: 22 },
  { label: '23 seconds', value: 23 },
  { label: '24 seconds', value: 24 },
  { label: '25 seconds', value: 25 },
  { label: '26 seconds', value: 26 },
  { label: '27 seconds', value: 27 },
  { label: '28 seconds', value: 28 },
  { label: '29 seconds', value: 29 },
  { label: '30 seconds', value: 30 },
];

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
                    placeholder = {{}}
                    items={seconds}
                >
                    <View style={[styles.values]}>
                        <Text style={[styles.text]}>{time&&time.toFixed(2)}</Text>
                        <Text style={[styles.text,styles.small]}>Tap to Change</Text>
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
