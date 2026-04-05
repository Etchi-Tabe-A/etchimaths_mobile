import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EpidemicIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate of Spread of an Epidemic</Text>

      <View style={styles.scene}>
        {/* Crowd of person icons */}
        <View style={styles.crowd}>
          {/* Row 1 */}
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          <View style={[styles.person, styles.personInfected]}>
            <View style={styles.personHeadInfected} />
            <View style={styles.personBodyInfected} />
          </View>
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          <View style={[styles.person, styles.personInfected]}>
            <View style={styles.personHeadInfected} />
            <View style={styles.personBodyInfected} />
          </View>
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          {/* Row 2 */}
          <View style={[styles.person, styles.personInfected]}>
            <View style={styles.personHeadInfected} />
            <View style={styles.personBodyInfected} />
          </View>
          <View style={[styles.person, styles.personInfected]}>
            <View style={styles.personHeadInfected} />
            <View style={styles.personBodyInfected} />
          </View>
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          <View style={[styles.person, styles.personInfected]}>
            <View style={styles.personHeadInfected} />
            <View style={styles.personBodyInfected} />
          </View>
          {/* Row 3 */}
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          <View style={[styles.person, styles.personInfected]}>
            <View style={styles.personHeadInfected} />
            <View style={styles.personBodyInfected} />
          </View>
          <View style={[styles.person, styles.personHealthy]}>
            <View style={styles.personHead} />
            <View style={styles.personBodyHealthy} />
          </View>
          <View style={[styles.person, styles.personInfected]}>
            <View style={styles.personHeadInfected} />
            <View style={styles.personBodyInfected} />
          </View>
        </View>

        {/* Spread waves */}
        <View style={styles.wave1} />
        <View style={styles.wave2} />

        {/* Infection curve I(t) — S-shaped */}
        <View style={styles.graph1}>
          <View style={styles.graphBg} />
          <Text style={styles.graphLabel}>I(t)</Text>
          <View style={styles.axis1X} />
          <View style={styles.axis1Y} />
          <Text style={styles.axLabelX}>t</Text>
          <Text style={styles.axLabelY}>I</Text>

          {/* S-curve rising bars */}
          <View style={[styles.iBar, { left: 8, height: 3, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 14, height: 5, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 20, height: 9, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 26, height: 16, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 32, height: 26, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 38, height: 36, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 44, height: 42, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 50, height: 46, bottom: 4 }]} />
          <View style={[styles.iBar, { left: 56, height: 48, bottom: 4 }]} />

          {/* N ceiling line */}
          <View style={styles.ceilingLine} />
          <Text style={styles.ceilingLabel}>N</Text>
        </View>

        {/* Rate of change curve dI/dt — bell shape */}
        <View style={styles.graph2}>
          <View style={styles.graphBg2} />
          <Text style={styles.graphLabel2}>dI/dt</Text>
          <View style={styles.axis2X} />
          <View style={styles.axis2Y} />
          <Text style={styles.axLabelX2}>t</Text>

          {/* Bell curve bars */}
          <View style={[styles.rBar, { left: 8, height: 4, bottom: 4 }]} />
          <View style={[styles.rBar, { left: 14, height: 10, bottom: 4 }]} />
          <View style={[styles.rBar, { left: 20, height: 20, bottom: 4 }]} />
          <View style={[styles.rBar, { left: 26, height: 32, bottom: 4 }]} />
          <View style={[styles.rBarPeak, { left: 32, height: 38, bottom: 4 }]} />
          <View style={[styles.rBar, { left: 38, height: 32, bottom: 4 }]} />
          <View style={[styles.rBar, { left: 44, height: 20, bottom: 4 }]} />
          <View style={[styles.rBar, { left: 50, height: 10, bottom: 4 }]} />
          <View style={[styles.rBar, { left: 56, height: 4, bottom: 4 }]} />

          {/* Peak label */}
          <View style={styles.peakDot} />
        </View>

        {/* Derivative arrow between graphs */}
        <View style={styles.derivArrow}>
          <Text style={styles.derivText}>d/dt</Text>
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: '#1565C0' }]} />
            <Text style={styles.legendText}>Healthy</Text>
          </View>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: '#C62828' }]} />
            <Text style={styles.legendText}>Infected</Text>
          </View>
        </View>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>dI/dt = rI(1 − I/N)</Text>
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
  crowd: {
    position: 'absolute',
    top: 4,
    left: 8,
    width: 105,
    height: 75,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    padding: 4,
    transform: [{ perspective: 600 }, { rotateY: '-12deg' }, { rotateX: '10deg' }],
  },
  person: {
    width: 16,
    height: 22,
    alignItems: 'center',
  },
  personHealthy: {},
  personInfected: {},
  personHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1565C0',
    shadowColor: '#1565C0',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  personHeadInfected: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  personBodyHealthy: {
    width: 10,
    height: 12,
    backgroundColor: '#1565C0',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    marginTop: 1,
    opacity: 0.7,
  },
  personBodyInfected: {
    width: 10,
    height: 12,
    backgroundColor: '#C62828',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    marginTop: 1,
    opacity: 0.7,
  },
  wave1: {
    position: 'absolute',
    top: 20,
    left: 60,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#C62828',
    opacity: 0.2,
  },
  wave2: {
    position: 'absolute',
    top: 10,
    left: 50,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#C62828',
    opacity: 0.1,
  },
  graph1: {
    position: 'absolute',
    top: 84,
    left: 4,
    width: 72,
    height: 60,
    transform: [{ perspective: 600 }, { rotateY: '-5deg' }, { rotateX: '5deg' }],
  },
  graphBg: {
    position: 'absolute',
    width: 72,
    height: 60,
    backgroundColor: '#e3f2fd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },
  graphLabel: {
    position: 'absolute',
    top: 1,
    left: 4,
    fontSize: 7,
    fontWeight: '700',
    color: '#C62828',
  },
  axis1X: {
    position: 'absolute',
    bottom: 4,
    left: 8,
    width: 58,
    height: 1.5,
    backgroundColor: '#1a237e',
  },
  axis1Y: {
    position: 'absolute',
    bottom: 4,
    left: 8,
    width: 1.5,
    height: 50,
    backgroundColor: '#1a237e',
  },
  axLabelX: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    fontSize: 6,
    color: '#1a237e',
    fontWeight: '600',
  },
  axLabelY: {
    position: 'absolute',
    top: 4,
    left: 1,
    fontSize: 7,
    color: '#1a237e',
    fontWeight: '700',
  },
  iBar: {
    position: 'absolute',
    width: 4,
    backgroundColor: '#C62828',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    opacity: 0.7,
  },
  ceilingLine: {
    position: 'absolute',
    top: 6,
    left: 8,
    width: 58,
    height: 1,
    backgroundColor: '#1a237e',
    opacity: 0.3,
  },
  ceilingLabel: {
    position: 'absolute',
    top: 2,
    right: 4,
    fontSize: 6,
    fontWeight: '700',
    color: '#1a237e',
    opacity: 0.5,
  },
  graph2: {
    position: 'absolute',
    top: 84,
    right: 4,
    width: 72,
    height: 60,
    transform: [{ perspective: 600 }, { rotateY: '5deg' }, { rotateX: '5deg' }],
  },
  graphBg2: {
    position: 'absolute',
    width: 72,
    height: 60,
    backgroundColor: '#e3f2fd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },
  graphLabel2: {
    position: 'absolute',
    top: 1,
    left: 4,
    fontSize: 7,
    fontWeight: '700',
    color: '#ef6c00',
  },
  axis2X: {
    position: 'absolute',
    bottom: 4,
    left: 8,
    width: 58,
    height: 1.5,
    backgroundColor: '#1a237e',
  },
  axis2Y: {
    position: 'absolute',
    bottom: 4,
    left: 8,
    width: 1.5,
    height: 50,
    backgroundColor: '#1a237e',
  },
  axLabelX2: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    fontSize: 6,
    color: '#1a237e',
    fontWeight: '600',
  },
  rBar: {
    position: 'absolute',
    width: 4,
    backgroundColor: '#ef6c00',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    opacity: 0.7,
  },
  rBarPeak: {
    position: 'absolute',
    width: 4,
    backgroundColor: '#ef6c00',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    opacity: 0.95,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  peakDot: {
    position: 'absolute',
    top: 14,
    left: 32,
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  derivArrow: {
    position: 'absolute',
    top: 106,
    left: 82,
    width: 30,
    alignItems: 'center',
  },
  derivText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#C62828',
  },
  legend: {
    position: 'absolute',
    top: 10,
    right: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    transform: [{ perspective: 400 }, { rotateY: '5deg' }],
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  legendDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  legendText: {
    fontSize: 6,
    color: '#37474f',
    fontWeight: '600',
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

export default EpidemicIllustration;
