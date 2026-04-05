import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PackagingIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Optimal Packaging Design (Box)</Text>

      <View style={styles.scene}>
        {/* 3D Open Box */}
        <View style={styles.boxGroup}>
          {/* Box base */}
          <View style={styles.boxBase}>
            <View style={styles.boxBaseInner} />
          </View>

          {/* Box back wall */}
          <View style={styles.boxBack} />

          {/* Box left wall */}
          <View style={styles.boxLeft} />

          {/* Box right wall */}
          <View style={styles.boxRight} />

          {/* Box front wall (shorter, open look) */}
          <View style={styles.boxFront} />

          {/* Flaps */}
          <View style={styles.flapBack}>
            <View style={styles.flapDash} />
          </View>
          <View style={styles.flapLeft}>
            <View style={styles.flapDash} />
          </View>
          <View style={styles.flapRight}>
            <View style={styles.flapDash} />
          </View>
          <View style={styles.flapFront}>
            <View style={styles.flapDash} />
          </View>

          {/* Dimension labels */}
          <View style={styles.dimXLine} />
          <Text style={styles.dimX}>x</Text>

          <View style={styles.dimYLine} />
          <Text style={styles.dimY}>y</Text>

          <View style={styles.dimHLine} />
          <Text style={styles.dimH}>x</Text>
        </View>

        {/* Volume curve */}
        <View style={styles.graphArea}>
          <View style={styles.graphBg} />
          <Text style={styles.graphTitle}>V(x)</Text>

          {/* Axes */}
          <View style={styles.xAxis} />
          <View style={styles.yAxis} />
          <Text style={styles.axisLabelX}>x</Text>
          <Text style={styles.axisLabelY}>V</Text>

          {/* Volume curve (rises then falls) */}
          <View style={[styles.vBar, { left: 10, height: 6, bottom: 6 }]} />
          <View style={[styles.vBar, { left: 18, height: 16, bottom: 6 }]} />
          <View style={[styles.vBar, { left: 26, height: 28, bottom: 6 }]} />
          <View style={[styles.vBar, { left: 34, height: 38, bottom: 6 }]} />
          <View style={[styles.vBarPeak, { left: 42, height: 44, bottom: 6 }]} />
          <View style={[styles.vBar, { left: 50, height: 38, bottom: 6 }]} />
          <View style={[styles.vBar, { left: 58, height: 28, bottom: 6 }]} />
          <View style={[styles.vBar, { left: 66, height: 16, bottom: 6 }]} />
          <View style={[styles.vBar, { left: 74, height: 6, bottom: 6 }]} />

          {/* Max point dot */}
          <View style={styles.maxDot} />

          {/* Tangent horizontal at max */}
          <View style={styles.tangentLine} />

          {/* dV/dx=0 label */}
          <View style={styles.dvLabel}>
            <Text style={styles.dvText}>dV/dx = 0</Text>
          </View>
        </View>

        {/* Sheet metal flat pattern hint */}
        <View style={styles.sheetMetal}>
          <View style={styles.sheetCenter} />
          <View style={styles.cornerCut1} />
          <View style={styles.cornerCut2} />
          <View style={styles.cornerCut3} />
          <View style={styles.cornerCut4} />
          <Text style={styles.sheetLabel}>cut x</Text>
        </View>

        {/* Arrow from sheet to box */}
        <View style={styles.foldArrow} />
        <View style={styles.foldArrowHead} />
        <Text style={styles.foldText}>fold</Text>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>dV/dx = 0</Text>
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
    height: 190,
    position: 'relative',
    perspective: 800,
  },
  boxGroup: {
    position: 'absolute',
    top: 12,
    left: 10,
    width: 100,
    height: 100,
    transform: [{ perspective: 600 }, { rotateY: '-20deg' }, { rotateX: '15deg' }],
  },
  boxBase: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    width: 65,
    height: 45,
    backgroundColor: '#5c6bc0',
    borderRadius: 2,
    transform: [{ rotateX: '60deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  boxBaseInner: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    backgroundColor: '#7986cb',
    borderRadius: 1,
  },
  boxBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 65,
    height: 40,
    backgroundColor: '#3949ab',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  boxLeft: {
    position: 'absolute',
    top: 14,
    left: 0,
    width: 14,
    height: 36,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  boxRight: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 14,
    height: 36,
    backgroundColor: '#5c6bc0',
    borderTopRightRadius: 2,
  },
  boxFront: {
    position: 'absolute',
    bottom: 14,
    left: 10,
    width: 65,
    height: 20,
    backgroundColor: '#7986cb',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    opacity: 0.7,
  },
  flapBack: {
    position: 'absolute',
    top: 2,
    left: 20,
    width: 45,
    height: 10,
    backgroundColor: '#3949ab',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    opacity: 0.6,
    transform: [{ rotateX: '-30deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  flapLeft: {
    position: 'absolute',
    top: 20,
    left: -8,
    width: 10,
    height: 26,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    opacity: 0.5,
    transform: [{ rotateY: '30deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  flapRight: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 10,
    height: 26,
    backgroundColor: '#5c6bc0',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    opacity: 0.5,
    transform: [{ rotateY: '-30deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  flapFront: {
    position: 'absolute',
    bottom: 4,
    left: 20,
    width: 45,
    height: 10,
    backgroundColor: '#7986cb',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    opacity: 0.5,
    transform: [{ rotateX: '30deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  flapDash: {
    width: '60%',
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  dimXLine: {
    position: 'absolute',
    bottom: -6,
    left: 10,
    width: 65,
    height: 2,
    backgroundColor: '#ef6c00',
  },
  dimX: {
    position: 'absolute',
    bottom: -16,
    left: 36,
    fontSize: 10,
    fontWeight: '800',
    color: '#ef6c00',
    fontStyle: 'italic',
  },
  dimYLine: {
    position: 'absolute',
    top: 10,
    right: 8,
    width: 2,
    height: 40,
    backgroundColor: '#ef6c00',
  },
  dimY: {
    position: 'absolute',
    top: 24,
    right: -2,
    fontSize: 10,
    fontWeight: '800',
    color: '#ef6c00',
    fontStyle: 'italic',
  },
  dimHLine: {
    position: 'absolute',
    top: 12,
    left: -8,
    width: 2,
    height: 38,
    backgroundColor: '#C62828',
  },
  dimH: {
    position: 'absolute',
    top: 26,
    left: -18,
    fontSize: 10,
    fontWeight: '800',
    color: '#C62828',
    fontStyle: 'italic',
  },
  graphArea: {
    position: 'absolute',
    top: 10,
    right: 6,
    width: 100,
    height: 80,
    transform: [{ perspective: 600 }, { rotateY: '8deg' }, { rotateX: '4deg' }],
  },
  graphBg: {
    position: 'absolute',
    width: 100,
    height: 80,
    backgroundColor: '#e3f2fd',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  graphTitle: {
    position: 'absolute',
    top: 2,
    left: 6,
    fontSize: 7,
    fontWeight: '700',
    color: '#1565C0',
  },
  xAxis: {
    position: 'absolute',
    bottom: 6,
    left: 10,
    width: 82,
    height: 1.5,
    backgroundColor: '#1a237e',
  },
  yAxis: {
    position: 'absolute',
    bottom: 6,
    left: 10,
    width: 1.5,
    height: 66,
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
    left: 2,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '700',
  },
  vBar: {
    position: 'absolute',
    width: 5,
    backgroundColor: '#1565C0',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    opacity: 0.65,
  },
  vBarPeak: {
    position: 'absolute',
    width: 5,
    backgroundColor: '#ef6c00',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    opacity: 0.9,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  maxDot: {
    position: 'absolute',
    top: 24,
    left: 42,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  tangentLine: {
    position: 'absolute',
    top: 26,
    left: 28,
    width: 36,
    height: 2,
    backgroundColor: '#C62828',
  },
  dvLabel: {
    position: 'absolute',
    top: 14,
    right: 4,
    backgroundColor: '#C62828',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
  },
  dvText: {
    fontSize: 6,
    fontWeight: '700',
    color: '#fff',
  },
  sheetMetal: {
    position: 'absolute',
    bottom: 12,
    left: 14,
    width: 60,
    height: 50,
    transform: [{ perspective: 500 }, { rotateX: '10deg' }, { rotateY: '-10deg' }],
  },
  sheetCenter: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 44,
    height: 34,
    backgroundColor: '#90caf9',
    borderWidth: 1,
    borderColor: '#1565C0',
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  cornerCut1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: 10,
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#ef6c00',
    borderRadius: 1,
  },
  cornerCut2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#ef6c00',
    borderRadius: 1,
  },
  cornerCut3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 10,
    height: 10,
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#ef6c00',
    borderRadius: 1,
  },
  cornerCut4: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#ef6c00',
    borderRadius: 1,
  },
  sheetLabel: {
    position: 'absolute',
    top: -2,
    right: -18,
    fontSize: 7,
    fontWeight: '700',
    color: '#ef6c00',
    fontStyle: 'italic',
  },
  foldArrow: {
    position: 'absolute',
    bottom: 50,
    left: 80,
    width: 20,
    height: 2,
    backgroundColor: '#3949ab',
    transform: [{ rotate: '-40deg' }],
  },
  foldArrowHead: {
    position: 'absolute',
    bottom: 58,
    left: 82,
    width: 0,
    height: 0,
    borderBottomWidth: 6,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomColor: '#3949ab',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '-40deg' }],
  },
  foldText: {
    position: 'absolute',
    bottom: 46,
    left: 100,
    fontSize: 7,
    color: '#3949ab',
    fontWeight: '600',
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

export default PackagingIllustration;
