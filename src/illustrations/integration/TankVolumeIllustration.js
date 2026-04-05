import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TankVolumeIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Industrial Tank Volume (Solid of Revolution)</Text>

      <View style={styles.scene}>
        {/* 3D Tank Body */}
        <View style={styles.tankGroup}>
          {/* Tank top ellipse */}
          <View style={styles.tankTopEllipse}>
            <View style={styles.tankTopInner} />
          </View>

          {/* Tank cylinder body */}
          <View style={styles.tankBody}>
            {/* Disk slices */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <View
                key={i}
                style={[
                  styles.diskSlice,
                  {
                    top: 8 + i * 22,
                    width: 68 - i * 3,
                    opacity: 0.25 + i * 0.08,
                  },
                ]}
              />
            ))}

            {/* Curve profile line (left side) */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={`cl${i}`}
                style={[
                  styles.curveSegment,
                  {
                    left: 2 + i * 1.2,
                    top: i * 17,
                    height: 18,
                    backgroundColor: '#ef6c00',
                    transform: [{ rotateZ: `${-4 + i * 1.5}deg` }],
                  },
                ]}
              />
            ))}

            {/* Curve profile line (right side) */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={`cr${i}`}
                style={[
                  styles.curveSegment,
                  {
                    right: 2 + i * 1.2,
                    top: i * 17,
                    height: 18,
                    backgroundColor: '#ef6c00',
                    transform: [{ rotateZ: `${4 - i * 1.5}deg` }],
                  },
                ]}
              />
            ))}

            {/* Vertical axis line */}
            <View style={styles.axisLine} />
          </View>

          {/* Tank bottom ellipse */}
          <View style={styles.tankBottomEllipse} />
        </View>

        {/* Rotation arrow */}
        <View style={styles.rotationArrowGroup}>
          <View style={styles.rotationArc} />
          <View style={styles.rotationArrowHead} />
          <Text style={styles.rotationLabel}>Rotate</Text>
        </View>

        {/* dx label */}
        <View style={styles.dxLabel}>
          <Text style={styles.dxText}>dx</Text>
          <View style={styles.dxBracketTop} />
          <View style={styles.dxBracketBot} />
        </View>

        {/* Axis label */}
        <Text style={styles.axisLabel}>x-axis</Text>

        {/* f(x) label */}
        <View style={styles.fxLabelWrap}>
          <Text style={styles.fxLabel}>f(x)</Text>
        </View>

        {/* Radius indicator */}
        <View style={styles.radiusLine} />
        <Text style={styles.radiusLabel}>r = f(x)</Text>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>V = π ∫ [f(x)]² dx</Text>
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
  tankGroup: {
    alignItems: 'center',
    transform: [{ perspective: 800 }, { rotateX: '-12deg' }, { rotateY: '18deg' }],
  },
  tankTopEllipse: {
    width: 80,
    height: 22,
    borderRadius: 40,
    backgroundColor: '#90caf9',
    borderWidth: 1.5,
    borderColor: '#1565C0',
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tankTopInner: {
    width: 48,
    height: 12,
    borderRadius: 24,
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#5c6bc0',
  },
  tankBody: {
    width: 80,
    height: 140,
    backgroundColor: '#90caf9',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#1565C0',
    marginTop: -4,
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  tankBottomEllipse: {
    width: 80,
    height: 22,
    borderRadius: 40,
    backgroundColor: '#5c6bc0',
    borderWidth: 1.5,
    borderColor: '#1565C0',
    marginTop: -4,
  },
  diskSlice: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#3949ab',
    borderRadius: 1,
    alignSelf: 'center',
  },
  curveSegment: {
    position: 'absolute',
    width: 2,
    borderRadius: 1,
  },
  axisLine: {
    position: 'absolute',
    width: 1.5,
    height: '100%',
    backgroundColor: '#1a237e',
    opacity: 0.5,
  },
  rotationArrowGroup: {
    position: 'absolute',
    right: 10,
    top: 30,
    alignItems: 'center',
  },
  rotationArc: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#ef6c00',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotateZ: '45deg' }],
  },
  rotationArrowHead: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ef6c00',
    marginTop: -8,
    marginLeft: 14,
    transform: [{ rotateZ: '30deg' }],
  },
  rotationLabel: {
    fontSize: 9,
    color: '#ef6c00',
    fontWeight: '600',
    marginTop: 2,
  },
  dxLabel: {
    position: 'absolute',
    left: 18,
    top: 85,
    alignItems: 'center',
  },
  dxText: {
    fontSize: 10,
    color: '#1a237e',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  dxBracketTop: {
    width: 1.5,
    height: 8,
    backgroundColor: '#1a237e',
  },
  dxBracketBot: {
    width: 1.5,
    height: 8,
    backgroundColor: '#1a237e',
  },
  axisLabel: {
    position: 'absolute',
    bottom: 6,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  fxLabelWrap: {
    position: 'absolute',
    left: 6,
    top: 45,
    backgroundColor: '#fff',
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ef6c00',
  },
  fxLabel: {
    fontSize: 9,
    color: '#ef6c00',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  radiusLine: {
    position: 'absolute',
    width: 28,
    height: 1.5,
    backgroundColor: '#C62828',
    top: 100,
    right: 52,
    transform: [{ rotateZ: '-10deg' }],
  },
  radiusLabel: {
    position: 'absolute',
    top: 105,
    right: 30,
    fontSize: 8,
    color: '#C62828',
    fontWeight: '700',
    fontStyle: 'italic',
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
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default TankVolumeIllustration;
