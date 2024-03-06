import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

//import Atv_1 from './src/atividade_1';
import Exemplo_3 from './src/ex_3';

export default function App() {
    return (
        <View style={styles.container}>
            <Exemplo_3 />
            <StatusBar style="auto" />      
        </View>
    );
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        padding: 18,
    },
 });