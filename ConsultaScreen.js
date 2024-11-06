import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// Componente de tela para consulta de clientes
const ConsultaScreen = () => {
    // Estado para armazenar o nome do cliente para consulta
    const [nome, setNome] = useState('');

    // Função para tratar a consulta do cliente
    const handleConsultar = () => {
        // Aqui, você pode adicionar lógica para buscar o cliente em um banco de dados ou API
        console.log(`Consultando cliente: ${nome}`);
    };

    // Função para tratar a exclusão do cliente
    const handleExcluir = () => {
        // Lógica para excluir o cliente
        console.log(`Excluindo cliente: ${nome}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consultar Clientes</Text>
            
            {/* Campo de entrada para o nome do cliente */}
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            {/* Botão para consultar o cliente */}
            <Button title="Consultar" onPress={handleConsultar} />
            
            {/* Botão para excluir o cliente */}
            <Button title="Excluir" onPress={handleExcluir} />
        </View>
    );
};

// Estilos para os componentes da tela de consulta
const styles = StyleSheet.create({
    container: { 
        flex: 1, // Expande o container para preencher a tela
        padding: 20, // Adiciona espaçamento interno
        justifyContent: 'center' // Centraliza verticalmente
    },
    title: { 
        fontSize: 20, // Define o tamanho da fonte
        marginBottom: 20 // Espaço abaixo do título
    },
    input: { 
        borderWidth: 1, // Adiciona borda ao redor do campo
        borderColor: 'gray', // Cor da borda
        marginBottom: 10, // Espaço entre os campos
        padding: 10 // Espaçamento interno
    },
});

export default ConsultaScreen;