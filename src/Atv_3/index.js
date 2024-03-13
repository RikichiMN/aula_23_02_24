import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atv_3 () {

const [numero, setNumero] = useState(0);

    function Ola (nome) {
        alert(`Olá, mundo!`);
    }
    
    function incremento() {
        const inc = numero + 1;
        setNumero(inc);
        //console.log(numero);
    }

    function decrescimo() {
        const inc = numero - 1;
        setNumero(inc);
    }

    function zerar () {
        const inc = numero - numero;
        setNumero(inc);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>

            <TouchableOpacity 
            
            style={styles.botao} 
            onPress={() => Ola('Mundo')}
            >
            <Text style={styles.txtBotao}>Diga "Olá, mundo!'</Text>
        </TouchableOpacity>

        <View style={styles.containerB}>
            <Text style={styles.titulo}> {numero}</Text>
        

        <TouchableOpacity
         style={styles.botaoP} 
         onPress={() => incremento()}
        >
        <Text style={styles.txtBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.botaoM} 
         onPress={() => decrescimo()}
        >
        <Text style={styles.txtBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.botaoZ} 
         onPress={() => zerar()}
        >
        <Text style={styles.txtBotao}>Zerar</Text>
        </TouchableOpacity>
        </View>
        </View>



        

    
    );
}