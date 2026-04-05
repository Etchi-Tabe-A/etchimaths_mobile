import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from '../theme/colors';
import applications from '../data/applications';

const topics = Object.keys(applications);

export default function TopicsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>📐 Math Topics</Text>
        <Text style={styles.headerSub}>
          {topics.length} topics · tap to explore real-life applications
        </Text>
      </View>
      <FlatList
        data={topics}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const topic = applications[item];
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('AppList', { topicName: item })
              }
              activeOpacity={0.8}
            >
              <Text style={styles.cardIcon}>{topic.icon}</Text>
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item}</Text>
                <Text style={styles.cardSub}>
                  {topic.apps.length} real-life applications
                </Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  headerBar: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
  },
  headerTitle: {
    color: colors.gold,
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSub: {
    color: colors.white,
    fontSize: 12,
    opacity: 0.75,
    marginTop: 3,
  },
  list: { padding: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: { fontSize: 28, marginRight: 14 },
  cardBody: { flex: 1 },
  cardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSub: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  chevron: {
    color: colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
