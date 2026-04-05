import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VelocityDistanceIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distance from a Velocity Profile</Text>

      <View style={styles.scene}>
        {/* 3D Graph */}
        <View style={styles.graphGroup}>
          <View style={styles.graphBg}>
            {/* Grid */}
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={`h${i}`}
                style={[styles.gridH, { top: 10 + i * 26 }]}
              />
            ))}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <View
                key={`v${i}`}
                style={[styles.gridV, { left: 8 + i * 22 }]}
              />
            ))}

            {/* Shaded area under velocity curve (bar approximation) */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
              const heights = [20, 45, 65, 72, 60, 40, 18];
              return (
                <View
                  key={`bar${i}`}
                  style={[
                    styles.areaBar,
                    {
                      left: 10 + i * 20,
                      height: heights[i],
                      bottom: 0,
                    },
                  ]}
                />
              );
            })}

            {/* Velocity curve segments */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
              const tops = [88, 60, 38, 30, 44, 64, 88];
              const angles = [-35, -28, -12, 8, 24, 32, 10];
              return (
                <View
                  key={`vc${i}`}
                  style={[
                    styles.velocitySeg,
                    {
                      left: 8 + i * 20,
                      top: tops[i],
                      width: 22,
                      transform: [{ rotateZ: `${angles[i]}deg` }],
                    },
                  ]}
                />
              );
            })}

            {/* "Distance = Area" label */}
            <View style={styles.areaLabel}>
              <Text style={styles.areaLabelText}>Area = s</Text>
            </View>
          </View>

          {/* 3D depth edges */}
          <View style={styles.sideRight} />
          <View style={styles.sideBottom} />

          {/* Axis labels */}
          <Text style={styles.vAxisLabel}>v(t)</Text>
          <Text style={styles.tAxisLabel}>t (time)</Text>
        </View>

        {/* Car icon (built from shapes) */}
        <View style={styles.carGroup}>
          {/* Car body */}
          <View style={styles.carBody}>
            <View style={styles.carRoof} />
            <View style={styles.carWindow} />
          </View>
          {/* Wheels */}
          <View style={[styles.wheel, { left: 4 }]} />
          <View style={[styles.wheel, { right: 4 }]} />
          {/* Speed lines */}
          <View style={[styles.speedLine, { top: 6, left: -14 }]} />
          <View style={[styles.speedLine, { top: 11, left: -18, width: 10 }]} />
          <View style={[styles.speedLine, { top: 16, left: -12, width: 6 }]} />
        </View>

        {/* Distance arrow */}
        <View style={styles.distArrow}>
          <View style={styles.distArrowLine} />
          <View style={styles.distArrowHead} />
          <Text style={styles.distLabel}>s (distance)</Text>
        </View>

        {/* v label on curve */}
        <View style={styles.vLabelWrap}>
          <Text style={styles.vLabel}>v(t)</Text>
        </View>

        {/* Time markers */}
        <Text style={styles.t0}>t₀</Text>
        <Text style={styles.t1}>t₁</Text>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>s = ∫ v(t) dt</Text>
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
    marginBottom: 8,
    textAlign: 'center',
  },
  scene: {
    width: 220,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    perspective: 800,
  },
  graphGroup: {
    transform: [{ perspective: 800 }, { rotateX: '-10deg' }, { rotateY: '12deg' }],
  },
  graphBg: {
    width: 160,
    height: 115,
    backgroundColor: '#e3f2fd',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#1a237e',
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  gridH: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 0.5,
    backgroundColor: '#90caf9',
  },
  gridV: {
    position: 'absolute',
    top: 0,
    width: 0.5,
    height: '100%',
    backgroundColor: '#90caf9',
  },
  areaBar: {
    position: 'absolute',
    width: 18,
    backgroundColor: '#1565C0',
    opacity: 0.22,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  velocitySeg: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#C62828',
    borderRadius: 1.5,
  },
  areaLabel: {
    position: 'absolute',
    left: 50,
    bottom: 18,
    backgroundColor: '#1565C0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    opacity: 0.85,
    zIndex: 3,
  },
  areaLabelText: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
  },
  sideRight: {
    position: 'absolute',
    right: -5,
    top: 3,
    width: 5,
    height: 115,
    backgroundColor: '#90caf9',
    borderRightWidth: 1,
    borderColor: '#5c6bc0',
    transform: [{ skewY: '-10deg' }],
  },
  sideBottom: {
    position: 'absolute',
    bottom: -4,
    left: 3,
    width: 160,
    height: 4,
    backgroundColor: '#90caf9',
    borderBottomWidth: 1,
    borderColor: '#5c6bc0',
    transform: [{ skewX: '10deg' }],
  },
  vAxisLabel: {
    position: 'absolute',
    left: -16,
    top: 40,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
    fontStyle: 'italic',
    transform: [{ rotateZ: '-90deg' }],
  },
  tAxisLabel: {
    position: 'absolute',
    bottom: -14,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
  },
  carGroup: {
    position: 'absolute',
    bottom: 18,
    right: 10,
    width: 44,
    height: 24,
    transform: [{ perspective: 400 }, { rotateY: '-15deg' }],
  },
  carBody: {
    width: 40,
    height: 14,
    backgroundColor: '#C62828',
    borderRadius: 4,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  carRoof: {
    position: 'absolute',
    top: -8,
    left: 10,
    width: 20,
    height: 10,
    backgroundColor: '#C62828',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  carWindow: {
    position: 'absolute',
    top: -6,
    left: 13,
    width: 14,
    height: 6,
    backgroundColor: '#e3f2fd',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  wheel: {
    position: 'absolute',
    bottom: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a237e',
  },
  speedLine: {
    position: 'absolute',
    width: 8,
    height: 1.5,
    backgroundColor: '#ef6c00',
    borderRadius: 1,
  },
  distArrow: {
    position: 'absolute',
    bottom: 6,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  distArrowLine: {
    width: 50,
    height: 1.5,
    backgroundColor: '#2E7D32',
  },
  distArrowHead: {
    width: 0,
    height: 0,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 7,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#2E7D32',
  },
  distLabel: {
    fontSize: 8,
    color: '#2E7D32',
    fontWeight: '700',
    marginLeft: 3,
  },
  vLabelWrap: {
    position: 'absolute',
    top: 22,
    right: 30,
    backgroundColor: '#C62828',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
  },
  vLabel: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  t0: {
    position: 'absolute',
    bottom: 30,
    left: 38,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
  },
  t1: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
  },
  formulaBar: {
    marginTop: 10,
    backgroundColor: '#1a237e',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 6,
    transform: [{ perspective: 600 }, { rotateX: '4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default VelocityDistanceIllustration;
