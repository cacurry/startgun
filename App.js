/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { combineReducers, createStore } from 'redux';
import { reducers } from './js/redux';
import { Provider } from 'react-redux';
import Splash from './js/containers/splashScreen';
import Settings from './js/containers/settings';
import Start from './js/containers/start';
import CountDown from './js/containers/countdown';
import { BackHandler } from 'react-native';
const screens = {
  Splash,
  Settings,
  Start,
  CountDown
};
const Navigator = props => {
  const [routes, setRoutes] = useState(['Splash']);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(() => {
      back();
      return true;
    });
    return function () {
      backHandler.remove();
    }
  }, []);
  const back = function () {
    setRoutes(routes => {
      if (routes.length) {
        routes.pop();
      }
      return routes;
    });
  }
  const navigate = current => {
    setRoutes(routes => {
      return [...routes, current]
    })
  }
  const screen = routes[routes.length - 1];
  const Component = screens[screen];
  return Component && (
    <Component
      navigate={navigate}
      back={back}
    />
  )
}
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={createStore(combineReducers(reducers))}>
      <Navigator />
    </Provider>
  );
};

export default App;
