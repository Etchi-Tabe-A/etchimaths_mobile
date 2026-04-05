import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConsumerSurplusIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumer Surplus in Economics</Text>

      <View style={styles.scene}>
        {/* 3D Graph base */}
        <View style={styles.graphGroup}>
          {/* Graph background */}
          <View style={styles.graphBg}>
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={`gh${i}`}
                style={[styles.graphGridH, { top: 12 + i * 28 }]}
              />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <View
                key={`gv${i}`}
                style={[styles.graphGridV, { left: 10 + i * 28 }]}
              />
            ))}

            {/* Surplus shaded region (stacked bars to approximate area) */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <View
                key={`sr${i}`}
                style={[
                  styles.surplusBar,
                  {
                    left: 14 + i * 18,
                    height: 60 - i * 10,
                    bottom: 46,
                  },
                ]}
              />
            ))}

            {/* Demand curve (descending segments) */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <View
                key={`dc${i}`}
                style={[
                  styles.demandSeg,
                  {
                    left: 6 + i * 20,
                    top: 8 + i * 14,
                    width: 22,
                    transform: [{ rotateZ: `${32 + i * 2}deg` }],
                  },
                ]}
              />
            ))}

            {/* Supply curve (ascending segments) */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <View
                key={`sc${i}`}
                style={[
                  styles.supplySeg,
                  {
                    left: 6 + i * 20,
                    bottom: 12 + i * 14,
                    width: 22,
                    transform: [{ rotateZ: `${-32 + i * 2}deg` }],
                  },
                ]}
              />
            ))}

            {/* Equilibrium price line */}
            <View style={styles.priceLine} />
            <View style={styles.priceLabel}>
              <Text style={styles.priceLabelText}>p₀</Text>
            </View>

            {/* Equilibrium point dot */}
            <View style={styles.eqDot} />
            <View style={styles.eqRing} />

            {/* CS label */}
            <View style={styles.csLabel}>
              <Text style={styles.csLabelText}>CS</Text>
            </View>
          </View>

          {/* 3D depth side */}
          <View style={styles.graphSideRight} />
          <View style={styles.graphSideBottom} />

          {/* Axis labels */}
          <Text style={styles.priceAxisLabel}>Price</Text>
          <Text style={styles.qtyAxisLabel}>Quantity</Text>
        </View>

        {/* Demand / Supply labels */}
        <View style={styles.demandLabelWrap}>
          <Text style={styles.demandLabel}>D(q)</Text>
        </View>
        <View style={styles.supplyLabelWrap}>
          <Text style={styles.supplyLabel}>S(q)</Text>
        </View>

        {/* Dollar signs for economic context */}
        <Text style={styles.dollarSign1}>$</Text>
        <Text style={styles.dollarSign2}>$</Text>
      </View>

      {/* Formula Bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>CS = ∫(D(q) − p₀) dq</Text>
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
    width: 160,
    height: 140,
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
  graphGridH: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 0.6,
    backgroundColor: '#90caf9',
  },
  graphGridV: {
    position: 'absolute',
    top: 0,
    width: 0.6,
    height: '100%',
    backgroundColor: '#90caf9',
  },
  surplusBar: {
    position: 'absolute',
    width: 16,
    backgroundColor: '#2E7D32',
    opacity: 0.3,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  demandSeg: {
    position: 'absolute',
    height: 2.5,
    backgroundColor: '#1565C0',
    borderRadius: 1,
  },
  supplySeg: {
    position: 'absolute',
    height: 2.5,
    backgroundColor: '#C62828',
    borderRadius: 1,
  },
  priceLine: {
    position: 'absolute',
    left: 0,
    bottom: 46,
    width: '100%',
    height: 1.5,
    backgroundColor: '#ef6c00',
  },
  priceLabel: {
    position: 'absolute',
    left: -20,
    bottom: 40,
    backgroundColor: '#ef6c00',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
  },
  priceLabelText: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
  },
  eqDot: {
    position: 'absolute',
    left: 104,
    bottom: 42,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef6c00',
    zIndex: 3,
  },
  eqRing: {
    position: 'absolute',
    left: 100,
    bottom: 38,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#ef6c00',
    zIndex: 2,
  },
  csLabel: {
    position: 'absolute',
    left: 42,
    bottom: 62,
    backgroundColor: '#2E7D32',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 4,
  },
  csLabelText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',
  },
  graphSideRight: {
    position: 'absolute',
    right: -6,
    top: 4,
    width: 6,
    height: 140,
    backgroundColor: '#90caf9',
    borderRightWidth: 1,
    borderColor: '#5c6bc0',
    transform: [{ skewY: '-10deg' }],
  },
  graphSideBottom: {
    position: 'absolute',
    bottom: -5,
    left: 4,
    width: 160,
    height: 5,
    backgroundColor: '#90caf9',
    borderBottomWidth: 1,
    borderColor: '#5c6bc0',
    transform: [{ skewX: '10deg' }],
  },
  priceAxisLabel: {
    position: 'absolute',
    left: -14,
    top: 50,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
    transform: [{ rotateZ: '-90deg' }],
  },
  qtyAxisLabel: {
    position: 'absolute',
    bottom: -14,
    fontSize: 9,
    color: '#1a237e',
    fontWeight: '600',
  },
  demandLabelWrap: {
    position: 'absolute',
    top: 18,
    right: 14,
    backgroundColor: '#1565C0',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  demandLabel: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
  },
  supplyLabelWrap: {
    position: 'absolute',
    bottom: 22,
    right: 14,
    backgroundColor: '#C62828',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  supplyLabel: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
  },
  dollarSign1: {
    position: 'absolute',
    top: 8,
    left: 12,
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '700',
    opacity: 0.2,
  },
  dollarSign2: {
    position: 'absolute',
    top: 20,
    left: 26,
    fontSize: 10,
    color: '#2E7D32',
    fontWeight: '700',
    opacity: 0.15,
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
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default ConsumerSurplusIllustration;
