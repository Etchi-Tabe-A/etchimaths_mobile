import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const WELCOME = {
  id: '0',
  role: 'ai',
  text: "Hi! I'm Etchimaths AI 👋\nI'm here to help you with university mathematics — from complex numbers to differential equations.\n\nWhat would you like to learn today?",
  time: now(),
};

function now() {
  const d = new Date();
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

// Simple rule-based responses for common maths topics
function getAIReply(input) {
  const q = input.toLowerCase();
  if (q.includes('complex') || q.includes('argand'))
    return "Complex numbers have the form **a + bi** where *a* is the real part and *b* is the imaginary part.\n\nKey operations:\n• Addition: (a+bi)+(c+di) = (a+c)+(b+d)i\n• Modulus: |z| = √(a²+b²)\n• Argument: arg(z) = tan⁻¹(b/a)\n\nWant me to walk through an example?";
  if (q.includes('integral') || q.includes('integrat'))
    return "Integration is the reverse of differentiation.\n\nCommon rules:\n• ∫xⁿ dx = xⁿ⁺¹/(n+1) + C\n• ∫eˣ dx = eˣ + C\n• ∫sin(x) dx = −cos(x) + C\n\nShall I show a worked example?";
  if (q.includes('differential equation') || q.includes('ode'))
    return "A differential equation relates a function with its derivatives.\n\nFirst-order separable form:\n  dy/dx = f(x)g(y)\n  → separate and integrate both sides.\n\nWhat type of ODE are you working on?";
  if (q.includes('matrix') || q.includes('matrices'))
    return "Matrices are rectangular arrays of numbers.\n\nKey operations:\n• Addition: add element by element\n• Multiplication: row × column dot products\n• Determinant of 2×2: |A| = ad − bc\n• Inverse: A⁻¹ = (1/|A|) × adj(A)\n\nNeed help with a specific matrix problem?";
  if (q.includes('laplace'))
    return "The Laplace Transform converts a time-domain function into the s-domain:\n\n  L{f(t)} = ∫₀^∞ e^(−st) f(t) dt\n\nCommon pairs:\n• L{1} = 1/s\n• L{eᵃᵗ} = 1/(s−a)\n• L{sin(at)} = a/(s²+a²)\n\nWould you like to solve a specific transform?";
  if (q.includes('trigon') || q.includes('sin') || q.includes('cos') || q.includes('tan'))
    return "Core trig identities:\n• sin²θ + cos²θ = 1\n• sin(A±B) = sinA cosB ± cosA sinB\n• cos(2θ) = cos²θ − sin²θ\n• tan θ = sin θ / cos θ\n\nWhat trig problem are you working on?";
  if (q.includes('vector'))
    return "Vectors have magnitude and direction.\n\nKey operations:\n• Dot product: a·b = |a||b|cosθ\n• Cross product: a×b gives a vector ⊥ to both\n• Magnitude: |v| = √(x²+y²+z²)\n\nNeed help with a specific vector problem?";
  if (q.includes('limit') || q.includes('differentiat') || q.includes('derivative'))
    return "Differentiation finds the rate of change.\n\nKey rules:\n• Power rule: d/dx(xⁿ) = nxⁿ⁻¹\n• Product rule: (uv)' = u'v + uv'\n• Chain rule: dy/dx = (dy/du)(du/dx)\n• Quotient rule: (u/v)' = (u'v − uv')/v²\n\nWhat would you like to differentiate?";
  if (q.includes('probability') || q.includes('random variable'))
    return "Probability basics:\n• P(A∪B) = P(A) + P(B) − P(A∩B)\n• P(A|B) = P(A∩B) / P(B)\n• E(X) = Σ x·P(X=x)\n• Var(X) = E(X²) − [E(X)]²\n\nAre you working with discrete or continuous distributions?";
  if (q.includes('hello') || q.includes('hi') || q.includes('hey'))
    return "Hello! 😊 What maths topic can I help you with today?";
  if (q.includes('thank'))
    return "You're welcome! Let me know if you have more questions. 😊";
  if (q.includes('founder') || q.includes('who made') || q.includes('who created') || q.includes('who built') || q.includes('etchi tabe') || q.includes('about etchimaths'))
    return "Etchimaths was founded by Etchi Tabe Agbor, a passionate mathematics educator dedicated to making maths accessible and engaging for students.\n\nThe app covers 14 core university mathematics topics with interactive solvers, practice exercises, and curriculum tools.";
  if (q.includes('website') || q.includes('web site') || q.includes('online'))
    return "You can visit the official Etchimaths website at:\n\n🌐 https://www.etchimaths.com\n\nFind resources, updates, and more there!";
  if (q.includes('facebook') || q.includes('fb page'))
    return "Follow Etchimaths on Facebook for updates, tips, and community support:\n\n📘 https://www.facebook.com/Etchimaths";
  if (q.includes('youtube') || q.includes('you tube') || q.includes('video') || q.includes('channel'))
    return "Watch maths tutorials and worked examples on the Etchimaths YouTube channel:\n\n▶️ https://www.youtube.com/channel/UCk9HNxH9fCmUHw0ze3677BA";
  return "I'm still under development and getting smarter every day! 🚧\n\nI couldn't quite understand that yet, but I can currently help with:\n\n• Complex Numbers\n• Integration & Differentiation\n• Differential Equations\n• Matrices\n• Laplace Transforms\n• Trigonometry\n• Vectors\n• Probability\n\nTry asking about one of these topics!";
}

export default function AIScreen() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const listRef = useRef(null);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = { id: Date.now().toString(), role: 'user', text, time: now() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setThinking(true);

    setTimeout(() => {
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: getAIReply(text),
        time: now(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setThinking(false);
    }, 800);
  };

  const renderItem = ({ item }) => {
    const isUser = item.role === 'user';
    return (
      <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleAI]}>
        {!isUser && (
          <View style={styles.aiAvatar}>
            <Ionicons name="sparkles" size={14} color={colors.gold} />
          </View>
        )}
        <View style={[styles.bubbleInner, isUser ? styles.bubbleInnerUser : styles.bubbleInnerAI]}>
          <Text style={[styles.bubbleText, isUser ? styles.bubbleTextUser : styles.bubbleTextAI]}>
            {item.text}
          </Text>
          <Text style={[styles.bubbleTime, isUser ? styles.bubbleTimeUser : styles.bubbleTimeAI]}>
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAvatar}>
            <Ionicons name="sparkles" size={18} color={colors.gold} />
          </View>
          <View>
            <Text style={styles.headerTitle}>Etchimaths AI</Text>
            <Text style={styles.headerSub}>Maths tutor · always online</Text>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        {/* Messages */}
        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
          showsVerticalScrollIndicator={false}
        />

        {/* Typing indicator */}
        {thinking && (
          <View style={styles.thinkingRow}>
            <View style={styles.aiAvatar}>
              <Ionicons name="sparkles" size={14} color={colors.gold} />
            </View>
            <View style={styles.thinkingBubble}>
              <Text style={styles.thinkingDots}>• • •</Text>
            </View>
          </View>
        )}

        {/* Input bar */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask a maths question…"
            placeholderTextColor={colors.textMuted}
            multiline
            maxLength={500}
            onSubmitEditing={sendMessage}
            blurOnSubmit={false}
          />
          <TouchableOpacity
            style={[styles.sendBtn, !input.trim() && styles.sendBtnDisabled]}
            onPress={sendMessage}
            disabled={!input.trim()}
          >
            <Ionicons name="send" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.primary },

  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.gold,
  },
  headerTitle: { color: colors.white, fontSize: 16, fontWeight: 'bold' },
  headerSub: { color: '#aac4ff', fontSize: 11, marginTop: 1 },

  list: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: colors.bg,
    flexGrow: 1,
  },

  bubble: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-end',
  },
  bubbleUser: { justifyContent: 'flex-end' },
  bubbleAI: { justifyContent: 'flex-start' },

  aiAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
    marginBottom: 2,
  },

  bubbleInner: {
    maxWidth: '75%',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  bubbleInnerUser: {
    backgroundColor: colors.accent,
    borderBottomRightRadius: 4,
  },
  bubbleInnerAI: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },

  bubbleText: { fontSize: 14, lineHeight: 21 },
  bubbleTextUser: { color: colors.white },
  bubbleTextAI: { color: colors.text },

  bubbleTime: { fontSize: 10, marginTop: 4 },
  bubbleTimeUser: { color: 'rgba(255,255,255,0.6)', textAlign: 'right' },
  bubbleTimeAI: { color: colors.textMuted, textAlign: 'left' },

  thinkingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
    backgroundColor: colors.bg,
  },
  thinkingBubble: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  thinkingDots: { fontSize: 18, color: colors.textMuted, letterSpacing: 4 },

  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.text,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: { backgroundColor: colors.border },
});

