// Interactive Learning topics with subtopics and JS computation functions
// Ported from globsul(UNI).py Code Section 6

const topicsLearning = {
  COMPLEX_NUMBERS: {
    id: 'complex_numbers',
    title: 'Complex Numbers',
    icon: '🔢',
    color: '#0C1446',
    subtopics: [
      {
        id: 'addition',
        title: 'Addition of Complex Numbers',
        formula: 'Z₁ + Z₂ = (a+c) + (b+d)i',
        description: 'Given Z₁ = a + bi  &  Z₂ = c + di, their sum is Z₁ + Z₂ = (a+c) + (b+d)i',
        example: 'Z₁ = 2+3i, Z₂ = 3-2i → Z₁+Z₂ = (2+3)+(3-2)i = 5+i',
        inputs: [
          { label: 'a  (Real part of Z₁)', defaultValue: '0' },
          { label: 'b  (Imaginary part of Z₁)', defaultValue: '0' },
          { label: 'c  (Real part of Z₂)', defaultValue: '0' },
          { label: 'd  (Imaginary part of Z₂)', defaultValue: '0' },
        ],
        compute: (inputs) => {
          const [a, b, c, d] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const realPart = a + c;
          const imagPart = b + d;
          return `Z₁ + Z₂ = ${realPart} + (${imagPart})i`;
        },
      },
      {
        id: 'subtraction',
        title: 'Subtraction of Complex Numbers',
        formula: 'Z₁ - Z₂ = (a-c) + (b-d)i',
        description: 'Given Z₁ = a + bi  &  Z₂ = c + di, their difference is Z₁ - Z₂ = (a-c) + (b-d)i',
        example: 'Z₁ = 2+3i, Z₂ = 3-2i → Z₁-Z₂ = (2-3)+(3-(-2))i = -1+5i',
        inputs: [
          { label: 'a  (Real part of Z₁)', defaultValue: '0' },
          { label: 'b  (Imaginary part of Z₁)', defaultValue: '0' },
          { label: 'c  (Real part of Z₂)', defaultValue: '0' },
          { label: 'd  (Imaginary part of Z₂)', defaultValue: '0' },
        ],
        compute: (inputs) => {
          const [a, b, c, d] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          return `Z₁ - Z₂ = ${a - c} + (${b - d})i`;
        },
      },
      {
        id: 'multiplication',
        title: 'Multiplication of Complex Numbers',
        formula: 'Z₁·Z₂ = (ac-bd) + (ad+bc)i',
        description: '(a+bi)(c+di) = ac + adi + bci + bdi² = (ac−bd) + (ad+bc)i  (since i²=−1)',
        example: 'Z₁=2+3i, Z₂=3-2i → Z₁·Z₂ = (6+6)+(-4+9)i = 12+5i',
        inputs: [
          { label: 'a  (Real part of Z₁)', defaultValue: '0' },
          { label: 'b  (Imaginary part of Z₁)', defaultValue: '0' },
          { label: 'c  (Real part of Z₂)', defaultValue: '0' },
          { label: 'd  (Imaginary part of Z₂)', defaultValue: '0' },
        ],
        compute: (inputs) => {
          const [a, b, c, d] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          return `Z₁·Z₂ = ${a * c - b * d} + (${a * d + b * c})i`;
        },
      },
      {
        id: 'division',
        title: 'Division of Complex Numbers',
        formula: 'Z₁/Z₂ = [(ac+bd) + (bc-ad)i] / (c²+d²)',
        description: 'Multiply numerator and denominator by conjugate of Z₂: [(ac+bd) + (bc−ad)i] / (c²+d²)',
        example: 'Z₁=2+3i, Z₂=3-2i → Z₁/Z₂ = [(6+6)+(-4+9)i]/(9+4) = 12/13 + 5/13·i',
        inputs: [
          { label: 'a  (Real part of Z₁)', defaultValue: '1' },
          { label: 'b  (Imaginary part of Z₁)', defaultValue: '1' },
          { label: 'c  (Real part of Z₂)', defaultValue: '1' },
          { label: 'd  (Imaginary part of Z₂)', defaultValue: '1' },
        ],
        compute: (inputs) => {
          const [a, b, c, d] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const denom = c * c + d * d;
          if (denom === 0) return 'Math Error: denominator is zero';
          const x = Math.round(((a * c + b * d) / denom) * 10000) / 10000;
          const y = Math.round(((b * c - a * d) / denom) * 10000) / 10000;
          return `Z₁ / Z₂ = ${x} + (${y})i`;
        },
      },
      {
        id: 'modulus_argument',
        title: 'Modulus & Argument',
        formula: '|Z| = √(x²+y²),  arg(Z) depends on quadrant',
        description: 'For Z = x + yi: Modulus |Z| = √(x²+y²). Argument is the angle from positive real axis.',
        example: 'Z = 3 + 4i → |Z| = √(9+16) = 5',
        inputs: [
          { label: 'x  (Real part)', defaultValue: '3' },
          { label: 'y  (Imaginary part)', defaultValue: '4' },
        ],
        compute: (inputs) => {
          const [x, y] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (x === 0 && y === 0) return 'Math Error: both parts are zero';
          const mod = Math.round(Math.sqrt(x * x + y * y) * 10000) / 10000;
          let argStr = '';
          if (x > 0 && y >= 0) argStr = `tan⁻¹(${y}/${x})`;
          else if (x < 0 && y >= 0) argStr = `π − tan⁻¹(${y}/${-x})`;
          else if (x < 0 && y < 0) argStr = `tan⁻¹(${-y}/${-x}) − π`;
          else if (x > 0 && y < 0) argStr = `−tan⁻¹(${-y}/${x})`;
          else if (x === 0 && y > 0) argStr = 'π/2';
          else if (x === 0 && y < 0) argStr = '−π/2';
          return `Modulus |Z| = ${mod}\nArgument = ${argStr}`;
        },
      },
      {
        id: 'conjugates',
        title: 'Conjugates & Equality',
        formula: 'Z* = a − bi  (conjugate of Z = a+bi)',
        description: 'If Z = a+bi then Z* = a−bi. Two complex numbers Z₁=Z₂ iff Re(Z₁)=Re(Z₂) and Im(Z₁)=Im(Z₂).',
        example: 'Z = 2+3i → Z* = 2−3i',
        inputs: [
          { label: 'a  (Real part)', defaultValue: '2' },
          { label: 'b  (Imaginary part)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [a, b] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          return `Z = ${a} + (${b})i\nConjugate Z* = ${a} + (${-b})i`;
        },
      },
      {
        id: 'square_root',
        title: 'Square Root of Complex Number',
        formula: '√(a+bi) = c+di where c²−d²=a and 2cd=b',
        description: 'Let the square roots be c+di. Square both sides and equate real/imaginary parts to solve for c and d.',
        example: '√(3+4i) = 2+i  (verify: (2+i)² = 4+4i+i²=3+4i ✓)',
        inputs: [
          { label: 'a  (Real part)', defaultValue: '3' },
          { label: 'b  (Imaginary part, must ≠ 0)', defaultValue: '4' },
        ],
        compute: (inputs) => {
          const [a, b] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (b === 0) return 'b must be non-zero for complex square root';
          // d⁴ + a·d² − (b²/4) = 0 with t = d²
          // t = (−a ± √(a²+b²)) / 2
          const disc = Math.sqrt(a * a + b * b);
          const t1 = (-a + disc) / 2;
          const t2 = (-a - disc) / 2;
          const tPos = t1 >= 0 ? t1 : t2;
          if (tPos < 0) return 'No real solution';
          const d1 = Math.round(Math.sqrt(tPos) * 10000) / 10000;
          const d2 = -d1;
          const c1 = Math.round((b / (2 * d1)) * 10000) / 10000;
          const c2 = -c1;
          return `Square roots:\n  ${c1} + (${d1})i\n  ${c2} + (${d2})i`;
        },
      },
      {
        id: 'polynomial_from_root',
        title: 'Polynomial from Complex Root + Real Root',
        formula: 'f(z) = [z−(a+bi)][z−(a−bi)][z−c]',
        description: 'Given complex root a+bi and real root c, the conjugate a−bi is also a root. Form the cubic polynomial.',
        example: 'Root 1+2i, real root 3 → f(z) = z³ + (−5)z² + (10)z + (−15)',
        inputs: [
          { label: 'a  (Real part of complex root)', defaultValue: '1' },
          { label: 'b  (Imaginary part of complex root)', defaultValue: '2' },
          { label: 'c  (Real root)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [a, b, c] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const AB = a * a + b * b;
          const t1 = Math.round((-2 * a - c) * 100) / 100;
          const t2 = Math.round((AB + 2 * a * c) * 100) / 100;
          const t3 = Math.round((-AB * c) * 100) / 100;
          return `Roots: ${a}+(${b})i,  ${a}+(${-b})i,  ${c}\nPolynomial: z³ + (${t1})z² + (${t2})z + (${t3})`;
        },
      },
    ],
  },

  COORDINATE_GEOMETRY: {
    id: 'coordinate_geometry',
    title: 'Coordinate Geometry',
    icon: '📐',
    color: '#0047AB',
    subtopics: [
      {
        id: 'angle_two_lines',
        title: 'Angle Between Two Straight Lines',
        formula: 'tanθ = |(m₁ − m₂)/(1 + m₁m₂)|',
        description: 'The acute angle θ between lines with gradients m₁ and m₂ is given by tanθ = |(m₁−m₂)/(1+m₁m₂)|',
        example: 'm₁=2, m₂=1 → tanθ = |(2−1)/(1+2)| = 1/3 → θ = tan⁻¹(1/3) ≈ 18.43°',
        inputs: [
          { label: 'm₁  (Gradient of line 1)', defaultValue: '2' },
          { label: 'm₂  (Gradient of line 2)', defaultValue: '1' },
        ],
        compute: (inputs) => {
          const [m1, m2] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const denom = 1 + m1 * m2;
          if (denom === 0) return 'Lines are perpendicular (angle = 90°)';
          const tanTheta = Math.abs((m1 - m2) / denom);
          const theta = Math.round(Math.atan(tanTheta) * (180 / Math.PI) * 100) / 100;
          return `tan θ = ${Math.round(tanTheta * 10000) / 10000}\nAngle θ = ${theta}°`;
        },
      },
      {
        id: 'two_points',
        title: 'Line Through Two Points',
        formula: 'Gradient m = (y₂−y₁)/(x₂−x₁)',
        description: 'Find the gradient, distance, midpoint and equation of a line through two points.',
        example: 'A(1,2), B(4,6) → m = (6-2)/(4-1) = 4/3',
        inputs: [
          { label: 'x₁', defaultValue: '1' },
          { label: 'y₁', defaultValue: '2' },
          { label: 'x₂', defaultValue: '4' },
          { label: 'y₂', defaultValue: '6' },
        ],
        compute: (inputs) => {
          const [x1, y1, x2, y2] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (x1 === x2) return `Vertical line: x = ${x1}\nMidpoint = (${(x1+x2)/2}, ${(y1+y2)/2})\nDistance = |${y2-y1}|`;
          const m = Math.round(((y2 - y1) / (x2 - x1)) * 10000) / 10000;
          const c = Math.round((y1 - m * x1) * 10000) / 10000;
          const dist = Math.round(Math.sqrt((x2-x1)**2 + (y2-y1)**2) * 10000) / 10000;
          const mx = (x1+x2)/2, my = (y1+y2)/2;
          return `Gradient m = ${m}\nEquation: y = ${m}x + (${c})\nDistance = ${dist}\nMidpoint = (${mx}, ${my})`;
        },
      },
      {
        id: 'perpendicular_distance',
        title: 'Perpendicular Distance: Point to Line',
        formula: 'd = |ax₀ + by₀ + c| / √(a²+b²)',
        description: 'Distance from point (x₀, y₀) to line ax + by + c = 0',
        example: 'Point (3,4), Line 3x+4y−5=0 → d = |9+16−5|/5 = 4',
        inputs: [
          { label: 'x₀  (Point x)', defaultValue: '3' },
          { label: 'y₀  (Point y)', defaultValue: '4' },
          { label: 'a  (Coefficient of x in line)', defaultValue: '3' },
          { label: 'b  (Coefficient of y in line)', defaultValue: '4' },
          { label: 'c  (Constant in ax+by+c=0)', defaultValue: '-5' },
        ],
        compute: (inputs) => {
          const [x0, y0, a, b, c] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const denom = Math.sqrt(a * a + b * b);
          if (denom === 0) return 'a and b cannot both be zero';
          const d = Math.round((Math.abs(a * x0 + b * y0 + c) / denom) * 10000) / 10000;
          return `Distance = ${d}`;
        },
      },
      {
        id: 'circle_equation',
        title: 'Equation of a Circle',
        formula: '(x−h)² + (y−k)² = r²',
        description: 'Circle with centre (h, k) and radius r has equation (x−h)² + (y−k)² = r²',
        example: 'Centre (2,3), radius 5 → (x−2)² + (y−3)² = 25',
        inputs: [
          { label: 'h  (Centre x)', defaultValue: '2' },
          { label: 'k  (Centre y)', defaultValue: '3' },
          { label: 'r  (Radius)', defaultValue: '5' },
        ],
        compute: (inputs) => {
          const [h, k, r] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (r <= 0) return 'Radius must be positive';
          const hSign = h >= 0 ? `-${h}` : `+${-h}`;
          const kSign = k >= 0 ? `-${k}` : `+${-k}`;
          return `Equation: (x${hSign})² + (y${kSign})² = ${r*r}`;
        },
      },
    ],
  },

  DIFFERENTIAL_EQUATIONS: {
    id: 'differential_equations',
    title: 'Differential Equations',
    icon: '∂',
    color: '#4B0082',
    subtopics: [
      {
        id: 'first_order_sep_dy_k',
        title: '1st Order: a·dy/dx = k',
        formula: 'y = (k/a)x + C',
        description: 'Separable ODE: a·dy/dx = k  ⟹  dy = (k/a)dx  ⟹  y = (k/a)x + C',
        example: '2·dy/dx = 6  ⟹  y = 3x + C',
        inputs: [
          { label: 'a  (multiplier of dy/dx)', defaultValue: '2' },
          { label: 'k  (constant on right)', defaultValue: '6' },
          { label: 'x₀  (initial x, if known)', defaultValue: '0' },
          { label: 'y₀  (initial y, if known)', defaultValue: '0' },
        ],
        compute: (inputs) => {
          const [a, k, x0, y0] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (a === 0) return 'a cannot be zero';
          const coef = Math.round((k / a) * 10000) / 10000;
          const C = Math.round((y0 - coef * x0) * 10000) / 10000;
          return `General: y = ${coef}x + C\nWith initial condition (${x0}, ${y0}):\nC = ${C}\nParticular: y = ${coef}x + (${C})`;
        },
      },
      {
        id: 'first_order_sep_dy_by',
        title: '1st Order: a·dy/dx = b·y',
        formula: 'y = C·e^((b/a)x)',
        description: 'a·dy/dx = b·y  ⟹  (1/y)dy = (b/a)dx  ⟹  ln|y| = (b/a)x + C₁  ⟹  y = Ce^((b/a)x)',
        example: 'dy/dx = 2y  ⟹  y = Ce^(2x)',
        inputs: [
          { label: 'a  (multiplier of dy/dx)', defaultValue: '1' },
          { label: 'b  (multiplier of y)', defaultValue: '2' },
          { label: 'x₀  (initial x)', defaultValue: '0' },
          { label: 'y₀  (initial y, y₀≠0)', defaultValue: '1' },
        ],
        compute: (inputs) => {
          const [a, b, x0, y0] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (a === 0) return 'a cannot be zero';
          if (y0 === 0) return 'y₀ must be non-zero';
          const exponent = Math.round((b / a) * 10000) / 10000;
          const C = Math.round(y0 / Math.exp(exponent * x0) * 10000) / 10000;
          return `General: y = C·e^(${exponent}x)\nWith (${x0}, ${y0}): C = ${C}\nParticular: y = ${C}·e^(${exponent}x)`;
        },
      },
      {
        id: 'second_order_homogeneous',
        title: '2nd Order Homogeneous ODE',
        formula: 'a·d²y/dx² + b·dy/dx + c·y = 0',
        description: 'Auxiliary equation: am² + bm + c = 0. Solve for m₁, m₂. If real distinct: y = Ae^(m₁x) + Be^(m₂x)',
        example: 'd²y/dx² − 3dy/dx + 2y = 0: m²−3m+2=0 → m=1,2 → y = Ae^x + Be^(2x)',
        inputs: [
          { label: 'a  (coefficient of d²y/dx²)', defaultValue: '1' },
          { label: 'b  (coefficient of dy/dx)', defaultValue: '-3' },
          { label: 'c  (coefficient of y)', defaultValue: '2' },
        ],
        compute: (inputs) => {
          const [a, b, c] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (a === 0) return 'a cannot be zero';
          const disc = b * b - 4 * a * c;
          if (disc > 0) {
            const m1 = Math.round((-b + Math.sqrt(disc)) / (2 * a) * 10000) / 10000;
            const m2 = Math.round((-b - Math.sqrt(disc)) / (2 * a) * 10000) / 10000;
            return `Auxiliary: ${a}m² + (${b})m + (${c}) = 0\nRoots: m₁ = ${m1},  m₂ = ${m2}\nGeneral Solution: y = Ae^(${m1}x) + Be^(${m2}x)`;
          } else if (disc === 0) {
            const m = Math.round(-b / (2 * a) * 10000) / 10000;
            return `Auxiliary: ${a}m² + (${b})m + (${c}) = 0\nRepeated root: m = ${m}\nGeneral Solution: y = (A + Bx)e^(${m}x)`;
          } else {
            const alpha = Math.round(-b / (2 * a) * 10000) / 10000;
            const beta = Math.round(Math.sqrt(-disc) / (2 * a) * 10000) / 10000;
            return `Auxiliary: ${a}m² + (${b})m + (${c}) = 0\nComplex roots: α = ${alpha},  β = ${beta}\nGeneral Solution: y = e^(${alpha}x)[A·cos(${beta}x) + B·sin(${beta}x)]`;
          }
        },
      },
    ],
  },

  INTEGRATION: {
    id: 'integration',
    title: 'Integration',
    icon: '∫',
    color: '#8B0000',
    subtopics: [
      {
        id: 'power_rule',
        title: 'Power Rule Integration',
        formula: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ −1)',
        description: 'Integrate a polynomial term axⁿ using the power rule.',
        example: '∫3x² dx = 3·x³/3 + C = x³ + C',
        inputs: [
          { label: 'a  (coefficient)', defaultValue: '3' },
          { label: 'n  (exponent, n ≠ −1)', defaultValue: '2' },
        ],
        compute: (inputs) => {
          const [a, n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (n === -1) return '∫(a/x) dx = a·ln|x| + C';
          const newExp = n + 1;
          const coef = Math.round((a / newExp) * 10000) / 10000;
          return `∫${a}x^${n} dx = ${coef}x^${newExp} + C`;
        },
      },
      {
        id: 'definite_integral_poly',
        title: 'Definite Integral (Polynomial)',
        formula: '∫[a to b] xⁿ dx = [xⁿ⁺¹/(n+1)] from a to b',
        description: 'Evaluate the definite integral of ax^n from lower to upper bound.',
        example: '∫[0 to 2] x² dx = [x³/3]₀² = 8/3 ≈ 2.667',
        inputs: [
          { label: 'a  (coefficient)', defaultValue: '1' },
          { label: 'n  (exponent)', defaultValue: '2' },
          { label: 'Lower limit', defaultValue: '0' },
          { label: 'Upper limit', defaultValue: '2' },
        ],
        compute: (inputs) => {
          const [a, n, lo, hi] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (n === -1) return 'Use ln|x| rule: ∫(a/x) dx = a·ln|x|';
          const newExp = n + 1;
          const coef = a / newExp;
          const result = Math.round((coef * Math.pow(hi, newExp) - coef * Math.pow(lo, newExp)) * 10000) / 10000;
          return `∫[${lo} to ${hi}] ${a}x^${n} dx = [${a}x^${newExp}/${newExp}] from ${lo} to ${hi}\n= ${Math.round(coef*10000)/10000}×${hi}^${newExp} − ${Math.round(coef*10000)/10000}×${lo}^${newExp}\n= ${result}`;
        },
      },
      {
        id: 'integration_by_substitution',
        title: 'Integration by Substitution',
        formula: '∫f(g(x))·g\'(x)dx = F(g(x)) + C',
        description: 'Use substitution u = g(x) to simplify: ∫(ax+b)^n dx with u = ax+b',
        example: '∫(2x+1)³ dx: u=2x+1, du/dx=2 → (1/2)∫u³du = u⁴/8 + C = (2x+1)⁴/8 + C',
        inputs: [
          { label: 'a  (coefficient of x in bracket)', defaultValue: '2' },
          { label: 'b  (constant in bracket)', defaultValue: '1' },
          { label: 'n  (power, n ≠ −1)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [a, b, n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (a === 0) return 'a cannot be zero';
          if (n === -1) return `∫1/(${a}x+${b}) dx = (1/${a})·ln|${a}x+${b}| + C`;
          const newExp = n + 1;
          const coef = Math.round((1 / (a * newExp)) * 10000) / 10000;
          return `u = ${a}x + ${b},  du = ${a}dx\n∫(${a}x+${b})^${n} dx = (1/${a})∫u^${n}du\n= ${coef}·(${a}x+${b})^${newExp} + C`;
        },
      },
    ],
  },

  LAPLACE: {
    id: 'laplace',
    title: 'Laplace Transforms',
    icon: 'ℒ',
    color: '#006400',
    subtopics: [
      {
        id: 'laplace_constant',
        title: 'Laplace of y = k (constant)',
        formula: 'ℒ{k} = k/s',
        description: 'The Laplace transform of a constant k is k/s for s > 0.',
        example: 'ℒ{5} = 5/s',
        inputs: [
          { label: 'k  (constant)', defaultValue: '5' },
        ],
        compute: (inputs) => {
          const [k] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          return `ℒ{${k}} = ${k}/s`;
        },
      },
      {
        id: 'laplace_power',
        title: 'Laplace of y = tⁿ',
        formula: 'ℒ{tⁿ} = n! / sⁿ⁺¹',
        description: 'The Laplace transform of tⁿ (where n is a non-negative integer) is n!/sⁿ⁺¹.',
        example: 'ℒ{t²} = 2!/s³ = 2/s³',
        inputs: [
          { label: 'n  (non-negative integer)', defaultValue: '2' },
        ],
        compute: (inputs) => {
          const [n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (!Number.isInteger(n) || n < 0) return 'n must be a non-negative integer';
          let factorial = 1;
          for (let i = 1; i <= n; i++) factorial *= i;
          return `ℒ{t^${n}} = ${n}! / s^${n+1} = ${factorial}/s^${n+1}`;
        },
      },
      {
        id: 'laplace_exp',
        title: 'Laplace of y = e^(at)',
        formula: 'ℒ{e^(at)} = 1/(s−a)',
        description: 'The Laplace transform of e^(at) is 1/(s−a) for s > a.',
        example: 'ℒ{e^(3t)} = 1/(s−3)',
        inputs: [
          { label: 'a  (exponent constant)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [a] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const sign = a >= 0 ? `−${a}` : `+${-a}`;
          return `ℒ{e^(${a}t)} = 1/(s${sign})  (valid for s > ${a})`;
        },
      },
      {
        id: 'laplace_sin',
        title: 'Laplace of y = sin(ωt)',
        formula: 'ℒ{sin(ωt)} = ω/(s²+ω²)',
        description: 'The Laplace transform of sin(ωt) is ω/(s²+ω²).',
        example: 'ℒ{sin(3t)} = 3/(s²+9)',
        inputs: [
          { label: 'ω  (angular frequency)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [w] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          return `ℒ{sin(${w}t)} = ${w}/(s² + ${w*w})`;
        },
      },
      {
        id: 'laplace_cos',
        title: 'Laplace of y = cos(ωt)',
        formula: 'ℒ{cos(ωt)} = s/(s²+ω²)',
        description: 'The Laplace transform of cos(ωt) is s/(s²+ω²).',
        example: 'ℒ{cos(3t)} = s/(s²+9)',
        inputs: [
          { label: 'ω  (angular frequency)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [w] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          return `ℒ{cos(${w}t)} = s/(s² + ${w*w})`;
        },
      },
    ],
  },

  LIMITS_DIFFERENTIATION: {
    id: 'limits_differentiation',
    title: 'Limits & Differentiation',
    icon: 'dy/dx',
    color: '#8B4513',
    subtopics: [
      {
        id: 'limit_polynomial',
        title: 'Limit of a Polynomial',
        formula: 'lim[x→a] f(x) = f(a)  (direct substitution)',
        description: 'For polynomial f(x) = ax²+bx+c, evaluate lim[x→p] f(x) by direct substitution.',
        example: 'lim[x→2] (x²+3x) = 4+6 = 10',
        inputs: [
          { label: 'a  (coeff of x²)', defaultValue: '1' },
          { label: 'b  (coeff of x)', defaultValue: '3' },
          { label: 'c  (constant)', defaultValue: '0' },
          { label: 'p  (value x approaches)', defaultValue: '2' },
        ],
        compute: (inputs) => {
          const [a, b, c, p] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const result = a * p * p + b * p + c;
          return `f(x) = ${a}x² + (${b})x + (${c})\nlim[x→${p}] f(x) = ${a}(${p})² + (${b})(${p}) + (${c}) = ${result}`;
        },
      },
      {
        id: 'differentiate_polynomial',
        title: 'Differentiate a Polynomial',
        formula: 'd/dx[axⁿ] = n·a·xⁿ⁻¹',
        description: 'Different ax^n using the power rule: derivative = n·a·x^(n-1).',
        example: 'd/dx[3x⁴] = 12x³',
        inputs: [
          { label: 'a  (coefficient)', defaultValue: '3' },
          { label: 'n  (exponent)', defaultValue: '4' },
        ],
        compute: (inputs) => {
          const [a, n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (n === 0) return `d/dx[${a}] = 0`;
          const newCoef = a * n;
          const newExp = n - 1;
          return `d/dx[${a}x^${n}] = ${newCoef}x^${newExp}`;
        },
      },
      {
        id: 'chain_rule',
        title: 'Chain Rule (Function of Function)',
        formula: 'd/dx[f(g(x))] = f\'(g(x))·g\'(x)',
        description: 'Differentiate (ax+b)^n using the chain rule.',
        example: 'd/dx[(2x+1)³] = 3(2x+1)²·2 = 6(2x+1)²',
        inputs: [
          { label: 'a  (coefficient of x)', defaultValue: '2' },
          { label: 'b  (constant)', defaultValue: '1' },
          { label: 'n  (power)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [a, b, n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const newCoef = n * a;
          const newExp = n - 1;
          return `d/dx[(${a}x+${b})^${n}] = ${n}·(${a}x+${b})^${newExp}·${a} = ${newCoef}(${a}x+${b})^${newExp}`;
        },
      },
    ],
  },

  MATRICES: {
    id: 'matrices',
    title: 'Matrices',
    icon: '⊞',
    color: '#2F4F4F',
    subtopics: [
      {
        id: 'matrix_det_2x2',
        title: 'Determinant of 2×2 Matrix',
        formula: 'det|A| = ad − bc',
        description: 'For matrix A = [[a,b],[c,d]], determinant = ad − bc',
        example: 'A = [[3,2],[1,4]] → det = 12−2 = 10',
        inputs: [
          { label: 'a  (row 1, col 1)', defaultValue: '3' },
          { label: 'b  (row 1, col 2)', defaultValue: '2' },
          { label: 'c  (row 2, col 1)', defaultValue: '1' },
          { label: 'd  (row 2, col 2)', defaultValue: '4' },
        ],
        compute: (inputs) => {
          const [a, b, c, d] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const det = a * d - b * c;
          return `A = [[${a}, ${b}], [${c}, ${d}]]\ndet(A) = (${a})(${d}) − (${b})(${c}) = ${a*d} − ${b*c} = ${det}`;
        },
      },
      {
        id: 'matrix_inverse_2x2',
        title: 'Inverse of 2×2 Matrix',
        formula: 'A⁻¹ = (1/det) × [[d,−b],[−c,a]]',
        description: 'A⁻¹ = (1/det(A)) × [[d,−b],[−c,a]] where det = ad−bc',
        example: 'A=[[3,2],[1,4]] → det=10 → A⁻¹ = (1/10)[[4,−2],[−1,3]]',
        inputs: [
          { label: 'a  (row 1, col 1)', defaultValue: '3' },
          { label: 'b  (row 1, col 2)', defaultValue: '2' },
          { label: 'c  (row 2, col 1)', defaultValue: '1' },
          { label: 'd  (row 2, col 2)', defaultValue: '4' },
        ],
        compute: (inputs) => {
          const [a, b, c, d] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const det = a * d - b * c;
          if (det === 0) return 'Matrix is singular (det = 0), no inverse exists';
          const r = (x) => Math.round(x / det * 10000) / 10000;
          return `det(A) = ${det}\nA⁻¹ = (1/${det}) × [[${d}, ${-b}], [${-c}, ${a}]]\n     = [[${r(d)}, ${r(-b)}], [${r(-c)}, ${r(a)}]]`;
        },
      },
      {
        id: 'matrix_multiply_2x2',
        title: 'Multiply Two 2×2 Matrices',
        formula: '(AB)ᵢⱼ = Σ Aᵢₖ·Bₖⱼ',
        description: 'Multiply two 2×2 matrices: C = A×B',
        example: '[[1,2],[3,4]] × [[5,6],[7,8]] = [[19,22],[43,50]]',
        inputs: [
          { label: 'A: a₁₁', defaultValue: '1' },
          { label: 'A: a₁₂', defaultValue: '2' },
          { label: 'A: a₂₁', defaultValue: '3' },
          { label: 'A: a₂₂', defaultValue: '4' },
          { label: 'B: b₁₁', defaultValue: '5' },
          { label: 'B: b₁₂', defaultValue: '6' },
          { label: 'B: b₂₁', defaultValue: '7' },
          { label: 'B: b₂₂', defaultValue: '8' },
        ],
        compute: (inputs) => {
          const [a11, a12, a21, a22, b11, b12, b21, b22] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const c11 = a11*b11 + a12*b21;
          const c12 = a11*b12 + a12*b22;
          const c21 = a21*b11 + a22*b21;
          const c22 = a21*b12 + a22*b22;
          return `A×B = [[${a11}×${b11}+${a12}×${b21}, ${a11}×${b12}+${a12}×${b22}],\n      [${a21}×${b11}+${a22}×${b21}, ${a21}×${b12}+${a22}×${b22}]]\n    = [[${c11}, ${c12}], [${c21}, ${c22}]]`;
        },
      },
    ],
  },

  NUMERICAL_METHODS: {
    id: 'numerical_methods',
    title: 'Numerical Methods',
    icon: '≈',
    color: '#556B2F',
    subtopics: [
      {
        id: 'newtons_method',
        title: "Newton-Raphson Method",
        formula: 'xₙ₊₁ = xₙ − f(xₙ)/f\'(xₙ)',
        description: "Iterative method to find roots of f(x)=0. Each iteration: xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)",
        example: 'f(x)=x²−2, x₀=1: x₁=1−(−1/2)=1.5, x₂≈1.4167, ...',
        inputs: [
          { label: 'a (coeff of x²)', defaultValue: '1' },
          { label: 'b (coeff of x)', defaultValue: '0' },
          { label: 'c (constant)', defaultValue: '-2' },
          { label: 'x₀ (initial guess)', defaultValue: '1' },
          { label: 'Iterations (max 5)', defaultValue: '3' },
        ],
        compute: (inputs) => {
          const [a, b, c, x0, iters] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const n = Math.min(Math.max(Math.round(iters), 1), 5);
          const f = (x) => a*x*x + b*x + c;
          const df = (x) => 2*a*x + b;
          let x = x0;
          let log = `f(x) = ${a}x² + ${b}x + ${c}\nx₀ = ${x0}\n`;
          for (let i = 0; i < n; i++) {
            const fx = f(x), dfx = df(x);
            if (dfx === 0) { log += 'Derivative is zero, method fails'; break; }
            const xNew = Math.round((x - fx/dfx) * 100000) / 100000;
            log += `x${i+1} = ${Math.round(x*100000)/100000} − (${Math.round(fx*10000)/10000})/(${Math.round(dfx*10000)/10000}) = ${xNew}\n`;
            x = xNew;
          }
          return log.trim();
        },
      },
      {
        id: 'trapezoid_rule',
        title: 'Trapezoid Rule (Numerical Integration)',
        formula: '∫ ≈ (h/2)[y₀ + 2(y₁+…+yₙ₋₁) + yₙ]',
        description: 'Approximate ∫f(x)dx over [a,b] using the trapezoid rule with n intervals.',
        example: '∫[0 to 1] x² dx with n=4: h=0.25, approx ≈ 0.34375 (exact=1/3)',
        inputs: [
          { label: 'Lower limit a', defaultValue: '0' },
          { label: 'Upper limit b', defaultValue: '1' },
          { label: 'n (number of intervals, max 8)', defaultValue: '4' },
          { label: 'Polynomial coeff a (ax²+bx+c)', defaultValue: '1' },
          { label: 'Polynomial coeff b', defaultValue: '0' },
          { label: 'Polynomial coeff c', defaultValue: '0' },
        ],
        compute: (inputs) => {
          const [lo, hi, nRaw, pa, pb, pc] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const n = Math.min(Math.max(Math.round(nRaw), 1), 8);
          const h = (hi - lo) / n;
          const f = (x) => pa*x*x + pb*x + pc;
          let sum = f(lo) + f(hi);
          for (let i = 1; i < n; i++) sum += 2 * f(lo + i * h);
          const result = Math.round(h / 2 * sum * 100000) / 100000;
          return `f(x) = ${pa}x² + ${pb}x + ${pc}\n[${lo}, ${hi}] with n=${n}, h=${Math.round(h*10000)/10000}\nApproximation ≈ ${result}`;
        },
      },
    ],
  },

  PROBABILITY: {
    id: 'probability',
    title: 'Probability',
    icon: '🎲',
    color: '#8B0000',
    subtopics: [
      {
        id: 'basic_probability',
        title: 'Basic Probability',
        formula: 'P(A) = n(A) / n(S)',
        description: 'P(A) = number of favourable outcomes / total outcomes. Also: P(A) + P(A\') = 1',
        example: 'Drawing a red card from 52: P = 26/52 = 0.5',
        inputs: [
          { label: 'n(A)  (Favourable outcomes)', defaultValue: '26' },
          { label: 'n(S)  (Total outcomes)', defaultValue: '52' },
        ],
        compute: (inputs) => {
          const [nA, nS] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (nS === 0) return 'Total outcomes cannot be zero';
          if (nA > nS) return 'Favourable outcomes cannot exceed total';
          const p = Math.round(nA / nS * 10000) / 10000;
          const q = Math.round((1 - p) * 10000) / 10000;
          return `P(A) = ${nA}/${nS} = ${p}\nP(A\') = 1 − ${p} = ${q}`;
        },
      },
      {
        id: 'addition_rule',
        title: 'Addition Rule of Probability',
        formula: 'P(A∪B) = P(A) + P(B) − P(A∩B)',
        description: 'For non-mutually exclusive events: P(A or B) = P(A) + P(B) − P(A and B)',
        example: 'P(A)=0.4, P(B)=0.5, P(A∩B)=0.2 → P(A∪B) = 0.7',
        inputs: [
          { label: 'P(A)', defaultValue: '0.4' },
          { label: 'P(B)', defaultValue: '0.5' },
          { label: 'P(A∩B)  (0 if mutually exclusive)', defaultValue: '0.2' },
        ],
        compute: (inputs) => {
          const [pA, pB, pAB] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (pA < 0 || pA > 1 || pB < 0 || pB > 1 || pAB < 0) return 'Probabilities must be between 0 and 1';
          const result = Math.round((pA + pB - pAB) * 10000) / 10000;
          return `P(A∪B) = P(A) + P(B) − P(A∩B)\n       = ${pA} + ${pB} − ${pAB}\n       = ${result}`;
        },
      },
      {
        id: 'conditional_probability',
        title: 'Conditional Probability',
        formula: 'P(A|B) = P(A∩B) / P(B)',
        description: 'Probability of A given B has occurred: P(A|B) = P(A∩B)/P(B)',
        example: 'P(A∩B)=0.2, P(B)=0.5 → P(A|B) = 0.4',
        inputs: [
          { label: 'P(A∩B)', defaultValue: '0.2' },
          { label: 'P(B)', defaultValue: '0.5' },
        ],
        compute: (inputs) => {
          const [pAB, pB] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (pB === 0) return 'P(B) cannot be zero';
          const result = Math.round(pAB / pB * 10000) / 10000;
          return `P(A|B) = P(A∩B)/P(B) = ${pAB}/${pB} = ${result}`;
        },
      },
    ],
  },

  POLYNOMIALS: {
    id: 'polynomials',
    title: 'Polynomials',
    icon: 'f(x)',
    color: '#00008B',
    subtopics: [
      {
        id: 'remainder_theorem',
        title: 'Remainder Theorem',
        formula: 'Remainder = f(a) when dividing f(x) by (x−a)',
        description: 'When polynomial f(x) is divided by (x−a), the remainder equals f(a).',
        example: 'f(x)=x³−2x+1 divided by (x−2): f(2)=8−4+1=5 (remainder)',
        inputs: [
          { label: 'a  (coeff of x³)', defaultValue: '1' },
          { label: 'b  (coeff of x²)', defaultValue: '0' },
          { label: 'c  (coeff of x)', defaultValue: '-2' },
          { label: 'd  (constant)', defaultValue: '1' },
          { label: 'k  (divisor is x−k)', defaultValue: '2' },
        ],
        compute: (inputs) => {
          const [a, b, c, d, k] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const r = a*k*k*k + b*k*k + c*k + d;
          const isRoot = r === 0 ? ' → (x−'+k+') is a FACTOR!' : ' → NOT a factor';
          return `f(x) = ${a}x³ + (${b})x² + (${c})x + (${d})\nf(${k}) = ${a}(${k})³ + (${b})(${k})² + (${c})(${k}) + (${d})\n       = ${r}${isRoot}`;
        },
      },
      {
        id: 'partial_fractions',
        title: 'Partial Fractions (Distinct Linear)',
        formula: 'f(x)/[(x−a)(x−b)] = A/(x−a) + B/(x−b)',
        description: 'Decompose a rational function into partial fractions with distinct linear denominator factors.',
        example: '(2x+1)/[(x−1)(x+2)] = A/(x−1) + B/(x+2)  → A=1, B=1',
        inputs: [
          { label: 'p  (numerator coeff of x)', defaultValue: '2' },
          { label: 'q  (numerator constant)', defaultValue: '1' },
          { label: 'a  (root of factor 1: x−a)', defaultValue: '1' },
          { label: 'b  (root of factor 2: x−b)', defaultValue: '-2' },
        ],
        compute: (inputs) => {
          const [p, q, a, b] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (a === b) return 'a and b must be different (distinct factors)';
          const f = (x) => p * x + q;
          const A = f(a) / (a - b);
          const B = f(b) / (b - a);
          const Ar = Math.round(A * 10000) / 10000;
          const Br = Math.round(B * 10000) / 10000;
          return `Numerator f(x) = ${p}x + ${q}\n\nAt x=${a}: A = f(${a})/(${a}−${b}) = ${f(a)}/${a-b} = ${Ar}\nAt x=${b}: B = f(${b})/(${b}−${a}) = ${f(b)}/${b-a} = ${Br}\n\nResult: ${Ar}/(x−${a}) + ${Br}/(x−${b})`;
        },
      },
    ],
  },

  SEQUENCES_SERIES: {
    id: 'sequences_series',
    title: 'Sequences & Series',
    icon: 'Σ',
    color: '#8B4513',
    subtopics: [
      {
        id: 'arithmetic_progression',
        title: 'Arithmetic Progression (AP)',
        formula: 'aₙ = a + (n−1)d,  Sₙ = n/2[2a+(n−1)d]',
        description: 'AP: each term differs by constant d. nth term = a+(n−1)d. Sum of n terms Sₙ = n/2[2a+(n-1)d]',
        example: 'a=2, d=3, n=10: a₁₀=2+9×3=29, S₁₀=10/2[4+27]=155',
        inputs: [
          { label: 'a  (first term)', defaultValue: '2' },
          { label: 'd  (common difference)', defaultValue: '3' },
          { label: 'n  (number of terms)', defaultValue: '10' },
        ],
        compute: (inputs) => {
          const [a, d, n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (n < 1 || !Number.isInteger(n)) return 'n must be a positive integer';
          const nth = a + (n - 1) * d;
          const sum = n / 2 * (2 * a + (n - 1) * d);
          return `AP: a=${a}, d=${d}\nn-th term (n=${n}): aₙ = ${a} + (${n}−1)×${d} = ${nth}\nSum S${n} = ${n}/2 × [2×${a} + (${n}−1)×${d}] = ${sum}`;
        },
      },
      {
        id: 'geometric_progression',
        title: 'Geometric Progression (GP)',
        formula: 'aₙ = a·rⁿ⁻¹,  Sₙ = a(rⁿ−1)/(r−1)',
        description: 'GP: each term is multiplied by constant ratio r. Sₙ = a(rⁿ−1)/(r−1) for r≠1.',
        example: 'a=2, r=3, n=5: a₅=2×3⁴=162, S₅=2(243−1)/2=242',
        inputs: [
          { label: 'a  (first term)', defaultValue: '2' },
          { label: 'r  (common ratio, r≠1)', defaultValue: '3' },
          { label: 'n  (number of terms)', defaultValue: '5' },
        ],
        compute: (inputs) => {
          const [a, r, n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (r === 1) return `GP with r=1 is just a constant sequence: each term = ${a}, sum = ${a*n}`;
          if (n < 1 || !Number.isInteger(n)) return 'n must be a positive integer';
          const nth = Math.round(a * Math.pow(r, n - 1) * 10000) / 10000;
          const sum = Math.round(a * (Math.pow(r, n) - 1) / (r - 1) * 10000) / 10000;
          const conv = Math.abs(r) < 1 ? `\nSum to infinity = ${Math.round(a/(1-r)*10000)/10000}` : '';
          return `GP: a=${a}, r=${r}\nn-th term: aₙ = ${a}×${r}^${n-1} = ${nth}\nSum S${n} = ${a}(${r}^${n}−1)/(${r}−1) = ${sum}${conv}`;
        },
      },
      {
        id: 'binomial_expansion',
        title: 'Binomial Expansion',
        formula: '(1+x)ⁿ = 1 + nx + n(n−1)x²/2! + …',
        description: 'Expand (a+bx)^n using the binomial theorem up to the first 4 terms.',
        example: '(1+x)⁴ = 1 + 4x + 6x² + 4x³ + x⁴',
        inputs: [
          { label: 'a  (constant term)', defaultValue: '1' },
          { label: 'b  (coefficient of x)', defaultValue: '1' },
          { label: 'n  (positive integer power)', defaultValue: '4' },
        ],
        compute: (inputs) => {
          const [a, b, n] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (!Number.isInteger(n) || n < 0) return 'n must be a non-negative integer';
          const C = (n, k) => {
            if (k > n) return 0;
            let res = 1;
            for (let i = 0; i < k; i++) res = res * (n - i) / (i + 1);
            return Math.round(res);
          };
          let terms = [];
          for (let k = 0; k <= Math.min(n, 5); k++) {
            const coef = C(n, k) * Math.pow(a, n - k) * Math.pow(b, k);
            if (k === 0) terms.push(`${coef}`);
            else if (k === 1) terms.push(`${coef}x`);
            else terms.push(`${coef}x^${k}`);
          }
          if (n > 5) terms.push('...');
          return `(${a}+${b}x)^${n} = ${terms.join(' + ')}`;
        },
      },
    ],
  },

  TRIGONOMETRY: {
    id: 'trigonometry',
    title: 'Trigonometry',
    icon: '△',
    color: '#483D8B',
    subtopics: [
      {
        id: 'basic_trig',
        title: 'Basic Trig Ratios (Right Triangle)',
        formula: 'sinθ = opp/hyp,  cosθ = adj/hyp,  tanθ = opp/adj',
        description: 'Given angle θ in degrees, compute sin, cos, tan. Or given two sides, find the angle.',
        example: 'θ=30°: sin30°=0.5, cos30°=√3/2≈0.866, tan30°=1/√3≈0.577',
        inputs: [
          { label: 'θ  (angle in degrees)', defaultValue: '30' },
        ],
        compute: (inputs) => {
          const [theta] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const rad = theta * Math.PI / 180;
          const s = Math.round(Math.sin(rad) * 100000) / 100000;
          const c = Math.round(Math.cos(rad) * 100000) / 100000;
          const t = Math.round(Math.tan(rad) * 100000) / 100000;
          return `θ = ${theta}°\nsin(${theta}°) = ${s}\ncos(${theta}°) = ${c}\ntan(${theta}°) = ${t}`;
        },
      },
      {
        id: 'sine_rule',
        title: 'Sine Rule',
        formula: 'a/sinA = b/sinB = c/sinC',
        description: 'Used when you have: two angles + one side (AAS/ASA), or two sides + non-included angle (SSA).',
        example: 'a=5, A=30°, B=45°: b = a·sinB/sinA = 5×sin45°/sin30° ≈ 7.07',
        inputs: [
          { label: 'a  (side opposite to A)', defaultValue: '5' },
          { label: 'A  (angle in degrees)', defaultValue: '30' },
          { label: 'B  (another angle in degrees)', defaultValue: '45' },
        ],
        compute: (inputs) => {
          const [a, A, B] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const radA = A * Math.PI / 180;
          const radB = B * Math.PI / 180;
          const b = Math.round(a * Math.sin(radB) / Math.sin(radA) * 10000) / 10000;
          const C = 180 - A - B;
          const radC = C * Math.PI / 180;
          const c = Math.round(a * Math.sin(radC) / Math.sin(radA) * 10000) / 10000;
          return `Sine Rule: a/sinA = b/sinB\nb = a×sinB/sinA = ${a}×sin${B}°/sin${A}° = ${b}\nC = 180−${A}−${B} = ${C}°\nc = ${c}`;
        },
      },
      {
        id: 'cosine_rule',
        title: 'Cosine Rule',
        formula: 'a² = b² + c² − 2bc·cosA',
        description: 'Used to find a side (given two sides + included angle) or an angle (given three sides).',
        example: 'b=5, c=7, A=60°: a²=25+49−35=39 → a≈6.24',
        inputs: [
          { label: 'b  (first known side)', defaultValue: '5' },
          { label: 'c  (second known side)', defaultValue: '7' },
          { label: 'A  (included angle in degrees)', defaultValue: '60' },
        ],
        compute: (inputs) => {
          const [b, c, A] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const radA = A * Math.PI / 180;
          const a2 = b*b + c*c - 2*b*c*Math.cos(radA);
          const a = Math.round(Math.sqrt(a2) * 10000) / 10000;
          return `a² = b² + c² − 2bc·cosA\na² = ${b}² + ${c}² − 2(${b})(${c})cos(${A}°)\na² = ${Math.round(a2*10000)/10000}\na = ${a}`;
        },
      },
    ],
  },

  VECTORS: {
    id: 'vectors',
    title: 'Vectors',
    icon: '→',
    color: '#2E8B57',
    subtopics: [
      {
        id: 'vector_magnitude',
        title: 'Magnitude of a Vector',
        formula: '|v| = √(x² + y² + z²)',
        description: 'For 3D vector v = xi + yj + zk, magnitude = √(x²+y²+z²)',
        example: 'v = 3i + 4j + 0k → |v| = √(9+16) = 5',
        inputs: [
          { label: 'x  (i component)', defaultValue: '3' },
          { label: 'y  (j component)', defaultValue: '4' },
          { label: 'z  (k component)', defaultValue: '0' },
        ],
        compute: (inputs) => {
          const [x, y, z] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const mag = Math.round(Math.sqrt(x*x + y*y + z*z) * 10000) / 10000;
          return `v = ${x}i + ${y}j + ${z}k\n|v| = √(${x}² + ${y}² + ${z}²) = √${x*x+y*y+z*z} = ${mag}`;
        },
      },
      {
        id: 'dot_product',
        title: 'Dot Product of Two Vectors',
        formula: 'u·v = x₁x₂ + y₁y₂ + z₁z₂ = |u||v|cosθ',
        description: 'The dot product gives a scalar. Used to find the angle between vectors.',
        example: 'u=2i+j, v=i+3j: u·v = 2+3=5, angle = cos⁻¹(5/(√5·√10)) ≈ 45°',
        inputs: [
          { label: 'x₁  (u, i)', defaultValue: '2' },
          { label: 'y₁  (u, j)', defaultValue: '1' },
          { label: 'z₁  (u, k)', defaultValue: '0' },
          { label: 'x₂  (v, i)', defaultValue: '1' },
          { label: 'y₂  (v, j)', defaultValue: '3' },
          { label: 'z₂  (v, k)', defaultValue: '0' },
        ],
        compute: (inputs) => {
          const [x1, y1, z1, x2, y2, z2] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const dot = x1*x2 + y1*y2 + z1*z2;
          const mag1 = Math.sqrt(x1*x1 + y1*y1 + z1*z1);
          const mag2 = Math.sqrt(x2*x2 + y2*y2 + z2*z2);
          let angleStr = '';
          if (mag1 * mag2 !== 0) {
            const cosTheta = dot / (mag1 * mag2);
            const theta = Math.round(Math.acos(Math.max(-1, Math.min(1, cosTheta))) * 180 / Math.PI * 100) / 100;
            angleStr = `\nAngle between vectors = ${theta}°`;
          }
          return `u·v = (${x1})(${x2}) + (${y1})(${y2}) + (${z1})(${z2}) = ${dot}${angleStr}`;
        },
      },
      {
        id: 'cross_product',
        title: 'Cross Product of Two Vectors',
        formula: 'u×v = |i  j  k; x₁ y₁ z₁; x₂ y₂ z₂|',
        description: 'Cross product gives a vector perpendicular to both. u×v = (y₁z₂−z₁y₂)i − (x₁z₂−z₁x₂)j + (x₁y₂−y₁x₂)k',
        example: 'u=2i−j+6k, v=−3i+5j+k → u×v = −31i−20j+7k',
        inputs: [
          { label: 'x₁  (u, i)', defaultValue: '2' },
          { label: 'y₁  (u, j)', defaultValue: '-1' },
          { label: 'z₁  (u, k)', defaultValue: '6' },
          { label: 'x₂  (v, i)', defaultValue: '-3' },
          { label: 'y₂  (v, j)', defaultValue: '5' },
          { label: 'z₂  (v, k)', defaultValue: '1' },
        ],
        compute: (inputs) => {
          const [x1, y1, z1, x2, y2, z2] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const i = y1*z2 - z1*y2;
          const j = -(x1*z2 - z1*x2);
          const k = x1*y2 - y1*x2;
          return `u×v = (${y1}×${z2}−${z1}×${y2})i − (${x1}×${z2}−${z1}×${x2})j + (${x1}×${y2}−${y1}×${x2})k\n    = ${i}i + (${j})j + ${k}k`;
        },
      },
    ],
  },

  DISCRETE_RV: {
    id: 'discrete_rv',
    title: 'Discrete Random Variables',
    icon: 'X',
    color: '#A0522D',
    subtopics: [
      {
        id: 'expected_value',
        title: 'Expected Value E(X)',
        formula: 'E(X) = Σ x·P(X=x)',
        description: 'Mean of a discrete random variable: E(X) = Σ[x·P(X=x)] over all values x.',
        example: 'X={1,2,3}, P={0.2,0.5,0.3} → E(X)=0.2+1.0+0.9=2.1',
        inputs: [
          { label: 'x₁ (value 1)', defaultValue: '1' },
          { label: 'P(X=x₁)', defaultValue: '0.2' },
          { label: 'x₂ (value 2)', defaultValue: '2' },
          { label: 'P(X=x₂)', defaultValue: '0.5' },
          { label: 'x₃ (value 3)', defaultValue: '3' },
          { label: 'P(X=x₃)', defaultValue: '0.3' },
        ],
        compute: (inputs) => {
          const vals = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          const [x1, p1, x2, p2, x3, p3] = vals;
          const totalP = Math.round((p1+p2+p3)*10000)/10000;
          if (Math.abs(totalP - 1) > 0.001) return `Probabilities must sum to 1 (currently ${totalP})`;
          const E = Math.round((x1*p1 + x2*p2 + x3*p3) * 10000) / 10000;
          const E2 = Math.round((x1*x1*p1 + x2*x2*p2 + x3*x3*p3) * 10000) / 10000;
          const Var = Math.round((E2 - E*E) * 10000) / 10000;
          return `E(X) = ${x1}×${p1} + ${x2}×${p2} + ${x3}×${p3} = ${E}\nE(X²) = ${E2}\nVar(X) = E(X²) − [E(X)]² = ${E2} − ${E*E} = ${Var}\nSD = √Var = ${Math.round(Math.sqrt(Math.abs(Var))*10000)/10000}`;
        },
      },
      {
        id: 'binomial_distribution',
        title: 'Binomial Distribution',
        formula: 'P(X=r) = C(n,r)·pʳ·(1−p)ⁿ⁻ʳ',
        description: 'X~B(n,p): n independent trials, p = probability of success each trial.',
        example: 'n=5, p=0.4, r=2: P(X=2) = C(5,2)·0.4²·0.6³ = 0.3456',
        inputs: [
          { label: 'n  (number of trials)', defaultValue: '5' },
          { label: 'p  (probability of success)', defaultValue: '0.4' },
          { label: 'r  (number of successes)', defaultValue: '2' },
        ],
        compute: (inputs) => {
          const [n, p, r] = inputs.map(Number);
          if (inputs.some(v => v.trim() === '' || isNaN(Number(v)))) return 'Fill all fields with numbers';
          if (p < 0 || p > 1) return 'p must be between 0 and 1';
          if (r > n || r < 0 || !Number.isInteger(n) || !Number.isInteger(r)) return 'r must be 0 ≤ r ≤ n (integers)';
          const C = (n, k) => { let res=1; for(let i=0;i<k;i++) res=res*(n-i)/(i+1); return Math.round(res); };
          const prob = Math.round(C(n,r) * Math.pow(p,r) * Math.pow(1-p, n-r) * 100000) / 100000;
          const mean = Math.round(n*p*10000)/10000;
          const variance = Math.round(n*p*(1-p)*10000)/10000;
          return `X~B(${n}, ${p})\nP(X=${r}) = C(${n},${r})×${p}^${r}×${1-p}^${n-r}\n           = ${C(n,r)}×${Math.round(Math.pow(p,r)*100000)/100000}×${Math.round(Math.pow(1-p,n-r)*100000)/100000}\n           = ${prob}\nMean E(X) = np = ${mean}\nVariance = np(1−p) = ${variance}`;
        },
      },
    ],
  },
};

export default topicsLearning;
