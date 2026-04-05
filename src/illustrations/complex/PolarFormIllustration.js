import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PolarFormIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rectangular to Polar Form Conversion</Text>

      <View style={styles.scene}>
        <View style={styles.diagram3D}>
          {/* Argand plane */}
          <View style={styles.argandPlane}>
            {/* Grid lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <View
                key={`hg-${i}`}
                style={[styles.gridLineH, { bottom: `${i * 20}%` }]}
              />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <View
                key={`vg-${i}`}
                style={[styles.gridLineV, { left: `${i * 20}%` }]}
              />
            ))}

            {/* Real axis */}
            <View style={styles.realAxis} />
            <Text style={styles.realLabel}>Re</Text>

            {/* Imaginary axis */}
            <View style={styles.imagAxis} />
            <Text style={styles.imagLabel}>Im</Text>

            {/* x-component dashed line */}
            <View style={styles.xDash}>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <View key={`xd-${i}`} style={styles.dashSegment} />
              ))}
            </View>
            <Text style={styles.xValue}>a</Text>

            {/* y-component dashed line */}
            <View style={styles.yDash}>
              {[0, 1, 2, 3, 4].map((i) => (
                <View key={`yd-${i}`} style={styles.dashSegmentV} />
              ))}
            </View>
            <Text style={styles.yValue}>b</Text>

            {/* Radius r vector */}
            <View style={styles.rVector}>
              <View style={styles.rArrowHead} />
            </View>
            <Text style={styles.rLabel}>r</Text>

            {/* Angle θ arc */}
            <View style={styles.thetaArc} />
            <Text style={styles.thetaText}>θ</Text>

            {/* Point z plotted */}
            <View style={styles.pointZ}>
              <View style={styles.pointZInner} />
            </View>
            <Text style={styles.pointZLabel}>z = (a, b)</Text>

            {/* Origin */}
            <View style={styles.originDot} />
            <Text style={styles.originLabel}>O</Text>

            {/* Rectangular form label */}
            <View style={styles.rectBadge}>
              <Text style={styles.rectText}>a + bi</Text>
            </View>

            {/* Polar form label */}
            <View style={styles.polarBadge}>
              <Text style={styles.polarText}>r∠θ</Text>
            </View>
          </View>

          {/* 3D depth edges */}
          <View style={styles.depthBottom} />
          <View style={styles.depthRight} />
        </View>

        {/* Shadow */}
        <View style={styles.planeShadow} />

        {/* Conversion info */}
        <View style={styles.conversionRow}>
          <View style={styles.convBox}>
            <Text style={styles.convTitle}>Rectangular</Text>
            <Text style={styles.convFormula}>z = a + bi</Text>
          </View>
          <View style={styles.convArrow}>
            <Text style={styles.convArrowText}>⇄</Text>
          </View>
          <View style={styles.convBox}>
            <Text style={styles.convTitle}>Polar</Text>
            <Text style={styles.convFormula}>z = r∠θ</Text>
          </View>
        </View>

        {/* Legend */}
        <View style={styles.labelRow}>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#C62828' }]} />
            <Text style={styles.chipText}>r (modulus)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#00897B' }]} />
            <Text style={styles.chipText}>θ (argument)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#ef6c00' }]} />
            <Text style={styles.chipText}>z (point)</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>z = r∠θ</Text>
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
    width: 220,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ perspective: 800 }, { rotateX: '8deg' }, { rotateY: '-5deg' }],
  },
  argandPlane: {
    width: 185,
    height: 165,
    backgroundColor: '#e3f2fd',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#90caf9',
    position: 'relative',
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(144,202,249,0.35)',
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(144,202,249,0.35)',
  },
  realAxis: {
    position: 'absolute',
    bottom: '35%',
    left: 8,
    right: 8,
    height: 2,
    backgroundColor: '#3949ab',
  },
  realLabel: {
    position: 'absolute',
    bottom: '28%',
    right: 6,
    fontSize: 9,
    color: '#3949ab',
    fontWeight: '700',
  },
  imagAxis: {
    position: 'absolute',
    left: '30%',
    top: 8,
    bottom: 8,
    width: 2,
    backgroundColor: '#3949ab',
  },
  imagLabel: {
    position: 'absolute',
    top: 4,
    left: '34%',
    fontSize: 9,
    color: '#3949ab',
    fontWeight: '700',
  },
  xDash: {
    position: 'absolute',
    bottom: '35%',
    left: '30%',
    width: '38%',
    flexDirection: 'row',
    gap: 3,
    height: 2,
  },
  dashSegment: {
    width: 6,
    height: 2,
    backgroundColor: '#5c6bc0',
  },
  xValue: {
    position: 'absolute',
    bottom: '27%',
    left: '45%',
    fontSize: 10,
    fontWeight: '700',
    color: '#1565C0',
  },
  yDash: {
    position: 'absolute',
    left: '66%',
    bottom: '35%',
    height: '35%',
    gap: 3,
    alignItems: 'center',
  },
  dashSegmentV: {
    width: 2,
    height: 6,
    backgroundColor: '#5c6bc0',
  },
  yValue: {
    position: 'absolute',
    top: '33%',
    left: '70%',
    fontSize: 10,
    fontWeight: '700',
    color: '#1565C0',
  },
  rVector: {
    position: 'absolute',
    left: '30%',
    bottom: '35%',
    width: '48%',
    height: 4,
    backgroundColor: '#C62828',
    borderRadius: 2,
    transform: [{ rotate: '-40deg' }],
    transformOrigin: 'left bottom',
  },
  rArrowHead: {
    position: 'absolute',
    right: -4,
    top: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderLeftColor: '#C62828',
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: 'transparent',
  },
  rLabel: {
    position: 'absolute',
    top: '35%',
    left: '43%',
    fontSize: 13,
    fontWeight: '700',
    color: '#C62828',
  },
  thetaArc: {
    position: 'absolute',
    left: '28%',
    bottom: '32%',
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#00897B',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '28deg' }],
  },
  thetaText: {
    position: 'absolute',
    bottom: '40%',
    left: '38%',
    fontSize: 12,
    fontWeight: '700',
    color: '#00897B',
  },
  pointZ: {
    position: 'absolute',
    left: '63%',
    top: '18%',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(239,108,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointZInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ef6c00',
  },
  pointZLabel: {
    position: 'absolute',
    top: '12%',
    left: '74%',
    fontSize: 8,
    fontWeight: '700',
    color: '#ef6c00',
  },
  originDot: {
    position: 'absolute',
    left: '28%',
    bottom: '33%',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a237e',
  },
  originLabel: {
    position: 'absolute',
    bottom: '26%',
    left: '25%',
    fontSize: 9,
    fontWeight: '700',
    color: '#1a237e',
  },
  rectBadge: {
    position: 'absolute',
    bottom: 6,
    left: 6,
    backgroundColor: 'rgba(21,101,192,0.12)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  rectText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#1565C0',
  },
  polarBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(198,40,40,0.12)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  polarText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#C62828',
  },
  depthBottom: {
    position: 'absolute',
    left: 20,
    bottom: 14,
    width: 185,
    height: 6,
    backgroundColor: '#283593',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  depthRight: {
    position: 'absolute',
    right: 14,
    top: 22,
    width: 6,
    height: 165,
    backgroundColor: '#1a237e',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  planeShadow: {
    width: 180,
    height: 12,
    backgroundColor: 'rgba(26,35,126,0.10)',
    borderRadius: 80,
    marginTop: 2,
    transform: [{ scaleY: 0.5 }],
  },
  conversionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 6,
  },
  convBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    shadowColor: '#1a237e',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  convTitle: {
    fontSize: 7,
    fontWeight: '700',
    color: '#5c6bc0',
    marginBottom: 2,
  },
  convFormula: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
  },
  convArrow: {
    padding: 2,
  },
  convArrowText: {
    fontSize: 16,
    color: '#00897B',
    fontWeight: '700',
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

export default PolarFormIllustration;
