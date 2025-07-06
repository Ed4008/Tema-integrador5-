import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleAnonymousLogin = () => {
    navigation.replace('Formulário de Denúncia');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Anônimo</Text>
      <Button title="Entrar" onPress={handleAnonymousLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
