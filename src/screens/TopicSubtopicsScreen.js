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
import topicsLearning from '../data/topics_learning';

export default function TopicSubtopicsScreen({ route, navigation }) {
  const { topicKey, topicTitle } = route.params;
  const topic = topicsLearning[topicKey.toUpperCase().replace(/-/g, '_')] ||
    Object.values(topicsLearning).find(t => t.id === topicKey);

  if (!topic) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Topic data not found.</Text>
      </View>
    );
  }

  const renderSubtopic = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('SubtopicSolver', {
          topicKey,
          subtopicId: item.id,
          subtopicTitle: item.title,
        })
      }
      activeOpacity={0.85}
    >
      <View style={styles.numBadge}>
        <Text style={styles.numText}>{index + 1}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.subtopicTitle}>{item.title}</Text>
        <Text style={styles.formula} numberOfLines={1}>{item.formula}</Text>
        {item.description ? (
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        ) : null}
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.intro}>
        <Text style={styles.introIcon}>{topic.icon}</Text>
        <View>
          <Text style={styles.introTitle}>{topic.title}</Text>
          <Text style={styles.introSub}>{topic.subtopics.length} interactive solvers</Text>
        </View>
      </View>

      <FlatList
        data={topic.subtopics}
        keyExtractor={(item) => item.id}
        renderItem={renderSubtopic}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { color: colors.error, fontSize: 14 },
  intro: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    gap: 12,
  },
  introIcon: { fontSize: 32, marginRight: 4 },
  introTitle: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: 'bold',
  },
  introSub: {
    color: '#aac4ff',
    fontSize: 12,
    marginTop: 2,
  },
  list: {
    padding: 12,
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  numBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  numText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardBody: { flex: 1 },
  subtopicTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 2,
  },
  formula: {
    fontSize: 12,
    color: colors.accent,
    fontStyle: 'italic',
    marginBottom: 2,
  },
  description: {
    fontSize: 11,
    color: colors.textMuted,
    lineHeight: 16,
  },
  chevron: {
    fontSize: 22,
    color: colors.textMuted,
    marginLeft: 6,
  },
});
