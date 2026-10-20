import { NEETQuizSet } from '../types/neet';

export const CURATED_BOTANY_SET: NEETQuizSet = {
  subject: "Botany",
  topic: "Molecular Basis of Inheritance",
  total_questions: 30,
  questions: [
    {
      question_number: 1,
      question: "In a double-stranded DNA molecule, if the amount of Guanine is 30%, what is the percentage of Thymine present in the molecule according to Chargaff's rules?",
      options: {
        A: "20%",
        B: "30%",
        C: "40%",
        D: "70%"
      },
      correct_answer: "A",
      explanation: "According to Erwin Chargaff's rule, for double-stranded DNA: %A = %T and %G = %C. If G = 30%, then C = 30%, making G + C = 60%. The remaining A + T = 40%, hence T = 40% / 2 = 20%.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 97"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 2,
      question: "What is the pitch of the B-DNA double helix as elucidated by Watson and Crick?",
      options: {
        A: "3.4 nm with roughly 10 base pairs per turn",
        B: "0.34 nm with roughly 10 base pairs per turn",
        C: "34 nm with 20 base pairs per turn",
        D: "2.0 nm with roughly 12 base pairs per turn"
      },
      correct_answer: "A",
      explanation: "NCERT states that the pitch of the DNA helix is 3.4 nm (34 Angstroms) and there are roughly 10 base pairs in each turn, which gives a distance of 0.34 nm between two consecutive base pairs.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 98"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      question: "Which of the following amino acid residues are predominantly present in histone proteins that confer a basic charge?",
      options: {
        A: "Lysine and Arginine",
        B: "Glutamic acid and Aspartic acid",
        C: "Tryptophan and Tyrosine",
        D: "Methionine and Cysteine"
      },
      correct_answer: "A",
      explanation: "Histones are rich in the basic amino acid residues Lysine and Arginine. Both residues carry positive charges in their side chains, which bind strongly to the negatively charged phosphate backbone of DNA.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 99"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      question: "A typical nucleosome in chromatin contains approximately how many base pairs of DNA helix wrapped around the histone octamer?",
      options: {
        A: "200 bp",
        B: "146 bp",
        C: "400 bp",
        D: "60 bp"
      },
      correct_answer: "A",
      explanation: "NCERT specifies that a typical nucleosome contains 200 bp of DNA helix wrapped around the histone octamer like beads on a string.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 99"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      question: "Consider the following statements regarding Euchromatin and Heterochromatin:\nStatement I: Euchromatin is loosely packed and stains light.\nStatement II: Heterochromatin is transcriptionally active.\nChoose the correct option:",
      options: {
        A: "Statement I is correct but Statement II is incorrect",
        B: "Statement I is incorrect but Statement II is correct",
        C: "Both Statement I and Statement II are correct",
        D: "Both Statement I and Statement II are incorrect"
      },
      correct_answer: "A",
      explanation: "NCERT line states: Euchromatin is loosely packed, stains light and is transcriptionally active. Heterochromatin is densely packed, stains dark and is transcriptionally inactive. Hence Statement II is incorrect.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 99"
      },
      question_type: "Statement I & II"
    },
    {
      question_number: 6,
      question: "In the Hershey and Chase experiment (1952), radioactive 35S and 32P were used to label which viral components respectively?",
      options: {
        A: "35S labelled viral protein capsule and 32P labelled viral DNA",
        B: "35S labelled viral DNA and 32P labelled viral protein capsule",
        C: "Both labelled viral RNA",
        D: "35S labelled bacterial cell wall and 32P labelled bacteriophage tail"
      },
      correct_answer: "A",
      explanation: "Proteins contain sulfur but no phosphorus, so radioactive sulfur (35S) labelled the protein coat. DNA contains phosphorus but no sulfur, so radioactive phosphorus (32P) labelled the DNA.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 101"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      question: "Which of the following is the unambiguous reason why RNA is chemically less stable and more reactive than DNA?",
      options: {
        A: "Presence of 2'-OH group at every nucleotide in ribose",
        B: "Presence of Thymine instead of Uracil",
        C: "Double-stranded nature of RNA",
        D: "Absence of phosphodiester bonds in RNA"
      },
      correct_answer: "A",
      explanation: "NCERT states that the 2'-OH group present at every nucleotide in RNA makes RNA labile and easily degradable. Additionally, Uracil is less stable than 5-methyl uracil (Thymine).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 103"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      question: "Meselson and Stahl utilized which heavy isotope and separation technique to prove semi-conservative replication in E. coli?",
      options: {
        A: "15NH4Cl and CsCl density gradient centrifugation",
        B: "14C radioactive isotope and Agarose gel electrophoresis",
        C: "32P radioisotope and Sucrose gradient",
        D: "3H-thymidine and SDS-PAGE"
      },
      correct_answer: "A",
      explanation: "Meselson and Stahl used 15N (a heavy isotope of nitrogen, not radioactive) in 15NH4Cl medium, and separated DNA by Cesium chloride (CsCl) density gradient centrifugation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 104"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      question: "Taylor and colleagues conducted experiments using radioactive thymidine to prove semi-conservative replication in which plant?",
      options: {
        A: "Vicia faba (Faba beans)",
        B: "Pisum sativum (Garden pea)",
        C: "Arabidopsis thaliana",
        D: "Mirabilis jalapa (4 o'clock plant)"
      },
      correct_answer: "A",
      explanation: "Taylor and colleagues in 1958 used radioactive thymidine to detect distribution of newly synthesized DNA in chromosomes of Vicia faba (faba beans), proving semi-conservative replication on chromosomes.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 106"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      question: "During DNA replication in E. coli, the main enzyme DNA-dependent DNA polymerase synthesizes DNA with high fidelity in which direction?",
      options: {
        A: "Only in 5' -> 3' direction",
        B: "Only in 3' -> 5' direction",
        C: "Bidirectionally in both 5' -> 3' and 3' -> 5'",
        D: "Without any polarity constraint"
      },
      correct_answer: "A",
      explanation: "DNA-dependent DNA polymerase catalyzes polymerisation only in one direction, that is, 5' -> 3'. Consequently, one strand (leading) is continuous and the other (lagging) is discontinuous.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 106"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 11,
      question: "Discontinuously synthesized Okazaki fragments during replication are joined together by which enzyme?",
      options: {
        A: "DNA ligase",
        B: "DNA helicase",
        C: "Topoisomerase",
        D: "RNA primase"
      },
      correct_answer: "A",
      explanation: "NCERT states that the discontinuously synthesized fragments on the lagging strand are joined later by the enzyme DNA ligase.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 107"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      question: "In a transcription unit, the promoter is said to be located at which end of the coding strand?",
      options: {
        A: "5'-end (upstream) of the coding strand",
        B: "3'-end (downstream) of the coding strand",
        C: "3'-end of the template strand exclusively",
        D: "Within the structural gene itself"
      },
      correct_answer: "A",
      explanation: "All reference points while defining a transcription unit are made with the coding strand. The promoter is located towards the 5'-end (upstream) of the structural gene (with respect to the coding strand).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 108"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 13,
      question: "If the sequence of the coding strand of DNA is 5'-ATGCATGCATGC-3', what will be the corresponding sequence of transcribed mRNA?",
      options: {
        A: "5'-AUGCAUGCAUGC-3'",
        B: "3'-AUGCAUGCAUGC-5'",
        C: "5'-UACGUACGUACG-3'",
        D: "3'-UACGUACGUACG-5'"
      },
      correct_answer: "A",
      explanation: "The mRNA sequence is identical to the coding strand except that Thymine (T) is replaced by Uracil (U). Polarity remains 5' to 3'. Hence, 5'-AUGCAUGCAUGC-3'.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 108"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 14,
      question: "Which subunit of RNA polymerase in prokaryotes confers specificity for transcription initiation?",
      options: {
        A: "Sigma factor (σ)",
        B: "Rho factor (ρ)",
        C: "Beta prime subunit (β')",
        D: "Alpha subunit (α)"
      },
      correct_answer: "A",
      explanation: "In bacteria, RNA polymerase associates transiently with initiation factor (sigma, σ) to initiate transcription, and with termination factor (rho, ρ) to terminate it.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 109"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      question: "In eukaryotic transcription, RNA Polymerase I is responsible for synthesizing which of the following RNAs?",
      options: {
        A: "28S, 18S, and 5.8S rRNAs",
        B: "Heterogeneous nuclear RNA (hnRNA)",
        C: "tRNA, 5S rRNA and snRNAs",
        D: "Only mRNA"
      },
      correct_answer: "A",
      explanation: "NCERT states: RNA Polymerase I transcribes rRNAs (28S, 18S, and 5.8S). RNA Polymerase II transcribes hnRNA (precursor of mRNA). RNA Polymerase III transcribes tRNA, 5S rRNA, and snRNAs.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 111"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      question: "During post-transcriptional processing of eukaryotic hnRNA, capping involves the addition of which unusual nucleotide at the 5'-end?",
      options: {
        A: "Methyl guanosine triphosphate",
        B: "Adenylate residues (200-300)",
        C: "Poly-U tail",
        D: "Deoxythymidine monophosphate"
      },
      correct_answer: "A",
      explanation: "In capping, an unusual nucleotide (methyl guanosine triphosphate) is added to the 5'-end of hnRNA. In tailing, adenylate residues (200-300) are added at 3'-end in a template-independent manner.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 111"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      question: "Spliceosomes are NOT found in cells of which of the following organisms?",
      options: {
        A: "Nostoc (Cyanobacteria)",
        B: "Saccharomyces cerevisiae (Yeast)",
        C: "Amoeba proteus",
        D: "Pisum sativum"
      },
      correct_answer: "A",
      explanation: "Splicing of introns is a eukaryotic feature. Prokaryotes such as Nostoc do not possess interrupted genes (introns) or spliceosomes.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 111"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 18,
      question: "Which codon serves a dual function in protein synthesis by coding for Methionine and initiating translation?",
      options: {
        A: "AUG",
        B: "UAA",
        C: "UAG",
        D: "UGA"
      },
      correct_answer: "A",
      explanation: "NCERT specifies that AUG has dual functions: it codes for Methionine (Met), and it also acts as an initiator codon.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 112"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      question: "Which codons are known as stop codons (nonsense codons) that do not code for any amino acid?",
      options: {
        A: "UAA, UAG, UGA",
        B: "AUG, GUG, UUG",
        C: "UAU, UAC, UGG",
        D: "AAA, AAG, GAU"
      },
      correct_answer: "A",
      explanation: "Three codons—UAA (ochre), UAG (amber), and UGA (opal)—do not code for any amino acids and function as stop/termination codons.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 112"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      question: "Assertion (A): The genetic code is degenerate.\nReason (R): Most amino acids are coded by more than one codon.\nChoose the correct option:",
      options: {
        A: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        B: "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        C: "(A) is true but (R) is false",
        D: "(A) is false but (R) is true"
      },
      correct_answer: "A",
      explanation: "Degeneracy of the genetic code specifically means that some amino acids are coded by more than one codon (61 codons for 20 standard amino acids). Reason correctly defines and explains Assertion.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 112"
      },
      question_type: "Assertion-Reason"
    },
    {
      question_number: 21,
      question: "tRNA was formerly known as 'soluble RNA (sRNA)'. The actual 3D structure of tRNA molecule resembles which shape?",
      options: {
        A: "Inverted L-shaped",
        B: "Clover-leaf shaped",
        C: "Double-helical cylinder",
        D: "Straight linear rod"
      },
      correct_answer: "A",
      explanation: "The secondary structure of tRNA looks like a clover leaf, but the actual three-dimensional structure looks like an inverted L.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 114"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 22,
      question: "Aminoacylation of tRNA (charging of tRNA) requires which of the following inputs?",
      options: {
        A: "Amino acid, ATP, specific aminoacyl-tRNA synthetase enzyme",
        B: "GTP and Ribosome 50S subunit only",
        C: "RNA polymerase and dNTPs",
        D: "DNA ligase and NAD+"
      },
      correct_answer: "A",
      explanation: "Activation of amino acids involves reaction with ATP in presence of aminoacyl-tRNA synthetase to form aminoacyl-AMP-enzyme complex, which then transfers the amino acid to the 3'-CCA end of cognate tRNA.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 114"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 23,
      question: "Which ribosomal RNA in bacteria acts as a structural RNA as well as a ribozyme (peptidyl transferase) during peptide bond formation?",
      options: {
        A: "23S rRNA",
        B: "16S rRNA",
        C: "5S rRNA",
        D: "18S rRNA"
      },
      correct_answer: "A",
      explanation: "NCERT states that the 23S rRNA in bacteria is the enzyme-ribozyme for the formation of peptide bond (peptidyl transferase).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 115"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 24,
      question: "Untranslated regions (UTRs) in mRNA are present at:",
      options: {
        A: "Both 5'-end (before start codon) and 3'-end (after stop codon)",
        B: "Only at the 5'-end before the start codon",
        C: "Only at the 3'-end after the stop codon",
        D: "Inside the coding sequence between exons"
      },
      correct_answer: "A",
      explanation: "UTRs are additional sequences on mRNA not translated into protein. They are present at both 5'-end (before start codon) and at 3'-end (after stop codon), essential for efficient translation process.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 115"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 25,
      question: "In the Lac Operon model of E. coli elucidated by Francois Jacob and Jacques Monod, the 'i' gene codes for:",
      options: {
        A: "Repressor protein of the lac operon",
        B: "Inducer molecule (Allolactose)",
        C: "Beta-galactosidase enzyme",
        D: "Initiator factor of translation"
      },
      correct_answer: "A",
      explanation: "The 'i' gene does not stand for inducer, but is derived from the word 'inhibitor'. It codes for the repressor protein of the lac operon.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 116"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 26,
      question: "In the Lac Operon, which enzyme is coded by the 'lac a' structural gene?",
      options: {
        A: "Transacetylase",
        B: "Beta-galactosidase",
        C: "Permease",
        D: "RNA polymerase"
      },
      correct_answer: "A",
      explanation: "The three structural genes in the Lac Operon code as follows: 'z' codes for beta-galactosidase; 'y' codes for permease; and 'a' codes for transacetylase.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 116"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 27,
      question: "Under the Human Genome Project (HGP), which chromosome was found to have the highest number of genes (2968 genes)?",
      options: {
        A: "Chromosome 1",
        B: "Chromosome Y",
        C: "Chromosome X",
        D: "Chromosome 21"
      },
      correct_answer: "A",
      explanation: "Chromosome 1 has the most genes (2968), and the Y chromosome has the fewest genes (231 genes). Sequencing of Chromosome 1 was completed in May 2006.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 120"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 28,
      question: "According to HGP data, what percentage of the human genome actually codes for proteins?",
      options: {
        A: "Less than 2 percent",
        B: "Approximately 25 percent",
        C: "50 percent",
        D: "Over 80 percent"
      },
      correct_answer: "A",
      explanation: "Salient feature of human genome: Less than 2 per cent of the genome codes for proteins. Repeated sequences make up a very large portion of the human genome.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 120"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 29,
      question: "In DNA fingerprinting developed by Alec Jeffreys, VNTR belongs to which class of satellite DNA?",
      options: {
        A: "Mini-satellite",
        B: "Micro-satellite",
        C: "Macro-satellite",
        D: "Telomeric repetitive DNA"
      },
      correct_answer: "A",
      explanation: "Variable Number of Tandem Repeats (VNTR) belongs to a class of satellite DNA referred to as mini-satellite. A small DNA sequence is arranged tandemly in many copy numbers.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 121"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 30,
      question: "What is the size range of VNTRs used as radioactive probes in Southern blot hybridization during DNA fingerprinting?",
      options: {
        A: "0.1 to 20 kb",
        B: "100 to 500 kb",
        C: "1 to 2 bp",
        D: "50 to 100 mb"
      },
      correct_answer: "A",
      explanation: "NCERT states: The size of VNTR varies in size from 0.1 to 20 kb. Consequently, after hybridization with VNTR probe, the autoradiogram gives bands of differing sizes unique to an individual.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Molecular Basis of Inheritance",
        page_number: "Page 122"
      },
      question_type: "Direct Fact"
    }
  ]
};

