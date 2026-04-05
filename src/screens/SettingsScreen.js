import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Switch,
  Linking,
} from 'react-native';
import { colors } from '../theme/colors';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [sound, setSound] = useState(true);
  const [notifications, setNotifications] = useState(false);

  const LINKS = [
    { label: '🌐 Website', url: 'https://www.etchimaths.com' },
    { label: '📘 Facebook', url: 'https://www.facebook.com/Etchimaths' },
    { label: '▶️ YouTube', url: 'https://www.youtube.com/channel/UCk9HNxH9fCmUHw0ze3677BA' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Preferences */}
        <Text style={styles.groupLabel}>PREFERENCES</Text>
        <View style={styles.group}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>🌙  Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ true: colors.accent, false: colors.border }}
              thumbColor={darkMode ? colors.gold : colors.white}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>🔊  Sound Effects</Text>
            <Switch
              value={sound}
              onValueChange={setSound}
              trackColor={{ true: colors.accent, false: colors.border }}
              thumbColor={sound ? colors.gold : colors.white}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>🔔  Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ true: colors.accent, false: colors.border }}
              thumbColor={notifications ? colors.gold : colors.white}
            />
          </View>
        </View>

        {/* Connect */}
        <Text style={styles.groupLabel}>CONNECT WITH US</Text>
        <View style={styles.group}>
          {LINKS.map(({ label, url }) => (
            <React.Fragment key={url}>
              <TouchableOpacity
                style={styles.row}
                onPress={() => Linking.openURL(url)}
                activeOpacity={0.7}
              >
                <Text style={styles.rowLabel}>{label}</Text>
                <Text style={styles.chevron}>›</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
            </React.Fragment>
          ))}
        </View>

        {/* App info */}
        <Text style={styles.groupLabel}>APP INFORMATION</Text>
        <View style={styles.group}>
          {[
            { label: 'Version', value: '2.0.0' },
            { label: 'Developer', value: 'Etchiworks Education' },
            { label: 'Platform', value: 'React Native (Expo)' },
          ].map(({ label, value }) => (
            <React.Fragment key={label}>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>{label}</Text>
                <Text style={styles.rowValue}>{value}</Text>
              </View>
              <View style={styles.separator} />
            </React.Fragment>
          ))}
        </View>

        <Text style={styles.footer}>Etchiworks © 2026 — All Rights Reserved</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.primary },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    color: colors.gold,
    fontSize: 22,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  groupLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 1.2,
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 6,
  },
  group: {
    backgroundColor: colors.white,
    marginHorizontal: 14,
    borderRadius: 12,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  rowLabel: {
    fontSize: 14,
    color: colors.text,
  },
  rowValue: {
    fontSize: 13,
    color: colors.textMuted,
  },
  chevron: {
    fontSize: 20,
    color: colors.textMuted,
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
    marginLeft: 16,
  },
  footer: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 28,
  },
});
