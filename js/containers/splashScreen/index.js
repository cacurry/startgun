/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import styles from './styles'
import { View } from 'react-native'
import SplashSVG from '../../../assets/splash.svg'
import { connect } from 'react-redux';
import { ActionNames } from '../../redux/actions';
import { getData,clearData } from '../../utils/storage';
const Main = props => {
    const { setReducer, navigate } = props;
    const setData = async () => {
        await clearData();
        setReducer(await getData());
        navigate('Start');
    }
    useEffect(() => {
        setData();
    }, []);
    return (
        <View style={[styles.splash]}>
            <View style={[styles.content]}>
                <SplashSVG
                    preserveAspectRatio="xMidYMid slice"
                    width={'100%'}
                    height={'100%'}
                />
            </View>
        </View>
    )
}
const mapStateToProps = ({ }) => {
    return {

    }
}
const bindAction = dispatch => {
    return {
        setReducer: payload => {
            return dispatch({
                type: ActionNames.SET_UI_DATA,
                payload
            })
        }
    }
}
export default connect(mapStateToProps, bindAction)(Main);
