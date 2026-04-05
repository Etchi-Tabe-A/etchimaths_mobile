import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CentreMassIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Centre of Mass of a Lamina</Text>

      <View style={styles.scene}>
        {/* 3D Platform / Surface */}
        <View style={styles.platform}>
          <View style={styles.platformSide} />
        </View>

        {/* Lamina (irregular shape built from overlapping views) */}
        <View style={styles.laminaGroup}>
          {/* Main body */}
          <View style={styles.laminaBase} />
          <View style={styles.laminaTop} />
          <View style={styles.laminaRight} />
          <View style={styles.laminaLeft} />
          <View style={styles.laminaBottomExt} />

          {/* Grid lines on lamina */}
          {[0, 1, 2, 3, 4].map((i) => (
            <View
              key={`h${i}`}
              style={[styles.gridLineH, { top: 12 + i * 18 }]}
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <View
              key={`v${i}`}
              style={[styles.gridLineV, { left: 10 + i * 20 }]}
            />
          ))}

          {/* Centre of mass crosshair */}
          <View style={styles.crosshairGroup}>
            <View style={styles.crosshairH} />
            <View style={styles.crosshairV} />
            <View style={styles.crosshairDot} />
            <View style={styles.crosshairRing} />
          </View>

          {/* CoM label */}
          <View style={styles.comLabelBg}>
            <Text style={styles.comLabel}>CoM</Text>
          </View>

          {/* Shadow underneath */}
          <View style={styles.laminaShadow} />
        </View>

        {/* Balance point / fulcrum */}
        <View style={styles.fulcrumGroup}>
          <View style={styles.fulcrumTriangle} />
          <View style={styles.fulcrumBase} />
          <Text style={styles.fulcrumLabel}>Balance Point</Text>
        </View>

        {/* x-bar and y-bar indicators */}
        <View style={styles.xBarLine} />
        <Text style={styles.xBarLabel}>x̄</Text>
        <View style={styles.yBarLine} />
        <Text style={styles.yBarLabel}>ȳ</Text>

        {/* Coordinate axes hint */}
        <View style={styles.axisX} />
        <View style={styles.axisY} />
        <Text style={styles.axisXLabel}>x</Text>
        <Text style={styles.axisYLabel}>y</Text>

        {/* Weight indicators */}
        {[0, 1, 2].map((i) => (
          <View
            key={`w${i}`}
            style={[
              styles.weightDot,
              {
                left: 68 + i * 30,
                top: 70 + (i === 1 ? -12 : i === 2 ? 8 : 0),
              },
            ]}
          />
        ))}
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>x̄ = ∫x·f(x)dx / ∫f(x)dx</Text>
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
  platform: {
    position: 'absolute',
    bottom: 10,
    width: 180,
    height: 8,
    backgroundColor: '#e3f2fd',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#90caf9',
    transform: [{ perspective: 600 }, { rotateX: '-8deg' }, { rotateY: '5deg' }],
  },
  platformSide: {
    position: 'absolute',
    bottom: -5,
    width: '100%',
    height: 5,
    backgroundColor: '#90caf9',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  laminaGroup: {
    width: 130,
    height: 95,
    transform: [{ perspective: 800 }, { rotateX: '-18deg' }, { rotateY: '12deg' }],
    marginTop: -15,
  },
  laminaBase: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 110,
    height: 70,
    backgroundColor: '#90caf9',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#1565C0',
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  laminaTop: {
    position: 'absolute',
    top: 2,
    left: 30,
    width: 60,
    height: 30,
    backgroundColor: '#90caf9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 14,
    borderWidth: 1.5,
    borderBottomWidth: 0,
    borderColor: '#1565C0',
  },
  laminaRight: {
    position: 'absolute',
    top: 30,
    right: 0,
    width: 28,
    height: 40,
    backgroundColor: '#90caf9',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 10,
    borderWidth: 1.5,
    borderLeftWidth: 0,
    borderColor: '#1565C0',
  },
  laminaLeft: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: 22,
    height: 35,
    backgroundColor: '#90caf9',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 18,
    borderWidth: 1.5,
    borderRightWidth: 0,
    borderColor: '#1565C0',
  },
  laminaBottomExt: {
    position: 'absolute',
    bottom: 0,
    left: 25,
    width: 70,
    height: 22,
    backgroundColor: '#90caf9',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 20,
    borderWidth: 1.5,
    borderTopWidth: 0,
    borderColor: '#1565C0',
  },
  gridLineH: {
    position: 'absolute',
    left: 14,
    width: 100,
    height: 0.8,
    backgroundColor: '#5c6bc0',
    opacity: 0.2,
  },
  gridLineV: {
    position: 'absolute',
    top: 14,
    width: 0.8,
    height: 65,
    backgroundColor: '#5c6bc0',
    opacity: 0.2,
  },
  crosshairGroup: {
    position: 'absolute',
    top: 35,
    left: 52,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crosshairH: {
    position: 'absolute',
    width: 22,
    height: 2,
    backgroundColor: '#C62828',
  },
  crosshairV: {
    position: 'absolute',
    width: 2,
    height: 22,
    backgroundColor: '#C62828',
  },
  crosshairDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C62828',
    zIndex: 2,
  },
  crosshairRing: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#C62828',
  },
  comLabelBg: {
    position: 'absolute',
    top: 24,
    left: 74,
    backgroundColor: '#C62828',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
  },
  comLabel: {
    fontSize: 8,
    color: '#fff',
    fontWeight: '700',
  },
  laminaShadow: {
    position: 'absolute',
    bottom: -8,
    left: 18,
    width: 100,
    height: 12,
    backgroundColor: '#1a237e',
    opacity: 0.08,
    borderRadius: 50,
  },
  fulcrumGroup: {
    position: 'absolute',
    bottom: 8,
    alignItems: 'center',
  },
  fulcrumTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ef6c00',
  },
  fulcrumBase: {
    width: 30,
    height: 4,
    backgroundColor: '#ef6c00',
    borderRadius: 2,
  },
  fulcrumLabel: {
    fontSize: 8,
    color: '#ef6c00',
    fontWeight: '600',
    marginTop: 1,
  },
  xBarLine: {
    position: 'absolute',
    bottom: 36,
    left: 30,
    width: 80,
    height: 1.5,
    backgroundColor: '#2E7D32',
    opacity: 0.6,
  },
  xBarLabel: {
    position: 'absolute',
    bottom: 38,
    left: 18,
    fontSize: 11,
    color: '#2E7D32',
    fontWeight: '700',
  },
  yBarLine: {
    position: 'absolute',
    left: 100,
    top: 30,
    width: 1.5,
    height: 70,
    backgroundColor: '#2E7D32',
    opacity: 0.6,
  },
  yBarLabel: {
    position: 'absolute',
    left: 104,
    top: 26,
    fontSize: 11,
    color: '#2E7D32',
    fontWeight: '700',
  },
  axisX: {
    position: 'absolute',
    bottom: 28,
    left: 14,
    width: 190,
    height: 1,
    backgroundColor: '#1a237e',
    opacity: 0.3,
  },
  axisY: {
    position: 'absolute',
    left: 14,
    top: 10,
    width: 1,
    height: 170,
    backgroundColor: '#1a237e',
    opacity: 0.3,
  },
  axisXLabel: {
    position: 'absolute',
    bottom: 18,
    right: 8,
    fontSize: 9,
    color: '#1a237e',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  axisYLabel: {
    position: 'absolute',
    top: 4,
    left: 18,
    fontSize: 9,
    color: '#1a237e',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  weightDot: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#3949ab',
    opacity: 0.5,
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
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.4,
  },
});

export default CentreMassIllustration;
