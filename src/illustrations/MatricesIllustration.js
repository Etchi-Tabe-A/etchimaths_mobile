import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CELL = 38;
const GAP = 2;

function Cell({ value, highlight }) {
  return (
    <View style={[styles.cell, highlight && styles.cellHighlight]}>
      <Text style={[styles.cellText, highlight && styles.cellTextHL]}>
        {value}
      </Text>
    </View>
  );
}

function Bracket({ side }) {
  return (
    <View
      style={[
        styles.bracket,
        side === 'left' ? styles.bracketLeft : styles.bracketRight,
      ]}
    />
  );
}

function Matrix({ data, highlight }) {
  return (
    <View style={styles.matrixWrap}>
      <Bracket side="left" />
      <View>
        {data.map((row, r) => (
          <View key={r} style={styles.row}>
            {row.map((val, c) => (
              <Cell
                key={c}
                value={val}
                highlight={highlight?.[r]?.[c]}
              />
            ))}
          </View>
        ))}
      </View>
      <Bracket side="right" />
    </View>
  );
}

export default function MatricesIllustration() {
  const A = [
    [2, 1],
    [5, 3],
  ];
  const B = [
    [3, -1],
    [-5, 2],
  ];
  const I = [
    [1, 0],
    [0, 1],
  ];

  const hlA = [
    [true, false],
    [false, true],
  ];

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Matrix × Inverse = Identity</Text>

      {/* Equation row */}
      <View style={styles.eqRow}>
        <View style={styles.labelWrap}>
          <Text style={styles.label}>A</Text>
          <Matrix data={A} highlight={hlA} />
        </View>

        <Text style={styles.op}>×</Text>

        <View style={styles.labelWrap}>
          <Text style={styles.label}>A⁻¹</Text>
          <Matrix data={B} />
        </View>

        <Text style={styles.op}>=</Text>

        <View style={styles.labelWrap}>
          <Text style={styles.label}>I</Text>
          <Matrix data={I} />
        </View>
      </View>

      {/* Detail */}
      <Text style={styles.detail}>
        det(A) = (2)(3) − (1)(5) = 1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 10,
    textAlign: 'center',
  },
  eqRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
  },
  labelWrap: {
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#5c6bc0',
    marginBottom: 2,
  },
  matrixWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bracket: {
    width: 4,
    height: CELL * 2 + GAP,
    backgroundColor: '#3949ab',
    borderRadius: 2,
  },
  bracketLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 2,
  },
  bracketRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 2,
  },
  row: {
    flexDirection: 'row',
    gap: GAP,
    marginBottom: GAP,
  },
  cell: {
    width: CELL,
    height: CELL,
    backgroundColor: '#e8eaf6',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellHighlight: {
    backgroundColor: '#c5cae9',
  },
  cellText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#283593',
  },
  cellTextHL: {
    color: '#1a237e',
    fontWeight: '800',
  },
  op: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3949ab',
    marginHorizontal: 2,
  },
  detail: {
    marginTop: 10,
    fontSize: 11,
    color: '#5c6bc0',
    fontStyle: 'italic',
  },
});
