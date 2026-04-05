import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function AIScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Assistant</Text>
      </View>
      <View style={styles.body}>
        <Ionicons name="sparkles" size={64} color={colors.gold} style={styles.icon} />
        <Text style={styles.title}>Coming Soon</Text>
        <Text style={styles.sub}>
          An AI-powered maths tutor is on its way.{'\n'}
          Get step-by-step explanations, hints,{'\n'}
          and personalised practice.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.primary },
  header: {
    paddingHorizontal: 20,
    paddingTop: 72,
    paddingBottom: 16,
  },
  headerTitle: {
    color: colors.gold,
    fontSize: 22,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  sub: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
});
