import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepResponseIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First-Order System Step Response</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Step input signal block */}
          <View style={styles.signalRow}>
            {/* Input block */}
            <View style={styles.inputBlock}>
              <View style={styles.blockTop} />
              <View style={styles.blockFront}>
                <Text style={styles.blockText}>u(t)</Text>
              </View>
              <View style={styles.blockSide} />
            </View>

            {/* Arrow */}
            <View style={styles.arrowContainer}>
              <View style={styles.arrowLine} />
              <View style={styles.arrowHead} />
            </View>

            {/* System block */}
            <View style={styles.systemBlock}>
              <View style={styles.sysTop} />
              <View style={styles.sysFront}>
                <Text style={styles.sysText}>G(s)</Text>
              </View>
              <View style={styles.sysSide} />
            </View>

            {/* Arrow */}
            <View style={styles.arrowContainer}>
              <View style={styles.arrowLine} />
              <View style={styles.arrowHead} />
            </View>

            {/* Output block */}
            <View style={styles.outputBlock}>
              <View style={styles.outTop} />
              <View style={styles.outFront}>
                <Text style={styles.outText}>y(t)</Text>
              </View>
              <View style={styles.outSide} />
            </View>
          </View>

          {/* Charts row */}
          <View style={styles.chartsRow}>
            {/* Step input chart */}
            <View style={styles.chartBox}>
              <Text style={styles.chartTitle}>Input</Text>
              <View style={styles.chartArea}>
                <View style={styles.chartAxisH} />
                <View style={styles.chartAxisV} />
                {/* Step: low then jump to high */}
                <View style={styles.stepLow} />
                <View style={styles.stepRise} />
                <View style={styles.stepHigh} />
                <Text style={styles.kLabel}>K</Text>
              </View>
            </View>

            {/* Response chart */}
            <View style={styles.chartBox}>
              <Text style={styles.chartTitle}>Response</Text>
              <View style={styles.chartArea}>
                <View style={styles.chartAxisH} />
                <View style={styles.chartAxisV} />
                {/* Steady state line */}
                <View style={styles.steadyLine} />
                <Text style={styles.steadyLabel}>K</Text>
                {/* Exponential rise bars */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
                  const value = 26 * (1 - Math.exp(-i * 0.45));
                  return (
                    <View
                      key={i}
                      style={[
                        styles.riseBar,
                        {
                          left: 14 + i * 8,
                          height: value,
                          bottom: 12,
                          backgroundColor:
                            i < 3 ? '#1565C0' : i < 7 ? '#3949ab' : '#5c6bc0',
                        },
                      ]}
                    />
                  );
                })}
                {/* Tau marker */}
                <View style={styles.tauLine} />
                <Text style={styles.tauLabel}>τ</Text>
                {/* 63.2% marker */}
                <View style={styles.percentLine} />
                <Text style={styles.percentLabel}>63%</Text>
              </View>
            </View>
          </View>

          {/* Time constant annotation */}
          <View style={styles.tauAnnotation}>
            <View style={styles.tauBox}>
              <Text style={styles.tauBoxText}>τ = time constant</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>τ·dy/dt + y = K·u(t)</Text>
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
    height: 175,
    alignItems: 'center',
    justifyContent: 'flex-start',
    transform: [{ perspective: 800 }, { rotateX: '7deg' }, { rotateY: '-5deg' }],
  },
  signalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  inputBlock: {
    width: 42,
    height: 28,
    position: 'relative',
  },
  blockTop: {
    position: 'absolute',
    top: 0,
    left: 3,
    width: 42,
    height: 6,
    backgroundColor: '#5c6bc0',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    transform: [{ skewX: '-8deg' }],
  },
  blockFront: {
    width: 42,
    height: 22,
    backgroundColor: '#3949ab',
    borderRadius: 3,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  blockSide: {
    position: 'absolute',
    top: 6,
    right: -5,
    width: 5,
    height: 22,
    backgroundColor: '#283593',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  blockText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  arrowLine: {
    width: 14,
    height: 2.5,
    backgroundColor: '#ef6c00',
  },
  arrowHead: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 7,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#ef6c00',
  },
  systemBlock: {
    width: 48,
    height: 30,
    position: 'relative',
  },
  sysTop: {
    position: 'absolute',
    top: 0,
    left: 3,
    width: 48,
    height: 6,
    backgroundColor: '#66bb6a',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    transform: [{ skewX: '-8deg' }],
  },
  sysFront: {
    width: 48,
    height: 24,
    backgroundColor: '#2E7D32',
    borderRadius: 3,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  sysSide: {
    position: 'absolute',
    top: 6,
    right: -5,
    width: 5,
    height: 24,
    backgroundColor: '#1b5e20',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  sysText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#e8f5e9',
  },
  outputBlock: {
    width: 42,
    height: 28,
    position: 'relative',
  },
  outTop: {
    position: 'absolute',
    top: 0,
    left: 3,
    width: 42,
    height: 6,
    backgroundColor: '#ef9a9a',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    transform: [{ skewX: '-8deg' }],
  },
  outFront: {
    width: 42,
    height: 22,
    backgroundColor: '#C62828',
    borderRadius: 3,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  outSide: {
    position: 'absolute',
    top: 6,
    right: -5,
    width: 5,
    height: 22,
    backgroundColor: '#b71c1c',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  outText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffcdd2',
  },
  chartsRow: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center',
  },
  chartBox: {
    width: 108,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 2,
  },
  chartArea: {
    width: 108,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#90caf9',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#1a237e',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chartAxisH: {
    position: 'absolute',
    left: 12,
    right: 4,
    bottom: 12,
    height: 1,
    backgroundColor: '#bdbdbd',
  },
  chartAxisV: {
    position: 'absolute',
    left: 12,
    top: 4,
    bottom: 8,
    width: 1,
    backgroundColor: '#bdbdbd',
  },
  stepLow: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    width: 30,
    height: 2,
    backgroundColor: '#1565C0',
  },
  stepRise: {
    position: 'absolute',
    left: 42,
    bottom: 12,
    width: 2,
    height: 26,
    backgroundColor: '#1565C0',
  },
  stepHigh: {
    position: 'absolute',
    left: 44,
    bottom: 36,
    width: 55,
    height: 2,
    backgroundColor: '#1565C0',
  },
  kLabel: {
    position: 'absolute',
    left: 3,
    top: 4,
    fontSize: 8,
    color: '#1565C0',
    fontWeight: '600',
  },
  steadyLine: {
    position: 'absolute',
    left: 14,
    right: 4,
    top: 8,
    height: 1,
    backgroundColor: '#C62828',
    opacity: 0.4,
  },
  steadyLabel: {
    position: 'absolute',
    left: 3,
    top: 3,
    fontSize: 8,
    color: '#C62828',
    fontWeight: '600',
  },
  riseBar: {
    position: 'absolute',
    width: 5,
    borderRadius: 1.5,
  },
  tauLine: {
    position: 'absolute',
    left: 34,
    top: 8,
    bottom: 8,
    width: 1,
    backgroundColor: '#ef6c00',
    opacity: 0.6,
  },
  tauLabel: {
    position: 'absolute',
    left: 30,
    bottom: 1,
    fontSize: 8,
    color: '#ef6c00',
    fontWeight: '700',
  },
  percentLine: {
    position: 'absolute',
    left: 14,
    right: 40,
    top: 18,
    height: 1,
    backgroundColor: '#2E7D32',
    opacity: 0.4,
  },
  percentLabel: {
    position: 'absolute',
    right: 42,
    top: 12,
    fontSize: 7,
    color: '#2E7D32',
    fontWeight: '600',
  },
  tauAnnotation: {
    marginTop: 4,
    alignItems: 'center',
  },
  tauBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ef6c00',
  },
  tauBoxText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#ef6c00',
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

export default StepResponseIllustration;
