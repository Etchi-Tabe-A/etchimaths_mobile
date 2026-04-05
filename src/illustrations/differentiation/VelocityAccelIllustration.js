import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VelocityAccelIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Velocity and Acceleration</Text>

      <View style={styles.scene}>
        {/* 3D Car */}
        <View style={styles.car}>
          {/* Car body */}
          <View style={styles.carRoof} />
          <View style={styles.carBody}>
            <View style={styles.carWindow} />
            <View style={styles.carWindow} />
          </View>
          <View style={styles.carBase} />
          {/* Wheels */}
          <View style={[styles.wheel, { left: 6 }]}>
            <View style={styles.wheelHub} />
          </View>
          <View style={[styles.wheel, { right: 6 }]}>
            <View style={styles.wheelHub} />
          </View>
          {/* Headlight */}
          <View style={styles.headlight} />
          {/* Exhaust */}
          <View style={styles.exhaust1} />
          <View style={styles.exhaust2} />
        </View>

        {/* Speedometer */}
        <View style={styles.speedometer}>
          <View style={styles.speedometerRing} />
          <View style={styles.speedNeedle} />
          <Text style={styles.speedLabel}>v</Text>
          <View style={styles.speedTickTop} />
          <View style={styles.speedTickRight} />
          <View style={styles.speedTickLeft} />
        </View>

        {/* Road */}
        <View style={styles.road}>
          <View style={styles.roadLine} />
          <View style={styles.roadLine2} />
          <View style={styles.roadLine3} />
        </View>

        {/* Position curve s(t) */}
        <View style={styles.graph1}>
          <View style={styles.graphBg} />
          <Text style={styles.graphLabel}>s(t)</Text>
          <View style={styles.axis1X} />
          <View style={styles.axis1Y} />
          {/* S-curve blocks */}
          <View style={[styles.sBar, { left: 8, height: 6, bottom: 2 }]} />
          <View style={[styles.sBar, { left: 16, height: 10, bottom: 2 }]} />
          <View style={[styles.sBar, { left: 24, height: 18, bottom: 2 }]} />
          <View style={[styles.sBar, { left: 32, height: 28, bottom: 2 }]} />
          <View style={[styles.sBar, { left: 40, height: 36, bottom: 2 }]} />
          <View style={[styles.sBar, { left: 48, height: 42, bottom: 2 }]} />
        </View>

        {/* Derivative arrow */}
        <View style={styles.derivArrow}>
          <Text style={styles.derivText}>d/dt</Text>
        </View>

        {/* Velocity curve v(t) */}
        <View style={styles.graph2}>
          <View style={styles.graphBg2} />
          <Text style={styles.graphLabel2}>v(t)</Text>
          <View style={styles.axis2X} />
          <View style={styles.axis2Y} />
          {/* Velocity blocks */}
          <View style={[styles.vBar, { left: 8, height: 8, bottom: 2 }]} />
          <View style={[styles.vBar, { left: 16, height: 16, bottom: 2 }]} />
          <View style={[styles.vBar, { left: 24, height: 24, bottom: 2 }]} />
          <View style={[styles.vBar, { left: 32, height: 20, bottom: 2 }]} />
          <View style={[styles.vBar, { left: 40, height: 14, bottom: 2 }]} />
          <View style={[styles.vBar, { left: 48, height: 10, bottom: 2 }]} />
        </View>

        {/* Acceleration label */}
        <View style={styles.accelBadge}>
          <Text style={styles.accelText}>a = dv/dt</Text>
        </View>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>v = ds/dt , a = dv/dt</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 6,
    textAlign: 'center',
  },
  scene: {
    width: 260,
    height: 195,
    position: 'relative',
    perspective: 800,
  },
  car: {
    position: 'absolute',
    top: 8,
    left: 12,
    width: 90,
    height: 55,
    transform: [{ perspective: 600 }, { rotateY: '-15deg' }, { rotateX: '8deg' }],
  },
  carRoof: {
    position: 'absolute',
    top: 0,
    left: 18,
    width: 44,
    height: 16,
    backgroundColor: '#1565C0',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  carBody: {
    position: 'absolute',
    top: 14,
    left: 4,
    width: 82,
    height: 20,
    backgroundColor: '#1565C0',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  carWindow: {
    width: 16,
    height: 12,
    backgroundColor: '#e3f2fd',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#0d47a1',
  },
  carBase: {
    position: 'absolute',
    top: 32,
    left: 0,
    width: 90,
    height: 10,
    backgroundColor: '#0d47a1',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  wheel: {
    position: 'absolute',
    bottom: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#263238',
    borderWidth: 2,
    borderColor: '#455a64',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheelHub: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#90a4ae',
  },
  headlight: {
    position: 'absolute',
    top: 22,
    right: -2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffd54f',
    shadowColor: '#ffd54f',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
  },
  exhaust1: {
    position: 'absolute',
    top: 30,
    left: -6,
    width: 8,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#b0bec5',
    opacity: 0.5,
  },
  exhaust2: {
    position: 'absolute',
    top: 26,
    left: -12,
    width: 10,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#cfd8dc',
    opacity: 0.3,
  },
  speedometer: {
    position: 'absolute',
    top: 6,
    right: 24,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ perspective: 500 }, { rotateY: '10deg' }, { rotateX: '5deg' }],
  },
  speedometerRing: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#1a237e',
    backgroundColor: '#e3f2fd',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  speedNeedle: {
    position: 'absolute',
    width: 2,
    height: 18,
    backgroundColor: '#C62828',
    bottom: 22,
    transform: [{ rotate: '35deg' }],
    borderRadius: 1,
  },
  speedLabel: {
    position: 'absolute',
    bottom: 8,
    fontSize: 8,
    fontWeight: '700',
    color: '#1a237e',
  },
  speedTickTop: {
    position: 'absolute',
    top: 4,
    width: 2,
    height: 6,
    backgroundColor: '#1a237e',
  },
  speedTickRight: {
    position: 'absolute',
    right: 4,
    width: 6,
    height: 2,
    backgroundColor: '#1a237e',
  },
  speedTickLeft: {
    position: 'absolute',
    left: 4,
    width: 6,
    height: 2,
    backgroundColor: '#1a237e',
  },
  road: {
    position: 'absolute',
    top: 68,
    left: 0,
    width: 120,
    height: 12,
    backgroundColor: '#607d8b',
    borderRadius: 2,
    transform: [{ perspective: 500 }, { rotateX: '-10deg' }, { rotateY: '-5deg' }],
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  roadLine: {
    width: 14,
    height: 2,
    backgroundColor: '#fdd835',
    borderRadius: 1,
  },
  roadLine2: {
    width: 14,
    height: 2,
    backgroundColor: '#fdd835',
    borderRadius: 1,
  },
  roadLine3: {
    width: 14,
    height: 2,
    backgroundColor: '#fdd835',
    borderRadius: 1,
  },
  graph1: {
    position: 'absolute',
    top: 88,
    left: 6,
    width: 64,
    height: 54,
    transform: [{ perspective: 600 }, { rotateY: '-6deg' }, { rotateX: '4deg' }],
  },
  graphBg: {
    position: 'absolute',
    width: 64,
    height: 54,
    backgroundColor: '#e3f2fd',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  graphLabel: {
    position: 'absolute',
    top: 2,
    left: 4,
    fontSize: 7,
    fontWeight: '700',
    color: '#1565C0',
  },
  axis1X: {
    position: 'absolute',
    bottom: 6,
    left: 8,
    width: 50,
    height: 1.5,
    backgroundColor: '#1a237e',
  },
  axis1Y: {
    position: 'absolute',
    bottom: 6,
    left: 8,
    width: 1.5,
    height: 42,
    backgroundColor: '#1a237e',
  },
  sBar: {
    position: 'absolute',
    width: 5,
    backgroundColor: '#1565C0',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    opacity: 0.75,
  },
  derivArrow: {
    position: 'absolute',
    top: 108,
    left: 78,
    width: 32,
    alignItems: 'center',
  },
  derivText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#C62828',
  },
  graph2: {
    position: 'absolute',
    top: 88,
    right: 6,
    width: 64,
    height: 54,
    transform: [{ perspective: 600 }, { rotateY: '6deg' }, { rotateX: '4deg' }],
  },
  graphBg2: {
    position: 'absolute',
    width: 64,
    height: 54,
    backgroundColor: '#e3f2fd',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  graphLabel2: {
    position: 'absolute',
    top: 2,
    left: 4,
    fontSize: 7,
    fontWeight: '700',
    color: '#2E7D32',
  },
  axis2X: {
    position: 'absolute',
    bottom: 6,
    left: 8,
    width: 50,
    height: 1.5,
    backgroundColor: '#1a237e',
  },
  axis2Y: {
    position: 'absolute',
    bottom: 6,
    left: 8,
    width: 1.5,
    height: 42,
    backgroundColor: '#1a237e',
  },
  vBar: {
    position: 'absolute',
    width: 5,
    backgroundColor: '#2E7D32',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    opacity: 0.75,
  },
  accelBadge: {
    position: 'absolute',
    bottom: 28,
    right: 10,
    backgroundColor: '#ef6c00',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  accelText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#fff',
  },
  formulaBar: {
    marginTop: 6,
    backgroundColor: '#1a237e',
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 6,
    transform: [{ perspective: 400 }, { rotateX: '4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default VelocityAccelIllustration;
