import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PointLineDistIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distance from a Building to a Road</Text>

      <View style={styles.scene}>
        <View style={styles.ground}>
          {/* Ground base */}
          <View style={styles.grassBase} />

          {/* Road (line) */}
          <View style={styles.road} />
          <View style={styles.roadStripe1} />
          <View style={styles.roadStripe2} />
          <View style={styles.roadStripe3} />
          <View style={styles.roadStripe4} />
          <View style={styles.roadLabel}>
            <Text style={styles.roadLabelText}>Road (ax + by + c = 0)</Text>
          </View>

          {/* Building */}
          <View style={styles.building}>
            {/* Building front face */}
            <View style={styles.buildingFront}>
              {/* Windows row 1 */}
              <View style={styles.windowRow}>
                <View style={styles.window} />
                <View style={styles.window} />
              </View>
              {/* Windows row 2 */}
              <View style={styles.windowRow}>
                <View style={styles.window} />
                <View style={styles.window} />
              </View>
              {/* Windows row 3 */}
              <View style={styles.windowRow}>
                <View style={styles.window} />
                <View style={styles.window} />
              </View>
              {/* Door */}
              <View style={styles.door} />
            </View>
            {/* Building side face (3D) */}
            <View style={styles.buildingSide} />
            {/* Roof */}
            <View style={styles.roof} />
            <View style={styles.roofSide} />
          </View>

          {/* Point P marker on building base */}
          <View style={styles.pointP}>
            <View style={styles.pointPDot} />
          </View>
          <Text style={styles.pointPLabel}>P (x, y)</Text>

          {/* Perpendicular distance marker */}
          <View style={styles.perpLine} />
          <View style={styles.perpDash1} />
          <View style={styles.perpDash2} />
          <View style={styles.perpDash3} />

          {/* Right angle marker */}
          <View style={styles.rightAngle}>
            <View style={styles.rightAngleInner} />
          </View>

          {/* Distance label */}
          <View style={styles.distLabel}>
            <Text style={styles.distLabelText}>d</Text>
          </View>

          {/* Small trees for scenery */}
          <View style={[styles.shrub, { bottom: 52, left: 8 }]} />
          <View style={[styles.shrub, { bottom: 52, left: 22 }]} />
          <View style={[styles.shrub, { bottom: 22, right: 12 }]} />
        </View>

        {/* Ground shadow */}
        <View style={styles.groundShadow} />
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>d = |ax + by + c| / √(a² + b²)</Text>
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
  ground: {
    width: 190,
    height: 165,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#90caf9',
    position: 'relative',
    transform: [{ perspective: 700 }, { rotateX: '-10deg' }, { rotateY: '12deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 7,
    overflow: 'hidden',
  },
  grassBase: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#c8e6c9',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  road: {
    position: 'absolute',
    bottom: 8,
    left: -10,
    width: 220,
    height: 24,
    backgroundColor: '#546e7a',
    transform: [{ rotate: '-18deg' }],
    transformOrigin: 'left bottom',
    zIndex: 5,
  },
  roadStripe1: {
    position: 'absolute',
    bottom: 22,
    left: 10,
    width: 16,
    height: 2,
    backgroundColor: '#fff',
    transform: [{ rotate: '-18deg' }],
    zIndex: 6,
  },
  roadStripe2: {
    position: 'absolute',
    bottom: 30,
    left: 52,
    width: 16,
    height: 2,
    backgroundColor: '#fff',
    transform: [{ rotate: '-18deg' }],
    zIndex: 6,
  },
  roadStripe3: {
    position: 'absolute',
    bottom: 38,
    left: 96,
    width: 16,
    height: 2,
    backgroundColor: '#fff',
    transform: [{ rotate: '-18deg' }],
    zIndex: 6,
  },
  roadStripe4: {
    position: 'absolute',
    bottom: 46,
    left: 140,
    width: 16,
    height: 2,
    backgroundColor: '#fff',
    transform: [{ rotate: '-18deg' }],
    zIndex: 6,
  },
  roadLabel: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    zIndex: 7,
    backgroundColor: 'rgba(84,110,122,0.85)',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  roadLabelText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#fff',
  },
  building: {
    position: 'absolute',
    top: 10,
    left: 16,
    zIndex: 8,
  },
  buildingFront: {
    width: 44,
    height: 72,
    backgroundColor: '#5c6bc0',
    borderRadius: 3,
    alignItems: 'center',
    paddingTop: 6,
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buildingSide: {
    position: 'absolute',
    top: 3,
    left: 44,
    width: 12,
    height: 72,
    backgroundColor: '#3949ab',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    transform: [{ skewY: '-10deg' }],
  },
  roof: {
    position: 'absolute',
    top: -8,
    left: -3,
    width: 50,
    height: 10,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  roofSide: {
    position: 'absolute',
    top: -5,
    left: 47,
    width: 12,
    height: 10,
    backgroundColor: '#0d1452',
    transform: [{ skewY: '-10deg' }],
    borderTopRightRadius: 3,
  },
  windowRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 36,
    marginBottom: 5,
  },
  window: {
    width: 12,
    height: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#90caf9',
  },
  door: {
    width: 14,
    height: 16,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginTop: 2,
  },
  pointP: {
    position: 'absolute',
    top: 78,
    left: 32,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ef6c00',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 12,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  pointPDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#fff',
  },
  pointPLabel: {
    position: 'absolute',
    top: 80,
    left: 48,
    fontSize: 8,
    fontWeight: '700',
    color: '#ef6c00',
    zIndex: 12,
  },
  perpLine: {
    position: 'absolute',
    top: 84,
    left: 38,
    width: 90,
    height: 0,
    borderTopWidth: 2,
    borderTopColor: '#00897B',
    zIndex: 10,
    transform: [{ rotate: '25deg' }],
    transformOrigin: 'left',
  },
  perpDash1: {
    position: 'absolute',
    top: 89,
    left: 56,
    width: 4,
    height: 4,
    backgroundColor: '#00897B',
    borderRadius: 2,
    zIndex: 11,
  },
  perpDash2: {
    position: 'absolute',
    top: 95,
    left: 78,
    width: 4,
    height: 4,
    backgroundColor: '#00897B',
    borderRadius: 2,
    zIndex: 11,
  },
  perpDash3: {
    position: 'absolute',
    top: 101,
    left: 100,
    width: 4,
    height: 4,
    backgroundColor: '#00897B',
    borderRadius: 2,
    zIndex: 11,
  },
  rightAngle: {
    position: 'absolute',
    top: 103,
    left: 116,
    width: 10,
    height: 10,
    zIndex: 11,
    transform: [{ rotate: '25deg' }],
  },
  rightAngleInner: {
    width: 8,
    height: 8,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#00897B',
  },
  distLabel: {
    position: 'absolute',
    top: 88,
    left: 80,
    backgroundColor: '#00897B',
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
    zIndex: 12,
    shadowColor: '#00897B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  distLabelText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  shrub: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2E7D32',
    opacity: 0.45,
    zIndex: 3,
  },
  groundShadow: {
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
    paddingHorizontal: 14,
    transform: [{ perspective: 600 }, { rotateX: '4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PointLineDistIllustration;
