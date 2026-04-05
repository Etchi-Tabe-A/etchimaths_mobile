import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HaversineIllustration = () => {
  const gridLines = [0, 1, 2, 3, 4, 5, 6];
  const latLines = [0, 1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GPS Distance Between Two Cities (Haversine)</Text>

      <View style={styles.scene}>
        <View style={styles.globe}>
          {/* Globe body */}
          <View style={styles.globeBody}>
            {/* Latitude lines */}
            {latLines.map((i) => (
              <View
                key={`lat-${i}`}
                style={[
                  styles.latLine,
                  {
                    top: 18 + i * 26,
                    width: Math.sin(((i + 1) / (latLines.length + 1)) * Math.PI) * 130,
                    left: (130 - Math.sin(((i + 1) / (latLines.length + 1)) * Math.PI) * 130) / 2,
                  },
                ]}
              />
            ))}

            {/* Longitude lines */}
            {gridLines.map((i) => (
              <View
                key={`lon-${i}`}
                style={[
                  styles.lonLine,
                  {
                    left: 10 + i * 18,
                    height: 130,
                    top: 0,
                    borderRadius: 60,
                    transform: [{ scaleX: 0.3 + (Math.abs(i - 3) / 3) * 0.7 }],
                  },
                ]}
              />
            ))}

            {/* Equator */}
            <View style={styles.equator} />

            {/* City A */}
            <View style={[styles.cityDot, { top: 35, left: 30 }]}>
              <View style={styles.cityInner} />
            </View>
            <Text style={[styles.cityLabel, { top: 22, left: 14 }]}>City A</Text>

            {/* City B */}
            <View style={[styles.cityDot, { top: 80, left: 90 }]}>
              <View style={styles.cityInner} />
            </View>
            <Text style={[styles.cityLabel, { top: 68, left: 78 }]}>City B</Text>

            {/* Arc between cities */}
            <View style={styles.arcContainer}>
              <View style={styles.arcSegment1} />
              <View style={styles.arcSegment2} />
              <View style={styles.arcSegment3} />
            </View>
          </View>

          {/* Globe shadow */}
          <View style={styles.globeShadow} />

          {/* Distance label */}
          <View style={styles.distanceTag}>
            <Text style={styles.distanceText}>d</Text>
          </View>
        </View>

        {/* Side annotation */}
        <View style={styles.annotation}>
          <Text style={styles.annotationText}>R = 6,371 km</Text>
          <View style={styles.annotationLine} />
          <Text style={styles.annotationSmall}>Earth's radius</Text>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>d = R · c</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    perspective: 800,
  },
  globe: {
    alignItems: 'center',
    transform: [{ perspective: 800 }, { rotateX: '-8deg' }, { rotateY: '15deg' }],
  },
  globeBody: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#e3f2fd',
    borderWidth: 2.5,
    borderColor: '#1565C0',
    overflow: 'hidden',
    position: 'relative',
  },
  latLine: {
    position: 'absolute',
    height: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(21,101,192,0.25)',
    borderStyle: 'dashed',
  },
  lonLine: {
    position: 'absolute',
    width: 0,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(21,101,192,0.18)',
    borderStyle: 'dashed',
  },
  equator: {
    position: 'absolute',
    top: 63,
    left: 0,
    right: 0,
    height: 0,
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(21,101,192,0.4)',
  },
  cityDot: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ef6c00',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  cityInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  cityLabel: {
    position: 'absolute',
    fontSize: 9,
    fontWeight: '700',
    color: '#ef6c00',
    zIndex: 11,
  },
  arcContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
  arcSegment1: {
    position: 'absolute',
    top: 42,
    left: 37,
    width: 20,
    height: 20,
    borderTopWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: '#00897B',
    borderTopRightRadius: 20,
    transform: [{ rotate: '10deg' }],
  },
  arcSegment2: {
    position: 'absolute',
    top: 48,
    left: 52,
    width: 22,
    height: 22,
    borderTopWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: '#00897B',
    borderTopRightRadius: 22,
    transform: [{ rotate: '30deg' }],
  },
  arcSegment3: {
    position: 'absolute',
    top: 60,
    left: 70,
    width: 24,
    height: 24,
    borderTopWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: '#00897B',
    borderTopRightRadius: 24,
    transform: [{ rotate: '50deg' }],
  },
  globeShadow: {
    width: 100,
    height: 14,
    borderRadius: 50,
    backgroundColor: 'rgba(21,101,192,0.10)',
    marginTop: 6,
  },
  distanceTag: {
    position: 'absolute',
    top: 55,
    right: -18,
    backgroundColor: '#00897B',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  distanceText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  annotation: {
    marginLeft: 16,
    alignItems: 'center',
  },
  annotationText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1565C0',
  },
  annotationLine: {
    width: 1.5,
    height: 30,
    backgroundColor: '#90caf9',
    marginVertical: 4,
  },
  annotationSmall: {
    fontSize: 9,
    color: '#5c6bc0',
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

export default HaversineIllustration;
