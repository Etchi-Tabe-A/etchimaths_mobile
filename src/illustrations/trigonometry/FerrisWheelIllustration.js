import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FerrisWheelIllustration = () => {
  const radius = 60;
  const centerX = 120;
  const centerY = 75;
  const numSpokes = 8;
  const numSeats = 8;

  // Spokes
  const spokes = [];
  for (let i = 0; i < numSpokes; i++) {
    const angle = (i / numSpokes) * 360;
    spokes.push(angle);
  }

  // Seat positions around the wheel
  const seats = [];
  for (let i = 0; i < numSeats; i++) {
    const angle = (i / numSeats) * Math.PI * 2 - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius - 6;
    const y = centerY + Math.sin(angle) * radius - 6;
    seats.push({ x, y, angle: i, isRider: i === 2 });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ferris Wheel Rider Height</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Sky */}
          <View style={styles.sky} />

          {/* Support structure - left leg */}
          <View style={styles.supportLeft} />
          {/* Support structure - right leg */}
          <View style={styles.supportRight} />
          {/* Support cross beam */}
          <View style={styles.crossBeam} />

          {/* Wheel outer rim */}
          <View style={styles.wheelRim}>
            {/* Inner decorative ring */}
            <View style={styles.innerRing} />

            {/* Hub */}
            <View style={styles.hub} />
          </View>

          {/* Spokes */}
          {spokes.map((angle, i) => (
            <View
              key={`spoke${i}`}
              style={[
                styles.spoke,
                {
                  left: centerX - 1,
                  top: centerY - 1,
                  width: radius,
                  transform: [{ rotate: `${angle}deg` }],
                  transformOrigin: 'left center',
                },
              ]}
            />
          ))}

          {/* Seats */}
          {seats.map((seat, i) => (
            <View
              key={`seat${i}`}
              style={[
                styles.seat,
                {
                  left: seat.x,
                  top: seat.y,
                  backgroundColor: seat.isRider ? '#C62828' : '#1565C0',
                  shadowColor: seat.isRider ? '#C62828' : '#000',
                  shadowOpacity: seat.isRider ? 0.6 : 0.3,
                },
              ]}
            >
              {seat.isRider && <View style={styles.riderDot} />}
            </View>
          ))}

          {/* Rider label */}
          <View
            style={[
              styles.riderLabel,
              { left: seats[2].x + 14, top: seats[2].y - 6 },
            ]}
          >
            <Text style={styles.riderText}>Rider</Text>
          </View>

          {/* Ground */}
          <View style={styles.ground} />

          {/* Height marker line */}
          <View style={styles.heightMarker}>
            <View style={styles.heightLine} />
            <Text style={styles.heightText}>h(t)</Text>
            <View style={styles.heightLine} />
          </View>

          {/* Radius label */}
          <View style={styles.radiusLabel}>
            <Text style={styles.radiusText}>r</Text>
          </View>

          {/* Angle indicator */}
          <View style={styles.angleIndicator}>
            <Text style={styles.angleText}>θ</Text>
          </View>

          {/* Ground level label */}
          <View style={styles.groundLabel}>
            <Text style={styles.groundText}>Ground</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>h(t) = r − r · cos(θ)</Text>
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
    transform: [{ perspective: 900 }, { rotateX: '4deg' }, { rotateY: '-10deg' }],
    position: 'relative',
  },
  sky: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 155,
    backgroundColor: '#e3f2fd',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  supportLeft: {
    position: 'absolute',
    bottom: 35,
    left: 95,
    width: 4,
    height: 90,
    backgroundColor: '#5c6bc0',
    transform: [{ rotate: '12deg' }],
    transformOrigin: 'bottom center',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  supportRight: {
    position: 'absolute',
    bottom: 35,
    left: 140,
    width: 4,
    height: 90,
    backgroundColor: '#5c6bc0',
    transform: [{ rotate: '-12deg' }],
    transformOrigin: 'bottom center',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  crossBeam: {
    position: 'absolute',
    bottom: 70,
    left: 100,
    width: 40,
    height: 3,
    backgroundColor: '#3949ab',
    borderRadius: 1,
  },
  wheelRim: {
    position: 'absolute',
    left: 120 - 60,
    top: 75 - 60,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#1565C0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1565C0',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  innerRing: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1.5,
    borderColor: '#90caf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hub: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1a237e',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  spoke: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#3949ab',
    borderRadius: 1,
  },
  seat: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 3,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 3,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  riderDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffffff',
  },
  riderLabel: {
    position: 'absolute',
    zIndex: 10,
  },
  riderText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#C62828',
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#a5d6a7',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  heightMarker: {
    position: 'absolute',
    left: 18,
    top: 40,
    bottom: 40,
    alignItems: 'center',
    width: 30,
  },
  heightLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#ef6c00',
  },
  heightText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#ef6c00',
    marginVertical: 2,
  },
  radiusLabel: {
    position: 'absolute',
    left: 100,
    top: 60,
  },
  radiusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1565C0',
  },
  angleIndicator: {
    position: 'absolute',
    left: 125,
    top: 82,
  },
  angleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ef6c00',
  },
  groundLabel: {
    position: 'absolute',
    bottom: 12,
    right: 15,
  },
  groundText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#2e7d32',
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

export default FerrisWheelIllustration;
