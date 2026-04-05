import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DCMotorIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DC Motor Speed Response</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Motor assembly */}
          <View style={styles.motorAssembly}>
            {/* Motor cylinder - 3D */}
            <View style={styles.motorBody}>
              <View style={styles.motorTop} />
              <View style={styles.motorFront}>
                {/* Terminal dots */}
                <View style={styles.terminalPlus}>
                  <Text style={styles.terminalText}>+</Text>
                </View>
                <View style={styles.terminalMinus}>
                  <Text style={styles.terminalText}>−</Text>
                </View>
                <Text style={styles.motorLabel}>DC</Text>
              </View>
              <View style={styles.motorSide} />
            </View>

            {/* Shaft */}
            <View style={styles.shaft}>
              <View style={styles.shaftBar} />
              {/* Rotation indicator */}
              <View style={styles.rotationRing}>
                <View style={styles.rotationArc} />
                <View style={styles.rotationArrow} />
                <Text style={styles.omegaLabel}>ω</Text>
              </View>
            </View>

            {/* Base / mount */}
            <View style={styles.motorBase}>
              <View style={styles.baseTop} />
              <View style={styles.baseFront} />
            </View>
          </View>

          {/* Parameter labels */}
          <View style={styles.paramRow}>
            <View style={styles.paramChip}>
              <Text style={styles.chipText}>J (inertia)</Text>
            </View>
            <View style={[styles.paramChip, { backgroundColor: '#ef6c00' }]}>
              <Text style={styles.chipText}>B (friction)</Text>
            </View>
            <View style={[styles.paramChip, { backgroundColor: '#2E7D32' }]}>
              <Text style={styles.chipText}>Kₜ·I</Text>
            </View>
          </View>

          {/* Speed response curve */}
          <View style={styles.curveContainer}>
            {/* Grid */}
            {[0, 1, 2].map((i) => (
              <View
                key={`g${i}`}
                style={[styles.gridLine, { top: 8 + i * 12 }]}
              />
            ))}

            <View style={styles.curveAxisH} />
            <View style={styles.curveAxisV} />

            {/* Steady state line */}
            <View style={styles.steadyLine} />
            <Text style={styles.ssText}>ω_ss</Text>

            {/* Exponential rise bars (0 to steady state) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (i) => {
                const value = 30 * (1 - Math.exp(-i * 0.35));
                return (
                  <View
                    key={i}
                    style={[
                      styles.speedBar,
                      {
                        left: 16 + i * 10.5,
                        height: value,
                        bottom: 10,
                        backgroundColor:
                          i < 4
                            ? '#1565C0'
                            : i < 9
                            ? '#3949ab'
                            : '#5c6bc0',
                        opacity: 0.6 + 0.4 * (value / 30),
                      },
                    ]}
                  />
                );
              }
            )}

            {/* Time constant tau */}
            <View style={styles.tauMark} />
            <Text style={styles.tauText}>τ</Text>

            {/* Current I indicator */}
            <View style={styles.currentIndicator}>
              <Text style={styles.currentText}>I applied</Text>
              <View style={styles.currentArrow} />
            </View>

            <Text style={styles.yAxisLabel}>ω(t)</Text>
            <Text style={styles.xAxisLabel}>t</Text>
          </View>
        </View>
      </View>

      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>J·dω/dt + Bω = Kₜ·I</Text>
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
    transform: [{ perspective: 800 }, { rotateX: '7deg' }, { rotateY: '-6deg' }],
  },
  motorAssembly: {
    alignItems: 'center',
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  motorBody: {
    width: 60,
    height: 48,
    position: 'relative',
  },
  motorTop: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: 56,
    height: 8,
    backgroundColor: '#5c6bc0',
    borderRadius: 28,
    transform: [{ scaleY: 0.5 }, { skewX: '-5deg' }],
  },
  motorFront: {
    width: 56,
    height: 40,
    backgroundColor: '#3949ab',
    borderRadius: 10,
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  motorSide: {
    position: 'absolute',
    top: 4,
    right: -6,
    width: 6,
    height: 40,
    backgroundColor: '#283593',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  terminalPlus: {
    position: 'absolute',
    top: 4,
    left: 6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#C62828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  terminalMinus: {
    position: 'absolute',
    top: 4,
    right: 6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1565C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  terminalText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#fff',
    marginTop: -1,
  },
  motorLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
    marginTop: 8,
  },
  shaft: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -2,
  },
  shaftBar: {
    width: 32,
    height: 6,
    backgroundColor: '#78909c',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  rotationRing: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2.5,
    borderColor: '#ef6c00',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -4,
    position: 'relative',
  },
  rotationArc: {
    position: 'absolute',
    top: -2,
    right: 2,
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopColor: '#ef6c00',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  rotationArrow: {
    position: 'absolute',
    top: 0,
    right: -1,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftColor: '#ef6c00',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  omegaLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ef6c00',
  },
  motorBase: {
    position: 'absolute',
    bottom: -20,
    left: 30,
    width: 80,
    height: 14,
  },
  baseTop: {
    width: 80,
    height: 5,
    backgroundColor: '#90a4ae',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  baseFront: {
    width: 80,
    height: 9,
    backgroundColor: '#78909c',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  paramRow: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'center',
  },
  paramChip: {
    backgroundColor: '#1565C0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  chipText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#fff',
  },
  curveContainer: {
    width: 190,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#90caf9',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 6,
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  gridLine: {
    position: 'absolute',
    left: 14,
    right: 4,
    height: 0.5,
    backgroundColor: '#e0e0e0',
  },
  curveAxisH: {
    position: 'absolute',
    left: 14,
    right: 4,
    bottom: 10,
    height: 1.5,
    backgroundColor: '#9e9e9e',
  },
  curveAxisV: {
    position: 'absolute',
    left: 14,
    top: 4,
    bottom: 6,
    width: 1.5,
    backgroundColor: '#9e9e9e',
  },
  steadyLine: {
    position: 'absolute',
    left: 14,
    right: 4,
    top: 8,
    height: 1,
    backgroundColor: '#C62828',
    opacity: 0.35,
  },
  ssText: {
    position: 'absolute',
    right: 6,
    top: 2,
    fontSize: 7,
    color: '#C62828',
    fontWeight: '600',
  },
  speedBar: {
    position: 'absolute',
    width: 7,
    borderRadius: 2,
  },
  tauMark: {
    position: 'absolute',
    left: 38,
    top: 6,
    bottom: 6,
    width: 1,
    backgroundColor: '#ef6c00',
    opacity: 0.5,
  },
  tauText: {
    position: 'absolute',
    left: 34,
    bottom: 0,
    fontSize: 8,
    color: '#ef6c00',
    fontWeight: '700',
  },
  currentIndicator: {
    position: 'absolute',
    left: 16,
    top: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentText: {
    fontSize: 7,
    color: '#2E7D32',
    fontWeight: '600',
  },
  currentArrow: {
    width: 0,
    height: 0,
    marginLeft: 2,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 5,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#2E7D32',
  },
  yAxisLabel: {
    position: 'absolute',
    left: 2,
    top: 10,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
  },
  xAxisLabel: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
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

export default DCMotorIllustration;