export const CURATED_ZOOLOGY_SET: NEETQuizSet = {
  subject: "Zoology",
  topic: "Human Health and Disease",
  total_questions: 30,
  questions: [
    {
      question_number: 1,
      question: "Which confirmatory diagnostic laboratory test is used to detect Typhoid fever caused by Salmonella typhi?",
      options: {
        A: "Widal test",
        B: "ELISA test",
        C: "Western blot test",
        D: "Mantoux test"
      },
      correct_answer: "A",
      explanation: "Typhoid fever could be confirmed by Widal test. Pathogen enters small intestine through contaminated food and water and migrates to other organs via blood.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 146"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      question: "Which organism is NOT responsible for causing Ringworm disease in humans?",
      options: {
        A: "Microsporum",
        B: "Trichophyton",
        C: "Epidermophyton",
        D: "Macrosporum"
      },
      correct_answer: "D",
      explanation: "Many fungi belonging to the genera Microsporum, Trichophyton and Epidermophyton are responsible for ringworms which are characterized by appearance of dry, scaly lesions on skin, nails and scalp.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 149"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      question: "In the life cycle of Plasmodium, sexual stages (gametocytes) develop in which host and tissue?",
      options: {
        A: "Red blood cells (RBCs) of human host",
        B: "Salivary glands of female Anopheles mosquito",
        C: "Gut wall of female Anopheles mosquito",
        D: "Liver parenchyma cells of human host"
      },
      correct_answer: "A",
      explanation: "Sexual stages (gametocytes) develop in red blood cells of the human host. Fertilization and further development take place in the mosquito's gut.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 148"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 4,
      question: "Release of which toxic substance upon rupture of erythrocytic schizonts is responsible for the recurring chill and high fever in malaria?",
      options: {
        A: "Haemozoin",
        B: "Haemocyanin",
        C: "Hirudin",
        D: "Histamine"
      },
      correct_answer: "A",
      explanation: "Rupture of RBCs is associated with release of a toxic substance called haemozoin, which is responsible for the chill and high fever recurring every 3 to 4 days.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 147"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      question: "Which of the following is categorized under physiological barriers of innate immunity?",
      options: {
        A: "Acid in stomach, saliva in mouth, tears from eyes",
        B: "Skin on body and mucus coating of gut",
        C: "Polymorphonuclear leukocytes (PMNL-neutrophils)",
        D: "Interferons produced by virus-infected cells"
      },
      correct_answer: "A",
      explanation: "Physiological barriers include acid in the stomach, saliva in the mouth, and tears from eyes (which contain lysozyme) that prevent microbial growth.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 150"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      question: "Virus-infected cells secrete proteins called interferons which protect non-infected cells from further viral infection. Interferons belong to which innate immunity barrier?",
      options: {
        A: "Cytokine barrier",
        B: "Cellular barrier",
        C: "Physical barrier",
        D: "Physiological barrier"
      },
      correct_answer: "A",
      explanation: "Interferons are cytokine barriers. They are proteins secreted by virus-infected cells that shield healthy neighboring cells from viral replication.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 151"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      question: "Each antibody molecule is represented as H2L2 because it contains:",
      options: {
        A: "Two heavy chains and two light polypeptide chains",
        B: "Two histamine and two lipid bonds",
        C: "Two helical and two linear RNA molecules",
        D: "Two hemoglobin and two lymphocyte receptors"
      },
      correct_answer: "A",
      explanation: "Each antibody molecule consists of four peptide chains: two small light (L) chains and two longer heavy (H) chains. Hence represented as H2L2.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 151"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      question: "Which antibody isotype is predominantly abundant in colostrum secreted by mothers during initial days of lactation?",
      options: {
        A: "IgA",
        B: "IgE",
        C: "IgM",
        D: "IgD"
      },
      correct_answer: "A",
      explanation: "The yellowish fluid colostrum secreted by mother during the initial days of lactation has abundant antibodies (IgA) to protect the infant (naturally acquired passive immunity).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 152"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      question: "Which class of antibodies is primarily responsible for mediating allergic hypersensitivity reactions?",
      options: {
        A: "IgE",
        B: "IgG",
        C: "IgA",
        D: "IgM"
      },
      correct_answer: "A",
      explanation: "The antibodies produced to allergens are of IgE type. Allergy is due to the release of chemicals like histamine and serotonin from mast cells triggered by IgE.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 153"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      question: "The graft rejection in organ transplantation is primarily mediated by which arm of the immune system?",
      options: {
        A: "Cell-mediated immune response (T-lymphocytes)",
        B: "Humoral immune response (B-lymphocytes)",
        C: "Complement pathway proteins",
        D: "Innate physiological barriers"
      },
      correct_answer: "A",
      explanation: "Tissue matching and blood group matching are essential before undertaking any graft. Cell-mediated immune response (mediated by T-cells) is responsible for graft rejection.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 152"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 11,
      question: "Which of the following organs is considered a PRIMARY lymphoid organ where immature lymphocytes differentiate into antigen-sensitive lymphocytes?",
      options: {
        A: "Bone marrow and Thymus",
        B: "Spleen and Lymph nodes",
        C: "Peyer's patches and Appendix",
        D: "Tonsils and Mucosa-associated lymphoid tissue"
      },
      correct_answer: "A",
      explanation: "The primary lymphoid organs are bone marrow and thymus where immature lymphocytes differentiate and mature into antigen-sensitive lymphocytes.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 153"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      question: "Mucosa-associated lymphoid tissue (MALT) constitutes approximately what percentage of the total lymphoid tissue in the human body?",
      options: {
        A: "50 percent",
        B: "20 percent",
        C: "75 percent",
        D: "10 percent"
      },
      correct_answer: "A",
      explanation: "MALT constitutes about 50 per cent of the lymphoid tissue in human body, located within the lining of the major tracts (respiratory, digestive and urogenital tracts).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 154"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      question: "The Human Immunodeficiency Virus (HIV) belongs to which family of viruses and has what type of genetic material?",
      options: {
        A: "Retrovirus, with two identical single-stranded RNA molecules",
        B: "Rhabdovirus, with double-stranded DNA",
        C: "Reovirus, with single-stranded DNA",
        D: "Adenovirus, with circular RNA"
      },
      correct_answer: "A",
      explanation: "HIV is a member of a group of viruses called retrovirus, which have an envelope enclosing two copies of single-stranded RNA genome and reverse transcriptase enzyme.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 154"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      question: "Which cell type in the infected human body acts as an 'HIV factory' continuously producing viral progeny?",
      options: {
        A: "Macrophages",
        B: "T-helper lymphocytes (TH)",
        C: "B-lymphocytes",
        D: "Eosinophils"
      },
      correct_answer: "A",
      explanation: "After entering macrophages, the viral RNA directs synthesis of viral DNA which incorporates into host genome. The macrophage continues to produce virus particles and thus acts like an HIV factory.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 155"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      question: "AIDS symptoms appear predominantly due to a progressive, catastrophic reduction in the count of which blood cells?",
      options: {
        A: "Helper T-lymphocytes (CD4+ T-cells)",
        B: "Cytotoxic T-lymphocytes (CD8+)",
        C: "Erythrocytes (RBCs)",
        D: "Basophils"
      },
      correct_answer: "A",
      explanation: "HIV attacks and replicates inside helper T-lymphocytes (TH), leading to a progressive decrease in the number of helper T-lymphocytes in the body of the infected person.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 156"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 16,
      question: "A widely used diagnostic screening test for detection of antibodies against HIV is:",
      options: {
        A: "ELISA (Enzyme Linked Immuno-Sorbent Assay)",
        B: "Northern Blot",
        C: "Mantoux test",
        D: "Ames test"
      },
      correct_answer: "A",
      explanation: "A widely used diagnostic test for AIDS is Enzyme Linked Immuno-Sorbent Assay (ELISA). Treatment with anti-retroviral drugs only prolongs life.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 156"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      question: "Normal cells show a property by virtue of which contact with other cells inhibits their uncontrolled growth. This property is known as:",
      options: {
        A: "Contact inhibition",
        B: "Metastasis",
        C: "Angiogenesis",
        D: "Apoptosis"
      },
      correct_answer: "A",
      explanation: "Normal cells show a property called contact inhibition by virtue of which contact with other cells inhibits their uncontrolled growth. Cancer cells appear to have lost this property.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 157"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      question: "The most feared and malignant property of malignant tumors, where cancerous cells slough off and reach distant sites through blood to start secondary tumors, is called:",
      options: {
        A: "Metastasis",
        B: "Hyperplasia",
        C: "Contact inhibition",
        D: "Benign encystment"
      },
      correct_answer: "A",
      explanation: "Metastasis is the most feared property of malignant tumors where cells sloughed from tumors lodge in distant tissues and start a new tumor.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 157"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      question: "Which of the following biological response modifiers is administered to cancer patients to activate their immune system and destroy tumors?",
      options: {
        A: "alpha-Interferon",
        B: "Morphine",
        C: "Histamine",
        D: "Penicillin"
      },
      correct_answer: "A",
      explanation: "Patients are given biological response modifiers such as alpha-interferon which activates their immune system and helps in destroying the tumor.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 158"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      question: "Heroin, commonly called 'smack', is chemically known as:",
      options: {
        A: "Diacetylmorphine",
        B: "Cannabinoid",
        C: "Cocaine hydrochloride",
        D: "Benzodiazepine"
      },
      correct_answer: "A",
      explanation: "Heroin commonly called smack is chemically diacetylmorphine which is a white, odourless, bitter crystalline compound obtained by acetylation of morphine.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 158"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 21,
      question: "Morphine is extracted from the latex of which plant?",
      options: {
        A: "Papaver somniferum (Poppy plant)",
        B: "Cannabis sativa (Hemp plant)",
        C: "Erythroxylum coca",
        D: "Atropa belladonna"
      },
      correct_answer: "A",
      explanation: "Morphine is extracted from the latex of the poppy plant, Papaver somniferum. It is a very effective sedative and painkiller used for surgical patients.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 158"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 22,
      question: "Natural cannabinoids are obtained from the inflorescences of the plant Cannabis sativa. Their receptors are principally located in the:",
      options: {
        A: "Brain",
        B: "Gastrointestinal tract",
        C: "Cardiovascular valves",
        D: "Peripheral neuromuscular junctions"
      },
      correct_answer: "A",
      explanation: "Cannabinoid receptors are present principally in the brain. Cannabinoids are known for their effects on cardiovascular system of the body.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 159"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 23,
      question: "Cocaine is obtained from the South American plant Erythroxylum coca. It interferes with the transport of which neurotransmitter?",
      options: {
        A: "Dopamine",
        B: "Acetylcholine",
        C: "GABA",
        D: "Glutamate"
      },
      correct_answer: "A",
      explanation: "Cocaine, commonly called coke or crack, interferes with the transport of the neurotransmitter dopamine. It produces a sense of euphoria and increased energy.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 159"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 24,
      question: "Which of the following plants possess strong hallucinogenic properties?",
      options: {
        A: "Atropa belladonna and Datura",
        B: "Papaver somniferum and Nicotiana tabacum",
        C: "Cinchona officinalis and Rauwolfia serpentina",
        D: "Ocimum sanctum and Azadirachta indica"
      },
      correct_answer: "A",
      explanation: "Several plants with hallucinogenic properties include Atropa belladonna and Datura. Excessive dosage can lead to extreme hallucinations.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 160"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 25,
      question: "Nicotine stimulates which endocrine gland to release adrenaline and nor-adrenaline into blood circulation, thereby raising blood pressure and heart rate?",
      options: {
        A: "Adrenal gland",
        B: "Thyroid gland",
        C: "Pancreas",
        D: "Pituitary gland"
      },
      correct_answer: "A",
      explanation: "Tobacco contains nicotine, an alkaloid. Nicotine stimulates the adrenal gland to release adrenaline and nor-adrenaline into blood circulation, raising BP and heart rate.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 160"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 26,
      question: "Chronic use of alcohol causes cirrhosis, which is serious damage to which organ?",
      options: {
        A: "Liver",
        B: "Kidney",
        C: "Spleen",
        D: "Lungs"
      },
      correct_answer: "A",
      explanation: "Chronic use of alcohol leads to damage to the nervous system and liver (cirrhosis) along with acute pancreatitis.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 161"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 27,
      question: "Which of the following is an autoimmune disease where the body produces auto-antibodies that attack self cells in synovial joints?",
      options: {
        A: "Rheumatoid arthritis",
        B: "Myasthenia gravis in neuromuscular junction only",
        C: "Gouty arthritis due to uric acid crystals",
        D: "Osteoarthritis due to cartilage erosion"
      },
      correct_answer: "A",
      explanation: "In autoimmune disorders like Rheumatoid arthritis, the body's immune system attacks self-antigens, leading to progressive inflammation and destruction of joints.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 153"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 28,
      question: "Which vector transmits the filarial worm Wuchereria bancrofti that causes elephantiasis / filariasis?",
      options: {
        A: "Female Culex mosquito",
        B: "Female Anopheles mosquito",
        C: "Female Aedes mosquito",
        D: "Tsetse fly"
      },
      correct_answer: "A",
      explanation: "Wuchereria bancrofti and W. malayi are transmitted through the bite of the female Culex mosquito vector, resulting in chronic inflammation of lymphatic vessels of the lower limbs.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 149"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 29,
      question: "The introduction of which predatory fish in ponds and water reservoirs feeds on mosquito larvae to biologically control vectors?",
      options: {
        A: "Gambusia",
        B: "Clarias",
        C: "Catla",
        D: "Labeo"
      },
      correct_answer: "A",
      explanation: "Fishes like Gambusia feed on mosquito larvae in ponds, providing biological control against malaria, dengue, and chikungunya vectors.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 150"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 30,
      question: "A person bitten by a poisonous snake is immediately administered anti-venom containing preformed antibodies. This type of immunization is categorized as:",
      options: {
        A: "Passive immunization",
        B: "Active immunization",
        C: "Auto-immunization",
        D: "Cell-mediated innate response"
      },
      correct_answer: "A",
      explanation: "When ready-made/preformed antibodies are directly injected into the patient's bloodstream (as in snake venom antivenom or tetanus anti-toxin), it is called passive immunization.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Health and Disease",
        page_number: "Page 152"
      },
      question_type: "Conceptual"
    }
  ]
};

