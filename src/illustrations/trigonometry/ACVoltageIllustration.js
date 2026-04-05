import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ACVoltageIllustration = () => {
  // Generate sine wave points as positioned dots
  const wavePoints = [];
  const totalPoints = 36;
  const waveWidth = 220;
  const amplitude = 45;
  const highlightIndex = 10;

  for (let i = 0; i < totalPoints; i++) {
    const x = (i / (totalPoints - 1)) * waveWidth;
    const y = -Math.sin((i / (totalPoints - 1)) * Math.PI * 2.5) * amplitude;
    const isHighlight = i === highlightIndex;
    wavePoints.push({ x, y, isHighlight });
  }

  // Wave line segments
  const segments = [];
  for (let i = 0; i < wavePoints.length - 1; i++) {
    const p1 = wavePoints[i];
    const p2 = wavePoints[i + 1];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    segments.push({ x: p1.x, y: p1.y, length, angle });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AC Voltage at a Given Instant</Text>

      <View style={styles.scene}>
        <View style={styles.stage}>
          {/* Background panel */}
          <View style={styles.panel} />

          {/* Grid lines */}
          {[...Array(5)].map((_, i) => (
            <View
              key={`hg${i}`}
              style={[styles.gridLineH, { top: 20 + i * 35 }]}
            />
          ))}
          {[...Array(7)].map((_, i) => (
            <View
              key={`vg${i}`}
              style={[styles.gridLineV, { left: 15 + i * 35 }]}
            />
          ))}

          {/* Time axis */}
          <View style={styles.timeAxis}>
            <Text style={styles.axisLabel}>t</Text>
          </View>

          {/* Voltage axis */}
          <View style={styles.voltageAxis}>
            <Text style={styles.axisLabelV}>V</Text>
          </View>

          {/* Sine wave segments */}
          <View style={styles.waveContainer}>
            {segments.map((seg, i) => (
              <View
                key={`seg${i}`}
                style={[
                  styles.waveSegment,
                  {
                    left: seg.x + 10,
                    top: 75 + seg.y,
                    width: seg.length + 1,
                    transform: [{ rotate: `${seg.angle}deg` }],
                    backgroundColor:
                      i === highlightIndex || i === highlightIndex - 1
                        ? '#C62828'
                        : '#1565C0',
                  },
                ]}
              />
            ))}

            {/* Highlighted current point */}
            <View
              style={[
                styles.currentPoint,
                {
                  left: wavePoints[highlightIndex].x + 6,
                  top: 71 + wavePoints[highlightIndex].y,
                },
              ]}
            />

            {/* Highlight pulse ring */}
            <View
              style={[
                styles.pulseRing,
                {
                  left: wavePoints[highlightIndex].x + 2,
                  top: 67 + wavePoints[highlightIndex].y,
                },
              ]}
            />

            {/* V(t) label */}
            <View
              style={[
                styles.vtLabel,
                {
                  left: wavePoints[highlightIndex].x - 8,
                  top: 52 + wavePoints[highlightIndex].y,
                },
              ]}
            >
              <Text style={styles.vtText}>V(t)</Text>
            </View>
          </View>

          {/* Amplitude markers */}
          <View style={styles.ampTop}>
            <Text style={styles.ampLabel}>+Vₘ</Text>
            <View style={styles.ampDash} />
          </View>
          <View style={styles.ampBottom}>
            <Text style={styles.ampLabel}>−Vₘ</Text>
            <View style={styles.ampDash} />
          </View>

          {/* Amplitude arrow */}
          <View style={styles.ampArrow}>
            <View style={styles.ampArrowLine} />
            <Text style={styles.ampArrowLabel}>Vₘ</Text>
          </View>

          {/* Zero line label */}
          <View style={styles.zeroLabel}>
            <Text style={styles.zeroText}>0</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>V(t) = Vₘ sin(ωt + φ)</Text>
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
    height: 185,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stage: {
    width: 260,
    height: 175,
    transform: [{ perspective: 800 }, { rotateX: '6deg' }, { rotateY: '-8deg' }],
    position: 'relative',
  },
  panel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  gridLineH: {
    position: 'absolute',
    left: 10,
    right: 10,
    height: 1,
    backgroundColor: '#90caf9',
    opacity: 0.4,
  },
  gridLineV: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    width: 1,
    backgroundColor: '#90caf9',
    opacity: 0.4,
  },
  timeAxis: {
    position: 'absolute',
    top: 73,
    left: 10,
    right: 5,
    height: 2,
    backgroundColor: '#1a237e',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  axisLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1a237e',
    marginRight: -2,
    marginTop: -16,
  },
  voltageAxis: {
    position: 'absolute',
    top: 5,
    left: 12,
    bottom: 10,
    width: 2,
    backgroundColor: '#1a237e',
  },
  axisLabelV: {
    position: 'absolute',
    top: -2,
    left: 4,
    fontSize: 12,
    fontWeight: '700',
    color: '#1a237e',
  },
  waveContainer: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 15,
    bottom: 0,
  },
  waveSegment: {
    position: 'absolute',
    height: 3,
    borderRadius: 1.5,
    transformOrigin: 'left center',
  },
  currentPoint: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 5,
  },
  pulseRing: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#C62828',
    opacity: 0.4,
    zIndex: 4,
  },
  vtLabel: {
    position: 'absolute',
    zIndex: 6,
  },
  vtText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#C62828',
  },
  ampTop: {
    position: 'absolute',
    top: 22,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ampBottom: {
    position: 'absolute',
    bottom: 38,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ampLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#5c6bc0',
    marginRight: 2,
  },
  ampDash: {
    width: 8,
    height: 1,
    backgroundColor: '#5c6bc0',
  },
  ampArrow: {
    position: 'absolute',
    top: 30,
    right: 12,
    height: 45,
    alignItems: 'center',
  },
  ampArrowLine: {
    width: 2,
    height: 40,
    backgroundColor: '#ef6c00',
  },
  ampArrowLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ef6c00',
    marginTop: 2,
  },
  zeroLabel: {
    position: 'absolute',
    top: 62,
    left: 2,
  },
  zeroText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1a237e',
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

export default ACVoltageIllustration;
