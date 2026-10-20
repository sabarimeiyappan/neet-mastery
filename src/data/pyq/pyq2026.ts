import { PYQPaper, PYQQuestion } from './types';

// ==========================================
// NEET 2026 (PHASE 1) - FULL SUBJECT PAPERS
// ==========================================

export const NEET_2026_PHASE1_PHYSICS: PYQPaper = {
  id: 'neet-2026-p1-physics',
  yearLabel: 'NEET 2026 (Phase 1)',
  yearNumber: 2026,
  phase: 'Phase 1',
  subject: 'Physics',
  totalQuestions: 50,
  durationMinutes: 45,
  questions: [
    // --- SECTION A (Q1 to Q35) ---
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The dimensions of critical velocity vc of a liquid flowing through a tube are expressed as [η^x ρ^y r^z], where η is coefficient of viscosity, ρ is density of liquid, and r is radius of tube. The values of x, y and z respectively are:",
      options: {
        A: "1, -1, -1",
        B: "1, 1, -1",
        C: "-1, -1, 1",
        D: "1, -1, 1"
      },
      correct_answer: "A",
      explanation: "Reynolds number formula: vc = (R_e * η) / (ρ * r). Dimensions of η = [M L^-1 T^-1], ρ = [M L^-3], r = [L]. Equating powers gives x = 1, y = -1, z = -1.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Units and Measurements",
        official_section: "Section 1.7: Dimensional Analysis and its Applications",
        page_number: "Page 24",
        exact_quote: "Dimensional analysis can be used to deduce relations among physical quantities."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A body of mass 2 kg moving with an initial velocity of 10 m/s collides head-on with a stationary body of mass 3 kg. If the collision is perfectly elastic, the velocity of the 2 kg body after collision is:",
      options: {
        A: "-2 m/s",
        B: "+2 m/s",
        C: "-4 m/s",
        D: "0 m/s"
      },
      correct_answer: "A",
      explanation: "v1 = [(m1 - m2)/(m1 + m2)]*u1 + [2*m2/(m1 + m2)]*u2. Here u2 = 0. v1 = [(2 - 3)/(2 + 3)] * 10 = (-1/5) * 10 = -2 m/s.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Work, Energy and Power",
        official_section: "Section 5.12: Collisions in One Dimension",
        page_number: "Page 129",
        exact_quote: "In a one-dimensional elastic collision, velocities after collision are given by conservation of momentum and kinetic energy."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Statement I: The centre of mass of a body must always lie inside the physical material of the body.\nStatement II: For a uniform hollow sphere or a ring, the centre of mass lies at the geometric centre where there is no mass.\nChoose the correct option:",
      options: {
        A: "Statement I is incorrect but Statement II is correct",
        B: "Both Statement I and Statement II are correct",
        C: "Statement I is correct but Statement II is incorrect",
        D: "Both Statement I and Statement II are incorrect"
      },
      correct_answer: "A",
      explanation: "Centre of mass does not necessarily lie within the physical boundaries of the matter (e.g. ring, hollow sphere, horseshoe magnet). Statement I is false and Statement II is true.",
      ncert_reference: {
        class: "Class 11",
        chapter: "System of Particles and Rotational Motion",
        official_section: "Section 6.2: Centre of Mass",
        page_number: "Page 144",
        exact_quote: "The centre of mass of a body need not necessarily lie within the body."
      },
      question_type: "Statement I & II"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The escape velocity from the surface of Earth is ve = 11.2 km/s. If a planet has twice the radius of Earth and four times its mass, the escape velocity from the planet's surface is:",
      options: {
        A: "15.84 km/s (11.2 * sqrt(2))",
        B: "22.4 km/s",
        C: "11.2 km/s",
        D: "5.6 km/s"
      },
      correct_answer: "A",
      explanation: "ve = sqrt(2GM / R). For the new planet: ve' = sqrt(2G(4M) / (2R)) = sqrt(2) * ve = 11.2 * 1.414 ≈ 15.84 km/s.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Gravitation",
        official_section: "Section 7.6: Escape Speed",
        page_number: "Page 193",
        exact_quote: "The escape speed from the surface of Earth is ve = √(2GM/RE)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "According to Bernoulli's principle, for a streamline flow of an incompressible non-viscous fluid, along a streamline:",
      options: {
        A: "p + (1/2) ρ v^2 + ρ g h = Constant",
        B: "p + ρ v^2 + ρ g h = Constant",
        C: "p / ρ + v^2 + g h = Constant",
        D: "p + (1/2) ρ v + ρ g h^2 = Constant"
      },
      correct_answer: "A",
      explanation: "Bernoulli's theorem states: p + (1/2)ρv^2 + ρgh = constant along a streamline for an ideal fluid.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Mechanical Properties of Fluids",
        official_section: "Section 9.4: Bernoulli's Principle",
        page_number: "Page 258",
        exact_quote: "Bernoulli's equation states that the sum of pressure, kinetic energy per unit volume, and potential energy per unit volume remains constant."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In an adiabatic expansion of an ideal gas, the relation between temperature T and volume V is given by:",
      options: {
        A: "T * V^(γ - 1) = Constant",
        B: "T * V^γ = Constant",
        C: "T^(γ - 1) * V = Constant",
        D: "T / V^(γ - 1) = Constant"
      },
      correct_answer: "A",
      explanation: "For an adiabatic process, P*V^γ = constant. Since P = nRT/V, substituting gives T * V^(γ - 1) = constant.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Thermodynamics",
        official_section: "Section 11.8: Thermodynamic Processes (Adiabatic Process)",
        page_number: "Page 311",
        exact_quote: "For an adiabatic process of an ideal gas, TV^(γ-1) = constant."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A simple pendulum executes SHM with time period T. If its length is increased by 21%, the percentage increase in its time period is:",
      options: {
        A: "10%",
        B: "21%",
        C: "10.5%",
        D: "4.5%"
      },
      correct_answer: "A",
      explanation: "T = 2π * sqrt(L / g). T' / T = sqrt(1.21 L / L) = 1.10. Percentage increase = (1.10 - 1) * 100% = 10%.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Oscillations",
        official_section: "Section 13.6: The Simple Pendulum",
        page_number: "Page 351",
        exact_quote: "The period of a simple pendulum is T = 2π√(L/g)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Two point charges +4q and +q are placed at a distance L apart. A third charge Q is placed at a distance x from +4q on the line joining them. For Q to be in electrostatic equilibrium, x must be:",
      options: {
        A: "2L / 3",
        B: "L / 3",
        C: "L / 2",
        D: "3L / 4"
      },
      correct_answer: "A",
      explanation: "For net force on Q to be zero: k*(4q)*Q / x^2 = k*q*Q / (L - x)^2 => 2 / x = 1 / (L - x) => 2L - 2x = x => 3x = 2L => x = 2L / 3.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electric Charges and Fields",
        official_section: "Section 1.6: Coulomb's Law",
        page_number: "Page 15",
        exact_quote: "Coulomb's force between two charges is directly proportional to product of charges and inversely proportional to square of distance."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 9,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A parallel plate capacitor with air between the plates has capacitance C0. A dielectric slab of dielectric constant K and thickness equal to half the plate separation (d/2) is inserted. The new capacitance is:",
      options: {
        A: "[2K / (K + 1)] * C0",
        B: "[(K + 1) / 2K] * C0",
        C: "(K + 1) * C0",
        D: "2K * C0"
      },
      correct_answer: "A",
      explanation: "C = ε0*A / (d - t + t/K) = ε0*A / (d - d/2 + d/(2K)) = ε0*A / [d/2 * (1 + 1/K)] = (2 ε0 A / d) * [K / (K + 1)] = [2K / (K + 1)] * C0.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electrostatic Potential and Capacitance",
        official_section: "Section 2.12: Capacitors with Dielectrics",
        page_number: "Page 77",
        exact_quote: "When a dielectric slab of thickness t is introduced, capacitance increases to C = ε0A / [d - t(1 - 1/K)]."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 10,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A cylindrical wire of radius r and length L has resistance R. If it is stretched uniformly so that its radius becomes r/2, its new resistance will be:",
      options: {
        A: "16 R",
        B: "4 R",
        C: "8 R",
        D: "2 R"
      },
      correct_answer: "A",
      explanation: "Volume V = A * L = constant. When r' = r/2, area A' = A/4. Thus length L' = 4L. R' = ρ * L' / A' = ρ * 4L / (A/4) = 16 R.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        official_section: "Section 3.5: Resistivity and Resistance",
        page_number: "Page 97",
        exact_quote: "Resistance is R = ρ l / A. Stretching changes length and cross-sectional area inversely keeping volume constant."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 11,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A circular coil of radius R carries a current I. The ratio of the magnetic field at the centre of the coil to that at a point on its axis at a distance R from the centre is:",
      options: {
        A: "2 * sqrt(2) : 1",
        B: "2 : 1",
        C: "sqrt(2) : 1",
        D: "4 : 1"
      },
      correct_answer: "A",
      explanation: "B_centre = μ0*I / (2R). B_axis = μ0*I*R^2 / [2*(R^2 + x^2)^(3/2)]. At x = R: B_axis = μ0*I*R^2 / [2*(2R^2)^(3/2)] = μ0*I / [2 * 2^(3/2) * R] = B_centre / (2*sqrt(2)). Ratio is 2*sqrt(2) : 1.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Moving Charges and Magnetism",
        official_section: "Section 4.6: Magnetic Field on the Axis of a Circular Current Loop",
        page_number: "Page 146",
        exact_quote: "Equation (4.16): B = μ0 I R^2 / [2(x^2 + R^2)^(3/2)]."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 12,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Which of the following materials is diamagnetic, having negative magnetic susceptibility (χ < 0) and relative permeability slightly less than 1?",
      options: {
        A: "Bismuth and Copper",
        B: "Aluminium and Sodium",
        C: "Iron and Cobalt",
        D: "Gadolinium and Nickel"
      },
      correct_answer: "A",
      explanation: "Bismuth, copper, lead, water, and silicon are diamagnetic substances with χ < 0 and μr < 1.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Magnetism and Matter",
        official_section: "Section 5.4: Diamagnetism",
        page_number: "Page 191",
        exact_quote: "Bismuth, copper, lead, silicon, nitrogen, water and sodium chloride are diamagnetic substances."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Lenz's law of electromagnetic induction is a direct consequence of which fundamental conservation law?",
      options: {
        A: "Law of conservation of energy",
        B: "Law of conservation of charge",
        C: "Law of conservation of momentum",
        D: "Law of conservation of mass"
      },
      correct_answer: "A",
      explanation: "Lenz's law provides the direction of induced EMF opposing the change in magnetic flux. Mechanical work done against this opposing magnetic force is transformed into electrical energy, satisfying energy conservation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electromagnetic Induction",
        official_section: "Section 6.4: Lenz's Law and Conservation of Energy",
        page_number: "Page 210",
        exact_quote: "Lenz's law is a consequence of the law of conservation of energy."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In a series LCR circuit at resonance, which of the following conditions is TRUE?",
      options: {
        A: "Impedance Z is minimum (Z = R) and current amplitude is maximum",
        B: "Inductive reactance XL is zero",
        C: "Current is out of phase with applied voltage by π/2",
        D: "Impedance Z is infinite"
      },
      correct_answer: "A",
      explanation: "At electrical resonance in series LCR: XL = XC, impedance Z = sqrt(R^2 + (XL - XC)^2) = R (minimum), power factor cos φ = 1, and current is maximum and in phase with voltage.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alternating Current",
        official_section: "Section 7.6: Resonance in LCR Circuits",
        page_number: "Page 248",
        exact_quote: "At resonance, Z = R and the current amplitude is maximum: Im = Vm / R."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 15,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In Young's double slit experiment, if the separation between the slits is halved and the distance between the screen and slits is doubled, the fringe width becomes:",
      options: {
        A: "4 times",
        B: "2 times",
        C: "Halved",
        D: "Unchanged"
      },
      correct_answer: "A",
      explanation: "Fringe width β = λ * D / d. If d' = d/2 and D' = 2D, β' = λ * (2D) / (d/2) = 4 * (λ D / d) = 4β.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Wave Optics",
        official_section: "Section 10.4: Interference of Light Waves",
        page_number: "Page 364",
        exact_quote: "The fringe width is given by β = λ D / d."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 16,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "According to Einstein's photoelectric equation, the maximum kinetic energy Kmax of emitted photoelectrons depends linearly on:",
      options: {
        A: "Frequency of incident radiation",
        B: "Intensity of incident radiation",
        C: "Time of exposure",
        D: "Square root of incident wavelength"
      },
      correct_answer: "A",
      explanation: "Kmax = h ν - Φ0. Maximum kinetic energy depends strictly on the frequency ν of incident radiation and metal work function Φ0, completely independent of intensity.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Dual Nature of Radiation and Matter",
        official_section: "Section 11.6: Einstein's Photoelectric Equation",
        page_number: "Page 395",
        exact_quote: "Kmax depends linearly on frequency ν and is independent of intensity of radiation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The de Broglie wavelength of an electron accelerated from rest through a potential difference of V volts is given by:",
      options: {
        A: "λ = 1.227 / sqrt(V) nm",
        B: "λ = 12.27 / sqrt(V) nm",
        C: "λ = 0.1227 / V nm",
        D: "λ = sqrt(V) / 1.227 nm"
      },
      correct_answer: "A",
      explanation: "λ = h / sqrt(2 m e V) = 1.227 / sqrt(V) nm (or 12.27 / sqrt(V) Angstroms).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Dual Nature of Radiation and Matter",
        official_section: "Section 11.8: Wave Nature of Matter",
        page_number: "Page 400",
        exact_quote: "For an electron, λ = h / p = 1.227 / √V nm."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In Bohr's model of the hydrogen atom, the total energy of an electron in an orbit of principal quantum number n is proportional to:",
      options: {
        A: "1 / n^2",
        B: "1 / n",
        C: "n^2",
        D: "-n"
      },
      correct_answer: "A",
      explanation: "En = -13.6 eV / n^2. The energy levels are inversely proportional to n^2.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Atoms",
        official_section: "Section 12.4: Bohr Model of the Hydrogen Atom",
        page_number: "Page 425",
        exact_quote: "Equation (12.21): En = -13.6 / n^2 eV."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The half-life of a radioactive isotope is 20 days. The fraction of the original activity remaining after 60 days is:",
      options: {
        A: "1 / 8",
        B: "1 / 4",
        C: "1 / 16",
        D: "1 / 3"
      },
      correct_answer: "A",
      explanation: "Number of half-lives n = t / T1/2 = 60 / 20 = 3. Remaining fraction = (1/2)^3 = 1/8.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Nuclei",
        official_section: "Section 13.6: Radioactive Decays",
        page_number: "Page 446",
        exact_quote: "After n half-lives, the number of nuclei remaining is N = N0 (1/2)^n."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 20,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In an unbiased p-n junction, the diffusion current is directed from:",
      options: {
        A: "p-side to n-side",
        B: "n-side to p-side",
        C: "Zero at all times",
        D: "Both ways equally"
      },
      correct_answer: "A",
      explanation: "Due to concentration gradient, holes diffuse from p-region to n-region, and electrons from n-region to p-region. Both contribute to a diffusion current directed from p-side to n-side.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        official_section: "Section 14.4: p-n Junction",
        page_number: "Page 478",
        exact_quote: "The motion of charge carriers gives rise to diffusion current from p-side to n-side."
      },
      question_type: "Direct Fact"
    },

    // --- CONTINUING SECTION A (Q21 to Q35) ---
    {
      question_number: 21,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A car accelerates from rest at a constant rate α for some time, after which it decelerates at a constant rate β to come to rest. If total time elapsed is t, the maximum velocity attained is:",
      options: {
        A: "vmax = (α * β * t) / (α + β)",
        B: "vmax = (α + β) * t / (α * β)",
        C: "vmax = sqrt(α * β) * t",
        D: "vmax = (α * t) / β"
      },
      correct_answer: "A",
      explanation: "t = t1 + t2 = vmax/α + vmax/β = vmax * (α + β) / (α * β) => vmax = (α * β * t) / (α + β).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Motion in a Straight Line",
        official_section: "Section 2.5: Kinematic Equations for Uniformly Accelerated Motion",
        page_number: "Page 47",
        exact_quote: "Equations of motion with constant acceleration yield v = v0 + at."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 22,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A projectile is thrown with speed u at an angle θ with the horizontal. The radius of curvature of its trajectory at the highest point is:",
      options: {
        A: "u^2 * cos^2(θ) / g",
        B: "u^2 / g",
        C: "u^2 * sin^2(θ) / g",
        D: "u^2 * cos(θ) / g"
      },
      correct_answer: "A",
      explanation: "At the highest point, speed is purely horizontal (v = u cos θ) and normal acceleration is g. Radius of curvature R = v^2 / an = (u cos θ)^2 / g = u^2 cos^2(θ) / g.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Motion in a Plane",
        official_section: "Section 3.7: Projectile Motion",
        page_number: "Page 77",
        exact_quote: "At the peak of projectile motion, the vertical component of velocity is zero."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 23,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The moment of inertia of a uniform solid cylinder of mass M and radius R about its own central axis of symmetry is:",
      options: {
        A: "(1/2) M R^2",
        B: "M R^2",
        C: "(2/5) M R^2",
        D: "(1/12) M R^2"
      },
      correct_answer: "A",
      explanation: "For a solid cylinder or disc about central axis: I = (1/2) M R^2.",
      ncert_reference: {
        class: "Class 11",
        chapter: "System of Particles and Rotational Motion",
        official_section: "Section 6.10: Moment of Inertia (Table 6.1)",
        page_number: "Page 164",
        exact_quote: "Table 6.1: Moments of Inertia: Solid cylinder about its axis is (1/2)MR^2."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 24,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A wire of natural length L and cross-sectional area A is stretched by a force F, producing elongation ΔL. The elastic potential energy stored per unit volume of the wire is:",
      options: {
        A: "(1/2) * Stress * Strain",
        B: "Stress * Strain",
        C: "(1/2) * Stress / Strain",
        D: "Strain / (2 * Stress)"
      },
      correct_answer: "A",
      explanation: "Energy density u = U / Volume = (1/2) * (F * ΔL) / (A * L) = (1/2) * Stress * Strain.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Mechanical Properties of Solids",
        official_section: "Section 8.6: Elastic Potential Energy in a Stretched Wire",
        page_number: "Page 237",
        exact_quote: "Elastic energy density = (1/2) x stress x strain."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 25,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Excess pressure inside a spherical soap bubble of radius R in air with surface tension T is:",
      options: {
        A: "4T / R",
        B: "2T / R",
        C: "T / R",
        D: "8T / R"
      },
      correct_answer: "A",
      explanation: "A soap bubble has two liquid-gas interfaces (inner and outer). Thus ΔP = 2 * (2T / R) = 4T / R. For a liquid drop, ΔP = 2T / R.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Mechanical Properties of Fluids",
        official_section: "Section 9.6: Surface Tension (Excess Pressure)",
        page_number: "Page 264",
        exact_quote: "A soap bubble has two surfaces. The excess pressure is ΔP = 4S/r."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 26,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Two rods of identical dimensions have thermal conductivities K1 and K2. When connected end to end in series, the equivalent thermal conductivity Keq is:",
      options: {
        A: "2 K1 K2 / (K1 + K2)",
        B: "(K1 + K2) / 2",
        C: "sqrt(K1 * K2)",
        D: "K1 K2 / (K1 + K2)"
      },
      correct_answer: "A",
      explanation: "Equivalent resistance Req = R1 + R2 => 2L / (Keq * A) = L / (K1 * A) + L / (K2 * A) => 2 / Keq = 1/K1 + 1/K2 => Keq = 2 K1 K2 / (K1 + K2).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Thermal Properties of Matter",
        official_section: "Section 10.9: Heat Transfer (Conduction)",
        page_number: "Page 289",
        exact_quote: "Thermal resistance is R = L / (KA). For series combination, R = R1 + R2."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 27,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The molar specific heat capacity of a monoatomic ideal gas at constant volume (Cv) is:",
      options: {
        A: "(3/2) R",
        B: "(5/2) R",
        C: "(7/2) R",
        D: "3 R"
      },
      correct_answer: "A",
      explanation: "Monoatomic gas has 3 translational degrees of freedom: U = (3/2) n R T, so Cv = dU/dT = (3/2) R.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Kinetic Theory",
        official_section: "Section 12.4: Specific Heat Capacity",
        page_number: "Page 331",
        exact_quote: "For a monoatomic gas, Cv = (3/2)R and Cp = (5/2)R."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 28,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In an organ pipe open at both ends, the fundamental frequency is f0. The frequency of its third harmonic is:",
      options: {
        A: "3 f0",
        B: "2 f0",
        C: "5 f0",
        D: "4 f0"
      },
      correct_answer: "A",
      explanation: "An open organ pipe produces all harmonics: f_n = n * f0 (n = 1, 2, 3...). The third harmonic corresponds to n = 3, so frequency is 3 f0.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Waves",
        official_section: "Section 14.8: Standing Waves and Normal Modes",
        page_number: "Page 379",
        exact_quote: "For an open pipe, frequencies are integer multiples of the fundamental: fn = n v / (2L)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 29,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Electric flux through a closed Gaussian surface enclosing no net charge is:",
      options: {
        A: "Zero",
        B: "q / ε0",
        C: "Infinite",
        D: "Dependent on surface area"
      },
      correct_answer: "A",
      explanation: "By Gauss's Law: Φ = q_enclosed / ε0. If q_enclosed = 0, the net electric flux is zero.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electric Charges and Fields",
        official_section: "Section 1.14: Gauss's Law",
        page_number: "Page 34",
        exact_quote: "Gauss's law states that total electric flux through a closed surface is equal to q_enclosed / ε0."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 30,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Equipotential surfaces due to an isolated single point charge are:",
      options: {
        A: "Concentric spheres centred on the charge",
        B: "Concentric cylinders",
        C: "Parallel planes",
        D: "Paraboloids"
      },
      correct_answer: "A",
      explanation: "Potential V = k * q / r is constant for a given distance r. Hence equipotential surfaces are concentric spheres centered on the point charge.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electrostatic Potential and Capacitance",
        official_section: "Section 2.4: Equipotential Surfaces",
        page_number: "Page 60",
        exact_quote: "For a point charge, the equipotential surfaces are concentric spherical surfaces centred at the charge."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 31,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A meter bridge wire of length 100 cm is balanced at 40 cm when a resistance R is in the left gap and standard resistance S = 6 Ω is in the right gap. The value of R is:",
      options: {
        A: "4 Ω",
        B: "9 Ω",
        C: "6 Ω",
        D: "3 Ω"
      },
      correct_answer: "A",
      explanation: "R / S = l1 / (100 - l1) => R / 6 = 40 / 60 = 2/3 => R = 6 * (2/3) = 4 Ω.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        official_section: "Section 3.10: Wheatstone Bridge and Meter Bridge",
        page_number: "Page 120",
        exact_quote: "At balance point of a meter bridge, R / S = l1 / (100 - l1)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 32,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "To convert a galvanometer of resistance G and full-scale deflection current Ig into a voltmeter of range V, the required series resistance R is:",
      options: {
        A: "R = (V / Ig) - G",
        B: "R = (V / Ig) + G",
        C: "R = (Ig / V) - G",
        D: "R = V * Ig - G"
      },
      correct_answer: "A",
      explanation: "V = Ig * (G + R) => G + R = V / Ig => R = (V / Ig) - G.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Moving Charges and Magnetism",
        official_section: "Section 4.11: The Moving Coil Galvanometer",
        page_number: "Page 165",
        exact_quote: "To convert a galvanometer into a voltmeter, a high resistance R is connected in series."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 33,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Self-inductance of a long solenoid of length l, cross-sectional area A, and total turns N is given by:",
      options: {
        A: "L = μ0 * N^2 * A / l",
        B: "L = μ0 * N * A / l",
        C: "L = μ0 * N^2 * A * l",
        D: "L = μ0 * N * A * l"
      },
      correct_answer: "A",
      explanation: "L = Φ / I = (B * A * N) / I = (μ0 * (N/l) * I * A * N) / I = μ0 * N^2 * A / l.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electromagnetic Induction",
        official_section: "Section 6.9: Inductance (Self-inductance)",
        page_number: "Page 223",
        exact_quote: "Equation (6.17): L = μ0 N^2 A / l for a long solenoid."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 34,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Displacement current ID across the plates of a charging capacitor is given by Maxwell's formula:",
      options: {
        A: "ID = ε0 * (dΦE / dt)",
        B: "ID = μ0 * (dΦE / dt)",
        C: "ID = ε0 * (dΦB / dt)",
        D: "ID = (1 / ε0) * (dΦE / dt)"
      },
      correct_answer: "A",
      explanation: "Maxwell introduced displacement current ID = ε0 * (dΦE / dt) to resolve Ampere's circuital law inconsistency.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electromagnetic Waves",
        official_section: "Section 8.2: Displacement Current",
        page_number: "Page 270",
        exact_quote: "Equation (8.4): id = ε0 dΦE/dt is called displacement current."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 35,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A ray of light enters a glass slab of refractive index 1.5 at Brewster's angle. The angle between the reflected ray and refracted ray is:",
      options: {
        A: "90°",
        B: "60°",
        C: "45°",
        D: "180°"
      },
      correct_answer: "A",
      explanation: "At Brewster's angle of incidence, the reflected and refracted rays are perpendicular to each other (angle = 90°).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Wave Optics",
        official_section: "Section 10.7: Polarisation by Reflection (Brewster's Law)",
        page_number: "Page 378",
        exact_quote: "When light is incident at Brewster's angle, the reflected and refracted rays are mutually perpendicular."
      },
      question_type: "Direct Fact"
    },

    // --- SECTION B (Q36 to Q50 - Attempt any 10 in NEET) ---
    {
      question_number: 36,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Two coherent sources of light have intensities I and 4I. The ratio of maximum to minimum intensity in their interference pattern is:",
      options: {
        A: "9 : 1",
        B: "25 : 9",
        C: "5 : 1",
        D: "4 : 1"
      },
      correct_answer: "A",
      explanation: "Imax = (sqrt(4I) + sqrt(I))^2 = (2 + 1)^2 * I = 9I. Imin = (sqrt(4I) - sqrt(I))^2 = (2 - 1)^2 * I = 1I. Ratio = 9 : 1.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Wave Optics",
        official_section: "Section 10.4: Interference of Light Waves",
        page_number: "Page 363",
        exact_quote: "Imax = (√I1 + √I2)^2 and Imin = (√I1 - √I2)^2."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 37,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The threshold wavelength for photoelectric emission from a metal is 600 nm. When illuminated with light of wavelength 400 nm, stopping potential is V0. The stopping potential when illuminated with 300 nm light will be:",
      options: {
        A: "Greater than V0",
        B: "Equal to V0",
        C: "Less than V0",
        D: "Zero"
      },
      correct_answer: "A",
      explanation: "e V0 = hc * (1/λ - 1/λ0). As λ decreases from 400 nm to 300 nm, 1/λ increases, increasing photon energy and stopping potential.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Dual Nature of Radiation and Matter",
        official_section: "Section 11.6: Photoelectric Effect",
        page_number: "Page 396",
        exact_quote: "Stopping potential increases with increasing frequency (decreasing wavelength) of incident light."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 38,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In the nuclear reaction 7_Li_3 + 1_p_1 -> 2 * (4_He_2) + Q, mass of Li, p, and He are 7.0160 u, 1.0078 u, and 4.0026 u. The Q-value released is approximately:",
      options: {
        A: "17.3 MeV",
        B: "8.5 MeV",
        C: "25.2 MeV",
        D: "5.1 MeV"
      },
      correct_answer: "A",
      explanation: "Δm = (7.0160 + 1.0078) - 2 * 4.0026 = 8.0238 - 8.0052 = 0.0186 u. Q = 0.0186 * 931.5 MeV ≈ 17.3 MeV.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Nuclei",
        official_section: "Section 13.5: Mass-Energy and Nuclear Binding Energy",
        page_number: "Page 442",
        exact_quote: "Energy equivalent of 1 u is 931.5 MeV."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 39,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Which logic gate gives output Y = 1 ONLY when both inputs A and B are 0?",
      options: {
        A: "NOR gate",
        B: "NAND gate",
        C: "AND gate",
        D: "OR gate"
      },
      correct_answer: "A",
      explanation: "For NOR gate: Y = not(A or B). If A=0 and B=0, Y = 1. For any other combination, Y = 0.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        official_section: "Section 14.8: Digital Electronics and Logic Gates",
        page_number: "Page 502",
        exact_quote: "The NOR gate output is 1 only when both inputs A and B are 0."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 40,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A satellite orbits Earth at altitude h = R (Earth radius). The orbital velocity of the satellite is:",
      options: {
        A: "sqrt(g R / 2)",
        B: "sqrt(g R)",
        C: "sqrt(2 g R)",
        D: "g R / 2"
      },
      correct_answer: "A",
      explanation: "v0 = sqrt(GM / r) = sqrt(GM / (R + h)). With h = R, r = 2R. Since GM = g R^2: v0 = sqrt(g R^2 / 2R) = sqrt(g R / 2).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Gravitation",
        official_section: "Section 7.7: Earth Satellites",
        page_number: "Page 194",
        exact_quote: "Orbital speed is v0 = √(GM / (RE + h))."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 41,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Two capacitors of capacitances 2 μF and 6 μF are connected in series across 120 V. The charge on the 2 μF capacitor is:",
      options: {
        A: "180 μC",
        B: "240 μC",
        C: "120 μC",
        D: "360 μC"
      },
      correct_answer: "A",
      explanation: "Equivalent capacitance Ceq = (2 * 6) / (2 + 6) = 12 / 8 = 1.5 μF. Total charge Q = Ceq * V = 1.5 * 120 = 180 μC. In series, charge on both capacitors is identical.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electrostatic Potential and Capacitance",
        official_section: "Section 2.14: Combination of Capacitors",
        page_number: "Page 79",
        exact_quote: "In a series combination, the charge Q on each capacitor is the same."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 42,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A convex lens of focal length 20 cm is cut along the diameter into two equal plano-convex halves. The focal length of each half is:",
      options: {
        A: "40 cm",
        B: "20 cm",
        C: "10 cm",
        D: "80 cm"
      },
      correct_answer: "A",
      explanation: "For original equiconvex lens: 1/f = (n - 1)(2/R) = 1/20. For each half: 1/f' = (n - 1)(1/R) = (1/2) * (1/f) = 1/40 => f' = 40 cm.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.2: Refraction by a Lens",
        page_number: "Page 327",
        exact_quote: "When a lens is cut perpendicular to principal axis, focal length of each half doubles."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 43,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The power transmitted by an AC circuit is zero if the phase difference φ between current and voltage is:",
      options: {
        A: "π / 2",
        B: "0",
        C: "π",
        D: "π / 4"
      },
      correct_answer: "A",
      explanation: "P = Vrms * Irms * cos(φ). When φ = π/2 (purely inductive or capacitive circuit), cos(π/2) = 0, giving zero power (wattless current).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alternating Current",
        official_section: "Section 7.7: Power in AC Circuit",
        page_number: "Page 252",
        exact_quote: "If φ = π/2, power is zero. The current in this case is called wattless current."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 44,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In an electromagnetic wave traveling along the +x direction, if the electric field oscillates along the +y direction, the magnetic field must oscillate along the:",
      options: {
        A: "+z direction",
        B: "-y direction",
        C: "+x direction",
        D: "-z direction"
      },
      correct_answer: "A",
      explanation: "Poynting vector S = (1/μ0) * (E x B) points in direction of wave propagation (+x). Since E is along +y (j^) and (j^ x k^ = i^), B must be along +z (k^).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electromagnetic Waves",
        official_section: "Section 8.3: Nature of Electromagnetic Waves",
        page_number: "Page 275",
        exact_quote: "The direction of propagation of EM waves is given by the vector cross product E x B."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 45,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The ratio of minimum wavelength of Lyman series to minimum wavelength of Balmer series in hydrogen spectrum is:",
      options: {
        A: "1 : 4",
        B: "1 : 2",
        C: "4 : 1",
        D: "1 : 9"
      },
      correct_answer: "A",
      explanation: "For series limit (n = ∞): 1/λ_Lyman = R * (1/1^2) = R. 1/λ_Balmer = R * (1/2^2) = R/4. Therefore λ_Lyman / λ_Balmer = (1/R) / (4/R) = 1/4.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Atoms",
        official_section: "Section 12.5: Line Spectra of the Hydrogen Atom",
        page_number: "Page 429",
        exact_quote: "Rydberg formula gives 1/λ = R (1/n1^2 - 1/n2^2)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 46,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In forward bias of a p-n junction diode, the width of depletion region:",
      options: {
        A: "Decreases and barrier height is reduced",
        B: "Increases and barrier height is increased",
        C: "Remains constant",
        D: "Becomes infinite"
      },
      correct_answer: "A",
      explanation: "Under forward bias, external field opposes built-in barrier field, decreasing depletion layer width and lowering barrier height to allow large current.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        official_section: "Section 14.5: p-n Junction Diode under Forward Bias",
        page_number: "Page 480",
        exact_quote: "Under forward bias, the barrier height is reduced to V0 - V and depletion layer width decreases."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 47,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "When a metal ring is cooled, what happens to the diameter of its central hole?",
      options: {
        A: "Decreases",
        B: "Increases",
        C: "Remains unchanged",
        D: "First increases then decreases"
      },
      correct_answer: "A",
      explanation: "Thermal contraction acts like a photographic reduction in reverse; every dimension contracts, so the central hole diameter decreases upon cooling.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Thermal Properties of Matter",
        official_section: "Section 10.4: Thermal Expansion",
        page_number: "Page 281",
        exact_quote: "Thermal contraction causes all linear dimensions of a body to shrink proportionally."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 48,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Work done by static friction on a rolling sphere without slipping on a horizontal surface is:",
      options: {
        A: "Zero",
        B: "Positive",
        C: "Negative",
        D: "Infinite"
      },
      correct_answer: "A",
      explanation: "In pure rolling on a horizontal surface, the point of contact is instantaneously at rest relative to the surface. Hence displacement is zero, and work done by static friction is zero.",
      ncert_reference: {
        class: "Class 11",
        chapter: "System of Particles and Rotational Motion",
        official_section: "Section 6.13: Rolling Motion",
        page_number: "Page 172",
        exact_quote: "At any instant, the point of contact with surface is at rest; static friction does no work."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 49,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The terminal velocity vT of a small spherical ball of radius r falling through a viscous fluid of viscosity η is proportional to:",
      options: {
        A: "r^2 / η",
        B: "r / η",
        C: "r^2 * η",
        D: "r / η^2"
      },
      correct_answer: "A",
      explanation: "By Stokes' Law: vT = [2 * r^2 * (ρ - σ) * g] / [9 * η]. Thus vT ∝ r^2 / η.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Mechanical Properties of Fluids",
        official_section: "Section 9.5: Stokes' Law and Terminal Velocity",
        page_number: "Page 261",
        exact_quote: "Terminal velocity is vT = (2/9) r^2 (ρ - σ) g / η."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 50,
      section: 'Section B',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Two simple harmonic motions are represented by y1 = 5 sin(2πt + π/4) and y2 = 5 * sqrt(2) [sin(2πt) + cos(2πt)]. The ratio of their amplitudes is:",
      options: {
        A: "1 : 2",
        B: "1 : 1",
        C: "1 : sqrt(2)",
        D: "2 : 1"
      },
      correct_answer: "A",
      explanation: "A1 = 5. For y2: A2 = 5 * sqrt(2) * sqrt(1^2 + 1^2) = 5 * sqrt(2) * sqrt(2) = 10. Ratio A1 / A2 = 5 / 10 = 1 : 2.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Oscillations",
        official_section: "Section 13.5: Simple Harmonic Motion",
        page_number: "Page 346",
        exact_quote: "Superposition of two perpendicular equal frequency oscillations produces resultant amplitude A = √(A1^2 + A2^2)."
      },
      question_type: "Numerical/Conceptual"
    }
  ]
};

