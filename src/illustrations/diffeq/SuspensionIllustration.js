import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuspensionIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Suspension (Spring-Mass-Damper)</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Mass block (car body) */}
          <View style={styles.massBlock}>
            <View style={styles.massTop} />
            <View style={styles.massFront} />
            <View style={styles.massSide} />
            <Text style={styles.massLabel}>m</Text>
          </View>

          {/* Spring and Damper side by side */}
          <View style={styles.connectionRow}>
            {/* Spring coil */}
            <View style={styles.springContainer}>
              <Text style={styles.springLabel}>k</Text>
              {[0, 1, 2, 3, 4].map((i) => (
                <View key={i} style={styles.springCoil}>
                  <View
                    style={[
                      styles.springWire,
                      { transform: [{ rotate: i % 2 === 0 ? '25deg' : '-25deg' }] },
                    ]}
                  />
                </View>
              ))}
            </View>

            {/* Damper piston */}
            <View style={styles.damperContainer}>
              <Text style={styles.damperLabel}>c</Text>
              <View style={styles.damperCylinder}>
                <View style={styles.damperOuter} />
                <View style={styles.damperPiston} />
                <View style={styles.damperRod} />
              </View>
            </View>
          </View>

          {/* Wheel */}
          <View style={styles.wheelAssembly}>
            <View style={styles.axle} />
            <View style={styles.wheel}>
              <View style={styles.wheelInner} />
              <View style={styles.hubcap} />
            </View>
          </View>

          {/* Road surface */}
          <View style={styles.road}>
            <View style={styles.bump} />
          </View>

          {/* Displacement curve */}
          <View style={styles.curveContainer}>
            <View style={styles.curveAxis} />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
              const amplitude = 24 * Math.exp(-i * 0.22) * Math.cos(i * 1.0);
              const barHeight = Math.abs(amplitude);
              const isPositive = amplitude >= 0;
              return (
                <View
                  key={i}
                  style={[
                    styles.curveBar,
                    {
                      left: 6 + i * 10,
                      height: barHeight,
                      bottom: isPositive ? 20 : 20 - barHeight,
                      backgroundColor: isPositive ? '#1565C0' : '#5c6bc0',
                      opacity: 0.65 + 0.35 * Math.exp(-i * 0.12),
                    },
                  ]}
                />
              );
            })}
            <Text style={styles.curveLabel}>x(t)</Text>
            <Text style={styles.timeLabel}>t</Text>
            {/* F(t) arrow */}
            <View style={styles.forceArrow}>
              <Text style={styles.forceText}>F(t)↑</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>mẍ + cẋ + kx = F(t)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 260,
    backgroundColor: '#e3f2fd',
    borderRadius: 18,
    overflow: 'hidden',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a237e',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  scene: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: 800,
  },
  stage: {
    width: 240,
    height: 180,
    alignItems: 'center',
    justifyContent: 'flex-start',
    transform: [{ perspective: 800 }, { rotateX: '6deg' }, { rotateY: '-8deg' }],
  },
  massBlock: {
    width: 70,
    height: 28,
    position: 'relative',
    marginTop: 2,
  },
  massTop: {
    width: 70,
    height: 22,
    backgroundColor: '#1565C0',
    borderRadius: 4,
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  massFront: {
    position: 'absolute',
    bottom: 0,
    right: -6,
    width: 6,
    height: 22,
    backgroundColor: '#3949ab',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  massSide: {
    position: 'absolute',
    top: -5,
    left: 6,
    width: 70,
    height: 5,
    backgroundColor: '#5c6bc0',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    transform: [{ skewX: '-10deg' }],
  },
  massLabel: {
    position: 'absolute',
    top: 3,
    left: 0,
    right: 0,
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  connectionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 80,
    height: 48,
  },
  springContainer: {
    alignItems: 'center',
    width: 30,
    height: 48,
    justifyContent: 'center',
  },
  springLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 1,
  },
  springCoil: {
    width: 22,
    height: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  springWire: {
    width: 20,
    height: 3,
    backgroundColor: '#2E7D32',
    borderRadius: 1,
  },
  damperContainer: {
    alignItems: 'center',
    width: 30,
    height: 48,
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  damperLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ef6c00',
    marginBottom: 1,
  },
  damperCylinder: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  damperOuter: {
    width: 16,
    height: 24,
    backgroundColor: '#ef6c00',
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: '#e65100',
  },
  damperPiston: {
    width: 10,
    height: 4,
    backgroundColor: '#ffa726',
    marginTop: -4,
    borderRadius: 1,
  },
  damperRod: {
    width: 3,
    height: 12,
    backgroundColor: '#795548',
    borderRadius: 1,
  },
  wheelAssembly: {
    alignItems: 'center',
    marginTop: -2,
  },
  axle: {
    width: 3,
    height: 6,
    backgroundColor: '#546e7a',
  },
  wheel: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#37474f',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  wheelInner: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#546e7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hubcap: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#90a4ae',
  },
  road: {
    width: 180,
    height: 6,
    backgroundColor: '#78909c',
    borderRadius: 2,
    marginTop: 2,
    position: 'relative',
  },
  bump: {
    position: 'absolute',
    left: 75,
    top: -5,
    width: 20,
    height: 7,
    backgroundColor: '#90a4ae',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  curveContainer: {
    position: 'absolute',
    right: 4,
    top: 10,
    width: 140,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#90caf9',
    overflow: 'hidden',
    shadowColor: '#1a237e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  curveAxis: {
    position: 'absolute',
    left: 4,
    right: 4,
    top: 20,
    height: 1,
    backgroundColor: '#90caf9',
  },
  curveBar: {
    position: 'absolute',
    width: 6,
    borderRadius: 2,
  },
  curveLabel: {
    position: 'absolute',
    left: 2,
    top: 1,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
  },
  timeLabel: {
    position: 'absolute',
    right: 3,
    bottom: 1,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '600',
  },
  forceArrow: {
    position: 'absolute',
    right: 6,
    top: 1,
  },
  forceText: {
    fontSize: 7,
    color: '#C62828',
    fontWeight: '700',
  },
  formulaBar: {
    width: '100%',
    backgroundColor: '#1a237e',
    paddingVertical: 7,
    alignItems: 'center',
    transform: [{ perspective: 600 }, { rotateX: '2deg' }],
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default SuspensionIllustration;
