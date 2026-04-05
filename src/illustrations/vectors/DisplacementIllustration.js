import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Resultant of Two Displacements illustration —
 * Two displacement vectors tip-to-tail on a tilted ground plane with the resultant drawn.
 */

function GroundPlane() {
  const ROWS = 7;
  const COLS = 9;
  const CELL = 22;
  return (
    <View style={[styles.ground, { width: COLS * CELL, height: ROWS * CELL }]}>
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
    </View>
  );
}

function Marker({ x, y, color, label }) {
  return (
    <View style={[styles.marker, { left: x, top: y }]}>
      <View style={[styles.markerDot, { backgroundColor: color }]} />
      <Text style={[styles.markerLabel, { color }]}>{label}</Text>
    </View>
  );
}

export default function DisplacementIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultant of Two Displacements</Text>

      <View style={styles.scene}>
        <View style={styles.groundWrap}>
          <GroundPlane />

          {/* Displacement vector A (d₁) */}
          <View style={styles.vecA}>
            <View style={styles.vecALine} />
            <View style={styles.vecAHead} />
          </View>
          <View style={styles.vecALabel}>
            <Text style={styles.vecAText}>d₁</Text>
          </View>

          {/* Displacement vector B (d₂) — starts at tip of A */}
          <View style={styles.vecB}>
            <View style={styles.vecBLine} />
            <View style={styles.vecBHead} />
          </View>
          <View style={styles.vecBLabel}>
            <Text style={styles.vecBText}>d₂</Text>
          </View>

          {/* Resultant (R) — from start of A to tip of B */}
          <View style={styles.vecR}>
            <View style={styles.vecRLine} />
            <View style={styles.vecRHead} />
          </View>
          <View style={styles.vecRLabel}>
            <Text style={styles.vecRText}>R</Text>
          </View>

          {/* Points */}
          <Marker x={30} y={110} color="#1a237e" label="A" />
          <Marker x={100} y={56} color="#1565C0" label="B" />
          <Marker x={164} y={86} color="#2E7D32" label="C" />

          {/* Angle at origin */}
          <View style={styles.angleArc}>
            <View style={styles.arcShape} />
            <Text style={styles.angleText}>θ</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>R = d₁ + d₂  ;  |R|² = |d₁|² + |d₂|² + 2|d₁||d₂|cos θ</Text>
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#1565C0' }]} />
          <Text style={styles.legendText}>d₁</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#00897B' }]} />
          <Text style={styles.legendText}>d₂</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#C62828' }]} />
          <Text style={styles.legendText}>Resultant R</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 8 },
  title: { fontSize: 13, fontWeight: '700', color: '#1a237e', marginBottom: 10 },

  scene: {
    transform: [{ perspective: 900 }, { rotateX: '18deg' }, { rotateY: '-10deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  groundWrap: { position: 'relative' },
  ground: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#90caf9',
  },
  gridRow: { flexDirection: 'row' },
  gridCell: {},
  cellA: { backgroundColor: '#e3f2fd' },
  cellB: { backgroundColor: '#bbdefb' },

  marker: { position: 'absolute', alignItems: 'center' },
  markerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  markerLabel: { fontSize: 10, fontWeight: '800', marginTop: 1 },

  /* Vector A: from A(30,110) toward B(100,56) — angled up-right */
  vecA: {
    position: 'absolute',
    left: 36,
    top: 108,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '-37deg' }],
  },
  vecALine: { width: 82, height: 3, backgroundColor: '#1565C0', borderRadius: 1 },
  vecAHead: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderLeftWidth: 8, borderLeftColor: '#1565C0',
  },
  vecALabel: { position: 'absolute', left: 58, top: 72 },
  vecAText: { fontSize: 11, fontWeight: '800', color: '#1565C0' },

  /* Vector B: from B(100,56) toward C(164,86) — angled down-right */
  vecB: {
    position: 'absolute',
    left: 106,
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '25deg' }],
  },
  vecBLine: { width: 68, height: 3, backgroundColor: '#00897B', borderRadius: 1 },
  vecBHead: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderLeftWidth: 8, borderLeftColor: '#00897B',
  },
  vecBLabel: { position: 'absolute', left: 132, top: 56 },
  vecBText: { fontSize: 11, fontWeight: '800', color: '#00897B' },

  /* Resultant R: from A(30,110) to C(164,86) — slight angle */
  vecR: {
    position: 'absolute',
    left: 36,
    top: 114,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '-10deg' }],
  },
  vecRLine: {
    width: 132,
    height: 3,
    backgroundColor: '#C62828',
    borderRadius: 1,
    borderStyle: 'solid',
  },
  vecRHead: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderLeftWidth: 8, borderLeftColor: '#C62828',
  },
  vecRLabel: { position: 'absolute', left: 90, top: 120 },
  vecRText: { fontSize: 11, fontWeight: '800', color: '#C62828' },

  angleArc: { position: 'absolute', left: 44, top: 96 },
  arcShape: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ef6c00',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '-45deg' }],
  },
  angleText: { fontSize: 9, fontWeight: '700', color: '#ef6c00', marginTop: -4, marginLeft: 18 },

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
