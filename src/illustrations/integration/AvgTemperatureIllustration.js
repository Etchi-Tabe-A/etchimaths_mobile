import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AvgTemperatureIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Average Daily Temperature</Text>

      <View style={styles.scene}>
        {/* 3D Graph */}
        <View style={styles.graphGroup}>
          <View style={styles.graphBg}>
            {/* Grid */}
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={`h${i}`}
                style={[styles.gridH, { top: 10 + i * 24 }]}
              />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={`v${i}`}
                style={[styles.gridV, { left: 6 + i * 20 }]}
              />
            ))}

            {/* Shaded area under temperature curve */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const heights = [30, 26, 32, 52, 68, 74, 62, 40];
              return (
                <View
                  key={`bar${i}`}
                  style={[
                    styles.areaBar,
                    {
                      left: 6 + i * 19,
                      height: heights[i],
                      bottom: 0,
                      backgroundColor: i < 3 ? '#5c6bc0' : i < 6 ? '#ef6c00' : '#5c6bc0',
                      opacity: 0.2,
                    },
                  ]}
                />
              );
            })}

            {/* Temperature curve segments */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const tops = [72, 76, 70, 50, 34, 28, 40, 62];
              const angles = [6, -10, -28, -28, -12, 16, 30, 14];
              return (
                <View
                  key={`tc${i}`}
                  style={[
                    styles.tempSeg,
                    {
                      left: 6 + i * 19,
                      top: tops[i],
                      width: 20,
                      transform: [{ rotateZ: `${angles[i]}deg` }],
                    },
                  ]}
                />
              );
            })}

            {/* Average temperature line */}
            <View style={styles.avgLine} />
            <View style={styles.avgLabelBg}>
              <Text style={styles.avgLabelText}>T̄ avg</Text>
            </View>

            {/* Area label */}
            <View style={styles.areaLabelWrap}>
              <Text style={styles.areaLabel}>∫T(t)dt</Text>
            </View>
          </View>

          {/* 3D depth edges */}
          <View style={styles.sideRight} />
          <View style={styles.sideBottom} />

          {/* Axis labels */}
          <Text style={styles.tempAxisLabel}>T(°C)</Text>
          <Text style={styles.timeAxisLabel}>t (hours)</Text>
        </View>

        {/* Time markers along bottom */}
        <View style={styles.timeMarkers}>
          {['0h', '6h', '12h', '18h', '24h'].map((t, i) => (
            <Text key={t} style={styles.timeMarker}>{t}</Text>
          ))}
        </View>

        {/* Thermometer icon */}
        <View style={styles.thermoGroup}>
          <View style={styles.thermoTube}>
            <View style={styles.thermoFill} />
          </View>
          <View style={styles.thermoBulb} />
          <View style={styles.thermoTopCap} />
        </View>

        {/* Sun icon (warm period) */}
        <View style={styles.sunGroup}>
          <View style={styles.sunCore} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <View
              key={`ray${deg}`}
              style={[
                styles.sunRay,
                { transform: [{ rotateZ: `${deg}deg` }, { translateY: -10 }] },
              ]}
            />
          ))}
        </View>

        {/* Moon icon (cool period) */}
        <View style={styles.moonGroup}>
          <View style={styles.moon} />
          <View style={styles.moonCut} />
        </View>

        {/* Temperature curve label */}
        <View style={styles.curveLabelWrap}>
          <Text style={styles.curveLabel}>T(t)</Text>
        </View>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>T̄ = (1/(b−a)) ∫ T(t) dt</Text>
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
  graphGroup: {
    transform: [{ perspective: 800 }, { rotateX: '-8deg' }, { rotateY: '10deg' }],
  },
  graphBg: {
    width: 165,
    height: 110,
    backgroundColor: '#e3f2fd',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#1a237e',
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  gridH: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 0.5,
    backgroundColor: '#90caf9',
  },
  gridV: {
    position: 'absolute',
    top: 0,
    width: 0.5,
    height: '100%',
    backgroundColor: '#90caf9',
  },
  areaBar: {
    position: 'absolute',
    width: 17,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  tempSeg: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#ef6c00',
    borderRadius: 1.5,
  },
  avgLine: {
    position: 'absolute',
    left: 0,
    top: 54,
    width: '100%',
    height: 1.5,
    backgroundColor: '#2E7D32',
    opacity: 0.7,
  },
  avgLabelBg: {
    position: 'absolute',
    right: 4,
    top: 44,
    backgroundColor: '#2E7D32',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 3,
    zIndex: 3,
  },
  avgLabelText: {
    fontSize: 8,
    color: '#fff',
    fontWeight: '700',
  },
  areaLabelWrap: {
    position: 'absolute',
    left: 56,
    bottom: 14,
    zIndex: 3,
  },
  areaLabel: {
    fontSize: 9,
    color: '#3949ab',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  sideRight: {
    position: 'absolute',
    right: -5,
    top: 3,
    width: 5,
    height: 110,
    backgroundColor: '#90caf9',
    borderRightWidth: 1,
    borderColor: '#5c6bc0',
    transform: [{ skewY: '-10deg' }],
  },
  sideBottom: {
    position: 'absolute',
    bottom: -4,
    left: 3,
    width: 165,
    height: 4,
    backgroundColor: '#90caf9',
    borderBottomWidth: 1,
    borderColor: '#5c6bc0',
    transform: [{ skewX: '10deg' }],
  },
  tempAxisLabel: {
    position: 'absolute',
    left: -18,
    top: 38,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
    transform: [{ rotateZ: '-90deg' }],
  },
  timeAxisLabel: {
    position: 'absolute',
    bottom: -14,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
  },
  timeMarkers: {
    flexDirection: 'row',
    width: 165,
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginTop: 2,
  },
  timeMarker: {
    fontSize: 7,
    color: '#5c6bc0',
    fontWeight: '600',
  },
  thermoGroup: {
    position: 'absolute',
    left: 6,
    top: 20,
    alignItems: 'center',
    transform: [{ perspective: 300 }, { rotateY: '12deg' }],
  },
  thermoTube: {
    width: 6,
    height: 32,
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#C62828',
    borderRadius: 3,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  thermoFill: {
    width: '100%',
    height: 20,
    backgroundColor: '#C62828',
    borderRadius: 2,
  },
  thermoBulb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#C62828',
    marginTop: -2,
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  thermoTopCap: {
    position: 'absolute',
    top: -2,
    width: 6,
    height: 4,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#C62828',
  },
  sunGroup: {
    position: 'absolute',
    top: 10,
    right: 14,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sunCore: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ef6c00',
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  sunRay: {
    position: 'absolute',
    width: 1.5,
    height: 5,
    backgroundColor: '#ef6c00',
    borderRadius: 1,
  },
  moonGroup: {
    position: 'absolute',
    top: 14,
    left: 28,
    width: 16,
    height: 16,
  },
  moon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#5c6bc0',
  },
  moonCut: {
    position: 'absolute',
    top: -2,
    left: 5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e3f2fd',
  },
  curveLabelWrap: {
    position: 'absolute',
    top: 36,
    right: 28,
    backgroundColor: '#ef6c00',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
  },
  curveLabel: {
    fontSize: 9,
    color: '#fff',
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
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.4,
  },
});

export default AvgTemperatureIllustration;
