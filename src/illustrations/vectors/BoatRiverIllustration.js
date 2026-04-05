import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Boat Crossing a River illustration —
 * A river with a boat, river current arrow, boat velocity arrow, and resultant path.
 */

function RiverSurface() {
  return (
    <View style={styles.river}>
      {/* Water ripple lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <View key={i} style={[styles.ripple, { top: 8 + i * 22 }]} />
      ))}
    </View>
  );
}

function Bank({ side }) {
  return (
    <View style={[styles.bank, side === 'left' ? styles.bankLeft : styles.bankRight]}>
      {/* Grass texture */}
      <View style={styles.grassStripe} />
      <View style={[styles.grassStripe, { top: 10 }]} />
      {side === 'left' && <Text style={styles.bankLabel}>South bank</Text>}
      {side === 'right' && <Text style={styles.bankLabel}>North bank</Text>}
    </View>
  );
}

function Boat() {
  return (
    <View style={styles.boatWrap}>
      {/* Hull */}
      <View style={styles.hull} />
      {/* Cabin */}
      <View style={styles.cabin} />
      {/* Mast */}
      <View style={styles.mast} />
    </View>
  );
}

export default function BoatRiverIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boat Crossing a River</Text>

      <View style={styles.scene}>
        {/* Left bank */}
        <Bank side="left" />

        {/* River */}
        <RiverSurface />

        {/* Right bank */}
        <Bank side="right" />

        {/* Boat */}
        <View style={styles.boatPosition}>
          <Boat />
        </View>

        {/* Boat velocity vector (Vb) — pointing across river (upward) */}
        <View style={styles.vbArrow}>
          <View style={styles.vbLine} />
          <View style={styles.vbHead} />
          <Text style={styles.vbLabel}>Vb</Text>
        </View>

        {/* River current vector (Vc) — pointing right along river */}
        <View style={styles.vcArrow}>
          <View style={styles.vcLine} />
          <View style={styles.vcHead} />
          <Text style={styles.vcLabel}>Vc</Text>
        </View>

        {/* Resultant velocity vector (Vr) — diagonal */}
        <View style={styles.vrArrow}>
          <View style={styles.vrLine} />
          <View style={styles.vrHead} />
          <Text style={styles.vrLabel}>Vr</Text>
        </View>

        {/* Current flow indicators */}
        <View style={styles.flowIndicators}>
          {Array.from({ length: 3 }).map((_, i) => (
            <View key={i} style={styles.flowArrow}>
              <View style={styles.flowLine} />
              <View style={styles.flowHead} />
            </View>
          ))}
        </View>

        {/* Angle indicator */}
        <View style={styles.angleWrap}>
          <View style={styles.angleCurve} />
          <Text style={styles.angleLabel}>θ</Text>
        </View>

        {/* Dashed actual path */}
        <View style={styles.dashedPath}>
          {Array.from({ length: 8 }).map((_, i) => (
            <View key={i} style={styles.dash} />
          ))}
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>Vr = Vb + Vc  ;  tan θ = Vc / Vb</Text>
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#1565C0' }]} />
          <Text style={styles.legendText}>Boat Vb</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#ef6c00' }]} />
          <Text style={styles.legendText}>Current Vc</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#2E7D32' }]} />
          <Text style={styles.legendText}>Resultant Vr</Text>
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
    height: 170,
    flexDirection: 'row',
    alignItems: 'stretch',
    transform: [{ perspective: 900 }, { rotateX: '16deg' }, { rotateY: '-6deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    borderRadius: 8,
    overflow: 'hidden',
  },

  bank: {
    width: 44,
    backgroundColor: '#a5d6a7',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 6,
    position: 'relative',
    overflow: 'hidden',
  },
  bankLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  bankRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  grassStripe: {
    position: 'absolute',
    top: 4,
    width: '80%',
    height: 2,
    backgroundColor: '#66bb6a',
    borderRadius: 1,
    opacity: 0.5,
  },
  bankLabel: { fontSize: 7, fontWeight: '700', color: '#2E7D32', textAlign: 'center' },

  river: {
    flex: 1,
    backgroundColor: '#1565C0',
    position: 'relative',
    overflow: 'hidden',
  },
  ripple: {
    position: 'absolute',
    left: 8,
    width: '80%',
    height: 2,
    backgroundColor: '#90caf9',
    borderRadius: 1,
    opacity: 0.35,
  },

  boatPosition: { position: 'absolute', bottom: 40, left: 70 },
  boatWrap: { alignItems: 'center', position: 'relative', width: 28, height: 30 },
  hull: {
    position: 'absolute',
    bottom: 0,
    width: 28,
    height: 10,
    backgroundColor: '#5c6bc0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  cabin: {
    position: 'absolute',
    bottom: 8,
    width: 14,
    height: 10,
    backgroundColor: '#3949ab',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  mast: {
    position: 'absolute',
    bottom: 16,
    width: 2,
    height: 14,
    backgroundColor: '#1a237e',
    borderRadius: 1,
  },

  /* Boat velocity Vb — upward across river */
  vbArrow: {
    position: 'absolute',
    bottom: 72,
    left: 80,
    alignItems: 'center',
  },
  vbLine: { width: 3, height: 52, backgroundColor: '#e3f2fd', borderRadius: 1 },
  vbHead: {
    width: 0, height: 0,
    borderLeftWidth: 5, borderLeftColor: 'transparent',
    borderRightWidth: 5, borderRightColor: 'transparent',
    borderBottomWidth: 8, borderBottomColor: '#e3f2fd',
  },
  vbLabel: { fontSize: 10, fontWeight: '800', color: '#e3f2fd', marginTop: 2 },

  /* River current Vc — rightward */
  vcArrow: {
    position: 'absolute',
    bottom: 54,
    left: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vcLine: { width: 50, height: 3, backgroundColor: '#ef6c00', borderRadius: 1 },
  vcHead: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderLeftWidth: 8, borderLeftColor: '#ef6c00',
  },
  vcLabel: { fontSize: 10, fontWeight: '800', color: '#ef6c00', marginLeft: 3 },

  /* Resultant Vr — diagonal up-right */
  vrArrow: {
    position: 'absolute',
    bottom: 56,
    left: 86,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '-46deg' }],
  },
  vrLine: { width: 72, height: 3, backgroundColor: '#2E7D32', borderRadius: 1 },
  vrHead: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderLeftWidth: 8, borderLeftColor: '#2E7D32',
  },
  vrLabel: {
    position: 'absolute',
    top: -14,
    left: 30,
    fontSize: 10,
    fontWeight: '800',
    color: '#2E7D32',
  },

  flowIndicators: {
    position: 'absolute',
    top: 14,
    left: 80,
    gap: 30,
  },
  flowArrow: { flexDirection: 'row', alignItems: 'center' },
  flowLine: { width: 16, height: 2, backgroundColor: '#90caf9', borderRadius: 1, opacity: 0.5 },
  flowHead: {
    width: 0, height: 0,
    borderTopWidth: 3, borderTopColor: 'transparent',
    borderBottomWidth: 3, borderBottomColor: 'transparent',
    borderLeftWidth: 5, borderLeftColor: '#90caf9',
    opacity: 0.5,
  },

  angleWrap: { position: 'absolute', bottom: 60, left: 84 },
  angleCurve: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#ef6c00',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '40deg' }],
  },
  angleLabel: { fontSize: 9, fontWeight: '700', color: '#ef6c00', marginTop: -2, marginLeft: 16 },

  dashedPath: {
    position: 'absolute',
    bottom: 56,
    left: 88,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '-46deg' }],
    gap: 4,
  },
  dash: {
    width: 6,
    height: 2,
    backgroundColor: '#C62828',
    borderRadius: 1,
    opacity: 0.5,
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
