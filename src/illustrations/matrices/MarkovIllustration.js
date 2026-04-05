import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Markov Chain / Population Migration illustration —
 * City and suburb blocks with curved migration arrows between them.
 */

function Building({ floors, color, label }) {
  return (
    <View style={styles.buildingWrap}>
      <View style={styles.buildingBlock}>
        {Array.from({ length: floors }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.floor,
              { backgroundColor: i === 0 ? color : lighten(color, i * 12) },
            ]}
          >
            <View style={styles.windowRow}>
              {[0, 1, 2].map((w) => (
                <View
                  key={w}
                  style={[
                    styles.window,
                    { backgroundColor: i % 2 === 0 ? '#FFF9C4' : '#FFF176' },
                  ]}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
      {/* Roof */}
      <View style={[styles.roof, { borderBottomColor: darken(color, 30) }]} />
      <Text style={styles.buildLabel}>{label}</Text>
    </View>
  );
}

function MigrationArrow({ direction }) {
  const isRight = direction === 'right';
  return (
    <View style={[styles.migArrow, isRight ? styles.migArrowTop : styles.migArrowBottom]}>
      <View style={styles.migLine} />
      <View style={isRight ? styles.migHeadRight : styles.migHeadLeft} />
      <View style={styles.migRateBox}>
        <Text style={styles.migRateText}>{isRight ? '15%' : '10%'}</Text>
      </View>
    </View>
  );
}

function lighten(hex, pct) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + pct);
  const g = Math.min(255, ((num >> 8) & 0xff) + pct);
  const b = Math.min(255, (num & 0xff) + pct);
  return `rgb(${r},${g},${b})`;
}

function darken(hex, pct) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, ((num >> 16) & 0xff) - pct);
  const g = Math.max(0, ((num >> 8) & 0xff) - pct);
  const b = Math.max(0, (num & 0xff) - pct);
  return `rgb(${r},${g},${b})`;
}

export default function MarkovIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Population Migration — Markov Chain</Text>

      <View style={styles.scene}>
        {/* Ground plane */}
        <View style={styles.ground} />

        <View style={styles.cityRow}>
          <Building floors={4} color="#1565C0" label="🏙️ City" />

          <View style={styles.arrowsBlock}>
            <MigrationArrow direction="right" />
            <MigrationArrow direction="left" />
          </View>

          <Building floors={2} color="#2E7D32" label="🏡 Suburbs" />
        </View>
      </View>

      {/* Transition matrix */}
      <View style={styles.matrixBar}>
        <Text style={styles.matLabel}>T = </Text>
        <View style={styles.matBracket}>
          <View style={styles.matRow}>
            <Text style={styles.matCell}>0.85</Text>
            <Text style={styles.matCell}>0.10</Text>
          </View>
          <View style={styles.matRow}>
            <Text style={styles.matCell}>0.15</Text>
            <Text style={styles.matCell}>0.90</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 8 },
  title: { fontSize: 13, fontWeight: '700', color: '#1a237e', marginBottom: 10 },

  scene: {
    alignItems: 'center',
    transform: [{ perspective: 900 }, { rotateX: '10deg' }, { rotateY: '-4deg' }],
  },
  ground: {
    position: 'absolute',
    bottom: -6,
    width: 260,
    height: 18,
    backgroundColor: '#a5d6a7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  cityRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
  },

  buildingWrap: { alignItems: 'center' },
  buildingBlock: {
    borderRadius: 4,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  floor: { paddingHorizontal: 6, paddingVertical: 4 },
  windowRow: { flexDirection: 'row', gap: 4, justifyContent: 'center' },
  window: { width: 10, height: 8, borderRadius: 1 },
  roof: {
    width: 0,
    height: 0,
    borderLeftWidth: 26,
    borderRightWidth: 26,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '180deg' }],
    marginBottom: 0,
  },
  buildLabel: { fontSize: 11, fontWeight: '700', color: '#37474f', marginTop: 3 },

  arrowsBlock: { justifyContent: 'center', height: 80, gap: 12 },
  migArrow: { flexDirection: 'row', alignItems: 'center', position: 'relative' },
  migArrowTop: {},
  migArrowBottom: { flexDirection: 'row-reverse' },
  migLine: { width: 32, height: 2.5, backgroundColor: '#ef6c00', borderRadius: 1 },
  migHeadRight: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderLeftWidth: 7, borderLeftColor: '#ef6c00',
  },
  migHeadLeft: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderRightWidth: 7, borderRightColor: '#ef6c00',
  },
  migRateBox: { position: 'absolute', top: -14, left: 8 },
  migRateText: { fontSize: 9, fontWeight: '700', color: '#e65100' },

  matrixBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    transform: [{ perspective: 600 }, { rotateX: '5deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  matLabel: { color: '#fff', fontSize: 13, fontWeight: '700' },
  matBracket: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#90caf9',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  matRow: { flexDirection: 'row' },
  matCell: { color: '#90caf9', fontSize: 12, fontWeight: '600', width: 38, textAlign: 'center' },
});
