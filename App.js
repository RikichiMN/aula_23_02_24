//import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Index from '.components/Index';
//import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<Index />
</View>
);
}

//import Props from './src/ex_2';

//export default function App() {
//  return (
//    <View style={styles.container}>
//    <Props mensagem={'Sistema react-native'}/> 
//    <Props mensagem={'Hoje está calor'}/>     
//    <StatusBar style="auto" />
//    </View>
//  );
//}


