import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MidpointIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finding the Ideal Meeting Point (Midpoint)</Text>

      <View style={styles.scene}>
        <View style={styles.plane}>
          {/* Grid background */}
          <View style={styles.gridContainer}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View key={`h-${i}`} style={[styles.gridLineH, { top: i * 22 }]} />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <View key={`v-${i}`} style={[styles.gridLineV, { left: i * 22 }]} />
            ))}
          </View>

          {/* X-axis */}
          <View style={styles.xAxis} />
          <Text style={styles.xLabel}>x</Text>

          {/* Y-axis */}
          <View style={styles.yAxis} />
          <Text style={styles.yLabel}>y</Text>

          {/* Line connecting points */}
          <View style={styles.connectingLine} />

          {/* Point A */}
          <View style={[styles.point, styles.pointA]}>
            <View style={styles.pointInner} />
          </View>
          <View style={styles.labelA}>
            <Text style={styles.pointLabel}>A (x₁, y₁)</Text>
          </View>

          {/* Point B */}
          <View style={[styles.point, styles.pointB]}>
            <View style={styles.pointInnerB} />
          </View>
          <View style={styles.labelB}>
            <Text style={styles.pointLabel}>B (x₂, y₂)</Text>
          </View>

          {/* Midpoint M */}
          <View style={[styles.point, styles.pointM]}>
            <View style={styles.pointInnerM} />
          </View>
          <View style={styles.labelM}>
            <Text style={styles.midpointLabel}>M</Text>
          </View>

          {/* Midpoint marker lines */}
          <View style={styles.dashH} />
          <View style={styles.dashV} />

          {/* Flag at midpoint */}
          <View style={styles.flagPole} />
          <View style={styles.flag}>
            <Text style={styles.flagText}>Meet!</Text>
          </View>
        </View>

        {/* 3D shadow */}
        <View style={styles.planeShadow} />
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>M = ((x₁+x₂)/2, (y₁+y₂)/2)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
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
    marginBottom: 10,
  },
  plane: {
    width: 180,
    height: 160,
    backgroundColor: '#e3f2fd',
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#90caf9',
    position: 'relative',
    transform: [{ perspective: 700 }, { rotateX: '-10deg' }, { rotateY: '8deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    overflow: 'hidden',
  },
  gridContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 0,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(21,101,192,0.12)',
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 0,
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgba(21,101,192,0.12)',
  },
  xAxis: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    height: 0,
    borderTopWidth: 1.5,
    borderTopColor: '#3949ab',
  },
  xLabel: {
    position: 'absolute',
    top: 82,
    right: 6,
    fontSize: 10,
    fontWeight: '700',
    color: '#3949ab',
  },
  yAxis: {
    position: 'absolute',
    left: 90,
    top: 0,
    bottom: 0,
    width: 0,
    borderLeftWidth: 1.5,
    borderLeftColor: '#3949ab',
  },
  yLabel: {
    position: 'absolute',
    top: 4,
    left: 93,
    fontSize: 10,
    fontWeight: '700',
    color: '#3949ab',
  },
  connectingLine: {
    position: 'absolute',
    top: 37,
    left: 32,
    width: 122,
    height: 0,
    borderTopWidth: 2,
    borderTopColor: '#5c6bc0',
    borderStyle: 'dashed',
    transform: [{ rotate: '35deg' }],
    transformOrigin: 'left',
  },
  point: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  pointA: {
    top: 28,
    left: 24,
    backgroundColor: '#1565C0',
    shadowColor: '#1565C0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  pointB: {
    top: 108,
    left: 138,
    backgroundColor: '#ef6c00',
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  pointM: {
    top: 66,
    left: 78,
    backgroundColor: '#2E7D32',
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  pointInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e3f2fd',
  },
  pointInnerB: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  pointInnerM: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  labelA: {
    position: 'absolute',
    top: 14,
    left: 2,
    zIndex: 11,
  },
  labelB: {
    position: 'absolute',
    top: 124,
    left: 118,
    zIndex: 11,
  },
  labelM: {
    position: 'absolute',
    top: 52,
    left: 82,
    backgroundColor: '#2E7D32',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 1,
    zIndex: 11,
  },
  pointLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#1a237e',
  },
  midpointLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
  dashH: {
    position: 'absolute',
    top: 74,
    left: 0,
    width: 86,
    height: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(46,125,50,0.35)',
    borderStyle: 'dashed',
    zIndex: 5,
  },
  dashV: {
    position: 'absolute',
    top: 0,
    left: 86,
    width: 0,
    height: 74,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(46,125,50,0.35)',
    borderStyle: 'dashed',
    zIndex: 5,
  },
  flagPole: {
    position: 'absolute',
    top: 44,
    left: 85,
    width: 2,
    height: 24,
    backgroundColor: '#2E7D32',
    zIndex: 12,
  },
  flag: {
    position: 'absolute',
    top: 38,
    left: 87,
    backgroundColor: '#2E7D32',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 1,
    zIndex: 12,
  },
  flagText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#fff',
  },
  planeShadow: {
    width: 160,
    height: 12,
    borderRadius: 80,
    backgroundColor: 'rgba(21,101,192,0.08)',
    marginTop: 4,
  },
  formulaBar: {
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 18,
    transform: [{ perspective: 600 }, { rotateX: '4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default MidpointIllustration;
