import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 3D Leontief Economy illustration —
 * Two interlocked factory cubes feeding into each other with demand arrows.
 */

function Cube({ color, label, size = 60, offsetX = 0, offsetY = 0 }) {
  const DEPTH = size * 0.35;
  return (
    <View style={[styles.cubeWrap, { width: size + DEPTH, height: size + DEPTH, marginLeft: offsetX, marginTop: offsetY }]}>
      {/* Front face */}
      <View style={[styles.cubeFront, { width: size, height: size, backgroundColor: color, top: DEPTH, left: 0 }]}>
        <Text style={styles.cubeLabel}>{label}</Text>
      </View>
      {/* Top face */}
      <View style={[styles.cubeTop, {
        width: size, height: DEPTH,
        backgroundColor: lighten(color, 25),
        top: 0, left: DEPTH * 0.6,
        transform: [{ skewX: '-40deg' }],
      }]} />
      {/* Right face */}
      <View style={[styles.cubeRight, {
        width: DEPTH, height: size,
        backgroundColor: darken(color, 15),
        top: DEPTH * 0.58, left: size,
        transform: [{ skewY: '-40deg' }],
      }]} />
    </View>
  );
}

function Arrow({ horizontal, length = 40 }) {
  if (horizontal) {
    return (
      <View style={styles.arrowH}>
        <View style={[styles.arrowLine, { width: length }]} />
        <View style={styles.arrowHeadRight} />
      </View>
    );
  }
  return (
    <View style={styles.arrowV}>
      <View style={[styles.arrowLineV, { height: length }]} />
      <View style={styles.arrowHeadDown} />
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

export default function LeontiefIllustration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leontief Input-Output Model</Text>

      <View style={styles.scene}>
        {/* Two sector cubes */}
        <View style={styles.cubesRow}>
          <Cube color="#1565C0" label="S₁" size={58} />
          <View style={styles.arrowsBetween}>
            <Arrow horizontal length={36} />
            <View style={{ height: 8 }} />
            <View style={{ transform: [{ scaleX: -1 }] }}>
              <Arrow horizontal length={36} />
            </View>
          </View>
          <Cube color="#00897B" label="S₂" size={58} />
        </View>

        {/* Arrows down to demand */}
        <View style={styles.demandRow}>
          <View style={styles.demandItem}>
            <Arrow horizontal={false} length={22} />
            <View style={styles.demandBox}>
              <Text style={styles.demandText}>d₁</Text>
            </View>
          </View>
          <View style={{ width: 68 }} />
          <View style={styles.demandItem}>
            <Arrow horizontal={false} length={22} />
            <View style={[styles.demandBox, { backgroundColor: '#e0f2f1' }]}>
              <Text style={[styles.demandText, { color: '#00695c' }]}>d₂</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 3D matrix at bottom */}
      <View style={styles.matrixRow}>
        <View style={styles.matrix3d}>
          <Text style={styles.matEq}>X = (I − A)⁻¹ · D</Text>
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
    transform: [{ perspective: 800 }, { rotateX: '6deg' }],
  },
  cubesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cubeWrap: { position: 'relative' },
  cubeFront: {
    position: 'absolute',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cubeTop: { position: 'absolute', borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  cubeRight: { position: 'absolute', borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  cubeLabel: { color: '#fff', fontSize: 18, fontWeight: '800' },

  arrowsBetween: { marginHorizontal: 4, alignItems: 'center' },
  arrowH: { flexDirection: 'row', alignItems: 'center' },
  arrowLine: { height: 2.5, backgroundColor: '#5c6bc0', borderRadius: 1 },
  arrowHeadRight: {
    width: 0, height: 0,
    borderTopWidth: 5, borderTopColor: 'transparent',
    borderBottomWidth: 5, borderBottomColor: 'transparent',
    borderLeftWidth: 7, borderLeftColor: '#5c6bc0',
  },
  arrowV: { alignItems: 'center' },
  arrowLineV: { width: 2.5, backgroundColor: '#5c6bc0', borderRadius: 1 },
  arrowHeadDown: {
    width: 0, height: 0,
    borderLeftWidth: 5, borderLeftColor: 'transparent',
    borderRightWidth: 5, borderRightColor: 'transparent',
    borderTopWidth: 7, borderTopColor: '#5c6bc0',
  },

  demandRow: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  demandItem: { alignItems: 'center' },
  demandBox: {
    backgroundColor: '#e3f2fd',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginTop: 2,
  },
  demandText: { fontSize: 13, fontWeight: '700', color: '#1565c0' },

  matrixRow: { marginTop: 10 },
  matrix3d: {
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    transform: [{ perspective: 600 }, { rotateX: '8deg' }, { rotateY: '-4deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 6,
  },
  matEq: { color: '#fff', fontSize: 13, fontWeight: '700', letterSpacing: 0.5 },
});
