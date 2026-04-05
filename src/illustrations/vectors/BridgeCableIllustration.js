import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Bridge Cable Force Resolution illustration —
 * A bridge with cable tensions decomposed into horizontal and vertical components.
 */

function ArrowHead({ direction, color }) {
  const base = { width: 0, height: 0 };
  if (direction === 'up') {
    return (
      <View
        style={[
          base,
          {
            borderLeftWidth: 5,
            borderLeftColor: 'transparent',
            borderRightWidth: 5,
            borderRightColor: 'transparent',
            borderBottomWidth: 8,
            borderBottomColor: color,
          },
        ]}
      />
    );
  }
  if (direction === 'right') {
    return (
      <View
        style={[
          base,
          {
            borderTopWidth: 5,
            borderTopColor: 'transparent',
            borderBottomWidth: 5,
            borderBottomColor: 'transparent',
            borderLeftWidth: 8,
            borderLeftColor: color,
          },
        ]}
      />
    );
  }
  if (direction === 'left') {
    return (
      <View
        style={[
          base,
          {
            borderTopWidth: 5,
            borderTopColor: 'transparent',
            borderBottomWidth: 5,
            borderBottomColor: 'transparent',
            borderRightWidth: 8,
            borderRightColor: color,
          },
        ]}
      />
    );
  }
  return null;
}

function Tower({ side }) {
  return (
    <View style={[styles.tower, side === 'left' ? { left: 10 } : { right: 10 }]}>
      <View style={styles.towerTop} />
      <View style={styles.towerBody} />
    </View>
  );
}

export default function BridgeCableIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bridge Cable Force Resolution</Text>

      <View style={styles.scene}>
        {/* Bridge deck */}
        <View style={styles.deck} />

        {/* Towers */}
        <Tower side="left" />
        <Tower side="right" />

        {/* Left cable */}
        <View style={styles.cableLeft} />
        {/* Right cable */}
        <View style={styles.cableRight} />

        {/* Tension label T₁ */}
        <View style={styles.tensionLabelLeft}>
          <Text style={styles.tensionText}>T₁</Text>
        </View>
        {/* Tension label T₂ */}
        <View style={styles.tensionLabelRight}>
          <Text style={styles.tensionText}>T₂</Text>
        </View>

        {/* Junction point */}
        <View style={styles.junction}>
          <View style={styles.junctionDot} />
        </View>

        {/* Vertical component arrow (Fᵧ) */}
        <View style={styles.vertArrow}>
          <ArrowHead direction="up" color="#C62828" />
          <View style={styles.vertLine} />
          <Text style={styles.compLabel}>Fᵧ</Text>
        </View>

        {/* Horizontal component arrow left (Fₓ) */}
        <View style={styles.horizArrowLeft}>
          <ArrowHead direction="left" color="#2E7D32" />
          <View style={styles.horizLine} />
          <Text style={styles.compLabelH}>Fₓ</Text>
        </View>

        {/* Horizontal component arrow right (Fₓ) */}
        <View style={styles.horizArrowRight}>
          <View style={styles.horizLine} />
          <ArrowHead direction="right" color="#2E7D32" />
          <Text style={styles.compLabelH}>Fₓ</Text>
        </View>

        {/* Weight arrow */}
        <View style={styles.weightArrow}>
          <View style={styles.weightLine} />
          <View style={styles.weightHead} />
          <Text style={styles.weightLabel}>W</Text>
        </View>

        {/* Angle labels */}
        <View style={styles.angleLabelLeft}>
          <Text style={styles.angleText}>θ₁</Text>
        </View>
        <View style={styles.angleLabelRight}>
          <Text style={styles.angleText}>θ₂</Text>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>
          T₁cos θ₁ = T₂cos θ₂  ;  T₁sin θ₁ + T₂sin θ₂ = W
        </Text>
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#1565C0' }]} />
          <Text style={styles.legendText}>Tension</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#C62828' }]} />
          <Text style={styles.legendText}>Vertical</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#2E7D32' }]} />
          <Text style={styles.legendText}>Horizontal</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 8 },
  title: { fontSize: 13, fontWeight: '700', color: '#1a237e', marginBottom: 10 },

  scene: {
    width: 260,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ perspective: 900 }, { rotateX: '14deg' }, { rotateY: '-6deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  deck: {
    position: 'absolute',
    bottom: 20,
    width: 240,
    height: 14,
    backgroundColor: '#5c6bc0',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  tower: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  towerTop: {
    width: 12,
    height: 6,
    backgroundColor: '#3949ab',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  towerBody: {
    width: 10,
    height: 60,
    backgroundColor: '#3949ab',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },

  cableLeft: {
    position: 'absolute',
    top: 36,
    left: 18,
    width: 100,
    height: 3,
    backgroundColor: '#1565C0',
    borderRadius: 1,
    transform: [{ rotate: '28deg' }],
  },
  cableRight: {
    position: 'absolute',
    top: 36,
    right: 18,
    width: 100,
    height: 3,
    backgroundColor: '#1565C0',
    borderRadius: 1,
    transform: [{ rotate: '-28deg' }],
  },

  tensionLabelLeft: { position: 'absolute', top: 32, left: 50 },
  tensionLabelRight: { position: 'absolute', top: 32, right: 50 },
  tensionText: { fontSize: 10, fontWeight: '800', color: '#1565C0' },

  junction: { position: 'absolute', top: 58, alignItems: 'center' },
  junctionDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ef6c00',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  vertArrow: { position: 'absolute', top: 22, alignItems: 'center' },
  vertLine: { width: 3, height: 30, backgroundColor: '#C62828', borderRadius: 1 },
  compLabel: { fontSize: 9, fontWeight: '700', color: '#C62828', marginTop: 1 },

  horizArrowLeft: {
    position: 'absolute',
    top: 60,
    left: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizArrowRight: {
    position: 'absolute',
    top: 60,
    right: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizLine: { width: 36, height: 3, backgroundColor: '#2E7D32', borderRadius: 1 },
  compLabelH: { fontSize: 9, fontWeight: '700', color: '#2E7D32', marginLeft: 2 },

  weightArrow: { position: 'absolute', top: 72, alignItems: 'center' },
  weightLine: { width: 3, height: 28, backgroundColor: '#ef6c00', borderRadius: 1 },
  weightHead: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderTopWidth: 8,
    borderTopColor: '#ef6c00',
  },
  weightLabel: { fontSize: 9, fontWeight: '700', color: '#e65100', marginTop: 1 },

  angleLabelLeft: { position: 'absolute', top: 50, left: 90 },
  angleLabelRight: { position: 'absolute', top: 50, right: 90 },
  angleText: { fontSize: 9, fontWeight: '700', color: '#ef6c00' },

  formulaBar: {
    marginTop: 12,
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    transform: [{ perspective: 600 }, { rotateX: '5deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  formulaText: { color: '#90caf9', fontSize: 11, fontWeight: '600', fontFamily: 'monospace' },

  legendRow: { flexDirection: 'row', gap: 14, marginTop: 8 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  legendDot: { width: 8, height: 8, borderRadius: 4 },
  legendText: { fontSize: 10, color: '#546e7a', fontWeight: '600' },
});
