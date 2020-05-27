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
    Image,
    TouchableHighlight
} from 'react-native'
import Slider from 'react-native-slider'
import Setting from '../../../assets/setting.svg'
import logo from '../../../assets/logo.png'
import close from '../../../assets/close.png'
import whistle from '../../../assets/whistle.png'
import random from '../../../assets/random.png'
import voice from '../../../assets/voice.png'

const Main = ({}) => {
    return (
        <View style={[styles.settings]}>
            <View style={[styles.content]}>
                <TouchableHighlight style={[styles.close]}>
                    <Image source={close} style={[styles.closeIcon]}/>
                </TouchableHighlight>
                <View style={[styles.logo]}>
                    <Image source={logo}/>
                </View>
                <Text style={[styles.welcome]}>Welcome to Startgun!</Text>
                <Text style={[styles.text]}>Startgun helps you train like pro.</Text>
                <View style={[styles.actions]}>
                    {/*<View style={[styles.action]}>
                        <Text style={[styles.label]}>Hold Time</Text>
                        <TouchableHighlight>
                            <View style={[styles.button]}>
                                <Text style={[styles.buttonText]}>Set</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={[styles.button, styles.yellowBtn]}>
                                <Text style={[styles.buttonText]}>Random <Image source={random} style={[styles.icon]}/></Text>
                            </View>
                        </TouchableHighlight>
                    </View>*/}
                    <View style={[styles.action]}>
                        <Text style={[styles.label]}>Hold Time</Text>
                        <TouchableHighlight>
                            <View style={[styles.button]}>
                                <Text style={[styles.buttonText]}>.75 sec</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={[styles.slider]}>
                            <Slider
                                minimumValue={0.5}
                                maximumValue={2.5}
                                minimumTrackTintColor={'#fff'}
                                maximumTrackTintColor={'#fff'}
                                thumbTintColor={'#706c4c'}
                                thumbStyle={{borderWidth: 3, borderColor: '#f2c957'}}
                                value={1}
                            />
                            <View style={[styles.ranges]}>
                                <View style={[styles.range]}>
                                    <Text style={[styles.time]}>0.5</Text>
                                    <Text style={[styles.unit]}>sec</Text>
                                </View>
                                <View style={[styles.range]}>
                                    <Text style={[styles.time]}>2.0</Text>
                                    <Text style={[styles.unit]}>sec</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.action]}>
                        <Text style={[styles.label]}>Event</Text>
                        <TouchableHighlight>
                            <View style={[styles.button]}>
                                <Text style={[styles.buttonText]}>Distance</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={[styles.button, styles.yellowBtn]}>
                                <Text style={[styles.buttonText]}>Sprints</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.action]}>
                        <Text style={[styles.label]}>Sound</Text>
                        <TouchableHighlight>
                            <View style={[styles.button]}>
                                <Text style={[styles.buttonText]}>Whistle <Image source={whistle}/></Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={[styles.button, styles.yellowBtn]}>
                                <Text style={[styles.buttonText]}>Voice <Image source={voice}
                                                                               style={[styles.icon]}/></Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={[styles.footer]}>
                <TouchableHighlight>
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

export default Main
