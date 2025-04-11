import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  const limparTexto = () => {
    setNome('');
  };

  return (
    <View style={styles.container}>
      <Text>Digite seu nome:</Text>

      <Image
      source={{ uri: 'https://sportrecife.com.br/wp-content/uploads/2024/06/image19.png' }}
      style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }}
      />
    

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />

      <Text>Olá, {nome}</Text>

      <View style={styles.botao}>
        <Button title="Limpar" onPress={limparTexto} color="#03bb85" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  botao: {
    marginTop: 20,
    width: '60%',
  },
});
