import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import { colors } from '../theme/colors';
import topicsLearning from '../data/topics_learning';

const { width: SW } = Dimensions.get('window');
const topics = Object.values(topicsLearning);

const TOPIC_COLORS = [
  '#0C1446', '#0047AB', '#4B0082', '#8B0000',
  '#006400', '#8B4513', '#2F4F4F', '#556B2F',
  '#00008B', '#8B0000', '#8B4513', '#483D8B',
  '#2E8B57', '#A0522D',
];

// Floating math symbols
const SYMBOLS = ['∫', 'π', '∑', '√', 'Δ', '∞', 'θ', 'λ', '∂', '≈', 'α', 'β'];

function FloatingSymbol({ symbol, delay, startX, duration }) {
  const y = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          Animated.timing(y, { toValue: -120, duration, useNativeDriver: true }),
          Animated.sequence([
            Animated.timing(opacity, { toValue: 0.35, duration: duration * 0.2, useNativeDriver: true }),
            Animated.timing(opacity, { toValue: 0.35, duration: duration * 0.6, useNativeDriver: true }),
            Animated.timing(opacity, { toValue: 0, duration: duration * 0.2, useNativeDriver: true }),
          ]),
        ]),
        Animated.timing(y, { toValue: 0, duration: 0, useNativeDriver: true }),
      ])
    );
    anim.start();
    return () => anim.stop();
  }, []);

  return (
    <Animated.Text
      style={[
        styles.floatSymbol,
        { left: startX, transform: [{ translateY: y }], opacity },
      ]}
    >
      {symbol}
    </Animated.Text>
  );
}

const FLOAT_ITEMS = SYMBOLS.map((s, i) => ({
  symbol: s,
  delay: i * 400,
  startX: (SW / SYMBOLS.length) * i + 4,
  duration: 2800 + i * 200,
}));

export default function InteractiveLearningScreen({ navigation }) {
  const renderTopic = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: TOPIC_COLORS[index % TOPIC_COLORS.length] }]}
      onPress={() =>
        navigation.navigate('TopicSubtopics', {
          topicKey: item.id,
          topicTitle: item.title,
        })
      }
      activeOpacity={0.85}
    >
      <View style={[styles.iconBox, { backgroundColor: TOPIC_COLORS[index % TOPIC_COLORS.length] }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSub}>{item.subtopics.length} interactive solver{item.subtopics.length !== 1 ? 's' : ''}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Animated header */}
      <View style={styles.intro}>
        {FLOAT_ITEMS.map((f, i) => (
          <FloatingSymbol key={i} {...f} />
        ))}
        <Text style={styles.introTitle}>Interactive Learning</Text>
        <Text style={styles.introText}>
          Choose a topic to explore subtopics and use step-by-step interactive solvers.
        </Text>
      </View>

      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={renderTopic}
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
    padding: 20,
    paddingBottom: 22,
    overflow: 'hidden',
    minHeight: 90,
  },
  floatSymbol: {
    position: 'absolute',
    bottom: 0,
    fontSize: 20,
    color: colors.gold,
    fontWeight: 'bold',
  },
  introTitle: {
    color: colors.gold,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  introText: {
    color: '#aac4ff',
    fontSize: 12,
    lineHeight: 17,
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
    marginBottom: 10,
    padding: 14,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: { fontSize: 22 },
  cardText: { flex: 1 },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  cardSub: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  chevron: {
    fontSize: 22,
    color: colors.textMuted,
  },
});
