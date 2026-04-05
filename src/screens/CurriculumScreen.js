import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from '../theme/colors';
import curriculum from '../data/curriculum';

function UniversityCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.flag}>{item.flag}</Text>
        <View style={styles.cardHeaderText}>
          <Text style={styles.uniName}>{item.name}</Text>
          <Text style={styles.country}>{item.country}</Text>
        </View>
        <View style={styles.rankBadge}>
          <Text style={styles.rankText}>#{item.rank}</Text>
        </View>
      </View>

      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.topicsWrap}>
        <Text style={styles.topicsLabel}>Aligned Topics:</Text>
        <View style={styles.topicChips}>
          {item.relevantTopics.map((t) => (
            <View key={t} style={styles.chip}>
              <Text style={styles.chipText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default function CurriculumScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <View style={styles.intro}>
        <Text style={styles.introTitle}>Globally Aligned Curriculum</Text>
        <Text style={styles.introText}>
          Our mathematics curriculum is benchmarked against the world's leading universities.
          The 14 topics covered in this app directly mirror what is taught at these institutions.
        </Text>
      </View>

      <FlatList
        data={curriculum}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UniversityCard item={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  intro: {
    backgroundColor: colors.primary,
    padding: 16,
  },
  introTitle: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  introText: {
    color: '#aac4ff',
    fontSize: 12,
    lineHeight: 18,
  },
  list: {
    padding: 12,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  flag: { fontSize: 28, marginRight: 10 },
  cardHeaderText: { flex: 1 },
  uniName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    lineHeight: 19,
  },
  country: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  rankBadge: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  rankText: {
    color: colors.gold,
    fontWeight: 'bold',
    fontSize: 12,
  },
  description: {
    fontSize: 12,
    color: colors.text,
    lineHeight: 18,
    marginBottom: 10,
  },
  topicsLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  topicChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  chip: {
    backgroundColor: colors.primary + '18',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  chipText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
  },
  topicsWrap: {},
});
