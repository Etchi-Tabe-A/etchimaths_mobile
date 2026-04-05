import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LadderSafetyIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ladder Safety Angle Check</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Sky background */}
          <View style={styles.sky} />

          {/* Wall */}
          <View style={styles.wall}>
            <View style={styles.wallFace}>
              {/* Brick texture lines */}
              {[...Array(8)].map((_, i) => (
                <View key={`brick${i}`} style={styles.brickLine} />
              ))}
            </View>
            {/* Wall 3D side */}
            <View style={styles.wallSide} />
            {/* Wall top edge */}
            <View style={styles.wallTop} />
          </View>

          {/* Ladder */}
          <View style={styles.ladder}>
            {/* Left rail */}
            <View style={styles.ladderRailLeft} />
            {/* Right rail */}
            <View style={styles.ladderRailRight} />
            {/* Rungs */}
            {[...Array(7)].map((_, i) => (
              <View
                key={`rung${i}`}
                style={[styles.rung, { top: 8 + i * 18 }]}
              />
            ))}
          </View>

          {/* Ground */}
          <View style={styles.ground} />

          {/* Safety zone indicator */}
          <View style={styles.safeZone}>
            <View style={styles.safeZoneBar} />
            <Text style={styles.safeText}>SAFE</Text>
          </View>

          {/* Danger zone indicator */}
          <View style={styles.dangerZone}>
            <View style={styles.dangerZoneBar} />
            <Text style={styles.dangerText}>DANGER</Text>
          </View>

          {/* Ideal angle range label */}
          <View style={styles.idealLabel}>
            <Text style={styles.idealText}>75°</Text>
          </View>

          {/* Angle arc at base */}
          <View style={styles.angleArc}>
            <View style={styles.arcLine} />
          </View>
          <View style={styles.angleLabelPos}>
            <Text style={styles.angleLabel}>θ</Text>
          </View>

          {/* Height reached label */}
          <View style={styles.heightMarker}>
            <View style={styles.heightDash} />
            <Text style={styles.heightText}>height</Text>
            <View style={styles.heightDash} />
          </View>

          {/* Base distance label */}
          <View style={styles.baseMarker}>
            <View style={styles.baseDash} />
            <Text style={styles.baseText}>base</Text>
            <View style={styles.baseDash} />
          </View>

          {/* Ladder length label */}
          <View style={styles.ladderLabel}>
            <Text style={styles.ladderLabelText}>ladder</Text>
          </View>

          {/* Wall contact point */}
          <View style={styles.contactPoint} />

          {/* Ground contact point */}
          <View style={styles.groundContact} />

          {/* Safety badge */}
          <View style={styles.safetyBadge}>
            <Text style={styles.badgeText}>75°</Text>
            <Text style={styles.badgeSubText}>ideal</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>cos(θ) = base / ladder</Text>
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
    transform: [{ perspective: 800 }, { rotateX: '4deg' }, { rotateY: '-14deg' }],
    position: 'relative',
  },
  sky: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#e3f2fd',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  wall: {
    position: 'absolute',
    top: 10,
    left: 30,
    width: 55,
    height: 140,
  },
  wallFace: {
    width: 55,
    height: 140,
    backgroundColor: '#5c6bc0',
    borderRadius: 2,
    paddingTop: 6,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    overflow: 'hidden',
  },
  wallSide: {
    position: 'absolute',
    top: 0,
    right: -8,
    width: 8,
    height: 140,
    backgroundColor: '#3949ab',
    transform: [{ skewY: '-6deg' }],
  },
  wallTop: {
    position: 'absolute',
    top: -5,
    left: 0,
    width: 63,
    height: 5,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  brickLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#3949ab',
    marginBottom: 15,
    opacity: 0.5,
  },
  ladder: {
    position: 'absolute',
    bottom: 45,
    left: 75,
    width: 24,
    height: 130,
    transform: [{ rotate: '-20deg' }],
    transformOrigin: 'bottom left',
  },
  ladderRailLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 4,
    height: 130,
    backgroundColor: '#ef6c00',
    borderRadius: 2,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  ladderRailRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 4,
    height: 130,
    backgroundColor: '#ef6c00',
    borderRadius: 2,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  rung: {
    position: 'absolute',
    left: 3,
    width: 18,
    height: 3,
    backgroundColor: '#e65100',
    borderRadius: 1,
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    backgroundColor: '#a5d6a7',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  safeZone: {
    position: 'absolute',
    bottom: 45,
    left: 78,
    width: 38,
    height: 4,
    alignItems: 'center',
  },
  safeZoneBar: {
    width: 38,
    height: 4,
    backgroundColor: '#2e7d32',
    borderRadius: 2,
    shadowColor: '#2e7d32',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  safeText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#2e7d32',
    marginTop: 1,
  },
  dangerZone: {
    position: 'absolute',
    bottom: 45,
    left: 118,
    width: 40,
    height: 4,
    alignItems: 'center',
  },
  dangerZoneBar: {
    width: 40,
    height: 4,
    backgroundColor: '#C62828',
    borderRadius: 2,
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  dangerText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#C62828',
    marginTop: 1,
  },
  idealLabel: {
    position: 'absolute',
    bottom: 56,
    left: 91,
  },
  idealText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#2e7d32',
  },
  angleArc: {
    position: 'absolute',
    bottom: 42,
    left: 80,
    width: 26,
    height: 26,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#C62828',
    borderTopLeftRadius: 26,
  },
  arcLine: {
    width: 0,
    height: 0,
  },
  angleLabelPos: {
    position: 'absolute',
    bottom: 60,
    left: 102,
  },
  angleLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#C62828',
  },
  heightMarker: {
    position: 'absolute',
    left: 15,
    top: 15,
    bottom: 50,
    alignItems: 'center',
    width: 12,
  },
  heightDash: {
    flex: 1,
    width: 2,
    backgroundColor: '#1565C0',
  },
  heightText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#1565C0',
    marginVertical: 2,
    transform: [{ rotate: '-90deg' }],
    width: 34,
    textAlign: 'center',
  },
  baseMarker: {
    position: 'absolute',
    bottom: 28,
    left: 86,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  baseDash: {
    flex: 1,
    height: 2,
    backgroundColor: '#1565C0',
  },
  baseText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1565C0',
    marginHorizontal: 3,
  },
  ladderLabel: {
    position: 'absolute',
    top: 80,
    left: 100,
    transform: [{ rotate: '-65deg' }],
  },
  ladderLabelText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#ef6c00',
  },
  contactPoint: {
    position: 'absolute',
    top: 28,
    left: 78,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 4,
  },
  groundContact: {
    position: 'absolute',
    bottom: 40,
    left: 72,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1565C0',
    shadowColor: '#1565C0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 4,
  },
  safetyBadge: {
    position: 'absolute',
    top: 12,
    right: 15,
    backgroundColor: '#2e7d32',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  badgeSubText: {
    fontSize: 8,
    fontWeight: '600',
    color: '#c8e6c9',
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

export default LadderSafetyIllustration;
