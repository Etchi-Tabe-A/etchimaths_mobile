import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewtonCoolingIllustration = () => {
  // Cooling curve: starts high, decays toward ambient
  const coolingPoints = [
    { x: 0, y: 95 },
    { x: 1, y: 82 },
    { x: 2, y: 71 },
    { x: 3, y: 62 },
    { x: 4, y: 55 },
    { x: 5, y: 49 },
    { x: 6, y: 44 },
    { x: 7, y: 40 },
    { x: 8, y: 37 },
    { x: 9, y: 35 },
    { x: 10, y: 33 },
  ];

  const ambientY = 28; // ambient temperature level
  const graphWidth = 210;
  const graphHeight = 120;
  const maxX = 10;
  const maxY = 105;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Newton's Law of Cooling (Forensic Science)</Text>

      <View style={styles.scene}>
        {/* 3D Thermometer */}
        <View style={styles.thermometerSection}>
          <View style={styles.thermometer3D}>
            {/* Thermometer tube */}
            <View style={styles.thermoTube}>
              <View style={styles.thermoMercury} />
              <View style={styles.thermoTickHigh} />
              <View style={styles.thermoTickMid} />
              <View style={styles.thermoTickLow} />
            </View>
            {/* Thermometer bulb */}
            <View style={styles.thermoBulb} />
            {/* 3D side */}
            <View style={styles.thermoSide} />
          </View>

          {/* Temperature labels */}
          <View style={styles.tempLabels}>
            <View style={styles.tempBadgeHot}>
              <Text style={styles.tempText}>T₀</Text>
            </View>
            <View style={styles.tempBadgeCool}>
              <Text style={styles.tempText}>Tₐ</Text>
            </View>
          </View>
        </View>

        {/* Cooling curve graph */}
        <View style={styles.graphContainer}>
          <View style={styles.graph3D}>
            {/* Ambient temperature line */}
            <View
              style={[
                styles.ambientLine,
                { bottom: (ambientY / maxY) * graphHeight },
              ]}
            >
              <Text style={styles.ambientLabel}>Tₐ</Text>
            </View>

            {/* T₀ label */}
            <Text style={styles.t0Label}>T₀</Text>

            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((val, i) => (
              <View
                key={i}
                style={[
                  styles.gridLine,
                  { bottom: (val / maxY) * graphHeight },
                ]}
              />
            ))}

            {/* Curve points */}
            {coolingPoints.map((pt, i) => (
              <View
                key={i}
                style={[
                  styles.curvePoint,
                  {
                    left: (pt.x / maxX) * graphWidth - 3.5,
                    bottom: (pt.y / maxY) * graphHeight - 3.5,
                  },
                ]}
              />
            ))}

            {/* Curve segments */}
            {coolingPoints.slice(0, -1).map((pt, i) => {
              const next = coolingPoints[i + 1];
              const x1 = (pt.x / maxX) * graphWidth;
              const y1 = (pt.y / maxY) * graphHeight;
              const x2 = (next.x / maxX) * graphWidth;
              const y2 = (next.y / maxY) * graphHeight;
              const dx = x2 - x1;
              const dy = y2 - y1;
              const len = Math.sqrt(dx * dx + dy * dy);
              const angle = Math.atan2(-dy, dx) * (180 / Math.PI);
              return (
                <View
                  key={'seg' + i}
                  style={[
                    styles.curveSegment,
                    {
                      width: len,
                      left: x1,
                      bottom: y1,
                      transform: [{ rotate: angle + 'deg' }],
                      transformOrigin: 'left center',
                    },
                  ]}
                />
              );
            })}

            {/* Axis labels */}
            <Text style={styles.yAxisLabel}>T(t)</Text>
            <Text style={styles.xAxisLabel}>t</Text>
          </View>
        </View>

        {/* Forensic context bar */}
        <View style={styles.contextRow}>
          <View style={styles.contextItem}>
            <View style={styles.dotHot} />
            <Text style={styles.contextText}>Body temp</Text>
          </View>
          <View style={styles.contextItem}>
            <View style={styles.dotCool} />
            <Text style={styles.contextText}>Room temp</Text>
          </View>
          <View style={styles.contextItem}>
            <View style={styles.dotTime} />
            <Text style={styles.contextText}>Time of death</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>T(t) = Tₐ + (T₀ − Tₐ)e⁻ᵏᵗ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
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
    width: '100%',
  },
  thermometerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    gap: 14,
    perspective: 700,
  },
  thermometer3D: {
    alignItems: 'center',
    position: 'relative',
    transform: [{ rotateY: '-10deg' }, { rotateX: '5deg' }],
  },
  thermoTube: {
    width: 18,
    height: 70,
    backgroundColor: '#e0e0e0',
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#9e9e9e',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  thermoMercury: {
    position: 'absolute',
    bottom: 0,
    left: 2,
    right: 2,
    height: 48,
    backgroundColor: '#C62828',
    borderRadius: 5,
  },
  thermoTickHigh: {
    position: 'absolute',
    top: 8,
    right: 0,
    width: 6,
    height: 2,
    backgroundColor: '#616161',
  },
  thermoTickMid: {
    position: 'absolute',
    top: 28,
    right: 0,
    width: 6,
    height: 2,
    backgroundColor: '#616161',
  },
  thermoTickLow: {
    position: 'absolute',
    top: 48,
    right: 0,
    width: 6,
    height: 2,
    backgroundColor: '#616161',
  },
  thermoBulb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#C62828',
    marginTop: -4,
    borderWidth: 2,
    borderColor: '#9e9e9e',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  thermoSide: {
    position: 'absolute',
    right: -6,
    top: 8,
    width: 6,
    height: 62,
    backgroundColor: '#bdbdbd',
    borderRadius: 3,
    transform: [{ skewY: '-12deg' }],
  },
  tempLabels: {
    gap: 12,
  },
  tempBadgeHot: {
    backgroundColor: '#C62828',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    shadowColor: '#C62828',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  tempBadgeCool: {
    backgroundColor: '#1565C0',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    shadowColor: '#1565C0',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  tempText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  graphContainer: {
    perspective: 800,
    marginBottom: 10,
  },
  graph3D: {
    width: 220,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1a237e',
    padding: 5,
    transform: [{ rotateX: '7deg' }, { rotateY: '-4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 7,
    position: 'relative',
    overflow: 'hidden',
  },
  ambientLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#1565C0',
    opacity: 0.6,
  },
  ambientLabel: {
    position: 'absolute',
    right: 4,
    top: -14,
    fontSize: 10,
    fontWeight: '700',
    color: '#1565C0',
  },
  t0Label: {
    position: 'absolute',
    left: 4,
    top: 4,
    fontSize: 10,
    fontWeight: '700',
    color: '#C62828',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#90caf9',
    opacity: 0.35,
  },
  curvePoint: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#C62828',
    zIndex: 5,
  },
  curveSegment: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#C62828',
    borderRadius: 1.5,
    zIndex: 4,
    opacity: 0.85,
  },
  yAxisLabel: {
    position: 'absolute',
    left: 2,
    top: 18,
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
  },
  xAxisLabel: {
    position: 'absolute',
    right: 6,
    bottom: 2,
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
  },
  contextRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  contextItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dotHot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C62828',
  },
  dotCool: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1565C0',
  },
  dotTime: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef6c00',
  },
  contextText: {
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
  },
  formulaBar: {
    backgroundColor: '#1a237e',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 6,
    transform: [{ perspective: 600 }, { rotateX: '4deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default NewtonCoolingIllustration;
