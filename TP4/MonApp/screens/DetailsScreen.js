import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen({ route }) {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
          <Text style={styles.backText}>Retour</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={60} color="#FF9500" />
        </View>
        
        <Text style={styles.title}>📄 Page de Détails</Text>
        
        {route.params && (
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>ID Reçu</Text>
            <Text style={styles.infoValue}>{route.params.id}</Text>
          </View>
        )}
        
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Informations</Text>
          
          <View style={styles.detailItem}>
            <Ionicons name="calendar-outline" size={24} color="#5856D6" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>{new Date().toLocaleDateString('fr-FR')}</Text>
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={24} color="#34C759" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Heure</Text>
              <Text style={styles.detailValue}>{new Date().toLocaleTimeString('fr-FR')}</Text>
            </View>
          </View>
          
          <View style={styles.detailItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#007AFF" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Statut</Text>
              <Text style={[styles.detailValue, styles.statusActive]}>Actif</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E7',
  },
  header: {
    padding: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#007AFF',
    fontSize: 16,
    marginLeft: 5,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#FF9500',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  infoLabel: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.9,
  },
  infoValue: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  detailsSection: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailContent: {
    marginLeft: 15,
  },
  detailLabel: {
    fontSize: 12,
    color: '#888',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  statusActive: {
    color: '#34C759',
  },
});
