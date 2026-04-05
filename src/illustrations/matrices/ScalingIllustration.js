import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Scaling & Reflection illustration —
 * An anchor point being scaled / reflected on a 3D grid with
 * before/after positions.
 */

function GridFloor() {
  const ROWS = 6;
  const COLS = 6;
  const CELL = 24;
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
                (r + c) % 2 === 0 ? styles.cellA : styles.cellB,
              ]}
            />
          ))}
        </View>
      ))}
      {/* Axes */}
      <View style={styles.axisX} />
      <View style={styles.axisY} />
      <Text style={styles.axisLabelX}>x</Text>
      <Text style={styles.axisLabelY}>y</Text>
    </View>
  );
}

function Point({ x, y, color, label }) {
  return (
    <View style={[styles.point, { left: x, top: y }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.dotLabel, { color }]}>{label}</Text>
    </View>
  );
}

export default function ScalingIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scaling & Reflection Transform</Text>

      <View style={styles.scene}>
        <View style={styles.gridWrap}>
          <GridFloor />

          {/* Original point */}
          <Point x={68} y={50} color="#1565C0" label="P" />

          {/* Scaled point */}
          <Point x={108} y={26} color="#C62828" label="P′" />

          {/* Reflected point (dashed indicator) */}
          <View style={styles.reflectLine} />
          <Point x={108} y={92} color="#6A1B9A" label="P″" />

          {/* Scale arrows */}
          <View style={styles.scaleArrowH}>
            <View style={styles.scaleLineH} />
            <Text style={styles.scaleText}>sₓ</Text>
          </View>
          <View style={styles.scaleArrowV}>
            <View style={styles.scaleLineV} />
            <Text style={styles.scaleText}>sᵧ</Text>
          </View>
        </View>
      </View>

      {/* Formula */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>
          {'[sₓ  0 ] · [x]   [sₓ·x]'}
        </Text>
        <Text style={styles.formulaText}>
          {'[0  sᵧ]   [y] = [sᵧ·y]'}
        </Text>
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#1565C0' }]} />
          <Text style={styles.legendText}>Original</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#C62828' }]} />
          <Text style={styles.legendText}>Scaled</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#6A1B9A' }]} />
          <Text style={styles.legendText}>Reflected</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 8 },
  title: { fontSize: 13, fontWeight: '700', color: '#1a237e', marginBottom: 10 },

  scene: {
    transform: [{ perspective: 900 }, { rotateX: '16deg' }, { rotateY: '-8deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  gridWrap: { position: 'relative' },
  grid: {
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#b0bec5',
  },
  gridRow: { flexDirection: 'row' },
  gridCell: {},
  cellA: { backgroundColor: '#eceff1' },
  cellB: { backgroundColor: '#cfd8dc' },

  axisX: {
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    height: 2,
    backgroundColor: '#455a64',
  },
  axisY: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: 2,
    height: '100%',
    backgroundColor: '#455a64',
  },
  axisLabelX: { position: 'absolute', right: 2, top: '50%', fontSize: 10, fontWeight: '700', color: '#455a64' },
  axisLabelY: { position: 'absolute', left: '50%', top: 2, fontSize: 10, fontWeight: '700', color: '#455a64', marginLeft: 4 },

  point: { position: 'absolute', alignItems: 'center' },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  dotLabel: { fontSize: 10, fontWeight: '800', marginTop: 1 },

  reflectLine: {
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: '#6A1B9A',
    borderStyle: 'dashed',
    opacity: 0.4,
  },

  scaleArrowH: {
    position: 'absolute',
    left: 72,
    top: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scaleLineH: { width: 30, height: 2, backgroundColor: '#ef6c00', borderRadius: 1 },
  scaleArrowV: {
    position: 'absolute',
    left: 114,
    top: 30,
    alignItems: 'center',
  },
  scaleLineV: { width: 2, height: 20, backgroundColor: '#ef6c00', borderRadius: 1 },
  scaleText: { fontSize: 9, fontWeight: '700', color: '#e65100', marginLeft: 2 },

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
