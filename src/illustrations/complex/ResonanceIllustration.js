import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResonanceIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Series RLC Resonant Frequency</Text>

      <View style={styles.scene}>
        <View style={styles.diagram3D}>
          {/* Circuit board base */}
          <View style={styles.circuitBoard}>
            {/* Wire connecting components */}
            <View style={styles.wireTop} />
            <View style={styles.wireBottom} />

            {/* Resistor block */}
            <View style={styles.resistorGroup}>
              <View style={styles.resistor}>
                <View style={styles.resistorStripe1} />
                <View style={styles.resistorStripe2} />
                <View style={styles.resistorStripe3} />
              </View>
              <View style={styles.resistorShadow} />
              <Text style={styles.componentLabel}>R</Text>
              <View style={styles.resistorLead1} />
              <View style={styles.resistorLead2} />
            </View>

            {/* Inductor coil */}
            <View style={styles.inductorGroup}>
              <View style={styles.inductor}>
                {[0, 1, 2, 3].map((i) => (
                  <View key={`coil-${i}`} style={styles.coilLoop} />
                ))}
              </View>
              <View style={styles.inductorShadow} />
              <Text style={styles.componentLabel}>L</Text>
              <View style={styles.inductorLead1} />
              <View style={styles.inductorLead2} />
            </View>

            {/* Capacitor plates */}
            <View style={styles.capacitorGroup}>
              <View style={styles.capacitor}>
                <View style={styles.capPlate1} />
                <View style={styles.capGap} />
                <View style={styles.capPlate2} />
              </View>
              <View style={styles.capacitorShadow} />
              <Text style={styles.componentLabel}>C</Text>
              <View style={styles.capLead1} />
              <View style={styles.capLead2} />
            </View>

            {/* AC source symbol */}
            <View style={styles.acSource}>
              <View style={styles.acCircle}>
                <Text style={styles.acSymbol}>∿</Text>
              </View>
              <Text style={styles.acLabel}>V</Text>
            </View>
          </View>

          {/* 3D depth for circuit board */}
          <View style={styles.boardSideBottom} />
          <View style={styles.boardSideRight} />

          {/* Frequency response curve */}
          <View style={styles.freqCurve}>
            <View style={styles.freqPlane}>
              {/* Axis */}
              <View style={styles.freqAxisX} />
              <View style={styles.freqAxisY} />

              {/* Resonance peak - built with bars */}
              {[8, 14, 22, 34, 48, 60, 48, 34, 22, 14, 8].map((h, i) => (
                <View
                  key={`bar-${i}`}
                  style={[
                    styles.freqBar,
                    {
                      height: h,
                      left: 8 + i * 7,
                      backgroundColor: i === 5 ? '#C62828' : '#5c6bc0',
                      opacity: i === 5 ? 1 : 0.5 + (i === 4 || i === 6 ? 0.3 : 0),
                    },
                  ]}
                />
              ))}

              {/* Peak marker */}
              <View style={styles.peakMarker} />
              <Text style={styles.peakLabel}>f₀</Text>

              <Text style={styles.freqXLabel}>f</Text>
              <Text style={styles.freqYLabel}>|Z|</Text>
            </View>
          </View>
        </View>

        {/* Shadow */}
        <View style={styles.planeShadow} />

        {/* Legend */}
        <View style={styles.labelRow}>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#ef6c00' }]} />
            <Text style={styles.chipText}>R (Resistor)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#1565C0' }]} />
            <Text style={styles.chipText}>L (Inductor)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#00897B' }]} />
            <Text style={styles.chipText}>C (Capacitor)</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>f₀ = 1 / (2π√LC)</Text>
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
    height: 220,
    alignItems: 'center',
    transform: [{ perspective: 800 }, { rotateX: '10deg' }, { rotateY: '-6deg' }],
  },
  circuitBoard: {
    width: 210,
    height: 100,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#90caf9',
    position: 'relative',
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  wireTop: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    height: 2,
    backgroundColor: '#3949ab',
  },
  wireBottom: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 2,
    backgroundColor: '#3949ab',
  },
  resistorGroup: {
    alignItems: 'center',
    zIndex: 2,
  },
  resistor: {
    width: 32,
    height: 18,
    backgroundColor: '#ef6c00',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#ef6c00',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  resistorStripe1: {
    width: 3,
    height: 14,
    backgroundColor: '#C62828',
    borderRadius: 1,
  },
  resistorStripe2: {
    width: 3,
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  resistorStripe3: {
    width: 3,
    height: 14,
    backgroundColor: '#1a237e',
    borderRadius: 1,
  },
  resistorShadow: {
    width: 28,
    height: 4,
    backgroundColor: 'rgba(239,108,0,0.2)',
    borderRadius: 6,
    marginTop: 1,
  },
  componentLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
    marginTop: 2,
  },
  resistorLead1: {
    position: 'absolute',
    top: -10,
    width: 2,
    height: 10,
    backgroundColor: '#3949ab',
  },
  resistorLead2: {
    position: 'absolute',
    bottom: -14,
    width: 2,
    height: 10,
    backgroundColor: '#3949ab',
  },
  inductorGroup: {
    alignItems: 'center',
    zIndex: 2,
  },
  inductor: {
    flexDirection: 'row',
    gap: 1,
    shadowColor: '#1565C0',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  coilLoop: {
    width: 10,
    height: 18,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#1565C0',
    backgroundColor: 'rgba(21,101,192,0.08)',
  },
  inductorShadow: {
    width: 38,
    height: 4,
    backgroundColor: 'rgba(21,101,192,0.2)',
    borderRadius: 6,
    marginTop: 1,
  },
  inductorLead1: {
    position: 'absolute',
    top: -10,
    width: 2,
    height: 10,
    backgroundColor: '#3949ab',
  },
  inductorLead2: {
    position: 'absolute',
    bottom: -14,
    width: 2,
    height: 10,
    backgroundColor: '#3949ab',
  },
  capacitorGroup: {
    alignItems: 'center',
    zIndex: 2,
  },
  capacitor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    shadowColor: '#00897B',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  capPlate1: {
    width: 5,
    height: 22,
    backgroundColor: '#00897B',
    borderRadius: 1,
  },
  capGap: {
    width: 6,
    height: 22,
    backgroundColor: '#e3f2fd',
  },
  capPlate2: {
    width: 5,
    height: 22,
    backgroundColor: '#00897B',
    borderRadius: 1,
  },
  capacitorShadow: {
    width: 20,
    height: 4,
    backgroundColor: 'rgba(0,137,123,0.2)',
    borderRadius: 6,
    marginTop: 1,
  },
  capLead1: {
    position: 'absolute',
    top: -10,
    width: 2,
    height: 10,
    backgroundColor: '#3949ab',
  },
  capLead2: {
    position: 'absolute',
    bottom: -14,
    width: 2,
    height: 10,
    backgroundColor: '#3949ab',
  },
  acSource: {
    position: 'absolute',
    left: -4,
    top: '50%',
    marginTop: -14,
    alignItems: 'center',
  },
  acCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#C62828',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acSymbol: {
    fontSize: 14,
    color: '#C62828',
    fontWeight: '700',
    marginTop: -2,
  },
  acLabel: {
    fontSize: 7,
    fontWeight: '700',
    color: '#C62828',
    marginTop: 1,
  },
  boardSideBottom: {
    position: 'absolute',
    left: 18,
    top: 100,
    width: 210,
    height: 6,
    backgroundColor: '#283593',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  boardSideRight: {
    position: 'absolute',
    right: 11,
    top: 4,
    width: 6,
    height: 100,
    backgroundColor: '#1a237e',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  freqCurve: {
    marginTop: 10,
    transform: [{ perspective: 500 }, { rotateX: '5deg' }],
  },
  freqPlane: {
    width: 100,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#90caf9',
    position: 'relative',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.14,
    shadowRadius: 5,
    elevation: 3,
  },
  freqAxisX: {
    position: 'absolute',
    bottom: 8,
    left: 6,
    right: 6,
    height: 1,
    backgroundColor: '#3949ab',
  },
  freqAxisY: {
    position: 'absolute',
    left: 6,
    top: 6,
    bottom: 6,
    width: 1,
    backgroundColor: '#3949ab',
  },
  freqBar: {
    position: 'absolute',
    bottom: 9,
    width: 5,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  peakMarker: {
    position: 'absolute',
    bottom: 58,
    left: 40,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C62828',
    borderWidth: 2,
    borderColor: '#fff',
  },
  peakLabel: {
    position: 'absolute',
    bottom: 1,
    left: 38,
    fontSize: 8,
    fontWeight: '700',
    color: '#C62828',
  },
  freqXLabel: {
    position: 'absolute',
    bottom: 1,
    right: 4,
    fontSize: 8,
    color: '#3949ab',
    fontWeight: '600',
  },
  freqYLabel: {
    position: 'absolute',
    top: 2,
    left: 9,
    fontSize: 7,
    color: '#3949ab',
    fontWeight: '600',
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

export default ResonanceIllustration;
