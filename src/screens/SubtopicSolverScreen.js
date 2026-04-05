import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../theme/colors';
import topicsLearning from '../data/topics_learning';

export default function SubtopicSolverScreen({ route }) {
  const { topicKey, subtopicId } = route.params;

  // Look up the topic by key
  const topic =
    topicsLearning[topicKey.toUpperCase().replace(/-/g, '_')] ||
    Object.values(topicsLearning).find((t) => t.id === topicKey);

  const subtopic = topic?.subtopics.find((s) => s.id === subtopicId);

  const [values, setValues] = useState(() =>
    subtopic ? subtopic.inputs.map((inp) => inp.defaultValue ?? '') : []
  );
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback((text, index) => {
    setValues((prev) => {
      const next = [...prev];
      next[index] = text;
      return next;
    });
    setResult('');
    setError('');
  }, []);

  const handleCalculate = useCallback(() => {
    if (!subtopic) return;
    try {
      const output = subtopic.compute(values);
      setResult(output);
      setError('');
    } catch (e) {
      setError('Calculation error. Check your inputs.');
      setResult('');
    }
  }, [subtopic, values]);

  const handleReset = useCallback(() => {
    if (!subtopic) return;
    setValues(subtopic.inputs.map((inp) => inp.defaultValue ?? ''));
    setResult('');
    setError('');
  }, [subtopic]);

  if (!subtopic) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Subtopic data not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Info card */}
          <View style={styles.infoCard}>
            <Text style={styles.formula}>{subtopic.formula}</Text>
            {subtopic.description ? (
              <Text style={styles.description}>{subtopic.description}</Text>
            ) : null}
            {subtopic.example ? (
              <View style={styles.exampleBox}>
                <Text style={styles.exampleLabel}>Example:</Text>
                <Text style={styles.exampleText}>{subtopic.example}</Text>
              </View>
            ) : null}
          </View>

          {/* Inputs */}
          <View style={styles.inputsCard}>
            <Text style={styles.inputsTitle}>Enter Values</Text>
            {subtopic.inputs.map((inp, index) => (
              <View key={index} style={styles.inputRow}>
                <Text style={styles.inputLabel}>{inp.label}</Text>
                <TextInput
                  style={styles.input}
                  value={values[index]}
                  onChangeText={(text) => handleChange(text, index)}
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor={colors.textMuted}
                  returnKeyType="done"
                />
              </View>
            ))}
          </View>

          {/* Buttons */}
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.calcBtn} onPress={handleCalculate} activeOpacity={0.85}>
              <Text style={styles.calcBtnText}>▶  Calculate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resetBtn} onPress={handleReset} activeOpacity={0.85}>
              <Text style={styles.resetBtnText}>↺  Reset</Text>
            </TouchableOpacity>
          </View>

          {/* Result */}
          {result !== '' && (
            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>Result</Text>
              <Text style={styles.resultText}>{result}</Text>
            </View>
          )}

          {error !== '' && (
            <View style={styles.errorCard}>
              <Text style={styles.errorCardText}>{error}</Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { color: colors.error, fontSize: 14 },
  scroll: {
    padding: 14,
    paddingBottom: 40,
  },
  infoCard: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
  },
  formula: {
    color: colors.gold,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#cdd8ff',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 8,
  },
  exampleBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 8,
    padding: 10,
  },
  exampleLabel: {
    color: colors.goldLight,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  exampleText: {
    color: '#e8f0ff',
    fontSize: 12,
    lineHeight: 17,
  },
  inputsCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  inputsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  inputRow: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 5,
  },
  input: {
    backgroundColor: colors.inputBg,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.text,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  calcBtn: {
    flex: 2,
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: colors.accent,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  calcBtnText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  resetBtn: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  resetBtnText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: colors.resultBg,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.success,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  resultText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    lineHeight: 22,
  },
  errorCard: {
    backgroundColor: '#fdecea',
    borderRadius: 10,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
  },
  errorCardText: {
    color: colors.error,
    fontSize: 13,
  },
});