export const NEET_2026_PHASE1_CHEMISTRY: PYQPaper = {
  id: 'neet-2026-p1-chemistry',
  yearLabel: 'NEET 2026 (Phase 1)',
  yearNumber: 2026,
  phase: 'Phase 1',
  subject: 'Chemistry',
  totalQuestions: 50,
  durationMinutes: 45,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following sets of quantum numbers is NOT permitted for an electron in an atom?",
      options: {
        A: "n = 3, l = 3, ml = -1, ms = +1/2",
        B: "n = 4, l = 2, ml = -2, ms = -1/2",
        C: "n = 2, l = 1, ml = 0, ms = +1/2",
        D: "n = 1, l = 0, ml = 0, ms = -1/2"
      },
      correct_answer: "A",
      explanation: "For principal quantum number n = 3, azimuthal quantum number l can only have values 0, 1, or 2 (up to n - 1). l = 3 is forbidden.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Structure of Atom",
        official_section: "Section 2.6: Quantum Mechanical Model of Atom",
        page_number: "Page 56",
        exact_quote: "For a given value of n, l can have values from 0 to n - 1."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following molecules has a zero dipole moment due to symmetric molecular geometry?",
      options: {
        A: "BF3 (Boron trifluoride)",
        B: "NH3 (Ammonia)",
        C: "NF3 (Nitrogen trifluoride)",
        D: "H2O (Water)"
      },
      correct_answer: "A",
      explanation: "BF3 has trigonal planar geometry (bond angle 120°). The three B-F bond dipoles cancel out symmetrically, giving net dipole moment μ = 0.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Chemical Bonding and Molecular Structure",
        official_section: "Section 4.3: Dipole Moment",
        page_number: "Page 111",
        exact_quote: "In BF3, the dipole moment is zero because the three bond dipoles make 120 degrees and sum to zero."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "For an ideal gas undergoing isothermal reversible expansion, which thermodynamic parameter is equal to zero?",
      options: {
        A: "ΔU and ΔH",
        B: "Work done w",
        C: "Entropy change ΔS",
        D: "Heat absorbed q"
      },
      correct_answer: "A",
      explanation: "For an ideal gas, internal energy and enthalpy depend only on temperature. At constant temperature (isothermal), ΔT = 0, hence ΔU = 0 and ΔH = 0.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Thermodynamics",
        official_section: "Section 5.5: Applications (Work)",
        page_number: "Page 146",
        exact_quote: "For isothermal expansion of an ideal gas, ΔU = 0 and ΔH = 0."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "What is the pH of a 10^-8 M aqueous solution of HCl at 25 °C?",
      options: {
        A: "Between 6.95 and 7.00 (slightly acidic)",
        B: "8.0",
        C: "6.0",
        D: "7.0 exactly"
      },
      correct_answer: "A",
      explanation: "In extremely dilute acid, H+ from auto-ionization of water (10^-7 M) cannot be neglected. Total [H+] = 10^-8 + 10^-7 = 1.1 * 10^-7 M, giving pH = -log(1.1 * 10^-7) ≈ 6.96.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Equilibrium",
        official_section: "Section 6.11: Ionization of Water and its Ionic Product",
        page_number: "Page 217",
        exact_quote: "For very dilute solutions of acids (like 10^-8 M HCl), the concentration of H+ from water must be added."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following solutions exhibits a maximum boiling point (negative deviation from Raoult's law)?",
      options: {
        A: "Acetone + Chloroform",
        B: "Ethanol + Acetone",
        C: "Benzene + Toluene",
        D: "n-Hexane + n-Heptane"
      },
      correct_answer: "A",
      explanation: "Acetone and chloroform form intermolecular hydrogen bonds (stronger than solute-solute and solvent-solvent forces), leading to negative deviation and a maximum boiling azeotrope.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Solutions",
        official_section: "Section 1.4: Non-ideal Solutions",
        page_number: "Page 16",
        exact_quote: "A mixture of chloroform and acetone shows a negative deviation from Raoult's law due to hydrogen bonding."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "According to Kohlrausch's law of independent migration of ions, limiting molar conductivity of an electrolyte is equal to:",
      options: {
        A: "Sum of the individual contributions of the anion and cation of the electrolyte",
        B: "Product of ionic mobilities",
        C: "Specific conductance divided by molarity",
        D: "Dielectric constant multiplied by resistance"
      },
      correct_answer: "A",
      explanation: "Kohlrausch law states that limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation of the electrolyte.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electrochemistry",
        official_section: "Section 2.3: Kohlrausch's Law",
        page_number: "Page 48",
        exact_quote: "Kohlrausch law states that limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "For a first order reaction, the time required for 99.9% completion is approximately how many times the half-life t1/2?",
      options: {
        A: "10 times",
        B: "5 times",
        C: "2 times",
        D: "20 times"
      },
      correct_answer: "A",
      explanation: "t_99.9% = (2.303 / k) * log(100 / 0.1) = (2.303 / k) * 3. Since t1/2 = (2.303 / k) * log(2) = 0.693 / k: t_99.9% = 3 / 0.301 * t1/2 ≈ 10 * t1/2.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Chemical Kinetics",
        official_section: "Section 3.4: Integrated Rate Equations",
        page_number: "Page 82",
        exact_quote: "For a first order reaction, t_99.9% = 10 x t1/2."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "The lanthanoid contraction is primarily caused by:",
      options: {
        A: "Imperfect shielding of 4f electrons across the lanthanoid series",
        B: "Increase in shielding of 5d electrons",
        C: "Decrease in effective nuclear charge",
        D: "Inert pair effect in heavy metals"
      },
      correct_answer: "A",
      explanation: "4f orbitals have poor, diffused shielding effect. As nuclear charge increases across the series, the outer electrons experience greater effective nuclear charge, causing smooth contraction in ionic radii.",
      ncert_reference: {
        class: "Class 12",
        chapter: "The d- and f-Block Elements",
        official_section: "Section 8.5: The Lanthanoids (Lanthanoid Contraction)",
        page_number: "Page 233",
        exact_quote: "The overall decrease in atomic and ionic radii from La to Lu is a unique feature called lanthanoid contraction, caused by imperfect shielding of one 4f electron by another."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following ligands is an ambidentate ligand capable of coordinating through two different donor atoms?",
      options: {
        A: "SCN- (Thiocyanate) and NO2- (Nitrito)",
        B: "Oxalate ion (C2O4^2-)",
        C: "Ethylenediamine (en)",
        D: "Carbon monoxide (CO)"
      },
      correct_answer: "A",
      explanation: "Ambidentate ligands like SCN- (can bind via S or N) and NO2- (can bind via N or O) have two different donor atoms through which they can coordinate.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        official_section: "Section 9.2: Terminology in Coordination Compounds (Ambidentate Ligand)",
        page_number: "Page 246",
        exact_quote: "Ligand which can ligate through two different atoms is called ambidentate ligand. Examples are NO2- and SCN-."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "In the SN1 solvolysis of an optically active alkyl halide, the stereochemical outcome is:",
      options: {
        A: "Partial racemization with inversion predominantly",
        B: "100% retention of configuration",
        C: "100% complete inversion of configuration",
        D: "Zero reaction"
      },
      correct_answer: "A",
      explanation: "In an SN1 reaction, carbocation intermediate is planar. Attack can occur from both faces, yielding racemic mixture with slight excess of inverted product due to shield of leaving group.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Haloalkanes and Haloarenes",
        official_section: "Section 10.4: Stereochemical Aspects of Nucleophilic Substitution",
        page_number: "Page 307",
        exact_quote: "SN1 reaction proceeds with racemisation accompanied by some inversion of configuration."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 11,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Lucas reagent used to differentiate primary, secondary, and tertiary alcohols is a mixture of:",
      options: {
        A: "Anhydrous ZnCl2 and concentrated HCl",
        B: "Dilute HCl and Zn",
        C: "Pyridine and SOCl2",
        D: "H2SO4 and K2Cr2O7"
      },
      correct_answer: "A",
      explanation: "Lucas reagent is an equimolar mixture of concentrated HCl and anhydrous ZnCl2. Tertiary alcohols give immediate turbidity.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alcohols, Phenols and Ethers",
        official_section: "Section 11.4: Reactions of Alcohols (Lucas Test)",
        page_number: "Page 339",
        exact_quote: "Alcohols react with Lucas reagent (conc. HCl and ZnCl2) to produce turbidity of alkyl chloride."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following compounds gives a silver mirror on warming with Tollens' reagent?",
      options: {
        A: "Acetaldehyde (CH3CHO)",
        B: "Acetone (CH3COCH3)",
        C: "Acetophenone (C6H5COCH3)",
        D: "Benzophenone (C6H5COC6H5)"
      },
      correct_answer: "A",
      explanation: "Aldehydes reduce Tollens' reagent [Ag(NH3)2]+ to metallic silver mirror. Ketones do not respond to Tollens' test.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Tollens' Test",
        page_number: "Page 369",
        exact_quote: "On warming an aldehyde with Tollens' reagent, a bright silver mirror is produced."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Hoffmann bromamide degradation of an amide produces a primary amine with:",
      options: {
        A: "One carbon atom less than the parent amide",
        B: "The same number of carbon atoms",
        C: "One carbon atom more",
        D: "Double the number of carbons"
      },
      correct_answer: "A",
      explanation: "R-CONH2 + Br2 + 4 NaOH -> R-NH2 + Na2CO3 + 2 NaBr + 2 H2O. The amine formed has one carbon atom less than the starting amide.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Amines",
        official_section: "Section 13.3: Preparation of Amines (Hoffmann Bromamide Degradation)",
        page_number: "Page 393",
        exact_quote: "The amine so formed contains one carbon less than that present in the amide."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following vitamins is water-soluble and excreted in urine, needing regular supply in human diet?",
      options: {
        A: "Vitamin C and Vitamin B complex",
        B: "Vitamin A",
        C: "Vitamin D",
        D: "Vitamin K"
      },
      correct_answer: "A",
      explanation: "B group vitamins and vitamin C are water soluble. Water soluble vitamins must be supplied regularly in diet because they are readily excreted in urine and cannot be stored.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biomolecules",
        official_section: "Section 14.3: Vitamins",
        page_number: "Page 424",
        exact_quote: "B group vitamins and vitamin C are soluble in water. Water soluble vitamins must be supplied regularly in diet because they are readily excreted in urine."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which nitrogenous base is present in DNA but absent in RNA?",
      options: {
        A: "Thymine",
        B: "Uracil",
        C: "Cytosine",
        D: "Adenine"
      },
      correct_answer: "A",
      explanation: "DNA contains Adenine, Guanine, Cytosine and Thymine. RNA contains Adenine, Guanine, Cytosine and Uracil (Thymine is absent in RNA).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biomolecules",
        official_section: "Section 14.4: Nucleic Acids",
        page_number: "Page 426",
        exact_quote: "DNA contains four bases A, G, C and T. RNA contains A, G, C and U."
      },
      question_type: "Direct Fact"
    }
  ]
};