export const CURATED_PHYSICS_SET: NEETQuizSet = {
  subject: "Physics",
  topic: "Current Electricity",
  total_questions: 30,
  questions: [
    {
      question_number: 1,
      question: "The drift velocity (vd) of conduction electrons in a metallic conductor is related to the applied electric field (E) and relaxation time (τ) by the relation:",
      options: {
        A: "vd = - (e * E * τ) / m",
        B: "vd = - (m * E * τ) / e",
        C: "vd = - (e * m * E) / τ",
        D: "vd = - (e * τ) / (m * E)"
      },
      correct_answer: "A",
      explanation: "According to NCERT Physics, acceleration is a = -eE/m. The average drift velocity acquired over relaxation time τ is vd = a * τ = -(eEτ)/m.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 98"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 2,
      question: "If the radius of a cylindrical metallic wire is stretched uniformly to half its original value while keeping the volume constant, its resistance becomes:",
      options: {
        A: "16 times original resistance",
        B: "4 times original resistance",
        C: "8 times original resistance",
        D: "1/16 times original resistance"
      },
      correct_answer: "A",
      explanation: "Volume V = A * L is constant. If radius r' = r/2, area A' = A/4, which means length L' = 4L. Since R = ρL/A, R' = ρ(4L)/(A/4) = 16(ρL/A) = 16R.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 96"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 3,
      question: "What is the microscopic vector form of Ohm's Law in terms of current density (j), conductivity (σ), and electric field (E)?",
      options: {
        A: "j = σ * E",
        B: "E = σ * j",
        C: "j = E / σ",
        D: "j = σ * E^2"
      },
      correct_answer: "A",
      explanation: "NCERT states the microscopic equivalent of Ohm's Law as j = σE, where j is current density, σ is electrical conductivity, and E is electric field.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 97"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      question: "Which of the following materials has a NEGATIVE temperature coefficient of resistivity (α < 0)?",
      options: {
        A: "Silicon (Semiconductor)",
        B: "Copper (Metal)",
        C: "Nichrome (Alloy)",
        D: "Aluminium (Metal)"
      },
      correct_answer: "A",
      explanation: "For semiconductors like Silicon and Germanium, resistivity decreases with increase in temperature due to exponential increase in charge carrier density, giving α < 0.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 104"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 5,
      question: "Why are standard resistance coils made of alloys such as Manganin or Constantan rather than pure metals?",
      options: {
        A: "They have very high resistivity and nearly negligible temperature coefficient of resistance",
        B: "They have zero resistance at room temperature",
        C: "They are ductile and carry infinite current",
        D: "Their resistance decreases steeply with temperature"
      },
      correct_answer: "A",
      explanation: "Alloys like Manganin, Constantan and Nichrome exhibit high resistivity and very low temperature coefficient of resistance, making their resistance virtually independent of temperature.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 103"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 6,
      question: "Mobility (μ) of a charge carrier is defined as the magnitude of drift velocity per unit electric field. Its SI unit is:",
      options: {
        A: "m^2 / (V * s)",
        B: "m / (V * s)",
        C: "V * s / m^2",
        D: "m^2 * V / s"
      },
      correct_answer: "A",
      explanation: "Mobility μ = vd / E. In SI units: (m/s) / (V/m) = m^2 V^-1 s^-1.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 100"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      question: "Kirchhoff's First Rule (Junction rule, ΣI = 0) is a direct consequence of the conservation of:",
      options: {
        A: "Electric charge",
        B: "Energy",
        C: "Linear momentum",
        D: "Angular momentum"
      },
      correct_answer: "A",
      explanation: "Kirchhoff's junction rule states that total current entering a junction equals total current leaving it. This is based on conservation of electric charge.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 115"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      question: "Kirchhoff's Second Rule (Loop rule, ΣΔV = 0) is a direct consequence of the conservation of:",
      options: {
        A: "Energy",
        B: "Electric charge",
        C: "Magnetic flux",
        D: "Mass"
      },
      correct_answer: "A",
      explanation: "Kirchhoff's loop rule follows from the conservative nature of electrostatic fields: the total work done in taking a unit charge around any closed loop is zero (Conservation of Energy).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 116"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      question: "A cell of EMF 'E' and internal resistance 'r' is connected across an external resistance 'R'. Under what condition is maximum power transferred to R?",
      options: {
        A: "R = r",
        B: "R = 0",
        C: "R = 2r",
        D: "R -> infinity"
      },
      correct_answer: "A",
      explanation: "According to the Maximum Power Transfer Theorem, power delivered by an EMF source to a load resistance R is maximum when the load resistance equals internal resistance (R = r).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 111"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 10,
      question: "In a balanced Wheatstone bridge consisting of resistors R1, R2, R3, R4, the galvanometer shows zero deflection when:",
      options: {
        A: "R1 / R2 = R3 / R4",
        B: "R1 * R2 = R3 * R4",
        C: "R1 + R2 = R3 + R4",
        D: "R1 / R3 = R4 / R2"
      },
      correct_answer: "A",
      explanation: "The balance condition for a Wheatstone bridge with adjacent arms is R1/R2 = R3/R4. At this stage, the potential difference across the galvanometer arm is zero.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 118"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      question: "Two cells of EMFs E1 and E2 with internal resistances r1 and r2 are connected in parallel. What is their equivalent EMF (Eeq)?",
      options: {
        A: "Eeq = (E1 * r2 + E2 * r1) / (r1 + r2)",
        B: "Eeq = (E1 + E2) / 2",
        C: "Eeq = (E1 * r1 + E2 * r2) / (r1 + r2)",
        D: "Eeq = sqrt(E1 * E2)"
      },
      correct_answer: "A",
      explanation: "NCERT gives the standard parallel combination formula for two cells: Eeq = (E1*r2 + E2*r1)/(r1 + r2) and req = (r1*r2)/(r1 + r2).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 113"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 12,
      question: "A heating element connected to a 230 V supply draws an initial current of 3.2 A which settles after a few seconds to a steady value of 2.8 A. Why does current decrease?",
      options: {
        A: "Resistance increases due to temperature rise",
        B: "EMF of the supply decreases",
        C: "Electrons escape from the metal surface",
        D: "Internal inductance blocks the current"
      },
      correct_answer: "A",
      explanation: "As current flows, Joule heating increases the temperature of the metallic element. For metals, resistance increases with temperature, causing the steady state current to drop.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 105"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 13,
      question: "A potentiometer is considered superior to a standard voltmeter for measuring EMF of a cell because:",
      options: {
        A: "At the null balance point, it draws no current from the cell being tested",
        B: "It has zero internal resistance",
        C: "It is much lighter and portable",
        D: "It operates without any primary driving battery"
      },
      correct_answer: "A",
      explanation: "At the balance point, no current flows through the galvanometer branch. Hence the potentiometer measures the true open-circuit terminal potential difference (EMF) without loading.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 122"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 14,
      question: "What happens to the sensitivity of a potentiometer wire if its length is increased while maintaining the same potential drop across it?",
      options: {
        A: "Sensitivity increases because potential gradient decreases",
        B: "Sensitivity decreases because resistance increases",
        C: "Sensitivity remains unchanged",
        D: "Potential gradient becomes infinite"
      },
      correct_answer: "A",
      explanation: "Sensitivity is inversely proportional to potential gradient (k = V/L). Increasing the length L decreases k, meaning a small EMF change produces a larger balancing shift, increasing sensitivity.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 122"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 15,
      question: "When a current I flows through a conductor of cross-sectional area A and electron density n, the relation between current and drift velocity vd is:",
      options: {
        A: "I = n * e * A * vd",
        B: "I = n * e * vd / A",
        C: "I = e * A * vd / n",
        D: "I = n * A / (e * vd)"
      },
      correct_answer: "A",
      explanation: "NCERT derives: Total charge crossing area A in time Δt is ΔQ = n * e * A * vd * Δt. Therefore, I = ΔQ/Δt = n e A vd.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 98"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      question: "The terminal voltage V of a cell of EMF E and internal resistance r while being CHARGED with a current I is:",
      options: {
        A: "V = E + I * r",
        B: "V = E - I * r",
        C: "V = E",
        D: "V = I * r - E"
      },
      correct_answer: "A",
      explanation: "During discharging, V = E - Ir. But when the cell is being charged by an external source, current enters the positive terminal, making V = E + Ir.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 111"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 17,
      question: "In a meter bridge experiment, the balance point is found at 40 cm from the left end. If a resistance of 12 Ω is in the left gap, what is the unknown resistance in the right gap?",
      options: {
        A: "18 Ω",
        B: "8 Ω",
        C: "12 Ω",
        D: "24 Ω"
      },
      correct_answer: "A",
      explanation: "In meter bridge: R/S = l/(100 - l). Here 12/S = 40/(100 - 40) = 40/60 = 2/3. Therefore S = 12 * 3 / 2 = 18 Ω.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 120"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 18,
      question: "Which of the following non-ohmic devices shows a negative resistance region in its V-I characteristic curve?",
      options: {
        A: "Gallium Arsenide (GaAs)",
        B: "Copper wire",
        C: "Electrolyte solution at low temperature",
        D: "Carbon resistor"
      },
      correct_answer: "A",
      explanation: "NCERT illustrates that materials like GaAs display non-linear V-I curves containing a non-ohmic region where current decreases as voltage increases (negative resistance region).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 102"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      question: "Electric power P dissipated in a resistor of resistance R carrying current I with potential drop V is correctly expressed by all EXCEPT:",
      options: {
        A: "P = V^2 * R",
        B: "P = V * I",
        C: "P = I^2 * R",
        D: "P = V^2 / R"
      },
      correct_answer: "A",
      explanation: "By Joule's law, P = V*I = I^2*R = V^2/R. The expression V^2 * R is dimensionally incorrect for power.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 106"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      question: "Three identical bulbs of 60 W rating each are connected in series across a mains supply. The total power consumed by the combination is:",
      options: {
        A: "20 W",
        B: "180 W",
        C: "60 W",
        D: "40 W"
      },
      correct_answer: "A",
      explanation: "In series, effective power for n identical bulbs is P_total = P/n. Here 60 W / 3 = 20 W.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 107"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 21,
      question: "Assertion (A): Electric field inside a current-carrying metal wire is non-zero.\nReason (R): In electrostatics, electric field inside a conductor is zero, but in current electricity, charges are in dynamic non-equilibrium motion maintained by an external source.\nChoose the correct option:",
      options: {
        A: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        B: "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        C: "(A) is true but (R) is false",
        D: "(A) is false but (R) is true"
      },
      correct_answer: "A",
      explanation: "In electrostatics, net charge inside a conductor is zero and E = 0. However, when current flows, a continuous electric field E = V/L exists inside the conductor driving drift motion.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 95"
      },
      question_type: "Assertion-Reason"
    },
    {
      question_number: 22,
      question: "What is the typical order of magnitude of drift speed of electrons in a copper conductor carrying ordinary current?",
      options: {
        A: "10^-4 m/s (fraction of mm/s)",
        B: "3 * 10^8 m/s (speed of light)",
        C: "10^6 m/s",
        D: "10^2 m/s"
      },
      correct_answer: "A",
      explanation: "NCERT explicitly calculates drift speed in copper to be approximately 1 mm/s or 10^-4 m/s, despite electric fields propagating at almost the speed of light.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 99"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 23,
      question: "Thermal velocity of electrons in a metal at room temperature is approximately 10^5 m/s, but the net thermal electric current in the absence of an applied electric field is:",
      options: {
        A: "Zero, because thermal velocities are randomly directed with zero vector average",
        B: "Very high alternating current",
        C: "Proportional to absolute temperature",
        D: "Directed always towards ground"
      },
      correct_answer: "A",
      explanation: "Random collisions orient electron velocities equally in all directions in space, so the vector average thermal velocity is zero, resulting in zero net current.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 97"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 24,
      question: "A wire of resistance R is cut into 5 equal parts, and these 5 parts are then connected in parallel. What is the equivalent resistance of this parallel combination?",
      options: {
        A: "R / 25",
        B: "R / 5",
        C: "5 R",
        D: "25 R"
      },
      correct_answer: "A",
      explanation: "Each part has resistance R' = R/5. When 5 such resistors are joined in parallel: 1/Req = 5 * (1 / R') = 5 * (5/R) = 25/R => Req = R/25.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 108"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 25,
      question: "Superconductors are materials that exhibit zero electrical resistivity below a certain critical temperature (Tc). For mercury, Tc is approximately:",
      options: {
        A: "4.2 K",
        B: "77 K",
        C: "273 K",
        D: "0 K"
      },
      correct_answer: "A",
      explanation: "Kamerlingh Onnes discovered that below 4.2 K, the resistance of mercury abruptly drops to zero.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 104"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 26,
      question: "In a series combination of n identical cells each of EMF E and internal resistance r connected across an external resistor R, the current is independent of internal resistance r if:",
      options: {
        A: "R >> n * r",
        B: "n * r >> R",
        C: "R = n * r",
        D: "R = 0"
      },
      correct_answer: "A",
      explanation: "Total current I = (n * E) / (R + n * r). If external resistance R is much greater than total internal resistance n*r, then I ≈ (n*E)/R, which is independent of r.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 112"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 27,
      question: "Why does the resistivity of electrolytic solutions decrease when temperature is increased?",
      options: {
        A: "Viscosity of solvent decreases and mobility of ions increases",
        B: "Ions recombine into neutral atoms",
        C: "Dielectric constant of water approaches zero",
        D: "Electrons convert into photons"
      },
      correct_answer: "A",
      explanation: "In electrolytic solutions, charge carriers are ions. Raising the temperature decreases solvent viscosity and increases ion mobility and dissociation degree, lowering resistivity.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 105"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 28,
      question: "A high-resistance voltmeter measures the terminal potential difference across a cell as 2.2 V when open circuit, and 1.8 V when connected across a 5 Ω resistor. What is the internal resistance of the cell?",
      options: {
        A: "1.11 Ω",
        B: "0.55 Ω",
        C: "2.22 Ω",
        D: "0.25 Ω"
      },
      correct_answer: "A",
      explanation: "Internal resistance r = R * (E/V - 1) = 5 * (2.2 / 1.8 - 1) = 5 * (0.4 / 1.8) = 5 * (2/9) = 10/9 ≈ 1.11 Ω.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 111"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 29,
      question: "Which physical quantity has the dimension [M^-1 L^-3 T^3 A^2]?",
      options: {
        A: "Electrical conductivity (σ)",
        B: "Electrical resistivity (ρ)",
        C: "Electrical resistance (R)",
        D: "Electric conductance (G)"
      },
      correct_answer: "A",
      explanation: "Resistivity has dimensions [M L^3 T^-3 A^-2]. Conductivity is its inverse: σ = 1/ρ, so its dimension is [M^-1 L^-3 T^3 A^2].",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 97"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 30,
      question: "In domestic electrical wiring, electrical appliances are connected in parallel because:",
      options: {
        A: "Each appliance receives the full rated line voltage and operates independently of others",
        B: "Total current supplied by the mains is minimized",
        C: "Total resistance of the house circuit is maximized",
        D: "Series wiring produces hazardous high potential differences across switches"
      },
      correct_answer: "A",
      explanation: "In parallel, all appliances get the full 220V supply voltage, and if one appliance is switched off or fails, others continue functioning without interruption.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Current Electricity",
        page_number: "Page 107"
      },
      question_type: "Conceptual"
    }
  ]
};

