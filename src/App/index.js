/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StackNavigator
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import PredictScreen from './screens/PredictScreen'

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Prediction: { scren: PredictScreen },
})