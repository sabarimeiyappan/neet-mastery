import { PYQPaper, PYQQuestion } from './types';

// ========================================================
// NEET PAST YEARS (2015 - 2023) - COMPREHENSIVE CHAPTER-WISE & FULL PAPERS
// ========================================================

export const PAST_YEARS_QUESTIONS: PYQQuestion[] = [
  // --- NEET 2023 ---
  {
    question_number: 1,
    pyq_year: "NEET 2023",
    raw_year: 2023,
    subject: "Botany",
    chapter: "Cell: The Unit of Life",
    question: "Movement and accumulation of ions across a cell membrane against their concentration gradient can be explained by:",
    options: {
      A: "Active Transport",
      B: "Facilitated Diffusion",
      C: "Passive Transport",
      D: "Osmosis"
    },
    correct_answer: "A",
    explanation: "Active transport uses energy (ATP) to pump molecules against a concentration gradient ('uphill' transport) across a selective biological membrane.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Cell: The Unit of Life",
      official_section: "Section 8.5: Plasma Membrane & Membrane Transport",
      page_number: "Page 132",
      exact_quote: "A few ions or molecules are transported across the membrane against their concentration gradient... Such a transport is an energy dependent process (active transport)."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 2,
    pyq_year: "NEET 2023",
    raw_year: 2023,
    subject: "Botany",
    chapter: "Cell Cycle and Cell Division",
    question: "Which of the following stages of meiosis involves division of centromere?",
    options: {
      A: "Anaphase II",
      B: "Anaphase I",
      C: "Metaphase I",
      D: "Telophase II"
    },
    correct_answer: "A",
    explanation: "During Anaphase I, homologous chromosomes separate while sister chromatids remain associated at their centromeres. In Anaphase II, simultaneous splitting of centromeres allows sister chromatids to move to opposite poles.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Cell Cycle and Cell Division",
      official_section: "Section 10.4.2: Meiosis II (Anaphase II)",
      page_number: "Page 169",
      exact_quote: "Anaphase II begins with the simultaneous splitting of the centromere of each chromosome."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 3,
    pyq_year: "NEET 2023",
    raw_year: 2023,
    subject: "Physics",
    chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    question: "A full wave rectifier circuit consists of two p-n junction diodes, a centre-tapped transformer, and a load resistor. If the input AC frequency is 50 Hz, what is the output ripple frequency?",
    options: {
      A: "100 Hz",
      B: "50 Hz",
      C: "25 Hz",
      D: "200 Hz"
    },
    correct_answer: "A",
    explanation: "In a full wave rectifier, both halves of the AC input cycle are rectified in the same direction. Therefore, output ripple frequency is twice the input AC frequency (2 * 50 Hz = 100 Hz).",
    ncert_reference: {
      class: "Class 12",
      chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      official_section: "Section 14.5: Application of Junction Diode as a Rectifier",
      page_number: "Page 483",
      exact_quote: "In a full wave rectifier, the output frequency is double the input mains AC frequency."
    },
    question_type: "Numerical/Conceptual"
  },
  {
    question_number: 4,
    pyq_year: "NEET 2023",
    raw_year: 2023,
    subject: "Botany",
    chapter: "Biotechnology and Its Applications",
    question: "Which of the following statement is NOT correct regarding RNA interference (RNAi)?",
    options: {
      A: "It takes place in all prokaryotic organisms as a method of cellular defense",
      B: "It is a method of cellular defense in all eukaryotic organisms",
      C: "It involves silencing of a specific mRNA due to a complementary dsRNA molecule",
      D: "Meloidegyne incognita infects the roots of tobacco plants and was controlled by this method"
    },
    correct_answer: "A",
    explanation: "RNAi takes place in all EUKARYOTIC organisms as a method of cellular defense, NOT prokaryotic organisms. Option A is factually incorrect.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Biotechnology and Its Applications",
      official_section: "Section 12.1.1: Pest Resistant Plants",
      page_number: "Page 209",
      exact_quote: "RNAi takes place in all eukaryotic organisms as a method of cellular defense."
    },
    question_type: "Direct Fact"
  },

  // --- NEET 2022 ---
  {
    question_number: 5,
    pyq_year: "NEET 2022",
    raw_year: 2022,
    subject: "Botany",
    chapter: "Strategies for Enhancement in Food Production",
    question: "Which of the following is NOT an objective of Biofortification in crops?",
    options: {
      A: "Improve resistance to plant diseases",
      B: "Improve protein content and quality",
      C: "Improve oil content and quality",
      D: "Improve vitamin content"
    },
    correct_answer: "A",
    explanation: "Biofortification aims at breeding crops with higher levels of vitamins, minerals, protein, and healthier fats to improve public health. Disease resistance is a crop protection objective, not biofortification.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Strategies for Enhancement in Food Production",
      official_section: "Section 9.3: Biofortification",
      page_number: "Page 176",
      exact_quote: "Breeding crops with higher levels of vitamins and minerals, or higher protein and healthier fats is called biofortification."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 6,
    pyq_year: "NEET 2022",
    raw_year: 2022,
    subject: "Zoology",
    chapter: "Organisms and Populations",
    question: "If a geneticist uses the term 'Gause's Competitive Exclusion Principle', it states that:",
    options: {
      A: "Two closely related species competing for the same limiting resources cannot co-exist indefinitely and the competitively inferior one will be eliminated eventually",
      B: "Larger organisms always exclude smaller organisms",
      C: "More abundant species always drive rare species to extinction regardless of resources",
      D: "Carnivores always exclude herbivores"
    },
    correct_answer: "A",
    explanation: "Gause's Principle states that two closely related species competing for the same limiting resources cannot coexist indefinitely; the competitively inferior one will be eliminated eventually.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Organisms and Populations",
      official_section: "Section 13.2.4: Competition",
      page_number: "Page 235",
      exact_quote: "Gause's 'Competitive Exclusion Principle' states that two closely related species competing for the same resources cannot co-exist indefinitely."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 7,
    pyq_year: "NEET 2022",
    raw_year: 2022,
    subject: "Physics",
    chapter: "Electromagnetic Waves",
    question: "In an electromagnetic wave in free space, the root mean square value of the electric field is Erms = 6 V/m. The peak value of the magnetic field B0 is:",
    options: {
      A: "2.83 * 10^-8 T",
      B: "1.41 * 10^-8 T",
      C: "4.23 * 10^-8 T",
      D: "0.71 * 10^-8 T"
    },
    correct_answer: "A",
    explanation: "Peak electric field E0 = sqrt(2) * Erms = 1.414 * 6 = 8.485 V/m. Speed of light c = E0 / B0, so B0 = E0 / c = 8.485 / (3 * 10^8) ≈ 2.83 * 10^-8 T.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Electromagnetic Waves",
      official_section: "Section 8.2: Electromagnetic Waves",
      page_number: "Page 277",
      exact_quote: "The amplitudes of electric and magnetic fields in free space are related by c = E0 / B0."
    },
    question_type: "Numerical/Conceptual"
  },
  {
    question_number: 8,
    pyq_year: "NEET 2022",
    raw_year: 2022,
    subject: "Chemistry",
    chapter: "Alcohols, Phenols and Ethers",
    question: "Given below are two statements:\nStatement I: The acidic strength of monosubstituted nitrophenols is in the order: o-nitrophenol > m-nitrophenol > p-nitrophenol.\nStatement II: Intermolecular hydrogen bonding in p-nitrophenol increases its boiling point compared to o-nitrophenol.\nChoose the correct option:",
    options: {
      A: "Statement I is incorrect but Statement II is correct",
      B: "Both Statement I and Statement II are correct",
      C: "Statement I is correct but Statement II is incorrect",
      D: "Both Statement I and Statement II are incorrect"
    },
    correct_answer: "A",
    explanation: "Acidic strength order is p-nitrophenol > o-nitrophenol > m-nitrophenol (Statement I is false). p-Nitrophenol forms intermolecular hydrogen bonds resulting in higher boiling point than intramolecularly bonded o-nitrophenol (Statement II is true).",
    ncert_reference: {
      class: "Class 12",
      chapter: "Alcohols, Phenols and Ethers",
      official_section: "Section 11.4: Reactions of Phenols (Acidity)",
      page_number: "Page 340",
      exact_quote: "p-Nitrophenol is more acidic than o-nitrophenol. o-Nitrophenol is steam volatile due to intramolecular hydrogen bonding while p-nitrophenol is less volatile."
    },
    question_type: "Statement I & II"
  },

  // --- NEET 2021 ---
  {
    question_number: 9,
    pyq_year: "NEET 2021",
    raw_year: 2021,
    subject: "Botany",
    chapter: "Molecular Basis of Inheritance",
    question: "Which of the following RNAs is NOT required for the synthesis of protein in a cell?",
    options: {
      A: "siRNA",
      B: "mRNA",
      C: "tRNA",
      D: "rRNA"
    },
    correct_answer: "A",
    explanation: "Protein synthesis strictly requires mRNA (template), tRNA (amino acid adapter), and rRNA (ribosomal catalytic peptidyl transferase). siRNA is involved in RNA interference, not standard translation.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Molecular Basis of Inheritance",
      official_section: "Section 6.5: Translation",
      page_number: "Page 114",
      exact_quote: "All three RNAs (mRNA, tRNA, rRNA) are needed to synthesise a protein in a cell."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 10,
    pyq_year: "NEET 2021",
    raw_year: 2021,
    subject: "Zoology",
    chapter: "Chemical Coordination and Integration",
    question: "Erythropoietin hormone which stimulates RBC formation is produced by which cells in human body?",
    options: {
      A: "Juxtaglomerular cells of the kidney",
      B: "Alpha cells of pancreas",
      C: "Hepatic Kupffer cells",
      D: "Medulla of adrenal gland"
    },
    correct_answer: "A",
    explanation: "The juxtaglomerular cells of kidney produce a peptide hormone called erythropoietin which stimulates erythropoiesis (formation of RBCs).",
    ncert_reference: {
      class: "Class 11",
      chapter: "Chemical Coordination and Integration",
      official_section: "Section 22.3: Hormones of Heart, Kidney and Gastrointestinal Tract",
      page_number: "Page 339",
      exact_quote: "The juxtaglomerular cells of kidney produce a peptide hormone called erythropoietin which stimulates erythropoiesis."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 11,
    pyq_year: "NEET 2021",
    raw_year: 2021,
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    question: "A dipole of dipole moment p is placed in a uniform electric field E. The torque acting on the dipole is:",
    options: {
      A: "τ = p x E",
      B: "τ = p . E",
      C: "τ = p + E",
      D: "τ = E x p"
    },
    correct_answer: "A",
    explanation: "Torque on an electric dipole in an external uniform electric field is τ = p x E (magnitude τ = p E sin θ).",
    ncert_reference: {
      class: "Class 12",
      chapter: "Electric Charges and Fields",
      official_section: "Section 1.10: Dipole in a Uniform External Field",
      page_number: "Page 31",
      exact_quote: "The torque is given by the vector cross product: τ = p x E."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 12,
    pyq_year: "NEET 2021",
    raw_year: 2021,
    subject: "Chemistry",
    chapter: "The p-Block Elements",
    question: "Noble gases are named because of their inertness towards reactivity. Identify an incorrect statement about them:",
    options: {
      A: "Noble gases have very low melting and boiling points",
      B: "Noble gases have very high positive values of electron gain enthalpy",
      C: "Noble gases have very high melting and boiling points",
      D: "All noble gases except helium have ns2 np6 electronic configuration"
    },
    correct_answer: "C",
    explanation: "Noble gases have very low melting and boiling points because the only interatomic forces in them are weak dispersion (London) forces.",
    ncert_reference: {
      class: "Class 12",
      chapter: "The p-Block Elements",
      official_section: "Section 7.18: Group 18 Elements",
      page_number: "Page 205",
      exact_quote: "Noble gases have very low melting and boiling points because only weak dispersion forces exist between their atoms."
    },
    question_type: "Direct Fact"
  },

  // --- NEET 2020 ---
  {
    question_number: 13,
    pyq_year: "NEET 2020",
    raw_year: 2020,
    subject: "Botany",
    chapter: "Plant Kingdom",
    question: "Floridean starch has structural resemblance to:",
    options: {
      A: "Amylopectin and Glycogen",
      B: "Mannitol and Laminarin",
      C: "Cellulose and Algin",
      D: "Inulin and Chitin"
    },
    correct_answer: "A",
    explanation: "In Rhodophyceae (red algae), food is stored as floridean starch which is very similar to amylopectin and glycogen in structure.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Plant Kingdom",
      official_section: "Section 3.1.3: Rhodophyceae (Red Algae)",
      page_number: "Page 34",
      exact_quote: "The food is stored as floridean starch which is very similar to amylopectin and glycogen in structure."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 14,
    pyq_year: "NEET 2020",
    raw_year: 2020,
    subject: "Zoology",
    chapter: "Evolution",
    question: "Which of the following is the correct sequence of events in origin of life proposed by Oparin and Haldane?",
    options: {
      A: "Synthesis of inorganic compounds -> Organic monomers -> Organic polymers -> Coacervates",
      B: "Coacervates -> Organic monomers -> Organic polymers",
      C: "Organic polymers -> Inorganic compounds -> DNA",
      D: "Cellular life -> Organic monomers -> Atmosphere"
    },
    correct_answer: "A",
    explanation: "Chemical evolution proceeded from inorganic precursors -> simple organic compounds (monomers like amino acids/sugars) -> complex organic polymers -> pre-cellular coacervates/protobionts.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Evolution",
      official_section: "Section 7.1: Origin of Life",
      page_number: "Page 127",
      exact_quote: "Oparin of Russia and Haldane of England proposed that the first form of life could have come from pre-existing non-living organic molecules."
    },
    question_type: "Conceptual"
  },
  {
    question_number: 15,
    pyq_year: "NEET 2020",
    raw_year: 2020,
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    question: "A spherical conductor of radius 10 cm has a charge of 3.2 x 10^-7 C distributed uniformly. What is the magnitude of electric field at a point 15 cm from the centre of the sphere?",
    options: {
      A: "1.28 * 10^5 N/C",
      B: "1.28 * 10^6 N/C",
      C: "1.28 * 10^4 N/C",
      D: "1.28 * 10^7 N/C"
    },
    correct_answer: "A",
    explanation: "For r > R: E = k * q / r^2 = (9 * 10^9 * 3.2 * 10^-7) / (0.15)^2 = 2880 / 0.0225 = 1.28 * 10^5 N/C.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Electric Charges and Fields",
      official_section: "Section 1.15: Field due to a Uniformly Charged Thin Spherical Shell",
      page_number: "Page 39",
      exact_quote: "For points outside the shell, the field is E = q / (4πε0 r^2)."
    },
    question_type: "Numerical/Conceptual"
  },
  {
    question_number: 16,
    pyq_year: "NEET 2020",
    raw_year: 2020,
    subject: "Chemistry",
    chapter: "Amines",
    question: "Which of the following amine will give the carbylamine test with chloroform and ethanolic KOH?",
    options: {
      A: "Aniline (Primary amine)",
      B: "N-Methylaniline (Secondary amine)",
      C: "N,N-Dimethylaniline (Tertiary amine)",
      D: "Diethylamine (Secondary amine)"
    },
    correct_answer: "A",
    explanation: "The carbylamine test (isocyanide test) is given ONLY by primary aliphatic and aromatic amines. Aniline is a primary aromatic amine and yields foul-smelling phenyl isocyanide.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Amines",
      official_section: "Section 13.6: Chemical Reactions of Amines (Carbylamine reaction)",
      page_number: "Page 396",
      exact_quote: "Aliphatic and aromatic primary amines on heating with chloroform and ethanolic potassium hydroxide form isocyanides or carbylamines."
    },
    question_type: "Direct Fact"
  },

  // --- NEET 2019 ---
  {
    question_number: 17,
    pyq_year: "NEET 2019",
    raw_year: 2019,
    subject: "Botany",
    chapter: "Molecular Basis of Inheritance",
    question: "Match the following genes of the Lac operon with their respective products:\n(a) i gene -> (i) beta-galactosidase\n(b) z gene -> (ii) Permease\n(c) a gene -> (iii) Repressor\n(d) y gene -> (iv) Transacetylase\nSelect the correct option:",
    options: {
      A: "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      B: "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
      C: "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
      D: "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
    },
    correct_answer: "A",
    explanation: "The 'i' gene codes for repressor (iii); 'z' codes for beta-galactosidase (i); 'a' codes for transacetylase (iv); 'y' codes for permease (ii).",
    ncert_reference: {
      class: "Class 12",
      chapter: "Molecular Basis of Inheritance",
      official_section: "Section 6.8: The Lac Operon",
      page_number: "Page 116",
      exact_quote: "The lac operon consists of one regulatory gene (the i gene) and three structural genes (z, y, and a)."
    },
    question_type: "Match the Column"
  },
  {
    question_number: 18,
    pyq_year: "NEET 2019",
    raw_year: 2019,
    subject: "Zoology",
    chapter: "Breathing and Exchange of Gases",
    question: "Tidal Volume and Expiratory Reserve Volume of an athlete are 500 mL and 1000 mL respectively. What will be his Expiratory Capacity if the residual volume is 1200 mL?",
    options: {
      A: "1500 mL",
      B: "1700 mL",
      C: "2200 mL",
      D: "2700 mL"
    },
    correct_answer: "A",
    explanation: "Expiratory Capacity (EC) = Tidal Volume (TV) + Expiratory Reserve Volume (ERV) = 500 mL + 1000 mL = 1500 mL.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Breathing and Exchange of Gases",
      official_section: "Section 17.2: Respiratory Volumes and Capacities",
      page_number: "Page 272",
      exact_quote: "Expiratory Capacity (EC): Total volume of air a person can expire after a normal inspiration (TV + ERV)."
    },
    question_type: "Numerical/Conceptual"
  },

  // --- NEET 2018 ---
  {
    question_number: 19,
    pyq_year: "NEET 2018",
    raw_year: 2018,
    subject: "Botany",
    chapter: "Environmental Issues",
    question: "Which of the following pairs of gases are mainly responsible for green house effect?",
    options: {
      A: "Carbon dioxide and Methane",
      B: "Ozone and Ammonia",
      C: "Oxygen and Nitrogen",
      D: "Nitrogen and Sulphur dioxide"
    },
    correct_answer: "A",
    explanation: "Relative contribution of various greenhouse gases: Carbon dioxide (CO2 = 60%) and Methane (CH4 = 20%).",
    ncert_reference: {
      class: "Class 12",
      chapter: "Environmental Issues",
      official_section: "Section 16.4: Greenhouse Effect and Global Warming",
      page_number: "Page 281",
      exact_quote: "Carbon dioxide (60%) and methane (20%) are commonly known as greenhouse gases."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 20,
    pyq_year: "NEET 2018",
    raw_year: 2018,
    subject: "Physics",
    chapter: "Kinetic Theory",
    question: "At what temperature does the rms speed of a gas molecule become double its value at 27 °C?",
    options: {
      A: "927 °C (1200 K)",
      B: "54 °C",
      C: "327 °C",
      D: "108 °C"
    },
    correct_answer: "A",
    explanation: "v_rms ∝ sqrt(T). Initial T1 = 27 + 273 = 300 K. For v2 = 2 * v1: T2 / T1 = (v2 / v1)^2 = 4 => T2 = 4 * 300 = 1200 K = 927 °C.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Kinetic Theory",
      official_section: "Section 13.4: Kinetic Interpretation of Temperature",
      page_number: "Page 328",
      exact_quote: "Root mean square speed of molecules is directly proportional to square root of absolute temperature (vrms ∝ √T)."
    },
    question_type: "Numerical/Conceptual"
  },

  // --- NEET 2017 ---
  {
    question_number: 21,
    pyq_year: "NEET 2017",
    raw_year: 2017,
    subject: "Botany",
    chapter: "Biotechnology: Principles and Processes",
    question: "The DNA fragments separated on an agarose gel can be visualised only after staining with which dye followed by exposure to UV radiation?",
    options: {
      A: "Ethidium bromide",
      B: "Bromophenol blue",
      C: "Acetocarmine",
      D: "Aniline blue"
    },
    correct_answer: "A",
    explanation: "The separated DNA fragments can be visualised only after staining the DNA with a compound known as ethidium bromide followed by exposure to UV radiation (bright orange bands).",
    ncert_reference: {
      class: "Class 12",
      chapter: "Biotechnology: Principles and Processes",
      official_section: "Section 11.2: Separation and Isolation of DNA Fragments",
      page_number: "Page 198",
      exact_quote: "The separated DNA fragments can be visualised only after staining the DNA with a compound known as ethidium bromide followed by exposure to UV radiation."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 22,
    pyq_year: "NEET 2017",
    raw_year: 2017,
    subject: "Zoology",
    chapter: "The Living World",
    question: "Which of the following represents order of 'Horse' in biological taxonomy?",
    options: {
      A: "Perissodactyla",
      B: "Equidae",
      C: "Caballus",
      D: "Mammalia"
    },
    correct_answer: "A",
    explanation: "For Horse (Equus caballus): Genus is Equus; Family is Equidae; Order is Perissodactyla; Class is Mammalia; Phylum is Chordata.",
    ncert_reference: {
      class: "Class 11",
      chapter: "The Living World",
      official_section: "Section 1.3: Taxonomic Categories (Table 1.1)",
      page_number: "Page 11",
      exact_quote: "Table 1.1: Organisms with their Taxonomic Categories: Horse belongs to Order Perissodactyla."
    },
    question_type: "Direct Fact"
  },

  // --- NEET 2016 ---
  {
    question_number: 23,
    pyq_year: "NEET 2016",
    raw_year: 2016,
    subject: "Chemistry",
    chapter: "Equilibrium",
    question: "Which of the following is the most suitable indicator for titrating dilute HCl against dilute NaOH?",
    options: {
      A: "Phenolphthalein or Methyl orange",
      B: "Methyl red only",
      C: "Litmus only",
      D: "Thymol blue"
    },
    correct_answer: "A",
    explanation: "For strong acid vs strong base titration, the pH jump at the equivalence point is broad (pH 3.5 to 10), so both phenolphthalein and methyl orange are suitable indicators.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Equilibrium",
      official_section: "Section 7.12: Acid-Base Titration Indicators",
      page_number: "Page 224",
      exact_quote: "In strong acid and strong base titration, both phenolphthalein and methyl orange act as suitable indicators."
    },
    question_type: "Conceptual"
  },
  {
    question_number: 24,
    pyq_year: "NEET 2016",
    raw_year: 2016,
    subject: "Botany",
    chapter: "Environmental Issues",
    question: "A river with an inflow of domestic sewage rich in organic waste, may result in:",
    options: {
      A: "Death of fishes due to lack of oxygen",
      B: "Drying of the river very soon due to algal bloom",
      C: "Increased population of aquatic food web organisms",
      D: "An increased production of fish due to biodegradable nutrients"
    },
    correct_answer: "A",
    explanation: "Microorganisms consuming organic matter consume large amounts of dissolved oxygen (high BOD), leading to sharp decline in dissolved oxygen and mortality of fish.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Environmental Issues",
      official_section: "Section 16.2: Water Pollution (BOD)",
      page_number: "Page 275",
      exact_quote: "This causes a sharp decline in dissolved oxygen downstream... This causes mortality of fish and other aquatic creatures."
    },
    question_type: "Direct Fact"
  },

  // --- NEET 2015 ---
  {
    question_number: 25,
    pyq_year: "NEET 2015",
    raw_year: 2015,
    subject: "Botany",
    chapter: "Transport in Plants",
    question: "Transpiration and root pressure cause water to rise in plants by:",
    options: {
      A: "Pulling and pushing it, respectively",
      B: "Pushing it upward together",
      C: "Pulling it upward together",
      D: "Pushing and pulling it, respectively"
    },
    correct_answer: "A",
    explanation: "Root pressure is a positive hydrostatic pressure developed in roots that pushes water up. Transpiration pull is a negative tension developed in xylem that pulls water up. Hence pulling and pushing respectively.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Transport in Plants",
      official_section: "Section 11.4: Long Distance Transport of Water",
      page_number: "Page 186",
      exact_quote: "Root pressure can only provide a modest push... Most researchers agree that water is mainly pulled through the plant by transpiration."
    },
    question_type: "Conceptual"
  },
  {
    question_number: 26,
    pyq_year: "NEET 2015",
    raw_year: 2015,
    subject: "Zoology",
    chapter: "Excretory Products and Their Elimination",
    question: "Which of the following structures is NOT a part of nephron?",
    options: {
      A: "Collecting duct",
      B: "Bowman's capsule",
      C: "Glomerulus",
      D: "Loop of Henle"
    },
    correct_answer: "A",
    explanation: "Each nephron consists of two parts: the glomerulus and the renal tubule (Bowman's capsule, PCT, Henle's loop, DCT). Multiple nephrons empty into a single collecting duct, so collecting duct is not strictly part of a single nephron.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Excretory Products and Their Elimination",
      official_section: "Section 19.2: Human Excretory System",
      page_number: "Page 292",
      exact_quote: "The collecting duct extends from the cortex of the kidney to the inner parts of the medulla. It is not considered an anatomical part of the nephron unit itself."
    },
    question_type: "Direct Fact"
  },
  // Additional Authentic High-Yield Past NEET Questions
  {
    question_number: 27,
    pyq_year: "NEET 2023",
    raw_year: 2023,
    subject: "Physics",
    chapter: "Current Electricity",
    question: "The resistance of a platinum wire is 2.0 Ω at 0°C and 2.5 Ω at 100°C. The temperature coefficient of resistance of the platinum wire is:",
    options: {
      A: "2.5 * 10^-3 °C^-1",
      B: "5.0 * 10^-3 °C^-1",
      C: "1.25 * 10^-3 °C^-1",
      D: "0.25 * 10^-3 °C^-1"
    },
    correct_answer: "A",
    explanation: "Rt = R0(1 + α ΔT) => α = (Rt - R0) / (R0 * ΔT) = (2.5 - 2.0) / (2.0 * 100) = 0.5 / 200 = 2.5 * 10^-3 °C^-1.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Current Electricity",
      official_section: "Section 3.7: Temperature Dependence of Resistivity",
      page_number: "Page 105",
      exact_quote: "The temperature coefficient of resistivity is α = (R - R0) / (R0 ΔT)."
    },
    question_type: "Numerical/Conceptual"
  },
  {
    question_number: 28,
    pyq_year: "NEET 2023",
    raw_year: 2023,
    subject: "Chemistry",
    chapter: "Solutions",
    question: "Which of the following aqueous solutions will have the highest boiling point elevation?",
    options: {
      A: "1.0 M Al2(SO4)3",
      B: "1.0 M BaCl2",
      C: "1.0 M NaCl",
      D: "1.0 M Glucose"
    },
    correct_answer: "A",
    explanation: "ΔTb = i * Kb * m. For Al2(SO4)3, van 't Hoff factor i = 2 + 3 = 5 (highest among all options). Hence it has the highest elevation in boiling point.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Solutions",
      official_section: "Section 2.7: Abnormal Molar Masses",
      page_number: "Page 55",
      exact_quote: "The van 't Hoff factor i accounts for extent of dissociation; colligative property is proportional to i."
    },
    question_type: "Conceptual"
  },
  {
    question_number: 29,
    pyq_year: "NEET 2022",
    raw_year: 2022,
    subject: "Botany",
    chapter: "Principles of Inheritance and Variation",
    question: "X-linked recessive disorders in humans are much more common in males than in females because:",
    options: {
      A: "Males are hemizygous and have only one X chromosome",
      B: "Y chromosome carries a repressor gene",
      C: "Males have two Y chromosomes",
      D: "Females inactivate both X chromosomes"
    },
    correct_answer: "A",
    explanation: "Males have XY sex chromosomes (hemizygous). A single recessive defective allele on the X chromosome is expressed in males as there is no corresponding allele on the Y chromosome.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Principles of Inheritance and Variation",
      official_section: "Section 5.8: Sex Determination and Mendelian Disorders",
      page_number: "Page 87",
      exact_quote: "Since males have only one X chromosome, they show sex-linked disorders if they inherit the defective gene."
    },
    question_type: "Conceptual"
  },
  {
    question_number: 30,
    pyq_year: "NEET 2022",
    raw_year: 2022,
    subject: "Zoology",
    chapter: "Human Reproduction",
    question: "The part of human sperm that contains genetic chromosomal material and is capped by acrosome is the:",
    options: {
      A: "Head",
      B: "Middle piece",
      C: "Tail",
      D: "Neck"
    },
    correct_answer: "A",
    explanation: "The sperm head contains an elongated haploid nucleus, the anterior portion of which is covered by a cap-like structure, acrosome.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Human Reproduction",
      official_section: "Section 3.2: Gametogenesis (Spermatogenesis)",
      page_number: "Page 48",
      exact_quote: "The sperm head contains an elongated haploid nucleus, the anterior portion of which is covered by a cap-like structure, acrosome."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 31,
    pyq_year: "NEET 2022",
    raw_year: 2022,
    subject: "Physics",
    chapter: "Ray Optics and Optical Instruments",
    question: "A ray of light travels from glass (refractive index 1.5) to air. The critical angle for total internal reflection is:",
    options: {
      A: "sin^-1(2/3)",
      B: "sin^-1(3/2)",
      C: "sin^-1(1/3)",
      D: "45°"
    },
    correct_answer: "A",
    explanation: "sin(ic) = 1 / μ = 1 / 1.5 = 1 / (3/2) = 2/3. Therefore, ic = sin^-1(2/3) ≈ 41.8°.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Ray Optics and Optical Instruments",
      official_section: "Section 9.4: Total Internal Reflection",
      page_number: "Page 320",
      exact_quote: "sin ic = 1 / n; for glass with n = 1.5, ic = sin^-1(2/3)."
    },
    question_type: "Numerical/Conceptual"
  },
  {
    question_number: 32,
    pyq_year: "NEET 2021",
    raw_year: 2021,
    subject: "Chemistry",
    chapter: "Chemical Bonding and Molecular Structure",
    question: "Which of the following diatomic species contains only pi (π) bonds according to Molecular Orbital Theory?",
    options: {
      A: "C2",
      B: "N2",
      C: "O2",
      D: "Be2"
    },
    correct_answer: "A",
    explanation: "For C2 (12 electrons): σ1s2 σ*1s2 σ2s2 σ*2s2 π2px2 = π2py2. All 4 bonding electrons in the HOMO are in π molecular orbitals, so the double bond consists entirely of two π bonds.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Chemical Bonding and Molecular Structure",
      official_section: "Section 4.7: Molecular Orbital Theory",
      page_number: "Page 130",
      exact_quote: "In C2 molecule both the bonds are pi bonds because four electrons are present in two pi molecular orbitals."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 33,
    pyq_year: "NEET 2021",
    raw_year: 2021,
    subject: "Botany",
    chapter: "Cell: The Unit of Life",
    question: "The fluid mosaic model of cell membrane proposed by Singer and Nicolson (1972) describes the membrane as:",
    options: {
      A: "Quasi-fluid structure where proteins are embedded in a phospholipid bilayer",
      B: "Solid protein framework with lipid islands",
      C: "Lipid monolayer with external carbohydrates",
      D: "Static protein-lipid sandwich"
    },
    correct_answer: "A",
    explanation: "According to fluid mosaic model, the quasi-fluid nature of lipid enables lateral movement of proteins within the overall bilayer.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Cell: The Unit of Life",
      official_section: "Section 8.5.1: Fluid Mosaic Model",
      page_number: "Page 131",
      exact_quote: "According to this, the quasi-fluid nature of lipid enables lateral movement of proteins within the overall bilayer."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 34,
    pyq_year: "NEET 2021",
    raw_year: 2021,
    subject: "Zoology",
    chapter: "Biomolecules",
    question: "A competitive inhibitor of an enzyme:",
    options: {
      A: "Increases apparent Km without changing Vmax",
      B: "Decreases Vmax without changing Km",
      C: "Decreases both Km and Vmax",
      D: "Destroys the enzyme permanently"
    },
    correct_answer: "A",
    explanation: "Competitive inhibitors compete with the substrate for the active site. Increasing substrate concentration overcomes inhibition (Vmax unchanged), but higher substrate is needed for half Vmax (Km increases).",
    ncert_reference: {
      class: "Class 11",
      chapter: "Biomolecules",
      official_section: "Section 9.12.5: Factors Affecting Enzyme Activity (Inhibition)",
      page_number: "Page 158",
      exact_quote: "In competitive inhibition, the inhibitor competes with substrate; apparent Km increases while Vmax remains unchanged."
    },
    question_type: "Conceptual"
  },
  {
    question_number: 35,
    pyq_year: "NEET 2020",
    raw_year: 2020,
    subject: "Physics",
    chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    question: "For a common-emitter transistor amplifier, the audio signal voltage across the collector resistance of 2 kΩ is 2 V. If current gain β = 100 and base resistance is 1 kΩ, the input signal voltage is:",
    options: {
      A: "10 mV",
      B: "1 mV",
      C: "20 mV",
      D: "0.1 V"
    },
    correct_answer: "A",
    explanation: "Voltage gain Av = β * (Rc / Rb) = 100 * (2000 / 1000) = 200. Input voltage Vin = Vout / Av = 2 V / 200 = 0.01 V = 10 mV.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      official_section: "Section 14.8: Transistor as an Amplifier",
      page_number: "Page 492",
      exact_quote: "Voltage gain Av = β (Rc / Rb) and Vout = Av Vin."
    },
    question_type: "Numerical/Conceptual"
  },
  {
    question_number: 36,
    pyq_year: "NEET 2020",
    raw_year: 2020,
    subject: "Chemistry",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    question: "Rosenmund reduction converts an acyl chloride into an aldehyde using:",
    options: {
      A: "H2 in presence of Pd-BaSO4 (poisoned catalyst)",
      B: "SnCl2 + HCl (Stephen reaction)",
      C: "DIBAL-H at room temperature",
      D: "LiAlH4 in ether"
    },
    correct_answer: "A",
    explanation: "Acyl chloride (acid chloride) is hydrogenated over catalyst, palladium on barium sulphate (partially poisoned with quinoline or sulfur), to yield an aldehyde (Rosenmund reduction).",
    ncert_reference: {
      class: "Class 12",
      chapter: "Aldehydes, Ketones and Carboxylic Acids",
      official_section: "Section 12.2.1: Preparation of Aldehydes (Rosenmund Reduction)",
      page_number: "Page 360",
      exact_quote: "Acyl chloride is hydrogenated over catalyst, palladium on barium sulphate. This reaction is called Rosenmund reduction."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 37,
    pyq_year: "NEET 2020",
    raw_year: 2020,
    subject: "Botany",
    chapter: "Plant Kingdom",
    question: "Floridean starch has structural resemblance to:",
    options: {
      A: "Amylopectin and Glycogen",
      B: "Amylose and Cellulose",
      C: "Mannitol and Laminarin",
      D: "Chitin and Peptidoglycan"
    },
    correct_answer: "A",
    explanation: "In red algae (Rhodophyceae), food is stored as floridean starch which is very similar to amylopectin and glycogen in structure.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Plant Kingdom",
      official_section: "Section 3.1.3: Rhodophyceae",
      page_number: "Page 33",
      exact_quote: "The food is stored as floridean starch which is very similar to amylopectin and glycogen in structure."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 38,
    pyq_year: "NEET 2019",
    raw_year: 2019,
    subject: "Zoology",
    chapter: "Locomotion and Movement",
    question: "Which protein masks the active binding sites for myosin on the actin filaments in a resting muscle fiber?",
    options: {
      A: "Tropomyosin and Troponin",
      B: "Meromyosin",
      C: "Actinin",
      D: "Myoglobin"
    },
    correct_answer: "A",
    explanation: "In the resting state, a subunit of troponin masks the active binding sites for myosin on the actin filaments, lying along tropomyosin.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Locomotion and Movement",
      official_section: "Section 20.2: Structure of Contractile Proteins",
      page_number: "Page 306",
      exact_quote: "In the resting state a subunit of troponin masks the active binding sites for myosin on the actin filaments."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 39,
    pyq_year: "NEET 2019",
    raw_year: 2019,
    subject: "Physics",
    chapter: "Thermodynamics",
    question: "First law of thermodynamics (ΔQ = ΔU + ΔW) is a statement of:",
    options: {
      A: "Conservation of energy",
      B: "Conservation of mass",
      C: "Conservation of momentum",
      D: "Conservation of charge"
    },
    correct_answer: "A",
    explanation: "The first law of thermodynamics is simply the general law of conservation of energy applied to any system in which energy transfer from or to surroundings occurs via heat and work.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Thermodynamics",
      official_section: "Section 12.4: First Law of Thermodynamics",
      page_number: "Page 307",
      exact_quote: "The first law of thermodynamics is the general law of conservation of energy applied to any system."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 40,
    pyq_year: "NEET 2019",
    raw_year: 2019,
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    question: "Which of the following ligands is an ambidentate ligand capable of coordinating through two different atoms?",
    options: {
      A: "NO2- (Nitrito-N and Nitrito-O)",
      B: "H2O",
      C: "NH3",
      D: "CO"
    },
    correct_answer: "A",
    explanation: "NO2- can coordinate through nitrogen (-NO2) or oxygen (-ONO). Ligands that can coordinate through either of two different atoms are called ambidentate ligands.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Coordination Compounds",
      official_section: "Section 9.2: Ligands",
      page_number: "Page 245",
      exact_quote: "Ligand which can ligate through two different atoms is called ambidentate ligand. Examples are the NO2- and SCN- ions."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 41,
    pyq_year: "NEET 2018",
    raw_year: 2018,
    subject: "Botany",
    chapter: "Ecosystem",
    question: "Secondary productivity is the rate of formation of new organic matter by:",
    options: {
      A: "Consumers (Herbivores and Carnivores)",
      B: "Producers (Plants)",
      C: "Decomposers only",
      D: "Parasites only"
    },
    correct_answer: "A",
    explanation: "Primary productivity is the rate at which biomass is produced by green plants. Secondary productivity is defined as the rate of formation of new organic matter by consumers.",
    ncert_reference: {
      class: "Class 12",
      chapter: "Ecosystem",
      official_section: "Section 14.2: Productivity",
      page_number: "Page 243",
      exact_quote: "Secondary productivity is defined as the rate of formation of new organic matter by consumers."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 42,
    pyq_year: "NEET 2018",
    raw_year: 2018,
    subject: "Zoology",
    chapter: "Chemical Coordination and Integration",
    question: "Acromegaly in adults is caused by excess secretion of which hormone after adulthood?",
    options: {
      A: "Growth Hormone (GH)",
      B: "Thyroxine (T4)",
      C: "Adrenaline",
      D: "Insulin"
    },
    correct_answer: "A",
    explanation: "Hypersecretion of growth hormone in adults causes severe disfigurement, especially of the face, called Acromegaly.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Chemical Coordination and Integration",
      official_section: "Section 22.2.1: The Pituitary Gland",
      page_number: "Page 333",
      exact_quote: "Excess secretion of growth hormone in adults can lead to severe disfigurement (especially of the face) called Acromegaly."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 43,
    pyq_year: "NEET 2018",
    raw_year: 2018,
    subject: "Physics",
    chapter: "Work, Energy and Power",
    question: "A force F = 20 + 10 y acts on a particle in the y-direction, where F is in Newtons and y in meters. The work done by this force from y = 0 to y = 1 m is:",
    options: {
      A: "25 J",
      B: "30 J",
      C: "20 J",
      D: "5 J"
    },
    correct_answer: "A",
    explanation: "W = ∫ F dy from 0 to 1 = [20 y + 5 y^2] from 0 to 1 = 20(1) + 5(1)^2 = 25 J.",
    ncert_reference: {
      class: "Class 11",
      chapter: "Work, Energy and Power",
      official_section: "Section 5.6: Work Done by a Variable Force",
      page_number: "Page 119",
      exact_quote: "Work done by a variable force is W = ∫ F(x) dx."
    },
    question_type: "Numerical/Conceptual"
  },
  {
    question_number: 44,
    pyq_year: "NEET 2017",
    raw_year: 2017,
    subject: "Chemistry",
    chapter: "The d- and f-Block Elements",
    question: "Which of the following oxidation states is most characteristic and stable for all lanthanoids?",
    options: {
      A: "+3",
      B: "+2",
      C: "+4",
      D: "+5"
    },
    correct_answer: "A",
    explanation: "The principal and most characteristic oxidation state of all lanthanoids is +3 (Ln3+).",
    ncert_reference: {
      class: "Class 12",
      chapter: "The d- and f-Block Elements",
      official_section: "Section 8.5.3: Oxidation States of Lanthanoids",
      page_number: "Page 236",
      exact_quote: "In the lanthanoids, the +3 oxidation state is predominant for all elements."
    },
    question_type: "Direct Fact"
  },
  {
    question_number: 45,
    pyq_year: "NEET 2016",
    raw_year: 2016,
    subject: "Botany",
    chapter: "Morphology of Flowering Plants",
    question: "The standard petal of a papilionaceous corolla (as in pea flower) is also called:",
    options: {
      A: "Vexillum",
      B: "Wings (Alae)",
      C: "Keel (Carina)",
      D: "Corona"
    },
    correct_answer: "A",
    explanation: "In vexillary aestivation (papilionaceous corolla), there are five petals: the largest posterior one is the vexillum (standard), two lateral wings (alae), and two anterior petals forming keel (carina).",
    ncert_reference: {
      class: "Class 11",
      chapter: "Morphology of Flowering Plants",
      official_section: "Section 5.5.3: Aestivation (Vexillary)",
      page_number: "Page 74",
      exact_quote: "The largest petal is the standard (vexillum), overlaps the two lateral petals (wings) which in turn overlap the two smallest anterior petals (keel)."
    },
    question_type: "Direct Fact"
  }
];
