// Helper math functions
const rad = (d) => (d * Math.PI) / 180;
const deg = (r) => (r * 180) / Math.PI;
const sq = (x) => Math.sqrt(x);
const abs = (x) => Math.abs(x);
const ln = (x) => Math.log(x);
const log10 = (x) => Math.log10(x);
const exp = (x) => Math.exp(x);

function comb(n, k) {
  n = Math.round(n);
  k = Math.round(k);
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  k = Math.min(k, n - k);
  let c = 1;
  for (let i = 0; i < k; i++) c = (c * (n - i)) / (i + 1);
  return Math.round(c);
}

function erf(x) {
  const t = 1 / (1 + 0.5 * abs(x));
  const tau =
    t *
    exp(
      -x * x -
        1.26551223 +
        t *
          (1.00002368 +
            t *
              (0.37409196 +
                t *
                  (0.09678418 +
                    t *
                      (-0.18628806 +
                        t *
                          (0.27886807 +
                            t *
                              (-1.13520398 +
                                t * (1.48851587 + t * (-0.82215223 + t * 0.17087294))))))))
    );
  return x >= 0 ? 1 - tau : tau - 1;
}

const fmt = (n, d = 4) => {
  if (!isFinite(n)) return 'N/A';
  return Number(n.toFixed(d)).toString();
};
const fmtE = (n) => n.toExponential(2);
const money = (n) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// ─────────────────────────────────────────────────────────────────────────────
//  ALL APPLICATIONS  (14 topics × 5 apps)
// ─────────────────────────────────────────────────────────────────────────────
const applications = {

  // ── MATRICES ───────────────────────────────────────────────────────────────
  Matrices: {
    icon: '🔢',
    apps: [
      {
        title: 'Economic Production Planning (Leontief Model)',
        illustration: 'MatricesLeontief',
        desc: 'An Economics student is modelling a 2-sector economy. Given the technology matrix A and final demand vector D, they compute total production X = (I − A)⁻¹ · D needed to meet demand.',
        inputs: [
          ['a₁₁ (sector 1→1)', '0.2'], ['a₁₂ (sector 2→1)', '0.3'],
          ['a₂₁ (sector 1→2)', '0.4'], ['a₂₂ (sector 2→2)', '0.1'],
          ['Demand d₁', '50'], ['Demand d₂', '30'],
        ],
        compute(v) {
          const [a11, a12, a21, a22, d1, d2] = v.map(Number);
          const det = (1 - a11) * (1 - a22) - a12 * a21;
          if (abs(det) < 1e-12) return [['Error', 'Singular matrix — no solution']];
          return [
            ['Production X₁', fmt(((1 - a22) * d1 + a12 * d2) / det)],
            ['Production X₂', fmt((a21 * d1 + (1 - a11) * d2) / det)],
            ['det(I−A)', fmt(det, 6)],
          ];
        },
      },
      {
        title: '2D Image Rotation in Computer Graphics',
        illustration: 'MatricesRotation',
        desc: 'A Game Developer rotates a sprite position (x, y) by θ° using the 2D rotation matrix R(θ).',
        inputs: [['x coordinate', '3'], ['y coordinate', '4'], ['Angle θ (degrees)', '45']],
        compute(v) {
          const [x, y, t] = v.map(Number);
          const tr = rad(t);
          return [
            ['Rotated x′', fmt(x * Math.cos(tr) - y * Math.sin(tr))],
            ['Rotated y′', fmt(x * Math.sin(tr) + y * Math.cos(tr))],
            ['Distance from origin (unchanged)', fmt(sq(x ** 2 + y ** 2))],
          ];
        },
      },
      {
        title: "Solving Simultaneous Equations (Cramer's Rule)",
        illustration: 'MatricesCramer',
        desc: 'A Physics student finds two unknown forces F₁ and F₂ from equilibrium equations using Cramer\'s Rule.',
        inputs: [
          ['a (coeff of F₁, eq1)', '3'], ['b (coeff of F₂, eq1)', '2'],
          ['e (RHS eq1)', '18'], ['c (coeff of F₁, eq2)', '1'],
          ['d (coeff of F₂, eq2)', '4'], ['f (RHS eq2)', '16'],
        ],
        compute(v) {
          const [a, b, e, c, d, f] = v.map(Number);
          const det = a * d - b * c;
          if (abs(det) < 1e-12) return [['Error', 'Determinant is zero — no unique solution']];
          const F1 = (e * d - b * f) / det;
          const F2 = (a * f - e * c) / det;
          return [
            ['F₁', fmt(F1)],
            ['F₂', fmt(F2)],
            ['Determinant', fmt(det, 6)],
            ['Check eq1', `${fmt(a * F1 + b * F2)} (should = ${e})`],
            ['Check eq2', `${fmt(c * F1 + d * F2)} (should = ${f})`],
          ];
        },
      },
      {
        title: 'Population Migration Model (Markov Chain)',
        illustration: 'MatricesMarkov',
        desc: 'An Urban Planner predicts next year\'s population distribution between City and Suburbs.',
        inputs: [
          ['City population (thousands)', '600'], ['Suburb population (thousands)', '400'],
          ['City→City retention rate', '0.85'], ['Suburb→City migration rate', '0.10'],
        ],
        compute(v) {
          const [Pc, Ps, cc, sc] = v.map(Number);
          const cs = 1 - cc, ss = 1 - sc;
          return [
            ['City next year', `${fmt(Pc * cc + Ps * sc, 1)} thousand`],
            ['Suburbs next year', `${fmt(Pc * cs + Ps * ss, 1)} thousand`],
            ['Net city change', `${fmt(Pc * cc + Ps * sc - Pc, 1) > 0 ? '+' : ''}${fmt(Pc * cc + Ps * sc - Pc, 1)} thousand`],
            ['Total population', `${fmt(Pc + Ps, 1)} thousand (conserved)`],
          ];
        },
      },
      {
        title: 'Scaling and Reflection Transformation',
        illustration: 'MatricesScaling',
        desc: 'A Graphic Designer transforms an anchor point by scaling and optional x-axis reflection.',
        inputs: [
          ['x coordinate', '5'], ['y coordinate', '3'],
          ['Horizontal scale sₓ', '2'], ['Vertical scale sᵧ', '1.5'],
          ['Reflect x-axis? (1=yes, 0=no)', '0'],
        ],
        compute(v) {
          const [x, y, sx, sy, ref] = v.map(Number);
          const ny = sy * y * (ref >= 0.5 ? -1 : 1);
          return [
            ["Transformed x′", fmt(sx * x)],
            ["Transformed y′", fmt(ny)],
            ['Original distance from origin', fmt(sq(x ** 2 + y ** 2))],
            ['New distance from origin', fmt(sq((sx * x) ** 2 + ny ** 2))],
            ['Area scale factor', fmt(abs(sx * sy))],
          ];
        },
      },
    ],
  },

  // ── VECTORS ────────────────────────────────────────────────────────────────
  Vectors: {
    icon: '➡️',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vector_add_scale.svg?width=400' },
    apps: [
      {
        title: 'Bridge Cable Force Resolution',
        desc: 'A Civil Engineer resolves cable tension F (N) at angle θ° into horizontal and vertical components.',
        inputs: [['Force F (N)', '500'], ['Angle θ (degrees)', '30']],
        compute(v) {
          const [F, t] = v.map(Number);
          const tr = rad(t);
          return [
            ['Horizontal Fₓ', `${fmt(F * Math.cos(tr))} N`],
            ['Vertical Fᵧ', `${fmt(F * Math.sin(tr))} N`],
            ['Magnitude check |F|', `${fmt(sq((F * Math.cos(tr)) ** 2 + (F * Math.sin(tr)) ** 2))} N`],
          ];
        },
      },
      {
        title: '3D Work Done on a Crate',
        desc: 'A Warehouse Operator computes work done W = F · d (dot product) pushing a crate.',
        inputs: [
          ['Fₓ (N)', '10'], ['Fᵧ (N)', '5'], ['F_z (N)', '3'],
          ['dₓ (m)', '2'], ['dᵧ (m)', '4'], ['d_z (m)', '1'],
        ],
        compute(v) {
          const [fx, fy, fz, dx, dy, dz] = v.map(Number);
          const W = fx * dx + fy * dy + fz * dz;
          const Fmag = sq(fx ** 2 + fy ** 2 + fz ** 2);
          const dmag = sq(dx ** 2 + dy ** 2 + dz ** 2);
          const angle = deg(Math.acos(Math.max(-1, Math.min(1, W / (Fmag * dmag + 1e-15)))));
          return [
            ['Work W = F·d', `${fmt(W)} Joules`],
            ['|F|', `${fmt(Fmag)} N`],
            ['|d|', `${fmt(dmag)} m`],
            ['Angle between F & d', `${fmt(angle)}°`],
          ];
        },
      },
      {
        title: 'Aircraft Wind Correction',
        desc: 'A Pilot calculates heading correction angle and ground speed against a crosswind.',
        inputs: [['Airspeed vₐ (km/h)', '250'], ['Wind speed v_w (km/h)', '40']],
        compute(v) {
          const [va, vw] = v.map(Number);
          const correction = deg(Math.asin(Math.min(vw / Math.max(va, 0.01), 1)));
          const groundSpeed = sq(Math.max(va ** 2 - vw ** 2, 0));
          return [
            ['Heading correction', `${fmt(correction)}° into the wind`],
            ['Ground speed', `${fmt(groundSpeed)} km/h`],
            ['Drift if uncorrected (1 hr)', `${fmt(vw)} km sideways`],
            ['Time for 500 km trip', `${fmt(500 / Math.max(groundSpeed, 0.01))} hours`],
          ];
        },
      },
      {
        title: 'Resultant of Two Displacements',
        desc: 'A Hiker finds total displacement after walking two legs on given bearings.',
        inputs: [
          ['Distance d₁ (m)', '200'], ['Bearing θ₁ (°)', '60'],
          ['Distance d₂ (m)', '150'], ['Bearing θ₂ (°)', '150'],
        ],
        compute(v) {
          const [d1, t1, d2, t2] = v.map(Number);
          const rx = d1 * Math.sin(rad(t1)) + d2 * Math.sin(rad(t2));
          const ry = d1 * Math.cos(rad(t1)) + d2 * Math.cos(rad(t2));
          const bearing = ((deg(Math.atan2(rx, ry)) % 360) + 360) % 360;
          return [
            ['Resultant distance', `${fmt(sq(rx ** 2 + ry ** 2))} m`],
            ['Resultant bearing', `${fmt(bearing)}°`],
            ['Eastward displacement', `${fmt(rx)} m`],
            ['Northward displacement', `${fmt(ry)} m`],
          ];
        },
      },
      {
        title: 'Boat Crossing a River',
        desc: 'A Boat Captain computes crossing time, drift, and path distance with a river current.',
        inputs: [
          ['River width W (m)', '80'], ['Boat speed v_b (m/s)', '4'],
          ['Current speed v_r (m/s)', '1.5'],
        ],
        compute(v) {
          const [W, vb, vr] = v.map(Number);
          const time = W / Math.max(vb, 0.01);
          const drift = vr * time;
          const actualSpeed = sq(vb ** 2 + vr ** 2);
          const pathDist = sq(W ** 2 + drift ** 2);
          const straight =
            vr <= vb
              ? `${fmt(deg(Math.asin(Math.min(vr / Math.max(vb, 0.01), 1))))}° upstream`
              : 'Current too strong — cannot go straight';
          return [
            ['Crossing time', `${fmt(time)} s`],
            ['Downstream drift', `${fmt(drift)} m`],
            ['Actual speed', `${fmt(actualSpeed)} m/s`],
            ['Actual path distance', `${fmt(pathDist)} m`],
            ['Correction angle to go straight', straight],
          ];
        },
      },
    ],
  },

  // ── TRIGONOMETRY ───────────────────────────────────────────────────────────
  Trigonometry: {
    icon: '📐',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sine_cosine_one_period.svg?width=400' },
    apps: [
      {
        title: 'Surveying: Height of a Building',
        desc: 'A Land Surveyor computes building height from distance and elevation angle: H = h + d·tan(θ).',
        inputs: [
          ['Distance d (m)', '50'], ['Angle of elevation θ (°)', '35'],
          ['Eye height h (m)', '1.6'],
        ],
        compute(v) {
          const [d, t, h] = v.map(Number);
          const tr = rad(t);
          return [
            ['Building height H', `${fmt(h + d * Math.tan(tr))} m`],
            ['tan(θ)', fmt(Math.tan(tr), 6)],
            ['Vertical rise above eye', `${fmt(d * Math.tan(tr))} m`],
            ['Line-of-sight distance', `${fmt(d / Math.cos(tr))} m`],
          ];
        },
      },
      {
        title: 'AC Voltage at a Given Instant',
        desc: 'Instantaneous voltage V(t) = V₀·sin(ωt + φ) of a mains supply.',
        inputs: [
          ['Peak voltage V₀ (V)', '325'], ['Frequency ω (rad/s)', '314.16'],
          ['Phase φ (°)', '0'], ['Time t (s)', '0.005'],
        ],
        compute(v) {
          const [V0, w, phi, t] = v.map(Number);
          return [
            ['V(t)', `${fmt(V0 * Math.sin(w * t + rad(phi)), 4)} V`],
            ['Period T', `${fmt(2 * Math.PI / w, 6)} s`],
            ['Frequency f', `${fmt(w / (2 * Math.PI))} Hz`],
            ['RMS Voltage', `${fmt(V0 / sq(2))} V`],
          ];
        },
      },
      {
        title: 'Ferris Wheel Rider Height',
        desc: "A Theme Park Engineer finds passenger height h = p + R - R·cos(2πt/T) on a Ferris wheel.",
        inputs: [
          ['Radius R (m)', '25'], ['Period T (s)', '120'],
          ['Platform height p (m)', '2'], ['Time t (s)', '30'],
        ],
        compute(v) {
          const [R, T, p, t] = v.map(Number);
          return [
            ['Height at time t', `${fmt(p + R - R * Math.cos(2 * Math.PI * t / T))} m`],
            ['Maximum height', `${fmt(p + 2 * R)} m`],
            ['Minimum height (boarding)', `${fmt(p)} m`],
            ['Angular speed', `${fmt(2 * Math.PI / T)} rad/s`],
            ['Revolutions per minute', `${fmt(60 / T)} RPM`],
          ];
        },
      },
      {
        title: 'Shadow Length of a Building',
        desc: 'An Architect calculates shadow length cast by a building when the sun is at elevation α°.',
        inputs: [['Building height H (m)', '30'], ['Sun elevation α (°)', '55']],
        compute(v) {
          const [H, alpha] = v.map(Number);
          const a = Math.max(alpha, 0.1);
          return [
            ['Shadow length', `${fmt(H / Math.tan(rad(a)))} m`],
            ['Tip-of-shadow distance from top', `${fmt(H / Math.sin(rad(a)))} m`],
            ['Shadow area (width 20 m)', `${fmt(H / Math.tan(rad(a)) * 20)} m²`],
            ["If α were 30°", `${fmt(H / Math.tan(rad(30)))} m shadow`],
          ];
        },
      },
      {
        title: 'Ladder Safety Angle Check',
        desc: 'A Construction Safety Officer verifies a ladder meets the safe angle requirement (≥ 75°).',
        inputs: [['Ladder length L (m)', '5'], ['Wall height to reach h (m)', '4.8']],
        compute(v) {
          const [L, h] = v.map(Number);
          const angle = deg(Math.asin(Math.min(h / Math.max(L, 0.01), 1)));
          return [
            ['Angle with ground', `${fmt(angle)}°`],
            ['Distance from wall base', `${fmt(sq(Math.max(L ** 2 - h ** 2, 0)))} m`],
            ['Safe? (≥75° required)', angle >= 75 ? '✓ Safe' : '⚠ Too shallow — reposition!'],
            ['Max reach at 75°', `${fmt(L * Math.sin(rad(75)))} m`],
            ['Base distance at 75°', `${fmt(L * Math.cos(rad(75)))} m`],
          ];
        },
      },
    ],
  },

  // ── COMPLEX NUMBERS ────────────────────────────────────────────────────────
  'Complex Numbers': {
    icon: '🌀',
    apps: [
      {
        title: 'AC Impedance Analysis',
        illustration: 'ComplexImpedance',
        desc: 'Impedance Z = R + j(ωL − 1/ωC) of a series RLC circuit at a given frequency.',
        inputs: [
          ['Resistance R (Ω)', '100'], ['Inductance L (H)', '0.5'],
          ['Capacitance C (F)', '0.00001'], ['Frequency f (Hz)', '50'],
        ],
        compute(v) {
          const [R, L, C, f] = v.map(Number);
          const w = 2 * Math.PI * f;
          const X = w * L - 1 / (w * C + 1e-15);
          const Zmag = sq(R ** 2 + X ** 2);
          return [
            ['Reactance X', `${fmt(X)} Ω`],
            ['|Z| (Impedance)', `${fmt(Zmag)} Ω`],
            ['Phase angle', `${fmt(deg(Math.atan2(X, R)))}°`],
            ['Current (if V=230V)', `${fmt(230 / Zmag)} A`],
          ];
        },
      },
      {
        title: 'Signal Filter Gain and Phase Shift',
        illustration: 'ComplexGain',
        desc: 'Transfer function H = a + jb: gain and phase shift applied to input signal amplitude V_in.',
        inputs: [['Real part a', '0.8'], ['Imaginary part b', '-0.6'], ['Input amplitude V_in (V)', '5']],
        compute(v) {
          const [a, b, Vin] = v.map(Number);
          const mag = sq(a ** 2 + b ** 2);
          const phase = deg(Math.atan2(b, a));
          return [
            ['Gain |H|', fmt(mag)],
            ['Phase shift', `${fmt(phase)}°`],
            ['Output amplitude', `${fmt(mag * Vin)} V`],
            ['Gain in dB', `${fmt(20 * log10(Math.max(mag, 1e-15)))} dB`],
          ];
        },
      },
      {
        title: 'AC Power Factor Correction',
        illustration: 'ComplexPower',
        desc: 'Real, reactive, and apparent power for load Z = R + jX on a V_rms supply.',
        inputs: [
          ['Resistance R (Ω)', '30'], ['Reactance X (Ω)', '40'],
          ['Supply V_rms (V)', '230'],
        ],
        compute(v) {
          const [R, X, V] = v.map(Number);
          const Z = sq(R ** 2 + X ** 2);
          return [
            ['|Z| Impedance', `${fmt(Z)} Ω`],
            ['Current I = V/|Z|', `${fmt(V / Z)} A`],
            ['Real power P', `${fmt(V ** 2 * R / (R ** 2 + X ** 2))} W`],
            ['Reactive power Q', `${fmt(V ** 2 * X / (R ** 2 + X ** 2))} VAR`],
            ['Power factor cos φ', `${fmt(R / Z)} (${X > 0 ? 'lagging' : 'leading'})`],
          ];
        },
      },
      {
        title: 'Rectangular to Polar Form Conversion',
        illustration: 'ComplexPolar',
        desc: 'Convert complex number z = a + jb to polar form r∠θ and Euler form.',
        inputs: [['Real part a', '3'], ['Imaginary part b', '4']],
        compute(v) {
          const [a, b] = v.map(Number);
          const r = sq(a ** 2 + b ** 2);
          const theta = deg(Math.atan2(b, a));
          const thetaRad = Math.atan2(b, a);
          return [
            ['Modulus r = |z|', fmt(r)],
            ['Argument θ', `${fmt(theta)}°`],
            ['Polar form', `${fmt(r)} ∠ ${fmt(theta)}°`],
            ['Exponential form', `${fmt(r)} · e^(j${fmt(thetaRad)})`],
            ['Conjugate z*', `${a} ${b >= 0 ? '−' : '+'} ${abs(b)}j`],
          ];
        },
      },
      {
        title: 'Series RLC Resonant Frequency',
        illustration: 'ComplexResonance',
        desc: 'Resonant frequency f₀ = 1/(2π√(LC)) and quality factor Q of a series RLC circuit.',
        inputs: [
          ['Inductance L (H)', '0.01'], ['Capacitance C (F)', '0.0001'],
          ['Resistance R (Ω)', '50'],
        ],
        compute(v) {
          const [L, C, R] = v.map(Number);
          const f0 = 1 / (2 * Math.PI * sq(L * C));
          const w0 = 1 / sq(L * C);
          return [
            ['Resonant frequency f₀', `${fmt(f0)} Hz`],
            ['Angular frequency ω₀', `${fmt(w0)} rad/s`],
            ['Impedance at resonance', `${fmt(R)} Ω (purely resistive)`],
            ['Quality factor Q', fmt(w0 * L / R)],
            ['Bandwidth', `${fmt(R / (2 * Math.PI * L))} Hz`],
          ];
        },
      },
    ],
  },

  // ── COORDINATE GEOMETRY ────────────────────────────────────────────────────
  'Coordinate Geometry': {
    icon: '📍',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cartesian-coordinate-system.svg?width=400' },
    apps: [
      {
        title: 'GPS Distance Between Two Cities (Haversine)',
        desc: 'Great-circle distance between two GPS coordinates using the Haversine formula (R = 6 371 km).',
        inputs: [
          ['Latitude 1 (°)', '5.9631'], ['Longitude 1 (°)', '10.1591'],
          ['Latitude 2 (°)', '4.0511'], ['Longitude 2 (°)', '9.7679'],
        ],
        compute(v) {
          const [la1, lo1, la2, lo2] = v.map(Number);
          const p1 = rad(la1), p2 = rad(la2);
          const dp = rad(la2 - la1), dl = rad(lo2 - lo1);
          const a =
            Math.sin(dp / 2) ** 2 +
            Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
          const c = 2 * Math.atan2(sq(a), sq(1 - a));
          return [
            ['Distance', `${fmt(6371 * c)} km`],
            ['Distance', `${Math.round(6371 * c * 1000)} m`],
            ['Central angle', `${fmt(deg(c), 6)}°`],
          ];
        },
      },
      {
        title: 'Finding the Ideal Meeting Point (Midpoint)',
        desc: 'Two friends find their meeting midpoint and each person\'s travel distance.',
        inputs: [
          ['x₁ (Friend A)', '2'], ['y₁ (Friend A)', '8'],
          ['x₂ (Friend B)', '10'], ['y₂ (Friend B)', '4'],
        ],
        compute(v) {
          const [x1, y1, x2, y2] = v.map(Number);
          const totalDist = sq((x2 - x1) ** 2 + (y2 - y1) ** 2);
          return [
            ['Midpoint', `(${fmt((x1 + x2) / 2)}, ${fmt((y1 + y2) / 2)})`],
            ['Distance each must travel', `${fmt(totalDist / 2)} units`],
            ['Total distance A to B', `${fmt(totalDist)} units`],
            ['Slope of line AB', x2 !== x1 ? fmt((y2 - y1) / (x2 - x1)) : 'Vertical line'],
          ];
        },
      },
      {
        title: 'Triangular Land Plot Area',
        desc: 'Land Surveyor computes area and perimeter of a triangular plot using the Shoelace formula.',
        inputs: [
          ['x₁', '0'], ['y₁', '0'], ['x₂', '100'],
          ['y₂', '0'], ['x₃', '50'], ['y₃', '80'],
        ],
        compute(v) {
          const [x1, y1, x2, y2, x3, y3] = v.map(Number);
          const area = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
          const perim =
            sq((x2 - x1) ** 2 + (y2 - y1) ** 2) +
            sq((x3 - x2) ** 2 + (y3 - y2) ** 2) +
            sq((x1 - x3) ** 2 + (y1 - y3) ** 2);
          return [
            ['Area', `${fmt(area)} sq units`],
            ['Perimeter', `${fmt(perim)} units`],
            ['Centroid', `(${fmt((x1 + x2 + x3) / 3)}, ${fmt((y1 + y2 + y3) / 3)})`],
            ['Side 1→2', `${fmt(sq((x2 - x1) ** 2 + (y2 - y1) ** 2))} units`],
          ];
        },
      },
      {
        title: 'Road Gradient Calculation',
        desc: 'Civil Engineer checks proposed road gradient against 12% maximum grade for heavy vehicles.',
        inputs: [
          ['Horizontal distance (m)', '500'], ['Start elevation (m)', '100'],
          ['End elevation (m)', '135'],
        ],
        compute(v) {
          const [dx, y1, y2] = v.map(Number);
          const rise = y2 - y1;
          const grade = rise / Math.max(dx, 0.01);
          return [
            ['Slope (gradient)', fmt(grade)],
            ['Grade percentage', `${fmt(grade * 100)}%`],
            ['Angle of incline', `${fmt(deg(Math.atan2(rise, dx)))}°`],
            ['Elevation change', `${fmt(rise, 1)} m`],
            ['Meets 12% max grade?', abs(grade) <= 0.12 ? '✓ Yes' : '⚠ Too steep'],
          ];
        },
      },
      {
        title: 'Distance from a Building to a Road',
        desc: 'Town Planner verifies a new building is at least 15 m from a road centre-line.',
        inputs: [
          ['Road point x₁', '0'], ['Road point y₁', '0'],
          ['Road point x₂', '100'], ['Road point y₂', '50'],
          ['Building x', '30'], ['Building y', '40'],
        ],
        compute(v) {
          const [x1, y1, x2, y2, px, py] = v.map(Number);
          const L = sq((y2 - y1) ** 2 + (x2 - x1) ** 2);
          const dist =
            abs((y2 - y1) * px - (x2 - x1) * py + x2 * y1 - y2 * x1) / Math.max(L, 1e-10);
          return [
            ['Perpendicular distance', `${fmt(dist)} m`],
            ['Road length (segment)', `${fmt(L)} m`],
            ['Meets 15 m setback?', dist >= 15 ? '✓ Yes' : '⚠ Too close'],
            ['Road slope', x2 !== x1 ? fmt((y2 - y1) / (x2 - x1)) : 'Vertical'],
          ];
        },
      },
    ],
  },

  // ── DIFFERENTIAL EQUATIONS ─────────────────────────────────────────────────
  'Differential Equations': {
    icon: '📈',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logistic-curve.svg?width=400' },
    apps: [
      {
        title: 'Population Growth (Logistic Model)',
        desc: 'Biologist predicts fish population P(t) = K / (1 + ((K−P₀)/P₀)·e^(−rt)) over time.',
        inputs: [
          ['Initial population P₀', '100'], ['Growth rate r', '0.05'],
          ['Carrying capacity K', '10000'], ['Time t (years)', '50'],
        ],
        compute(v) {
          const [P0, r, K, t] = v.map(Number);
          const Pt = K / (1 + ((K - P0) / P0) * exp(-r * t));
          const halfTime =
            r > 0 && P0 < K ? `${fmt(ln((K - P0) / P0) / r)} years` : 'N/A';
          const growth = r * Pt * (1 - Pt / K);
          return [
            ['P(t)', Math.round(Pt).toString()],
            ['Half-capacity time', halfTime],
            ['Growth at t', `${fmt(growth)} /year`],
          ];
        },
      },
      {
        title: 'Radioactive Decay and Carbon Dating',
        desc: 'Nuclear Physicist computes remaining isotope N(t) = N₀·e^(−λt) after elapsed time.',
        inputs: [
          ['Initial amount N₀ (g)', '100'], ['Half-life t½ (years)', '5730'],
          ['Time elapsed t (years)', '10000'],
        ],
        compute(v) {
          const [N0, th, t] = v.map(Number);
          const lambda = ln(2) / th;
          const Nt = N0 * exp(-lambda * t);
          return [
            ['Remaining N(t)', `${fmt(Nt, 6)} g`],
            ['Fraction remaining', `${fmt(exp(-lambda * t) * 100, 4)}%`],
            ['Decay constant λ', `${fmt(lambda, 8)} /year`],
            ['Activity |dN/dt|', `${fmt(lambda * Nt, 6)} g/year`],
          ];
        },
      },
      {
        title: "Newton's Law of Cooling (Forensic Science)",
        desc: "Forensic Scientist estimates time of death using Newton's Law of Cooling.",
        inputs: [
          ['Body temp at scene T_m (°C)', '32'], ['Room temp T_env (°C)', '21'],
          ['Cooling constant k (/min)', '0.05'],
        ],
        compute(v) {
          const [Tm, Tenv, k] = v.map(Number);
          const T0 = 37;
          const timeMins = -ln(Math.max((Tm - Tenv) / (T0 - Tenv), 1e-10)) / k;
          return [
            ['Estimated time since death', `${fmt(timeMins, 1)} minutes`],
            ['Time since death', `${fmt(timeMins / 60)} hours`],
            ['Body temp in 1 more hour', `${fmt(Tenv + (Tm - Tenv) * exp(-k * 60))} °C`],
            ['Half-cooling time', `${fmt(ln(2) / k, 1)} minutes`],
          ];
        },
      },
      {
        title: 'Drug Concentration in the Bloodstream',
        desc: "Pharmacist models drug concentration C(t) = C₀·e^(−kt) to determine therapeutic window.",
        inputs: [
          ['Initial concentration C₀ (mg/L)', '10'], ['Elimination rate k (/hr)', '0.15'],
          ['Time t (hours)', '6'],
        ],
        compute(v) {
          const [C0, k, t] = v.map(Number);
          const Ct = C0 * exp(-k * t);
          const timeTo1 = C0 > 1 ? `${fmt(ln(C0 / 1) / k)} hours` : 'Already below';
          return [
            ['Concentration C(t)', `${fmt(Ct)} mg/L`],
            ['Half-life', `${fmt(ln(2) / k)} hours`],
            ['Fraction remaining', `${fmt(exp(-k * t) * 100)}%`],
            ['Time to reach 1 mg/L', timeTo1],
            ['Elimination rate at t', `${fmt(k * Ct)} mg/L/hr`],
          ];
        },
      },
      {
        title: 'Capacitor Charging in an RC Circuit',
        desc: 'Electronics student computes V(t) = Vₛ(1 − e^(−t/τ)) as capacitor charges through R.',
        inputs: [
          ['Supply voltage Vₛ (V)', '12'], ['Resistance R (Ω)', '1000'],
          ['Capacitance C (F)', '0.001'], ['Time t (s)', '2'],
        ],
        compute(v) {
          const [Vs, R, C, t] = v.map(Number);
          const tau = R * C;
          return [
            ['Time constant τ = RC', `${fmt(tau)} s`],
            ['Voltage at t', `${fmt(Vs * (1 - exp(-t / tau)))} V`],
            ['% charged', `${fmt((1 - exp(-t / tau)) * 100)}%`],
            ['Time to 63.2% (1τ)', `${fmt(tau)} s`],
            ['Time to 99% (≈5τ)', `${fmt(-tau * ln(0.01))} s`],
          ];
        },
      },
    ],
  },

  // ── INTEGRATION ────────────────────────────────────────────────────────────
  Integration: {
    icon: '∫',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Integral_as_region_under_curve.svg?width=400' },
    apps: [
      {
        title: 'Industrial Tank Volume (Solid of Revolution)',
        desc: 'Chemical Engineer computes parabolic tank volume V = π∫₀ʰ (a·x²)² dx.',
        inputs: [['Coefficient a', '0.5'], ['Height h (m)', '2']],
        compute(v) {
          const [a, h] = v.map(Number);
          const vol = Math.PI * a ** 2 * h ** 5 / 5;
          return [
            ['Volume V', `${fmt(vol)} m³`],
            ['Volume in litres', `${fmt(vol * 1000)} L`],
            ['Top radius (r = ah²)', `${fmt(a * h ** 2)} m`],
            ['Top cross-section area', `${fmt(Math.PI * (a * h ** 2) ** 2)} m²`],
          ];
        },
      },
      {
        title: 'Centre of Mass of a Lamina',
        desc: 'Mechanical Engineer finds centroid of plate bounded by y = kx² from 0 to L.',
        inputs: [['Coefficient k', '1'], ['Length L (m)', '4']],
        compute(v) {
          const [k, L] = v.map(Number);
          return [
            ['x̄ (centre of mass x)', `${fmt(3 * L / 4)} m`],
            ['ȳ (centre of mass y)', `${fmt(3 * k * L ** 2 / 10)} m`],
            ['Area under curve', `${fmt(k * L ** 3 / 3)} m²`],
            ['Height at L', `${fmt(k * L ** 2)} m`],
          ];
        },
      },
      {
        title: 'Consumer Surplus in Economics',
        desc: 'Economics student computes consumer surplus for demand curve P(q) = a − bq at price P₀.',
        inputs: [
          ['Max willingness to pay a ($)', '100'], ['Demand slope b', '2'],
          ['Market price P₀ ($)', '40'],
        ],
        compute(v) {
          const [a, b, P0] = v.map(Number);
          const q0 = (a - P0) / Math.max(b, 0.001);
          return [
            ['Equilibrium quantity q₀', `${fmt(q0)} units`],
            ['Consumer surplus', money((a - P0) * q0 / 2)],
            ['Total consumer spending', money(P0 * q0)],
            ['Total area under demand curve', money(a * q0 - b * q0 ** 2 / 2)],
          ];
        },
      },
      {
        title: 'Distance from a Velocity Profile',
        desc: 'Race Engineer integrates v(t) = at² + bt + c over T seconds to get total distance.',
        inputs: [
          ['a (t² coeff)', '0.5'], ['b (t coeff)', '2'],
          ['c (constant m/s)', '10'], ['Duration T (s)', '10'],
        ],
        compute(v) {
          const [a, b, c, T] = v.map(Number);
          const dist = a * T ** 3 / 3 + b * T ** 2 / 2 + c * T;
          return [
            ['Distance travelled', `${fmt(dist)} m`],
            ['Initial velocity v(0)', `${fmt(c)} m/s`],
            ['Final velocity v(T)', `${fmt(a * T ** 2 + b * T + c)} m/s`],
            ['Average velocity', `${fmt(dist / Math.max(T, 0.01))} m/s`],
          ];
        },
      },
      {
        title: 'Average Daily Temperature',
        desc: 'Meteorologist computes average T(t) = T_mean + A·sin(π(t−6)/12) between two hours.',
        inputs: [
          ['Mean temp T_mean (°C)', '20'], ['Amplitude A (°C)', '8'],
          ['From hour t₁', '8'], ['To hour t₂', '18'],
        ],
        compute(v) {
          const [Tm, A, t1, t2] = v.map(Number);
          const dt = t2 - t1;
          const avg =
            Tm +
            (A * 12) / (Math.PI * Math.max(dt, 0.01)) *
              (Math.cos(Math.PI * (t1 - 6) / 12) - Math.cos(Math.PI * (t2 - 6) / 12));
          return [
            ['Temp at t₁', `${fmt(Tm + A * Math.sin(Math.PI * (t1 - 6) / 12))} °C`],
            ['Temp at t₂', `${fmt(Tm + A * Math.sin(Math.PI * (t2 - 6) / 12))} °C`],
            ['Average temp (t₁ to t₂)', `${fmt(avg)} °C`],
            ['Peak temp (at noon)', `${fmt(Tm + A)} °C`],
          ];
        },
      },
    ],
  },

  // ── LAPLACE TRANSFORMS ─────────────────────────────────────────────────────
  'Laplace Transforms': {
    icon: '🔄',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/RLC_series_circuit_v1.svg?width=400' },
    apps: [
      {
        title: 'RLC Circuit Transient Response',
        desc: 'Electrical Engineer classifies RLC transient (overdamped / underdamped / critical).',
        inputs: [
          ['R (Ω)', '10'], ['L (H)', '0.1'], ['C (F)', '0.001'],
          ['Time t (s)', '0.05'],
        ],
        compute(v) {
          const [R, L, C, t] = v.map(Number);
          const alpha = R / (2 * L);
          const w0 = 1 / sq(L * C);
          const wd2 = w0 ** 2 - alpha ** 2;
          const type =
            wd2 > 0 ? 'Underdamped' : abs(wd2) < 1e-10 ? 'Critically damped' : 'Overdamped';
          return [
            ['Damping α', `${fmt(alpha)} /s`],
            ['Natural freq ω₀', `${fmt(w0)} rad/s`],
            ['Damped freq ωd', wd2 > 0 ? `${fmt(sq(wd2))} rad/s` : 'Overdamped'],
            ['Envelope e^(−αt)', fmt(exp(-alpha * t), 6)],
            ['System type', type],
          ];
        },
      },
      {
        title: 'Car Suspension (Spring-Mass-Damper)',
        desc: 'Mechanical Engineer determines damping ratio ζ and natural frequency of a suspension.',
        inputs: [
          ['Mass m (kg)', '300'], ['Damping c (Ns/m)', '3000'],
          ['Spring constant k (N/m)', '25000'], ['Time t (s)', '0.5'],
        ],
        compute(v) {
          const [m, c, k, t] = v.map(Number);
          const wn = sq(k / m);
          const zeta = c / (2 * sq(k * m));
          const type =
            zeta < 1 ? 'Underdamped' : abs(zeta - 1) < 0.01 ? 'Critically damped' : 'Overdamped';
          const wd =
            zeta < 1
              ? `${fmt(wn * sq(abs(1 - zeta ** 2)))} rad/s`
              : 'N/A (overdamped)';
          return [
            ['Natural frequency ωn', `${fmt(wn)} rad/s`],
            ['Damping ratio ζ', fmt(zeta)],
            ['System type', type],
            ['Damped frequency ωd', wd],
            ['Envelope at t', `${fmt(exp(-zeta * wn * t), 6)} (${fmt(exp(-zeta * wn * t) * 100)}% of initial)`],
          ];
        },
      },
      {
        title: 'First-Order System Step Response',
        desc: 'Control Systems student: y(t) = K(1 − e^(−t/τ)) after unit step input.',
        inputs: [
          ['System gain K', '10'], ['Time constant τ (s)', '2'], ['Time t (s)', '5'],
        ],
        compute(v) {
          const [K, tau, t] = v.map(Number);
          return [
            ['Output y(t)', fmt(K * (1 - exp(-t / tau)))],
            ['Steady-state value', fmt(K)],
            ['% of final value', `${fmt((1 - exp(-t / tau)) * 100)}%`],
            ['Time to 90%', `${fmt(-tau * ln(0.1))} s`],
            ['Time to 99%', `${fmt(-tau * ln(0.01))} s`],
          ];
        },
      },
      {
        title: 'Second-Order System Overshoot',
        desc: 'Control Engineer computes % overshoot, settling time, and peak time for step input.',
        inputs: [
          ['Natural frequency ωn (rad/s)', '10'], ['Damping ratio ζ', '0.3'],
          ['Step magnitude', '1'],
        ],
        compute(v) {
          const [wn, z, A] = v.map(Number);
          const wd2 = Math.max(1 - z ** 2, 1e-10);
          const overshoot =
            z < 1
              ? `${fmt(exp(-Math.PI * z / sq(wd2)) * 100)}%`
              : '0% (no overshoot)';
          const peak =
            z < 1
              ? `${fmt(A * (1 + exp(-Math.PI * z / sq(wd2))))} `
              : fmt(A);
          return [
            ['% Overshoot', overshoot],
            ['Peak value', peak],
            ['Settling time (2%)', z > 0 ? `${fmt(4 / (z * wn))} s` : '∞ — never settles'],
            ['Peak time', z < 1 ? `${fmt(Math.PI / (wn * sq(wd2)))} s` : 'N/A'],
            ['Damped frequency ωd', z < 1 ? `${fmt(wn * sq(Math.max(1 - z ** 2, 0)))} rad/s` : 'N/A'],
          ];
        },
      },
      {
        title: 'DC Motor Speed Response',
        desc: 'Electrical Engineer predicts motor speed ω(t) = KV(1 − e^(−t/τ)) over time.',
        inputs: [
          ['Motor gain K (rad/s/V)', '10'], ['Time constant τ (s)', '0.5'],
          ['Applied voltage V (V)', '12'], ['Time t (s)', '2'],
        ],
        compute(v) {
          const [K, tau, V, t] = v.map(Number);
          const speed = K * V * (1 - exp(-t / tau));
          const steady = K * V;
          return [
            ['Speed at t', `${fmt(speed)} rad/s`],
            ['Speed at t (RPM)', `${fmt(speed * 60 / (2 * Math.PI))} RPM`],
            ['Steady-state speed', `${fmt(steady)} rad/s (${fmt(steady * 60 / (2 * Math.PI))} RPM)`],
            ['% of final speed', `${fmt((1 - exp(-t / tau)) * 100)}%`],
            ['Time to 95% speed', `${fmt(-tau * ln(0.05))} s`],
          ];
        },
      },
    ],
  },

  // ── LIMITS & DIFFERENTIATION ───────────────────────────────────────────────
  'Limits & Differentiation': {
    icon: '📉',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tangent_to_a_curve.svg?width=400' },
    apps: [
      {
        title: 'Marginal Cost in Manufacturing',
        desc: 'Business Analyst computes marginal cost MC = C′(x) of cost function C(x) = ax³+bx²+cx+d.',
        inputs: [
          ['a (x³ coeff)', '0.001'], ['b (x² coeff)', '-0.1'],
          ['c (x coeff)', '25'], ['d (fixed cost $)', '1000'],
          ['Production x (units)', '100'],
        ],
        compute(v) {
          const [a, b, c, d, x] = v.map(Number);
          const Cx = a * x ** 3 + b * x ** 2 + c * x + d;
          const MC = 3 * a * x ** 2 + 2 * b * x + c;
          const AC = Cx / Math.max(x, 0.01);
          return [
            ['Total cost C(x)', money(Cx)],
            ['Marginal cost MC = C′(x)', money(MC)],
            ['Average cost C/x', money(AC)],
            ['MC slope C″(x)', fmt(6 * a * x + 2 * b)],
          ];
        },
      },
      {
        title: 'Vehicle Velocity and Acceleration',
        desc: 'Traffic Engineer computes v = s′(t) and a = s″(t) from position s(t) = At³+Bt²+Ct+D.',
        inputs: [
          ['A (t³)', '0.5'], ['B (t²)', '-3'], ['C (t)', '10'],
          ['D (initial position)', '0'], ['Time t (s)', '4'],
        ],
        compute(v) {
          const [A, B, C, D, t] = v.map(Number);
          return [
            ['Position s(t)', `${fmt(A * t ** 3 + B * t ** 2 + C * t + D)} m`],
            ["Velocity v(t) = s′(t)", `${fmt(3 * A * t ** 2 + 2 * B * t + C)} m/s`],
            ['Acceleration a(t) = s″(t)', `${fmt(6 * A * t + 2 * B)} m/s²`],
            ['Jerk j(t) = s‴(t)', `${fmt(6 * A)} m/s³`],
          ];
        },
      },
      {
        title: 'Maximum Profit Optimisation',
        desc: 'Startup CEO maximises P(x) = −ax² + bx − c and finds break-even points.',
        inputs: [
          ['a (price sensitivity)', '0.5'], ['b (revenue per 100 units)', '100'],
          ['c (fixed cost $)', '2000'], ['Current production x (hundreds)', '80'],
        ],
        compute(v) {
          const [a, b, c, x] = v.map(Number);
          const xOpt = b / (2 * a);
          const disc = b ** 2 - 4 * a * c;
          const breakEven =
            disc >= 0
              ? `x = ${fmt((b - sq(disc)) / (2 * a), 1)} & ${fmt((b + sq(disc)) / (2 * a), 1)}`
              : 'No break-even';
          return [
            ['Optimal units x*', `${fmt(xOpt)} hundreds`],
            ['Maximum profit', money(-a * xOpt ** 2 + b * xOpt - c)],
            ['Profit at current x', money(-a * x ** 2 + b * x - c)],
            ['Marginal profit at x', `${money(-2 * a * x + b)} per 100 units`],
            ['Break-even points', breakEven],
          ];
        },
      },
      {
        title: 'Optimal Packaging Design (Box)',
        desc: 'Engineer finds cut size x maximising box volume V = x(W−2x)(L−2x) from a sheet.',
        inputs: [
          ['Sheet width W (cm)', '30'], ['Sheet length L (cm)', '40'],
          ['Cut size x (cm)', '5'],
        ],
        compute(v) {
          const [W, L, x] = v.map(Number);
          const Vx = x * (W - 2 * x) * (L - 2 * x);
          const disc = (W + L) ** 2 - 3 * W * L;
          const xOpt = ((W + L) - sq(Math.max(disc, 0))) / 6;
          const Vopt = xOpt * (W - 2 * xOpt) * (L - 2 * xOpt);
          const valid = x > 0 && x < Math.min(W, L) / 2;
          return [
            ['Your box volume', valid ? `${fmt(Vx)} cm³` : 'Invalid cut size'],
            ['Box dimensions', `${fmt(W - 2 * x, 1)} × ${fmt(L - 2 * x, 1)} × ${fmt(x, 1)} cm`],
            ['Optimal cut size x*', `${fmt(xOpt)} cm`],
            ['Maximum volume V*', `${fmt(Vopt)} cm³`],
            ['Efficiency', Vx > 0 ? `${fmt((Vx / Math.max(Vopt, 0.01)) * 100, 1)}% of max` : 'N/A'],
          ];
        },
      },
      {
        title: 'Rate of Spread of an Epidemic',
        desc: 'Epidemiologist finds daily infection rate N′(t) from logistic sigmoid N(t) = K/(1+e^(−r(t−t₀))).',
        inputs: [
          ['Total susceptible K', '10000'], ['Growth rate r', '0.3'],
          ['Midpoint day t₀', '30'], ['Current day t', '20'],
        ],
        compute(v) {
          const [K, r, t0, t] = v.map(Number);
          const eterm = exp(-r * (t - t0));
          return [
            ['Cumulative infections N(t)', Math.round(K / (1 + eterm)).toString()],
            ['Daily new infections N′(t)', Math.round(K * r * eterm / (1 + eterm) ** 2).toString()],
            ['Peak daily rate (at t₀)', Math.round(K * r / 4).toString()],
            ['% infected at t', `${fmt(100 / (1 + eterm))}%`],
            ['Days to 90% infected', `${fmt(t0 + ln(9) / r, 1)}`],
          ];
        },
      },
    ],
  },

  // ── PROBABILITY & STATISTICS ───────────────────────────────────────────────
  'Probability & Statistics': {
    icon: '🎲',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Standard_deviation_diagram.svg?width=400' },
    apps: [
      {
        title: 'Factory Quality Control (Binomial)',
        desc: 'QA Manager finds P(X=k) and expected defects in a batch of n components with defect rate p.',
        inputs: [
          ['Batch size n', '100'], ['Defect rate p', '0.02'], ['Defects k', '3'],
        ],
        compute(v) {
          const [n, p, k] = v.map(Number);
          const ni = Math.round(n), ki = Math.round(k);
          const pXk = comb(ni, ki) * p ** ki * (1 - p) ** (ni - ki);
          let pXleK = 0;
          for (let i = 0; i <= ki; i++)
            pXleK += comb(ni, i) * p ** i * (1 - p) ** (ni - i);
          return [
            ['P(X = k)', fmt(pXk, 6)],
            ['P(X ≤ k)', fmt(pXleK, 6)],
            ['Expected defects E[X] = np', fmt(n * p)],
            ['Std dev σ', fmt(sq(n * p * (1 - p)))],
            ['Observed defect rate', `${fmt((k / n) * 100)}%`],
          ];
        },
      },
      {
        title: 'Exam Grading with Z-Scores',
        desc: 'Lecturer computes Z-score and percentile for a student score from N(μ, σ²).',
        inputs: [
          ['Student score x', '85'], ['Class mean μ', '70'], ['Std dev σ', '10'],
        ],
        compute(v) {
          const [x, mu, sig] = v.map(Number);
          const z = sig !== 0 ? (x - mu) / sig : 0;
          const pctile = 0.5 * (1 + erf(z / sq(2)));
          return [
            ['Z-score', fmt(z)],
            ['Interpretation', `${z > 0 ? 'Above' : 'Below'} mean by ${fmt(abs(z))} std devs`],
            ['≈ P(X < x)', fmt(pctile, 6)],
            ['Percentile ≈', `${fmt(pctile * 100)}%`],
          ];
        },
      },
      {
        title: "Medical Diagnostic Test (Bayes' Theorem)",
        desc: "Medical Researcher uses Bayes' theorem to find P(disease | positive test).",
        inputs: [
          ["Disease prevalence P(D)", '0.01'],
          ["Sensitivity P(+|D)", '0.95'],
          ["Specificity P(−|¬D)", '0.90'],
        ],
        compute(v) {
          const [prev, sens, spec] = v.map(Number);
          const ppv = (sens * prev) / (sens * prev + (1 - spec) * (1 - prev));
          const npv = (spec * (1 - prev)) / (spec * (1 - prev) + (1 - sens) * prev);
          return [
            ['P(Disease | Positive)', `${fmt(ppv, 6)} (${fmt(ppv * 100)}%)`],
            ['False positive rate', `${fmt((1 - spec) * 100)}%`],
            ['False discovery rate', `${fmt((1 - ppv) * 100)}%`],
            ['Negative predictive value', fmt(npv, 6)],
            ['Interpretation', `Only ${fmt(ppv * 100, 1)}% of positive tests are true positives`],
          ];
        },
      },
      {
        title: 'Survey Sample Size Estimation',
        desc: 'Market Researcher calculates sample size for desired margin of error at 95% confidence.',
        inputs: [
          ['Estimated proportion p', '0.5'], ['Margin of error e', '0.03'],
          ['z value (1.96 for 95%)', '1.96'],
        ],
        compute(v) {
          const [p, e, z] = v.map(Number);
          return [
            ['Required sample size n', `${Math.ceil(z ** 2 * p * (1 - p) / e ** 2)}`],
            ['Worst case (p=0.5)', `${Math.ceil(z ** 2 * 0.25 / e ** 2)}`],
            ['Margin of error', `±${fmt(e * 100, 1)}%`],
            ['Confidence level', `≈${fmt(erf(z / sq(2)) * 100, 1)}%`],
          ];
        },
      },
      {
        title: 'Expected Winnings from a Raffle',
        desc: 'Student calculates expected net winnings from a raffle with 3 prize tiers.',
        inputs: [
          ['Ticket price ($)', '5'], ['Total tickets N', '500'],
          ['1st prize ($)', '1000'], ['2nd prize ($)', '200'], ['3rd prize ($)', '50'],
        ],
        compute(v) {
          const [price, N, p1, p2, p3] = v.map(Number);
          const EW = (p1 + p2 + p3) / N;
          return [
            ['Expected prize value', `${money(EW)}`],
            ['Expected net profit', `${money(EW - price)}`],
            ['P(winning any prize)', `${fmt((3 / N) * 100)}%`],
            ['Fair ticket price', money(EW)],
            ["Organiser expected revenue", money(price * N - p1 - p2 - p3)],
          ];
        },
      },
    ],
  },

  // ── SEQUENCES & SERIES ─────────────────────────────────────────────────────
  'Sequences & Series': {
    icon: '🔗',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Geometric_progression_convergence_diagram.svg?width=400' },
    apps: [
      {
        title: 'Retirement Savings Plan (Compound Interest)',
        desc: 'Graduate projects future value of monthly deposits earning compound interest.',
        inputs: [
          ['Monthly deposit P ($)', '500'], ['Annual interest rate (%)', '7'],
          ['Years n', '20'],
        ],
        compute(v) {
          const [P, rate, yrs] = v.map(Number);
          const r = rate / 100 / 12;
          const n = yrs * 12;
          const FV = r > 0 ? P * ((1 + r) ** n - 1) / r : P * n;
          return [
            ['Future value (annuity)', money(FV)],
            ['Total deposited', money(P * n)],
            ['Interest earned', money(FV - P * n)],
            ['Effective annual rate', `${fmt(((1 + r) ** 12 - 1) * 100)}%`],
          ];
        },
      },
      {
        title: 'Home Mortgage Calculator',
        desc: 'First-time buyer computes monthly repayment M = P·r(1+r)ⁿ/((1+r)ⁿ−1) and total cost.',
        inputs: [
          ['Loan amount P ($)', '250000'], ['Annual rate (%)', '5.5'],
          ['Loan term (years)', '30'],
        ],
        compute(v) {
          const [P, rate, yrs] = v.map(Number);
          const r = rate / 100 / 12;
          const n = yrs * 12;
          const M = r > 0 ? P * r * (1 + r) ** n / ((1 + r) ** n - 1) : P / n;
          return [
            ['Monthly payment', money(M)],
            ['Total paid over loan', money(M * n)],
            ['Total interest', money(M * n - P)],
            ['Interest-to-principal ratio', `${fmt(((M * n - P) / P) * 100, 1)}%`],
          ];
        },
      },
      {
        title: 'Bouncing Ball Total Distance',
        desc: 'Physics student sums infinite geometric series for total ball travel distance.',
        inputs: [
          ['Drop height h₀ (m)', '10'], ['Bounce ratio r (0-1)', '0.7'],
          ['Number of bounces n', '10'],
        ],
        compute(v) {
          const [h, r, n] = v.map(Number);
          const ni = Math.round(n);
          const total =
            0 < r && r < 1
              ? `${fmt(h * (1 + r) / (1 - r))} m`
              : 'Diverges';
          const nBounces =
            0 < r && r < 1
              ? `${fmt(h + 2 * h * r * (1 - r ** ni) / (1 - r))} m`
              : 'N/A';
          const untilCm =
            0 < r && r < 1 && h > 0.01
              ? `${Math.ceil(ln(0.01 / h) / ln(r))}`
              : 'N/A';
          return [
            ['Total distance (infinite)', total],
            ['Distance after n bounces', nBounces],
            ['Height after bounce n', `${fmt(h * r ** ni, 6)} m`],
            ['Bounces until < 1 cm', untilCm],
            ['Energy lost per bounce', `${fmt((1 - r ** 2) * 100, 1)}%`],
          ];
        },
      },
      {
        title: 'Drug Dosage Accumulation',
        desc: 'Pharmacist finds drug level after n days and steady-state concentration.',
        inputs: [
          ['Daily dose D (mg)', '200'], ['Fraction remaining after 24h', '0.3'],
          ['Day number n', '7'],
        ],
        compute(v) {
          const [D, f, n] = v.map(Number);
          const ni = Math.round(n);
          const level =
            f < 1 ? `${fmt(D * (1 - f ** ni) / (1 - f))} mg` : `${fmt(D * ni)} mg`;
          const steady = f < 1 ? `${fmt(D / (1 - f))} mg` : 'Accumulates indefinitely';
          const pctSteady = f < 1 ? `${fmt((1 - f ** ni) * 100)}%` : 'N/A';
          const days95 =
            0 < f && f < 1 ? `${Math.ceil(ln(0.05) / ln(f))}` : 'N/A';
          return [
            ['Drug level after day n', level],
            ['Steady-state level', steady],
            ['% of steady state reached', pctSteady],
            ['Days to 95% steady state', days95],
          ];
        },
      },
      {
        title: 'Annual Salary Growth Projection',
        desc: 'Graduate projects salary with r% raises and total earnings over N years (geometric series).',
        inputs: [
          ['Starting salary S₀ ($)', '35000'], ['Annual raise (%)', '4'],
          ['Number of years N', '10'],
        ],
        compute(v) {
          const [S0, rate, N] = v.map(Number);
          const r = rate / 100;
          const n = Math.round(N);
          const salaryN = S0 * (1 + r) ** (n - 1);
          const total = r > 0 ? S0 * ((1 + r) ** n - 1) / r : S0 * n;
          return [
            ['Salary in year N', money(salaryN)],
            ['Total earnings over N years', money(total)],
            ['Total without raises', money(S0 * n)],
            ['Extra earned from raises', money(total - S0 * n)],
            ['Total salary increase', `${fmt(((1 + r) ** (n - 1) - 1) * 100, 1)}% above starting`],
          ];
        },
      },
    ],
  },

  // ── POLYNOMIALS ────────────────────────────────────────────────────────────
  Polynomials: {
    icon: '📊',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Polynomialdeg5.svg?width=400' },
    apps: [
      {
        title: 'Projectile Trajectory (Quadratic)',
        desc: 'Artillery Officer calculates height y(x) and range of a projectile fired at v₀, θ°.',
        inputs: [
          ['Initial velocity v₀ (m/s)', '50'], ['Launch angle θ (°)', '45'],
          ['Gravity g (m/s²)', '9.81'], ['Horizontal distance x (m)', '100'],
        ],
        compute(v) {
          const [v0, th, g, x] = v.map(Number);
          const tr = rad(th);
          const y = x * Math.tan(tr) - (g * x ** 2) / (2 * v0 ** 2 * Math.cos(tr) ** 2);
          return [
            ['Height y at x', `${fmt(y)} m`],
            ['Max height', `${fmt((v0 * Math.sin(tr)) ** 2 / (2 * g))} m`],
            ['Range', `${fmt(v0 ** 2 * Math.sin(2 * tr) / g)} m`],
            ['Time of flight', `${fmt(2 * v0 * Math.sin(tr) / g)} s`],
          ];
        },
      },
      {
        title: 'Business Break-Even Analysis',
        desc: 'Business student finds break-even points where R(x) = C(x) = ax²+bx+c.',
        inputs: [
          ['Price per unit p ($)', '50'], ['Cost coeff a (per x²)', '0.01'],
          ['Variable cost b (per x)', '20'], ['Fixed cost c ($)', '5000'],
          ['Units sold x', '300'],
        ],
        compute(v) {
          const [p, a, b, c, x] = v.map(Number);
          const rev = p * x;
          const cost = a * x ** 2 + b * x + c;
          const profit = rev - cost;
          const disc = (b - p) ** 2 - 4 * a * c;
          const breakEven =
            a !== 0 && disc >= 0
              ? `x = ${fmt((-(b - p) - sq(disc)) / (2 * a), 1)} & ${fmt((-(b - p) + sq(disc)) / (2 * a), 1)}`
              : p !== b
              ? `x = ${fmt(c / Math.max(p - b, 0.01), 1)}`
              : 'No break-even';
          return [
            ['Revenue at x', money(rev)],
            ['Total cost at x', money(cost)],
            ['Profit at x', money(profit)],
            ['Break-even point(s)', breakEven],
            ['Profit margin', `${fmt((profit / Math.max(rev, 0.01)) * 100, 1)}%`],
          ];
        },
      },
      {
        title: 'Roller Coaster Hill Profile',
        desc: "Theme Park Engineer evaluates height y(x) = ax³+bx²+cx+d, slope, and curvature.",
        inputs: [
          ['a (x³ coeff)', '-0.001'], ['b (x² coeff)', '0.1'],
          ['c (x coeff)', '-2'], ['d (start height m)', '30'],
          ['Position x (m)', '25'],
        ],
        compute(v) {
          const [a, b, c, d, x] = v.map(Number);
          const slope = 3 * a * x ** 2 + 2 * b * x + c;
          const curve = 6 * a * x + 2 * b;
          return [
            ['Height y(x)', `${fmt(a * x ** 3 + b * x ** 2 + c * x + d)} m`],
            ["Slope y′(x)", fmt(slope)],
            ['Slope angle', `${fmt(deg(Math.atan(slope)))}°`],
            ["Curvature y″(x)", `${fmt(curve)} (${curve > 0 ? 'concave up ∪' : 'concave down ∩'})`],
            ['G-force factor (approx)', fmt(abs(curve) / (1 + slope ** 2) ** 1.5)],
          ];
        },
      },
      {
        title: 'Power Cable Sag Between Poles',
        desc: 'Telco Engineer calculates parabolic cable sag S = wd²/(8T) and cable length.',
        inputs: [
          ['Span distance d (m)', '100'], ['Cable weight w (N/m)', '5'],
          ['Horizontal tension T (N)', '10000'],
        ],
        compute(v) {
          const [d, w, T] = v.map(Number);
          const S = w * d ** 2 / (8 * T);
          return [
            ['Maximum sag at centre', `${fmt(S)} m`],
            ['Cable length (approx)', `${fmt(d + 8 * S ** 2 / (3 * d))} m`],
            ['Extra cable vs straight', `${fmt(8 * S ** 2 / (3 * d))} m`],
            ['Slope at pole', `${fmt(deg(Math.atan(w * d / (2 * T))))}°`],
            ['Tension at pole support', `${fmt(sq(T ** 2 + (w * d / 2) ** 2))} N`],
          ];
        },
      },
      {
        title: 'Advertising Spend vs Revenue (Cubic Model)',
        desc: 'Marketing Manager evaluates R(x) = ax³+bx²+cx and finds optimal ad spend.',
        inputs: [
          ['a (x³ coeff)', '-0.02'], ['b (x² coeff)', '1.5'],
          ['c (x coeff)', '10'], ['Current spend x ($K)', '30'],
        ],
        compute(v) {
          const [a, b, c, x] = v.map(Number);
          const rev = a * x ** 3 + b * x ** 2 + c * x;
          const MR = 3 * a * x ** 2 + 2 * b * x + c;
          const disc = b ** 2 - 3 * a * c;
          const xOpt = a !== 0 && disc >= 0 ? (-b + sq(disc)) / (3 * a) : null;
          const revOpt = xOpt !== null ? a * xOpt ** 3 + b * xOpt ** 2 + c * xOpt : null;
          return [
            ['Revenue at x', `${money(rev)}K`],
            ['Marginal revenue R′(x)', `${money(MR)}K per $K spent`],
            ['Optimal spend', xOpt !== null ? `${money(xOpt)}K` : 'No optimum found'],
            ['Revenue at optimal', revOpt !== null ? `${money(revOpt)}K` : 'N/A'],
            ["Diminishing returns?", 6 * a * x + 2 * b < 0 ? 'Yes — R″(x) < 0' : 'No — still increasing efficiency'],
          ];
        },
      },
    ],
  },

  // ── NUMERICAL METHODS ──────────────────────────────────────────────────────
  'Numerical Methods': {
    icon: '🔬',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Newton_iteration.svg?width=400' },
    apps: [
      {
        title: 'Newton-Raphson: Square Root Calculator',
        desc: 'Computer Science student implements fast √S via Newton-Raphson: xₙ₊₁ = (xₙ + S/xₙ)/2.',
        inputs: [
          ['Number S', '2'], ['Initial guess x₀', '1'], ['Iterations', '10'],
        ],
        compute(v) {
          const [S, x0, niter] = v.map(Number);
          let x = x0;
          const n = Math.min(Math.round(niter), 15);
          for (let i = 0; i < n; i++) x = (x + S / x) / 2;
          const actual = sq(S);
          return [
            ['Final √S ≈', x.toFixed(10)],
            ['Actual √S', actual.toFixed(10)],
            ['Error', fmtE(abs(x - actual))],
            ['Converged in', `${n} iterations`],
          ];
        },
      },
      {
        title: 'Bisection Method: Root Finding',
        desc: 'Civil Engineer finds root of f(x) = x³ − 2x − 5 = 0 in [a, b] using bisection.',
        inputs: [
          ['Lower bound a', '2'], ['Upper bound b', '3'], ['Iterations', '15'],
        ],
        compute(v) {
          const [a0, b0, nIter] = v.map(Number);
          const f = (x) => x ** 3 - 2 * x - 5;
          let a = a0, b = b0;
          const n = Math.min(Math.round(nIter), 20);
          for (let i = 0; i < n; i++) {
            const m = (a + b) / 2;
            if (f(m) * f(a) > 0) a = m;
            else b = m;
          }
          const root = (a + b) / 2;
          return [
            ['Root approximation', root.toFixed(10)],
            ['f(root)', fmtE(f(root))],
            ['Bracket', `[${a.toFixed(8)}, ${b.toFixed(8)}]`],
            ['Bracket width', fmtE(abs(b - a))],
            ['Iterations performed', `${n}`],
          ];
        },
      },
      {
        title: 'Trapezoidal Rule: Numerical Integration',
        desc: 'Data Scientist approximates ∫ₐᵇ x² dx using Trapezoidal Rule with n sub-intervals.',
        inputs: [
          ['Lower bound a', '0'], ['Upper bound b', '4'], ['Number of intervals n', '10'],
        ],
        compute(v) {
          const [a, b, n] = v.map(Number);
          const ni = Math.max(Math.round(n), 1);
          const h = (b - a) / ni;
          let sum = a ** 2 + b ** 2;
          for (let i = 1; i < ni; i++) sum += 2 * (a + i * h) ** 2;
          const approx = (h / 2) * sum;
          const exact = b ** 3 / 3 - a ** 3 / 3;
          return [
            ['Trapezoidal approximation', fmt(approx, 6)],
            ['Exact value ∫x² dx', fmt(exact, 6)],
            ['Absolute error', fmtE(abs(approx - exact))],
            ['Relative error', `${fmt((abs(approx - exact) / Math.max(abs(exact), 1e-15)) * 100, 4)}%`],
            ['Step size h', fmt(h, 6)],
          ];
        },
      },
      {
        title: "Euler's Method: Exponential Decay",
        desc: 'Chemistry student uses Euler method to solve dy/dt = −ky and compare with exact e^(−kt).',
        inputs: [
          ['Initial value y₀', '100'], ['Decay rate k', '0.5'],
          ['Step size h', '0.5'], ['Number of steps', '10'],
        ],
        compute(v) {
          const [y0, k, h, n] = v.map(Number);
          const ni = Math.round(n);
          const tFinal = h * ni;
          const yEuler = y0 * (1 - k * h) ** ni;
          const yExact = y0 * exp(-k * tFinal);
          return [
            [`Euler estimate at t=${fmt(tFinal, 1)}`, fmt(yEuler, 6)],
            [`Exact value at t=${fmt(tFinal, 1)}`, fmt(yExact, 6)],
            ['Absolute error', fmt(abs(yEuler - yExact), 6)],
            ['Relative error', `${fmt((abs(yEuler - yExact) / Math.max(yExact, 1e-15)) * 100)}%`],
            ['Total time simulated', `${fmt(tFinal, 1)} s`],
          ];
        },
      },
      {
        title: 'Secant Method: Solving f(x) = 0',
        desc: 'Financial Analyst uses Secant method with two initial guesses to find root of f(x) = x² − 2.',
        inputs: [
          ['Initial guess x₀', '1'], ['Initial guess x₁', '2'], ['Iterations', '8'],
        ],
        compute(v) {
          const [x0, x1, n] = v.map(Number);
          const f = (x) => x ** 2 - 2;
          let prev = x0, curr = x1;
          const ni = Math.min(Math.round(n), 15);
          for (let i = 0; i < ni; i++) {
            const next = curr - f(curr) * (curr - prev) / (f(curr) - f(prev) + 1e-15);
            prev = curr;
            curr = next;
          }
          const actual = sq(2);
          return [
            ['Root approximation', curr.toFixed(10)],
            ['Actual √2', actual.toFixed(10)],
            ['Error', fmtE(abs(curr - actual))],
            ['f(root)', fmtE(f(curr))],
            ['Iterations', `${ni}`],
          ];
        },
      },
    ],
  },

  // ── DISCRETE RANDOM VARIABLES ──────────────────────────────────────────────
  'Discrete Random Variables': {
    icon: '🎯',
    image: { uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Binomial_distribution_pmf.svg?width=400' },
    apps: [
      {
        title: 'Insurance Expected Payout Analysis',
        desc: 'Actuary computes E[Payout] = Σxᵢpᵢ and standard deviation for four claim levels.',
        inputs: [
          ['Claim x₁ ($)', '0'], ['P(x₁)', '0.90'],
          ['Claim x₂ ($)', '5000'], ['P(x₂)', '0.06'],
          ['Claim x₃ ($)', '20000'], ['P(x₃)', '0.03'],
          ['Claim x₄ ($)', '100000'], ['P(x₄)', '0.01'],
          ['Annual premium ($)', '2500'],
        ],
        compute(v) {
          const [x1, p1, x2, p2, x3, p3, x4, p4, prem] = v.map(Number);
          const EX = x1 * p1 + x2 * p2 + x3 * p3 + x4 * p4;
          const EX2 = x1 ** 2 * p1 + x2 ** 2 * p2 + x3 ** 2 * p3 + x4 ** 2 * p4;
          const sigma = sq(Math.max(EX2 - EX ** 2, 0));
          return [
            ['E[Payout]', money(EX)],
            ['Std dev σ', money(sigma)],
            ['Premium − E[Payout]', money(prem - EX)],
            ['Profit margin', prem > 0 ? `${fmt(((prem - EX) / prem) * 100, 1)}%` : 'N/A'],
          ];
        },
      },
      {
        title: 'Fair Dice Game Analysis',
        desc: 'Maths student computes E[X] for a dice game: win W₁ for 6, W₂ for 4-5, lose W₃ for 1-3.',
        inputs: [
          ['Win for rolling 6 ($)', '10'], ['Win for rolling 4-5 ($)', '5'],
          ['Loss for rolling 1-3 ($)', '3'],
        ],
        compute(v) {
          const [w1, w2, w3] = v.map(Number);
          const EX = w1 / 6 + (w2 * 2) / 6 - (w3 * 3) / 6;
          return [
            ['P(big win) = 1/6', fmt(1 / 6)],
            ['P(small win) = 2/6', fmt(2 / 6)],
            ['P(loss) = 3/6', fmt(3 / 6)],
            ['Expected value E[X]', `${money(EX)} per game`],
            ['Verdict', `${EX > 0 ? 'Favorable ✓' : 'Unfavorable ✗'} — you ${EX > 0 ? 'gain' : 'lose'} ${money(abs(EX))} per game on average`],
          ];
        },
      },
      {
        title: 'Product Warranty Cost Estimation',
        desc: 'Product Manager estimates expected warranty cost per unit over 3 years.',
        inputs: [
          ['P(fail year 1)', '0.05'], ['Repair cost yr 1 ($)', '200'],
          ['P(fail year 2)', '0.08'], ['Repair cost yr 2 ($)', '300'],
          ['P(fail year 3)', '0.12'], ['Repair cost yr 3 ($)', '400'],
        ],
        compute(v) {
          const [p1, c1, p2, c2, p3, c3] = v.map(Number);
          const EC = p1 * c1 + p2 * c2 + p3 * c3;
          return [
            ['Expected warranty cost', money(EC)],
            ['P(no failure in 3 yrs)', `${fmt((1 - p1 - p2 - p3) * 100, 1)}%`],
            ['P(failure within 3 yrs)', `${fmt((p1 + p2 + p3) * 100, 1)}%`],
            ['Warranty price (20% margin)', money(EC * 1.2)],
            ['Worst-case cost', money(Math.max(c1, c2, c3))],
          ];
        },
      },
      {
        title: 'Lottery Expected Return',
        desc: 'Statistics student analyses expected return per ticket for a national lottery.',
        inputs: [
          ['Ticket cost ($)', '2'], ['Total tickets N', '1000000'],
          ['Jackpot ($)', '500000'], ['2nd prize ($)', '1000'],
          ['# of 2nd prizes', '10'], ['3rd prize ($)', '50'],
          ['# of 3rd prizes', '100'],
        ],
        compute(v) {
          const [cost, N, jp, p2, n2, p3, n3] = v.map(Number);
          const EW = (jp + p2 * n2 + p3 * n3) / N;
          return [
            ['Expected winnings', `${money(EW)}`],
            ['Expected net profit', `${money(EW - cost)}`],
            ['Return on investment', `${fmt((EW / cost) * 100)}%`],
            ['P(jackpot)', `1 in ${N.toLocaleString()} (${fmt((1 / N) * 100, 6)}%)`],
            ['P(any prize)', `${fmt(((1 + n2 + n3) / N) * 100, 4)}%`],
          ];
        },
      },
      {
        title: 'Student Exam Outcome Probabilities',
        desc: 'University student estimates expected GPA contribution from grade probability distribution.',
        inputs: [
          ['P(Grade A)', '0.30'], ['P(Grade B)', '0.40'],
          ['P(Grade C)', '0.20'], ['Course credits', '3'],
        ],
        compute(v) {
          const [pa, pb, pc, cr] = v.map(Number);
          const pf = Math.max(1 - pa - pb - pc, 0);
          const gpa = 4 * pa + 3 * pb + 2 * pc;
          return [
            ['P(Fail)', `${fmt(pf)} (${Math.round(pf * 100)}%)`],
            ['Expected GPA for course', fmt(gpa)],
            ['Expected quality points', fmt(gpa * cr)],
            ['P(passing ≥ C)', `${fmt((pa + pb + pc) * 100, 1)}%`],
            ['P(distinction ≥ B)', `${fmt((pa + pb) * 100, 1)}%`],
          ];
        },
      },
    ],
  },
};

export default applications;
