import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

//import Atv_1 from './src/atividade_1';
//import Exemplo_3 from './src/ex_3';
//import Exemplo_3 from './src/Atv_3';
//import Exemplo4 from './src/ex_4';
//import Exemplo4 from './src/ex_4prof';
import Atv4 from './src/Atv_4';

export default function App() {
    return (
        <View style={styles.container}>
            <Atv4/>
            <StatusBar style="auto" />      
        </View>
    );
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        padding: 20,
    },
 });