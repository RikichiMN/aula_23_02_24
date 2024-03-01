import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 

import Saudacoes from './saudacoes';

import logo from '../../assets/002-1-react-native.png'; 

import styles from './styles';

export default function Atv_1() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.paragraph}>
                Exemplo 2
            </Text>

            <Saudacoes name='Mario' />
            <Saudacoes name='Maria' />
            <Saudacoes name='Bruna' />
            <Saudacoes name='Bruno' />
        </View>
    );
}

