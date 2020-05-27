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
import { fields } from '../../utils/settings';
import { connect } from 'react-redux';
import { ActionNames } from '../../redux/actions';
const Main = props => {
    const { ui, setValue,navigate } = props;
    const {random}=ui;
    const [current, setCurrent] = useState(-1);
    return (
        <View style={[styles.settings]}>
            <View style={[styles.content]}>
                <TouchableHighlight style={[styles.close]}>
                    <Image source={close} style={[styles.closeIcon]} />
                </TouchableHighlight>
                <View style={[styles.logo]}>
                    <Image source={logo} />
                </View>
                <Text style={[styles.welcome]}>Welcome to Startgun!</Text>
                <Text style={[styles.text]}>Startgun helps you train like pro.</Text>
                <View style={[styles.actions]}>
                    {
                        fields.map((field, index) => {
                            const { title, key, type, min, max, options } = field;
                            if (type === 'slider') {
                                return (
                                    <View style={[styles.action]} key={index}>
                                        <Text style={[styles.label]}>{title}</Text>
                                        <TouchableHighlight onPress={() => {
                                            if (current !== index) {
                                                setCurrent(index);
                                            }
                                        }}>
                                            <View style={[styles.button]}>
                                                <Text style={[styles.buttonText]}>{current === index ? ui[key].toFixed(2) : 'Set'}</Text>
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
                                                        thumbStyle={{ borderWidth: 3, borderColor: '#f2c957' }}
                                                        value={0.75}
                                                        onValueChange={value => {
                                                            setValue(key, value);
                                                        }}
                                                        onSlidingComplete={() => {
                                                            setCurrent(-1);
                                                        }}
                                                    />
                                                </View> :
                                                <TouchableHighlight onPress={() => {
                                                    setValue('random', !random);
                                                }}>
                                                    <View style={[styles.button, random&&styles.yellowBtn]}>
                                                        <Text style={[styles.buttonText]}>Random</Text>
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
                                                const { title, image } = option;
                                                return (
                                                    <TouchableHighlight key={index} onPress={() => {
                                                        setValue(key, title);
                                                    }}>
                                                        <View style={[styles.button, ui[key] === title && styles.yellowBtn]}>
                                                            <Text style={[styles.buttonText]}>{title}
                                                                {
                                                                    image &&
                                                                    <Image source={image}
                                                                        style={[styles.icon]} />
                                                                }
                                                            </Text>
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
                <TouchableHighlight
                    onPress={()=>{
                        navigate('Start');
                    }}
                >
                    <View style={[styles.setting]}>
                        <Setting
                            width={'100%'}
                            height={'100%'}
                        />
                    </View>
                </TouchableHighlight>
                <Text style={[styles.copyright]}>© Startgun 2020</Text>
            </View>
        </View>
    )
}
const mapStateToProps = ({ ui }) => {
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
export default connect(mapStateToProps, bindAction)(Main);
