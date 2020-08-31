/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import styles from './styles'
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native'
import Slider from 'react-native-slider'
import Setting from '../../../assets/setting.svg'
import logo from '../../../assets/logo.png'
import close from '../../../assets/close.png'
import randomIcon from '../../../assets/random.png'
import { fields } from '../../utils/settings'
import { connect } from 'react-redux'
import { ActionNames } from '../../redux/actions'
import { getRandomTime } from '../../utils/common'

const Main = props => {
    const {ui, setValue, back} = props
    const {random} = ui
    const [current, setCurrent] = useState(-1)
    return (
        <View style={[styles.settings]}>
            <View style={[styles.content]}>
                <TouchableHighlight underlayColor='transparent' onPress={back} style={[styles.close]}>
                    <Image source={close} style={[styles.closeIcon]}/>
                </TouchableHighlight>
                <View style={[styles.logo]}>
                    <Image source={logo}/>
                </View>
                <Text style={[styles.welcome]}>Welcome to Startgun!</Text>
                <Text style={[styles.text]}>Startgun helps you train like a pro.</Text>
                <View style={[styles.actions]}>
                    {
                        fields.map((field, index) => {
                            const {title, key, type, min, max, options} = field
                            if (type === 'slider') {
                                return (
                                    <View style={[styles.action]} key={index}>
                                        <Text style={[styles.label]}>{title}</Text>
                                        <TouchableHighlight underlayColor='transparent' onPress={() => {
                                            if (current !== index) {
                                                setCurrent(index)
                                            } else {
                                                setCurrent(-1)
                                            }
                                        }}>
                                            <View style={[styles.button]}>
                                                <Text
                                                    style={[styles.buttonText]}>{current === index ? ui[key].toFixed(2) : 'Set'}</Text>
                                            </View>
                                        </TouchableHighlight>
                                        {
                                            current === index ?
                                                <View style={[styles.slider]}>
                                                    <Slider
                                                        minimumValue={min}
                                                        maximumValue={max}
                                                        minimumTrackTintColor={'#fff'}
                                                        maximumTrackTintColor={'#fff'}
                                                        thumbTintColor={'#706c4c'}
                                                        thumbStyle={{
                                                            borderWidth: 2,
                                                            borderColor: '#f2c957',
                                                            width: 14,
                                                            height: 14
                                                        }}
                                                        value={ui[key]}
                                                        onValueChange={value => {
                                                            setValue(key, value)
                                                            setValue('random', false)
                                                        }}
                                                        onSlidingComplete={() => {
                                                            setCurrent(-1)
                                                        }}
                                                    />
                                                    <View style={[styles.ranges]}>
                                                        <View>
                                                            <Text style={[styles.time]}>1.5</Text>
                                                            <Text style={[styles.unit]}>secs</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={[styles.time]}>2.5</Text>
                                                            <Text style={[styles.unit]}>secs</Text>
                                                        </View>
                                                    </View>
                                                </View> :
                                                <TouchableHighlight underlayColor='transparent' onPress={() => {
                                                    setValue('random', !random)
                                                    if (random) {
                                                        setValue('holdTime', getRandomTime())
                                                    }
                                                }}>
                                                    <View style={[styles.button, random && styles.yellowBtn]}>
                                                        <Text style={[styles.buttonText]}>Random</Text>
                                                        <Image source={randomIcon} style={[styles.randomIcon]}/>
                                                    </View>
                                                </TouchableHighlight>
                                        }
                                    </View>
                                )
                            }
                            if (type === 'select') {
                                return (
                                    <View key={index} style={[styles.action]}>
                                        <Text style={[styles.label]}>{title}</Text>
                                        {
                                            options.map((option, index) => {
                                                const {title, image} = option
                                                return (
                                                    <TouchableHighlight underlayColor='transparent' key={index}
                                                                        onPress={() => {
                                                                            if (current !== -1) {
                                                                                setCurrent(-1)
                                                                            }
                                                                            setValue(key, title)
                                                                        }}>
                                                        <View
                                                            style={[styles.button, ui[key] === title && styles.yellowBtn]}>
                                                            <Text style={[styles.buttonText]}>{title}</Text>
                                                            {
                                                                image &&
                                                                <Image source={image}
                                                                       style={[styles.icon]}/>
                                                            }
                                                        </View>
                                                    </TouchableHighlight>
                                                )
                                            })
                                        }
                                    </View>
                                )
                            }
                        })
                    }
                </View>
            </View>
            <View style={[styles.footer]}>

                <Text style={[styles.copyright]}>© Startgun 2020</Text>
            </View>
        </View>
    )
}
const mapStateToProps = ({ui}) => {
    return {
        ui
    }
}
const bindAction = dispatch => {
    return {
        setValue: (name, value) => {
            return dispatch({
                type: ActionNames.SET_UI_PROPERTY,
                payload: {
                    name,
                    value
                }
            })
        }
    }
}
export default connect(mapStateToProps, bindAction)(Main)
