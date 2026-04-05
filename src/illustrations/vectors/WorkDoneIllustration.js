import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Work Done on a Crate illustration —
 * An isometric crate being pushed along a surface with force and displacement vectors.
 */

function Crate() {
  return (
    <View style={styles.crateWrap}>
      {/* Top face */}
      <View style={styles.crateTop} />
      {/* Front face */}
      <View style={styles.crateFront}>
        <View style={styles.crateStripe} />
        <View style={styles.crateStripe} />
      </View>
      {/* Side face */}
      <View style={styles.crateSide} />
    </View>
  );
}

function ArrowVector({ style, lineStyle, headStyle, label, labelStyle }) {
  return (
    <View style={style}>
      <View style={lineStyle} />
      <View style={headStyle} />
      {label ? <Text style={labelStyle}>{label}</Text> : null}
    </View>
  );
}

export default function WorkDoneIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>3D Work Done on a Crate</Text>

      <View style={styles.scene}>
        {/* Ground plane */}
        <View style={styles.ground}>
          {/* Surface texture lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <View key={i} style={[styles.groundLine, { left: i * 30 + 10 }]} />
          ))}
        </View>

        {/* Crate */}
        <View style={styles.cratePosition}>
          <Crate />
        </View>

        {/* Force vector (F) — angled up-right */}
        <View style={styles.forceArrow}>
          <View style={styles.forceLine} />
          <View style={styles.forceHead} />
          <Text style={styles.forceLabel}>F</Text>
        </View>

        {/* Displacement vector (d) — horizontal right */}
        <View style={styles.dispArrow}>
          <View style={styles.dispLine} />
          <View style={styles.dispHead} />
          <Text style={styles.dispLabel}>d</Text>
        </View>

        {/* Angle arc indicator */}
        <View style={styles.angleArc}>
          <View style={styles.arcShape} />
          <Text style={styles.angleLabel}>θ</Text>
        </View>

        {/* Push indicator lines */}
        <View style={styles.pushLines}>
          <View style={styles.pushDash} />
          <View style={[styles.pushDash, { marginTop: 3 }]} />
          <View style={[styles.pushDash, { marginTop: 3 }]} />
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>W = F · d = |F||d| cos θ</Text>
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#C62828' }]} />
          <Text style={styles.legendText}>Force F</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#1565C0' }]} />
          <Text style={styles.legendText}>Displacement d</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#ef6c00' }]} />
          <Text style={styles.legendText}>Angle θ</Text>
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
    height: 150,
    alignItems: 'center',
    justifyContent: 'flex-end',
    transform: [{ perspective: 900 }, { rotateX: '18deg' }, { rotateY: '-10deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  ground: {
    position: 'absolute',
    bottom: 0,
    width: 250,
    height: 30,
    backgroundColor: '#e3f2fd',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#90caf9',
    overflow: 'hidden',
  },
  groundLine: {
    position: 'absolute',
    top: 0,
    width: 1,
    height: '100%',
    backgroundColor: '#90caf9',
    opacity: 0.4,
  },

  cratePosition: { position: 'absolute', bottom: 26, left: 60 },
  crateWrap: { position: 'relative', width: 48, height: 52 },
  crateTop: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: 40,
    height: 14,
    backgroundColor: '#ef6c00',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    transform: [{ skewX: '-10deg' }],
  },
  crateFront: {
    position: 'absolute',
    top: 12,
    left: 0,
    width: 40,
    height: 36,
    backgroundColor: '#e65100',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  crateStripe: {
    width: 30,
    height: 2,
    backgroundColor: '#bf360c',
    borderRadius: 1,
  },
  crateSide: {
    position: 'absolute',
    top: 12,
    right: 0,
    width: 12,
    height: 36,
    backgroundColor: '#bf360c',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },

  forceArrow: {
    position: 'absolute',
    bottom: 60,
    left: 44,
    flexDirection: 'row',
    alignItems: 'flex-end',
    transform: [{ rotate: '-35deg' }],
  },
  forceLine: {
    width: 60,
    height: 3,
    backgroundColor: '#C62828',
    borderRadius: 1,
  },
  forceHead: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: '#C62828',
  },
  forceLabel: {
    position: 'absolute',
    top: -16,
    left: 20,
    fontSize: 11,
    fontWeight: '800',
    color: '#C62828',
  },

  dispArrow: {
    position: 'absolute',
    bottom: 34,
    left: 112,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dispLine: {
    width: 80,
    height: 3,
    backgroundColor: '#1565C0',
    borderRadius: 1,
  },
  dispHead: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: '#1565C0',
  },
  dispLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1565C0',
    marginLeft: 3,
  },

  angleArc: { position: 'absolute', bottom: 42, left: 102 },
  arcShape: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ef6c00',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  angleLabel: { fontSize: 10, fontWeight: '700', color: '#ef6c00', marginTop: -2, marginLeft: 20 },

  pushLines: { position: 'absolute', bottom: 52, left: 36 },
  pushDash: {
    width: 8,
    height: 2,
    backgroundColor: '#00897B',
    borderRadius: 1,
    opacity: 0.6,
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
