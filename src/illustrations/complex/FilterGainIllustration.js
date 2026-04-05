import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterGainIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signal Filter Gain and Phase Shift</Text>

      <View style={styles.scene}>
        <View style={styles.diagram3D}>
          {/* Input signal wave */}
          <View style={styles.inputSection}>
            <Text style={styles.signalLabel}>Input</Text>
            <View style={styles.waveContainer}>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <View key={`in-${i}`} style={styles.inputWaveRow}>
                  <View
                    style={[
                      styles.wavePeak,
                      {
                        height: i % 2 === 0 ? 18 : 6,
                        backgroundColor: i % 2 === 0 ? '#1565C0' : '#90caf9',
                        marginTop: i % 2 === 0 ? 0 : 6,
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
            <Text style={styles.ampLabel}>A₁</Text>
          </View>

          {/* Filter processing block */}
          <View style={styles.filterBlock}>
            <View style={styles.filterInner}>
              <Text style={styles.filterTitle}>H(jω)</Text>
              <View style={styles.filterDivider} />
              <View style={styles.filterRow}>
                <View style={styles.gainIndicator}>
                  <Text style={styles.gainArrow}>↕</Text>
                  <Text style={styles.gainLabel}>Gain</Text>
                </View>
                <View style={styles.phaseIndicator}>
                  <View style={styles.phaseArc} />
                  <Text style={styles.phaseLabel}>Phase</Text>
                </View>
              </View>
              {/* Transfer function decorations */}
              <View style={styles.filterCircuit}>
                {[0, 1, 2].map((i) => (
                  <View key={`node-${i}`} style={styles.circuitNode} />
                ))}
                <View style={styles.circuitLine} />
              </View>
            </View>
            {/* 3D depth sides */}
            <View style={styles.filterSideRight} />
            <View style={styles.filterSideBottom} />
          </View>

          {/* Gain arrow */}
          <View style={styles.arrowContainer}>
            <View style={styles.arrowShaft} />
            <View style={styles.arrowTip} />
            <Text style={styles.arrowLabel}>×|H|</Text>
          </View>

          {/* Output signal wave */}
          <View style={styles.outputSection}>
            <Text style={styles.signalLabel}>Output</Text>
            <View style={styles.waveContainer}>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <View key={`out-${i}`} style={styles.outputWaveRow}>
                  <View
                    style={[
                      styles.wavePeak,
                      {
                        height: i % 2 === 0 ? 12 : 4,
                        backgroundColor: i % 2 === 0 ? '#ef6c00' : '#ffcc80',
                        marginTop: i % 2 === 0 ? 3 : 7,
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
            <Text style={styles.ampLabel}>A₂</Text>
          </View>

          {/* Phase shift indicator */}
          <View style={styles.phaseShiftBar}>
            <View style={styles.phaseShiftArrow} />
            <Text style={styles.phaseShiftText}>∠φ shift</Text>
            <View style={styles.phaseShiftArrowR} />
          </View>
        </View>

        {/* 3D shadow */}
        <View style={styles.planeShadow} />

        {/* Legend */}
        <View style={styles.labelRow}>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#1565C0' }]} />
            <Text style={styles.chipText}>Input Signal</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#3949ab' }]} />
            <Text style={styles.chipText}>Filter H(jω)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#ef6c00' }]} />
            <Text style={styles.chipText}>Output Signal</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>|H(jω)|  and  ∠H(jω)</Text>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  scene: {
    alignItems: 'center',
    marginBottom: 10,
  },
  diagram3D: {
    width: 240,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ perspective: 800 }, { rotateX: '6deg' }, { rotateY: '-4deg' }],
  },
  inputSection: {
    position: 'absolute',
    left: 4,
    top: 20,
    alignItems: 'center',
    width: 55,
  },
  outputSection: {
    position: 'absolute',
    right: 4,
    top: 20,
    alignItems: 'center',
    width: 55,
  },
  signalLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 3,
  },
  waveContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 30,
    gap: 2,
  },
  inputWaveRow: {
    alignItems: 'flex-end',
  },
  outputWaveRow: {
    alignItems: 'flex-end',
  },
  wavePeak: {
    width: 5,
    borderRadius: 2,
  },
  ampLabel: {
    fontSize: 8,
    color: '#5c6bc0',
    fontWeight: '600',
    marginTop: 2,
  },
  filterBlock: {
    position: 'absolute',
    left: '28%',
    top: 10,
    width: 100,
    height: 85,
  },
  filterInner: {
    width: 100,
    height: 85,
    backgroundColor: '#3949ab',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  filterTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#e3f2fd',
    letterSpacing: 0.5,
  },
  filterDivider: {
    width: '70%',
    height: 1,
    backgroundColor: 'rgba(227,242,253,0.3)',
    marginVertical: 4,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  gainIndicator: {
    alignItems: 'center',
  },
  gainArrow: {
    fontSize: 14,
    color: '#ef6c00',
    fontWeight: '700',
  },
  gainLabel: {
    fontSize: 7,
    color: '#e3f2fd',
    fontWeight: '600',
  },
  phaseIndicator: {
    alignItems: 'center',
  },
  phaseArc: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#00897B',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '-45deg' }],
  },
  phaseLabel: {
    fontSize: 7,
    color: '#e3f2fd',
    fontWeight: '600',
    marginTop: 1,
  },
  filterCircuit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 8,
  },
  circuitNode: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#90caf9',
  },
  circuitLine: {
    position: 'absolute',
    left: 6,
    right: 6,
    height: 2,
    backgroundColor: 'rgba(144,202,249,0.4)',
    top: 2,
  },
  filterSideRight: {
    position: 'absolute',
    right: -6,
    top: 4,
    width: 6,
    height: 85,
    backgroundColor: '#283593',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  filterSideBottom: {
    position: 'absolute',
    left: 4,
    bottom: -5,
    width: 100,
    height: 5,
    backgroundColor: '#1a237e',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  arrowContainer: {
    position: 'absolute',
    top: 100,
    left: '28%',
    width: 100,
    alignItems: 'center',
  },
  arrowShaft: {
    width: 60,
    height: 3,
    backgroundColor: '#C62828',
    borderRadius: 2,
  },
  arrowTip: {
    position: 'absolute',
    right: 16,
    top: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderLeftColor: '#C62828',
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
  },
  arrowLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#C62828',
    marginTop: 2,
  },
  phaseShiftBar: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,137,123,0.12)',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  phaseShiftArrow: {
    width: 0,
    height: 0,
    borderRightWidth: 6,
    borderRightColor: '#00897B',
    borderTopWidth: 4,
    borderTopColor: 'transparent',
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
    marginRight: 4,
  },
  phaseShiftText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#00897B',
  },
  phaseShiftArrowR: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderLeftColor: '#00897B',
    borderTopWidth: 4,
    borderTopColor: 'transparent',
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
    marginLeft: 4,
  },
  planeShadow: {
    width: 200,
    height: 12,
    backgroundColor: 'rgba(26,35,126,0.10)',
    borderRadius: 80,
    marginTop: 4,
    transform: [{ scaleY: 0.5 }],
  },
  labelRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
    gap: 6,
  },
  labelChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 3,
    shadowColor: '#1a237e',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 3,
    elevation: 2,
  },
  chipDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  chipText: {
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
  },
  formulaBar: {
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 18,
    transform: [{ perspective: 600 }, { rotateX: '3deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default FilterGainIllustration;
