import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import {store} from './store';
import AppNavigator from './navigation/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator /> 
    </Provider>
  );
}

const styles = StyleSheet.create({
});

