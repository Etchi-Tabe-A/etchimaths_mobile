import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../theme/colors';

const STATS = [
  { label: 'Topics Covered', value: '14' },
  { label: 'Calculators', value: '70+' },
  { label: 'MCQ Questions', value: '50+' },
  { label: 'Universities', value: '12' },
];

const PAYMENT_OPTIONS = [
  { key: 'mtn', label: 'MTN Mobile Money', icon: '📱' },
  { key: 'orange', label: 'Orange Money', icon: '📲' },
  { key: 'bank', label: 'Bank Transfer', icon: '🏦' },
  { key: 'card', label: 'Credit / Debit Card', icon: '💳' },
];

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('');
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    if (!name.trim() && !email.trim() && !phone.trim()) {
      Alert.alert('Nothing to save', 'Please fill in at least one field.');
      return;
    }
    setEditing(false);
    Alert.alert('Profile Saved', 'Your details have been updated.');
  };

  const displayName = name.trim() || 'Etchimaths Student';

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => (editing ? handleSave() : setEditing(true))}
          >
            <Text style={styles.editBtnText}>{editing ? 'Save' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Avatar */}
          <View style={styles.avatarSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <Text style={styles.userName}>{displayName}</Text>
            <Text style={styles.userSub}>University Mathematics</Text>
          </View>

          {/* Stats row */}
          <View style={styles.statsRow}>
            {STATS.map((s) => (
              <View key={s.label} style={styles.statCard}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>

          {/* Personal Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Details</Text>

            <Text style={styles.fieldLabel}>Full Name</Text>
            <TextInput
              style={[styles.input, !editing && styles.inputReadonly]}
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              placeholderTextColor={colors.textMuted}
              editable={editing}
            />

            <Text style={styles.fieldLabel}>Email Address</Text>
            <TextInput
              style={[styles.input, !editing && styles.inputReadonly]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={editing}
            />

            <Text style={styles.fieldLabel}>Phone Number</Text>
            <TextInput
              style={[styles.input, !editing && styles.inputReadonly]}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
              placeholderTextColor={colors.textMuted}
              keyboardType="phone-pad"
              editable={editing}
            />
          </View>

          {/* Payment Method */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Method</Text>
            {PAYMENT_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt.key}
                style={[
                  styles.paymentOption,
                  payment === opt.key && styles.paymentSelected,
                  !editing && styles.paymentDisabled,
                ]}
                onPress={() => editing && setPayment(opt.key)}
                activeOpacity={editing ? 0.7 : 1}
              >
                <Text style={styles.paymentIcon}>{opt.icon}</Text>
                <Text
                  style={[
                    styles.paymentLabel,
                    payment === opt.key && styles.paymentLabelSelected,
                  ]}
                >
                  {opt.label}
                </Text>
                {payment === opt.key && (
                  <Text style={styles.paymentCheck}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
            {!editing && !payment && (
              <Text style={styles.paymentHint}>Tap Edit to select a payment method.</Text>
            )}
          </View>


        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.primary },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingTop: 72,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: colors.gold,
    fontSize: 22,
    fontWeight: 'bold',
  },
  editBtn: {
    backgroundColor: colors.gold,
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
  },
  editBtnText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  scroll: {
    backgroundColor: colors.bg,
    paddingBottom: 40,
  },
  avatarSection: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: colors.gold,
  },
  avatarText: { fontSize: 42 },
  userName: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  userSub: {
    color: '#aac4ff',
    fontSize: 13,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 8,
    justifyContent: 'center',
  },
  statCard: {
    width: '22%',
    alignItems: 'center',
    backgroundColor: colors.bg,
    borderRadius: 10,
    paddingVertical: 10,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 10,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 2,
  },
  section: {
    margin: 14,
    marginTop: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: 4,
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.accent,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: colors.text,
    backgroundColor: colors.inputBg,
  },
  inputReadonly: {
    borderColor: colors.border,
    backgroundColor: colors.bg,
    color: colors.textMuted,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    backgroundColor: colors.bg,
  },
  paymentSelected: {
    borderColor: colors.accent,
    backgroundColor: colors.inputBg,
  },
  paymentDisabled: {
    opacity: 0.7,
  },
  paymentIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  paymentLabel: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  paymentLabelSelected: {
    color: colors.accent,
    fontWeight: '600',
  },
  paymentCheck: {
    fontSize: 16,
    color: colors.success,
    fontWeight: 'bold',
  },
  paymentHint: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 4,
  },
  sectionText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bullet: {
    color: colors.success,
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 13,
  },
  topicText: {
    fontSize: 13,
    color: colors.text,
  },
});
