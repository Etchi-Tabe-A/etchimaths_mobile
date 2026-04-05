import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors } from '../theme/colors';
import exercises from '../data/exercises';

export default function ExercisesScreen({ navigation }) {
  const renderItem = ({ item }) => {
    const unavailable = !item.available;
    return (
      <TouchableOpacity
        style={[styles.card, unavailable && styles.cardUnavailable]}
        activeOpacity={unavailable ? 1 : 0.82}
        onPress={() => {
          if (unavailable) return;
          navigation.navigate('ExercisePaper', {
            paperId: item.id,
            paperTitle: item.title,
          });
        }}
      >
        <View style={styles.cardHeader}>
          <View style={[styles.yearBadge, unavailable && styles.yearBadgeGray]}>
            <Text style={styles.yearBadgeText}>{item.year}</Text>
          </View>
          {unavailable && (
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonText}>Coming Soon</Text>
            </View>
          )}
        </View>

        <Text style={[styles.cardTitle, unavailable && styles.textGray]}>
          {item.title}
        </Text>
        {item.description ? (
          <Text style={[styles.cardDesc, unavailable && styles.textGray]}>
            {item.description}
          </Text>
        ) : null}

        <View style={styles.metaRow}>
          <View style={styles.metaChip}>
            <Text style={[styles.metaText, unavailable && styles.textGray]}>
              📝 {item.totalQuestions} Questions
            </Text>
          </View>
          <View style={styles.metaChip}>
            <Text style={[styles.metaText, unavailable && styles.textGray]}>
              ⏱ {item.timeMinutes} min
            </Text>
          </View>
        </View>

        {!unavailable && (
          <View style={styles.startRow}>
            <Text style={styles.startText}>Start Paper  →</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.headerBox}>
            <Text style={styles.headerTitle}>📝 Practice Exercises</Text>
            <Text style={styles.headerSub}>
              Attempt past MCQ questions from top universities around the world and track your score.
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  list: { padding: 14, paddingBottom: 40 },
  headerBox: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gold,
    marginBottom: 6,
  },
  headerSub: {
    fontSize: 13,
    color: '#cdd8ff',
    lineHeight: 18,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardUnavailable: {
    backgroundColor: '#f0f0f0',
    opacity: 0.75,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  yearBadge: {
    backgroundColor: colors.accent,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  yearBadgeGray: {
    backgroundColor: '#aaa',
  },
  yearBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  comingSoonBadge: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  comingSoonText: {
    color: '#555',
    fontSize: 11,
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 10,
    lineHeight: 17,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  metaChip: {
    backgroundColor: colors.bg,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  metaText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
  textGray: {
    color: '#999',
  },
  startRow: {
    alignItems: 'flex-end',
    marginTop: 4,
  },
  startText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
