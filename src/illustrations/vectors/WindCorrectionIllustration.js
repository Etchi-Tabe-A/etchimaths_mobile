import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Aircraft Wind Correction illustration —
 * An airplane with heading vector, wind vector, and resultant ground track vector.
 */

function Airplane() {
  return (
    <View style={styles.planeWrap}>
      {/* Fuselage */}
      <View style={styles.fuselage} />
      {/* Nose */}
      <View style={styles.nose} />
      {/* Left wing */}
      <View style={styles.wingLeft} />
      {/* Right wing */}
      <View style={styles.wingRight} />
      {/* Tail fin */}
      <View style={styles.tailFin} />
      {/* Tail wing */}
      <View style={styles.tailWing} />
    </View>
  );
}

function VectorArrow({ color, length, rotation, label, labelPos, style }) {
  return (
    <View style={[styles.vectorBase, style, { transform: [{ rotate: rotation }] }]}>
      <View style={[styles.vectorLine, { width: length, backgroundColor: color }]} />
      <View
        style={{
          width: 0,
          height: 0,
          borderTopWidth: 5,
          borderTopColor: 'transparent',
          borderBottomWidth: 5,
          borderBottomColor: 'transparent',
          borderLeftWidth: 9,
          borderLeftColor: color,
        }}
      />
      <Text
        style={[
          styles.vectorLabel,
          { color },
          labelPos === 'above' ? { top: -15 } : { bottom: -15 },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

function Compass() {
  return (
    <View style={styles.compass}>
      <View style={styles.compassRing}>
        <Text style={styles.compassN}>N</Text>
        <Text style={styles.compassE}>E</Text>
        <Text style={styles.compassS}>S</Text>
        <Text style={styles.compassW}>W</Text>
        <View style={styles.compassNeedle} />
      </View>
    </View>
  );
}

export default function WindCorrectionIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aircraft Wind Correction</Text>

      <View style={styles.scene}>
        {/* Sky backdrop */}
        <View style={styles.sky}>
          {/* Cloud hints */}
          <View style={styles.cloud1} />
          <View style={styles.cloud2} />
        </View>

        {/* Airplane */}
        <View style={styles.planePosition}>
          <Airplane />
        </View>

        {/* Heading vector (Vₐ) — where plane nose points */}
        <VectorArrow
          color="#1565C0"
          length={70}
          rotation="-15deg"
          label="Vₐ"
          labelPos="above"
          style={{ position: 'absolute', top: 52, left: 120 }}
        />

        {/* Wind vector (Vw) — crosswind */}
        <VectorArrow
          color="#C62828"
          length={50}
          rotation="70deg"
          label="Vw"
          labelPos="above"
          style={{ position: 'absolute', top: 48, left: 146 }}
        />

        {/* Ground track / resultant (Vg) */}
        <VectorArrow
          color="#2E7D32"
          length={75}
          rotation="8deg"
          label="Vg"
          labelPos="below"
          style={{ position: 'absolute', top: 68, left: 120 }}
        />

        {/* Drift angle arc */}
        <View style={styles.driftArc}>
          <View style={styles.arcCurve} />
          <Text style={styles.driftLabel}>α</Text>
        </View>

        {/* Compass rose */}
        <Compass />
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>Vg = Vₐ + Vw  ;  sin α = |Vw| sin β / |Vg|</Text>
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#1565C0' }]} />
          <Text style={styles.legendText}>Heading Vₐ</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#C62828' }]} />
          <Text style={styles.legendText}>Wind Vw</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#2E7D32' }]} />
          <Text style={styles.legendText}>Ground Vg</Text>
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
    position: 'relative',
    transform: [{ perspective: 900 }, { rotateX: '12deg' }, { rotateY: '-8deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  sky: {
    position: 'absolute',
    width: 260,
    height: 160,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cloud1: {
    position: 'absolute',
    top: 12,
    left: 20,
    width: 40,
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 7,
    opacity: 0.7,
  },
  cloud2: {
    position: 'absolute',
    top: 24,
    right: 30,
    width: 32,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    opacity: 0.5,
  },

  planePosition: { position: 'absolute', top: 46, left: 56 },
  planeWrap: { position: 'relative', width: 64, height: 30 },
  fuselage: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 44,
    height: 10,
    backgroundColor: '#5c6bc0',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  nose: {
    position: 'absolute',
    top: 11,
    right: 0,
    width: 0,
    height: 0,
    borderTopWidth: 4,
    borderTopColor: 'transparent',
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
    borderLeftWidth: 12,
    borderLeftColor: '#3949ab',
  },
  wingLeft: {
    position: 'absolute',
    top: 4,
    left: 20,
    width: 20,
    height: 6,
    backgroundColor: '#3949ab',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 6,
    transform: [{ skewY: '-6deg' }],
  },
  wingRight: {
    position: 'absolute',
    bottom: 4,
    left: 20,
    width: 20,
    height: 6,
    backgroundColor: '#3949ab',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 6,
    transform: [{ skewY: '6deg' }],
  },
  tailFin: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 3,
    height: 10,
    backgroundColor: '#C62828',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  tailWing: {
    position: 'absolute',
    top: 8,
    left: 0,
    width: 14,
    height: 4,
    backgroundColor: '#3949ab',
    borderRadius: 2,
  },

  vectorBase: { flexDirection: 'row', alignItems: 'center', position: 'relative' },
  vectorLine: { height: 3, borderRadius: 1 },
  vectorLabel: { position: 'absolute', left: 20, fontSize: 10, fontWeight: '800' },

  driftArc: { position: 'absolute', top: 58, left: 132 },
  arcCurve: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ef6c00',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '20deg' }],
  },
  driftLabel: { fontSize: 10, fontWeight: '700', color: '#ef6c00', marginLeft: 18, marginTop: -12 },

  compass: { position: 'absolute', top: 8, right: 8 },
  compassRing: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#1a237e',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.85,
  },
  compassN: { position: 'absolute', top: 1, fontSize: 7, fontWeight: '800', color: '#C62828' },
  compassE: { position: 'absolute', right: 2, fontSize: 7, fontWeight: '700', color: '#1a237e' },
  compassS: { position: 'absolute', bottom: 1, fontSize: 7, fontWeight: '700', color: '#1a237e' },
  compassW: { position: 'absolute', left: 2, fontSize: 7, fontWeight: '700', color: '#1a237e' },
  compassNeedle: {
    width: 2,
    height: 12,
    backgroundColor: '#C62828',
    borderRadius: 1,
  },

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
