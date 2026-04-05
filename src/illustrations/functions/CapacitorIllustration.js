import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CapacitorIllustration = () => {
  // Charging curve: starts 0, approaches Vmax asymptotically
  const chargePoints = [
    { x: 0, y: 0 },
    { x: 1, y: 32 },
    { x: 2, y: 52 },
    { x: 3, y: 65 },
    { x: 4, y: 74 },
    { x: 5, y: 80 },
    { x: 6, y: 85 },
    { x: 7, y: 88 },
    { x: 8, y: 91 },
    { x: 9, y: 93 },
    { x: 10, y: 94 },
  ];

  const graphWidth = 210;
  const graphHeight = 120;
  const maxX = 10;
  const maxY = 105;
  const vmaxY = 96;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capacitor Charging in an RC Circuit</Text>

      <View style={styles.scene}>
        {/* 3D Capacitor */}
        <View style={styles.capacitorSection}>
          <View style={styles.capacitor3D}>
            {/* Left plate */}
            <View style={styles.plateLeft}>
              <View style={styles.plateLeftTop} />
              <View style={styles.plateLeftFront} />
            </View>

            {/* Gap with electric field lines */}
            <View style={styles.gap}>
              <View style={styles.fieldLine1} />
              <View style={styles.fieldLine2} />
              <View style={styles.fieldLine3} />
              {/* Charge symbols */}
              <Text style={styles.chargePlus}>+</Text>
              <Text style={styles.chargeMinus}>−</Text>
            </View>

            {/* Right plate */}
            <View style={styles.plateRight}>
              <View style={styles.plateRightTop} />
              <View style={styles.plateRightFront} />
            </View>
          </View>

          {/* Wire connections */}
          <View style={styles.wireLeft} />
          <View style={styles.wireRight} />

          {/* Circuit labels */}
          <View style={styles.circuitLabels}>
            <View style={styles.labelBadgeR}>
              <Text style={styles.labelText}>R</Text>
            </View>
            <View style={styles.labelBadgeC}>
              <Text style={styles.labelText}>C</Text>
            </View>
            <View style={styles.labelBadgeV}>
              <Text style={styles.labelText}>V₀</Text>
            </View>
          </View>
        </View>

        {/* Charging curve graph */}
        <View style={styles.graphContainer}>
          <View style={styles.graph3D}>
            {/* Vmax asymptote */}
            <View
              style={[
                styles.vmaxLine,
                { bottom: (vmaxY / maxY) * graphHeight },
              ]}
            >
              <Text style={styles.vmaxLabel}>V₀</Text>
            </View>

            {/* Time constant marker (τ = RC) */}
            <View style={styles.tauLine} />
            <Text style={styles.tauLabel}>τ=RC</Text>
            <View style={styles.tauDot} />

            {/* 63.2% marker */}
            <Text style={styles.percentLabel}>63.2%</Text>

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
            {chargePoints.map((pt, i) => (
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
            {chargePoints.slice(0, -1).map((pt, i) => {
              const next = chargePoints[i + 1];
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
            <Text style={styles.yAxisLabel}>V(t)</Text>
            <Text style={styles.xAxisLabel}>t</Text>
          </View>
        </View>

        {/* RC info badges */}
        <View style={styles.infoRow}>
          <View style={styles.infoBadge}>
            <Text style={styles.infoText}>Charging</Text>
          </View>
          <View style={styles.infoBadgeTau}>
            <Text style={styles.infoText}>τ = RC</Text>
          </View>
          <View style={styles.infoBadgeMax}>
            <Text style={styles.infoText}>→ V₀</Text>
          </View>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>V(t) = V₀(1 − e⁻ᵗ/ᴿᶜ)</Text>
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
  capacitorSection: {
    alignItems: 'center',
    marginBottom: 14,
    position: 'relative',
    perspective: 800,
  },
  capacitor3D: {
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotateX: '10deg' }, { rotateY: '-12deg' }],
  },
  plateLeft: {
    position: 'relative',
    width: 18,
    height: 60,
  },
  plateLeftFront: {
    width: 18,
    height: 60,
    backgroundColor: '#1565C0',
    borderRadius: 3,
    shadowColor: '#1565C0',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  plateLeftTop: {
    position: 'absolute',
    top: -6,
    left: 3,
    width: 16,
    height: 8,
    backgroundColor: '#42a5f5',
    borderRadius: 2,
    transform: [{ skewX: '-20deg' }],
  },
  plateRight: {
    position: 'relative',
    width: 18,
    height: 60,
  },
  plateRightFront: {
    width: 18,
    height: 60,
    backgroundColor: '#1565C0',
    borderRadius: 3,
    shadowColor: '#1565C0',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  plateRightTop: {
    position: 'absolute',
    top: -6,
    left: 3,
    width: 16,
    height: 8,
    backgroundColor: '#42a5f5',
    borderRadius: 2,
    transform: [{ skewX: '-20deg' }],
  },
  gap: {
    width: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  fieldLine1: {
    position: 'absolute',
    top: 10,
    width: 22,
    height: 2,
    backgroundColor: '#ef6c00',
    opacity: 0.5,
    borderRadius: 1,
  },
  fieldLine2: {
    position: 'absolute',
    top: 28,
    width: 24,
    height: 2,
    backgroundColor: '#ef6c00',
    opacity: 0.7,
    borderRadius: 1,
  },
  fieldLine3: {
    position: 'absolute',
    top: 46,
    width: 22,
    height: 2,
    backgroundColor: '#ef6c00',
    opacity: 0.5,
    borderRadius: 1,
  },
  chargePlus: {
    position: 'absolute',
    left: -2,
    top: 18,
    fontSize: 14,
    color: '#C62828',
    fontWeight: '900',
  },
  chargeMinus: {
    position: 'absolute',
    right: -2,
    top: 18,
    fontSize: 16,
    color: '#1565C0',
    fontWeight: '900',
  },
  wireLeft: {
    position: 'absolute',
    left: 30,
    top: 42,
    width: 30,
    height: 3,
    backgroundColor: '#616161',
    borderRadius: 1,
  },
  wireRight: {
    position: 'absolute',
    right: 30,
    top: 42,
    width: 30,
    height: 3,
    backgroundColor: '#616161',
    borderRadius: 1,
  },
  circuitLabels: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  labelBadgeR: {
    backgroundColor: '#ef6c00',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    shadowColor: '#ef6c00',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  labelBadgeC: {
    backgroundColor: '#1565C0',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    shadowColor: '#1565C0',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  labelBadgeV: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    shadowColor: '#2E7D32',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  labelText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '700',
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
  vmaxLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#C62828',
    opacity: 0.5,
  },
  vmaxLabel: {
    position: 'absolute',
    right: 4,
    top: -14,
    fontSize: 10,
    fontWeight: '700',
    color: '#C62828',
  },
  tauLine: {
    position: 'absolute',
    left: 44,
    top: 0,
    width: 2,
    height: '100%',
    backgroundColor: '#ef6c00',
    opacity: 0.4,
  },
  tauLabel: {
    position: 'absolute',
    left: 34,
    bottom: 2,
    fontSize: 9,
    fontWeight: '700',
    color: '#ef6c00',
  },
  tauDot: {
    position: 'absolute',
    left: 40,
    bottom: 50,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ef6c00',
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 10,
  },
  percentLabel: {
    position: 'absolute',
    left: 54,
    bottom: 46,
    fontSize: 8,
    fontWeight: '700',
    color: '#ef6c00',
    zIndex: 10,
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
    backgroundColor: '#1565C0',
    zIndex: 5,
  },
  curveSegment: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#1565C0',
    borderRadius: 1.5,
    zIndex: 4,
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
  infoRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 8,
  },
  infoBadge: {
    backgroundColor: '#1565C0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  infoBadgeTau: {
    backgroundColor: '#ef6c00',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  infoBadgeMax: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '700',
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

export default CapacitorIllustration;
