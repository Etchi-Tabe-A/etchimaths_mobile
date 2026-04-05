import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SurveyingIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Surveying: Height of a Building</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Sky background */}
          <View style={styles.sky} />

          {/* Building */}
          <View style={styles.buildingGroup}>
            <View style={styles.building}>
              <View style={styles.buildingTop} />
              <View style={styles.buildingBody}>
                {/* Windows */}
                <View style={styles.windowRow}>
                  <View style={styles.window} />
                  <View style={styles.window} />
                </View>
                <View style={styles.windowRow}>
                  <View style={styles.window} />
                  <View style={styles.window} />
                </View>
                <View style={styles.windowRow}>
                  <View style={styles.window} />
                  <View style={styles.window} />
                </View>
                <View style={styles.windowRow}>
                  <View style={styles.window} />
                  <View style={styles.window} />
                </View>
              </View>
              {/* Building side face for 3D */}
              <View style={styles.buildingSide} />
            </View>

            {/* Height label */}
            <View style={styles.heightLine}>
              <View style={styles.heightDash} />
              <Text style={styles.heightLabel}>h</Text>
              <View style={styles.heightDash} />
            </View>
          </View>

          {/* Ground */}
          <View style={styles.ground}>
            <View style={styles.groundSurface} />
          </View>

          {/* Observer */}
          <View style={styles.observer}>
            <View style={styles.observerHead} />
            <View style={styles.observerBody} />
            <View style={styles.observerLegLeft} />
            <View style={styles.observerLegRight} />
          </View>

          {/* Angle of elevation line */}
          <View style={styles.elevationLine} />

          {/* Angle arc indicator */}
          <View style={styles.angleArc}>
            <Text style={styles.angleLabel}>θ</Text>
          </View>

          {/* Distance label */}
          <View style={styles.distanceLine}>
            <View style={styles.distanceDash} />
            <Text style={styles.distanceLabel}>d</Text>
            <View style={styles.distanceDash} />
          </View>

          {/* Dashed horizontal line from observer to building base */}
          <View style={styles.dashedLine}>
            {[...Array(8)].map((_, i) => (
              <View key={i} style={styles.dash} />
            ))}
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>h = d · tan(θ)</Text>
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
    marginBottom: 8,
    textAlign: 'center',
  },
  scene: {
    width: 260,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stage: {
    width: 250,
    height: 190,
    transform: [{ perspective: 800 }, { rotateX: '5deg' }, { rotateY: '-12deg' }],
    position: 'relative',
  },
  sky: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 130,
    backgroundColor: '#e3f2fd',
    borderRadius: 6,
  },
  buildingGroup: {
    position: 'absolute',
    top: 10,
    right: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  building: {
    position: 'relative',
  },
  buildingTop: {
    width: 56,
    height: 8,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  buildingBody: {
    width: 56,
    height: 120,
    backgroundColor: '#3949ab',
    paddingTop: 6,
    paddingHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buildingSide: {
    position: 'absolute',
    top: 8,
    right: -10,
    width: 10,
    height: 120,
    backgroundColor: '#1a237e',
    transform: [{ skewY: '-10deg' }],
  },
  windowRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 6,
  },
  window: {
    width: 14,
    height: 12,
    backgroundColor: '#90caf9',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#5c6bc0',
  },
  heightLine: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 128,
    marginLeft: 4,
  },
  heightDash: {
    width: 2,
    flex: 1,
    backgroundColor: '#ef6c00',
  },
  heightLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ef6c00',
    marginVertical: 2,
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  groundSurface: {
    height: 50,
    backgroundColor: '#a5d6a7',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  observer: {
    position: 'absolute',
    bottom: 42,
    left: 30,
    alignItems: 'center',
  },
  observerHead: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ef6c00',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  observerBody: {
    width: 6,
    height: 18,
    backgroundColor: '#1565C0',
    borderRadius: 2,
  },
  observerLegLeft: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    width: 4,
    height: 12,
    backgroundColor: '#1a237e',
    borderRadius: 1,
    transform: [{ rotate: '-10deg' }],
  },
  observerLegRight: {
    position: 'absolute',
    bottom: -10,
    right: 0,
    width: 4,
    height: 12,
    backgroundColor: '#1a237e',
    borderRadius: 1,
    transform: [{ rotate: '10deg' }],
  },
  elevationLine: {
    position: 'absolute',
    bottom: 62,
    left: 36,
    width: 130,
    height: 3,
    backgroundColor: '#C62828',
    transform: [{ rotate: '-35deg' }],
    transformOrigin: 'left center',
    borderRadius: 1,
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  angleArc: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    width: 28,
    height: 28,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#ef6c00',
    borderTopRightRadius: 28,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  angleLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ef6c00',
    marginTop: -2,
    marginRight: -14,
  },
  distanceLine: {
    position: 'absolute',
    bottom: 35,
    left: 42,
    right: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceDash: {
    flex: 1,
    height: 2,
    backgroundColor: '#1565C0',
  },
  distanceLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1565C0',
    marginHorizontal: 4,
  },
  dashedLine: {
    position: 'absolute',
    bottom: 52,
    left: 36,
    flexDirection: 'row',
    width: 130,
  },
  dash: {
    width: 8,
    height: 2,
    backgroundColor: '#90caf9',
    marginRight: 6,
    borderRadius: 1,
  },
  formulaBar: {
    marginTop: 8,
    backgroundColor: '#1a237e',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 6,
    transform: [{ perspective: 600 }, { rotateX: '3deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 6,
  },
  formulaText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default SurveyingIllustration;
