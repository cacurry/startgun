/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Splash from './js/containers/splashScreen'
import Start from './js/containers/start'
import Settings from './js/containers/settings'
import Countdown from './js/containers/countdown'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
