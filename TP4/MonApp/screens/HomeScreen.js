import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="home-outline" size={80} color="#007AFF" />
        <Text style={styles.title}>🏠 Bienvenue !</Text>
        <Text style={styles.subtitle}>Ceci est l'écran d'accueil de votre application</Text>
      </View>
      
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Ionicons name="information-circle-outline" size={40} color="#5856D6" />
          <Text style={styles.cardTitle}>Découvrez</Text>
          <Text style={styles.cardText}>Explorez les fonctionnalités de notre application</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Details', { id: 42 })}
      >
        <Text style={styles.buttonText}>Voir les détails</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5856D6',
    marginTop: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