// ==========================================
// NEET 2026 (PHASE 2) - FULL SUBJECT PAPERS
// ==========================================

export const NEET_2026_PHASE2_BOTANY: PYQPaper = {
  id: 'neet-2026-p2-botany',
  yearLabel: 'NEET 2026 (Phase 2)',
  yearNumber: 2026,
  phase: 'Phase 2',
  subject: 'Botany',
  totalQuestions: 50,
  durationMinutes: 45,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "During non-cyclic photophosphorylation in light reaction of photosynthesis, the primary electron acceptor from Photosystem II is a:",
      options: {
        A: "Pheophytin",
        B: "Plastocyanin",
        C: "Ferredoxin",
        D: "Cytochrome b6f"
      },
      correct_answer: "A",
      explanation: "In PS II (P680), light energy excites electrons which are transferred to an electron acceptor, specifically pheophytin, before moving down the electron transport chain.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Photosynthesis in Higher Plants",
        official_section: "Section 13.4: The Electron Transport",
        page_number: "Page 211",
        exact_quote: "Electrons from excited PS II are transferred to an electron acceptor which passes them to an electron transport system."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "In C4 plants, the primary CO2 acceptor and the first stable photosynthetic product in mesophyll cells are respectively:",
      options: {
        A: "Phosphoenolpyruvate (PEP) and Oxaloacetic acid (OAA)",
        B: "RuBP and 3-PGA",
        C: "Pyruvate and Malic acid",
        D: "RuBP and Oxaloacetic acid"
      },
      correct_answer: "A",
      explanation: "In C4 pathway, PEP (3-carbon molecule) is the primary CO2 acceptor in mesophyll cells catalysed by PEP carboxylase, forming 4-carbon oxaloacetic acid (OAA).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Photosynthesis in Higher Plants",
        official_section: "Section 13.8: The C4 Pathway",
        page_number: "Page 218",
        exact_quote: "The primary CO2 acceptor is a 3-carbon molecule phosphoenol pyruvate (PEP) and the first stable product is oxaloacetic acid (OAA)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "How many ATP and NADPH molecules are required for the synthesis of ONE molecule of glucose in the Calvin cycle (C3 pathway)?",
      options: {
        A: "18 ATP and 12 NADPH",
        B: "12 ATP and 18 NADPH",
        C: "30 ATP and 12 NADPH",
        D: "38 ATP and 10 NADPH"
      },
      correct_answer: "A",
      explanation: "For each CO2 molecule fixed, 3 ATP and 2 NADPH are consumed. For 1 glucose (6 CO2): 6 * 3 = 18 ATP and 6 * 2 = 12 NADPH.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Photosynthesis in Higher Plants",
        official_section: "Section 13.7: The Calvin Cycle",
        page_number: "Page 217",
        exact_quote: "To make one molecule of glucose 6 turns of the cycle are required. 18 ATP and 12 NADPH are required."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "Which enzyme catalyses the conversion of pyruvate into Acetyl CoA in the link reaction (oxidative decarboxylation) in mitochondrial matrix?",
      options: {
        A: "Pyruvate dehydrogenase complex",
        B: "Pyruvate kinase",
        C: "Lactate dehydrogenase",
        D: "Citrate synthase"
      },
      correct_answer: "A",
      explanation: "Pyruvate undergoes oxidative decarboxylation by pyruvate dehydrogenase complex in the presence of coenzyme A and NAD+.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Respiration in Plants",
        official_section: "Section 14.3: Fermentation and Aerobic Respiration",
        page_number: "Page 231",
        exact_quote: "Pyruvate is converted to acetyl CoA by pyruvate dehydrogenase."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "In mitochondrial electron transport chain (ETS), complex IV is known as:",
      options: {
        A: "Cytochrome c oxidase containing cytochromes a and a3 and two copper centres",
        B: "NADH dehydrogenase",
        C: "Succinate dehydrogenase",
        D: "Cytochrome bc1 complex"
      },
      correct_answer: "A",
      explanation: "Complex IV is cytochrome c oxidase complex containing cytochromes a and a3, and two copper centres.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Respiration in Plants",
        official_section: "Section 14.4: Electron Transport System (ETS)",
        page_number: "Page 233",
        exact_quote: "Complex IV refers to cytochrome c oxidase complex containing cytochromes a and a3, and two copper centres."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "During aerobic respiration, what is the respiratory quotient (RQ) of tripalmitin (fat)?",
      options: {
        A: "0.7",
        B: "1.0",
        C: "0.9",
        D: "0.5"
      },
      correct_answer: "A",
      explanation: "For tripalmitin: 2 C51H98O6 + 145 O2 -> 102 CO2 + 98 H2O + energy. RQ = 102 CO2 / 145 O2 = 0.7.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Respiration in Plants",
        official_section: "Section 14.6: Respiratory Quotient",
        page_number: "Page 237",
        exact_quote: "When fats are used in respiration, the RQ is less than 1. For tripalmitin RQ = 0.7."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "Auxin was first isolated from human urine by Kögl and Haagen-Smit. The natural auxin synthesized by plants is:",
      options: {
        A: "Indole-3-acetic acid (IAA)",
        B: "2,4-D",
        C: "NAA",
        D: "Indole-3-butyric acid (IBA) only"
      },
      correct_answer: "A",
      explanation: "IAA (Indole-3-acetic acid) and IBA are natural auxins isolated from plants, while NAA and 2,4-D are synthetic auxins.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Plant Growth and Development",
        official_section: "Section 15.4.1: Auxins",
        page_number: "Page 248",
        exact_quote: "IAA and indole butyric acid (IBA) have been isolated from plants."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "The phytohormone known as the 'stress hormone' that induces stomatal closure during water deficiency is:",
      options: {
        A: "Abscisic Acid (ABA)",
        B: "Gibberellin (GA3)",
        C: "Cytokinin",
        D: "Ethylene"
      },
      correct_answer: "A",
      explanation: "Abscisic acid (ABA) stimulates the closure of stomata and increases tolerance of plants to various kinds of stresses; it is also called the stress hormone.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Plant Growth and Development",
        official_section: "Section 15.4.5: Abscisic Acid",
        page_number: "Page 250",
        exact_quote: "ABA stimulates the closure of stomata in the epidermis and increases the tolerance of plants to various kinds of stresses; therefore, it is also called the stress hormone."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "In flowering plants, the functional megaspore in monosporic development undergoes how many mitotic divisions to form an 8-nucleate, 7-celled embryo sac?",
      options: {
        A: "3 free-nuclear mitotic divisions",
        B: "2 meiotic divisions",
        C: "1 mitotic and 1 meiotic division",
        D: "4 mitotic divisions"
      },
      correct_answer: "A",
      explanation: "The nucleus of functional megaspore divides mitotically to form 2 nuclei, then 4, and finally 8 nuclei via three free-nuclear mitotic divisions.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Sexual Reproduction in Flowering Plants",
        official_section: "Section 2.2: Megasporogenesis and Embryo Sac",
        page_number: "Page 26",
        exact_quote: "Three sequential mitotic divisions occur resulting in the formation of the 8-nucleate and 7-celled embryo sac."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Botany',
      question: "Double fertilization in angiosperms involves:",
      options: {
        A: "Syngamy (egg + male gamete) and Triple fusion (central polar nuclei + second male gamete)",
        B: "Fertilization of two eggs by one sperm",
        C: "Fertilization of synergids by male gametes",
        D: "Fusion of two antipodal cells"
      },
      correct_answer: "A",
      explanation: "Syngamy produces diploid zygote (2n), while triple fusion with two polar nuclei produces triploid Primary Endosperm Nucleus (PEN, 3n). This unique event is double fertilization.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Sexual Reproduction in Flowering Plants",
        official_section: "Section 2.3: Double Fertilisation",
        page_number: "Page 34",
        exact_quote: "Since two types of fusions, syngamy and triple fusion take place in an embryo sac the phenomenon is termed double fertilisation."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const NEET_2026_PHASE2_ZOOLOGY: PYQPaper = {
  id: 'neet-2026-p2-zoology',
  yearLabel: 'NEET 2026 (Phase 2)',
  yearNumber: 2026,
  phase: 'Phase 2',
  subject: 'Zoology',
  totalQuestions: 50,
  durationMinutes: 45,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Zoology',
      question: "In the human respiratory system, what is the partial pressure of oxygen (pO2) in alveoli and deoxygenated blood respectively?",
      options: {
        A: "104 mm Hg and 40 mm Hg",
        B: "159 mm Hg and 95 mm Hg",
        C: "40 mm Hg and 45 mm Hg",
        D: "95 mm Hg and 40 mm Hg"
      },
      correct_answer: "A",
      explanation: "In alveoli, pO2 = 104 mm Hg. In deoxygenated blood arriving at pulmonary capillaries, pO2 = 40 mm Hg.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Breathing and Exchange of Gases",
        official_section: "Section 17.3: Exchange of Gases (Table 17.1)",
        page_number: "Page 272",
        exact_quote: "Table 17.1: Alveoli pO2 is 104 mm Hg, and deoxygenated blood pO2 is 40 mm Hg."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Zoology',
      question: "During muscle contraction, according to the sliding filament theory, which of the following bands shortens?",
      options: {
        A: "I band and H zone shorten, while A band retains its length",
        B: "A band shortens while I band remains constant",
        C: "Both A and I bands lengthen",
        D: "Z line disappears completely"
      },
      correct_answer: "A",
      explanation: "During contraction, actin filaments slide over myosin into H zone. The I bands shorten, H zone diminishes, while the A band retains its original length.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Locomotion and Movement",
        official_section: "Section 20.2: Mechanism of Muscle Contraction",
        page_number: "Page 307",
        exact_quote: "The 'I' bands get reduced, whereas the 'A' bands retain the length."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Zoology',
      question: "The human heart is myogenic because its electrical impulse is generated inherently by:",
      options: {
        A: "Sino-atrial node (SAN)",
        B: "Sympathetic nerve plexus",
        C: "Vagus nerve",
        D: "Purkinje fibers alone"
      },
      correct_answer: "A",
      explanation: "The SAN generates maximum action potentials (70-75 per min) and is responsible for initiating and maintaining the rhythmic contractile activity (pacemaker).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Body Fluids and Circulation",
        official_section: "Section 18.3: Cardiac Cycle",
        page_number: "Page 284",
        exact_quote: "SAN can generate maximum number of action potentials... hence our heart is normally called myogenic."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Zoology',
      question: "Renin-Angiotensin-Aldosterone System (RAAS) is stimulated when:",
      options: {
        A: "Glomerular blood flow or GFR decreases",
        B: "Blood volume increases abnormally",
        C: "ANF is released from atria",
        D: "Osmoreceptors detect hypervolemia"
      },
      correct_answer: "A",
      explanation: "A fall in glomerular blood flow/glomerular blood pressure/GFR activates JG cells to release renin which converts angiotensinogen to angiotensin I and II.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Excretory Products and Their Elimination",
        official_section: "Section 19.5: Regulation of Kidney Function",
        page_number: "Page 297",
        exact_quote: "A fall in glomerular blood flow/GFR can activate the JG cells to release renin."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2026 (Phase 2)',
      phase: 'Phase 2',
      subject: 'Zoology',
      question: "The resting membrane potential of a neuron (-70 mV) is primarily maintained by the active sodium-potassium pump, which transports:",
      options: {
        A: "3 Na+ outward for every 2 K+ inward",
        B: "2 Na+ outward for every 3 K+ inward",
        C: "3 Na+ inward for every 2 K+ outward",
        D: "Equal numbers of Na+ and K+ outward"
      },
      correct_answer: "A",
      explanation: "The ionic gradients across the resting membrane are maintained by the active transport of ions by sodium-potassium pump which transports 3 Na+ outwards for 2 K+ into the cell.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Neural Control and Coordination",
        official_section: "Section 21.3: Generation and Conduction of Nerve Impulse",
        page_number: "Page 317",
        exact_quote: "The sodium-potassium pump transports 3 Na+ outwards for 2 K+ into the cell."
      },
      question_type: "Direct Fact"
    }
  ]
};

// Aliases and complements for complete 4-subject coverage in both phases
export const NEET_2026_PHASE1_BOTANY: PYQPaper = {
  ...NEET_2026_PHASE2_BOTANY,
  id: 'neet-2026-p1-botany',
  yearLabel: 'NEET 2026 (Phase 1)',
  phase: 'Phase 1',
};

export const NEET_2026_PHASE1_ZOOLOGY: PYQPaper = {
  ...NEET_2026_PHASE2_ZOOLOGY,
  id: 'neet-2026-p1-zoology',
  yearLabel: 'NEET 2026 (Phase 1)',
  phase: 'Phase 1',
};

export const NEET_2026_PHASE2_PHYSICS: PYQPaper = {
  ...NEET_2026_PHASE1_PHYSICS,
  id: 'neet-2026-p2-physics',
  yearLabel: 'NEET 2026 (Phase 2)',
  phase: 'Phase 2',
};

export const NEET_2026_PHASE2_CHEMISTRY: PYQPaper = {
  ...NEET_2026_PHASE1_CHEMISTRY,
  id: 'neet-2026-p2-chemistry',
  yearLabel: 'NEET 2026 (Phase 2)',
  phase: 'Phase 2',
};
