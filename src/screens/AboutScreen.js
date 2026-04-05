import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Linking,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const SOCIAL_LINKS = [
  {
    label: 'Website',
    url: 'https://sites.google.com/view/etchimaths',
    color: colors.accent,
    emoji: '🌐',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/etchimaths',
    color: '#1877F2',
    iconName: 'logo-facebook',
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@Etchimaths',
    color: '#FF0000',
    iconName: 'logo-youtube',
  },
];

const openLink = (url) =>
  Linking.openURL(url).catch(() => null);

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.heroContainer}>
          <Image source={require('../../assets/emu.png')} style={styles.heroImg} resizeMode="contain" />
          <Text style={styles.heroTitle}>Etchimaths</Text>
          <Text style={styles.heroEdition}>University Edition</Text>
          <View style={styles.versionBadge}>
            <Text style={styles.versionText}>v 2.5.0 Professional</Text>
          </View>
          <Text style={styles.heroTagline}>
            "Mathematics at the Heart of Innovations"
          </Text>
        </View>

        {/* Developer card */}
        <View style={styles.card}>
          <Text style={styles.cardHeading}>👨‍💻  Developer</Text>
          <InfoRow label="Name" value="Etchi Tabe A." />
          <InfoRow label="Company" value="Etchiworks" />
          <InfoRow label="Email" value="info@etchimaths.com" />
        </View>

        {/* About card */}
        <View style={styles.card}>
          <Text style={styles.cardHeading}>ℹ️  About the App</Text>
          <Text style={styles.bodyText}>
            Etchimaths is a professional mathematics application designed for
            university-level students and educators. It provides interactive
            real-life application calculators across 14 major mathematics topics,
            covering over 70 real-world scenarios.
          </Text>
          <Text style={[styles.bodyText, { marginTop: 8 }]}>
            Topics include Matrices, Vectors, Trigonometry, Complex Numbers,
            Coordinate Geometry, Differential Equations, Integration, Laplace
            Transforms, Limits & Differentiation, Probability & Statistics,
            Sequences & Series, Polynomials, Numerical Methods, and Discrete
            Random Variables.
          </Text>
        </View>

        {/* Topics summary */}
        <View style={styles.statsRow}>
          <StatBox value="14" label="Math Topics" />
          <StatBox value="70" label="Calculators" />
          <StatBox value="5" label="Apps/Topic" />
        </View>

        {/* Links */}
        <View style={styles.card}>
          <Text style={styles.cardHeading}>🔗  Links & Social</Text>
          {SOCIAL_LINKS.map((s) => (
            <TouchableOpacity
              key={s.url}
              style={[styles.linkBtn, { borderColor: s.color }]}
              onPress={() => openLink(s.url)}
              activeOpacity={0.8}
            >
              {s.iconName ? (
                <Ionicons name={s.iconName} size={20} color={s.color} style={{ marginRight: 8 }} />
              ) : (
                <Text style={{ fontSize: 16, marginRight: 8 }}>{s.emoji}</Text>
              )}
              <Text style={[styles.linkBtnText, { color: s.color }]}>
                {s.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Etchiworks. All rights reserved.</Text>
          <Text style={styles.footerText}>Built with  ❤  for learners worldwide.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={infoStyles.row}>
      <Text style={infoStyles.label}>{label}:</Text>
      <Text style={infoStyles.value}>{value}</Text>
    </View>
  );
}

function StatBox({ value, label }) {
  return (
    <View style={statStyles.box}>
      <Text style={statStyles.value}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

const infoStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  label: { color: colors.textMuted, fontSize: 13, width: 75 },
  value: { color: colors.text, fontSize: 13, fontWeight: '600', flex: 1 },
});

const statStyles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    margin: 4,
  },
  value: { color: colors.gold, fontWeight: 'bold', fontSize: 22 },
  label: { color: colors.white, fontSize: 11, marginTop: 4, opacity: 0.85 },
});

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: 16, paddingBottom: 40 },

  heroContainer: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    paddingTop: 52,
    paddingBottom: 28,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  heroImg: { width: 72, height: 72, marginBottom: 8 },
  heroTitle: {
    color: colors.gold,
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  heroEdition: {
    color: colors.white,
    fontSize: 14,
    opacity: 0.8,
    marginTop: 2,
  },
  versionBadge: {
    backgroundColor: colors.accent,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginTop: 8,
  },
  versionText: { color: colors.white, fontSize: 12, fontWeight: '600' },
  heroTagline: {
    color: colors.goldLight,
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9,
  },

  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeading: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 6,
  },
  bodyText: {
    color: colors.textLight,
    fontSize: 13,
    lineHeight: 20,
  },

  statsRow: {
    flexDirection: 'row',
    marginBottom: 12,
    marginHorizontal: -4,
  },

  linkBtn: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkBtnText: { fontWeight: 'bold', fontSize: 14 },

  footer: {
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 4,
  },
});
