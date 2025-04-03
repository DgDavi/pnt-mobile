import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("")
  const [isName, setIsName] = useState(false)
  return (
    <View style={styles.container}>
      <Text>OLá! {isName ? name : ''}</Text>
      <TextInput placeholder='Digite seu nome aqui:' value={name} onChangeText={(text) => setName(text)}/>
      <Button title='Name' onPress={() => setIsName(true)}></Button>
      <Button title='Limpar' onPress={() => {
        setIsName(false)
        setName("")
      }}></Button>
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
});
