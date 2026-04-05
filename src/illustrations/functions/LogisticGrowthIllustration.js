import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogisticGrowthIllustration = () => {
  // S-curve data points (logistic growth from 0 toward K)
  const curvePoints = [
    { x: 0, y: 5 },
    { x: 1, y: 8 },
    { x: 2, y: 14 },
    { x: 3, y: 25 },
    { x: 4, y: 42 },
    { x: 5, y: 60 },
    { x: 6, y: 75 },
    { x: 7, y: 85 },
    { x: 8, y: 91 },
    { x: 9, y: 95 },
    { x: 10, y: 97 },
  ];

  const graphWidth = 220;
  const graphHeight = 130;
  const maxX = 10;
  const maxY = 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Population Growth (Logistic Model)</Text>

      <View style={styles.scene}>
        {/* 3D tilted graph area */}
        <View style={styles.graphContainer}>
          <View style={styles.graph3D}>
            {/* Carrying capacity K line */}
            <View style={styles.capacityLine}>
              <Text style={styles.capacityLabel}>K</Text>
            </View>

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

            {/* S-curve points */}
            {curvePoints.map((pt, i) => (
              <View
                key={i}
                style={[
                  styles.curvePoint,
                  {
                    left: (pt.x / maxX) * graphWidth - 4,
                    bottom: (pt.y / maxY) * graphHeight - 4,
                  },
                ]}
              />
            ))}

            {/* Curve segments (bars connecting points) */}
            {curvePoints.slice(0, -1).map((pt, i) => {
              const next = curvePoints[i + 1];
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

            {/* Inflection point marker */}
            <View style={styles.inflectionMarker}>
              <View style={styles.inflectionDot} />
              <Text style={styles.inflectionText}>Inflection</Text>
            </View>

            {/* Axes labels */}
            <Text style={styles.yAxisLabel}>P(t)</Text>
            <Text style={styles.xAxisLabel}>t</Text>
          </View>
        </View>

        {/* 3D Population blocks */}
        <View style={styles.populationBlocks}>
          {/* Small population block */}
          <View style={styles.blockSmall}>
            <View style={styles.blockSmallTop} />
            <View style={styles.blockSmallFront}>
              <Text style={styles.blockText}>Low</Text>
            </View>
            <View style={styles.blockSmallSide} />
          </View>

          {/* Arrow */}
          <Text style={styles.arrow}>→</Text>

          {/* Large population block (at K) */}
          <View style={styles.blockLarge}>
            <View style={styles.blockLargeTop} />
            <View style={styles.blockLargeFront}>
              <Text style={styles.blockTextLarge}>K</Text>
            </View>
            <View style={styles.blockLargeSide} />
          </View>
        </View>

        {/* Growth rate indicator */}
        <View style={styles.rateRow}>
          <View style={styles.rateSlow}>
            <Text style={styles.rateText}>Slow</Text>
          </View>
          <View style={styles.rateFast}>
            <Text style={styles.rateText}>Fast</Text>
          </View>
          <View style={styles.rateSlow}>
            <Text style={styles.rateText}>Slow</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>P(t) = K / (1 + Ae⁻ʳᵗ)</Text>
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
  graphContainer: {
    perspective: 800,
    marginBottom: 12,
  },
  graph3D: {
    width: 230,
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1a237e',
    padding: 5,
    transform: [{ rotateX: '8deg' }, { rotateY: '-5deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  capacityLine: {
    position: 'absolute',
    top: 8,
    left: 5,
    right: 5,
    height: 2,
    backgroundColor: '#C62828',
    borderStyle: 'dashed',
    opacity: 0.7,
  },
  capacityLabel: {
    position: 'absolute',
    right: -2,
    top: -14,
    fontSize: 11,
    fontWeight: '700',
    color: '#C62828',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#90caf9',
    opacity: 0.4,
  },
  curvePoint: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1565C0',
    shadowColor: '#1565C0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 5,
  },
  curveSegment: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#3949ab',
    borderRadius: 1.5,
    zIndex: 4,
  },
  inflectionMarker: {
    position: 'absolute',
    left: 100,
    bottom: 55,
    alignItems: 'center',
    zIndex: 10,
  },
  inflectionDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ef6c00',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
  },
  inflectionText: {
    fontSize: 8,
    color: '#ef6c00',
    fontWeight: '700',
    marginTop: 2,
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
  populationBlocks: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
    perspective: 600,
  },
  blockSmall: {
    width: 36,
    height: 30,
    position: 'relative',
  },
  blockSmallFront: {
    width: 36,
    height: 30,
    backgroundColor: '#5c6bc0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  blockSmallTop: {
    position: 'absolute',
    top: -8,
    left: 4,
    width: 32,
    height: 10,
    backgroundColor: '#7986cb',
    borderRadius: 2,
    transform: [{ skewX: '-20deg' }],
  },
  blockSmallSide: {
    position: 'absolute',
    top: 2,
    right: -8,
    width: 10,
    height: 26,
    backgroundColor: '#3949ab',
    borderRadius: 2,
    transform: [{ skewY: '-20deg' }],
  },
  blockText: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
  },
  arrow: {
    fontSize: 22,
    color: '#2E7D32',
    fontWeight: '700',
    marginHorizontal: 14,
    marginBottom: 10,
  },
  blockLarge: {
    width: 52,
    height: 55,
    position: 'relative',
  },
  blockLargeFront: {
    width: 52,
    height: 55,
    backgroundColor: '#1565C0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 6,
  },
  blockLargeTop: {
    position: 'absolute',
    top: -10,
    left: 6,
    width: 46,
    height: 12,
    backgroundColor: '#42a5f5',
    borderRadius: 3,
    transform: [{ skewX: '-20deg' }],
  },
  blockLargeSide: {
    position: 'absolute',
    top: 4,
    right: -10,
    width: 12,
    height: 48,
    backgroundColor: '#0d47a1',
    borderRadius: 3,
    transform: [{ skewY: '-20deg' }],
  },
  blockTextLarge: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  rateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 8,
  },
  rateSlow: {
    backgroundColor: '#90caf9',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  rateFast: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 8,
  },
  rateText: {
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

export default LogisticGrowthIllustration;
