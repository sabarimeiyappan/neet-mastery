export interface ChapterInfo {
  chapterNumber: number;
  name: string;
  unit: string;
  ncertClass: 'Class 11' | 'Class 12';
  weightage: 'Very High' | 'High' | 'Medium';
  typicalQuestions: string;
  pageRange: string;
  sections: string[];
}

export const NEET_COMPLETE_SYLLABUS: Record<'Botany' | 'Zoology' | 'Physics' | 'Chemistry', ChapterInfo[]> = {
  Physics: [
    // Class 11
    {
      chapterNumber: 1,
      name: "Units and Measurements",
      unit: "Unit I: Physical World & Measurement",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 1-28",
      sections: ["1.1 The International System of Units", "1.2 Measurement of Length & Mass", "1.3 Accuracy, Precision & Errors in Measurement", "1.4 Significant Figures", "1.5 Dimensions of Physical Quantities", "1.6 Dimensional Formulae and Dimensional Equations", "1.7 Dimensional Analysis and its Applications"]
    },
    {
      chapterNumber: 2,
      name: "Motion in a Straight Line",
      unit: "Unit II: Kinematics",
      ncertClass: "Class 11",
      weightage: "Medium",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 29-50",
      sections: ["2.1 Position, Path Length and Displacement", "2.2 Average Velocity and Average Speed", "2.3 Instantaneous Velocity and Speed", "2.4 Acceleration", "2.5 Kinematic Equations for Uniformly Accelerated Motion", "2.6 Relative Velocity"]
    },
    {
      chapterNumber: 3,
      name: "Motion in a Plane",
      unit: "Unit II: Kinematics",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 51-78",
      sections: ["3.1 Scalars and Vectors", "3.2 Multiplication of Vectors by Real Numbers", "3.3 Addition and Subtraction of Vectors", "3.4 Resolution of Vectors", "3.5 Vector Addition - Analytical Method", "3.6 Motion in a Plane with Constant Acceleration", "3.7 Projectile Motion", "3.8 Uniform Circular Motion"]
    },
    {
      chapterNumber: 4,
      name: "Laws of Motion",
      unit: "Unit III: Laws of Motion",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 79-106",
      sections: ["4.1 Aristotle's Fallacy & Law of Inertia", "4.2 Newton's First Law of Motion", "4.3 Newton's Second Law of Motion", "4.4 Newton's Third Law of Motion", "4.5 Conservation of Momentum", "4.6 Equilibrium of a Particle", "4.7 Common Forces in Mechanics & Friction", "4.8 Circular Motion & Banking of Roads"]
    },
    {
      chapterNumber: 5,
      name: "Work, Energy and Power",
      unit: "Unit IV: Work, Energy and Power",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 107-134",
      sections: ["5.1 Notions of Work and Kinetic Energy", "5.2 Work Done by a Variable Force", "5.3 The Work-Energy Theorem", "5.4 The Concept of Potential Energy", "5.5 Conservation of Mechanical Energy", "5.6 Potential Energy of a Spring", "5.7 Power", "5.8 Collisions in One and Two Dimensions"]
    },
    {
      chapterNumber: 6,
      name: "System of Particles and Rotational Motion",
      unit: "Unit V: Motion of System of Particles & Rigid Body",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 135-172",
      sections: ["6.1 Centre of Mass", "6.2 Motion of Centre of Mass & Linear Momentum", "6.3 Vector Product of Two Vectors", "6.4 Angular Velocity and its Relation with Linear Velocity", "6.5 Torque and Angular Momentum", "6.6 Equilibrium of a Rigid Body", "6.7 Moment of Inertia & Radius of Gyration", "6.8 Kinematics of Rotational Motion", "6.9 Dynamics of Rotational Motion & Rolling Motion"]
    },
    {
      chapterNumber: 7,
      name: "Gravitation",
      unit: "Unit VI: Gravitation",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 173-198",
      sections: ["7.1 Kepler's Laws", "7.2 Universal Law of Gravitation", "7.3 The Gravitational Constant", "7.4 Acceleration due to Gravity of the Earth", "7.5 Acceleration due to Gravity below and above Earth Surface", "7.6 Gravitational Potential Energy", "7.7 Escape Speed", "7.8 Earth Satellites & Energy of an Orbiting Satellite"]
    },
    {
      chapterNumber: 8,
      name: "Mechanical Properties of Solids",
      unit: "Unit VII: Properties of Bulk Matter",
      ncertClass: "Class 11",
      weightage: "Medium",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 199-216",
      sections: ["8.1 Elastic Behaviour of Solids", "8.2 Stress and Strain", "8.3 Hooke's Law & Stress-Strain Curve", "8.4 Elastic Moduli (Young's, Shear, Bulk Modulus)", "8.5 Applications of Elastic Behaviour of Materials"]
    },
    {
      chapterNumber: 9,
      name: "Mechanical Properties of Fluids",
      unit: "Unit VII: Properties of Bulk Matter",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 217-248",
      sections: ["9.1 Pressure & Pascal's Law", "9.2 Streamline Flow & Equation of Continuity", "9.3 Bernoulli's Principle and Applications", "9.4 Viscosity & Stokes' Law", "9.5 Reynolds Number", "9.6 Surface Tension, Surface Energy & Capillarity"]
    },
    {
      chapterNumber: 10,
      name: "Thermal Properties of Matter",
      unit: "Unit VII: Properties of Bulk Matter",
      ncertClass: "Class 11",
      weightage: "Medium",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 249-278",
      sections: ["10.1 Temperature and Heat", "10.2 Thermal Expansion", "10.3 Specific Heat Capacity & Calorimetry", "10.4 Change of State & Latent Heat", "10.5 Heat Transfer (Conduction, Convection, Radiation)", "10.6 Newton's Law of Cooling & Wien's Displacement Law"]
    },
    {
      chapterNumber: 11,
      name: "Thermodynamics",
      unit: "Unit VIII: Thermodynamics",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 279-304",
      sections: ["11.1 Thermal Equilibrium & Zeroth Law", "11.2 First Law of Thermodynamics", "11.3 Specific Heat Capacity (Cp and Cv)", "11.4 Thermodynamic State Variables and Equation of State", "11.5 Thermodynamic Processes (Isothermal, Adiabatic, Isochoric, Isobaric)", "11.6 Second Law of Thermodynamics", "11.7 Reversible and Irreversible Processes & Carnot Engine"]
    },
    {
      chapterNumber: 12,
      name: "Kinetic Theory",
      unit: "Unit IX: Behaviour of Perfect Gas and Kinetic Theory",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 305-326",
      sections: ["12.1 Molecular Nature of Matter", "12.2 Behaviour of Gases & Ideal Gas Equation", "12.3 Kinetic Theory of an Ideal Gas: Pressure Expression", "12.4 Kinetic Interpretation of Temperature & RMS Speed", "12.5 Law of Equipartition of Energy & Degrees of Freedom", "12.6 Specific Heat Capacity of Gases and Solids", "12.7 Mean Free Path"]
    },
    {
      chapterNumber: 13,
      name: "Oscillations",
      unit: "Unit X: Oscillations and Waves",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 327-356",
      sections: ["13.1 Periodic and Oscillatory Motions", "13.2 Simple Harmonic Motion (SHM)", "13.3 Simple Harmonic Motion and Uniform Circular Motion", "13.4 Velocity and Acceleration in SHM", "13.5 Force Law for Simple Harmonic Motion", "13.6 Energy in Simple Harmonic Motion", "13.7 Systems Executing Simple Harmonic Motion (Springs & Simple Pendulum)"]
    },
    {
      chapterNumber: 14,
      name: "Waves",
      unit: "Unit X: Oscillations and Waves",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 357-386",
      sections: ["14.1 Transverse and Longitudinal Waves", "14.2 Displacement Relation in a Progressive Wave", "14.3 Speed of a Travelling Wave (String and Sound Wave)", "14.4 Principle of Superposition of Waves", "14.5 Reflection of Waves & Standing Waves in Strings and Pipes", "14.6 Beats", "14.7 Doppler Effect"]
    },

    // Class 12
    {
      chapterNumber: 15,
      name: "Electric Charges and Fields",
      unit: "Unit I: Electrostatics",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 1-44",
      sections: ["1.1 Electric Charges & Conservation", "1.2 Conductors and Insulators", "1.3 Coulomb's Law", "1.4 Forces between Multiple Charges & Superposition", "1.5 Electric Field & Electric Field Lines", "1.6 Electric Flux", "1.7 Electric Dipole & Torque on Dipole", "1.8 Continuous Charge Distribution", "1.9 Gauss's Law and its Applications"]
    },
    {
      chapterNumber: 16,
      name: "Electrostatic Potential and Capacitance",
      unit: "Unit I: Electrostatics",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 45-88",
      sections: ["2.1 Electrostatic Potential", "2.2 Potential due to a Point Charge and Electric Dipole", "2.3 Equipotential Surfaces", "2.4 Potential Energy of a System of Charges", "2.5 Potential Energy in an External Field", "2.6 Electrostatics of Conductors & Dielectrics", "2.7 Capacitors and Capacitance", "2.8 Parallel Plate Capacitor with Dielectric", "2.9 Combination of Capacitors & Energy Stored"]
    },
    {
      chapterNumber: 17,
      name: "Current Electricity",
      unit: "Unit II: Current Electricity",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 89-130",
      sections: ["3.1 Electric Current & Current Density", "3.2 Ohm's Law and Drift of Electrons", "3.3 Mobility and its Relation to Current", "3.4 Limitations of Ohm's Law", "3.5 Resistivity of Various Materials & Temperature Dependence", "3.6 Electrical Energy and Power", "3.7 Combination of Resistors", "3.8 Cells, EMF, Internal Resistance & Combination of Cells", "3.9 Kirchhoff's Rules", "3.10 Wheatstone Bridge & Meter Bridge"]
    },
    {
      chapterNumber: 18,
      name: "Moving Charges and Magnetism",
      unit: "Unit III: Magnetic Effects of Current & Magnetism",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 131-170",
      sections: ["4.1 Magnetic Force & Lorentz Force", "4.2 Motion in a Magnetic Field & Helical Motion", "4.3 Magnetic Field due to a Current Element: Biot-Savart Law", "4.4 Magnetic Field on the Axis of a Circular Current Loop", "4.5 Ampere's Circuital Law and Applications", "4.6 Solenoid and Toroid", "4.7 Force between Two Parallel Currents: The Ampere", "4.8 Torque on Current Loop: Magnetic Dipole", "4.9 Moving Coil Galvanometer and Conversion to Ammeter/Voltmeter"]
    },
    {
      chapterNumber: 19,
      name: "Magnetism and Matter",
      unit: "Unit III: Magnetic Effects of Current & Magnetism",
      ncertClass: "Class 12",
      weightage: "Medium",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 171-198",
      sections: ["5.1 The Bar Magnet as an Equivalent Solenoid", "5.2 Magnetism and Gauss's Law", "5.3 Earth's Magnetism & Magnetic Elements", "5.4 Magnetisation and Magnetic Intensity", "5.5 Magnetic Properties of Materials (Dia, Para, Ferro)", "5.6 Hysteresis Loop & Permanent Magnets"]
    },
    {
      chapterNumber: 20,
      name: "Electromagnetic Induction",
      unit: "Unit IV: Electromagnetic Induction & Alternating Currents",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 199-232",
      sections: ["6.1 The Experiments of Faraday and Henry", "6.2 Magnetic Flux", "6.3 Faraday's Law of Induction", "6.4 Lenz's Law and Conservation of Energy", "6.5 Motional Electromotive Force", "6.6 Energy Consideration: A Quantitative Study", "6.7 Eddy Currents", "6.8 Inductance (Self and Mutual)", "6.9 AC Generator"]
    },
    {
      chapterNumber: 21,
      name: "Alternating Current",
      unit: "Unit IV: Electromagnetic Induction & Alternating Currents",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 233-266",
      sections: ["7.1 AC Voltage Applied to a Resistor", "7.2 Representation of AC by Phasors", "7.3 AC Voltage Applied to an Inductor & Capacitor", "7.4 AC Voltage Applied to a Series LCR Circuit", "7.5 Resonance and Q-Factor in LCR Circuits", "7.6 Power in AC Circuit: The Power Factor", "7.7 LC Oscillations", "7.8 Transformers"]
    },
    {
      chapterNumber: 22,
      name: "Electromagnetic Waves",
      unit: "Unit V: Electromagnetic Waves",
      ncertClass: "Class 12",
      weightage: "Medium",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 267-286",
      sections: ["8.1 Displacement Current", "8.2 Electromagnetic Waves: Characteristics and Transverse Nature", "8.3 Electromagnetic Spectrum (Radio to Gamma Rays)"]
    },
    {
      chapterNumber: 23,
      name: "Ray Optics and Optical Instruments",
      unit: "Unit VI: Optics",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 287-340",
      sections: ["9.1 Reflection by Spherical Mirrors", "9.2 Refraction & Total Internal Reflection", "9.3 Refraction at Spherical Surfaces and by Lenses (Lens Maker's Formula)", "9.4 Refraction through a Prism", "9.5 Dispersion by a Prism", "9.6 Optical Instruments (Microscopes & Telescopes)"]
    },
    {
      chapterNumber: 24,
      name: "Wave Optics",
      unit: "Unit VI: Optics",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 341-378",
      sections: ["10.1 Huygens Principle & Wavefronts", "10.2 Refraction and Reflection of Plane Waves using Huygens Principle", "10.3 Coherent and Incoherent Addition of Waves", "10.4 Interference of Light Waves and Young's Experiment", "10.5 Diffraction of Light at a Single Slit", "10.6 Polarisation and Brewster's Law"]
    },
    {
      chapterNumber: 25,
      name: "Dual Nature of Radiation and Matter",
      unit: "Unit VII: Dual Nature of Radiation and Matter",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 379-408",
      sections: ["11.1 Electron Emission", "11.2 Photoelectric Effect & Experimental Study", "11.3 Einstein's Photoelectric Equation: Energy Quantum of Radiation", "11.4 Particle Nature of Light: The Photon", "11.5 Wave Nature of Matter: de Broglie Relation", "11.6 Davisson and Germer Experiment"]
    },
    {
      chapterNumber: 26,
      name: "Atoms",
      unit: "Unit VIII: Atoms and Nuclei",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 409-434",
      sections: ["12.1 Alpha-particle Scattering and Rutherford's Nuclear Model", "12.2 Atomic Spectra", "12.3 Bohr Model of the Hydrogen Atom", "12.4 The Line Spectra of the Hydrogen Atom", "12.5 De Broglie's Explanation of Bohr's Second Postulate"]
    },
    {
      chapterNumber: 27,
      name: "Nuclei",
      unit: "Unit VIII: Atoms and Nuclei",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 435-464",
      sections: ["13.1 Atomic Masses and Composition of Nucleus", "13.2 Size of the Nucleus", "13.3 Mass-Energy and Nuclear Binding Energy", "13.4 Nuclear Force", "13.5 Radioactivity & Law of Radioactive Decay", "13.6 Alpha, Beta and Gamma Decay", "13.7 Nuclear Energy: Fission and Fusion"]
    },
    {
      chapterNumber: 28,
      name: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      unit: "Unit IX: Electronic Devices",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 465-508",
      sections: ["14.1 Classification of Metals, Conductors and Semiconductors", "14.2 Intrinsic and Extrinsic Semiconductors (n-type, p-type)", "14.3 p-n Junction Formation & Depletion Layer", "14.4 Semiconductor Diode: Forward and Reverse Bias", "14.5 Application of Diode as a Rectifier (Half and Full Wave)", "14.6 Special Purpose p-n Junction Diodes (Zener, LED, Photodiode, Solar Cell)", "14.7 Logic Gates (NOT, AND, OR, NAND, NOR)"]
    }
  ],

  Chemistry: [
    // Class 11
    {
      chapterNumber: 1,
      name: "Some Basic Concepts of Chemistry",
      unit: "Unit I: Physical Chemistry",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 1-28",
      sections: ["1.1 Importance of Chemistry", "1.2 Nature of Matter", "1.3 Properties of Matter & Measurement", "1.4 Uncertainty in Measurement", "1.5 Laws of Chemical Combinations", "1.6 Dalton's Atomic Theory", "1.7 Atomic and Molecular Masses", "1.8 Mole Concept and Molar Masses", "1.9 Percentage Composition and Empirical Formula", "1.10 Stoichiometry and Stoichiometric Calculations"]
    },
    {
      chapterNumber: 2,
      name: "Structure of Atom",
      unit: "Unit II: Physical Chemistry",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 29-68",
      sections: ["2.1 Discovery of Sub-atomic Particles", "2.2 Atomic Models: Thomson & Rutherford", "2.3 Developments Leading to Bohr's Model (Wave-Particle Duality)", "2.4 Bohr's Model for Hydrogen Atom", "2.5 Towards Quantum Mechanical Model: de Broglie & Heisenberg", "2.6 Quantum Mechanical Model of Atom & Orbitals", "2.7 Quantum Numbers", "2.8 Shapes of Atomic Orbitals", "2.9 Rules for Filling Electrons: Aufbau, Pauli, Hund"]
    },
    {
      chapterNumber: 3,
      name: "Classification of Elements and Periodicity in Properties",
      unit: "Unit III: Inorganic Chemistry",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2 Questions",
      pageRange: "pp. 69-96",
      sections: ["3.1 Genesis of Periodic Classification", "3.2 Modern Periodic Law and the Present Form", "3.3 Electronic Configurations of Elements and the Periodic Table", "3.4 Electronic Configurations and Types of Elements (s, p, d, f Blocks)", "3.5 Periodic Trends in Properties (Atomic Radii, Ionic Radii, Ionization Enthalpy, Electron Gain Enthalpy, Electronegativity)"]
    },
    {
      chapterNumber: 4,
      name: "Chemical Bonding and Molecular Structure",
      unit: "Unit IV: Inorganic Chemistry",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "4-5 Questions",
      pageRange: "pp. 97-138",
      sections: ["4.1 Kössel-Lewis Approach to Chemical Bonding", "4.2 Ionic or Electrovalent Bond", "4.3 Bond Parameters", "4.4 The Valence Shell Electron Pair Repulsion (VSEPR) Theory", "4.5 Valence Bond Theory (VBT)", "4.6 Hybridisation (sp, sp2, sp3, d-orbitals)", "4.7 Molecular Orbital Theory (MOT) of Homonuclear Diatomic Molecules", "4.8 Hydrogen Bonding"]
    },
    {
      chapterNumber: 5,
      name: "Chemical Thermodynamics",
      unit: "Unit V: Physical Chemistry",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 139-178",
      sections: ["5.1 Thermodynamic Terms: System and Surroundings", "5.2 Internal Energy and Work", "5.3 First Law of Thermodynamics", "5.4 Enthalpy (H) and Heat Capacity", "5.5 Measurement of ΔU and ΔH: Calorimetry", "5.6 Enthalpy Changes during Phase Transformations and Reactions", "5.7 Hess's Law of Constant Heat Summation", "5.8 Spontaneity, Entropy (S) and Gibbs Energy (G)", "5.9 Gibbs Energy Change and Equilibrium"]
    },
    {
      chapterNumber: 6,
      name: "Equilibrium",
      unit: "Unit VI: Physical Chemistry",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 179-228",
      sections: ["6.1 Equilibrium in Physical Processes", "6.2 Equilibrium in Chemical Processes: Dynamic Equilibrium", "6.3 Law of Chemical Equilibrium and Equilibrium Constant (Kc, Kp)", "6.4 Homogeneous and Heterogeneous Equilibria", "6.5 Applications of Equilibrium Constants", "6.6 Factors Affecting Equilibria: Le Chatelier's Principle", "6.7 Ionic Equilibrium in Solution: Acids, Bases and Salts", "6.8 Ionization of Acids and Bases & pH Scale", "6.9 Buffer Solutions", "6.10 Solubility Product Constant (Ksp) & Common Ion Effect"]
    },
    {
      chapterNumber: 7,
      name: "Redox Reactions",
      unit: "Unit VII: Physical Chemistry",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "1-2 Questions",
      pageRange: "pp. 229-254",
      sections: ["7.1 Classical Idea of Redox Reactions", "7.2 Redox Reactions in Terms of Electron Transfer Reactions", "7.3 Oxidation Number", "7.4 Types of Redox Reactions", "7.5 Balancing of Redox Reactions (Oxidation Number & Half Reaction)", "7.6 Redox Reactions and Electrode Processes"]
    },
    {
      chapterNumber: 8,
      name: "Organic Chemistry: Some Basic Principles and Techniques",
      unit: "Unit VIII: Organic Chemistry",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 255-300",
      sections: ["8.1 General Introduction & Tetravalence of Carbon", "8.2 Structural Representations of Organic Compounds", "8.3 Classification of Organic Compounds", "8.4 Nomenclature of Organic Compounds (IUPAC Rules)", "8.5 Isomerism: Structural and Stereoisomerism", "8.6 Fundamental Concepts in Organic Reaction Mechanisms (Electrophiles, Nucleophiles, Inductive, Electromeric, Resonance, Hyperconjugation)", "8.7 Methods of Purification of Organic Compounds", "8.8 Qualitative and Quantitative Elemental Analysis"]
    },
    {
      chapterNumber: 9,
      name: "Hydrocarbons",
      unit: "Unit IX: Organic Chemistry",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 301-348",
      sections: ["9.1 Classification of Hydrocarbons", "9.2 Alkanes: Nomenclature, Isomerism, Preparation, Physical & Chemical Properties", "9.3 Conformations of Ethane", "9.4 Alkenes: Nomenclature, Geometrical Isomerism, Preparation & Addition Reactions (Markovnikov & Anti-Markovnikov)", "9.5 Alkynes: Nomenclature, Preparation, Acidity & Chemical Reactions", "9.6 Aromatic Hydrocarbons: Benzene, Aromaticity (Hückel Rule) & Electrophilic Aromatic Substitution Mechanisms"]
    },

    // Class 12
    {
      chapterNumber: 10,
      name: "Solutions",
      unit: "Unit I: Physical Chemistry",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 1-34",
      sections: ["1.1 Types of Solutions", "1.2 Expressing Concentration of Solutions (Molarity, Molality, Mole Fraction)", "1.3 Solubility of Solids and Gases in Liquids (Henry's Law)", "1.4 Vapour Pressure of Liquid Solutions & Raoult's Law", "1.5 Ideal and Non-ideal Solutions", "1.6 Colligative Properties (Relative Lowering of VP, Elevation of BP, Depression of FP, Osmotic Pressure)", "1.7 Abnormal Molar Masses and van 't Hoff Factor (i)"]
    },
    {
      chapterNumber: 11,
      name: "Electrochemistry",
      unit: "Unit II: Physical Chemistry",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 35-74",
      sections: ["2.1 Electrochemical Cells & Galvanic Cells", "2.2 Nernst Equation and its Application", "2.3 Equilibrium Constant from Nernst Equation", "2.4 Electrochemical Cell and Gibbs Energy of the Reaction", "2.5 Conductance of Electrolytic Solutions (Molar Conductivity & Kohlrausch's Law)", "2.6 Electrolytic Cells and Electrolysis: Faraday's Laws", "2.7 Batteries: Primary and Secondary Cells", "2.8 Fuel Cells & Corrosion"]
    },
    {
      chapterNumber: 12,
      name: "Chemical Kinetics",
      unit: "Unit III: Physical Chemistry",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 75-108",
      sections: ["3.1 Rate of a Chemical Reaction", "3.2 Factors Influencing Rate of a Reaction", "3.3 Integrated Rate Equations (Zero Order and First Order)", "3.4 Half-Life of a Reaction", "3.5 Pseudo First Order Reactions", "3.6 Temperature Dependence of Rate: Arrhenius Equation & Activation Energy", "3.7 Collision Theory of Chemical Reactions"]
    },
    {
      chapterNumber: 13,
      name: "The d- and f-Block Elements",
      unit: "Unit IV: Inorganic Chemistry",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 109-144",
      sections: ["4.1 Position in the Periodic Table", "4.2 Electronic Configurations of the d-Block Elements", "4.3 General Properties of Transition Elements (Oxidation States, Magnetic Properties, Catalytic Properties, Complex Formation)", "4.4 Important Compounds of Transition Elements: K2Cr2O7 and KMnO4", "4.5 The Lanthanoids: Electronic Configuration, Oxidation States & Lanthanoid Contraction", "4.6 The Actinoids: General Characteristics & Comparison with Lanthanoids"]
    },
    {
      chapterNumber: 14,
      name: "Coordination Compounds",
      unit: "Unit V: Inorganic Chemistry",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 145-180",
      sections: ["5.1 Werner's Theory of Coordination Compounds", "5.2 Definition of Some Important Terms (Coordination Entity, Ligands, Chelation, Coordination Number)", "5.3 Nomenclature of Coordination Compounds (IUPAC Rules)", "5.4 Isomerism in Coordination Compounds (Structural & Stereoisomerism)", "5.5 Bonding in Coordination Compounds: Valence Bond Theory (VBT)", "5.6 Crystal Field Theory (CFT) in Octahedral and Tetrahedral Complexes", "5.7 Colour in Coordination Compounds & Spectrochemical Series", "5.8 Bonding in Metal Carbonyls & Importance of Coordination Compounds"]
    },
    {
      chapterNumber: 15,
      name: "Haloalkanes and Haloarenes",
      unit: "Unit VI: Organic Chemistry",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 181-218",
      sections: ["6.1 Classification and Nomenclature", "6.2 Nature of C-X Bond", "6.3 Methods of Preparation of Haloalkanes and Haloarenes", "6.4 Physical Properties", "6.5 Chemical Reactions: Nucleophilic Substitution Mechanisms (SN1 and SN2)", "6.6 Elimination Reactions & Reaction with Metals", "6.7 Chemical Reactions of Haloarenes (Electrophilic Substitution & Nucleophilic Inertness)", "6.8 Polyhalogen Compounds (Dichloromethane, Chloroform, Iodoform, Freons, DDT)"]
    },
    {
      chapterNumber: 16,
      name: "Alcohols, Phenols and Ethers",
      unit: "Unit VII: Organic Chemistry",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 219-258",
      sections: ["7.1 Classification and Nomenclature", "7.2 Structures of Functional Groups", "7.3 Alcohols and Phenols: Preparation Methods", "7.4 Physical Properties of Alcohols and Phenols", "7.5 Chemical Reactions of Alcohols (Acidity, Esterification, Dehydration, Oxidation)", "7.6 Chemical Reactions of Phenols (Electrophilic Substitution, Kolbe's Reaction, Reimer-Tiemann Reaction)", "7.7 Ethers: Preparation (Williamson Synthesis) and Cleavage by Halogen Acids"]
    },
    {
      chapterNumber: 17,
      name: "Aldehydes, Ketones and Carboxylic Acids",
      unit: "Unit VIII: Organic Chemistry",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 259-300",
      sections: ["8.1 Nomenclature and Structure of Carbonyl Group", "8.2 Preparation of Aldehydes and Ketones", "8.3 Physical Properties", "8.4 Chemical Reactions: Nucleophilic Addition Reactions Mechanism", "8.5 Reduction, Oxidation, Tollens' and Fehling's Tests, Haloform Reaction", "8.6 Aldol Condensation, Cross Aldol & Cannizzaro Reaction", "8.7 Carboxylic Acids: Nomenclature, Preparation, Acidity and Reactions (HVZ Reaction, Decarboxylation)"]
    },
    {
      chapterNumber: 18,
      name: "Amines",
      unit: "Unit IX: Organic Chemistry",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 301-334",
      sections: ["9.1 Structure and Classification of Amines", "9.2 Nomenclature", "9.3 Preparation of Amines (Reduction of Nitro, Nitriles, Gabriel Phthalimide, Hoffmann Bromamide)", "9.4 Physical Properties and Basic Character of Amines", "9.5 Chemical Reactions (Acylation, Carbylamine Test, Hinsberg Test, Reaction with HNO2)", "9.6 Diazonium Salts: Preparation, Physical Properties & Synthetic Applications"]
    },
    {
      chapterNumber: 19,
      name: "Biomolecules",
      unit: "Unit X: Organic Chemistry",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 335-364",
      sections: ["10.1 Carbohydrates: Classification, Monosaccharides (D/L-Glucose, Fructose Structure, Mutarotation), Disaccharides & Polysaccharides", "10.2 Proteins: Amino Acids, Peptide Bond, Polypeptides, Protein Structures (Primary to Quaternary), Denaturation", "10.3 Enzymes: Mechanism and Specificity", "10.4 Vitamins: Classification and Deficiency Diseases", "10.5 Nucleic Acids: Chemical Composition, DNA/RNA Structures, Double Helix"]
    }
  ],

  Botany: [
    // Class 11
    {
      chapterNumber: 1,
      name: "The Living World & Biological Classification",
      unit: "Unit I: Diversity in the Living World",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 1-28",
      sections: ["1.1 Characteristics of Living Organisms", "1.2 Taxonomic Categories & Herbaria", "2.1 Five Kingdom Classification (Whittaker)", "2.2 Kingdom Monera (Bacteria, Archaebacteria, Cyanobacteria)", "2.3 Kingdom Protista (Diatoms, Dinoflagellates, Euglenoids, Slime Moulds)", "2.4 Kingdom Fungi (Phycomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes)", "2.5 Viruses, Viroids, Prions and Lichens"]
    },
    {
      chapterNumber: 2,
      name: "Plant Kingdom",
      unit: "Unit I: Diversity in the Living World",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 29-45",
      sections: ["3.1 Algae: Chlorophyceae, Phaeophyceae, Rhodophyceae & Pigmentation", "3.2 Bryophytes: Liverworts and Mosses Life Cycles", "3.3 Pteridophytes: Homospory, Heterospory & Seed Habit Precursors", "3.4 Gymnosperms: Morphology, Reproduction & Alternation of Generations", "3.5 Plant Life Cycles and Alternation of Generations (Haplontic, Diplontic, Haplodiplontic)"]
    },
    {
      chapterNumber: 3,
      name: "Morphology of Flowering Plants",
      unit: "Unit II: Structural Organisation in Plants",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 46-75",
      sections: ["4.1 The Root: Types, Regions and Modifications", "4.2 The Stem: Characteristics and Modifications", "4.3 The Leaf: Venation, Types, Phyllotaxy & Modifications", "4.4 Inflorescence: Racemose and Cymose", "4.5 The Flower: Parts, Aestivation, Placentation Types", "4.6 The Fruit: Types and Parts", "4.7 The Seed & Semi-technical Description of Typical Flowering Plants (Fabaceae, Solanaceae, Liliaceae)"]
    },
    {
      chapterNumber: 4,
      name: "Anatomy of Flowering Plants",
      unit: "Unit II: Structural Organisation in Plants",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 76-96",
      sections: ["5.1 Meristematic Tissues (Apical, Intercalary, Lateral)", "5.2 Permanent Tissues: Simple (Parenchyma, Collenchyma, Sclerenchyma) and Complex (Xylem and Phloem)", "5.3 The Tissue System: Epidermal, Ground, and Vascular Systems", "5.4 Anatomy of Dicotyledonous and Monocotyledonous Roots", "5.5 Anatomy of Dicotyledonous and Monocotyledonous Stems", "5.6 Anatomy of Dorsiventral and Isobilateral Leaves", "5.7 Secondary Growth: Vascular Cambium & Cork Cambium"]
    },
    {
      chapterNumber: 5,
      name: "Cell: The Unit of Life",
      unit: "Unit III: Cell: Structure and Function",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "4 Questions",
      pageRange: "pp. 97-124",
      sections: ["6.1 Cell Theory and An Overview of Cell", "6.2 Prokaryotic Cells: Cell Envelope, Mesosomes, Ribosomes, Inclusion Bodies", "6.3 Eukaryotic Cells & Fluid Mosaic Model of Plasma Membrane", "6.4 Cell Wall and Endomembrane System (ER, Golgi Apparatus, Lysosomes, Vacuoles)", "6.5 Mitochondria and Plastids (Chloroplasts)", "6.6 Ribosomes and Cytoskeleton", "6.7 Cilia, Flagella and Centrosome", "6.8 Nucleus, Chromatin and Chromosome Morphology"]
    },
    {
      chapterNumber: 6,
      name: "Cell Cycle and Cell Division",
      unit: "Unit III: Cell: Structure and Function",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 125-142",
      sections: ["7.1 Cell Cycle Phases: Interphase (G1, S, G2) and M Phase", "7.2 Mitosis: Prophase, Metaphase, Anaphase, Telophase, Cytokinesis & Significance", "7.3 Meiosis: Meiosis I (Prophase I sub-stages: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis)", "7.4 Meiosis II and Comparison between Mitosis and Meiosis"]
    },
    {
      chapterNumber: 7,
      name: "Photosynthesis in Higher Plants",
      unit: "Unit IV: Plant Physiology",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 143-170",
      sections: ["8.1 Historical Experiments on Photosynthesis (Priestley, Ingenhousz, Sachs, Engelmann, Van Niel)", "8.2 Site of Photosynthesis and Chloroplast Pigments (Absorption & Action Spectra)", "8.3 Light Reaction: Electron Transport, Photosystems I & II, Photophosphorylation (Cyclic & Non-cyclic)", "8.4 Chemiosmotic Hypothesis (Peter Mitchell)", "8.5 The Dark Reaction / Calvin Cycle (C3 Pathway)", "8.6 The C4 Pathway (Kranz Anatomy, Hatch-Slack Pathway)", "8.7 Photorespiration (C2 Cycle)", "8.8 Factors Affecting Photosynthesis (Blackman's Law of Limiting Factors)"]
    },
    {
      chapterNumber: 8,
      name: "Respiration in Plants",
      unit: "Unit IV: Plant Physiology",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 171-192",
      sections: ["9.1 Do Plants Breathe? Cellular Respiration Overview", "9.2 Glycolysis (EMP Pathway) & Steps", "9.3 Fermentation (Alcoholic and Lactic Acid)", "9.4 Aerobic Respiration: Link Reaction & Tricarboxylic Acid (TCA / Krebs) Cycle", "9.5 Electron Transport System (ETS) and Oxidative Phosphorylation", "9.6 The Respiratory Balance Sheet & ATP Yield", "9.7 Amphibolic Pathway", "9.8 Respiratory Quotient (RQ) for Carbohydrates, Fats, Proteins, Organic Acids"]
    },
    {
      chapterNumber: 9,
      name: "Plant Growth and Development",
      unit: "Unit IV: Plant Physiology",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 193-214",
      sections: ["10.1 Growth Characteristics, Phases and Growth Rates (Arithmetic and Geometric)", "10.2 Conditions for Growth", "10.3 Differentiation, Dedifferentiation and Redifferentiation", "10.4 Development and Plasticity", "10.5 Plant Growth Regulators: Auxins, Gibberellins, Cytokinins, Ethylene, Abscisic Acid (ABA)", "10.6 Photoperiodism and Vernalization"]
    },

    // Class 12
    {
      chapterNumber: 10,
      name: "Sexual Reproduction in Flowering Plants",
      unit: "Unit I: Reproduction",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "4-5 Questions",
      pageRange: "pp. 1-28",
      sections: ["1.1 Flower - A Fascinating Organ of Angiosperms", "1.2 Pre-fertilisation: Microsporogenesis & Pollen Grain Structure", "1.3 Megasporogenesis & Monosporic Female Gametophyte (Embryo Sac) Development", "1.4 Pollination: Types (Autogamy, Geitonogamy, Xenogamy), Agents & Outbreeding Devices", "1.5 Pollen-Pistil Interaction & Artificial Hybridisation", "1.6 Double Fertilisation: Syngamy and Triple Fusion", "1.7 Post-fertilisation: Endosperm and Embryo Development", "1.8 Seed, Fruit, Apomixis and Polyembryony"]
    },
    {
      chapterNumber: 11,
      name: "Principles of Inheritance and Variation",
      unit: "Unit II: Genetics and Evolution",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "5-6 Questions",
      pageRange: "pp. 29-66",
      sections: ["2.1 Mendel's Laws of Inheritance (Monohybrid & Dihybrid Crosses)", "2.2 Incomplete Dominance, Co-dominance & Multiple Alleles (ABO Blood Groups)", "2.3 Chromosomal Theory of Inheritance (Sutton and Boveri)", "2.4 Linkage and Recombination (T.H. Morgan's Drosophila Experiments)", "2.5 Polygenic Inheritance and Pleiotropy", "2.6 Sex Determination in Humans, Birds, Honeybees", "2.7 Mutation and Pedigree Analysis", "2.8 Mendelian Disorders (Haemophilia, Sickle Cell Anaemia, Phenylketonuria, Thalassemia)", "2.9 Chromosomal Disorders (Down, Turner, Klinefelter Syndromes)"]
    },
    {
      chapterNumber: 12,
      name: "Molecular Basis of Inheritance",
      unit: "Unit II: Genetics and Evolution",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "6-8 Questions",
      pageRange: "pp. 67-110",
      sections: ["3.1 The DNA Structure & Chargaff's Rules", "3.2 Packaging of DNA Helix: The Nucleosome Model", "3.3 The Search for Genetic Material: Griffith, Avery-MacLeod-McCarty, Hershey-Chase", "3.4 Properties of Genetic Material: DNA versus RNA", "3.5 RNA World Hypothesis", "3.6 DNA Replication: Meselson-Stahl Experiment & Enzymes", "3.7 Transcription: Transcription Unit, Prokaryotic vs Eukaryotic Transcription (Capping, Tailing, Splicing)", "3.8 Genetic Code: Features, Wobble Hypothesis, tRNA Adapter Molecule", "3.9 Translation: Mechanism and Regulation", "3.10 Regulation of Gene Expression: The Lac Operon", "3.11 Human Genome Project (HGP): Goals and Salient Features", "3.12 DNA Fingerprinting: VNTR and Methodology"]
    },
    {
      chapterNumber: 13,
      name: "Microbes in Human Welfare",
      unit: "Unit III: Biology in Human Welfare",
      ncertClass: "Class 12",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 111-130",
      sections: ["4.1 Microbes in Household Products (Curd, Dough, Cheese)", "4.2 Microbes in Industrial Products (Fermented Beverages, Antibiotics, Chemicals, Enzymes, Bioactive Molecules like Cyclosporin A & Statins)", "4.3 Microbes in Sewage Treatment (Primary and Secondary / Biological Treatment)", "4.4 Microbes in Production of Biogas", "4.5 Microbes as Biocontrol Agents", "4.6 Microbes as Biofertilisers (Rhizobium, Mycorrhiza, Cyanobacteria)"]
    },
    {
      chapterNumber: 14,
      name: "Biotechnology: Principles and Processes",
      unit: "Unit IV: Biotechnology",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "4-5 Questions",
      pageRange: "pp. 131-152",
      sections: ["5.1 Principles of Biotechnology: Genetic Engineering and Bioprocess Engineering", "5.2 Tools of Recombinant DNA Technology: Restriction Enzymes (Endonucleases & Exonucleases)", "5.3 Cloning Vectors: Plasmids (pBR322 Features, Selectable Markers, Insertional Inactivation)", "5.4 Competent Host (For Transformation with Recombinant DNA)", "5.5 Processes of Recombinant DNA Technology: Isolation of DNA, PCR, Bioreactors & Downstream Processing"]
    },
    {
      chapterNumber: 15,
      name: "Biotechnology and Its Applications",
      unit: "Unit IV: Biotechnology",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 153-170",
      sections: ["6.1 Biotechnological Applications in Agriculture: Bt Cotton, RNA Interference (RNAi)", "6.2 Biotechnological Applications in Medicine: Genetically Engineered Insulin, Gene Therapy (ADA Deficiency), Molecular Diagnosis (PCR, ELISA)", "6.3 Transgenic Animals: Uses and Models", "6.4 Ethical Issues and Biopiracy (Basmati Rice Controversy)"]
    },
    {
      chapterNumber: 16,
      name: "Organisms and Populations",
      unit: "Unit V: Ecology and Environment",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 171-196",
      sections: ["7.1 Organism and Its Environment: Major Abiotic Factors (Temperature, Water, Light, Soil)", "7.2 Responses to Abiotic Factors (Regulate, Conform, Migrate, Suspend)", "7.3 Adaptations (Morphological, Physiological, Behavioural)", "7.4 Population Attributes (Birth Rates, Death Rates, Age Pyramids)", "7.5 Population Growth Models: Exponential and Logistic Growth Curves", "7.6 Population Interactions: Mutualism, Competition (Gause's Exclusion), Predation, Parasitism, Commensalism, Amensalism"]
    },
    {
      chapterNumber: 17,
      name: "Ecosystem",
      unit: "Unit V: Ecology and Environment",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 197-220",
      sections: ["8.1 Ecosystem: Structure and Function", "8.2 Productivity: Primary and Secondary Productivity", "8.3 Decomposition: Steps and Factors Influencing", "8.4 Energy Flow: Food Chains, Food Webs and Trophic Levels", "8.5 Ecological Pyramids: Number, Biomass and Energy (Inverted Pyramids)", "8.6 Ecological Succession: Hydrarch and Xerarch Succession", "8.7 Nutrient Cycling: Carbon and Phosphorus Cycles", "8.8 Ecosystem Services"]
    },
    {
      chapterNumber: 18,
      name: "Biodiversity and Its Conservation",
      unit: "Unit V: Ecology and Environment",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 221-240",
      sections: ["9.1 Biodiversity Levels: Genetic, Species and Ecological", "9.2 Patterns of Biodiversity: Latitudinal Gradients & Species-Area Relationship (Alexander von Humboldt)", "9.3 The Importance of Species Diversity to the Ecosystem (David Tilman, Rivet Popper Hypothesis)", "9.4 Loss of Biodiversity: The Evil Quartet (Habitat Loss, Over-exploitation, Alien Species Invasions, Co-extinctions)", "9.5 Biodiversity Conservation: In-situ (National Parks, Sanctuaries, Biosphere Reserves, Sacred Groves) and Ex-situ (Botanical Gardens, Zoological Parks, Cryopreservation)"]
    }
  ],

  Zoology: [
    // Class 11
    {
      chapterNumber: 1,
      name: "Animal Kingdom",
      unit: "Unit I: Diversity in the Living World",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "4-5 Questions",
      pageRange: "pp. 46-75",
      sections: ["1.1 Basis of Classification: Levels of Organisation, Symmetry, Diploblastic and Triploblastic, Coelom, Segmentation, Notochord", "1.2 Non-Chordates: Phylum Porifera, Coelenterata (Cnidaria), Ctenophora, Platyhelminthes, Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata", "1.3 Phylum Chordata: Urochordata, Cephalochordata, Vertebrata", "1.4 Subphylum Vertebrata: Agnatha (Cyclostomata) and Gnathostomata", "1.5 Classes of Vertebrata: Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia"]
    },
    {
      chapterNumber: 2,
      name: "Structural Organisation in Animals",
      unit: "Unit II: Structural Organisation in Animals",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 76-96",
      sections: ["2.1 Animal Tissues: Epithelial Tissue (Squamous, Cuboidal, Columnar, Ciliated, Glandular, Compound)", "2.2 Connective Tissue: Loose (Areolar, Adipose), Dense, Specialised (Cartilage, Bone, Blood)", "2.3 Muscle Tissue: Skeletal, Smooth, Cardiac", "2.4 Neural Tissue: Neurons and Neuroglia", "2.5 Morphology and Anatomy of Frog (Rana tigrina): Digestive, Respiratory, Circulatory, Excretory, Nervous and Reproductive Systems"]
    },
    {
      chapterNumber: 3,
      name: "Biomolecules (Enzymes & Cellular Metabolism)",
      unit: "Unit III: Cell: Structure and Function",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 97-124",
      sections: ["3.1 How to Analyse Chemical Composition? Acid-soluble and Acid-insoluble Pool", "3.2 Primary and Secondary Metabolites", "3.3 Biomacromolecules", "3.4 Proteins and Amino Acids", "3.5 Lipids: Fatty Acids, Glycerides, Phospholipids", "3.6 Nucleic Acids: Nucleosides and Nucleotides", "3.7 Structure of Proteins: Primary, Secondary, Tertiary, Quaternary", "3.8 Nature of Bond Linking Monomers in a Polymer", "3.9 Dynamic State of Body Constituents: Concept of Metabolism", "3.10 Enzymes: Chemical Nature, Activation Energy, Factors Affecting Enzyme Activity, Enzyme Inhibition (Competitive & Allosteric), Classification & Co-factors"]
    },
    {
      chapterNumber: 4,
      name: "Breathing and Exchange of Gases",
      unit: "Unit IV: Human Physiology",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 125-144",
      sections: ["4.1 Respiratory Organs in Animals", "4.2 Human Respiratory System: Anatomy of Lungs and Alveoli", "4.3 Mechanism of Breathing: Inspiration and Expiration", "4.4 Respiratory Volumes and Capacities: TV, IRV, ERV, RV, IC, EC, FRC, VC, TLC", "4.5 Exchange of Gases: Partial Pressures of O2 and CO2 across Alveoli and Tissues", "4.6 Transport of Gases: Transport of Oxygen, Oxygen Dissociation Curve, Bohr Effect", "4.7 Transport of Carbon Dioxide: Chloride Shift (Hamburger's Phenomenon)", "4.8 Regulation of Respiration: Respiratory Rhythm Centre, Pneumotaxic Centre & Chemosensitive Area", "4.9 Disorders of Respiratory System: Asthma, Emphysema, Occupational Respiratory Disorders"]
    },
    {
      chapterNumber: 5,
      name: "Body Fluids and Circulation",
      unit: "Unit IV: Human Physiology",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3 Questions",
      pageRange: "pp. 145-168",
      sections: ["5.1 Blood Composition: Plasma and Formed Elements (Erythrocytes, Leukocytes, Platelets)", "5.2 Blood Groups: ABO Blood Groups and Rh Incompatibility (Erythroblastosis Foetalis)", "5.3 Coagulation of Blood: Clotting Cascade Factors", "5.4 Lymph (Tissue Fluid): Composition and Functions", "5.5 Circulatory Pathways: Open vs Closed", "5.6 Human Circulatory System: Anatomy of Heart, Cardiac Muscle, Conducting System (SA Node, AV Node, Bundle of His, Purkinje Fibres)", "5.7 Cardiac Cycle: Events, Stroke Volume and Cardiac Output", "5.8 Electrocardiograph (ECG): P Wave, QRS Complex, T Wave Analysis", "5.9 Double Circulation: Pulmonary and Systemic, Hepatic Portal System", "5.10 Regulation of Cardiac Activity: Neural and Hormonal", "5.11 Disorders of Circulatory System: Hypertension, Coronary Artery Disease (Atherosclerosis), Angina Pectoris, Heart Failure"]
    },
    {
      chapterNumber: 6,
      name: "Excretory Products and Their Elimination",
      unit: "Unit IV: Human Physiology",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 169-190",
      sections: ["6.1 Modes of Excretion: Ammonotelism, Ureotelism, Uricotelism", "6.2 Human Excretory System: Gross Anatomy of Kidneys, Ureters, Bladder, Urethra", "6.3 Structure of Nephron: Glomerulus, Bowman's Capsule, PCT, Henle's Loop, DCT, Collecting Duct (Cortical vs Juxtamedullary Nephrons)", "6.4 Urine Formation: Glomerular Filtration (GFR), Tubular Reabsorption, Tubular Secretion", "6.5 Function of the Tubules", "6.6 Mechanism of Concentration of the Filtrate: Counter Current Mechanism (Henle's Loop and Vasa Recta)", "6.7 Regulation of Kidney Function: Hypothalamus (ADH), JGA (RAAS Pathway: Renin-Angiotensin-Aldosterone), ANF (Atrial Natriuretic Factor)", "6.8 Micturition Reflex", "6.9 Role of other Organs in Excretion: Lungs, Liver, Skin", "6.10 Disorders of the Excretory System: Uraemia, Renal Failure, Dialysis, Renal Calculi, Glomerulonephritis"]
    },
    {
      chapterNumber: 7,
      name: "Locomotion and Movement",
      unit: "Unit IV: Human Physiology",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 191-212",
      sections: ["7.1 Types of Movement: Amoeboid, Ciliary, Muscular", "7.2 Muscle Structure: Skeletal Muscle, Fascicles, Muscle Fibre, Myofibril", "7.3 Structure of Contractile Proteins: Actin, Tropomyosin, Troponin and Myosin (Meromyosin)", "7.4 Mechanism of Muscle Contraction: Sliding Filament Theory, Neuromuscular Junction, Role of Ca2+ and ATP", "7.5 Red vs White Muscle Fibres", "7.6 Skeletal System: Axial Skeleton (Skull, Vertebral Column, Ribs, Sternum) and Appendicular Skeleton (Pectoral & Pelvic Girdles, Limbs)", "7.7 Joints: Fibrous, Cartilaginous, Synovial (Ball & Socket, Hinge, Pivot, Gliding, Saddle)", "7.8 Disorders of Muscular and Skeletal System: Myasthenia Gravis, Muscular Dystrophy, Tetany, Arthritis, Osteoporosis, Gout"]
    },
    {
      chapterNumber: 8,
      name: "Neural Control and Coordination",
      unit: "Unit IV: Human Physiology",
      ncertClass: "Class 11",
      weightage: "High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 213-234",
      sections: ["8.1 Neural System Overview", "8.2 Human Neural System: Central and Peripheral Neural Systems", "8.3 Neuron as Structural and Functional Unit of Neural System (Types: Unipolar, Bipolar, Multipolar)", "8.4 Generation and Conduction of Nerve Impulse: Resting Potential (Na+/K+ ATPase), Action Potential, Depolarisation, Repolarisation", "8.5 Transmission of Impulses: Electrical Synapse and Chemical Synapse (Neurotransmitters)", "8.6 Central Neural System: Forebrain (Cerebrum, Thalamus, Hypothalamus, Limbic System), Midbrain (Corpora Quadrigemina), Hindbrain (Cerebellum, Pons, Medulla Oblongata)", "8.7 Reflex Action and Reflex Arc"]
    },
    {
      chapterNumber: 9,
      name: "Chemical Coordination and Integration",
      unit: "Unit IV: Human Physiology",
      ncertClass: "Class 11",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 235-256",
      sections: ["9.1 Endocrine Glands and Hormones (Definition)", "9.2 Human Endocrine System: Hypothalamus Hormones (Releasing & Inhibiting)", "9.3 Pituitary Gland: Adenohypophysis (GH, PRL, TSH, ACTH, LH, FSH, MSH) and Neurohypophysis (Oxytocin, Vasopressin/ADH)", "9.4 Pineal Gland: Melatonin and Diurnal Rhythm", "9.5 Thyroid Gland: T3, T4, Thyrocalcitonin (TCT) & Disorders (Goitre, Cretinism, Myxoedema)", "9.6 Parathyroid Gland: PTH and Calcium Homeostasis", "9.7 Thymus: Thymosins and Cell-mediated Immunity", "9.8 Adrenal Gland: Adrenal Cortex (Glucocorticoids, Mineralocorticoids) and Adrenal Medulla (Adrenaline, Noradrenaline)", "9.9 Pancreas: Islets of Langerhans (Glucagon, Insulin & Diabetes Mellitus)", "9.10 Testis and Ovary Hormones", "9.11 Hormones of Heart (ANF), Kidney (Erythropoietin), Gastrointestinal Tract (Gastrin, Secretin, CCK, GIP)", "9.12 Mechanism of Hormone Action: Membrane-bound Receptors (Secondary Messengers: cAMP, IP3, Ca2+) vs Intranuclear Receptors (Steroid & Thyroid Hormones)"]
    },

    // Class 12
    {
      chapterNumber: 10,
      name: "Human Reproduction",
      unit: "Unit I: Reproduction",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 1-28",
      sections: ["1.1 The Male Reproductive System: Testes, Seminiferous Tubules, Sertoli Cells, Leydig Cells, Accessory Ducts and Glands (Seminal Vesicles, Prostate, Bulbourethral)", "1.2 The Female Reproductive System: Ovaries, Fallopian Tubes, Uterus, Cervix, Vagina, External Genitalia, Mammary Glands", "1.3 Spermatogenesis: Hormonal Control & Structure of Sperm", "1.4 Oogenesis: Follicular Development (Primary, Secondary, Tertiary, Graafian Follicle), Corpus Luteum", "1.5 Menstrual Cycle: Phases (Menstrual, Follicular/Proliferative, Luteal/Secretory) and Hormonal Regulation (FSH, LH, Estrogen, Progesterone)", "1.6 Fertilisation and Implantation: Capacitation, Acrosome Reaction, Cortical Reaction, Cleavage, Blastocyst & Implantation", "1.7 Pregnancy and Embryonic Development: Placenta Hormones (hCG, hPL, Relaxin), Germ Layers", "1.8 Parturition and Lactation: Foetal Ejection Reflex, Oxytocin, Colostrum"]
    },
    {
      chapterNumber: 11,
      name: "Reproductive Health",
      unit: "Unit I: Reproduction",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "2-3 Questions",
      pageRange: "pp. 29-48",
      sections: ["2.1 Reproductive Health - Problems and Strategies (Family Planning, RCH)", "2.2 Population Explosion and Birth Control: Contraceptive Methods (Natural, Barrier, IUDs like CuT, LNG-20, Oral Pills like Saheli, Injectables, Implants, Surgical Methods: Vasectomy, Tubectomy)", "2.3 Medical Termination of Pregnancy (MTP): MTP Amendment Act", "2.4 Sexually Transmitted Infections (STIs): Gonorrhoea, Syphilis, Genital Herpes, Chlamydiasis, Hepatitis-B, HIV", "2.5 Infertility and Assisted Reproductive Technologies (ART): IVF-ET (ZIFT, IUT), GIFT, ICSI, Artificial Insemination (IUI)"]
    },
    {
      chapterNumber: 12,
      name: "Evolution",
      unit: "Unit II: Genetics and Evolution",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "3-4 Questions",
      pageRange: "pp. 49-80",
      sections: ["3.1 Origin of Life: Chemical Evolution (Oparin-Haldane) and Miller-Urey Experiment", "3.2 Evolution of Life Forms - A Theory: Darwinian Fitness", "3.3 What are the Evidences for Evolution? Palaeontological, Comparative Anatomy (Homologous vs Analogous Organs, Divergent vs Convergent Evolution), Embryological, Biochemical", "3.4 Natural Selection: Industrial Melanism (Biston betularia), Antibiotic Resistance in Bacteria", "3.5 Adaptive Radiation: Darwin's Finches, Australian Marsupials", "3.6 Biological Evolution: Lamarckism, Darwinism, Mutation Theory of Hugo de Vries (Saltation)", "3.7 Hardy-Weinberg Principle and Factors Affecting Genetic Equilibrium (Gene Flow, Genetic Drift, Mutation, Genetic Recombination, Natural Selection types: Stabilising, Directional, Disruptive)", "3.8 A Brief Account of Evolution: Geological Time Scale & Origin of Vertebrates/Plants", "3.9 Origin and Evolution of Man: Dryopithecus, Ramapithecus, Australopithecines, Homo habilis, Homo erectus, Neanderthal Man, Homo sapiens"]
    },
    {
      chapterNumber: 13,
      name: "Human Health and Disease",
      unit: "Unit III: Biology in Human Welfare",
      ncertClass: "Class 12",
      weightage: "Very High",
      typicalQuestions: "4-5 Questions",
      pageRange: "pp. 81-112",
      sections: ["4.1 Common Infectious Diseases in Humans: Bacterial (Typhoid, Pneumonia), Viral (Common Cold), Protozoan (Malaria, Amoebiasis), Helminthic (Ascariasis, Filariasis), Fungal (Ringworms)", "4.2 Immunity: Innate Immunity (Physical, Physiological, Cellular, Cytokine Barriers)", "4.3 Acquired Immunity: Humoral (B-cells) vs Cell-Mediated (T-cells, Graft Rejection), Structure of Antibody (H2L2)", "4.4 Active and Passive Immunity (Colostrum IgA, Antivenom)", "4.5 Vaccination and Immunisation", "4.6 Allergies and Autoimmunity (Rheumatoid Arthritis)", "4.7 Immune System in the Body: Primary (Bone Marrow, Thymus) and Secondary (Spleen, Lymph Nodes, MALT) Lymphoid Organs", "4.8 AIDS: HIV Structure, Life Cycle & Replication in Macrophages and CD4+ T-cells, Transmission, Prevention, ELISA Test", "4.9 Cancer: Benign vs Malignant Tumours, Metastasis, Causes (Carcinogens, Oncogenes), Detection and Treatment (Surgery, Radiotherapy, Chemotherapy, alpha-Interferon)", "4.10 Drugs and Alcohol Abuse: Opioids (Heroin/Morphine), Cannabinoids, Coca Alkaloids (Cocaine), Hallucinogens (Datura, Belladonna), Tobacco & Nicotine, Addiction, Dependence and Cirrhosis"]
    }
  ]
};