export const CURATED_CHEMISTRY_SET: NEETQuizSet = {
  subject: "Chemistry",
  topic: "Coordination Compounds",
  total_questions: 30,
  questions: [
    {
      question_number: 1,
      question: "According to Alfred Werner's theory of coordination compounds, secondary valencies are:",
      options: {
        A: "Non-ionisable and directional in space",
        B: "Ionisable and non-directional",
        C: "Satisfied only by negative ions",
        D: "Variable and non-fixed for a given metal"
      },
      correct_answer: "A",
      explanation: "Werner postulated that secondary valencies are non-ionisable and directional in space, dictating the characteristic stereochemistry and coordination geometry around the central metal atom.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 244"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      question: "When 1 mole of CoCl3·5NH3 is treated with excess AgNO3 solution, how many moles of AgCl precipitate are formed?",
      options: {
        A: "2 moles",
        B: "3 moles",
        C: "1 mole",
        D: "Zero moles"
      },
      correct_answer: "A",
      explanation: "The formulation of CoCl3·5NH3 is [Co(NH3)5Cl]Cl2. Only the two chloride ions outside the coordination sphere are ionisable, yielding 2 moles of AgCl precipitate.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 245"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 3,
      question: "What is the correct IUPAC name for the coordination complex [Pt(NH3)2Cl(NO2)]?",
      options: {
        A: "Diamminechloridonitrito-N-platinum(II)",
        B: "Diamminechloronitroplatinum(IV)",
        C: "Platinum(II) diammine chloronitrite",
        D: "Diamminechloronitroplatinate(II)"
      },
      correct_answer: "A",
      explanation: "Ligands are named alphabetically: diammine, chlorido, nitrito-N (or nitro). The oxidation state of Pt is +2, and the complex is neutral so the metal name ends in platinum(II).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 248"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      question: "Which of the following ligands is a hexadentate chelating ligand widely used for estimating water hardness?",
      options: {
        A: "EDTA^4- (Ethylenediaminetetraacetate)",
        B: "en (Ethane-1,2-diamine)",
        C: "Oxalate ion (ox^2-)",
        D: "Dimethylglyoxime (DMG)"
      },
      correct_answer: "A",
      explanation: "Ethylenediaminetetraacetate ion (EDTA^4-) possesses two nitrogen donor atoms and four oxygen donor atoms (from acetate groups), making it a hexadentate ligand.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 247"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 5,
      question: "Ambidentate ligands like SCN^- can coordinate through either Sulfur or Nitrogen. What type of isomerism arises due to this property?",
      options: {
        A: "Linkage isomerism",
        B: "Ionisation isomerism",
        C: "Coordination isomerism",
        D: "Solvate isomerism"
      },
      correct_answer: "A",
      explanation: "Linkage isomerism arises in a coordination compound containing ambidentate ligands (e.g., SCN^- vs NCS^-, or NO2^- vs ONO^-) which can coordinate through two different atoms.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 250"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      question: "Which pair of coordination complexes represents Ionisation Isomerism?",
      options: {
        A: "[Co(NH3)5SO4]Br and [Co(NH3)5Br]SO4",
        B: "[Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6]",
        C: "[Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2·H2O",
        D: "cis-[Pt(NH3)2Cl2] and trans-[Pt(NH3)2Cl2]"
      },
      correct_answer: "A",
      explanation: "Ionisation isomerism occurs when counter ions in a compound are themselves potential ligands and exchange positions with coordination sphere ligands, giving different ions in solution.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 250"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      question: "Facial (fac) and Meridional (mer) isomerism is exhibited by octahedral complexes of which general formula?",
      options: {
        A: "[Ma3b3]",
        B: "[Ma4b2]",
        C: "[Ma2b4]",
        D: "[M(AA)3]"
      },
      correct_answer: "A",
      explanation: "Octahedral coordination complexes of type [Ma3b3] like [Co(NH3)3(NO2)3] exhibit facial-meridional (fac-mer) isomerism depending on whether 3 similar ligands occupy corners of the same face.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 252"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      question: "Which of the following coordination entities is OPTICALLY ACTIVE?",
      options: {
        A: "cis-[Co(en)2Cl2]^+",
        B: "trans-[Co(en)2Cl2]^+",
        C: "trans-[Pt(NH3)2Cl2]",
        D: "[Pt(NH3)3Cl]^+"
      },
      correct_answer: "A",
      explanation: "cis-[Co(en)2Cl2]^+ lacks a plane of symmetry and center of inversion, making it chiral and non-superimposable on its mirror image (optically active). The trans isomer has a plane of symmetry.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 253"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 9,
      question: "According to Valence Bond Theory (VBT), the diamagnetic complex [Ni(CN)4]^2- involves which hybridization and geometry?",
      options: {
        A: "dsp^2, Square planar",
        B: "sp^3, Tetrahedral",
        C: "d^2sp^3, Octahedral",
        D: "sp^3d^2, Square pyramidal"
      },
      correct_answer: "A",
      explanation: "In [Ni(CN)4]^2-, Ni is in +2 state (3d^8). CN^- is a strong field ligand that forces pairing of 3d electrons, leaving one 3d orbital vacant for dsp^2 hybridization, giving a square planar diamagnetic complex.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 255"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 10,
      question: "The complex [NiCl4]^2- is paramagnetic with two unpaired electrons. Its hybridization and shape are:",
      options: {
        A: "sp^3, Tetrahedral",
        B: "dsp^2, Square planar",
        C: "sp^3d, Trigonal bipyramidal",
        D: "d^2sp^3, Octahedral"
      },
      correct_answer: "A",
      explanation: "Cl^- is a weak field ligand and cannot cause pairing of the 3d^8 electrons in Ni^2+. Hybridization involves one 4s and three 4p orbitals (sp^3), resulting in a paramagnetic tetrahedral geometry.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 255"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 11,
      question: "In an octahedral crystal field, the five degenerate d-orbitals split into which two sets of orbitals?",
      options: {
        A: "Lower energy t2g (dxy, dyz, dzx) and higher energy eg (dx2-y2, dz2)",
        B: "Higher energy t2g and lower energy eg",
        C: "Degenerate e and t2 without any energy difference",
        D: "Single a1g and fourfold degenerate t1u"
      },
      correct_answer: "A",
      explanation: "In octahedral geometry, ligands approach along the Cartesian axes (x, y, z). Orbitals pointing along axes (dx2-y2, dz2) feel greater repulsion and form higher energy eg set (+0.6 Δo), while dxy, dyz, dzx form lower energy t2g set (-0.4 Δo).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 257"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      question: "What is the relationship between crystal field splitting in tetrahedral fields (Δt) and octahedral fields (Δo) for identical metal and ligands?",
      options: {
        A: "Δt = (4/9) * Δo",
        B: "Δt = (9/4) * Δo",
        C: "Δt = Δo",
        D: "Δt = (1/2) * Δo"
      },
      correct_answer: "A",
      explanation: "NCERT states that because there are only 4 ligands instead of 6 and no orbital points directly towards ligands, Δt is roughly 4/9 of Δo (Δt = 4/9 Δo).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 259"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      question: "Which of the following represents the correct order of ligands in the Spectrochemical Series?",
      options: {
        A: "I^- < Br^- < Cl^- < F^- < OH^- < H2O < NH3 < CN^- < CO",
        B: "CO < CN^- < NH3 < H2O < OH^- < F^- < Cl^- < Br^- < I^-",
        C: "H2O < NH3 < CN^- < CO < I^- < Br^- < Cl^- < F^-",
        D: "Cl^- < F^- < Br^- < I^- < CO < CN^- < NH3 < H2O"
      },
      correct_answer: "A",
      explanation: "Spectrochemical series based on increasing crystal field splitting Δo: I^- < Br^- < SCN^- < Cl^- < S^2- < F^- < OH^- < C2O4^2- < H2O < NCS^- < edta^4- < NH3 < en < CN^- < CO.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 258"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      question: "For a d^4 ion in an octahedral complex, if crystal field splitting Δo is GREATER than pairing energy P (Δo > P), the electron configuration is:",
      options: {
        A: "t2g^4 eg^0 (Low spin)",
        B: "t2g^3 eg^1 (High spin)",
        C: "t2g^2 eg^2",
        D: "t2g^1 eg^3"
      },
      correct_answer: "A",
      explanation: "When Δo > P (strong field ligand), pairing is energetically favourable compared to promoting an electron to eg orbital. Hence, the 4th electron pairs up in t2g, giving t2g^4 eg^0.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 258"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 15,
      question: "Why is [Ti(H2O)6]^3+ coloured (violet) whereas [Sc(H2O)6]^3+ is colourless?",
      options: {
        A: "Ti^3+ has a single 3d electron undergoing d-d transition, while Sc^3+ has empty 3d orbitals (3d^0)",
        B: "Sc^3+ has completely filled d-subshell (3d^10)",
        C: "Ti^3+ absorbs all wavelengths in UV range",
        D: "Sc^3+ is a radioactive metal"
      },
      correct_answer: "A",
      explanation: "Ti^3+ has configuration [Ar] 3d^1. Absorption of yellow-green light promotes the electron from t2g to eg (d-d transition), making it violet. Sc^3+ is 3d^0, so no d-d transition is possible.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 259"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 16,
      question: "What is the spin-only magnetic moment (in Bohr Magnetons, BM) for a d^5 high-spin octahedral complex (e.g., [Mn(H2O)6]^2+)?",
      options: {
        A: "5.92 BM",
        B: "1.73 BM",
        C: "3.87 BM",
        D: "4.90 BM"
      },
      correct_answer: "A",
      explanation: "In high-spin d^5, there are n = 5 unpaired electrons. Spin-only magnetic moment μ = sqrt(n*(n+2)) = sqrt(5*7) = sqrt(35) ≈ 5.92 BM.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 256"
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 17,
      question: "The synergistic bonding in metal carbonyls [M(CO)x] involves:",
      options: {
        A: "M <- CO σ-donation and M -> CO π-backbonding into CO π* antibonding orbitals",
        B: "Only ionic electrostatic attraction",
        C: "Only σ-bond donation from metal to carbon",
        D: "Weak van der Waals forces"
      },
      correct_answer: "A",
      explanation: "NCERT explains synergic effect: Ligand CO donates lone pair into vacant metal d-orbital forming a σ bond, while filled metal d-orbitals donate electron density back into vacant π* molecular orbital of CO, strengthening the M-C bond.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 262"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 18,
      question: "Which platinum coordination complex is widely used in medicine as an effective anti-cancer drug for inhibiting tumor growth?",
      options: {
        A: "cis-platin [cis-Pt(NH3)2Cl2]",
        B: "trans-platin [trans-Pt(NH3)2Cl2]",
        C: "[Pt(NH3)4]Cl2",
        D: "K2[PtCl6]"
      },
      correct_answer: "A",
      explanation: "cis-platin [cis-Pt(NH3)2Cl2] effectively inhibits DNA replication in cancer cells and is an important chemotherapy drug. The trans isomer is therapeutically inactive.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 264"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      question: "The red pigment chlorophyll responsible for photosynthesis in green plants is a coordination compound of which central metal ion?",
      options: {
        A: "Magnesium (Mg^2+)",
        B: "Iron (Fe^2+)",
        C: "Cobalt (Co^3+)",
        D: "Copper (Cu^2+)"
      },
      correct_answer: "A",
      explanation: "Chlorophyll is a coordination compound of magnesium. Hemoglobin is a coordination complex of iron, and Vitamin B12 is a coordination complex of cobalt.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 264"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      question: "Vitamin B12 (Cyanocobalamin), an anti-pernicious anemia factor, is a coordination compound of which transition metal?",
      options: {
        A: "Cobalt",
        B: "Zinc",
        C: "Manganese",
        D: "Nickel"
      },
      correct_answer: "A",
      explanation: "Vitamin B12 (cyanocobalamin) is a coordination compound of cobalt bound inside a corrin ring macroligand.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 264"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 21,
      question: "Wilkinson's catalyst, [(Ph3P)3RhCl], is used as a homogeneous catalyst for which industrial chemical reaction?",
      options: {
        A: "Hydrogenation of alkenes",
        B: "Polymerisation of ethene",
        C: "Oxidation of ethanol to ethanoic acid",
        D: "Cracking of heavy petroleum fractions"
      },
      correct_answer: "A",
      explanation: "Wilkinson's catalyst, Tris(triphenylphosphine)rhodium(I) chloride, is used for the selective homogeneous hydrogenation of alkenes.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 263"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 22,
      question: "In the metallurgical extraction of gold and silver, the native metal is leached with aqueous cyanide solution (MacArthur-Forrest process) to form which soluble complex ion?",
      options: {
        A: "[Au(CN)2]^- and [Ag(CN)2]^-",
        B: "[Au(CN)4]^3-",
        C: "[Ag(CN)6]^5-",
        D: "[Au(CO)4]^+"
      },
      correct_answer: "A",
      explanation: "4 Au + 8 NaCN + 2 H2O + O2 -> 4 Na[Au(CN)2] + 4 NaOH. Gold and silver form dicyanoaurate(I) [Au(CN)2]^- and dicyanoargentate(I) [Ag(CN)2]^-.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 263"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 23,
      question: "The chelate effect refers to the phenomenon where a coordination complex formed with chelating polydentate ligands is:",
      options: {
        A: "Significantly more stable than similar complexes containing only monodentate ligands",
        B: "Much less stable due to ring strain",
        C: "Always paramagnetic",
        D: "Incapable of undergoing ligand substitution"
      },
      correct_answer: "A",
      explanation: "The chelate effect is primarily an entropic stabilization: replacement of monodentate ligands by polydentate chelating ligands increases the total number of free particles in solution (ΔS > 0).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 261"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 24,
      question: "Which of the following complexes is classified as an OUTER ORBITAL octahedral complex?",
      options: {
        A: "[CoF6]^3-",
        B: "[Co(NH3)6]^3+",
        C: "[Fe(CN)6]^4-",
        D: "[Cr(H2O)6]^3+"
      },
      correct_answer: "A",
      explanation: "In [CoF6]^3-, F^- is a weak field ligand. The 3d electrons of Co^3+ remain unpaired, so outer 4d orbitals are used (sp^3d^2 hybridization), making it an outer orbital high-spin complex.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 254"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 25,
      question: "What is the coordination number and oxidation state of the central metal in K3[Fe(C2O4)3]?",
      options: {
        A: "Coordination number = 6, Oxidation state = +3",
        B: "Coordination number = 3, Oxidation state = +3",
        C: "Coordination number = 6, Oxidation state = +2",
        D: "Coordination number = 3, Oxidation state = +6"
      },
      correct_answer: "A",
      explanation: "Oxalate (C2O4^2-) is a bidentate ligand. 3 bidentate ligands donate 3 * 2 = 6 coordinate bonds, so Coordination Number = 6. Oxidation state x + 3(-2) = -3 => x = +3.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 246"
      },
      question_type: "Conceptual"
    },
    {
      question_number: 26,
      question: "Which of the following compounds exhibits Solvate / Hydrate Isomerism?",
      options: {
        A: "[Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2·H2O",
        B: "[Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br",
        C: "[Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6]",
        D: "[Pt(NH3)2Cl2] cis and trans forms"
      },
      correct_answer: "A",
      explanation: "Solvate isomerism (hydrate isomerism when solvent is water) differs in whether a solvent molecule is directly bonded to metal as a ligand or merely present as water of crystallization.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 251"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 27,
      question: "Assertion (A): Tetrahedral complexes almost always form high-spin complexes.\nReason (R): The crystal field splitting Δt is substantially smaller than the electron pairing energy (Δt < P).\nChoose the correct option:",
      options: {
        A: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        B: "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        C: "(A) is true but (R) is false",
        D: "(A) is false but (R) is true"
      },
      correct_answer: "A",
      explanation: "Because Δt = (4/9)Δo, the tetrahedral splitting energy is rarely large enough to overcome pairing energy (Δt < P). Hence electrons prefer unpairing and low-spin configurations are exceptionally rare.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 259"
      },
      question_type: "Assertion-Reason"
    },
    {
      question_number: 28,
      question: "The geometry of [Fe(CO)5] molecule according to Valence Bond Theory is:",
      options: {
        A: "Trigonal bipyramidal",
        B: "Octahedral",
        C: "Square planar",
        D: "Tetrahedral"
      },
      correct_answer: "A",
      explanation: "In pentacarbonyliron(0), Fe is in oxidation state 0 (3d^6 4s^2). Strong CO ligand forces 4s electrons into 3d, leaving one 3d orbital vacant for dsp^3 hybridization (trigonal bipyramidal).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 262"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 29,
      question: "Excess of copper and iron in the human body is removed in medicine by chelation therapy using which chelating agents?",
      options: {
        A: "D-penicillamine and desferrioxamine B respectively",
        B: "EDTA only",
        C: "Aspirin and Paracetamol",
        D: "Morphine and Chloramphenicol"
      },
      correct_answer: "A",
      explanation: "NCERT states that excess of copper is removed by chelating agent D-penicillamine (Wilson's disease), and excess iron is removed by desferrioxamine B.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 264"
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 30,
      question: "Brown ring test for nitrates produces the brown complex [Fe(H2O)5(NO)]SO4. What is the oxidation state of Iron in this brown complex?",
      options: {
        A: "+1",
        B: "+2",
        C: "+3",
        D: "0"
      },
      correct_answer: "A",
      explanation: "In the brown ring complex [Fe(H2O)5(NO)]^2+, NO acts as a positive nitrosyl ligand (NO^+). Therefore, Fe has an anomalous +1 oxidation state (Fe^+), with 3 unpaired electrons.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Coordination Compounds",
        page_number: "Page 249"
      },
      question_type: "Conceptual"
    }
  ]
};

export const ALL_CURATED_SETS: Record<string, NEETQuizSet> = {
  "Botany:Molecular Basis of Inheritance": CURATED_BOTANY_SET,
  "Zoology:Human Health and Disease": CURATED_ZOOLOGY_SET,
  "Physics:Current Electricity": CURATED_PHYSICS_SET,
  "Chemistry:Coordination Compounds": CURATED_CHEMISTRY_SET
};
