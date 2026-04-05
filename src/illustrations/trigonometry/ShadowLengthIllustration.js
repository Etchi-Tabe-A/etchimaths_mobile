import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShadowLengthIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shadow Length of a Building</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Sky */}
          <View style={styles.sky}>
            {/* Sun */}
            <View style={styles.sun}>
              <View style={styles.sunCore} />
              {/* Sun rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <View
                  key={`ray${i}`}
                  style={[
                    styles.sunRay,
                    {
                      transform: [{ rotate: `${angle}deg` }],
                    },
                  ]}
                />
              ))}
            </View>
          </View>

          {/* Building */}
          <View style={styles.building}>
            <View style={styles.buildingRoof} />
            <View style={styles.buildingFront}>
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
              {/* Door */}
              <View style={styles.door} />
            </View>
            {/* 3D side */}
            <View style={styles.buildingSide3D} />
          </View>

          {/* Height label */}
          <View style={styles.heightLabel}>
            <View style={styles.hLine} />
            <Text style={styles.hText}>h</Text>
            <View style={styles.hLine} />
          </View>

          {/* Sun ray line from sun to building top */}
          <View style={styles.sunRayLine} />

          {/* Sun ray line from building top to shadow tip */}
          <View style={styles.shadowRayLine} />

          {/* Ground */}
          <View style={styles.ground}>
            {/* Shadow on ground */}
            <View style={styles.shadow}>
              <View style={styles.shadowGradient} />
            </View>
          </View>

          {/* Shadow length label */}
          <View style={styles.shadowLabel}>
            <View style={styles.shadowDash} />
            <Text style={styles.shadowText}>L</Text>
            <View style={styles.shadowDash} />
          </View>

          {/* Angle indicator at building base */}
          <View style={styles.angleArc}>
            <Text style={styles.angleText}>α</Text>
          </View>

          {/* Sun angle label */}
          <View style={styles.sunAngleLabel}>
            <Text style={styles.sunAngleText}>Sun rays</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>L = h / tan(α)</Text>
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
    width: 270,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stage: {
    width: 260,
    height: 195,
    transform: [{ perspective: 800 }, { rotateX: '5deg' }, { rotateY: '-10deg' }],
    position: 'relative',
  },
  sky: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: '#e3f2fd',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  sun: {
    position: 'absolute',
    top: 12,
    right: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sunCore: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ef6c00',
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 2,
  },
  sunRay: {
    position: 'absolute',
    width: 30,
    height: 2,
    backgroundColor: '#ef6c00',
    opacity: 0.5,
    borderRadius: 1,
    top: 15,
    left: 1,
    transformOrigin: 'center center',
  },
  building: {
    position: 'absolute',
    bottom: 48,
    left: 55,
    alignItems: 'center',
  },
  buildingRoof: {
    width: 58,
    height: 8,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  buildingFront: {
    width: 58,
    height: 100,
    backgroundColor: '#3949ab',
    paddingTop: 6,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  buildingSide3D: {
    position: 'absolute',
    top: 8,
    right: -10,
    width: 10,
    height: 100,
    backgroundColor: '#1a237e',
    transform: [{ skewY: '-8deg' }],
    opacity: 0.85,
  },
  windowRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 6,
  },
  window: {
    width: 14,
    height: 11,
    backgroundColor: '#90caf9',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#5c6bc0',
  },
  door: {
    width: 16,
    height: 20,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignSelf: 'center',
    marginTop: 4,
  },
  heightLabel: {
    position: 'absolute',
    left: 38,
    bottom: 48,
    height: 108,
    alignItems: 'center',
  },
  hLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#ef6c00',
  },
  hText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ef6c00',
    marginVertical: 2,
  },
  sunRayLine: {
    position: 'absolute',
    top: 28,
    right: 34,
    width: 80,
    height: 3,
    backgroundColor: '#ef6c00',
    opacity: 0.6,
    transform: [{ rotate: '42deg' }],
    transformOrigin: 'right center',
    borderRadius: 1,
  },
  shadowRayLine: {
    position: 'absolute',
    top: 40,
    left: 80,
    width: 140,
    height: 2,
    backgroundColor: '#ef6c00',
    opacity: 0.45,
    transform: [{ rotate: '42deg' }],
    transformOrigin: 'left center',
    borderRadius: 1,
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#a5d6a7',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 110,
    width: 90,
    height: 18,
  },
  shadowGradient: {
    width: 90,
    height: 18,
    backgroundColor: '#37474f',
    opacity: 0.3,
    borderRadius: 4,
    transform: [{ skewX: '-15deg' }],
  },
  shadowLabel: {
    position: 'absolute',
    bottom: 22,
    left: 110,
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadowDash: {
    flex: 1,
    height: 2,
    backgroundColor: '#1565C0',
  },
  shadowText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1565C0',
    marginHorizontal: 4,
  },
  angleArc: {
    position: 'absolute',
    bottom: 44,
    left: 115,
    width: 24,
    height: 24,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#C62828',
    borderTopLeftRadius: 24,
  },
  angleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#C62828',
    position: 'absolute',
    top: -4,
    left: 20,
  },
  sunAngleLabel: {
    position: 'absolute',
    top: 56,
    right: 20,
  },
  sunAngleText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#ef6c00',
    fontStyle: 'italic',
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

export default ShadowLengthIllustration;
