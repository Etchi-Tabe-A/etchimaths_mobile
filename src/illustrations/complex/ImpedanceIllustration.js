import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImpedanceIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AC Impedance Analysis</Text>

      <View style={styles.scene}>
        <View style={styles.diagram3D}>
          {/* Argand plane base */}
          <View style={styles.argandPlane}>
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={`hgrid-${i}`}
                style={[
                  styles.gridLineH,
                  { bottom: `${i * 25}%` },
                ]}
              />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={`vgrid-${i}`}
                style={[
                  styles.gridLineV,
                  { left: `${i * 25}%` },
                ]}
              />
            ))}

            {/* Real axis (horizontal) */}
            <View style={styles.realAxis} />
            <Text style={styles.realLabel}>Re (R)</Text>

            {/* Imaginary axis (vertical) */}
            <View style={styles.imagAxis} />
            <Text style={styles.imagLabel}>Im (jX)</Text>

            {/* R component (horizontal) */}
            <View style={styles.rComponent}>
              <View style={styles.rArrowHead} />
            </View>
            <Text style={styles.rText}>R</Text>

            {/* X component (vertical) */}
            <View style={styles.xComponent}>
              <View style={styles.xArrowHead} />
            </View>
            <Text style={styles.xText}>jX</Text>

            {/* Impedance vector Z (diagonal) */}
            <View style={styles.zVector}>
              <View style={styles.zArrowHead} />
            </View>
            <Text style={styles.zLabel}>Z</Text>

            {/* Right angle indicator */}
            <View style={styles.rightAngle} />

            {/* Angle arc */}
            <View style={styles.angleArc} />
            <Text style={styles.angleText}>φ</Text>

            {/* Origin dot */}
            <View style={styles.originDot} />
          </View>

          {/* 3D shadow beneath diagram */}
          <View style={styles.planeShadow} />
        </View>

        {/* Floating component labels */}
        <View style={styles.labelRow}>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#1565C0' }]} />
            <Text style={styles.chipText}>R (Resistance)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#ef6c00' }]} />
            <Text style={styles.chipText}>X (Reactance)</Text>
          </View>
          <View style={styles.labelChip}>
            <View style={[styles.chipDot, { backgroundColor: '#C62828' }]} />
            <Text style={styles.chipText}>Z (Impedance)</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>Z = R + jX</Text>
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
    width: 180,
    height: 160,
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
    backgroundColor: 'rgba(144,202,249,0.4)',
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(144,202,249,0.4)',
  },
  realAxis: {
    position: 'absolute',
    bottom: '30%',
    left: 10,
    right: 10,
    height: 2,
    backgroundColor: '#3949ab',
  },
  realLabel: {
    position: 'absolute',
    bottom: '22%',
    right: 6,
    fontSize: 8,
    color: '#3949ab',
    fontWeight: '600',
  },
  imagAxis: {
    position: 'absolute',
    left: '25%',
    top: 10,
    bottom: 10,
    width: 2,
    backgroundColor: '#3949ab',
  },
  imagLabel: {
    position: 'absolute',
    top: 4,
    left: '28%',
    fontSize: 8,
    color: '#3949ab',
    fontWeight: '600',
  },
  rComponent: {
    position: 'absolute',
    bottom: '30%',
    left: '25%',
    width: '45%',
    height: 4,
    backgroundColor: '#1565C0',
    borderRadius: 2,
  },
  rArrowHead: {
    position: 'absolute',
    right: -4,
    top: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderLeftColor: '#1565C0',
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: 'transparent',
  },
  rText: {
    position: 'absolute',
    bottom: '18%',
    left: '42%',
    fontSize: 11,
    fontWeight: '700',
    color: '#1565C0',
  },
  xComponent: {
    position: 'absolute',
    left: '68%',
    bottom: '30%',
    width: 4,
    height: '40%',
    backgroundColor: '#ef6c00',
    borderRadius: 2,
  },
  xArrowHead: {
    position: 'absolute',
    top: -4,
    left: -4,
    width: 0,
    height: 0,
    borderBottomWidth: 8,
    borderBottomColor: '#ef6c00',
    borderLeftWidth: 6,
    borderLeftColor: 'transparent',
    borderRightWidth: 6,
    borderRightColor: 'transparent',
  },
  xText: {
    position: 'absolute',
    top: '26%',
    left: '73%',
    fontSize: 11,
    fontWeight: '700',
    color: '#ef6c00',
  },
  zVector: {
    position: 'absolute',
    left: '25%',
    bottom: '30%',
    width: '55%',
    height: 5,
    backgroundColor: '#C62828',
    borderRadius: 2,
    transform: [{ rotate: '-35deg' }],
    transformOrigin: 'left bottom',
  },
  zArrowHead: {
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
  zLabel: {
    position: 'absolute',
    top: '30%',
    left: '48%',
    fontSize: 13,
    fontWeight: '700',
    color: '#C62828',
  },
  rightAngle: {
    position: 'absolute',
    left: '65%',
    bottom: '30%',
    width: 10,
    height: 10,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#5c6bc0',
  },
  angleArc: {
    position: 'absolute',
    left: '25%',
    bottom: '27%',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00897B',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '30deg' }],
  },
  angleText: {
    position: 'absolute',
    bottom: '34%',
    left: '33%',
    fontSize: 11,
    fontWeight: '700',
    color: '#00897B',
  },
  originDot: {
    position: 'absolute',
    left: '24%',
    bottom: '29%',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a237e',
  },
  planeShadow: {
    width: 170,
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

export default ImpedanceIllustration;
