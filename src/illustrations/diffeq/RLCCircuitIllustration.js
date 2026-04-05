import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RLCCircuitIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RLC Circuit Transient Response</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Circuit loop base */}
          <View style={styles.circuitLoop}>
            {/* Top wire */}
            <View style={styles.wireTop} />
            {/* Bottom wire */}
            <View style={styles.wireBottom} />
            {/* Left wire */}
            <View style={styles.wireLeft} />
            {/* Right wire */}
            <View style={styles.wireRight} />

            {/* Resistor (R) - zigzag top */}
            <View style={styles.resistorContainer}>
              <View style={styles.resistorLabel}>
                <Text style={styles.componentLabelText}>R</Text>
              </View>
              <View style={styles.zigzagRow}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <View
                    key={i}
                    style={[
                      styles.zigzagTooth,
                      { transform: [{ rotate: i % 2 === 0 ? '45deg' : '-45deg' }] },
                    ]}
                  />
                ))}
              </View>
            </View>

            {/* Inductor (L) - coil right side */}
            <View style={styles.inductorContainer}>
              <View style={styles.inductorLabel}>
                <Text style={styles.componentLabelText}>L</Text>
              </View>
              {[0, 1, 2, 3].map((i) => (
                <View key={i} style={styles.coilLoop} />
              ))}
            </View>

            {/* Capacitor (C) - plates bottom */}
            <View style={styles.capacitorContainer}>
              <View style={styles.capacitorLabel}>
                <Text style={styles.componentLabelText}>C</Text>
              </View>
              <View style={styles.capacitorPlates}>
                <View style={styles.plate} />
                <View style={styles.plateGap} />
                <View style={styles.plate} />
              </View>
            </View>

            {/* Voltage source left */}
            <View style={styles.sourceContainer}>
              <View style={styles.sourceCircle}>
                <Text style={styles.sourceText}>~</Text>
              </View>
            </View>
          </View>

          {/* Transient oscillation curve */}
          <View style={styles.curveContainer}>
            <View style={styles.curveAxis} />
            {/* Damped oscillation bars */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
              const amplitude = 28 * Math.exp(-i * 0.25) * Math.sin(i * 1.2 + 0.5);
              const barHeight = Math.abs(amplitude);
              const isPositive = amplitude >= 0;
              return (
                <View
                  key={i}
                  style={[
                    styles.curveBar,
                    {
                      left: 8 + i * 11,
                      height: barHeight,
                      bottom: isPositive ? 22 : 22 - barHeight,
                      backgroundColor: isPositive ? '#1565C0' : '#3949ab',
                      opacity: 0.7 + 0.3 * Math.exp(-i * 0.15),
                    },
                  ]}
                />
              );
            })}
            {/* Envelope upper */}
            <View style={styles.envelopeUpper} />
            {/* Envelope lower */}
            <View style={styles.envelopeLower} />
            <Text style={styles.curveLabel}>i(t)</Text>
            <Text style={styles.timeLabel}>t</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>Lq″ + Rq′ + q/C = 0</Text>
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
    width: 230,
    height: 175,
    alignItems: 'center',
    justifyContent: 'flex-start',
    transform: [{ perspective: 800 }, { rotateX: '8deg' }, { rotateY: '-6deg' }],
  },
  circuitLoop: {
    width: 160,
    height: 90,
    borderWidth: 2.5,
    borderColor: '#1565C0',
    borderRadius: 10,
    position: 'relative',
    marginTop: 4,
  },
  wireTop: {
    position: 'absolute',
    top: -1.5,
    left: 30,
    right: 30,
    height: 3,
    backgroundColor: '#1565C0',
  },
  wireBottom: {
    position: 'absolute',
    bottom: -1.5,
    left: 30,
    right: 30,
    height: 3,
    backgroundColor: '#1565C0',
  },
  wireLeft: {
    position: 'absolute',
    left: -1.5,
    top: 20,
    bottom: 20,
    width: 3,
    backgroundColor: '#1565C0',
  },
  wireRight: {
    position: 'absolute',
    right: -1.5,
    top: 20,
    bottom: 20,
    width: 3,
    backgroundColor: '#1565C0',
  },
  resistorContainer: {
    position: 'absolute',
    top: -14,
    left: 40,
    width: 80,
    alignItems: 'center',
  },
  resistorLabel: {
    marginBottom: 1,
  },
  componentLabelText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#ef6c00',
  },
  zigzagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 14,
  },
  zigzagTooth: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: '#ef6c00',
    borderTopWidth: 0,
    borderRightWidth: 0,
    marginHorizontal: 1,
  },
  inductorContainer: {
    position: 'absolute',
    right: -18,
    top: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inductorLabel: {
    position: 'absolute',
    right: -16,
    top: 10,
  },
  coilLoop: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
    borderColor: '#2E7D32',
    marginVertical: -2,
    backgroundColor: 'transparent',
  },
  capacitorContainer: {
    position: 'absolute',
    bottom: -14,
    left: 50,
    width: 60,
    alignItems: 'center',
  },
  capacitorLabel: {
    marginTop: 1,
  },
  capacitorPlates: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plate: {
    width: 18,
    height: 10,
    backgroundColor: '#5c6bc0',
    borderRadius: 2,
  },
  plateGap: {
    width: 5,
    height: 14,
    backgroundColor: 'transparent',
  },
  sourceContainer: {
    position: 'absolute',
    left: -16,
    top: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sourceCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2.5,
    borderColor: '#C62828',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sourceText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#C62828',
    marginTop: -2,
  },
  curveContainer: {
    width: 145,
    height: 48,
    marginTop: 14,
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#90caf9',
    overflow: 'hidden',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  curveAxis: {
    position: 'absolute',
    left: 4,
    right: 4,
    top: 22,
    height: 1,
    backgroundColor: '#90caf9',
  },
  curveBar: {
    position: 'absolute',
    width: 7,
    borderRadius: 2,
  },
  envelopeUpper: {
    position: 'absolute',
    left: 6,
    right: 14,
    top: 4,
    height: 1.5,
    backgroundColor: '#C62828',
    opacity: 0.25,
    borderRadius: 1,
  },
  envelopeLower: {
    position: 'absolute',
    left: 6,
    right: 14,
    bottom: 6,
    height: 1.5,
    backgroundColor: '#C62828',
    opacity: 0.25,
    borderRadius: 1,
  },
  curveLabel: {
    position: 'absolute',
    left: 2,
    top: 1,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
  },
  timeLabel: {
    position: 'absolute',
    right: 3,
    bottom: 1,
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

export default RLCCircuitIllustration;
