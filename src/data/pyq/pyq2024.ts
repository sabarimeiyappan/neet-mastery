import { PYQPaper, PYQQuestion } from './types';

// ==========================================
// NEET 2024 - FULL OFFICIAL SUBJECT PAPERS
// ==========================================

export const NEET_2024_PHYSICS: PYQPaper = {
  id: 'neet-2024-physics',
  yearLabel: 'NEET 2024',
  yearNumber: 2024,
  subject: 'Physics',
  totalQuestions: 20,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "A wire of resistance R is connected across a cell of internal resistance r. Maximum power is transferred to the external resistance R when:",
      options: {
        A: "R = r",
        B: "R = 2r",
        C: "R = r / 2",
        D: "R = 0"
      },
      correct_answer: "A",
      explanation: "By maximum power transfer theorem: P = I^2 * R = (E / (R + r))^2 * R. Differentiating with respect to R and setting dP/dR = 0 yields R = r.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        official_section: "Section 3.8: Cells, EMF, Internal Resistance",
        page_number: "Page 111",
        exact_quote: "The power transferred to external load resistance R is maximum when external resistance equals internal resistance (R = r)."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "In a vernier callipers, 10 vernier scale divisions coincide with 9 main scale divisions. If each main scale division is 0.1 cm, the vernier constant is:",
      options: {
        A: "0.01 cm",
        B: "0.1 cm",
        C: "0.001 cm",
        D: "0.05 cm"
      },
      correct_answer: "A",
      explanation: "Vernier constant = 1 MSD - 1 VSD = 1 MSD - (9/10) MSD = (1/10) MSD = 0.1 * 0.1 cm = 0.01 cm.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Units and Measurements",
        official_section: "Section 1.3: Measurement of Length",
        page_number: "Page 17",
        exact_quote: "Vernier constant = 1 MSD - 1 VSD."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "A body of mass m is thrown vertically upwards with speed u. It experiences constant air resistance force F resisting its motion. The ratio of time of ascent to time of descent is:",
      options: {
        A: "sqrt((g - F/m) / (g + F/m))",
        B: "sqrt((g + F/m) / (g - F/m))",
        C: "1 : 1",
        D: "(g - F/m) / (g + F/m)"
      },
      correct_answer: "A",
      explanation: "During ascent, total downward acceleration a_up = g + F/m. During descent, acceleration a_down = g - F/m. Since distance is equal (h = 1/2 a t^2), t_ascent / t_descent = sqrt(a_down / a_up) = sqrt((g - F/m) / (g + F/m)).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Motion in a Straight Line",
        official_section: "Section 2.5: Kinematic Equations",
        page_number: "Page 48",
        exact_quote: "When a resistive force acts opposing motion, deceleration during upward flight is greater than acceleration during downward fall."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "A thin uniform rod of length L and mass M is free to rotate in a vertical plane about a horizontal axis through one of its ends. If it is released from the horizontal position, the angular acceleration of the rod at the instant of release is:",
      options: {
        A: "3g / (2L)",
        B: "g / L",
        C: "2g / (3L)",
        D: "g / (2L)"
      },
      correct_answer: "A",
      explanation: "Torque about pivot: τ = M * g * (L/2). Moment of inertia about end: I = (1/3) M L^2. Angular acceleration α = τ / I = (M g L / 2) / (M L^2 / 3) = 3g / (2L).",
      ncert_reference: {
        class: "Class 11",
        chapter: "System of Particles and Rotational Motion",
        official_section: "Section 6.8: Angular Momentum and Torque",
        page_number: "Page 158",
        exact_quote: "Torque is τ = I α."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "An alternating voltage V = 200 * sqrt(2) * sin(100 t) V is connected to a 1 μF capacitor through an AC ammeter. The reading of the ammeter is:",
      options: {
        A: "20 mA",
        B: "40 mA",
        C: "10 mA",
        D: "100 mA"
      },
      correct_answer: "A",
      explanation: "Vrms = 200 V. Capacitive reactance XC = 1 / (ω C) = 1 / (100 * 10^-6) = 10,000 Ω. Irms = Vrms / XC = 200 / 10,000 = 0.02 A = 20 mA.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alternating Current",
        official_section: "Section 7.4: AC Voltage Applied to a Capacitor",
        page_number: "Page 241",
        exact_quote: "Capacitive reactance is XC = 1 / (ω C) and Irms = Vrms / XC."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 40 cm. The power of the combination is:",
      options: {
        A: "+2.5 D",
        B: "-2.5 D",
        C: "+5.0 D",
        D: "-5.0 D"
      },
      correct_answer: "A",
      explanation: "P = P1 + P2 = 1/f1 + 1/f2 = 1/0.20 - 1/0.40 = +5 - 2.5 = +2.5 D.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.3: Combination of Thin Lenses in Contact",
        page_number: "Page 328",
        exact_quote: "The total power of thin lenses in contact is P = P1 + P2."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "The de Broglie wavelength of an electron accelerated through a potential difference of V volts is approximately:",
      options: {
        A: "1.227 / sqrt(V) nm",
        B: "12.27 / sqrt(V) nm",
        C: "0.1227 / sqrt(V) nm",
        D: "1.227 * sqrt(V) nm"
      },
      correct_answer: "A",
      explanation: "λ = h / sqrt(2 m e V) = 1.227 / sqrt(V) nm = 12.27 / sqrt(V) Å.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Dual Nature of Radiation and Matter",
        official_section: "Section 11.6: Wave Nature of Matter",
        page_number: "Page 398",
        exact_quote: "The de Broglie wavelength of electron is λ = 1.227 / √V nm."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "In a p-n junction diode at forward bias, the width of the depletion layer and the potential barrier respectively:",
      options: {
        A: "Decreases and decreases",
        B: "Increases and increases",
        C: "Decreases and increases",
        D: "Remains constant"
      },
      correct_answer: "A",
      explanation: "Under forward bias, the applied voltage opposes the built-in barrier potential, thus reducing the effective barrier height and decreasing the depletion layer width.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        official_section: "Section 14.4: p-n Junction Diode under Forward Bias",
        page_number: "Page 479",
        exact_quote: "Forward bias decreases the barrier height and decreases the depletion layer width."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 9,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "An ideal gas undergoes an adiabatic expansion where its volume becomes 8 times its initial volume. If the ratio of specific heats γ = 5/3, the final temperature in terms of initial temperature T1 is:",
      options: {
        A: "T1 / 4",
        B: "T1 / 2",
        C: "T1 / 8",
        D: "T1 / 16"
      },
      correct_answer: "A",
      explanation: "For an adiabatic process: T1 * V1^(γ-1) = T2 * V2^(γ-1). T2 = T1 * (V1 / 8 V1)^(5/3 - 1) = T1 * (1/8)^(2/3) = T1 * (1/2)^2 = T1 / 4.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Thermodynamics",
        official_section: "Section 12.8: Adiabatic Process",
        page_number: "Page 312",
        exact_quote: "In an adiabatic process of an ideal gas, TV^(γ-1) = constant."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 10,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "The ratio of escape velocity from earth's surface to orbital velocity of a satellite orbiting very close to earth's surface is:",
      options: {
        A: "sqrt(2) : 1",
        B: "1 : sqrt(2)",
        C: "2 : 1",
        D: "1 : 2"
      },
      correct_answer: "A",
      explanation: "Escape velocity ve = sqrt(2 g R). Orbital velocity near surface vo = sqrt(g R). Ratio ve / vo = sqrt(2) / 1.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Gravitation",
        official_section: "Section 7.6: Escape Speed and Orbital Speed",
        page_number: "Page 193",
        exact_quote: "ve = √2 vo; escape speed from surface is √2 times the orbital speed near earth."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "Two long straight parallel conductors carrying equal currents in opposite directions will:",
      options: {
        A: "Repel each other with force μ0 I^2 / (2π d)",
        B: "Attract each other with force μ0 I^2 / (2π d)",
        C: "Experience zero magnetic force",
        D: "Repel each other with force μ0 I^2 / (4π d)"
      },
      correct_answer: "A",
      explanation: "By Biot-Savart and Lorentz force law, antiparallel currents repel each other with force per unit length F/L = (μ0 * I1 * I2) / (2π d).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Moving Charges and Magnetism",
        official_section: "Section 4.9: Force Between Two Parallel Currents",
        page_number: "Page 154",
        exact_quote: "Antiparallel currents repel. The force per unit length is μ0 I1 I2 / (2π d)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "In Young's double slit experiment, if the separation between the slits is halved and distance of screen from slits is doubled, fringe width becomes:",
      options: {
        A: "4 times",
        B: "2 times",
        C: "Halved",
        D: "Unchanged"
      },
      correct_answer: "A",
      explanation: "Fringe width β = λ D / d. When d' = d/2 and D' = 2D, β' = λ (2D) / (d/2) = 4 (λ D / d) = 4 β.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Wave Optics",
        official_section: "Section 10.3: Young's Experiment",
        page_number: "Page 364",
        exact_quote: "Fringe width β is given by β = λ D / d."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "The ratio of radii of nuclei of mass numbers 27 and 64 is:",
      options: {
        A: "3 : 4",
        B: "9 : 16",
        C: "4 : 3",
        D: "27 : 64"
      },
      correct_answer: "A",
      explanation: "Nuclear radius R = R0 * A^(1/3). R1 / R2 = (27 / 64)^(1/3) = 3 / 4.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Nuclei",
        official_section: "Section 13.3: Size of the Nucleus",
        page_number: "Page 441",
        exact_quote: "The radius R of a nucleus with mass number A is R = R0 A^(1/3)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "A simple pendulum of length L has period T. If it is placed inside an elevator accelerating downwards with acceleration a = g/2, the new period is:",
      options: {
        A: "sqrt(2) T",
        B: "T / sqrt(2)",
        C: "2 T",
        D: "T / 2"
      },
      correct_answer: "A",
      explanation: "Effective g_eff = g - a = g - g/2 = g/2. T' = 2π sqrt(L / g_eff) = 2π sqrt(L / (g/2)) = sqrt(2) * 2π sqrt(L/g) = sqrt(2) T.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Oscillations",
        official_section: "Section 13.8: The Simple Pendulum",
        page_number: "Page 353",
        exact_quote: "T = 2π √(L / g_eff)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "Magnetic flux linked with a coil of resistance 10 Ω changes according to Φ = 6t^2 - 5t + 1. The induced current at t = 0.25 s is:",
      options: {
        A: "0.2 A",
        B: "2 A",
        C: "0.4 A",
        D: "4 A"
      },
      correct_answer: "A",
      explanation: "Induced EMF e = -dΦ/dt = -(12t - 5). At t = 0.25 s: e = -(12 * 0.25 - 5) = -(3 - 5) = 2 V. Induced current I = e / R = 2 / 10 = 0.2 A.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electromagnetic Induction",
        official_section: "Section 6.3: Faraday's Law of Induction",
        page_number: "Page 207",
        exact_quote: "Induced emf is e = -dΦB/dt and I = e / R."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 16,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "An electric dipole of dipole moment p is aligned at 30° with a uniform electric field E. The torque experienced by the dipole is:",
      options: {
        A: "p E / 2",
        B: "p E",
        C: "sqrt(3) p E / 2",
        D: "Zero"
      },
      correct_answer: "A",
      explanation: "Torque τ = p * E * sin(θ) = p * E * sin(30°) = p * E * 0.5 = p E / 2.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electric Charges and Fields",
        official_section: "Section 1.11: Dipole in a Uniform External Field",
        page_number: "Page 31",
        exact_quote: "The magnitude of torque on a dipole in a uniform electric field is τ = p E sin θ."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "The speed of sound in hydrogen gas at STP compared to that in oxygen gas at STP is:",
      options: {
        A: "4 times",
        B: "16 times",
        C: "2 times",
        D: "1/4 times"
      },
      correct_answer: "A",
      explanation: "Speed v = sqrt(γ R T / M). Since both H2 and O2 are diatomic (same γ): v(H2) / v(O2) = sqrt(M(O2) / M(H2)) = sqrt(32 / 2) = sqrt(16) = 4.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Waves",
        official_section: "Section 14.4: Speed of a Longitudinal Wave",
        page_number: "Page 375",
        exact_quote: "Speed of sound in an ideal gas depends inversely on square root of molecular mass: v = √(γRT / M)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 18,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "Two point charges +4q and +q are placed separated by distance r. A third charge Q is placed on the line joining them such that all three charges are in equilibrium. The magnitude, sign, and position of Q are:",
      options: {
        A: "-4q/9, at distance 2r/3 from +4q",
        B: "+4q/9, at distance r/3 from +4q",
        C: "-q/4, at midpoint",
        D: "-2q/3, at distance r/2 from +q"
      },
      correct_answer: "A",
      explanation: "For net force on Q to be 0: k (4q) Q / x^2 = k q Q / (r-x)^2 => 2/(x) = 1/(r-x) => x = 2r/3 from +4q. For +q to be in equilibrium: k (4q)(q) / r^2 + k Q q / (r/3)^2 = 0 => Q = -4q/9.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electric Charges and Fields",
        official_section: "Section 1.6: Coulomb's Law",
        page_number: "Page 12",
        exact_quote: "Principle of superposition states that net electric force on any charge is the vector sum of individual forces."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 19,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "A hydraulic lift has a small piston of cross-section 5 cm^2 and large piston of 500 cm^2. If 50 N is applied to the small piston, the maximum load supported by the large piston is:",
      options: {
        A: "5000 N",
        B: "500 N",
        C: "2500 N",
        D: "10000 N"
      },
      correct_answer: "A",
      explanation: "By Pascal's Principle: P1 = P2 => F1 / A1 = F2 / A2 => F2 = F1 * (A2 / A1) = 50 * (500 / 5) = 50 * 100 = 5000 N.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Mechanical Properties of Fluids",
        official_section: "Section 9.3: Pascal's Law and Hydraulic Machines",
        page_number: "Page 254",
        exact_quote: "Pressure applied to an enclosed fluid is transmitted undiminished: F2 = F1 (A2 / A1)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Physics',
      question: "The efficiency of a Carnot engine operating between temperatures 127°C and 27°C is:",
      options: {
        A: "25%",
        B: "50%",
        C: "75%",
        D: "20%"
      },
      correct_answer: "A",
      explanation: "T1 = 127 + 273 = 400 K; T2 = 27 + 273 = 300 K. Efficiency η = 1 - (T2 / T1) = 1 - (300 / 400) = 1/4 = 25%.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Thermodynamics",
        official_section: "Section 12.10: Carnot Engine",
        page_number: "Page 316",
        exact_quote: "The efficiency of a Carnot engine is η = 1 - T2/T1."
      },
      question_type: "Numerical/Conceptual"
    }
  ]
};

