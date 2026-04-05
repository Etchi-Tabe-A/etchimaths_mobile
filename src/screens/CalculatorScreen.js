import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../theme/colors';
import applications from '../data/applications';
import { illustrations } from '../illustrations';

export default function CalculatorScreen({ route }) {
  const { topicName, appIndex } = route.params;
  const app = applications[topicName]?.apps[appIndex];

  const defaultValues = () =>
    app ? app.inputs.map((inp) => String(inp[1])) : [];

  const [values, setValues] = useState(defaultValues);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  if (!app) {
    return (
      <View style={styles.center}>
        <Text style={styles.errText}>Calculator not found.</Text>
      </View>
    );
  }

  const handleChange = (text, idx) => {
    const next = [...values];
    next[idx] = text;
    setValues(next);
  };

  const handleCompute = () => {
    setError('');
    setResults(null);
    // Parse numbers
    const nums = values.map((v, i) => {
      const n = parseFloat(v);
      if (isNaN(n)) {
        throw new Error(`Input "${app.inputs[i][0]}" is not a valid number.`);
      }
      return n;
    });
    try {
      const out = app.compute(nums);
      setResults(out);
    } catch (e) {
      setError(e.message || 'Computation error.');
      Alert.alert('Error', e.message || 'Computation error.');
    }
  };

  const handleReset = () => {
    setValues(defaultValues());
    setResults(null);
    setError('');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Description card */}
          <View style={styles.descCard}>
            <Text style={styles.descIcon}>{applications[topicName]?.icon}</Text>
            <Text style={styles.descText}>{app.desc}</Text>
          </View>

          {/* Illustration */}
          {(() => {
            const illustrationKey = app.illustration;
            const Illustration = illustrationKey && illustrations[illustrationKey];
            if (Illustration) {
              return (
                <View style={styles.illustrationCard}>
                  <Illustration />
                </View>
              );
            }
            if (applications[topicName]?.image && !imgError) {
              return (
                <View style={styles.illustrationCard}>
                  {imgLoading && (
                    <ActivityIndicator
                      style={styles.imgLoader}
                      size="small"
                      color={colors.accent}
                    />
                  )}
                  <Image
                    source={{
                      uri: applications[topicName].image.uri,
                      headers: { 'User-Agent': 'Etchimaths/1.0 (expo; educational)' },
                    }}
                    style={[styles.illustrationImg, imgLoading && { opacity: 0 }]}
                    resizeMode="contain"
                    onLoad={() => setImgLoading(false)}
                    onError={() => { setImgLoading(false); setImgError(true); }}
                  />
                  <Text style={styles.illustrationCaption}>
                    {topicName} — Mathematical Illustration
                  </Text>
                </View>
              );
            }
            return null;
          })()}

          {/* Inputs */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Inputs</Text>
            {app.inputs.map((inp, idx) => (
              <View key={idx} style={styles.inputRow}>
                <Text style={styles.inputLabel}>{inp[0]}</Text>
                <TextInput
                  style={styles.textInput}
                  value={values[idx]}
                  onChangeText={(t) => handleChange(t, idx)}
                  keyboardType="numeric"
                  placeholder={String(inp[1])}
                  placeholderTextColor={colors.textMuted}
                  returnKeyType="done"
                />
              </View>
            ))}
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.resetBtn} onPress={handleReset} activeOpacity={0.8}>
              <Text style={styles.resetBtnText}>↺  Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.computeBtn} onPress={handleCompute} activeOpacity={0.8}>
              <Text style={styles.computeBtnText}>⚡  Compute</Text>
            </TouchableOpacity>
          </View>

          {/* Error */}
          {!!error && (
            <View style={styles.errorCard}>
              <Text style={styles.errorText}>⚠  {error}</Text>
            </View>
          )}

          {/* Results */}
          {results && (
            <View style={styles.resultsCard}>
              <Text style={styles.resultsHeader}>Results</Text>
              {results.map((row, idx) => (
                <View
                  key={idx}
                  style={[styles.resultRow, idx % 2 === 0 ? styles.rowEven : styles.rowOdd]}
                >
                  <Text style={styles.resultLabel}>{row[0]}</Text>
                  <Text style={styles.resultValue}>{row[1]}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={{ height: 30 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errText: { color: colors.error, fontSize: 16 },
  scroll: { padding: 16 },

  descCard: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  illustrationCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  illustrationImg: {
    width: '100%',
    height: 180,
  },
  imgLoader: {
    position: 'absolute',
    height: 180,
    alignSelf: 'center',
  },
  illustrationCaption: {
    marginTop: 8,
    fontSize: 11,
    color: colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  descIcon: { fontSize: 26, marginRight: 10, marginTop: 2 },
  descText: { flex: 1, color: colors.white, fontSize: 13, lineHeight: 20 },

  section: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sectionTitle: {
    color: colors.accent,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 6,
  },
  inputRow: {
    marginBottom: 12,
  },
  inputLabel: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
    fontSize: 15,
    color: colors.text,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  resetBtn: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  resetBtnText: { color: colors.accent, fontWeight: 'bold', fontSize: 15 },
  computeBtn: {
    flex: 2,
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  computeBtnText: { color: colors.white, fontWeight: 'bold', fontSize: 15 },

  errorCard: {
    backgroundColor: '#FFF0EE',
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  errorText: { color: colors.error, fontSize: 13 },

  resultsCard: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  resultsHeader: {
    backgroundColor: colors.accent,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  rowEven: { backgroundColor: colors.resultBg },
  rowOdd: { backgroundColor: colors.white },
  resultLabel: {
    flex: 1,
    color: colors.text,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
  },
  resultValue: {
    flex: 1,
    color: colors.accent,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
    lineHeight: 18,
  },
});
