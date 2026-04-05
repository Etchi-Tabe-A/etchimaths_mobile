import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GradientIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Road Gradient Calculation</Text>

      <View style={styles.scene}>
        <View style={styles.landscape}>
          {/* Sky gradient layers */}
          <View style={styles.sky1} />
          <View style={styles.sky2} />

          {/* Hill / ground */}
          <View style={styles.hill} />
          <View style={styles.hillFront} />

          {/* Road surface going uphill */}
          <View style={styles.road} />
          <View style={styles.roadEdge} />

          {/* Road dashes */}
          {[0, 1, 2, 3, 4].map((i) => (
            <View
              key={`dash-${i}`}
              style={[
                styles.roadDash,
                {
                  left: 24 + i * 30,
                  bottom: 34 + i * 18,
                },
              ]}
            />
          ))}

          {/* Rise marker (vertical) */}
          <View style={styles.riseMarker} />
          <View style={styles.riseArrowTop} />
          <View style={styles.riseArrowBottom} />
          <View style={styles.riseLabel}>
            <Text style={styles.riseLabelText}>Rise</Text>
          </View>

          {/* Run marker (horizontal) */}
          <View style={styles.runMarker} />
          <View style={styles.runLabel}>
            <Text style={styles.runLabelText}>Run</Text>
          </View>

          {/* Right angle square */}
          <View style={styles.rightAngle} />

          {/* Slope angle arc */}
          <View style={styles.angleArc} />
          <Text style={styles.angleText}>θ</Text>

          {/* Car on road */}
          <View style={styles.car}>
            <View style={styles.carBody} />
            <View style={styles.carRoof} />
            <View style={styles.carWheel1} />
            <View style={styles.carWheel2} />
          </View>

          {/* Sign post */}
          <View style={styles.signPost} />
          <View style={styles.signBoard}>
            <Text style={styles.signText}>12%</Text>
          </View>
        </View>

        {/* Landscape shadow */}
        <View style={styles.landscapeShadow} />
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>m = rise / run</Text>
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
    textAlign: 'center',
    marginBottom: 10,
  },
  scene: {
    alignItems: 'center',
    marginBottom: 10,
  },
  landscape: {
    width: 190,
    height: 155,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    transform: [{ perspective: 700 }, { rotateX: '-8deg' }, { rotateY: '10deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 7,
  },
  sky1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#e3f2fd',
  },
  sky2: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: '#bbdefb',
  },
  hill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#a5d6a7',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 30,
  },
  hillFront: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#81c784',
  },
  road: {
    position: 'absolute',
    bottom: 18,
    left: 10,
    width: 170,
    height: 22,
    backgroundColor: '#546e7a',
    transform: [{ rotate: '-30deg' }],
    transformOrigin: 'left bottom',
    borderRadius: 3,
    zIndex: 5,
  },
  roadEdge: {
    position: 'absolute',
    bottom: 14,
    left: 10,
    width: 170,
    height: 4,
    backgroundColor: '#37474f',
    transform: [{ rotate: '-30deg' }],
    transformOrigin: 'left bottom',
    borderRadius: 2,
    zIndex: 4,
  },
  roadDash: {
    position: 'absolute',
    width: 12,
    height: 2,
    backgroundColor: '#fff',
    transform: [{ rotate: '-30deg' }],
    zIndex: 6,
    borderRadius: 1,
  },
  riseMarker: {
    position: 'absolute',
    bottom: 30,
    right: 32,
    width: 2,
    height: 70,
    backgroundColor: '#ef6c00',
    zIndex: 10,
  },
  riseArrowTop: {
    position: 'absolute',
    bottom: 98,
    right: 28,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ef6c00',
    zIndex: 10,
  },
  riseArrowBottom: {
    position: 'absolute',
    bottom: 22,
    right: 28,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ef6c00',
    zIndex: 10,
  },
  riseLabel: {
    position: 'absolute',
    bottom: 60,
    right: 4,
    backgroundColor: '#ef6c00',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    zIndex: 11,
  },
  riseLabelText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '700',
  },
  runMarker: {
    position: 'absolute',
    bottom: 28,
    left: 14,
    width: 148,
    height: 2,
    backgroundColor: '#1565C0',
    zIndex: 10,
    borderStyle: 'dashed',
  },
  runLabel: {
    position: 'absolute',
    bottom: 14,
    left: 70,
    backgroundColor: '#1565C0',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    zIndex: 11,
  },
  runLabelText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '700',
  },
  rightAngle: {
    position: 'absolute',
    bottom: 30,
    right: 32,
    width: 10,
    height: 10,
    borderLeftWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#ef6c00',
    zIndex: 10,
  },
  angleArc: {
    position: 'absolute',
    bottom: 20,
    left: 8,
    width: 30,
    height: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#3949ab',
    zIndex: 10,
  },
  angleText: {
    position: 'absolute',
    bottom: 34,
    left: 32,
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#3949ab',
    zIndex: 11,
  },
  car: {
    position: 'absolute',
    bottom: 64,
    left: 52,
    transform: [{ rotate: '-30deg' }],
    zIndex: 8,
  },
  carBody: {
    width: 24,
    height: 10,
    backgroundColor: '#1565C0',
    borderRadius: 3,
  },
  carRoof: {
    width: 14,
    height: 7,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginLeft: 5,
    marginTop: -2,
  },
  carWheel1: {
    position: 'absolute',
    bottom: -3,
    left: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333',
  },
  carWheel2: {
    position: 'absolute',
    bottom: -3,
    right: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333',
  },
  signPost: {
    position: 'absolute',
    top: 34,
    left: 16,
    width: 3,
    height: 40,
    backgroundColor: '#5d4037',
    zIndex: 7,
  },
  signBoard: {
    position: 'absolute',
    top: 28,
    left: 4,
    width: 28,
    height: 18,
    backgroundColor: '#ef6c00',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  signText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '700',
  },
  landscapeShadow: {
    width: 170,
    height: 12,
    borderRadius: 85,
    backgroundColor: 'rgba(21,101,192,0.08)',
    marginTop: 4,
  },
  formulaBar: {
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 24,
    transform: [{ perspective: 600 }, { rotateX: '4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default GradientIllustration;
