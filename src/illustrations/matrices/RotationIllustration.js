import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D image-rotation illustration —
 * A sprite on a 3D-tilted grid, with an arc showing rotation angle θ.
 */

function GridPlane() {
  const ROWS = 5;
  const COLS = 5;
  const CELL = 28;
  return (
    <View style={[styles.grid, { width: COLS * CELL, height: ROWS * CELL }]}>
      {Array.from({ length: ROWS }).map((_, r) => (
        <View key={r} style={styles.gridRow}>
          {Array.from({ length: COLS }).map((_, c) => (
            <View
              key={c}
              style={[
                styles.gridCell,
                { width: CELL, height: CELL },
                (r + c) % 2 === 0 ? styles.cellLight : styles.cellDark,
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

function Sprite({ x, y, rotated }) {
  return (
    <View
      style={[
        styles.sprite,
        { left: x, top: y },
        rotated && { transform: [{ rotate: '45deg' }] },
      ]}
    >
      <Text style={styles.spriteIcon}>{rotated ? '🚀' : '✈️'}</Text>
    </View>
  );
}

export default function RotationIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>2D Rotation Matrix — R(θ)</Text>

      <View style={styles.scene}>
        {/* 3D-tilted grid */}
        <View style={styles.gridWrap}>
          <GridPlane />
          {/* Original sprite */}
          <Sprite x={54} y={44} />
          {/* Rotated sprite */}
          <Sprite x={88} y={20} rotated />

          {/* Rotation arc */}
          <View style={styles.arc} />

          {/* Angle label */}
          <View style={styles.thetaLabel}>
            <Text style={styles.theta}>θ</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <View style={styles.formulaBox}>
          <Text style={styles.formulaText}>
            {'R(θ) = '}
          </Text>
        </View>
        <View style={styles.matrixBox}>
          <View style={styles.matRow}>
            <Text style={styles.matCell}>cos θ</Text>
            <Text style={styles.matCell}> −sin θ</Text>
          </View>
          <View style={styles.matRow}>
            <Text style={styles.matCell}>sin θ</Text>
            <Text style={styles.matCell}> cos θ</Text>
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
    transform: [{ perspective: 800 }, { rotateX: '18deg' }, { rotateY: '-8deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  gridWrap: { position: 'relative' },
  grid: { borderRadius: 6, overflow: 'hidden', borderWidth: 1, borderColor: '#90caf9' },
  gridRow: { flexDirection: 'row' },
  gridCell: {},
  cellLight: { backgroundColor: '#e3f2fd' },
  cellDark: { backgroundColor: '#bbdefb' },

  sprite: { position: 'absolute' },
  spriteIcon: { fontSize: 22 },

  arc: {
    position: 'absolute',
    left: 60,
    top: 28,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#ef6c00',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '-30deg' }],
  },
  thetaLabel: { position: 'absolute', left: 82, top: 18 },
  theta: { color: '#ef6c00', fontSize: 14, fontWeight: '800', fontStyle: 'italic' },

  formulaBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
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
  formulaBox: { marginRight: 4 },
  formulaText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  matrixBox: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#90caf9',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  matRow: { flexDirection: 'row' },
  matCell: { color: '#90caf9', fontSize: 11, fontWeight: '600', width: 48, textAlign: 'center' },
});
