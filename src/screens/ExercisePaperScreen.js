import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors } from '../theme/colors';
import exercises from '../data/exercises';

export default function ExercisePaperScreen({ route }) {
  const { paperId } = route.params;
  const paper = exercises.find((e) => e.id === paperId);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(
    paper ? Array(paper.questions.length).fill(null) : []
  );
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = useCallback(
    (optionIndex) => {
      if (submitted) return;
      setAnswers((prev) => {
        const next = [...prev];
        next[currentQ] = optionIndex;
        return next;
      });
    },
    [currentQ, submitted]
  );

  const handleSubmit = useCallback(() => {
    if (!paper) return;
    let correct = 0;
    paper.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
    setCurrentQ(0);
  }, [paper, answers]);

  if (!paper) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Paper data not found.</Text>
      </View>
    );
  }

  const totalQ = paper.questions.length;
  const answered = answers.filter((a) => a !== null).length;
  const question = paper.questions[currentQ];

  // ---- Submitted: results view ----
  if (submitted) {
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Score summary */}
          <View style={styles.scoreCard}>
            <Text style={styles.scoreTitle}>Paper Complete!</Text>
            <Text style={styles.scoreValue}>
              {score} / {totalQ}
            </Text>
            <Text style={styles.scorePercent}>
              {Math.round((score / totalQ) * 100)}%
            </Text>
            <Text style={styles.scoreLabel}>
              {score >= totalQ * 0.7
                ? '🎉 Excellent result!'
                : score >= totalQ * 0.5
                ? '👍 Good effort!'
                : '📚 Keep studying!'}
            </Text>
          </View>

          {/* Per-question breakdown */}
          {paper.questions.map((q, i) => {
            const userAns = answers[i];
            const correct = userAns === q.answer;
            return (
              <View
                key={i}
                style={[
                  styles.reviewCard,
                  correct ? styles.reviewCardCorrect : styles.reviewCardWrong,
                ]}
              >
                <Text style={styles.reviewQNum}>Q{i + 1}</Text>
                <Text style={styles.reviewQText}>{q.question}</Text>
                <View style={styles.reviewOptRow}>
                  {q.options.map((opt, oi) => {
                    const isCorrect = oi === q.answer;
                    const isUser = oi === userAns;
                    return (
                      <Text
                        key={oi}
                        style={[
                          styles.reviewOpt,
                          isCorrect && styles.reviewOptCorrect,
                          isUser && !isCorrect && styles.reviewOptWrong,
                        ]}
                      >
                        {isCorrect ? '✓ ' : isUser && !isCorrect ? '✗ ' : '  '}
                        {String.fromCharCode(65 + oi)}. {opt}
                      </Text>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ---- Quiz view ----
  return (
    <SafeAreaView style={styles.safe}>
      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${((answered / totalQ) * 100).toFixed(0)}%` },
          ]}
        />
      </View>
      <Text style={styles.progressText}>
        {answered}/{totalQ} answered
      </Text>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Question card */}
        <View style={styles.questionCard}>
          <Text style={styles.qNumber}>
            Question {currentQ + 1} of {totalQ}
          </Text>
          <Text style={styles.qText}>{question.question}</Text>
        </View>

        {/* Options */}
        {question.options.map((opt, index) => {
          const selected = answers[currentQ] === index;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.optionCard, selected && styles.optionSelected]}
              onPress={() => handleSelect(index)}
              activeOpacity={0.82}
            >
              <View style={[styles.optionLetter, selected && styles.optionLetterSelected]}>
                <Text style={[styles.optionLetterText, selected && styles.optionLetterTextSel]}>
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                {opt}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* Navigation row */}
        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navBtn, currentQ === 0 && styles.navBtnDisabled]}
            onPress={() => setCurrentQ((q) => Math.max(q - 1, 0))}
            disabled={currentQ === 0}
          >
            <Text style={styles.navBtnText}>← Prev</Text>
          </TouchableOpacity>

          {currentQ < totalQ - 1 ? (
            <TouchableOpacity
              style={styles.navBtn}
              onPress={() => setCurrentQ((q) => Math.min(q + 1, totalQ - 1))}
            >
              <Text style={styles.navBtnText}>Next →</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.submitBtn, answered < totalQ && styles.submitBtnDisabled]}
              onPress={handleSubmit}
              disabled={answered < totalQ ? false : false}
            >
              <Text style={styles.submitBtnText}>Submit Paper</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Q counter chips */}
        <View style={styles.qChips}>
          {paper.questions.map((_, i) => (
            <TouchableOpacity key={i} onPress={() => setCurrentQ(i)}>
              <View
                style={[
                  styles.qChip,
                  answers[i] !== null && styles.qChipAnswered,
                  i === currentQ && styles.qChipCurrent,
                ]}
              >
                <Text
                  style={[
                    styles.qChipText,
                    (answers[i] !== null || i === currentQ) && styles.qChipTextLight,
                  ]}
                >
                  {i + 1}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { color: colors.error, fontSize: 14 },
  scroll: { padding: 14, paddingBottom: 40 },

  // Progress
  progressBar: { height: 5, backgroundColor: colors.border },
  progressFill: { height: 5, backgroundColor: colors.accent },
  progressText: {
    fontSize: 11,
    color: colors.textMuted,
    textAlign: 'right',
    paddingHorizontal: 14,
    paddingVertical: 4,
  },

  // Question
  questionCard: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
  },
  qNumber: {
    fontSize: 12,
    color: colors.gold,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  qText: {
    fontSize: 14,
    color: colors.white,
    lineHeight: 22,
    fontWeight: '500',
  },

  // Options
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.border,
    padding: 12,
    marginBottom: 10,
    gap: 10,
  },
  optionSelected: {
    borderColor: colors.accent,
    backgroundColor: '#e8f0fe',
  },
  optionLetter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  optionLetterSelected: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  optionLetterText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.text,
  },
  optionLetterTextSel: { color: colors.white },
  optionText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  optionTextSelected: { color: colors.primary, fontWeight: '600' },

  // Nav
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 4,
    marginBottom: 20,
  },
  navBtn: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  navBtnDisabled: { opacity: 0.35 },
  navBtnText: { fontSize: 13, fontWeight: '600', color: colors.primary },
  submitBtn: {
    flex: 2,
    backgroundColor: colors.success,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitBtnDisabled: { backgroundColor: '#999' },
  submitBtnText: { fontSize: 13, fontWeight: 'bold', color: colors.white },

  // Q number chips
  qChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
  },
  qChip: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qChipAnswered: { backgroundColor: colors.accent, borderColor: colors.accent },
  qChipCurrent: { backgroundColor: colors.primary, borderColor: colors.primary },
  qChipText: { fontSize: 11, color: colors.textMuted, fontWeight: '600' },
  qChipTextLight: { color: colors.white },

  // Results
  scoreCard: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreTitle: { fontSize: 14, color: colors.gold, fontWeight: 'bold', marginBottom: 10 },
  scoreValue: { fontSize: 48, fontWeight: 'bold', color: colors.white },
  scorePercent: { fontSize: 22, color: colors.goldLight, fontWeight: '600', marginBottom: 8 },
  scoreLabel: { fontSize: 14, color: '#cdd8ff' },

  reviewCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
  },
  reviewCardCorrect: { borderLeftColor: colors.success },
  reviewCardWrong: { borderLeftColor: colors.error },
  reviewQNum: { fontSize: 11, fontWeight: 'bold', color: colors.textMuted, marginBottom: 4 },
  reviewQText: { fontSize: 13, color: colors.text, lineHeight: 18, marginBottom: 8 },
  reviewOptRow: { gap: 3 },
  reviewOpt: { fontSize: 12, color: colors.textMuted, paddingLeft: 4 },
  reviewOptCorrect: { color: colors.success, fontWeight: 'bold' },
  reviewOptWrong: { color: colors.error, fontWeight: 'bold' },
});
