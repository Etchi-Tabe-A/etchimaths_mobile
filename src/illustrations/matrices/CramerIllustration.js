import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Cramer's Rule illustration —
 * Two intersecting planes with force labels meeting at a solution point.
 */

function Beam({ angle, color, label }) {
  return (
    <View style={[styles.beamWrap, { transform: [{ rotate: angle }] }]}>
      <View style={[styles.beam, { backgroundColor: color }]} />
      <View style={[styles.forceLabel, { backgroundColor: color }]}>
        <Text style={styles.forceLabelText}>{label}</Text>
      </View>
    </View>
  );
}

export default function CramerIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cramer's Rule — Force Equilibrium</Text>

      <View style={styles.scene}>
        {/* 3D platform */}
        <View style={styles.platform}>
          {/* Fulcrum / pivot */}
          <View style={styles.pivot}>
            <View style={styles.pivotTriangle} />
          </View>

          {/* Horizontal bar */}
          <View style={styles.bar} />

          {/* Force arrows */}
          <View style={[styles.forceArrow, styles.forceLeft]}>
            <Text style={styles.forceIcon}>⬇</Text>
            <View style={styles.fBadge}>
              <Text style={styles.fBadgeText}>F₁</Text>
            </View>
          </View>

          <View style={[styles.forceArrow, styles.forceRight]}>
            <Text style={[styles.forceIcon, { color: '#00897B' }]}>⬇</Text>
            <View style={[styles.fBadge, { backgroundColor: '#e0f2f1' }]}>
              <Text style={[styles.fBadgeText, { color: '#00695c' }]}>F₂</Text>
            </View>
          </View>

          {/* Equation planes */}
          <View style={[styles.eqPlane, styles.eqPlane1]}>
            <Text style={styles.eqText}>aF₁ + bF₂ = e</Text>
          </View>
          <View style={[styles.eqPlane, styles.eqPlane2]}>
            <Text style={styles.eqText}>cF₁ + dF₂ = f</Text>
          </View>
        </View>
      </View>

      {/* Formula */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>F₁ = Δ₁/Δ    F₂ = Δ₂/Δ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 8 },
  title: { fontSize: 13, fontWeight: '700', color: '#1a237e', marginBottom: 10 },

  scene: {
    transform: [{ perspective: 800 }, { rotateX: '12deg' }, { rotateY: '-6deg' }],
    alignItems: 'center',
  },
  platform: {
    width: 240,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  bar: {
    width: 200,
    height: 6,
    backgroundColor: '#37474f',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pivot: { position: 'absolute', bottom: 18, alignItems: 'center' },
  pivotTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 14,
    borderRightWidth: 14,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#546e7a',
  },

  forceArrow: { position: 'absolute', alignItems: 'center', top: 6 },
  forceLeft: { left: 24 },
  forceRight: { right: 24 },
  forceIcon: { fontSize: 24, color: '#1565c0' },
  fBadge: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 2,
  },
  fBadgeText: { fontSize: 12, fontWeight: '800', color: '#1565c0' },

  eqPlane: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    bottom: 0,
  },
  eqPlane1: {
    left: 4,
    backgroundColor: 'rgba(21,101,192,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(21,101,192,0.3)',
    transform: [{ perspective: 300 }, { rotateY: '10deg' }],
  },
  eqPlane2: {
    right: 4,
    backgroundColor: 'rgba(0,137,123,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0,137,123,0.3)',
    transform: [{ perspective: 300 }, { rotateY: '-10deg' }],
  },
  eqText: { fontSize: 10, fontWeight: '600', color: '#37474f' },

  formulaBar: {
    marginTop: 10,
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    transform: [{ perspective: 600 }, { rotateX: '5deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  formulaText: { color: '#fff', fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
});
