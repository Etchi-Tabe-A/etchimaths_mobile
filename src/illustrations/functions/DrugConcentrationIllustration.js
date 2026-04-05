import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrugConcentrationIllustration = () => {
  // Concentration curve: rapid rise then exponential decay
  const concPoints = [
    { x: 0, y: 0 },
    { x: 0.5, y: 40 },
    { x: 1, y: 75 },
    { x: 1.5, y: 92 },
    { x: 2, y: 88 },
    { x: 3, y: 72 },
    { x: 4, y: 55 },
    { x: 5, y: 42 },
    { x: 6, y: 32 },
    { x: 7, y: 24 },
    { x: 8, y: 18 },
    { x: 9, y: 13 },
    { x: 10, y: 10 },
  ];

  const graphWidth = 210;
  const graphHeight = 120;
  const maxX = 10;
  const maxY = 105;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drug Concentration in the Bloodstream</Text>

      <View style={styles.scene}>
        {/* 3D Pill and Syringe */}
        <View style={styles.medSection}>
          {/* 3D Pill capsule */}
          <View style={styles.pillContainer}>
            <View style={styles.pillLeft} />
            <View style={styles.pillRight} />
            <View style={styles.pillShine} />
            <View style={styles.pillShadow} />
          </View>

          {/* 3D Syringe */}
          <View style={styles.syringeContainer}>
            <View style={styles.syringeBarrel}>
              <View style={styles.syringeLiquid} />
              <View style={styles.syringeTick1} />
              <View style={styles.syringeTick2} />
              <View style={styles.syringeTick3} />
            </View>
            <View style={styles.syringeNeedle} />
            <View style={styles.syringePlunger} />
            <View style={styles.syringeSide} />
          </View>
        </View>

        {/* Concentration curve graph */}
        <View style={styles.graphContainer}>
          <View style={styles.graph3D}>
            {/* Peak marker */}
            <View style={styles.peakLine} />
            <View style={styles.peakDot} />
            <Text style={styles.peakLabel}>Cmax</Text>

            {/* Therapeutic range band */}
            <View style={styles.therapeuticBand} />
            <Text style={styles.therapeuticLabel}>Therapeutic</Text>

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
            {concPoints.map((pt, i) => (
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
            {concPoints.slice(0, -1).map((pt, i) => {
              const next = concPoints[i + 1];
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
            <Text style={styles.yAxisLabel}>C(t)</Text>
            <Text style={styles.xAxisLabel}>t (hrs)</Text>
          </View>
        </View>

        {/* Phase indicators */}
        <View style={styles.phaseRow}>
          <View style={styles.phaseAbsorb}>
            <Text style={styles.phaseText}>Absorption</Text>
          </View>
          <View style={styles.phasePeak}>
            <Text style={styles.phaseText}>Peak</Text>
          </View>
          <View style={styles.phaseElim}>
            <Text style={styles.phaseText}>Elimination</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>C(t) = D · e⁻ᵏᵗ</Text>
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
  medSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    gap: 24,
    perspective: 700,
  },
  pillContainer: {
    width: 60,
    height: 26,
    flexDirection: 'row',
    position: 'relative',
    transform: [{ rotateY: '-12deg' }, { rotateX: '6deg' }],
  },
  pillLeft: {
    width: 30,
    height: 26,
    backgroundColor: '#C62828',
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    shadowColor: '#C62828',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  pillRight: {
    width: 30,
    height: 26,
    backgroundColor: '#ef6c00',
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  pillShine: {
    position: 'absolute',
    top: 4,
    left: 10,
    width: 14,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: 3,
  },
  pillShadow: {
    position: 'absolute',
    bottom: -6,
    left: 8,
    width: 44,
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
  },
  syringeContainer: {
    position: 'relative',
    width: 70,
    height: 28,
    transform: [{ rotateY: '8deg' }, { rotateZ: '-5deg' }],
  },
  syringeBarrel: {
    position: 'absolute',
    left: 10,
    top: 4,
    width: 44,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#9e9e9e',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  syringeLiquid: {
    position: 'absolute',
    left: 0,
    top: 3,
    bottom: 3,
    width: 28,
    backgroundColor: '#00897B',
    borderRadius: 2,
    opacity: 0.7,
  },
  syringeTick1: {
    position: 'absolute',
    top: 0,
    left: 10,
    width: 1,
    height: 6,
    backgroundColor: '#757575',
  },
  syringeTick2: {
    position: 'absolute',
    top: 0,
    left: 20,
    width: 1,
    height: 6,
    backgroundColor: '#757575',
  },
  syringeTick3: {
    position: 'absolute',
    top: 0,
    left: 30,
    width: 1,
    height: 6,
    backgroundColor: '#757575',
  },
  syringeNeedle: {
    position: 'absolute',
    left: 0,
    top: 11,
    width: 12,
    height: 3,
    backgroundColor: '#9e9e9e',
    borderRadius: 1,
  },
  syringePlunger: {
    position: 'absolute',
    right: 0,
    top: 8,
    width: 16,
    height: 12,
    backgroundColor: '#757575',
    borderRadius: 3,
  },
  syringeSide: {
    position: 'absolute',
    left: 12,
    bottom: -4,
    width: 40,
    height: 5,
    backgroundColor: '#bdbdbd',
    borderRadius: 2,
    transform: [{ skewX: '-6deg' }],
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
    transform: [{ rotateX: '7deg' }, { rotateY: '-5deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 7,
    position: 'relative',
    overflow: 'hidden',
  },
  peakLine: {
    position: 'absolute',
    left: 32,
    top: 0,
    width: 2,
    height: '100%',
    backgroundColor: '#ef6c00',
    opacity: 0.4,
  },
  peakDot: {
    position: 'absolute',
    left: 27,
    top: 10,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ef6c00',
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 10,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  peakLabel: {
    position: 'absolute',
    left: 42,
    top: 6,
    fontSize: 9,
    fontWeight: '700',
    color: '#ef6c00',
    zIndex: 10,
  },
  therapeuticBand: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 34,
    height: 32,
    backgroundColor: 'rgba(0, 137, 123, 0.1)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00897B',
    borderStyle: 'dashed',
  },
  therapeuticLabel: {
    position: 'absolute',
    right: 4,
    bottom: 42,
    fontSize: 8,
    color: '#00897B',
    fontWeight: '700',
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
    backgroundColor: '#00897B',
    zIndex: 5,
  },
  curveSegment: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#00897B',
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
    right: 4,
    bottom: 2,
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
  },
  phaseRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 8,
  },
  phaseAbsorb: {
    backgroundColor: '#00897B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  phasePeak: {
    backgroundColor: '#ef6c00',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  phaseElim: {
    backgroundColor: '#5c6bc0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  phaseText: {
    fontSize: 9,
    color: '#fff',
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

export default DrugConcentrationIllustration;
