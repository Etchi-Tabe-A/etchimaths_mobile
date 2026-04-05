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

export default function AppListScreen({ route, navigation }) {
  const { topicName } = route.params;
  const topic = applications[topicName];

  if (!topic) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Topic not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.headerBar}>
        <Text style={styles.headerIcon}>{topic.icon}</Text>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>{topicName}</Text>
          <Text style={styles.headerSub}>
            {topic.apps.length} real-life applications
          </Text>
        </View>
      </View>
      <FlatList
        data={topic.apps}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('Calculator', {
                topicName,
                appIndex: index,
                appTitle: item.title,
              })
            }
            activeOpacity={0.8}
          >
            {/* Index badge */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{index + 1}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={2}>
                {item.desc}
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.inputCount}>
                  {item.inputs.length} inputs
                </Text>
                <Text style={styles.calcLabel}>Open Calculator ›</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: colors.error, fontSize: 16 },
  headerBar: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerIcon: { fontSize: 30, marginRight: 12 },
  headerText: { flex: 1 },
  headerTitle: {
    color: colors.gold,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSub: {
    color: colors.white,
    fontSize: 12,
    opacity: 0.75,
    marginTop: 2,
  },
  list: { padding: 12 },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    alignSelf: 'flex-start',
  },
  badgeText: { color: colors.white, fontWeight: 'bold', fontSize: 14 },
  cardBody: { flex: 1 },
  cardTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  cardDesc: {
    color: colors.textLight,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center',
  },
  inputCount: {
    backgroundColor: colors.inputBg,
    color: colors.accent,
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    fontWeight: '600',
  },
  calcLabel: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
