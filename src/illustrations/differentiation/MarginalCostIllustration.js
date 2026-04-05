import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarginalCostIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marginal Cost in Manufacturing</Text>

      <View style={styles.scene}>
        {/* Factory Building */}
        <View style={styles.factory}>
          <View style={styles.factoryRoof} />
          <View style={styles.factoryBody}>
            <View style={styles.factoryWindow} />
            <View style={styles.factoryWindow} />
            <View style={styles.factoryDoor} />
          </View>
          <View style={styles.chimney}>
            <View style={styles.smoke1} />
            <View style={styles.smoke2} />
          </View>
        </View>

        {/* Conveyor Belt */}
        <View style={styles.conveyorBelt}>
          <View style={styles.beltSurface} />
          <View style={styles.beltLeg} />
          <View style={styles.beltLegRight} />
          {/* Products on belt */}
          <View style={[styles.product, { left: 8 }]} />
          <View style={[styles.product, { left: 30 }]} />
          <View style={[styles.product, { left: 52 }]} />
          <View style={[styles.product, { left: 74 }]} />
        </View>

        {/* Cost Curve Area */}
        <View style={styles.graphArea}>
          <View style={styles.graphBg} />
          {/* Axes */}
          <View style={styles.xAxis} />
          <View style={styles.yAxis} />
          <Text style={styles.axisLabelX}>x (units)</Text>
          <Text style={styles.axisLabelY}>C</Text>

          {/* Cost Curve (rising blocks) */}
          <View style={[styles.curveBar, { left: 12, height: 10, bottom: 2 }]} />
          <View style={[styles.curveBar, { left: 22, height: 16, bottom: 2 }]} />
          <View style={[styles.curveBar, { left: 32, height: 24, bottom: 2 }]} />
          <View style={[styles.curveBar, { left: 42, height: 30, bottom: 2 }]} />
          <View style={[styles.curveBar, { left: 52, height: 38, bottom: 2 }]} />
          <View style={[styles.curveBar, { left: 62, height: 48, bottom: 2 }]} />
          <View style={[styles.curveBar, { left: 72, height: 60, bottom: 2 }]} />

          {/* Tangent Line at point */}
          <View style={styles.tangentLine} />
          <View style={styles.tangentDot} />

          {/* MC Label */}
          <View style={styles.mcLabel}>
            <Text style={styles.mcText}>MC</Text>
          </View>
        </View>

        {/* Arrow from factory to graph */}
        <View style={styles.arrowLine} />
        <View style={styles.arrowHead} />

        {/* dC/dx annotation */}
        <View style={styles.annotation}>
          <Text style={styles.annotationText}>slope = dC/dx</Text>
        </View>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>MC = dC/dx</Text>
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
  factory: {
    position: 'absolute',
    top: 6,
    left: 10,
    width: 80,
    height: 70,
    transform: [{ perspective: 600 }, { rotateY: '-12deg' }, { rotateX: '5deg' }],
  },
  factoryRoof: {
    width: 80,
    height: 14,
    backgroundColor: '#3949ab',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  factoryBody: {
    width: 80,
    height: 50,
    backgroundColor: '#5c6bc0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  factoryWindow: {
    width: 14,
    height: 12,
    backgroundColor: '#e3f2fd',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#1a237e',
  },
  factoryDoor: {
    width: 16,
    height: 20,
    backgroundColor: '#1a237e',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: 2,
  },
  chimney: {
    position: 'absolute',
    top: -12,
    right: 12,
    width: 12,
    height: 18,
    backgroundColor: '#3949ab',
    borderRadius: 2,
  },
  smoke1: {
    position: 'absolute',
    top: -8,
    left: 1,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#cfd8dc',
    opacity: 0.6,
  },
  smoke2: {
    position: 'absolute',
    top: -16,
    left: -3,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#cfd8dc',
    opacity: 0.4,
  },
  conveyorBelt: {
    position: 'absolute',
    top: 82,
    left: 5,
    width: 100,
    height: 28,
    transform: [{ perspective: 500 }, { rotateX: '-15deg' }, { rotateY: '-8deg' }],
  },
  beltSurface: {
    width: 100,
    height: 8,
    backgroundColor: '#90a4ae',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  beltLeg: {
    position: 'absolute',
    left: 8,
    top: 8,
    width: 4,
    height: 18,
    backgroundColor: '#607d8b',
  },
  beltLegRight: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 4,
    height: 18,
    backgroundColor: '#607d8b',
  },
  product: {
    position: 'absolute',
    top: -8,
    width: 12,
    height: 10,
    backgroundColor: '#ef6c00',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  graphArea: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 130,
    height: 100,
    transform: [{ perspective: 700 }, { rotateY: '8deg' }, { rotateX: '3deg' }],
  },
  graphBg: {
    position: 'absolute',
    width: 130,
    height: 100,
    backgroundColor: '#e3f2fd',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#90caf9',
    shadowColor: '#1a237e',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  xAxis: {
    position: 'absolute',
    bottom: 10,
    left: 18,
    width: 100,
    height: 2,
    backgroundColor: '#1a237e',
  },
  yAxis: {
    position: 'absolute',
    bottom: 10,
    left: 18,
    width: 2,
    height: 80,
    backgroundColor: '#1a237e',
  },
  axisLabelX: {
    position: 'absolute',
    bottom: 2,
    right: 8,
    fontSize: 7,
    color: '#1a237e',
    fontWeight: '600',
  },
  axisLabelY: {
    position: 'absolute',
    top: 4,
    left: 8,
    fontSize: 8,
    color: '#1a237e',
    fontWeight: '700',
  },
  curveBar: {
    position: 'absolute',
    width: 6,
    backgroundColor: '#1565C0',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    opacity: 0.7,
  },
  tangentLine: {
    position: 'absolute',
    bottom: 40,
    left: 38,
    width: 50,
    height: 2,
    backgroundColor: '#C62828',
    transform: [{ rotate: '-35deg' }],
  },
  tangentDot: {
    position: 'absolute',
    bottom: 34,
    left: 50,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#C62828',
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 3,
  },
  mcLabel: {
    position: 'absolute',
    top: 30,
    right: 10,
    backgroundColor: '#C62828',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  mcText: {
    fontSize: 8,
    color: '#fff',
    fontWeight: '700',
  },
  arrowLine: {
    position: 'absolute',
    top: 55,
    left: 95,
    width: 30,
    height: 2,
    backgroundColor: '#ef6c00',
  },
  arrowHead: {
    position: 'absolute',
    top: 51,
    left: 122,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftColor: '#ef6c00',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  annotation: {
    position: 'absolute',
    bottom: 18,
    right: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#C62828',
  },
  annotationText: {
    fontSize: 8,
    color: '#C62828',
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

export default MarginalCostIllustration;
