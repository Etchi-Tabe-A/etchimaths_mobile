import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MaxProfitIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maximum Profit Optimisation</Text>

      <View style={styles.scene}>
        {/* 3D Profit Curve */}
        <View style={styles.graphArea}>
          <View style={styles.graphBg} />

          {/* Grid lines */}
          <View style={[styles.gridLine, { bottom: 24 }]} />
          <View style={[styles.gridLine, { bottom: 44 }]} />
          <View style={[styles.gridLine, { bottom: 64 }]} />
          <View style={[styles.gridLine, { bottom: 84 }]} />

          {/* Axes */}
          <View style={styles.xAxis} />
          <View style={styles.yAxis} />
          <Text style={styles.axisLabelX}>x (quantity)</Text>
          <Text style={styles.axisLabelY}>P</Text>

          {/* Parabola (inverted) via bars */}
          <View style={[styles.profitBar, { left: 16, height: 10, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 26, height: 26, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 36, height: 42, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 46, height: 56, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 56, height: 68, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 66, height: 78, bottom: 8 }]} />
          <View style={[styles.profitBarPeak, { left: 76, height: 84, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 86, height: 78, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 96, height: 68, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 106, height: 56, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 116, height: 42, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 126, height: 26, bottom: 8 }]} />
          <View style={[styles.profitBar, { left: 136, height: 10, bottom: 8 }]} />

          {/* Tangent line at peak (horizontal = slope 0) */}
          <View style={styles.tangentLine} />

          {/* Peak marker dot */}
          <View style={styles.peakDot} />

          {/* Flag at peak */}
          <View style={styles.flagPole} />
          <View style={styles.flag}>
            <Text style={styles.flagText}>MAX</Text>
          </View>

          {/* dP/dx = 0 label */}
          <View style={styles.slopeLabel}>
            <Text style={styles.slopeLabelText}>dP/dx = 0</Text>
          </View>
        </View>

        {/* Dollar signs floating */}
        <View style={styles.dollar1}>
          <Text style={styles.dollarText}>$</Text>
        </View>
        <View style={styles.dollar2}>
          <Text style={styles.dollarText}>$</Text>
        </View>
        <View style={styles.dollar3}>
          <Text style={styles.dollarText}>$</Text>
        </View>

        {/* Profit zone indicators */}
        <View style={styles.profitZone}>
          <View style={styles.zonePlus}>
            <Text style={styles.zoneText}>+</Text>
          </View>
          <View style={styles.zoneArrowUp} />
        </View>
        <View style={styles.lossZone}>
          <View style={styles.zoneMinus}>
            <Text style={styles.zoneText}>−</Text>
          </View>
          <View style={styles.zoneArrowDown} />
        </View>

        {/* Annotation */}
        <View style={styles.annotation}>
          <Text style={styles.annotText}>slope = 0 at max</Text>
        </View>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>dP/dx = 0</Text>
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
    marginBottom: 6,
    textAlign: 'center',
  },
  scene: {
    width: 260,
    height: 185,
    position: 'relative',
    perspective: 800,
  },
  graphArea: {
    position: 'absolute',
    top: 10,
    left: 40,
    width: 160,
    height: 130,
    transform: [{ perspective: 700 }, { rotateY: '-5deg' }, { rotateX: '6deg' }],
  },
  graphBg: {
    position: 'absolute',
    width: 160,
    height: 130,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 5,
  },
  gridLine: {
    position: 'absolute',
    left: 14,
    width: 134,
    height: 1,
    backgroundColor: '#bbdefb',
    opacity: 0.6,
  },
  xAxis: {
    position: 'absolute',
    bottom: 8,
    left: 14,
    width: 138,
    height: 2,
    backgroundColor: '#1a237e',
  },
  yAxis: {
    position: 'absolute',
    bottom: 8,
    left: 14,
    width: 2,
    height: 112,
    backgroundColor: '#1a237e',
  },
  axisLabelX: {
    position: 'absolute',
    bottom: 0,
    right: 6,
    fontSize: 7,
    color: '#1a237e',
    fontWeight: '600',
  },
  axisLabelY: {
    position: 'absolute',
    top: 4,
    left: 4,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '700',
  },
  profitBar: {
    position: 'absolute',
    width: 7,
    backgroundColor: '#2E7D32',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    opacity: 0.65,
  },
  profitBarPeak: {
    position: 'absolute',
    width: 7,
    backgroundColor: '#ef6c00',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    opacity: 0.9,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
  tangentLine: {
    position: 'absolute',
    top: 30,
    left: 50,
    width: 60,
    height: 2,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  peakDot: {
    position: 'absolute',
    top: 26,
    left: 76,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
  },
  flagPole: {
    position: 'absolute',
    top: 8,
    left: 79,
    width: 2,
    height: 22,
    backgroundColor: '#1a237e',
  },
  flag: {
    position: 'absolute',
    top: 4,
    left: 81,
    backgroundColor: '#ef6c00',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  flagText: {
    fontSize: 7,
    fontWeight: '800',
    color: '#fff',
  },
  slopeLabel: {
    position: 'absolute',
    top: 16,
    right: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#C62828',
  },
  slopeLabelText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#C62828',
  },
  dollar1: {
    position: 'absolute',
    top: 6,
    left: 8,
    transform: [{ perspective: 300 }, { rotateY: '20deg' }],
  },
  dollar2: {
    position: 'absolute',
    top: 30,
    left: 18,
    transform: [{ perspective: 300 }, { rotateY: '-15deg' }],
  },
  dollar3: {
    position: 'absolute',
    top: 14,
    left: 28,
    transform: [{ perspective: 300 }, { rotateY: '10deg' }],
  },
  dollarText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2E7D32',
    opacity: 0.5,
  },
  profitZone: {
    position: 'absolute',
    bottom: 40,
    left: 8,
    alignItems: 'center',
  },
  zonePlus: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2E7D32',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  lossZone: {
    position: 'absolute',
    bottom: 40,
    right: 4,
    alignItems: 'center',
  },
  zoneMinus: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#C62828',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#C62828',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  zoneText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#fff',
  },
  zoneArrowUp: {
    marginTop: 2,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#2E7D32',
  },
  zoneArrowDown: {
    marginTop: 2,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#C62828',
  },
  annotation: {
    position: 'absolute',
    bottom: 8,
    left: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ef6c00',
  },
  annotText: {
    fontSize: 7,
    fontWeight: '600',
    color: '#ef6c00',
    fontStyle: 'italic',
  },
  formulaBar: {
    marginTop: 6,
    backgroundColor: '#1a237e',
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 6,
    transform: [{ perspective: 400 }, { rotateX: '4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default MaxProfitIllustration;
