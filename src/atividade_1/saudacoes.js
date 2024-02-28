import * as React from 'react';
import {Text, Image, StyleSheet, View } from 'react-native';

import logo from '../assets/002-1-react-native.png';

export default function Index() {
return (
<View style={styles.container}>
    <Image source={logo} style={{ width: '%100', height: '%15'}} />
    <Text style={styles.paragraph}>
        Exemplo 2
    </Text>
</View>
);
}