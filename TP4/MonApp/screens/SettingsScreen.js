import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const SettingItem = ({ icon, iconColor, title, subtitle, hasSwitch, switchValue, onSwitchChange, hasArrow }) => (
    <TouchableOpacity style={styles.settingItem}>
      <View style={[styles.iconWrapper, { backgroundColor: iconColor + '20' }]}>
        <Ionicons name={icon} size={22} color={iconColor} />
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>
      {hasSwitch && (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: '#e0e0e0', true: '#34C759' }}
          thumbColor="#fff"
        />
      )}
      {hasArrow && (
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle" size={80} color="#007AFF" />
        </View>
        <Text style={styles.userName}>Utilisateur</Text>
        <Text style={styles.userEmail}>utilisateur@email.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Préférences</Text>
        
        <SettingItem 
          icon="notifications-outline"
          iconColor="#FF9500"
          title="Notifications"
          subtitle="Recevoir des alertes"
          hasSwitch
          switchValue={notificationsEnabled}
          onSwitchChange={setNotificationsEnabled}
        />
        
        <SettingItem 
          icon="moon-outline"
          iconColor="#5856D6"
          title="Mode sombre"
          subtitle="Thème de l'application"
          hasSwitch
          switchValue={darkModeEnabled}
          onSwitchChange={setDarkModeEnabled}
        />
        
        <SettingItem 
          icon="location-outline"
          iconColor="#34C759"
          title="Localisation"
          subtitle="Partager ma position"
          hasSwitch
          switchValue={locationEnabled}
          onSwitchChange={setLocationEnabled}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compte</Text>
        
        <SettingItem 
          icon="person-outline"
          iconColor="#007AFF"
          title="Profil"
          subtitle="Modifier mes informations"
          hasArrow
        />
        
        <SettingItem 
          icon="lock-closed-outline"
          iconColor="#FF3B30"
          title="Sécurité"
          subtitle="Mot de passe et confidentialité"
          hasArrow
        />
        
        <SettingItem 
          icon="help-circle-outline"
          iconColor="#5AC8FA"
          title="Aide"
          subtitle="FAQ et support"
          hasArrow
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>À propos</Text>
        
        <SettingItem 
          icon="information-circle-outline"
          iconColor="#8E8E93"
          title="Version"
          subtitle="1.0.0"
        />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatarContainer: {
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  section: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingContent: {
    flex: 1,
    marginLeft: 15,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 30,
    marginBottom: 50,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});
