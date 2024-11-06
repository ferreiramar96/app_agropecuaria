import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// Componente de tela para cadastro de clientes
const CadastroScreen = () => {
    // Definindo estados para os campos de entrada
    const [nome, setNome] = useState('');
    const [item, setItem] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');

    // Função para tratar o cadastro do cliente
    const handleCadastrar = () => {
        // Aqui, você pode adicionar lógica para salvar o cliente em um banco de dados ou API
        console.log(`Cadastrando: ${nome}, Item: ${item}, Valor: ${valor}, Data: ${data}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Clientes a Prazo</Text>
            
            {/* Campo para nome do cliente */}
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            {/* Campo para o item do cliente */}
            <TextInput
                placeholder="Item"
                value={item}
                onChangeText={setItem}
                style={styles.input}
            />

            {/* Campo para o valor do item */}
            <TextInput
                placeholder="Valor"
                value={valor}
                onChangeText={setValor}
                style={styles.input}
                keyboardType="numeric" // Define o teclado numérico
            />

            {/* Campo para a data */}
            <TextInput
                placeholder="Data"
                value={data}
                onChangeText={setData}
                style={styles.input}
            />

            {/* Botão para confirmar o cadastro */}
            <Button title="Cadastrar" onPress={handleCadastrar} />
        </View>
    );
};

// Estilos para os componentes da tela de cadastro
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

export default CadastroScreen;