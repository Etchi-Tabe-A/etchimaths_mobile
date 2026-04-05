import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Modal,
  Linking,
} from 'react-native';
import { colors } from '../theme/colors';

const emuIcon = require('../../assets/emu.png');

const MENU_ITEMS = [
  { id: 'about',    icon: 'ℹ️',  label: 'About Etchimaths',   action: 'navigate', target: 'About' },
  { id: 'profile',  icon: '👤',  label: 'My Profile',          action: 'navigate', target: 'Profile' },
  { id: 'settings', icon: '⚙️',  label: 'Settings',            action: 'navigate', target: 'Settings' },
  { id: 'help',     icon: '❓',  label: 'Help & How to Use',   action: 'navigate', target: 'About' },
  { id: 'web',      icon: '🌐',  label: 'Visit Website',       action: 'link', target: 'https://www.etchimaths.com' },
  { id: 'yt',       icon: '▶️',  label: 'YouTube Channel',     action: 'link', target: 'https://www.youtube.com/@etchimaths' },
  { id: 'fb',       icon: '👍',  label: 'Facebook Page',       action: 'link', target: 'https://www.facebook.com/etchimaths' },
];

const CARDS = [
  {
    id: 'curriculum',
    title: 'World Class\nCurriculum',
    subtitle: 'Globally aligned university content',
    icon: '🎓',
    bg: '#0C1446',
    navigateTo: 'Curriculum',
  },
  {
    id: 'learning',
    title: 'Interactive\nLearning',
    subtitle: 'Solve problems step by step',
    icon: '🧮',
    bg: '#0047AB',
    navigateTo: 'InteractiveLearning',
  },
  {
    id: 'exercises',
    title: 'Practice\nExercises',
    subtitle: 'Past MCQ papers with scoring',
    icon: '📝',
    bg: '#b08b04',
    navigateTo: 'Exercises',
  },
  {
    id: 'applications',
    title: 'Real Life\nApplications',
    subtitle: '14 topics × real world uses',
    icon: '🌍',
    bg: '#27AE60',
    navigateTo: 'Topics',
  },
];

export default function HomeScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItem = (item) => {
    setMenuOpen(false);
    if (item.action === 'navigate') {
      navigation.navigate(item.target);
    } else if (item.action === 'link') {
      Linking.openURL(item.target);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={emuIcon} style={styles.headerImg} resizeMode="contain" />
          <View>
            <Text style={styles.headerTitle}>Etchimaths</Text>
            <Text style={styles.headerSub}>(UNIVERSITY)</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => setMenuOpen(true)}
          accessibilityLabel="Menu"
        >
          <Text style={styles.hamburgerIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal
        visible={menuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuOpen(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.dropdown}>
                <Text style={styles.dropdownHeader}>Menu</Text>
                {MENU_ITEMS.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.dropdownItem,
                      index < MENU_ITEMS.length - 1 && styles.dropdownItemBorder,
                    ]}
                    onPress={() => handleMenuItem(item)}
                    activeOpacity={0.75}
                  >
                    <Text style={styles.dropdownItemIcon}>{item.icon}</Text>
                    <Text style={styles.dropdownItemLabel}>{item.label}</Text>
                    <Text style={styles.dropdownArrow}>›</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.body}>
        {/* Welcome banner — compact strip */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Etchimaths</Text>
          <Text style={styles.bannerText}>Advanced University Mathematics — Interactive &amp; exam ready.</Text>
        </View>

        {/* 2×2 Card grid — fills remaining height */}
        <View style={styles.grid}>
          <View style={styles.gridRow}>
            {CARDS.slice(0, 2).map((card) => (
              <TouchableOpacity
                key={card.id}
                style={[styles.card, { backgroundColor: card.bg }]}
                onPress={() => navigation.navigate(card.navigateTo)}
                activeOpacity={0.85}
              >
                <Text style={styles.cardIcon}>{card.icon}</Text>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.gridRow}>
            {CARDS.slice(2, 4).map((card) => (
              <TouchableOpacity
                key={card.id}
                style={[styles.card, { backgroundColor: card.bg }]}
                onPress={() => navigation.navigate(card.navigateTo)}
                activeOpacity={0.85}
              >
                <Text style={styles.cardIcon}>{card.icon}</Text>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: colors.primary,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerImg: {
    width: 52,
    height: 52,
    marginRight: 6,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F5F0EB',
    letterSpacing: 0.5,
  },
  headerSub: {
    fontSize: 11,
    color: '#aac4ff',
    letterSpacing: 1,
  },
  hamburger: {
    padding: 8,
  },
  hamburgerIcon: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  body: {
    flex: 1,
    backgroundColor: colors.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  banner: {
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.gold,
    marginBottom: 0,
  },
  bannerText: {
    fontSize: 12,
    color: '#aac4ff',
    lineHeight: 16,
    marginLeft: 6,
    flex: 1,
  },
  grid: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 14,
    gap: 10,
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    borderRadius: 14,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  cardIcon: {
    fontSize: 72,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 5,
    lineHeight: 22,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 17,
    textAlign: 'center',
  },

  // Dropdown menu
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  dropdown: {
    position: 'absolute',
    top: 100,
    right: 14,
    backgroundColor: colors.white,
    borderRadius: 14,
    width: 230,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
    overflow: 'hidden',
  },
  dropdownHeader: {
    backgroundColor: colors.primary,
    color: colors.gold,
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 16,
    paddingVertical: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    gap: 10,
  },
  dropdownItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dropdownItemIcon: {
    fontSize: 18,
    width: 24,
    textAlign: 'center',
  },
  dropdownItemLabel: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  dropdownArrow: {
    fontSize: 20,
    color: colors.textMuted,
  },
});
