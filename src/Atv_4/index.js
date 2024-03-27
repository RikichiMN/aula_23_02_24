import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atv4() {

    const [isFocus, setIsFocus] = useState(false);

    function focusHandler() {
        setIsFocus(true);
    }

    function blurHandler() {
        setIsFocus(false);
    }

    const [resultado, setMensagem] = useState('Inserir nome e sobrenome!');
    const [mens1, setMens1] = useState('');
    const [mens2, setMens2] = useState('');
    const [mensTela, setMensTela] = useState('');

    function atualizaMensagemHandler() {
        setMensTela(mens1, mens2);
        setMens1('');
        setMens2('');
    } 


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>


            <Text style={styles.txtSaida}>{mensTela}</Text>
            <Text style={styles.titulo}>Nome</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setMens1(entrada)}
                value={mens1}
            />
            <Text style={styles.titulo}>Sobrenome</Text>
            <TextInput
                style={styles.txtEntrada}
                // placeholder='Outro texto' 
                onChangeText={(entrada) => setMens2(entrada)}
                value={mens2}
            />
            <Pressable
                onPress={() => atualizaMensagemHandler()}
                style={styles.botao}
            >
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </Pressable>
        </View>
    );
}