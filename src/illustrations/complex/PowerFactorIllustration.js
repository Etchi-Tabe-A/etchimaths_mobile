import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PowerFactorIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AC Power Factor Correction</Text>

      <View style={styles.scene}>
        <View style={styles.diagram3D}>
          {/* 3D Power triangle base plane */}
          <View style={styles.trianglePlane}>
            {/* P - Real Power (horizontal base) */}
            <View style={styles.pSide}>
              <View style={styles.pArrowHead} />
            </View>
            <Text style={styles.pLabel}>P (Real)</Text>
            <Text style={styles.pUnit}>Watts</Text>

            {/* Q - Reactive Power (vertical) */}
            <View style={styles.qSide}>
              <View style={styles.qArrowHead} />
            </View>
            <Text style={styles.qLabel}>Q (Reactive)</Text>
            <Text style={styles.qUnit}>VAR</Text>

            {/* S - Apparent Power (hypotenuse) */}
            <View style={styles.sSide}>
              <View style={styles.sArrowHead} />
            </View>
            <Text style={styles.sLabel}>S (Apparent)</Text>
            <Text style={styles.sUnit}>VA</Text>

            {/* Angle φ arc */}
            <View style={styles.angleArc} />
            <Text style={styles.angleText}>φ</Text>

            {/* Right angle square at P-Q corner */}
            <View style={styles.rightAngle} />

            {/* Origin dot */}
            <View style={styles.originDot} />

            {/* End point dot (P,Q corner) */}
            <View style={styles.cornerDot} />

            {/* Tip dot (S endpoint) */}
            <View style={styles.tipDot} />

            {/* Triangle fill */}
            <View style={styles.triangleFill} />
          </View>

          {/* 3D raised sides for depth */}
          <View style={styles.depthSideBottom} />
          <View style={styles.depthSideRight} />

          {/* Power factor gauge */}
          <View style={styles.pfGauge}>
            <View style={styles.pfGaugeInner}>
              <Text style={styles.pfTitle}>PF</Text>
              <View style={styles.pfMeter}>
                <View style={styles.pfFill} />
              </View>
              <Text style={styles.pfValue}>cos(φ)</Text>
            </View>
          </View>
        </View>

        {/* Shadow below */}
        <View style={styles.planeShadow} />

        {/* Legend */}
        <View style={styles.labelRow}>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#1565C0' }]} />
            <Text style={styles.chipText}>P (Real)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#ef6c00' }]} />
            <Text style={styles.chipText}>Q (Reactive)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#C62828' }]} />
            <Text style={styles.chipText}>S (Apparent)</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>PF = cos(φ)</Text>
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
    width: 230,
    height: 210,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ perspective: 800 }, { rotateX: '10deg' }, { rotateY: '-6deg' }],
  },
  trianglePlane: {
    width: 180,
    height: 150,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    position: 'relative',
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  triangleFill: {
    position: 'absolute',
    left: '15%',
    bottom: '25%',
    width: 0,
    height: 0,
    borderLeftWidth: 100,
    borderLeftColor: 'transparent',
    borderBottomWidth: 70,
    borderBottomColor: 'rgba(57,73,171,0.08)',
  },
  pSide: {
    position: 'absolute',
    bottom: '25%',
    left: '15%',
    width: '55%',
    height: 5,
    backgroundColor: '#1565C0',
    borderRadius: 2,
  },
  pArrowHead: {
    position: 'absolute',
    right: -5,
    top: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderLeftColor: '#1565C0',
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: 'transparent',
  },
  pLabel: {
    position: 'absolute',
    bottom: '15%',
    left: '28%',
    fontSize: 10,
    fontWeight: '700',
    color: '#1565C0',
  },
  pUnit: {
    position: 'absolute',
    bottom: '9%',
    left: '34%',
    fontSize: 7,
    color: '#1565C0',
  },
  qSide: {
    position: 'absolute',
    right: '27%',
    bottom: '25%',
    width: 5,
    height: '48%',
    backgroundColor: '#ef6c00',
    borderRadius: 2,
  },
  qArrowHead: {
    position: 'absolute',
    top: -5,
    left: -4,
    width: 0,
    height: 0,
    borderBottomWidth: 9,
    borderBottomColor: '#ef6c00',
    borderLeftWidth: 6,
    borderLeftColor: 'transparent',
    borderRightWidth: 6,
    borderRightColor: 'transparent',
  },
  qLabel: {
    position: 'absolute',
    top: '30%',
    right: '2%',
    fontSize: 10,
    fontWeight: '700',
    color: '#ef6c00',
  },
  qUnit: {
    position: 'absolute',
    top: '40%',
    right: '8%',
    fontSize: 7,
    color: '#ef6c00',
  },
  sSide: {
    position: 'absolute',
    left: '15%',
    bottom: '25%',
    width: '62%',
    height: 5,
    backgroundColor: '#C62828',
    borderRadius: 2,
    transform: [{ rotate: '-37deg' }],
    transformOrigin: 'left bottom',
  },
  sArrowHead: {
    position: 'absolute',
    right: -5,
    top: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderLeftColor: '#C62828',
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: 'transparent',
  },
  sLabel: {
    position: 'absolute',
    top: '35%',
    left: '18%',
    fontSize: 10,
    fontWeight: '700',
    color: '#C62828',
  },
  sUnit: {
    position: 'absolute',
    top: '44%',
    left: '26%',
    fontSize: 7,
    color: '#C62828',
  },
  angleArc: {
    position: 'absolute',
    left: '14%',
    bottom: '22%',
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#00897B',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '25deg' }],
  },
  angleText: {
    position: 'absolute',
    bottom: '30%',
    left: '26%',
    fontSize: 13,
    fontWeight: '700',
    color: '#00897B',
  },
  rightAngle: {
    position: 'absolute',
    right: '26%',
    bottom: '25%',
    width: 10,
    height: 10,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#5c6bc0',
  },
  originDot: {
    position: 'absolute',
    left: '13%',
    bottom: '23%',
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#1a237e',
  },
  cornerDot: {
    position: 'absolute',
    right: '26%',
    bottom: '23%',
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ef6c00',
  },
  tipDot: {
    position: 'absolute',
    right: '26%',
    top: '22%',
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#C62828',
  },
  depthSideBottom: {
    position: 'absolute',
    left: 28,
    bottom: 24,
    width: 180,
    height: 6,
    backgroundColor: '#283593',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  depthSideRight: {
    position: 'absolute',
    right: 21,
    top: 34,
    width: 6,
    height: 150,
    backgroundColor: '#1a237e',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  pfGauge: {
    position: 'absolute',
    left: 8,
    top: 8,
    transform: [{ perspective: 400 }, { rotateY: '8deg' }],
  },
  pfGaugeInner: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  pfTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#1a237e',
  },
  pfMeter: {
    width: 36,
    height: 6,
    backgroundColor: '#e3f2fd',
    borderRadius: 3,
    marginVertical: 3,
    overflow: 'hidden',
  },
  pfFill: {
    width: '72%',
    height: '100%',
    backgroundColor: '#00897B',
    borderRadius: 3,
  },
  pfValue: {
    fontSize: 7,
    fontWeight: '600',
    color: '#00897B',
  },
  planeShadow: {
    width: 180,
    height: 12,
    backgroundColor: 'rgba(26,35,126,0.10)',
    borderRadius: 80,
    marginTop: 2,
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

export default PowerFactorIllustration;
