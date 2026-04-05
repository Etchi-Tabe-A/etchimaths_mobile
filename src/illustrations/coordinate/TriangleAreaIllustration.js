import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TriangleAreaIllustration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Triangular Land Plot Area</Text>

      <View style={styles.scene}>
        <View style={styles.ground}>
          {/* Ground texture lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <View key={`gt-${i}`} style={[styles.groundTexture, { top: 10 + i * 28 }]} />
          ))}

          {/* Triangle (land plot) built with edges */}
          {/* Bottom edge */}
          <View style={styles.edgeBottom} />
          {/* Left edge */}
          <View style={styles.edgeLeft} />
          {/* Right edge */}
          <View style={styles.edgeRight} />

          {/* Shaded area (layered rectangles to approximate) */}
          <View style={styles.shadedArea}>
            <View style={styles.shade1} />
            <View style={styles.shade2} />
            <View style={styles.shade3} />
            <View style={styles.shade4} />
            <View style={styles.shade5} />
          </View>

          {/* Vertex A */}
          <View style={[styles.vertex, { top: 14, left: 75 }]}>
            <View style={styles.vertexDot} />
          </View>
          <Text style={[styles.vertexLabel, { top: 2, left: 64 }]}>
            A (x₁,y₁)
          </Text>

          {/* Vertex B */}
          <View style={[styles.vertex, { top: 120, left: 16 }]}>
            <View style={styles.vertexDotB} />
          </View>
          <Text style={[styles.vertexLabel, { top: 130, left: 2 }]}>
            B (x₂,y₂)
          </Text>

          {/* Vertex C */}
          <View style={[styles.vertex, { top: 120, left: 148 }]}>
            <View style={styles.vertexDotC} />
          </View>
          <Text style={[styles.vertexLabel, { top: 130, left: 126 }]}>
            C (x₃,y₃)
          </Text>

          {/* Area label in center */}
          <View style={styles.areaLabel}>
            <Text style={styles.areaText}>Area</Text>
          </View>

          {/* Small trees/markers for land feel */}
          <View style={[styles.tree, { top: 6, left: 10 }]}>
            <View style={styles.treeTrunk} />
            <View style={styles.treeCanopy} />
          </View>
          <View style={[styles.tree, { top: 6, right: 12 }]}>
            <View style={styles.treeTrunk} />
            <View style={styles.treeCanopy} />
          </View>
          <View style={[styles.tree, { bottom: 6, right: 40 }]}>
            <View style={styles.treeTrunk} />
            <View style={styles.treeCanopy} />
          </View>
        </View>

        {/* Ground shadow */}
        <View style={styles.groundShadow} />

        {/* Side measurement */}
        <View style={styles.measure}>
          <View style={styles.measureLine} />
          <Text style={styles.measureText}>Plot</Text>
        </View>
      </View>

      {/* Formula bar */}
      <View style={styles.formulaBar}>
        <Text style={styles.formulaText}>A = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|</Text>
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
    textAlign: 'center',
    marginBottom: 10,
  },
  scene: {
    alignItems: 'center',
    marginBottom: 10,
  },
  ground: {
    width: 180,
    height: 155,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#90caf9',
    position: 'relative',
    transform: [{ perspective: 700 }, { rotateX: '-14deg' }, { rotateY: '6deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    overflow: 'hidden',
  },
  groundTexture: {
    position: 'absolute',
    left: 8,
    right: 8,
    height: 0,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(46,125,50,0.12)',
    borderStyle: 'dashed',
  },
  edgeBottom: {
    position: 'absolute',
    top: 127,
    left: 24,
    width: 132,
    height: 0,
    borderTopWidth: 2.5,
    borderTopColor: '#2E7D32',
    zIndex: 5,
  },
  edgeLeft: {
    position: 'absolute',
    top: 22,
    left: 24,
    width: 120,
    height: 0,
    borderTopWidth: 2.5,
    borderTopColor: '#2E7D32',
    transform: [{ rotate: '60deg' }],
    transformOrigin: 'left',
    zIndex: 5,
  },
  edgeRight: {
    position: 'absolute',
    top: 22,
    left: 83,
    width: 120,
    height: 0,
    borderTopWidth: 2.5,
    borderTopColor: '#2E7D32',
    transform: [{ rotate: '120deg' }],
    transformOrigin: 'left',
    zIndex: 5,
  },
  shadedArea: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 2,
  },
  shade1: {
    width: 100,
    height: 18,
    backgroundColor: 'rgba(46,125,50,0.08)',
    marginLeft: 18,
    marginBottom: -1,
  },
  shade2: {
    width: 110,
    height: 18,
    backgroundColor: 'rgba(46,125,50,0.10)',
    marginLeft: 12,
    marginBottom: -1,
  },
  shade3: {
    width: 118,
    height: 18,
    backgroundColor: 'rgba(46,125,50,0.12)',
    marginLeft: 6,
    marginBottom: -1,
  },
  shade4: {
    width: 124,
    height: 18,
    backgroundColor: 'rgba(46,125,50,0.10)',
    marginLeft: 2,
    marginBottom: -1,
  },
  shade5: {
    width: 128,
    height: 18,
    backgroundColor: 'rgba(46,125,50,0.08)',
    marginLeft: 0,
  },
  vertex: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1565C0',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    shadowColor: '#1565C0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
  vertexDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e3f2fd',
  },
  vertexDotB: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e3f2fd',
  },
  vertexDotC: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e3f2fd',
  },
  vertexLabel: {
    position: 'absolute',
    fontSize: 8,
    fontWeight: '700',
    color: '#1a237e',
    zIndex: 11,
  },
  areaLabel: {
    position: 'absolute',
    top: 72,
    left: 68,
    backgroundColor: 'rgba(46,125,50,0.85)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    zIndex: 12,
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  areaText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#fff',
  },
  tree: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 1,
  },
  treeTrunk: {
    width: 3,
    height: 8,
    backgroundColor: '#8d6e63',
    borderRadius: 1,
  },
  treeCanopy: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2E7D32',
    marginTop: -3,
    opacity: 0.5,
  },
  groundShadow: {
    width: 160,
    height: 12,
    borderRadius: 80,
    backgroundColor: 'rgba(21,101,192,0.08)',
    marginTop: 4,
  },
  measure: {
    position: 'absolute',
    right: -30,
    top: 40,
    alignItems: 'center',
  },
  measureLine: {
    width: 2,
    height: 40,
    backgroundColor: '#90caf9',
    borderRadius: 1,
  },
  measureText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#5c6bc0',
    marginTop: 2,
  },
  formulaBar: {
    backgroundColor: '#1a237e',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 12,
    transform: [{ perspective: 600 }, { rotateX: '4deg' }],
    shadowColor: '#1a237e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  formulaText: {
    color: '#e3f2fd',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default TriangleAreaIllustration;
