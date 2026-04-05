import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RadioactiveDecayIllustration = () => {
  // Exponential decay curve points
  const decayPoints = [
    { x: 0, y: 100 },
    { x: 1, y: 82 },
    { x: 2, y: 67 },
    { x: 3, y: 55 },
    { x: 4, y: 45 },
    { x: 5, y: 37 },
    { x: 6, y: 30 },
    { x: 7, y: 25 },
    { x: 8, y: 20 },
    { x: 9, y: 16 },
    { x: 10, y: 13 },
  ];

  const graphWidth = 210;
  const graphHeight = 120;
  const maxX = 10;
  const maxY = 110;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Radioactive Decay and Carbon Dating</Text>

      <View style={styles.scene}>
        {/* 3D glowing radioactive block */}
        <View style={styles.materialSection}>
          <View style={styles.glowOuter}>
            <View style={styles.glowMiddle}>
              <View style={styles.radioBlock}>
                <View style={styles.blockTopFace} />
                <View style={styles.blockRightFace} />
                <View style={styles.blockFrontFace}>
                  <Text style={styles.hazardSymbol}>☢</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Decay particles */}
          <View style={[styles.particle, { top: 8, right: 20 }]} />
          <View style={[styles.particle, { top: 22, right: 8 }]} />
          <View style={[styles.particle, { bottom: 12, right: 15 }]} />
          <View style={[styles.particleSmall, { top: 4, right: 35 }]} />
          <View style={[styles.particleSmall, { top: 30, right: 2 }]} />
        </View>

        {/* Decay curve graph */}
        <View style={styles.graphContainer}>
          <View style={styles.graph3D}>
            {/* N₀ label */}
            <Text style={styles.n0Label}>N₀</Text>

            {/* Half-life marker */}
            <View style={styles.halfLifeLine} />
            <View style={styles.halfLifeHLine} />
            <Text style={styles.halfLifeLabel}>t½</Text>
            <View style={styles.halfLifeDot} />

            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((val, i) => (
              <View
                key={i}
                style={[
                  styles.gridLine,
                  { bottom: (val / maxY) * graphHeight },
                ]}
              />
            ))}

            {/* Curve points */}
            {decayPoints.map((pt, i) => (
              <View
                key={i}
                style={[
                  styles.curvePoint,
                  {
                    left: (pt.x / maxX) * graphWidth - 3.5,
                    bottom: (pt.y / maxY) * graphHeight - 3.5,
                  },
                ]}
              />
            ))}

            {/* Curve segments */}
            {decayPoints.slice(0, -1).map((pt, i) => {
              const next = decayPoints[i + 1];
              const x1 = (pt.x / maxX) * graphWidth;
              const y1 = (pt.y / maxY) * graphHeight;
              const x2 = (next.x / maxX) * graphWidth;
              const y2 = (next.y / maxY) * graphHeight;
              const dx = x2 - x1;
              const dy = y2 - y1;
              const len = Math.sqrt(dx * dx + dy * dy);
              const angle = Math.atan2(-dy, dx) * (180 / Math.PI);
              return (
                <View
                  key={'seg' + i}
                  style={[
                    styles.curveSegment,
                    {
                      width: len,
                      left: x1,
                      bottom: y1,
                      transform: [{ rotate: angle + 'deg' }],
                      transformOrigin: 'left center',
                    },
                  ]}
                />
              );
            })}

            {/* Axis labels */}
            <Text style={styles.yAxisLabel}>N(t)</Text>
            <Text style={styles.xAxisLabel}>t</Text>
          </View>
        </View>

        {/* Half-life info row */}
        <View style={styles.infoRow}>
          <View style={styles.infoBadge}>
            <Text style={styles.infoText}>100%</Text>
          </View>
          <Text style={styles.infoArrow}>→</Text>
          <View style={styles.infoBadgeHalf}>
            <Text style={styles.infoText}>50%</Text>
          </View>
          <Text style={styles.infoArrow}>→</Text>
          <View style={styles.infoBadgeQuarter}>
            <Text style={styles.infoText}>25%</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>N(t) = N₀ · e⁻λᵗ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a237e',
    textAlign: 'center',
    marginBottom: 10,
  },
  scene: {
    alignItems: 'center',
    width: '100%',
  },
  materialSection: {
    position: 'relative',
    width: 120,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  glowOuter: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: 'rgba(46, 125, 50, 0.12)',
  },
  glowMiddle: {
    padding: 8,
    borderRadius: 22,
    backgroundColor: 'rgba(46, 125, 50, 0.2)',
  },
  radioBlock: {
    width: 46,
    height: 42,
    position: 'relative',
    perspective: 600,
  },
  blockFrontFace: {
    width: 46,
    height: 42,
    backgroundColor: '#2E7D32',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  blockTopFace: {
    position: 'absolute',
    top: -8,
    left: 5,
    width: 40,
    height: 10,
    backgroundColor: '#43a047',
    borderRadius: 3,
    transform: [{ skewX: '-20deg' }],
  },
  blockRightFace: {
    position: 'absolute',
    top: 3,
    right: -8,
    width: 10,
    height: 36,
    backgroundColor: '#1b5e20',
    borderRadius: 3,
    transform: [{ skewY: '-20deg' }],
  },
  hazardSymbol: {
    fontSize: 20,
    color: '#c8e6c9',
  },
  particle: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef6c00',
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 3,
  },
  particleSmall: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#C62828',
    opacity: 0.8,
  },
  graphContainer: {
    perspective: 800,
    marginBottom: 10,
  },
  graph3D: {
    width: 220,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1a237e',
    padding: 5,
    transform: [{ rotateX: '6deg' }, { rotateY: '-4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 7,
    position: 'relative',
    overflow: 'hidden',
  },
  n0Label: {
    position: 'absolute',
    left: 3,
    top: 4,
    fontSize: 10,
    fontWeight: '700',
    color: '#C62828',
  },
  halfLifeLine: {
    position: 'absolute',
    left: 75,
    top: 0,
    width: 2,
    height: '100%',
    backgroundColor: '#ef6c00',
    opacity: 0.5,
  },
  halfLifeHLine: {
    position: 'absolute',
    left: 0,
    bottom: 55,
    width: 77,
    height: 2,
    backgroundColor: '#ef6c00',
    opacity: 0.5,
  },
  halfLifeLabel: {
    position: 'absolute',
    left: 68,
    bottom: 2,
    fontSize: 10,
    fontWeight: '700',
    color: '#ef6c00',
  },
  halfLifeDot: {
    position: 'absolute',
    left: 71,
    bottom: 51,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ef6c00',
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 10,
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#90caf9',
    opacity: 0.35,
  },
  curvePoint: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#2E7D32',
    zIndex: 5,
  },
  curveSegment: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#2E7D32',
    borderRadius: 1.5,
    zIndex: 4,
  },
  yAxisLabel: {
    position: 'absolute',
    left: 2,
    top: 18,
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
  },
  xAxisLabel: {
    position: 'absolute',
    right: 6,
    bottom: 2,
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    gap: 4,
  },
  infoBadge: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  infoBadgeHalf: {
    backgroundColor: '#ef6c00',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  infoBadgeQuarter: {
    backgroundColor: '#C62828',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '700',
  },
  infoArrow: {
    fontSize: 14,
    color: '#1a237e',
    fontWeight: '700',
  },
  formulaBar: {
    backgroundColor: '#1a237e',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 6,
    transform: [{ perspective: 600 }, { rotateX: '4deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default RadioactiveDecayIllustration;
