//import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

import Atv_1 from './src/atividade_1';

export default function App() {
    return (
        <View style={styles.container}>
            <Atv_1 />         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundcolor: '#E3F2FD',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
      color: '#1565C0',
    },
    image: {
      width: '90%',
      height: '15%',
      margin: 10,
    },
}); 



