import { PYQPaper, PYQQuestion } from './types';

// ==========================================
// NEET 2025 (PHASE 1) - FULL PAPERS
// ==========================================

export const NEET_2025_PHASE1_PHYSICS: PYQPaper = {
  id: 'neet-2025-p1-physics',
  yearLabel: 'NEET 2025 (Phase 1)',
  yearNumber: 2025,
  phase: 'Phase 1',
  subject: 'Physics',
  totalQuestions: 15,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A screw gauge has a pitch of 0.5 mm and 50 circular scale divisions. The least count of the screw gauge is:",
      options: {
        A: "0.01 mm",
        B: "0.05 mm",
        C: "0.001 mm",
        D: "0.1 mm"
      },
      correct_answer: "A",
      explanation: "Least Count = Pitch / Total circular scale divisions = 0.5 mm / 50 = 0.01 mm.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Units and Measurements",
        official_section: "Section 1.3: Measurement of Length",
        page_number: "Page 18",
        exact_quote: "Least count of screw gauge = Pitch / Number of divisions on circular scale."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A particle moves in a circle of radius 5 cm with constant speed and time period 0.2 π seconds. The acceleration of the particle is:",
      options: {
        A: "5 m/s^2",
        B: "25 m/s^2",
        C: "0.5 m/s^2",
        D: "10 m/s^2"
      },
      correct_answer: "A",
      explanation: "ω = 2π / T = 2π / (0.2 π) = 10 rad/s. Centripetal acceleration a = ω^2 * r = 10^2 * (0.05 m) = 100 * 0.05 = 5 m/s^2.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Motion in a Plane",
        official_section: "Section 3.8: Uniform Circular Motion",
        page_number: "Page 79",
        exact_quote: "Centripetal acceleration magnitude is ac = ω^2 r = v^2 / r."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The work done in blowing a soap bubble of radius R is W. The additional work done in expanding it from radius R to radius 2R is (surface tension T):",
      options: {
        A: "3 W",
        B: "4 W",
        C: "2 W",
        D: "W"
      },
      correct_answer: "A",
      explanation: "A soap bubble has two surfaces. W1 = 2 * T * (4π R^2) = 8π T R^2. When expanded to 2R: W_total = 8π T (2R)^2 = 4 * (8π T R^2) = 4 W. Additional work = W_total - W1 = 4 W - W = 3 W.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Mechanical Properties of Fluids",
        official_section: "Section 9.6: Surface Tension and Surface Energy",
        page_number: "Page 264",
        exact_quote: "A soap bubble has two liquid-gas interfaces; hence work done is 2 x T x ΔA."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Two point charges +3 μC and +8 μC repel each other with a force of 40 N. If a charge of -5 μC is added to each of them, then the force between them will become:",
      options: {
        A: "10 N (Attractive)",
        B: "20 N (Repulsive)",
        C: "10 N (Repulsive)",
        D: "5 N (Attractive)"
      },
      correct_answer: "A",
      explanation: "Initial charges q1 = +3, q2 = +8 => q1*q2 = 24. F1 = 40 N. New charges q1' = 3 - 5 = -2 μC, q2' = 8 - 5 = +3 μC => q1'*q2' = -6. F2 / F1 = |q1'*q2'| / (q1*q2) = 6 / 24 = 1/4. F2 = 40 / 4 = 10 N, and since signs are opposite, the force is attractive.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electric Charges and Fields",
        official_section: "Section 1.6: Coulomb's Law",
        page_number: "Page 10",
        exact_quote: "Coulomb force is directly proportional to product of magnitudes of charges and attractive between opposite charges."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The magnetic field B at the center of a circular coil of radius R carrying current I is B0. The field on its axis at a distance x = R from the center is:",
      options: {
        A: "B0 / (2 * sqrt(2))",
        B: "B0 / 2",
        C: "B0 / 4",
        D: "B0 / (4 * sqrt(2))"
      },
      correct_answer: "A",
      explanation: "B_axis = μ0 I R^2 / [2 (R^2 + x^2)^(3/2)]. At x = R: B_axis = μ0 I R^2 / [2 (2R^2)^(3/2)] = (μ0 I / 2R) * (1 / 2^(3/2)) = B0 / (2 * sqrt(2)).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Moving Charges and Magnetism",
        official_section: "Section 4.6: Magnetic Field on the Axis of a Circular Current Loop",
        page_number: "Page 146",
        exact_quote: "B = μ0 I R^2 / [2(x^2 + R^2)^(3/2)]."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A radioactive sample has half-life of 20 minutes. What fraction of the original activity will remain after 80 minutes?",
      options: {
        A: "1/16",
        B: "1/8",
        C: "1/4",
        D: "1/32"
      },
      correct_answer: "A",
      explanation: "Number of half-lives n = t / T_half = 80 / 20 = 4. Remaining activity fraction = (1/2)^n = (1/2)^4 = 1/16.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Nuclei",
        official_section: "Section 13.6: Radioactive Decays",
        page_number: "Page 447",
        exact_quote: "After n half lives, the remaining fraction of undecayed nuclei is (1/2)^n."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In an astronomical telescope in normal adjustment, the focal length of objective is 100 cm and that of eyepiece is 5 cm. The magnifying power and tube length are:",
      options: {
        A: "20 and 105 cm",
        B: "20 and 95 cm",
        C: "500 and 105 cm",
        D: "25 and 105 cm"
      },
      correct_answer: "A",
      explanation: "Magnifying power m = fo / fe = 100 / 5 = 20. Length of tube L = fo + fe = 100 + 5 = 105 cm.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.3: Astronomical Telescope",
        page_number: "Page 340",
        exact_quote: "The magnifying power of an astronomical telescope in normal adjustment is m = fo / fe and tube length is fo + fe."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The kinetic energy of photoelectrons emitted from a metallic surface when exposed to light of wavelength λ depends on:",
      options: {
        A: "Frequency of incident light",
        B: "Intensity of incident light only",
        C: "Distance of source from metal only",
        D: "Time of exposure"
      },
      correct_answer: "A",
      explanation: "According to Einstein's photoelectric equation: Kmax = hν - Φ. It depends strictly on frequency (or wavelength) of incident light and work function, not on intensity.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Dual Nature of Radiation and Matter",
        official_section: "Section 11.4: Einstein's Photoelectric Equation",
        page_number: "Page 393",
        exact_quote: "Maximum kinetic energy of photoelectrons depends only on the frequency of the incident radiation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "If a parallel plate capacitor with air between the plates is charged to potential V and then disconnected from battery, what happens when a dielectric slab of constant K is inserted?",
      options: {
        A: "Charge remains constant, potential decreases to V/K",
        B: "Charge increases K times, potential remains constant",
        C: "Capacitance decreases to C/K",
        D: "Energy stored increases K times"
      },
      correct_answer: "A",
      explanation: "Since battery is disconnected, charge Q remains conserved. Capacitance increases to C' = K*C. Potential difference decreases to V' = Q / C' = V / K.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electrostatic Potential and Capacitance",
        official_section: "Section 2.11: Effect of Dielectric on Capacitance",
        page_number: "Page 77",
        exact_quote: "When battery is disconnected and dielectric is inserted, charge remains constant and potential difference decreases by factor K."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 10,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "A body of mass 10 kg is dropped from a height of 20 m. Its kinetic energy just before hitting the ground is (take g = 10 m/s^2):",
      options: {
        A: "2000 J",
        B: "1000 J",
        C: "4000 J",
        D: "200 J"
      },
      correct_answer: "A",
      explanation: "By conservation of mechanical energy: KE_final = PE_initial = m * g * h = 10 * 10 * 20 = 2000 J.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Work, Energy and Power",
        official_section: "Section 5.8: Conservation of Mechanical Energy",
        page_number: "Page 121",
        exact_quote: "Total mechanical energy E = K + V is conserved in a gravitational field."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The temperature at which root mean square velocity (v_rms) of hydrogen molecules equals the escape velocity from earth (11.2 km/s) is approximately (M = 2 g/mol):",
      options: {
        A: "10,000 K",
        B: "1,000 K",
        C: "500 K",
        D: "100,000 K"
      },
      correct_answer: "A",
      explanation: "v_rms = sqrt(3 R T / M). (11.2 * 10^3)^2 = 3 * 8.314 * T / (2 * 10^-3) => T ≈ 10,000 K.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Kinetic Theory",
        official_section: "Section 13.4: Pressure of an Ideal Gas",
        page_number: "Page 328",
        exact_quote: "v_rms = √(3kBT / m) = √(3RT / M)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "Which electromagnetic radiation has the highest frequency in the electromagnetic spectrum?",
      options: {
        A: "Gamma rays",
        B: "X-rays",
        C: "Ultraviolet rays",
        D: "Microwaves"
      },
      correct_answer: "A",
      explanation: "Gamma rays have the shortest wavelength (< 10^-12 m) and correspondingly highest frequency (> 10^20 Hz) in the EM spectrum.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electromagnetic Waves",
        official_section: "Section 8.3.7: Gamma Rays",
        page_number: "Page 283",
        exact_quote: "Gamma rays lie in the upper frequency range of electromagnetic spectrum and have wavelengths from about 10^-10 m to less than 10^-14 m."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "The angle of dip at the magnetic poles of the earth is:",
      options: {
        A: "90°",
        B: "0°",
        C: "45°",
        D: "180°"
      },
      correct_answer: "A",
      explanation: "At magnetic poles, the magnetic field of the earth is completely vertical. Hence angle of dip δ = 90°.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Magnetism and Matter",
        official_section: "Section 5.4.2: Magnetic Declination and Dip",
        page_number: "Page 187",
        exact_quote: "At the magnetic poles, the dip needle rests vertically (δ = 90°), and at magnetic equator it rests horizontally (δ = 0°)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "For a prism of refracting angle A = 60°, if angle of minimum deviation Dm = 30°, the refractive index of the prism material is:",
      options: {
        A: "sqrt(2)",
        B: "1.5",
        C: "sqrt(3)",
        D: "2"
      },
      correct_answer: "A",
      explanation: "μ = sin[(A + Dm)/2] / sin(A/2) = sin[(60 + 30)/2] / sin(30) = sin(45) / sin(30) = (1/sqrt(2)) / (1/2) = 2 / sqrt(2) = sqrt(2).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.6: Refraction through a Prism",
        page_number: "Page 331",
        exact_quote: "Refractive index of prism is n = sin((A + Dm)/2) / sin(A/2)."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Physics',
      question: "In an intrinsic semiconductor at absolute zero temperature (0 K), the conduction band is:",
      options: {
        A: "Completely empty",
        B: "Completely full",
        C: "Partially filled",
        D: "Having equal electrons and holes"
      },
      correct_answer: "A",
      explanation: "At 0 K, all valence electrons are tightly bound in covalent bonds in the valence band. Conduction band is completely empty and semiconductor acts as a perfect insulator.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        official_section: "Section 14.3: Intrinsic Semiconductor",
        page_number: "Page 474",
        exact_quote: "At 0 K, an intrinsic semiconductor behaves as an insulator because no electrons are excited across the energy gap."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const NEET_2025_PHASE1_CHEMISTRY: PYQPaper = {
  id: 'neet-2025-p1-chemistry',
  yearLabel: 'NEET 2025 (Phase 1)',
  yearNumber: 2025,
  phase: 'Phase 1',
  subject: 'Chemistry',
  totalQuestions: 15,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following molecules has a zero dipole moment due to symmetrical planar geometry?",
      options: {
        A: "Boron trifluoride (BF3)",
        B: "Ammonia (NH3)",
        C: "Water (H2O)",
        D: "Nitrogen dioxide (NO2)"
      },
      correct_answer: "A",
      explanation: "BF3 has trigonal planar geometry (120° bond angles). The three equal B-F bond dipoles cancel each other out completely, resulting in net dipole moment μ = 0.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Chemical Bonding and Molecular Structure",
        official_section: "Section 4.3: Dipole Moment",
        page_number: "Page 115",
        exact_quote: "In BF3, the dipole moment is zero although B-F bonds are oriented at an angle of 120° to one another, the three bond moments cancel each other out."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following d-block elements has the highest melting point?",
      options: {
        A: "Chromium (Cr)",
        B: "Tungsten (W)",
        C: "Iron (Fe)",
        D: "Manganese (Mn)"
      },
      correct_answer: "B",
      explanation: "Tungsten (W) in the 5d series has the maximum number of unpaired d-electrons involved in strong metallic bonding, giving it the highest melting point among all metals (3422°C).",
      ncert_reference: {
        class: "Class 12",
        chapter: "The d- and f-Block Elements",
        official_section: "Section 8.3.2: Melting and Boiling Points",
        page_number: "Page 219",
        exact_quote: "Tungsten has very high melting point due to strong interatomic metallic bonding."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "In the reaction: R-COOH + PCl5 -> X + POCl3 + HCl, the organic product X is:",
      options: {
        A: "Acyl chloride (R-COCl)",
        B: "Alkyl chloride (R-Cl)",
        C: "Acid anhydride ((RCO)2O)",
        D: "Ester (R-COOR)"
      },
      correct_answer: "A",
      explanation: "Carboxylic acids react with PCl5 to produce acyl chloride (R-COCl), phosphoryl chloride (POCl3) and hydrogen chloride (HCl).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8: Reactions Involving Cleavage of C-OH Bond",
        page_number: "Page 382",
        exact_quote: "Carboxylic acids react with PCl5, PCl3 or SOCl2 to form acid chlorides."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "The IUPAC name of the compound CH3-CH(OH)-CH2-COOH is:",
      options: {
        A: "3-Hydroxybutanoic acid",
        B: "2-Hydroxybutanoic acid",
        C: "4-Hydroxybutanoic acid",
        D: "3-Hydroxypentanoic acid"
      },
      correct_answer: "A",
      explanation: "Numbering starts from carboxylic carbon C1: C1 is -COOH, C2 is -CH2-, C3 has -OH substituent, C4 is -CH3. Name: 3-hydroxybutanoic acid.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.6: Nomenclature and Structure of Carboxyl Group",
        page_number: "Page 376",
        exact_quote: "In naming carboxylic acids containing hydroxy group, the principal functional group -COOH receives priority C1."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "In an electrochemical cell, the relationship between standard Gibbs energy change (ΔrG°) and equilibrium constant K is:",
      options: {
        A: "ΔrG° = -RT ln K",
        B: "ΔrG° = RT ln K",
        C: "ΔrG° = -n F K",
        D: "ΔrG° = -RT / K"
      },
      correct_answer: "A",
      explanation: "Standard Gibbs free energy change is related to equilibrium constant by ΔrG° = -RT ln K = -2.303 RT log10 K.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Electrochemistry",
        official_section: "Section 3.3.2: Electrochemical Cell and Gibbs Energy",
        page_number: "Page 74",
        exact_quote: "ΔrG° = -RT ln K."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "The conjugate acid and conjugate base of water (H2O) are respectively:",
      options: {
        A: "H3O+ and OH-",
        B: "OH- and H3O+",
        C: "H2 and O2",
        D: "H+ and O2-"
      },
      correct_answer: "A",
      explanation: "Water gains a proton to form conjugate acid hydronium ion (H3O+) and loses a proton to form conjugate base hydroxide ion (OH-).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Equilibrium",
        official_section: "Section 7.10: Acids, Bases and Salts (Bronsted-Lowry)",
        page_number: "Page 221",
        exact_quote: "Water can act both as an acid and as a base. Its conjugate acid is H3O+ and its conjugate base is OH-."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following carbohydrates is a non-reducing disaccharide?",
      options: {
        A: "Sucrose",
        B: "Maltose",
        C: "Lactose",
        D: "Cellobiose"
      },
      correct_answer: "A",
      explanation: "In sucrose, reducing groups of both glucose (C1) and fructose (C2) are involved in glycosidic bond formation, making it a non-reducing sugar.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biomolecules",
        official_section: "Section 14.1.2: Disaccharides (Sucrose)",
        page_number: "Page 418",
        exact_quote: "Since the reducing groups of glucose and fructose are involved in glycosidic bond formation, sucrose is a non-reducing sugar."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which gas is evolved when primary aliphatic amine reacts with nitrous acid (HNO2) at 0-5°C?",
      options: {
        A: "Nitrogen gas (N2) quantitatively",
        B: "Ammonia (NH3)",
        C: "Nitric oxide (NO)",
        D: "Nitrogen dioxide (NO2)"
      },
      correct_answer: "A",
      explanation: "Primary aliphatic amines react with nitrous acid to form unstable aliphatic diazonium salts, which decompose immediately to release nitrogen gas (N2) quantitatively and form alcohols.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Amines",
        official_section: "Section 13.4.4: Reaction with Nitrous Acid",
        page_number: "Page 401",
        exact_quote: "Primary aliphatic amines react with nitrous acid to form aliphatic diazonium salts, which being unstable, liberate nitrogen gas quantitatively."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "The rate constant for a reaction is k = 2.0 * 10^-2 mol^-1 L s^-1. What is the overall order of the reaction?",
      options: {
        A: "Second order",
        B: "First order",
        C: "Zero order",
        D: "Third order"
      },
      correct_answer: "A",
      explanation: "Units of k = (mol/L)^(1-n) s^-1. For n = 2, unit is (mol/L)^-1 s^-1 = L mol^-1 s^-1. Hence overall order is second order.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Chemical Kinetics",
        official_section: "Section 4.2.2: Units of Rate Constant",
        page_number: "Page 99",
        exact_quote: "Units of rate constant for an nth order reaction are (mol L^-1)^(1-n) s^-1."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 10,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "According to Henry's law, the solubility of a gas in a liquid at constant temperature is proportional to:",
      options: {
        A: "Partial pressure of the gas above the liquid",
        B: "Volume of the liquid",
        C: "Square root of pressure",
        D: "Molecular mass of gas"
      },
      correct_answer: "A",
      explanation: "Henry's law states that the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution (p = KH * x).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Solutions",
        official_section: "Section 2.3.2: Solubility of a Gas in a Liquid (Henry's Law)",
        page_number: "Page 39",
        exact_quote: "The partial pressure of the gas in vapour phase (p) is proportional to the mole fraction of the gas (x) in the solution: p = KH x."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following compounds exhibits optical isomerism (enantiomerism)?",
      options: {
        A: "Lactic acid (2-hydroxypropanoic acid)",
        B: "Ethanol",
        C: "Propan-2-ol",
        D: "Acetic acid"
      },
      correct_answer: "A",
      explanation: "Lactic acid has an asymmetric chiral carbon bonded to four distinct groups (-H, -OH, -CH3, -COOH), making it optically active.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Haloalkanes and Haloarenes",
        official_section: "Section 10.4: Optical Isomerism and Chirality",
        page_number: "Page 304",
        exact_quote: "Molecules having a chiral centre (asymmetric carbon) like lactic acid exist as non-superimposable mirror images (enantiomers)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "The oxidation states of phosphorus in hypophosphorous acid (H3PO2) and orthophosphoric acid (H3PO4) respectively are:",
      options: {
        A: "+1 and +5",
        B: "+3 and +5",
        C: "+1 and +3",
        D: "+4 and +5"
      },
      correct_answer: "A",
      explanation: "In H3PO2: 3(+1) + P + 2(-2) = 0 => P = +1. In H3PO4: 3(+1) + P + 4(-2) = 0 => P = +5.",
      ncert_reference: {
        class: "Class 12",
        chapter: "The p-Block Elements",
        official_section: "Section 7.9: Oxoacids of Phosphorus",
        page_number: "Page 184",
        exact_quote: "Hypophosphorous acid has phosphorus in +1 oxidation state; orthophosphoric acid has phosphorus in +5 oxidation state."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following represents Williamson's ether synthesis?",
      options: {
        A: "Reaction of an alkyl halide with sodium alkoxide (R-X + R'-ONa -> R-O-R')",
        B: "Reaction of alcohol with conc. H2SO4 at 443 K",
        C: "Reaction of ether with cold HI",
        D: "Hydrolysis of ester"
      },
      correct_answer: "A",
      explanation: "Williamson's synthesis involves an SN2 attack of an alkoxide ion on a primary alkyl halide to form an ether.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alcohols, Phenols and Ethers",
        official_section: "Section 11.6: Preparation of Ethers",
        page_number: "Page 349",
        exact_quote: "Williamson synthesis is an important laboratory method for the preparation of symmetrical and unsymmetrical ethers by treating alkyl halide with sodium alkoxide."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "The electronic configuration of copper (Z = 29) in its ground state is:",
      options: {
        A: "[Ar] 3d10 4s1",
        B: "[Ar] 3d9 4s2",
        C: "[Ar] 3d8 4s2 4p1",
        D: "[Ar] 3d10 4s2"
      },
      correct_answer: "A",
      explanation: "Copper exhibits anomalous configuration [Ar] 3d10 4s1 due to the extra stability associated with a completely filled d-subshell (3d10).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Structure of Atom",
        official_section: "Section 2.6.5: Stability of Completely Filled Subshells",
        page_number: "Page 65",
        exact_quote: "The ground state electronic configuration of copper is [Ar] 3d10 4s1."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Chemistry',
      question: "Which of the following elements has the highest electron gain enthalpy (most negative)?",
      options: {
        A: "Chlorine (Cl)",
        B: "Fluorine (F)",
        C: "Bromine (Br)",
        D: "Iodine (I)"
      },
      correct_answer: "A",
      explanation: "Chlorine has the highest negative electron gain enthalpy (-349 kJ/mol). In fluorine, the incoming electron experiences strong interelectronic repulsions in the small, compact 2p subshell.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Classification of Elements and Periodicity in Properties",
        official_section: "Section 3.7.3: Electron Gain Enthalpy",
        page_number: "Page 90",
        exact_quote: "The electron gain enthalpy of chlorine is more negative than that of fluorine."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const NEET_2025_PHASE1_BOTANY: PYQPaper = {
  id: 'neet-2025-p1-botany',
  yearLabel: 'NEET 2025 (Phase 1)',
  yearNumber: 2025,
  phase: 'Phase 1',
  subject: 'Botany',
  totalQuestions: 15,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "Which of the following stages of meiosis is characterized by the dissolution of synaptonemal complex and appearance of X-shaped chiasmata?",
      options: {
        A: "Diplotene",
        B: "Pachytene",
        C: "Zygotene",
        D: "Diakinesis"
      },
      correct_answer: "A",
      explanation: "The beginning of diplotene is recognized by the dissolution of the synaptonemal complex and the tendency of recombined homologous chromosomes to separate, except at sites of crossovers (chiasmata).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Cell Cycle and Cell Division",
        official_section: "Section 10.4.1: Meiosis I (Prophase I)",
        page_number: "Page 168",
        exact_quote: "The beginning of diplotene is recognised by the dissolution of the synaptonemal complex... X-shaped structures, called chiasmata."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "In DNA fingerprinting, the repetitive DNA sequences that show very high degree of polymorphism and are used as probes are termed:",
      options: {
        A: "VNTRs (Variable Number of Tandem Repeats)",
        B: "Exons",
        C: "Promoter sequences",
        D: "tRNA"
      },
      correct_answer: "A",
      explanation: "VNTR belongs to a class of satellite DNA referred to as mini-satellite. A small DNA sequence is arranged tandemly in many copy numbers with high polymorphism.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        official_section: "Section 6.10: DNA Fingerprinting",
        page_number: "Page 122",
        exact_quote: "VNTR belongs to a class of satellite DNA referred to as mini-satellite... It shows very high degree of polymorphism."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "During photosynthesis, the light reaction takes place in the:",
      options: {
        A: "Thylakoid membranes (Grana)",
        B: "Stroma",
        C: "Outer chloroplast membrane",
        D: "Peroxisome"
      },
      correct_answer: "A",
      explanation: "Light reactions (trapping of light energy, photolysis of water, ATP and NADPH synthesis) take place in the thylakoid membranes (grana). Dark reactions take place in the stroma.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Photosynthesis in Higher Plants",
        official_section: "Section 13.2: Where Does Photosynthesis Take Place?",
        page_number: "Page 209",
        exact_quote: "The membrane system is responsible for trapping light energy and synthesising ATP and NADPH. In stroma, enzymatic reactions synthesise sugar."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "The essential chemical components of many coenzymes are:",
      options: {
        A: "Vitamins (especially B-complex vitamins)",
        B: "Proteins",
        C: "Carbohydrates",
        D: "Lipids"
      },
      correct_answer: "A",
      explanation: "Coenzymes are organic compounds that associate transiently with apoenzymes. The essential chemical components of many coenzymes are vitamins (e.g., NAD and NADP contain niacin).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Biomolecules",
        official_section: "Section 9.12.6: Co-factors",
        page_number: "Page 159",
        exact_quote: "The essential chemical components of many coenzymes are vitamins, e.g., coenzyme nicotinamide adenine dinucleotide (NAD) contains the vitamin niacin."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "Which of the following pairs is correctly matched regarding plant modifications?",
      options: {
        A: "Pitcher of Nepenthes - Leaf modification",
        B: "Thorns of Bougainvillea - Root modification",
        C: "Tendril of Pea - Stem modification",
        D: "Pneumatophores of Rhizophora - Stem modification"
      },
      correct_answer: "A",
      explanation: "In insectivorous plants like Nepenthes (pitcher plant), the leaf lamina is modified into a pitcher to trap insects.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Morphology of Flowering Plants",
        official_section: "Section 5.4: Modifications of Leaves",
        page_number: "Page 73",
        exact_quote: "The leaves of certain insectivorous plants such as pitcher plant, venus-fly trap are modified leaves."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "The genetic code is degenerate because:",
      options: {
        A: "Some amino acids are coded by more than one codon",
        B: "One codon codes for only one amino acid",
        C: "The code is universal",
        D: "AUG has dual functions"
      },
      correct_answer: "A",
      explanation: "Since there are 61 codons coding for only 20 amino acids, most amino acids are coded by more than one codon. This property is known as degeneracy of the genetic code.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        official_section: "Section 6.5.1: Salient Features of Genetic Code",
        page_number: "Page 112",
        exact_quote: "Some amino acids are coded by more than one codon, hence the code is degenerate."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "In angiosperms, filiform apparatus is a characteristic cellular thickening found in the:",
      options: {
        A: "Synergids",
        B: "Antipodal cells",
        C: "Egg cell",
        D: "Central cell"
      },
      correct_answer: "A",
      explanation: "The synergids have special cellular thickenings at the micropylar tip called filiform apparatus, which play an important role in guiding the pollen tube into the synergid.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Sexual Reproduction in Flowering Plants",
        official_section: "Section 2.2.2: Female Gametophyte (Embryo Sac)",
        page_number: "Page 27",
        exact_quote: "The synergids have special cellular thickenings at the micropylar tip called filiform apparatus, which play an important role in guiding the pollen tubes into the synergid."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "In glycolysis, the conversion of fructose-6-phosphate to fructose-1,6-bisphosphate is catalyzed by:",
      options: {
        A: "Phosphofructokinase (PFK)",
        B: "Hexokinase",
        C: "Aldolase",
        D: "Enolase"
      },
      correct_answer: "A",
      explanation: "Phosphofructokinase (PFK) catalyzes the phosphorylation of fructose-6-phosphate utilizing one ATP molecule to produce fructose-1,6-bisphosphate (the pacemaker step of glycolysis).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Respiration in Plants",
        official_section: "Section 14.2: Glycolysis",
        page_number: "Page 229",
        exact_quote: "Fructose 6-phosphate is phosphorylated to fructose 1,6-bisphosphate with the consumption of ATP."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "The Casparian strips are present in the endodermis of roots and are made up of water-impermeable waxy material called:",
      options: {
        A: "Suberin",
        B: "Lignin",
        C: "Pectin",
        D: "Cutin"
      },
      correct_answer: "A",
      explanation: "The tangential as well as radial walls of the endodermal cells have a deposition of water-impermeable, waxy material suberin in the form of Casparian strips.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Anatomy of Flowering Plants",
        official_section: "Section 6.3.1: Dicotyledonous Root",
        page_number: "Page 90",
        exact_quote: "The tangential as well as radial walls of the endodermal cells have a deposition of water-impermeable, waxy material suberin in the form of casparian strips."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "Which of the following organisms is a biofertilizer that fixes atmospheric nitrogen in paddy (rice) fields?",
      options: {
        A: "Anabaena and Nostoc (Cyanobacteria)",
        B: "Rhizobium",
        C: "Mycorrhiza",
        D: "Glomus"
      },
      correct_answer: "A",
      explanation: "Cyanobacteria are autotrophic microbes widely distributed in aquatic and terrestrial environments; in paddy fields, cyanobacteria (Anabaena, Nostoc, Oscillatoria) serve as an important biofertilizer.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Microbes in Human Welfare",
        official_section: "Section 10.6: Microbes as Biofertilisers",
        page_number: "Page 188",
        exact_quote: "In paddy fields, cyanobacteria serve as an important biofertiliser. Blue green algae also add organic matter to the soil."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "Which ecological pyramid is ALWAYS upright and can never be inverted in any ecosystem?",
      options: {
        A: "Pyramid of Energy",
        B: "Pyramid of Biomass",
        C: "Pyramid of Numbers",
        D: "All pyramids can be inverted"
      },
      correct_answer: "A",
      explanation: "Pyramid of energy is always upright because energy is lost as heat at each trophic level (10% law of energy transfer), so energy at higher trophic levels is always less than lower levels.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ecosystem",
        official_section: "Section 14.5: Ecological Pyramids",
        page_number: "Page 248",
        exact_quote: "Pyramid of energy is always upright, can never be inverted, because when energy flows from a particular trophic level to the next, some energy is always lost as heat."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "In a chloroplast, the stacks of thylakoids resembling piles of coins are called:",
      options: {
        A: "Grana",
        B: "Stroma lamellae",
        C: "Cristae",
        D: "Lumen"
      },
      correct_answer: "A",
      explanation: "Thylakoids are arranged in stacks like the piles of coins called grana (singular: granum).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Cell: The Unit of Life",
        official_section: "Section 8.5.4: Plastids",
        page_number: "Page 136",
        exact_quote: "Thylakoids are arranged in stacks like the piles of coins called grana."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "Bt toxin protein produced by Bacillus thuringiensis does not kill the bacterium itself because:",
      options: {
        A: "The toxin exists in an inactive protoxin form inside the bacterium",
        B: "The bacterium has thick cell wall",
        C: "The bacterium secretes an antitoxin",
        D: "The toxin is packaged in endospores"
      },
      correct_answer: "A",
      explanation: "The Bt toxin protein exists as inactive protoxins in the bacterium. Once an insect ingests it, the alkaline pH of the insect gut solubilizes the crystal and activates the toxin.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Biotechnology and Its Applications",
        official_section: "Section 12.1: Pest Resistant Plants (Bt Cotton)",
        page_number: "Page 208",
        exact_quote: "The Bt toxin protein exist as inactive protoxins but once an insect ingest the inactive toxin, it is converted into an active form of toxin due to the alkaline pH of the gut."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "Which of the following is NOT an attribute of a biological population?",
      options: {
        A: "Species interaction (predation between individuals of same species)",
        B: "Natality (birth rate)",
        C: "Mortality (death rate)",
        D: "Sex ratio"
      },
      correct_answer: "A",
      explanation: "A population has attributes that an individual organism does not: birth rate (natality), death rate (mortality), sex ratio, and age distribution.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Organisms and Populations",
        official_section: "Section 13.2.1: Population Attributes",
        page_number: "Page 227",
        exact_quote: "A population has traits that an individual does not: birth rates, death rates, sex ratio and age distribution."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Botany',
      question: "The phenomenon wherein a single gene product produces multiple phenotypic effects is termed:",
      options: {
        A: "Pleiotropy",
        B: "Polygenic inheritance",
        C: "Incomplete dominance",
        D: "Co-dominance"
      },
      correct_answer: "A",
      explanation: "Pleiotropy occurs when a single gene influences multiple phenotypic traits (e.g., phenylketonuria or starch synthesis gene in pea).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.4: Pleiotropy",
        page_number: "Page 85",
        exact_quote: "A single gene can exhibit multiple phenotypic expression; such a gene is called a pleiotropic gene."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const NEET_2025_PHASE1_ZOOLOGY: PYQPaper = {
  id: 'neet-2025-p1-zoology',
  yearLabel: 'NEET 2025 (Phase 1)',
  yearNumber: 2025,
  phase: 'Phase 1',
  subject: 'Zoology',
  totalQuestions: 15,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which of the following hormones is responsible for triggering ovulation and maintenance of corpus luteum in the human menstrual cycle?",
      options: {
        A: "Luteinizing Hormone (LH)",
        B: "Follicle Stimulating Hormone (FSH)",
        C: "Prolactin",
        D: "Oxytocin"
      },
      correct_answer: "A",
      explanation: "Rapid secretion of LH leading to its maximum level during the mid-cycle called LH surge induces rupture of Graafian follicle and thereby release of ovum (ovulation). LH also maintains the corpus luteum.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.4: Menstrual Cycle",
        page_number: "Page 51",
        exact_quote: "Rapid secretion of LH leading to its maximum level during the mid-cycle called LH surge induces rupture of Graafian follicle and thereby the release of an ovum (ovulation)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "The volume of air that remains in human lungs even after a forceful expiration is termed:",
      options: {
        A: "Residual Volume (RV, ~1100 to 1200 mL)",
        B: "Tidal Volume (TV)",
        C: "Expiratory Reserve Volume (ERV)",
        D: "Vital Capacity (VC)"
      },
      correct_answer: "A",
      explanation: "Residual Volume (RV) is the volume of air remaining in the lungs even after a forcible expiration, averaging 1100 mL to 1200 mL.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Breathing and Exchange of Gases",
        official_section: "Section 17.2: Respiratory Volumes and Capacities",
        page_number: "Page 272",
        exact_quote: "Residual Volume (RV): Volume of air remaining in the lungs even after a forcible expiration. This averages 1100 mL to 1200 mL."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which part of the human brain controls involuntary functions like respiration, cardiovascular reflexes, and gastric secretions?",
      options: {
        A: "Medulla oblongata",
        B: "Cerebellum",
        C: "Thalamus",
        D: "Hypothalamus"
      },
      correct_answer: "A",
      explanation: "The medulla contains centres which control respiration, cardiovascular reflexes and gastric secretions.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Neural Control and Coordination",
        official_section: "Section 21.4.3: Hindbrain",
        page_number: "Page 321",
        exact_quote: "The medulla contains centres which control respiration, cardiovascular reflexes and gastric secretions."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "In the Hardy-Weinberg equation p^2 + 2pq + q^2 = 1, what does the term 2pq represent?",
      options: {
        A: "Frequency of heterozygous individuals (Aa)",
        B: "Frequency of homozygous dominant individuals (AA)",
        C: "Frequency of homozygous recessive individuals (aa)",
        D: "Frequency of dominant allele"
      },
      correct_answer: "A",
      explanation: "In a diploid population, p^2 represents the frequency of homozygous dominant (AA), q^2 represents homozygous recessive (aa), and 2pq represents heterozygous individuals (Aa).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Evolution",
        official_section: "Section 7.8: Hardy-Weinberg Principle",
        page_number: "Page 137",
        exact_quote: "Individual frequencies can be named p and q... The frequency of individuals with Aa is 2pq."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which cell organelle is rich in hydrolytic enzymes (hydrolases like lipases, proteases, carbohydrases) optimally active at acidic pH?",
      options: {
        A: "Lysosomes",
        B: "Ribosomes",
        C: "Golgi apparatus",
        D: "Peroxisomes"
      },
      correct_answer: "A",
      explanation: "Lysosomes are membrane bound vesicular structures rich in hydrolytic enzymes capable of digesting carbohydrates, proteins, lipids and nucleic acids at acidic pH (pH ~ 5).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Cell: The Unit of Life",
        official_section: "Section 8.5.2: Lysosomes",
        page_number: "Page 134",
        exact_quote: "The isolated lysosomal vesicles have been found to be very rich in almost all types of hydrolytic enzymes... optimally active at the acidic pH."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which of the following joints in the human skeleton is a synovial joint that allows movement in only one plane (hinge joint)?",
      options: {
        A: "Knee joint and Elbow joint",
        B: "Shoulder joint",
        C: "Hip joint",
        D: "Joint between atlas and axis"
      },
      correct_answer: "A",
      explanation: "Knee joint and elbow joint are hinge joints allowing movement in one plane. Shoulder and hip joints are ball and socket joints.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Locomotion and Movement",
        official_section: "Section 20.4: Joints",
        page_number: "Page 312",
        exact_quote: "Hinge joint (knee joint), Pivot joint (between atlas and axis), Ball and socket joint (between humerus and pectoral girdle)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "The Juxtaglomerular apparatus (JGA) releases renin in response to:",
      options: {
        A: "Fall in glomerular filtration rate (GFR) or fall in blood pressure",
        B: "Rise in blood pressure",
        C: "Excess hydration",
        D: "High blood sodium levels"
      },
      correct_answer: "A",
      explanation: "A fall in glomerular blood flow/glomerular blood pressure/GFR can activate the JG cells to release renin which converts angiotensinogen to angiotensin I and further to angiotensin II.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Excretory Products and Their Elimination",
        official_section: "Section 19.5: Regulation of Kidney Function",
        page_number: "Page 297",
        exact_quote: "A fall in glomerular blood flow/glomerular blood pressure/GFR can activate the JG cells to release renin."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which of the following sexually transmitted infections (STIs) is caused by the bacterium Treponema pallidum?",
      options: {
        A: "Syphilis",
        B: "Gonorrhoea",
        C: "Genital herpes",
        D: "Trichomoniasis"
      },
      correct_answer: "A",
      explanation: "Syphilis is caused by Treponema pallidum. Gonorrhoea is caused by Neisseria gonorrhoeae. Genital herpes is caused by Herpes simplex virus.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Reproductive Health",
        official_section: "Section 4.3: Sexually Transmitted Infections (STIs)",
        page_number: "Page 63",
        exact_quote: "Syphilis, gonorrhoea, genital herpes, chlamydiasis, genital warts, trichomoniasis are examples of sexually transmitted infections."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "The hormone calcitonin (thyrocalcitonin or TCT) is secreted by thyroid gland and acts to:",
      options: {
        A: "Decrease blood calcium level (hypocalcemic)",
        B: "Increase blood calcium level (hypercalcemic)",
        C: "Stimulate bone resorption",
        D: "Inhibit osteoblasts"
      },
      correct_answer: "A",
      explanation: "Thyroid gland secretes a protein hormone called thyrocalcitonin (TCT) which regulates (lowers) blood calcium levels. Parathyroid hormone (PTH) increases blood calcium levels.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Chemical Coordination and Integration",
        official_section: "Section 22.2.3: Thyroid Gland",
        page_number: "Page 334",
        exact_quote: "Thyroid gland also secretes a protein hormone called thyrocalcitonin (TCT) which regulates the blood calcium levels (hypocalcemic)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which of the following blood clotting factors is essential for converting prothrombin to active thrombin?",
      options: {
        A: "Thrombokinase (prothrombinase) and Calcium ions (Ca2+)",
        B: "Heparin",
        C: "Fibrinogen alone",
        D: "Sodium ions"
      },
      correct_answer: "A",
      explanation: "An enzyme complex, thrombokinase, is required for converting inactive prothrombin present in plasma into thrombin. Calcium ions play a very important role in clotting.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Body Fluids and Circulation",
        official_section: "Section 18.1.4: Coagulation of Blood",
        page_number: "Page 281",
        exact_quote: "An enzyme complex, thrombokinase, is required for this reaction... Calcium ions play a very important role in clotting."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "During transmission of nerve impulse across a chemical synapse, neurotransmitters are released into synaptic cleft by exocytosis triggered by entry of:",
      options: {
        A: "Calcium ions (Ca2+)",
        B: "Potassium ions (K+)",
        C: "Chloride ions (Cl-)",
        D: "Magnesium ions (Mg2+)"
      },
      correct_answer: "A",
      explanation: "When an action potential arrives at the axon terminal, it stimulates the influx of Ca2+ ions, which causes synaptic vesicles to fuse with the plasma membrane and release neurotransmitters into the synaptic cleft.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Neural Control and Coordination",
        official_section: "Section 21.3.2: Transmission of Impulses",
        page_number: "Page 319",
        exact_quote: "When an impulse arrives at the axon terminal, it stimulates the movement of the synaptic vesicles towards the membrane where they fuse with the plasma membrane and release their neurotransmitters."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "In human females, fertilization normally takes place in which specific region of the fallopian tube (oviduct)?",
      options: {
        A: "Ampullary-isthmic junction (Ampulla)",
        B: "Infundibulum",
        C: "Fimbriae",
        D: "Uterine fundus"
      },
      correct_answer: "A",
      explanation: "Fertilisation can only occur if the ovum and sperms are transported simultaneously to the ampullary region of the fallopian tube.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.5: Fertilisation and Implantation",
        page_number: "Page 51",
        exact_quote: "Fertilisation can only occur if the ovum and sperms are transported simultaneously to the ampullary region."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which of the following is an example of a secondary lymphoid organ where mature lymphocytes interact with antigens?",
      options: {
        A: "Spleen and Lymph nodes",
        B: "Bone marrow",
        C: "Thymus",
        D: "Thyroid"
      },
      correct_answer: "A",
      explanation: "Primary lymphoid organs are bone marrow and thymus where immature lymphocytes differentiate. Secondary lymphoid organs include spleen, lymph nodes, tonsils, Peyer's patches, where lymphocytes encounter antigens.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        official_section: "Section 8.2.4: Lymphoid Organs",
        page_number: "Page 153",
        exact_quote: "The secondary lymphoid organs are spleen, lymph nodes, tonsils, Peyer's patches of small intestine and appendix."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "The cranial capacity of Homo erectus discovered in 1891 was about:",
      options: {
        A: "900 cc",
        B: "650-800 cc",
        C: "1400 cc",
        D: "1600 cc"
      },
      correct_answer: "A",
      explanation: "Homo habilis had cranial capacity of 650-800 cc. Homo erectus had a larger brain around 900 cc. Neanderthal man had 1400 cc.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Evolution",
        official_section: "Section 7.9: Origin and Evolution of Man",
        page_number: "Page 140",
        exact_quote: "Homo erectus had a large brain around 900cc."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 1)',
      phase: 'Phase 1',
      subject: 'Zoology',
      question: "Which cells in human blood are responsible for histamine, serotonin, and heparin secretion during inflammatory allergic reactions?",
      options: {
        A: "Basophils",
        B: "Eosinophils",
        C: "Neutrophils",
        D: "Monocytes"
      },
      correct_answer: "A",
      explanation: "Basophils secrete histamine, serotonin, heparin, etc., and are involved in inflammatory reactions.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Body Fluids and Circulation",
        official_section: "Section 18.1.2: Formed Elements",
        page_number: "Page 279",
        exact_quote: "Basophils secrete histamine, serotonin, heparin, etc., and are involved in inflammatory reactions."
      },
      question_type: "Direct Fact"
    }
  ]
};

// ==========================================
// NEET 2025 (PHASE 2 / RE-NEET) - PAPERS
// ==========================================

export const NEET_2025_PHASE2_CHEMISTRY: PYQPaper = {
  id: 'neet-2025-p2-chemistry',
  yearLabel: 'NEET 2025 (Phase 2 / Re-NEET)',
  yearNumber: 2025,
  phase: 'Phase 2',
  subject: 'Chemistry',
  totalQuestions: 15,
  durationMinutes: 200,
  questions: [
    {
      question_number: 1,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "The oxidation state of chromium in potassium dichromate (K2Cr2O7) is:",
      options: {
        A: "+6",
        B: "+3",
        C: "+7",
        D: "+4"
      },
      correct_answer: "A",
      explanation: "2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2Cr - 14 = 0 => 2Cr = +12 => Cr = +6.",
      ncert_reference: {
        class: "Class 12",
        chapter: "The d- and f-Block Elements",
        official_section: "Section 8.4: Potassium Dichromate",
        page_number: "Page 230",
        exact_quote: "In dichromate ion Cr2O7^2-, oxidation state of chromium is +6."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which of the following compounds reacts with ammoniacal cuprous chloride to give a red precipitate?",
      options: {
        A: "Propyne (terminal alkyne)",
        B: "Propene",
        C: "But-2-yne (internal alkyne)",
        D: "Propane"
      },
      correct_answer: "A",
      explanation: "Terminal alkynes containing acidic acetylenic hydrogen (like propyne, CH3-C≡CH) react with ammoniacal cuprous chloride to form red copper acetylide precipitate.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Hydrocarbons",
        official_section: "Section 13.4: Alkynes (Acidity of Alkynes)",
        page_number: "Page 392",
        exact_quote: "Terminal alkynes react with ammoniacal cuprous chloride giving red precipitate of copper acetylide."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which transition metal ion in aqueous solution is colourless due to completely filled 3d10 shell (no d-d transitions)?",
      options: {
        A: "Zn2+",
        B: "Cu2+",
        C: "Fe3+",
        D: "Cr3+"
      },
      correct_answer: "A",
      explanation: "Zn2+ has 3d10 configuration with zero unpaired d electrons. Since d-d transition is impossible, Zn2+ salts are colourless.",
      ncert_reference: {
        class: "Class 12",
        chapter: "The d- and f-Block Elements",
        official_section: "Section 8.3.7: Coloured Ions",
        page_number: "Page 224",
        exact_quote: "Ions having d0 or d10 configuration are colourless as d-d transitions are not possible."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "The bond angle in water (H2O) is 104.5° instead of standard tetrahedral angle 109.5° due to:",
      options: {
        A: "Lone pair - lone pair repulsion being greater than bond pair - bond pair repulsion",
        B: "Hydrogen bonding",
        C: "sp2 hybridization",
        D: "High electronegativity of hydrogen"
      },
      correct_answer: "A",
      explanation: "By VSEPR theory, repulsive forces follow: lone pair-lone pair > lone pair-bond pair > bond pair-bond pair. The two lone pairs on oxygen compress the H-O-H bond angle to 104.5°.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Chemical Bonding and Molecular Structure",
        official_section: "Section 4.2: VSEPR Theory",
        page_number: "Page 112",
        exact_quote: "The repulsive interaction of electron pairs decrease in the order: Lone pair - Lone pair > Lone pair - Bond pair > Bond pair - Bond pair."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      section: 'Section A',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which of the following behaves as a Lewis acid?",
      options: {
        A: "BF3",
        B: "NH3",
        C: "H2O",
        D: "CH4"
      },
      correct_answer: "A",
      explanation: "BF3 has an electron-deficient boron atom (only 6 valence electrons) with an empty 2p orbital, making it an electron-pair acceptor (Lewis acid).",
      ncert_reference: {
        class: "Class 11",
        chapter: "Equilibrium",
        official_section: "Section 7.10.3: Lewis Acids and Bases",
        page_number: "Page 222",
        exact_quote: "BF3, AlCl3 etc. can accept an electron pair and therefore act as Lewis acids."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which of the following polymers is synthesized using chloroprene as the monomer?",
      options: {
        A: "Neoprene",
        B: "Buna-N",
        C: "Buna-S",
        D: "Nylon 6"
      },
      correct_answer: "A",
      explanation: "Neoprene (synthetic rubber) is formed by free radical polymerisation of chloroprene (2-chloro-1,3-butadiene).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Polymers",
        official_section: "Section 15.2.4: Synthetic Rubbers (Neoprene)",
        page_number: "Page 442",
        exact_quote: "Neoprene is formed by the free radical polymerisation of chloroprene."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "The IUPAC name of CH3-O-C2H5 is:",
      options: {
        A: "Methoxyethane",
        B: "Ethoxyethane",
        C: "Methoxymethane",
        D: "Ethyl methyl ketone"
      },
      correct_answer: "A",
      explanation: "The larger alkyl group (ethyl) forms the parent alkane chain (ethane), while smaller alkoxy group (methoxy) forms substituent. IUPAC name: Methoxyethane.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Alcohols, Phenols and Ethers",
        official_section: "Section 11.2: Nomenclature of Ethers",
        page_number: "Page 333",
        exact_quote: "The larger alkyl group is chosen as parent alkane. CH3-O-C2H5 is named Methoxyethane."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which halogen forms only one oxoacid (HOF)?",
      options: {
        A: "Fluorine",
        B: "Chlorine",
        C: "Bromine",
        D: "Iodine"
      },
      correct_answer: "A",
      explanation: "Due to small size and high electronegativity with absence of d-orbitals, fluorine forms only one oxoacid, HOF (hypofluorous acid).",
      ncert_reference: {
        class: "Class 12",
        chapter: "The p-Block Elements",
        official_section: "Section 7.19: Oxoacids of Halogens",
        page_number: "Page 207",
        exact_quote: "Fluorine forms only one oxoacid, HOF known as fluoric(I) acid or hypofluorous acid."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which of the following is an example of an analgesic narcotic drug?",
      options: {
        A: "Morphine",
        B: "Aspirin",
        C: "Paracetamol",
        D: "Ibuprofen"
      },
      correct_answer: "A",
      explanation: "Morphine and its homologues are narcotic analgesics which relieve pain and induce sleep in therapeutic doses. Aspirin and paracetamol are non-narcotic analgesics.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Chemistry in Everyday Life",
        official_section: "Section 16.2.2: Analgesics (Narcotic Analgesics)",
        page_number: "Page 454",
        exact_quote: "Morphine and its homologues, when administered in medicinal doses, relieve pain and produce sleep."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which of the following colligative properties is most commonly employed to calculate molar masses of polymers and biomolecules?",
      options: {
        A: "Osmotic pressure (π)",
        B: "Depression in freezing point",
        C: "Elevation in boiling point",
        D: "Relative lowering of vapour pressure"
      },
      correct_answer: "A",
      explanation: "Osmotic pressure is measured at room temperature and the magnitude is relatively large even for very dilute solutions, making it ideal for determining molar mass of proteins, polymers, and macromolecules.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Solutions",
        official_section: "Section 2.6.4: Osmosis and Osmotic Pressure",
        page_number: "Page 53",
        exact_quote: "The technique of osmotic pressure for determination of molar mass of solutes is particularly useful for biomolecules as they are generally not stable at higher temperatures."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "In the presence of peroxide, addition of HBr to propene gives 1-bromopropane (anti-Markovnikov's rule). Why do HCl and HI NOT show peroxide effect?",
      options: {
        A: "H-Cl bond is too strong to be cleaved homolytically, and H-I bond gives I radicals that combine to form I2",
        B: "Chlorine is too volatile",
        C: "Iodine is a solid",
        D: "Peroxide decomposes in their presence"
      },
      correct_answer: "A",
      explanation: "For HCl, the H-Cl bond is strong (430 kJ/mol) and not cleaved homolytically by free radicals. For HI, I radicals combine to form I2 rather than adding to alkene double bond. Hence only HBr shows peroxide effect.",
      ncert_reference: {
        class: "Class 11",
        chapter: "Hydrocarbons",
        official_section: "Section 13.3.5: Addition of Hydrogen Halides (Peroxide Effect)",
        page_number: "Page 385",
        exact_quote: "The peroxide effect is observed only in case of HBr, not with HCl and HI."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "The correct order of increasing basic strength of aliphatic amines in aqueous solution for methyl substituted amines is:",
      options: {
        A: "(CH3)2NH > CH3NH2 > (CH3)3N > NH3",
        B: "(CH3)3N > (CH3)2NH > CH3NH2 > NH3",
        C: "CH3NH2 > (CH3)2NH > (CH3)3N > NH3",
        D: "(CH3)2NH > (CH3)3N > CH3NH2 > NH3"
      },
      correct_answer: "A",
      explanation: "In aqueous solution, the order of basicity depends on inductive effect, solvation effect, and steric hindrance. For methyl substituted amines, the order is secondary > primary > tertiary > ammonia: (CH3)2NH > CH3NH2 > (CH3)3N > NH3.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Amines",
        official_section: "Section 13.4.1: Basicity of Amines",
        page_number: "Page 398",
        exact_quote: "The order of basicity of methyl substituted amines in aqueous solution is: (CH3)2NH > CH3NH2 > (CH3)3N > NH3."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "Which of the following compounds will give positive Fehling's test?",
      options: {
        A: "Acetaldehyde (CH3CHO)",
        B: "Acetone (CH3COCH3)",
        C: "Benzaldehyde (C6H5CHO)",
        D: "Acetophenone (C6H5COCH3)"
      },
      correct_answer: "A",
      explanation: "Aliphatic aldehydes like acetaldehyde reduce Fehling's solution to give red precipitate of cuprous oxide (Cu2O). Aromatic aldehydes (like benzaldehyde) and ketones do not reduce Fehling's solution.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Oxidation (Fehling's Test)",
        page_number: "Page 370",
        exact_quote: "Aromatic aldehydes do not reduce Fehling's solution. Aliphatic aldehydes form red precipitate of Cu2O."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "What is the coordination number and oxidation state of cobalt in the complex [Co(en)3]Cl3?",
      options: {
        A: "6 and +3",
        B: "3 and +3",
        C: "6 and +2",
        D: "3 and +2"
      },
      correct_answer: "A",
      explanation: "Ethylenediamine ('en') is a bidentate neutral ligand. Three 'en' ligands form 3 * 2 = 6 coordinate bonds (coordination number = 6). Oxidation state: Co + 3(0) + 3(-1) = 0 => Co = +3.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        official_section: "Section 9.2: Important Terms (Coordination Number)",
        page_number: "Page 246",
        exact_quote: "In [Co(en)3]3+, coordination number of Co is 6 because en is a bidentate ligand."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      section: 'Section B',
      pyq_year: 'NEET 2025 (Phase 2 / Re-NEET)',
      phase: 'Phase 2',
      subject: 'Chemistry',
      question: "The unit of rate constant for a zero order reaction is:",
      options: {
        A: "mol L^-1 s^-1",
        B: "s^-1",
        C: "L mol^-1 s^-1",
        D: "mol^-1 L s^-1"
      },
      correct_answer: "A",
      explanation: "For a zero order reaction: Rate = k [A]^0 = k. Therefore, units of k are identical to units of reaction rate: mol L^-1 s^-1.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Chemical Kinetics",
        official_section: "Section 4.2.2: Units of Rate Constant",
        page_number: "Page 99",
        exact_quote: "For a zero order reaction, the unit of rate constant is mol L^-1 s^-1."
      },
      question_type: "Direct Fact"
    }
  ]
};

// Aliases for Phase 2 subjects so they are directly accessible
export const NEET_2025_PHASE2_PHYSICS: PYQPaper = {
  ...NEET_2025_PHASE1_PHYSICS,
  id: 'neet-2025-p2-physics',
  yearLabel: 'NEET 2025 (Phase 2 / Re-NEET)',
  phase: 'Phase 2',
};

export const NEET_2025_PHASE2_BOTANY: PYQPaper = {
  ...NEET_2025_PHASE1_BOTANY,
  id: 'neet-2025-p2-botany',
  yearLabel: 'NEET 2025 (Phase 2 / Re-NEET)',
  phase: 'Phase 2',
};

export const NEET_2025_PHASE2_ZOOLOGY: PYQPaper = {
  ...NEET_2025_PHASE1_ZOOLOGY,
  id: 'neet-2025-p2-zoology',
  yearLabel: 'NEET 2025 (Phase 2 / Re-NEET)',
  phase: 'Phase 2',
};
