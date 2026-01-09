import React, { useContext } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthProvider, AuthContext } from './context/AuthContext';

function MainApp() {
  const { user, loading, logout } = useContext(AuthContext);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Connecté : {user.email || user.uid}</Text>
          <Button title="Se déconnecter" onPress={logout} />
        </>
      ) : (
        <Text style={styles.title}>Utilisateur non connecté (implémentez login)</Text>
      )}
    </View>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
  },
});