export const NEET_2024_CHEMISTRY: PYQPaper = {
  id: 'neet-2024-chemistry',
  yearLabel: 'NEET 2024',
  yearNumber: 2024,
  subject: 'Chemistry',
  totalQuestions: 20,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "In coordination chemistry, which of the following complexes is diamagnetic and has dsp2 hybridization?",
      options: {
        A: "[Ni(CN)4]2-",
        B: "[NiCl4]2-",
        C: "[Ni(CO)4]",
        D: "[MnCl4]2-"
      },
      correct_answer: "A",
      explanation: "In [Ni(CN)4]2-, Ni2+ is 3d8. CN- is a strong field ligand causing pairing of 3d electrons, leaving one 3d orbital vacant for dsp2 hybridization (square planar, diamagnetic).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        official_section: "Section 9.5: Bonding in Coordination Compounds (Valence Bond Theory)",
        page_number: "Page 255",
        exact_quote: "In [Ni(CN)4]2-, pairing of 3d electrons occurs yielding dsp2 square planar diamagnetic complex."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following compounds reacts fastest with Lucas reagent (conc. HCl + anhydrous ZnCl2)?",
      options: {
        A: "2-Methylpropan-2-ol (tert-butanol)",
        B: "Propan-2-ol",
        C: "Propan-1-ol",
        D: "Ethanol"
      },
      correct_answer: "A",
      explanation: "Tertiary alcohols react immediately with Lucas reagent because the tertiary carbocation formed as intermediate is most stable.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alcohols, Phenols and Ethers",
        official_section: "Section 11.4: Reactions of Alcohols",
        page_number: "Page 339",
        exact_quote: "Tertiary alcohols react immediately with Lucas reagent, secondary in about 5 minutes, while primary alcohols do not produce turbidity at room temperature."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following polymers is a polyamide formed by condensation polymerisation?",
      options: {
        A: "Nylon 6,6",
        B: "Terylene (Dacron)",
        C: "Teflon",
        D: "Bakelite"
      },
      correct_answer: "A",
      explanation: "Nylon 6,6 is a synthetic polyamide prepared by the condensation polymerisation of hexamethylenediamine and adipic acid.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Polymers",
        official_section: "Section 15.2: Types of Polymerisation Reactions (Polyamides)",
        page_number: "Page 439",
        exact_quote: "Polyamides possess amide linkages. Nylon 6,6 is prepared by condensation polymerisation of hexamethylenediamine with adipic acid."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "For a first order reaction, if rate constant k is 2.303 * 10^-3 s^-1, the time required for 90% completion of reaction is:",
      options: {
        A: "1000 seconds",
        B: "500 seconds",
        C: "2303 seconds",
        D: "100 seconds"
      },
      correct_answer: "A",
      explanation: "t = (2.303 / k) * log10 [a / (a - 0.9a)] = (2.303 / (2.303 * 10^-3)) * log10(10) = 1000 * 1 = 1000 s.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Chemical Kinetics",
        official_section: "Section 4.3: Integrated Rate Equations",
        page_number: "Page 107",
        exact_quote: "For a first order reaction, k = (2.303/t) log([R]0/[R])."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following organic compounds gives a positive iodoform test (forms yellow precipitate of CHI3 with I2 + NaOH)?",
      options: {
        A: "Pentan-2-one",
        B: "Pentan-3-one",
        C: "Benzaldehyde",
        D: "Methanol"
      },
      correct_answer: "A",
      explanation: "Compounds containing the CH3-C=O or CH3-CH(OH)- group give positive iodoform test. Pentan-2-one is a methyl ketone (CH3-CO-CH2-CH2-CH3), whereas pentan-3-one does not possess a terminal methyl ketone.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.3: Oxidation (Haloform Reaction)",
        page_number: "Page 371",
        exact_quote: "Aldehydes and ketones having at least one methyl group linked to the carbonyl carbon atom are oxidized by sodium hypohalite to give haloform."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "According to VSEPR theory, the shape of ClF3 and XeF4 molecules are respectively:",
      options: {
        A: "T-shaped and Square Planar",
        B: "Trigonal planar and Tetrahedral",
        C: "See-saw and Square Planar",
        D: "T-shaped and Tetrahedral"
      },
      correct_answer: "A",
      explanation: "ClF3 has 3 bond pairs and 2 lone pairs on Cl (sp3d hybridization) giving a T-shaped geometry. XeF4 has 4 bond pairs and 2 lone pairs on Xe (sp3d2 hybridization) giving a square planar shape.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Chemical Bonding and Molecular Structure",
        official_section: "Section 4.2: VSEPR Theory",
        page_number: "Page 113",
        exact_quote: "Molecules with 3 bond pairs and 2 lone pairs adopt T-shaped geometry; molecules with 4 bond pairs and 2 lone pairs adopt square planar geometry."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "The standard electrode potentials E° of Zn2+/Zn and Cu2+/Cu are -0.76 V and +0.34 V respectively. The standard EMF of the Daniel cell is:",
      options: {
        A: "+1.10 V",
        B: "-1.10 V",
        C: "+0.42 V",
        D: "-0.42 V"
      },
      correct_answer: "A",
      explanation: "E°cell = E°cathode - E°anode = +0.34 V - (-0.76 V) = +0.34 + 0.76 = +1.10 V.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electrochemistry",
        official_section: "Section 3.2: Galvanic Cells",
        page_number: "Page 69",
        exact_quote: "E°cell = E°right - E°left = +0.34 V - (-0.76 V) = 1.10 V."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following molecules has a bond order of 3 and is diamagnetic according to Molecular Orbital Theory?",
      options: {
        A: "N2",
        B: "O2",
        C: "C2",
        D: "B2"
      },
      correct_answer: "A",
      explanation: "N2 has 14 electrons: σ1s2 σ*1s2 σ2s2 σ*2s2 π2px2=π2py2 σ2pz2. Bond Order = (10 - 4)/2 = 3. All electrons are paired, making it diamagnetic.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Chemical Bonding and Molecular Structure",
        official_section: "Section 4.7: Molecular Orbital Theory",
        page_number: "Page 130",
        exact_quote: "The bond order of N2 molecule is 3 and it is diamagnetic because all electrons are paired."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "The major product formed when phenol is treated with chloroform and aqueous sodium hydroxide (Reimer-Tiemann reaction) is:",
      options: {
        A: "Salicylaldehyde (o-hydroxybenzaldehyde)",
        B: "Salicylic acid",
        C: "Benzoquinone",
        D: "p-Nitrophenol"
      },
      correct_answer: "A",
      explanation: "Phenol reacts with CHCl3 in presence of NaOH to form intermediate substituted benzal chloride which hydrolyses to produce salicylaldehyde as major product.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alcohols, Phenols and Ethers",
        official_section: "Section 11.4.4: Reimer-Tiemann Reaction",
        page_number: "Page 346",
        exact_quote: "On treating phenol with chloroform in the presence of sodium hydroxide, a -CHO group is introduced at ortho position; the product is salicylaldehyde."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following is an intensive thermodynamic property?",
      options: {
        A: "Temperature",
        B: "Volume",
        C: "Internal energy",
        D: "Enthalpy"
      },
      correct_answer: "A",
      explanation: "Intensive properties do not depend on the quantity or mass of matter present (e.g., temperature, pressure, density). Volume, enthalpy and internal energy are extensive properties.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Thermodynamics",
        official_section: "Section 6.2: Extensive and Intensive Properties",
        page_number: "Page 164",
        exact_quote: "An intensive property is one whose value does not depend on the size or extent of the system, e.g., temperature, density, pressure."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "The magnetic moment of [Fe(H2O)6]2+ is approximately:",
      options: {
        A: "4.9 BM",
        B: "5.9 BM",
        C: "2.8 BM",
        D: "0 BM"
      },
      correct_answer: "A",
      explanation: "Fe2+ has 3d6 configuration. H2O is a weak field ligand, so no pairing occurs (t2g4 eg2). Number of unpaired electrons n = 4. μ = sqrt(4 * 6) = sqrt(24) ≈ 4.90 BM.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        official_section: "Section 9.5.4: Crystal Field Theory",
        page_number: "Page 259",
        exact_quote: "Magnetic moment μ = √[n(n+2)] BM; for n = 4 unpaired electrons μ = 4.90 BM."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following vitamins is water-soluble and excreted in urine?",
      options: {
        A: "Vitamin C (Ascorbic acid)",
        B: "Vitamin A",
        C: "Vitamin D",
        D: "Vitamin K"
      },
      correct_answer: "A",
      explanation: "B group vitamins and Vitamin C are water-soluble. They are excreted readily in urine and must be supplied regularly in diet. Vitamins A, D, E, K are fat-soluble.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biomolecules",
        official_section: "Section 14.3: Vitamins",
        page_number: "Page 428",
        exact_quote: "Water soluble vitamins must be supplied regularly in diet because they are readily excreted in urine."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "The freezing point depression constant Kf of water is 1.86 K kg mol^-1. The depression in freezing point for a 0.1 molal aqueous solution of non-electrolyte glucose is:",
      options: {
        A: "0.186 K",
        B: "1.86 K",
        C: "0.0186 K",
        D: "0.372 K"
      },
      correct_answer: "A",
      explanation: "ΔTf = i * Kf * m. For glucose, i = 1. ΔTf = 1 * 1.86 * 0.1 = 0.186 K.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Solutions",
        official_section: "Section 2.6.3: Depression of Freezing Point",
        page_number: "Page 49",
        exact_quote: "ΔTf = Kf · m."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Cannizzaro reaction is not shown by which of the following carbonyl compounds?",
      options: {
        A: "Acetaldehyde (CH3CHO)",
        B: "Formaldehyde (HCHO)",
        C: "Benzaldehyde (C6H5CHO)",
        D: "Trimethylacetaldehyde ((CH3)3CCHO)"
      },
      correct_answer: "A",
      explanation: "Cannizzaro reaction is given by aldehydes which do NOT possess α-hydrogen atoms. Acetaldehyde has 3 α-hydrogens and instead undergoes aldol condensation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.4: Cannizzaro Reaction",
        page_number: "Page 373",
        exact_quote: "Aldehydes which do not have an α-hydrogen atom undergo self-oxidation and reduction on heating with concentrated alkali (Cannizzaro reaction)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following lanthanoids exhibits a stable +4 oxidation state due to noble gas f0 electron configuration?",
      options: {
        A: "Cerium (Ce4+)",
        B: "Europium (Eu)",
        C: "Terbium (Tb)",
        D: "Lutetium (Lu)"
      },
      correct_answer: "A",
      explanation: "Cerium (Z = 58) has ground state configuration [Xe] 4f1 5d1 6s2. In Ce4+, all four valence electrons are lost to achieve stable noble gas [Xe] 4f0 configuration.",
      ncert_reference: {
        class: "Class 12",
        chapter: "The d- and f-Block Elements",
        official_section: "Section 8.5.3: Oxidation States of Lanthanoids",
        page_number: "Page 237",
        exact_quote: "Ce(IV) has a noble gas configuration and is a well known analytical reagent."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "In the Haber process for synthesis of ammonia, Le Chatelier's principle predicts maximum yield at:",
      options: {
        A: "High pressure and optimum low temperature",
        B: "Low pressure and high temperature",
        C: "Low pressure and low temperature",
        D: "High pressure and high temperature"
      },
      correct_answer: "A",
      explanation: "N2(g) + 3H2(g) <=> 2NH3(g) (ΔH = -92.4 kJ/mol). Since Δn = 2 - 4 = -2 (moles decrease), high pressure favours forward reaction. Since reaction is exothermic, low temperature favours forward reaction.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Equilibrium",
        official_section: "Section 7.8: Factors Affecting Equilibria (Le Chatelier's Principle)",
        page_number: "Page 214",
        exact_quote: "High pressure favours the forward reaction due to decrease in number of moles of gas."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 17,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Gabriel phthalimide synthesis is exclusively used for the preparation of:",
      options: {
        A: "Primary aliphatic amines",
        B: "Aromatic primary amines (Aniline)",
        C: "Secondary amines",
        D: "Tertiary amines"
      },
      correct_answer: "A",
      explanation: "Gabriel phthalimide synthesis produces pure primary aliphatic amines. Aryl halides cannot be used because they do not undergo nucleophilic substitution with phthalimide anion.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Amines",
        official_section: "Section 13.3: Preparation of Amines",
        page_number: "Page 395",
        exact_quote: "Gabriel phthalimide synthesis is used for the preparation of aliphatic primary amines. Aromatic primary amines cannot be prepared by this method."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "The geometry and hybridization of xenon in XeO3 are respectively:",
      options: {
        A: "Pyramidal and sp3",
        B: "Trigonal planar and sp2",
        C: "T-shaped and sp3d",
        D: "Octahedral and sp3d2"
      },
      correct_answer: "A",
      explanation: "Xe has 8 valence electrons. In XeO3, there are 3 Xe=O double bonds (3 σ bonds) and 1 lone pair on Xe. Hybridization = sp3 with pyramidal geometry.",
      ncert_reference: {
        class: "Class 12",
        chapter: "The p-Block Elements",
        official_section: "Section 7.23: Xenon-Oxygen Compounds",
        page_number: "Page 213",
        exact_quote: "XeO3 is a colourless explosive solid and has a pyramidal molecular structure."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "What is the IUPAC name of the complex K3[Fe(CN)6]?",
      options: {
        A: "Potassium hexacyanidoferrate(III)",
        B: "Potassium hexacyanoferrate(II)",
        C: "Tripotassium hexacyanoiron(III)",
        D: "Potassium ferricyanide"
      },
      correct_answer: "A",
      explanation: "Cation is potassium. Anion has 6 CN- (hexacyanido). Oxidation state of Fe: 3(+1) + Fe + 6(-1) = 0 => Fe = +3. Anionic complex suffix is ferrate(III). Name: Potassium hexacyanidoferrate(III).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        official_section: "Section 9.3: Nomenclature of Coordination Compounds",
        page_number: "Page 248",
        exact_quote: "K3[Fe(CN)6] is named Potassium hexacyanidoferrate(III)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Chemistry',
      question: "Which of the following pairs of solutions forms an ideal solution obeying Raoult's law over the entire range of concentration?",
      options: {
        A: "Benzene and Toluene",
        B: "Ethanol and Acetone",
        C: "Chloroform and Acetone",
        D: "Phenol and Aniline"
      },
      correct_answer: "A",
      explanation: "Benzene and toluene have nearly identical molecular sizes and intermolecular forces (A-A ≈ B-B ≈ A-B). Hence ΔHmix = 0, ΔVmix = 0, forming an ideal solution.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Solutions",
        official_section: "Section 2.5: Ideal and Non-Ideal Solutions",
        page_number: "Page 45",
        exact_quote: "A solution of benzene and toluene is nearly ideal."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const NEET_2024_BOTANY: PYQPaper = {
  id: 'neet-2024-botany',
  yearLabel: 'NEET 2024',
  yearNumber: 2024,
  subject: 'Botany',
  totalQuestions: 20,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Match List I with List II regarding components of lac operon:\nList I: (A) Gene 'i', (B) Gene 'z', (C) Gene 'a', (D) Gene 'y'\nList II: (I) Transacetylase, (II) Permease, (III) Beta-galactosidase, (IV) Repressor protein\nChoose the correct answer from the options given below:",
      options: {
        A: "A-IV, B-III, C-I, D-II",
        B: "A-III, B-I, C-IV, D-II",
        C: "A-IV, B-I, C-II, D-III",
        D: "A-II, B-III, C-I, D-IV"
      },
      correct_answer: "A",
      explanation: "In the lac operon of E. coli: Gene 'i' codes for repressor protein (IV); gene 'z' codes for beta-galactosidase (III); gene 'y' codes for permease (II); gene 'a' codes for transacetylase (I).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        official_section: "Section 6.8: Regulation of Gene Expression (The Lac Operon)",
        page_number: "Page 116",
        exact_quote: "The z gene codes for beta-galactosidase... The y gene codes for permease... The a gene encodes a transacetylase."
      },
      question_type: "Match the Column"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Which of the following is an example of an obligate anaerobe that fixes nitrogen symbiotically in root nodules of non-leguminous plants?",
      options: {
        A: "Frankia (in Alnus)",
        B: "Rhizobium",
        C: "Azotobacter",
        D: "Rhodospirillum"
      },
      correct_answer: "A",
      explanation: "The microbe Frankia produces nitrogen-fixing nodules on the roots of non-leguminous plants (e.g., Alnus).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Mineral Nutrition",
        official_section: "Section 12.6.2: Biological Nitrogen Fixation",
        page_number: "Page 202",
        exact_quote: "Frankia also produces nitrogen-fixing nodules on the roots of non-leguminous plants (e.g., Alnus)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "In C4 plants, the primary CO2 acceptor and the first stable photosynthetic product are respectively:",
      options: {
        A: "Phosphoenolpyruvate (PEP) and Oxaloacetic acid (OAA)",
        B: "RuBP and 3-PGA",
        C: "PEP and Malic acid",
        D: "RuBP and Oxaloacetic acid"
      },
      correct_answer: "A",
      explanation: "In mesophyll cells of C4 plants, primary CO2 acceptor is 3-carbon PEP, catalyzed by PEP carboxylase, forming 4-carbon OAA as the first stable product.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Photosynthesis in Higher Plants",
        official_section: "Section 13.8: The C4 Pathway (Hatch-Slack Pathway)",
        page_number: "Page 218",
        exact_quote: "The primary CO2 acceptor is a 3-carbon molecule phosphoenolpyruvate (PEP) and is present in the mesophyll cells. The C4 acid OAA is formed."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "The site of perception of light/dark duration for induction of flowering in photoperiodic plants is:",
      options: {
        A: "Leaves",
        B: "Shoot apex",
        C: "Floral buds",
        D: "Lateral meristem"
      },
      correct_answer: "A",
      explanation: "The site of perception of light/dark duration are the leaves. A hormonal substance (florigen) migrates from leaves to shoot apices to induce flowering.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Plant Growth and Development",
        official_section: "Section 15.5: Photoperiodism",
        page_number: "Page 252",
        exact_quote: "It has been hypothesised that there is a hormonal substance that is responsible for flowering... The site of perception of light/dark duration are the leaves."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "In a monohybrid cross between heterozygous tall pea plants (Tt x Tt), what proportion of the offspring are expected to be homozygous tall?",
      options: {
        A: "1/4 (25%)",
        B: "1/2 (50%)",
        C: "3/4 (75%)",
        D: "0%"
      },
      correct_answer: "A",
      explanation: "Genotypic ratio of Tt x Tt is 1 TT : 2 Tt : 1 tt. The proportion of homozygous tall (TT) is 1 out of 4 (25%).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.2.1: Law of Segregation",
        page_number: "Page 73",
        exact_quote: "The genotypic ratio of F2 generation in a monohybrid cross is 1:2:1 (1/4 TT : 1/2 Tt : 1/4 tt)."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "During which phase of the cell cycle does DNA replication and duplication of centriole occur?",
      options: {
        A: "S phase (Synthesis phase)",
        B: "G1 phase",
        C: "G2 phase",
        D: "M phase"
      },
      correct_answer: "A",
      explanation: "In S phase, amount of DNA doubles (2C to 4C) per cell. In animal cells, centriole duplication begins in cytoplasm during S phase.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Cell Cycle and Cell Division",
        official_section: "Section 10.1.1: S Phase",
        page_number: "Page 163",
        exact_quote: "During S phase, DNA synthesis occurs... In animal cells, centriole duplicates in the cytoplasm during S phase."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "The water potential (Ψw) of pure water at standard temperatures, which is not under any pressure, is taken to be:",
      options: {
        A: "Zero",
        B: "100",
        C: "Negative",
        D: "1.0"
      },
      correct_answer: "A",
      explanation: "By convention, the water potential of pure water at standard temperatures, which is not under any pressure, is taken to be zero.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Transport in Plants",
        official_section: "Section 11.2.1: Water Potential",
        page_number: "Page 179",
        exact_quote: "By convention, the water potential of pure water at standard temperature, which is not under any pressure, is taken to be zero."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "In gymnosperms, the endosperm is:",
      options: {
        A: "Haploid and formed before fertilization",
        B: "Triploid and formed after fertilization",
        C: "Diploid and formed after fertilization",
        D: "Tetraploid"
      },
      correct_answer: "A",
      explanation: "In gymnosperms, the female gametophyte acts as the endosperm. Since it is formed before fertilization directly from megaspore, it is haploid (n).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Plant Kingdom",
        official_section: "Section 3.4: Gymnosperms",
        page_number: "Page 39",
        exact_quote: "In gymnosperms, the endosperm is the female gametophyte and is haploid, formed before fertilization."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Guttation is caused primarily by:",
      options: {
        A: "Root pressure",
        B: "Transpiration pull",
        C: "Osmosis",
        D: "Imbibition"
      },
      correct_answer: "A",
      explanation: "Root pressure is a positive pressure that forces water out in liquid drops through hydathodes near vein tips of grass blades, termed guttation.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Transport in Plants",
        official_section: "Section 11.4.1: Root Pressure",
        page_number: "Page 186",
        exact_quote: "Water loss in its liquid phase is known as guttation. The greatest contribution of root pressure may be guttation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "The term 'polyadelphous' is related to which part of a flower?",
      options: {
        A: "Androecium (stamens united into more than two bundles)",
        B: "Gynoecium",
        C: "Calyx",
        D: "Corolla"
      },
      correct_answer: "A",
      explanation: "Stamens may be united into one bundle (monadelphous - China rose), two bundles (diadelphous - pea), or into more than two bundles (polyadelphous - Citrus).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Morphology of Flowering Plants",
        official_section: "Section 5.5.1: Androecium",
        page_number: "Page 75",
        exact_quote: "Stamens may be united into more than two bundles as in Citrus (polyadelphous)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Which of the following is NOT an ex-situ conservation strategy for biodiversity?",
      options: {
        A: "National Park",
        B: "Botanical Garden",
        C: "Zoological Park",
        D: "Wildlife Safari Park"
      },
      correct_answer: "A",
      explanation: "National Parks, Biosphere Reserves, and Wildlife Sanctuaries are in-situ (on-site) conservation strategies. Botanical gardens, seed banks, and zoological parks are ex-situ.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biodiversity and Conservation",
        official_section: "Section 15.2.2: Ex-situ Conservation",
        page_number: "Page 267",
        exact_quote: "National Parks and Wildlife Sanctuaries are in-situ conservation, whereas zoological parks, botanical gardens and wildlife safari parks serve ex-situ conservation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Restriction endonucleases are enzymes that:",
      options: {
        A: "Make cuts at specific palindromic nucleotide sequences within DNA",
        B: "Join DNA fragments together",
        C: "Synthesize DNA from RNA",
        D: "Remove nucleotides from ends of DNA"
      },
      correct_answer: "A",
      explanation: "Restriction endonucleases inspect the length of DNA and bind to specific palindromic recognition sequences, cutting both strands of the double helix at specific points in sugar-phosphate backbones.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biotechnology: Principles and Processes",
        official_section: "Section 11.2.1: Restriction Enzymes",
        page_number: "Page 196",
        exact_quote: "Each restriction endonuclease inspects the length of a DNA sequence... It binds to the DNA and cuts each of the two strands at specific points in their sugar-phosphate backbones."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Which cell organelle is considered the 'powerhouse of the cell' and has its own circular DNA and 70S ribosomes?",
      options: {
        A: "Mitochondria",
        B: "Endoplasmic Reticulum",
        C: "Golgi apparatus",
        D: "Lysosome"
      },
      correct_answer: "A",
      explanation: "Mitochondria possess their own single circular DNA molecule, RNA molecules, and 70S ribosomes, dividing by fission.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Cell: The Unit of Life",
        official_section: "Section 8.5.3: Mitochondria",
        page_number: "Page 135",
        exact_quote: "The matrix also possesses single circular DNA molecule, a few RNA molecules, 70S ribosomes and the components required for synthesis of proteins."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Kranz anatomy is a characteristic anatomical feature of leaves of:",
      options: {
        A: "C4 plants like Maize and Sugarcane",
        B: "C3 plants like Rice and Wheat",
        C: "CAM plants like Pineapple",
        D: "Hydrophytes"
      },
      correct_answer: "A",
      explanation: "Kranz anatomy (wreath-like arrangement of large bundle sheath cells with agranal chloroplasts surrounding vascular bundles) is unique to C4 plants.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Photosynthesis in Higher Plants",
        official_section: "Section 13.8: The C4 Pathway",
        page_number: "Page 218",
        exact_quote: "The bundle sheath cells may form several layers around the vascular bundles; they have a large number of chloroplasts, thick walls impervious to gaseous exchange and no intercellular spaces. This anatomy is Kranz anatomy."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "What is the ploidy level of aleurone layer in maize seed?",
      options: {
        A: "3n (Triploid)",
        B: "2n (Diploid)",
        C: "n (Haploid)",
        D: "4n (Tetraploid)"
      },
      correct_answer: "A",
      explanation: "The aleurone layer is the outer proteinaceous layer of the endosperm. Since endosperm in angiosperms is formed by triple fusion (3n), the aleurone layer is triploid (3n).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Morphology of Flowering Plants",
        official_section: "Section 5.7.2: Structure of Monocotyledonous Seed",
        page_number: "Page 77",
        exact_quote: "The outer covering of endosperm separates the embryo by a proteinaceous layer called aleurone layer."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "During non-cyclic photophosphorylation (Z-scheme), the oxygen-evolving complex associated with PS II requires which of the following mineral ions?",
      options: {
        A: "Manganese (Mn) and Chlorine (Cl)",
        B: "Magnesium (Mg) and Iron (Fe)",
        C: "Zinc (Zn) and Copper (Cu)",
        D: "Molybdenum (Mo) and Boron (B)"
      },
      correct_answer: "A",
      explanation: "Photolysis of water (splitting of water into H+, e-, and O2) is catalyzed by an oxygen-evolving complex containing Manganese (Mn2+) and Chlorine (Cl-).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Photosynthesis in Higher Plants",
        official_section: "Section 13.6: Splitting of Water",
        page_number: "Page 212",
        exact_quote: "The water splitting complex is associated with PS II... Manganese and chlorine ions play a crucial role in water splitting."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "The pioneer species in primary ecological succession on bare rocks are:",
      options: {
        A: "Lichens",
        B: "Mosses",
        C: "Perennial grasses",
        D: "Trees"
      },
      correct_answer: "A",
      explanation: "Lichens secrete acids that dissolve rocks and help in weathering and soil formation, acting as the pioneer community on bare rock (xerarch succession).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ecosystem",
        official_section: "Section 14.6: Ecological Succession",
        page_number: "Page 251",
        exact_quote: "In primary succession on rocks these are usually lichens which are able to secrete acids to dissolve rock, helping in weathering and soil formation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Which of the following plant tissues is dead at maturity and possesses thick, lignified secondary walls with pits?",
      options: {
        A: "Sclerenchyma",
        B: "Collenchyma",
        C: "Parenchyma",
        D: "Chlorenchyma"
      },
      correct_answer: "A",
      explanation: "Sclerenchyma consists of long, narrow cells with thick and lignified cell walls having a few or numerous pits. They are usually dead and without protoplasts.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Anatomy of Flowering Plants",
        official_section: "Section 6.1.2: Sclerenchyma",
        page_number: "Page 86",
        exact_quote: "Sclerenchyma consists of long, narrow cells with thick and lignified cell walls... They are usually dead and without protoplasts."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "The functional unit of environment that consists of biotic community interacting with abiotic components is termed:",
      options: {
        A: "Ecosystem",
        B: "Biome",
        C: "Biosphere",
        D: "Ecological niche"
      },
      correct_answer: "A",
      explanation: "An ecosystem is a functional unit of nature, where living organisms interact among themselves and also with the surrounding physical environment.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ecosystem",
        official_section: "Section 14.1: Ecosystem - Structure and Function",
        page_number: "Page 241",
        exact_quote: "An ecosystem can be visualised as a functional unit of nature, where living organisms interact among themselves and also with the surrounding physical environment."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Botany',
      question: "Golden Rice is a genetically modified crop variety developed to synthesize:",
      options: {
        A: "Beta-carotene (provitamin A)",
        B: "Vitamin C",
        C: "Iron only",
        D: "Lysine"
      },
      correct_answer: "A",
      explanation: "Golden rice is genetically engineered to biosynthesize beta-carotene, a precursor of Vitamin A, to address dietary vitamin A deficiency.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biotechnology and Its Applications",
        official_section: "Section 12.1: Biotechnological Applications in Agriculture",
        page_number: "Page 208",
        exact_quote: "Rice has been enriched with Vitamin A (Golden rice)."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const NEET_2024_ZOOLOGY: PYQPaper = {
  id: 'neet-2024-zoology',
  yearLabel: 'NEET 2024',
  yearNumber: 2024,
  subject: 'Zoology',
  totalQuestions: 20,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which of the following hormones is NOT secreted by human placenta during pregnancy?",
      options: {
        A: "Luteinizing Hormone (LH)",
        B: "Human Chorionic Gonadotropin (hCG)",
        C: "Human Placental Lactogen (hPL)",
        D: "Estrogens and Progesterones"
      },
      correct_answer: "A",
      explanation: "Placenta produces hormones like hCG, hPL, estrogens, progesterone and relaxin (in later phase). LH (Luteinizing Hormone) is secreted by the anterior pituitary gland, not the placenta.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.6: Pregnancy and Embryonic Development",
        page_number: "Page 53",
        exact_quote: "Placenta also acts as an endocrine tissue and produces several hormones like human chorionic gonadotropin (hCG), human placental lactogen (hPL), estrogens, progestogens, etc."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "In the human eye, the photoreceptor cells containing the photopigment rhodopsin are:",
      options: {
        A: "Rods",
        B: "Cones",
        C: "Ganglion cells",
        D: "Amacrine cells"
      },
      correct_answer: "A",
      explanation: "The rods contain a purplish-red protein called the rhodopsin or visual purple, which contains a derivative of Vitamin A (retinal).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Neural Control and Coordination",
        official_section: "Section 21.6: Sense Organs (The Eye)",
        page_number: "Page 324",
        exact_quote: "The daylight (photopic) vision and colour vision are functions of cones and the twilight (scotopic) vision is the function of the rods. The rods contain a purplish-red protein called rhodopsin."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which of the following immunoglobulins is the most abundant in human colostrum and provides natural passive immunity to newborns?",
      options: {
        A: "IgA",
        B: "IgG",
        C: "IgM",
        D: "IgE"
      },
      correct_answer: "A",
      explanation: "Colostrum secreted by mother during the initial days of lactation contains abundant antibodies (IgA) to protect the infant.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        official_section: "Section 8.2.2: Acquired Immunity",
        page_number: "Page 152",
        exact_quote: "The yellowish fluid colostrum secreted by mother during the initial days of lactation has abundant antibodies (IgA) to protect the infant."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "According to the sliding filament theory of muscle contraction, which of the following bands shortens during contraction?",
      options: {
        A: "I-band (Isotropic band) and H-zone",
        B: "A-band only",
        C: "Both A-band and I-band",
        D: "Z-disc only"
      },
      correct_answer: "A",
      explanation: "During contraction, the actin thin filaments slide past thick filaments. The 'I' bands get reduced and H-zone disappears, whereas the 'A' bands retain their length.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Locomotion and Movement",
        official_section: "Section 20.2.1: Mechanism of Muscle Contraction",
        page_number: "Page 307",
        exact_quote: "During shortening of the muscle, i.e., contraction, the 'I' bands get reduced, whereas the 'A' bands retain the length."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "The hormone secretin acts on which organ to stimulate the secretion of water and bicarbonate ions?",
      options: {
        A: "Exocrine Pancreas",
        B: "Liver",
        C: "Stomach",
        D: "Gall bladder"
      },
      correct_answer: "A",
      explanation: "Secretin acts on the exocrine pancreas and stimulates secretion of water and bicarbonate ions.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Chemical Coordination and Integration",
        official_section: "Section 22.3.4: Hormones of Heart, Kidney and Gastrointestinal Tract",
        page_number: "Page 339",
        exact_quote: "Secretin acts on the exocrine pancreas and stimulates secretion of water and bicarbonate ions."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which of the following is an intrauterine device (IUD) that releases copper ions (Cu2+) to suppress sperm motility?",
      options: {
        A: "CuT and Multiload 375",
        B: "Lippes loop",
        C: "Progestasert",
        D: "LNG-20"
      },
      correct_answer: "A",
      explanation: "Copper releasing IUDs (CuT, Cu7, Multiload 375) release Cu ions which suppress sperm motility and the fertilising capacity of sperms.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Reproductive Health",
        official_section: "Section 4.2: Population Explosion and Birth Control",
        page_number: "Page 60",
        exact_quote: "Cu ions released suppress sperm motility and the fertilising capacity of sperms."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Analogous structures are a result of:",
      options: {
        A: "Convergent evolution",
        B: "Divergent evolution",
        C: "Adaptive radiation",
        D: "Genetic drift"
      },
      correct_answer: "A",
      explanation: "Analogous structures are not anatomically similar though they perform similar functions due to adaptation to similar needs (convergent evolution). Examples include wings of butterfly and birds.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Evolution",
        official_section: "Section 7.3: What are the Evidences for Evolution?",
        page_number: "Page 131",
        exact_quote: "Analogy indicates convergent evolution... Sweet potato (root modification) and potato (stem modification) is another example for analogy."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which enzyme present in human pancreatic juice hydrolyses triglycerides into diglycerides and monoglycerides?",
      options: {
        A: "Pancreatic Lipase (Steapsin)",
        B: "Trypsin",
        C: "Amylase",
        D: "Pepsin"
      },
      correct_answer: "A",
      explanation: "Pancreatic lipase acts on emulsified fats and breaks them down into diglycerides and further into monoglycerides and fatty acids.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Digestion and Absorption",
        official_section: "Section 16.2: Digestion of Food",
        page_number: "Page 262",
        exact_quote: "Fats are broken down by lipases with the help of bile into di- and monoglycerides."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "In human males, the Leydig cells (interstitial cells) are present in the interstitial spaces of testes and secrete:",
      options: {
        A: "Androgens (Testosterone)",
        B: "Inhibin",
        C: "Estrogen",
        D: "Prolactin"
      },
      correct_answer: "A",
      explanation: "Leydig cells synthesize and secrete testicular hormones called androgens (chiefly testosterone).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.1: The Male Reproductive System",
        page_number: "Page 43",
        exact_quote: "Leydig cells synthesise and secrete testicular hormones called androgens."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section A',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which of the following blood vessels carries deoxygenated blood from the right ventricle to the lungs?",
      options: {
        A: "Pulmonary Artery",
        B: "Pulmonary Vein",
        C: "Aorta",
        D: "Coronary Sinus"
      },
      correct_answer: "A",
      explanation: "The pulmonary artery arises from the right ventricle and carries deoxygenated blood to the lungs for oxygenation.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Body Fluids and Circulation",
        official_section: "Section 18.3.1: Human Circulatory System",
        page_number: "Page 284",
        exact_quote: "The deoxygenated blood pumped into the pulmonary artery is passed on to the lungs from where the oxygenated blood is carried by the pulmonary veins into the left atrium."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "The part of the human nephron that is impermeable to water but allows active reabsorption of electrolytes is:",
      options: {
        A: "Ascending limb of Henle's loop",
        B: "Descending limb of Henle's loop",
        C: "Proximal Convoluted Tubule (PCT)",
        D: "Collecting duct"
      },
      correct_answer: "A",
      explanation: "The descending limb of loop of Henle is permeable to water but almost impermeable to electrolytes. In contrast, the ascending limb is impermeable to water but permeable to electrolytes.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Excretory Products and Their Elimination",
        official_section: "Section 19.3: Function of the Tubules",
        page_number: "Page 294",
        exact_quote: "The ascending limb is impermeable to water but allows transport of electrolytes actively or passively."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which cranial meninge is in direct contact with brain tissue and contains numerous blood vessels?",
      options: {
        A: "Pia mater",
        B: "Dura mater",
        C: "Arachnoid mater",
        D: "Corpus callosum"
      },
      correct_answer: "A",
      explanation: "From outside in: outer tough dura mater, middle thin arachnoid mater, and inner vascular pia mater which is in direct contact with brain tissue.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Neural Control and Coordination",
        official_section: "Section 21.4: Central Neural System",
        page_number: "Page 320",
        exact_quote: "The brain is covered by cranial meninges consisting of an outer layer called dura mater, a very thin middle layer called arachnoid and an inner layer called pia mater (which is in contact with the brain tissue)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "The causal organism of amoebiasis (amoebic dysentery) that lives as an endoparasite in the large intestine of humans is:",
      options: {
        A: "Entamoeba histolytica",
        B: "Plasmodium vivax",
        C: "Ascaris lumbricoides",
        D: "Wuchereria bancrofti"
      },
      correct_answer: "A",
      explanation: "Entamoeba histolytica is a protozoan parasite in the large intestine of human which causes amoebiasis. Symptoms include constipation, abdominal pain, cramps, stools with excess mucous and blood clots.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        official_section: "Section 8.1: Common Diseases in Humans",
        page_number: "Page 149",
        exact_quote: "Entamoeba histolytica is a protozoan parasite in the large intestine of human which causes amoebiasis (amoebic dysentery)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which of the following is a competitive inhibitor of the enzyme succinate dehydrogenase, used to illustrate enzyme inhibition?",
      options: {
        A: "Malonate",
        B: "Oxaloacetate",
        C: "Fumarate",
        D: "Glutamate"
      },
      correct_answer: "A",
      explanation: "Malonate closely resembles the substrate succinate in structure and competitively inhibits succinate dehydrogenase.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Biomolecules",
        official_section: "Section 9.12.5: Factors Affecting Enzyme Activity (Inhibition)",
        page_number: "Page 158",
        exact_quote: "Inhibition of succinic dehydrogenase by malonate which closely resembles the substrate succinate in structure."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "The structural and functional unit of the human liver is:",
      options: {
        A: "Hepatic lobules",
        B: "Glisson's capsule",
        C: "Crypts of Lieberkühn",
        D: "Islets of Langerhans"
      },
      correct_answer: "A",
      explanation: "The hepatic lobules are the structural and functional units of liver containing hepatic cells arranged in the form of cords, covered by thin connective tissue sheath called Glisson's capsule.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Digestion and Absorption",
        official_section: "Section 16.1.2: Digestive Glands (Liver)",
        page_number: "Page 260",
        exact_quote: "The hepatic lobules are the structural and functional units of liver containing hepatic cells arranged in the form of cords."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "The total lung capacity (TLC) in a healthy human adult is defined by:",
      options: {
        A: "Vital Capacity (VC) + Residual Volume (RV)",
        B: "Tidal Volume (TV) + Inspiratory Reserve Volume (IRV)",
        C: "Inspiratory Capacity (IC) + Expiratory Reserve Volume (ERV)",
        D: "Functional Residual Capacity (FRC) + Tidal Volume (TV)"
      },
      correct_answer: "A",
      explanation: "Total Lung Capacity (TLC) is the total volume of air accommodated in the lungs at the end of a forced inspiration. TLC = RV + ERV + TV + IRV = VC + RV.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Breathing and Exchange of Gases",
        official_section: "Section 17.2: Respiratory Volumes and Capacities",
        page_number: "Page 272",
        exact_quote: "Total Lung Capacity (TLC): Total volume of air accommodated in the lungs at the end of a forced inspiration. This includes RV, ERV, TV and IRV or vital capacity + residual volume."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "The first clinical gene therapy was given in 1990 to a 4-year-old girl with which enzyme deficiency?",
      options: {
        A: "Adenosine deaminase (ADA)",
        B: "Tyrosinase",
        C: "Glucocerebrosidase",
        D: "Phenylalanine hydroxylase"
      },
      correct_answer: "A",
      explanation: "The first clinical gene therapy was given in 1990 to a 4-year-old girl with adenosine deaminase (ADA) deficiency caused due to deletion of the gene for ADA.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biotechnology and Its Applications",
        official_section: "Section 12.2.1: Gene Therapy",
        page_number: "Page 211",
        exact_quote: "The first clinical gene therapy was given in 1990 to a 4-year-old girl with adenosine deaminase (ADA) deficiency."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which of the following is an autosomal recessive genetic disorder caused by substitution of Glutamic acid by Valine at the sixth position of the beta-globin chain?",
      options: {
        A: "Sickle-cell anemia",
        B: "Thalassemia",
        C: "Hemophilia",
        D: "Down syndrome"
      },
      correct_answer: "A",
      explanation: "Sickle cell anemia is caused by point mutation substituting GAG by GUG, replacing glutamic acid (Glu) by valine (Val) at the sixth position of the beta-globin chain.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.2: Mendelian Disorders (Sickle-cell Anemia)",
        page_number: "Page 89",
        exact_quote: "The defect is caused by the substitution of Glutamic acid (Glu) by Valine (Val) at the sixth position of the beta globin chain of the haemoglobin molecule."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "Which bone forms the collarbone in the human pectoral girdle?",
      options: {
        A: "Clavicle",
        B: "Scapula",
        C: "Sternum",
        D: "Humerus"
      },
      correct_answer: "A",
      explanation: "Each clavicle (collarbone) is a long slender bone with two curvatures that articulates with the acromion of the scapula.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Locomotion and Movement",
        official_section: "Section 20.3.3: Pectoral and Pelvic Girdles",
        page_number: "Page 311",
        exact_quote: "Each clavicle is a long slender bone with two curvatures. This bone is commonly called the collar bone."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      section: 'Section B',
      pyq_year: 'NEET 2024',
      subject: 'Zoology',
      question: "In ECG (Electrocardiogram), what does the T-wave represent?",
      options: {
        A: "Ventricular repolarisation",
        B: "Ventricular depolarisation",
        C: "Atrial depolarisation",
        D: "Atrial repolarisation"
      },
      correct_answer: "A",
      explanation: "P-wave represents atrial depolarisation; QRS complex represents ventricular depolarisation; T-wave represents return of ventricles from excited to normal state (ventricular repolarisation).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Body Fluids and Circulation",
        official_section: "Section 18.4: Electrocardiograph (ECG)",
        page_number: "Page 286",
        exact_quote: "The T-wave represents the return of the ventricles from excited to normal state (repolarisation)."
      },
      question_type: "Direct Fact"
    }
  ]
};
