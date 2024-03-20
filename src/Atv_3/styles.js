import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        width: '50%',
        alignItems: 'center',
        padding: 10,
        margin: 100,
        },
    containerB: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderWidth: 10,
        margin: 100,
        },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 8,
        marginBottom: 20,
    },
    titulob: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 8,
        marginBottom: 20,
        alignItems: 'center',
    },
    botao: {
        width: '70%',
        padding: 16,
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 18,
        
        },
    botaoP: {
        width: '30%',
        padding: 16,
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 18,
        },
    botaoM: {
        width: '30%',
        padding: 16,
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 20,
        },
    botaoZ: {
        width: '70%',
        padding: 16,
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 18,
        borderRadius: 20,
                            },
    txtBotao: {
        color: '#f5f5f5',
        fontSize: 20,
    },
});

export default styles;