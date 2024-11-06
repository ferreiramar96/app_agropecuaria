import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './screens/CadastroScreen';
import ConsultaScreen from './screens/ConsultaScreen';

// Criando um stack navigator para gerenciar a navegação entre as telas
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        // NavigationContainer é o container principal para navegação no React Navigation
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cadastro">
                {/* Tela de Cadastro */}
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                
                {/* Tela de Consulta */}
                <Stack.Screen name="Consulta" component={ConsultaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;