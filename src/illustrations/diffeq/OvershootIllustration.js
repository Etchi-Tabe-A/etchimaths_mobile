import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OvershootIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second-Order System Overshoot</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Response curve area */}
          <View style={styles.graphContainer}>
            {/* Grid lines */}
            {[0, 1, 2, 3].map((i) => (
              <View
                key={`hg${i}`}
                style={[styles.gridH, { top: 8 + i * 14 }]}
              />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <View
                key={`vg${i}`}
                style={[styles.gridV, { left: 20 + i * 30 }]}
              />
            ))}

            {/* Axes */}
            <View style={styles.axisH} />
            <View style={styles.axisV} />

            {/* Steady state reference line */}
            <View style={styles.steadyState} />
            <Text style={styles.ssLabel}>1.0</Text>

            {/* Settling band (±2%) */}
            <View style={styles.settlingUpper} />
            <View style={styles.settlingLower} />
            <Text style={styles.settlingLabel}>±2%</Text>

            {/* Overshoot response bars */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
              const t = i * 0.5;
              const zeta = 0.3;
              const wd = Math.sqrt(1 - zeta * zeta);
              const raw =
                1 -
                (Math.exp(-zeta * t) / wd) *
                  Math.sin(wd * t + Math.acos(zeta));
              const value = Math.min(Math.max(raw, 0), 1.8) * 32;
              return (
                <View
                  key={i}
                  style={[
                    styles.responseBar,
                    {
                      left: 18 + i * 11,
                      height: value,
                      bottom: 14,
                      backgroundColor:
                        value > 34
                          ? '#C62828'
                          : value > 30
                          ? '#ef6c00'
                          : '#1565C0',
                    },
                  ]}
                />
              );
            })}

            {/* Overshoot peak marker */}
            <View style={styles.peakMarker}>
              <View style={styles.peakDot} />
              <Text style={styles.peakLabel}>Mp</Text>
            </View>

            {/* Overshoot arrow */}
            <View style={styles.overshootArrow}>
              <View style={styles.overshootLine} />
              <Text style={styles.overshootText}>OS</Text>
            </View>

            {/* Natural frequency marker */}
            <View style={styles.wnMarker}>
              <View style={styles.wnLine} />
              <Text style={styles.wnLabel}>ωₙ</Text>
            </View>

            {/* Axis labels */}
            <Text style={styles.yLabel}>x(t)</Text>
            <Text style={styles.xLabel}>t</Text>
          </View>

          {/* Parameter cards */}
          <View style={styles.paramRow}>
            <View style={styles.paramCard}>
              <View style={styles.paramTop} />
              <View style={styles.paramFront}>
                <Text style={styles.paramTitle}>ζ</Text>
                <Text style={styles.paramValue}>damping</Text>
              </View>
            </View>
            <View style={styles.paramCard}>
              <View style={[styles.paramTop, { backgroundColor: '#ef9a9a' }]} />
              <View style={[styles.paramFront, { backgroundColor: '#C62828' }]}>
                <Text style={styles.paramTitle}>ωₙ</Text>
                <Text style={styles.paramValue}>natural</Text>
              </View>
            </View>
            <View style={styles.paramCard}>
              <View style={[styles.paramTop, { backgroundColor: '#a5d6a7' }]} />
              <View style={[styles.paramFront, { backgroundColor: '#2E7D32' }]}>
                <Text style={styles.paramTitle}>Mp</Text>
                <Text style={styles.paramValue}>peak</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>ẍ + 2ζωₙẋ + ωₙ²x = 0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 260,
    backgroundColor: '#e3f2fd',
    borderRadius: 18,
    overflow: 'hidden',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a237e',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  scene: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: 800,
  },
  stage: {
    width: 240,
    height: 180,
    alignItems: 'center',
    justifyContent: 'flex-start',
    transform: [{ perspective: 800 }, { rotateX: '6deg' }, { rotateY: '-7deg' }],
  },
  graphContainer: {
    width: 210,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#90caf9',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 4,
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  gridH: {
    position: 'absolute',
    left: 16,
    right: 4,
    height: 0.5,
    backgroundColor: '#e0e0e0',
  },
  gridV: {
    position: 'absolute',
    top: 4,
    bottom: 10,
    width: 0.5,
    backgroundColor: '#e0e0e0',
  },
  axisH: {
    position: 'absolute',
    left: 16,
    right: 4,
    bottom: 14,
    height: 1.5,
    backgroundColor: '#9e9e9e',
  },
  axisV: {
    position: 'absolute',
    left: 16,
    top: 4,
    bottom: 10,
    width: 1.5,
    backgroundColor: '#9e9e9e',
  },
  steadyState: {
    position: 'absolute',
    left: 16,
    right: 4,
    top: 24,
    height: 1.5,
    backgroundColor: '#1565C0',
    opacity: 0.4,
  },
  ssLabel: {
    position: 'absolute',
    left: 2,
    top: 20,
    fontSize: 7,
    color: '#1565C0',
    fontWeight: '700',
  },
  settlingUpper: {
    position: 'absolute',
    left: 16,
    right: 4,
    top: 22,
    height: 4,
    backgroundColor: '#2E7D32',
    opacity: 0.08,
  },
  settlingLower: {
    position: 'absolute',
    left: 16,
    right: 4,
    top: 26,
    height: 4,
    backgroundColor: '#2E7D32',
    opacity: 0.08,
  },
  settlingLabel: {
    position: 'absolute',
    right: 6,
    top: 20,
    fontSize: 7,
    color: '#2E7D32',
    fontWeight: '600',
  },
  responseBar: {
    position: 'absolute',
    width: 7,
    borderRadius: 2,
    opacity: 0.75,
  },
  peakMarker: {
    position: 'absolute',
    left: 38,
    top: 2,
    alignItems: 'center',
  },
  peakDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C62828',
  },
  peakLabel: {
    fontSize: 7,
    color: '#C62828',
    fontWeight: '700',
    marginTop: 1,
  },
  overshootArrow: {
    position: 'absolute',
    left: 50,
    top: 4,
    alignItems: 'center',
  },
  overshootLine: {
    width: 1.5,
    height: 18,
    backgroundColor: '#ef6c00',
  },
  overshootText: {
    fontSize: 7,
    color: '#ef6c00',
    fontWeight: '700',
  },
  wnMarker: {
    position: 'absolute',
    left: 70,
    bottom: 2,
    alignItems: 'center',
  },
  wnLine: {
    width: 1.5,
    height: 8,
    backgroundColor: '#C62828',
    opacity: 0.6,
  },
  wnLabel: {
    fontSize: 7,
    color: '#C62828',
    fontWeight: '700',
  },
  yLabel: {
    position: 'absolute',
    left: 2,
    top: 2,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
  },
  xLabel: {
    position: 'absolute',
    right: 4,
    bottom: 1,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
  },
  paramRow: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center',
  },
  paramCard: {
    width: 56,
    height: 38,
    marginHorizontal: 5,
    position: 'relative',
  },
  paramTop: {
    position: 'absolute',
    top: 0,
    left: 3,
    width: 56,
    height: 5,
    backgroundColor: '#90caf9',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    transform: [{ skewX: '-8deg' }],
  },
  paramFront: {
    width: 56,
    height: 33,
    backgroundColor: '#1565C0',
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  paramTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
  },
  paramValue: {
    fontSize: 7,
    color: '#e3f2fd',
    marginTop: 1,
  },
  formulaBar: {
    width: '100%',
    backgroundColor: '#1a237e',
    paddingVertical: 7,
    alignItems: 'center',
    transform: [{ perspective: 600 }, { rotateX: '2deg' }],
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default OvershootIllustration;
