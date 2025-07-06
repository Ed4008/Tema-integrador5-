import React, { useState } from 'react';
import { View, TextInput, Button, Text, Picker, StyleSheet } from 'react-native';

export default function ReportFormScreen({ navigation }) {
  const [form, setForm] = useState({
    tipo: '', faixaEtaria: '', periodo: '', descricao: ''
  });

  const handleSubmit = async () => {
    await fetch('https://SEU_BACKEND_URL/denuncia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text>Tipo:</Text>
      <TextInput style={styles.input} onChangeText={text => setForm({ ...form, tipo: text })} />

      <Text>Faixa Etária:</Text>
      <TextInput style={styles.input} onChangeText={text => setForm({ ...form, faixaEtaria: text })} />

      <Text>Período de Uso:</Text>
      <TextInput style={styles.input} onChangeText={text => setForm({ ...form, periodo: text })} />

      <Text>Descrição:</Text>
      <TextInput style={styles.input} multiline onChangeText={text => setForm({ ...form, descricao: text })} />

      <Button title="Enviar Denúncia" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});
