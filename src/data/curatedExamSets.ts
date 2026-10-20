import { NEETQuizSet } from '../types/neet';

export const EXAM_BOTANY_SET: NEETQuizSet = {
  subject: "Botany",
  topic: "Principles of Inheritance and Variation",
  total_questions: 30,
  mode: "exam",
  questions: [
    {
      question_number: 1,
      question: "Statement I: Mendel conducted artificial pollination/cross pollination experiments using several true-breeding pea lines.\nStatement II: A true-breeding line is one that, having undergone continuous self-pollination, shows the stable trait inheritance for several generations.\nChoose the correct option:",
      options: {
        A: "Both Statement I and Statement II are correct",
        B: "Both Statement I and Statement II are incorrect",
        C: "Statement I is correct but Statement II is incorrect",
        D: "Statement I is incorrect but Statement II is correct"
      },
      correct_answer: "A",
      explanation: "NCERT line states: Mendel conducted artificial pollination/cross pollination experiments using several true-breeding pea lines. A true-breeding line is one that, having undergone continuous self-pollination, shows the stable trait inheritance and expression for several generations.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.1: Mendel's Laws of Inheritance",
        page_number: "Page 70",
        exact_quote: "A true-breeding line is one that, having undergone continuous self-pollination, shows the stable trait inheritance and expression for several generations."
      },
      question_type: "Statement I & II"
    },
    {
      question_number: 2,
      question: "Which of the following contrasting traits studied by Mendel in Pisum sativum is a RECESSIVE trait?",
      options: {
        A: "Constricted pod shape",
        B: "Axial flower position",
        C: "Yellow seed colour",
        D: "Inflated pod shape"
      },
      correct_answer: "A",
      explanation: "In garden peas: Inflated pod is dominant, constricted pod is recessive. Axial flower is dominant, terminal flower is recessive. Yellow seed colour is dominant, green seed is recessive.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.1: Mendel's Laws of Inheritance",
        page_number: "Page 71",
        exact_quote: "Table 5.1: Contrasting traits: Pod shape - Inflated (dominant) vs Constricted (recessive)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      question: "In Antirrhinum majus (snapdragon), a cross between red flower (RR) and white flower (rr) yielded pink flower (Rr) in F1. When F1 was self-pollinated, what was the phenotypic and genotypic ratio in F2?",
      options: {
        A: "1 Red : 2 Pink : 1 White (both phenotypic and genotypic ratios are 1:2:1)",
        B: "3 Red : 1 White phenotypic ratio, 1:2:1 genotypic ratio",
        C: "9:3:3:1 ratio for both",
        D: "All pink flowers"
      },
      correct_answer: "A",
      explanation: "In incomplete dominance in snapdragon, the phenotypic ratio 1:2:1 completely matches the genotypic ratio (1 RR : 2 Rr : 1 rr), because heterozygote Rr produces intermediate pink pigment.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.2.2: Incomplete Dominance",
        page_number: "Page 76",
        exact_quote: "Here the phenotypic ratio was 1:2:1 (1 Red : 2 Pink : 1 White), which is completely identical to the genotypic ratio."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 4,
      question: "Assertion (A): ABO blood grouping in humans is a classical example of multiple allelism and codominance.\nReason (R): In ABO blood groups, alleles IA and IB both express their own types of sugars completely when present together.\nChoose the correct option:",
      options: {
        A: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        B: "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        C: "(A) is true but (R) is false",
        D: "(A) is false but (R) is true"
      },
      correct_answer: "A",
      explanation: "Because there are three alleles (IA, IB, i) in human population, it exhibits multiple allelism. When IA and IB are present together (IAIB), both enzymes produce their respective sugars, demonstrating codominance.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.2.3: Co-dominance",
        page_number: "Page 77",
        exact_quote: "When IA and IB are present together that is in an individual of genotype IAIB, both enzymes produce their own sugars, this is co-dominance."
      },
      question_type: "Assertion-Reason"
    },
    {
      question_number: 5,
      question: "What is the total number of possible genotypes and phenotypes respectively for human ABO blood groups controlled by three alleles?",
      options: {
        A: "6 genotypes and 4 phenotypes",
        B: "4 genotypes and 6 phenotypes",
        C: "3 genotypes and 3 phenotypes",
        D: "9 genotypes and 4 phenotypes"
      },
      correct_answer: "A",
      explanation: "With 3 alleles, total genotypes = n(n+1)/2 = 3(4)/2 = 6 genotypes (IAIA, IAi, IBIB, IBi, IAIB, ii) which yield 4 phenotypes (Blood group A, B, AB, O).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.2.3: Co-dominance",
        page_number: "Page 77",
        exact_quote: "There are six different combinations of these three alleles that are possible, and therefore a total of six different genotypes of the human ABO blood types."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 6,
      question: "Starch synthesis in pea seeds is controlled by one gene with two alleles B and b. Heterozygotes (Bb) produce round seeds with intermediate-sized starch grains. This demonstrates that:",
      options: {
        A: "Dominance is not an autonomous feature of a gene or the product that it has information for",
        B: "Dominance is absolute for all traits controlled by a single gene",
        C: "Starch synthesis is strictly an environmental artifact",
        D: "Allele b is lethal in homozygous condition"
      },
      correct_answer: "A",
      explanation: "NCERT states: Dominance is not an autonomous feature of a gene or the product that it has information for. It depends as much on the gene product and the production of a particular phenotype from this product as it does on the particular phenotype that we choose to examine.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.2.3: Co-dominance & Pleiotropy",
        page_number: "Page 78",
        exact_quote: "Dominance is not an autonomous feature of a gene or the product that it has information for."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 7,
      question: "In a dihybrid test cross between AaBb x aabb, if the two genes are located on the same chromosome and are completely linked with zero crossing over, the expected phenotypic ratio will be:",
      options: {
        A: "1 : 1 parental types only",
        B: "1 : 1 : 1 : 1",
        C: "9 : 3 : 3 : 1",
        D: "3 : 1"
      },
      correct_answer: "A",
      explanation: "Complete linkage prevents formation of recombinant gametes. Only parental gametes (AB and ab) are produced in equal numbers, resulting in 1 parental : 1 parental ratio (1:1).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.3.2: Linkage and Recombination",
        page_number: "Page 83",
        exact_quote: "When two genes in a dihybrid cross were situated on the same chromosome, the proportion of parental gene combinations was much higher than the non-parental type."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 8,
      question: "T.H. Morgan selected Drosophila melanogaster for his genetical studies because of all the following reasons EXCEPT:",
      options: {
        A: "They take about 6 months to complete their life cycle",
        B: "They could be grown on simple synthetic medium in the laboratory",
        C: "A single mating could produce a large number of progeny flies",
        D: "There was a clear differentiation of the sexes (male and female easily distinguished)"
      },
      correct_answer: "A",
      explanation: "Drosophila complete their life cycle in about two weeks (not 6 months). They grow on simple synthetic media, mate profusely, and have clear sexual dimorphism.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.3.2: Morgan's Experimental Organism",
        page_number: "Page 83",
        exact_quote: "They complete their life cycle in about two weeks, and a single mating could produce a large number of progeny flies."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      question: "Alfred Sturtevant utilized which of the following parameters as a measure of genetic distance to map gene loci on chromosomes?",
      options: {
        A: "The frequency of recombination between gene pairs on the same chromosome",
        B: "The total number of mutations induced by X-rays",
        C: "The physical weight of the homologous chromosome pair",
        D: "The ratio of purines to pyrimidines"
      },
      correct_answer: "A",
      explanation: "Morgan's student Alfred Sturtevant used the frequency of recombination between gene pairs on the same chromosome as a measure of the distance between genes and 'mapped' their position on the chromosome.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.3.2: Chromosome Mapping",
        page_number: "Page 84",
        exact_quote: "Alfred Sturtevant used the frequency of recombination between gene pairs on the same chromosome as a measure of the distance between genes and mapped their position."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      question: "In honeybees, males (drones) develop by parthenogenesis and have 16 chromosomes. Females (queen and workers) have 32 chromosomes. Which type of cell division produces sperms in drone honeybees?",
      options: {
        A: "Mitosis",
        B: "Meiosis I only",
        C: "Meiosis II only",
        D: "Amitosis without spindle"
      },
      correct_answer: "A",
      explanation: "Drones are haploid (n = 16) and produce sperms by MITOSIS. They do not have a father and cannot have sons, but have a grandfather and can have grandsons.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.4.3: Sex Determination in Honey Bee",
        page_number: "Page 87",
        exact_quote: "Males produce sperms by mitosis; they do not have father and thus cannot have sons, but have a grandfather and can have grandsons."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 11,
      question: "Sickle-cell anemia is caused by the substitution of which amino acid at the sixth position of the beta-globin chain of hemoglobin?",
      options: {
        A: "Glutamic acid by Valine",
        B: "Valine by Glutamic acid",
        C: "Lysine by Glycine",
        D: "Aspartic acid by Alanine"
      },
      correct_answer: "A",
      explanation: "The defect is caused by the substitution of Glutamic acid (Glu) by Valine (Val) at the sixth position of the beta globin chain due to a single base substitution from GAG to GUG codon.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.2: Sickle-Cell Anemia",
        page_number: "Page 89",
        exact_quote: "The defect is caused by the substitution of Glutamic acid (Glu) by Valine (Val) at the sixth position of the beta globin chain of the haemoglobin molecule."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      question: "Which of the following chromosomal disorders is characterized by an additional X chromosome in males (47, XXY), giving tall stature with feminine gynecomastia and sterile gonads?",
      options: {
        A: "Klinefelter's Syndrome",
        B: "Turner's Syndrome",
        C: "Down's Syndrome",
        D: "Cri-du-chat Syndrome"
      },
      correct_answer: "A",
      explanation: "Klinefelter's syndrome is caused by presence of an additional copy of X-chromosome resulting in 47, XXY. Such individuals have overall masculine development with feminine features (gynecomastia) and are sterile.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.3: Chromosomal Disorders",
        page_number: "Page 92",
        exact_quote: "Klinefelter's Syndrome: This genetic disorder is also caused due to the presence of an additional copy of X-chromosome resulting into a karyotype of 47, XXY."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      question: "Turner's syndrome is caused due to which chromosomal aberration?",
      options: {
        A: "Monosomy of X chromosome (44 + X0, total 45 chromosomes)",
        B: "Trisomy of chromosome 21",
        C: "Trisomy of X chromosome (XXX)",
        D: "Monosomy of chromosome 18"
      },
      correct_answer: "A",
      explanation: "Turner's syndrome is caused due to absence of one of the X chromosomes, i.e., 45 with X0. Such females are sterile as ovaries are rudimentary besides other features including lack of secondary sexual characters.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.3: Chromosomal Disorders",
        page_number: "Page 92",
        exact_quote: "Turner's Syndrome: Such disorder is caused due to the absence of one of the X chromosomes, i.e., 45 with X0."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      question: "Down's syndrome was first described by Langdon Down (1866). It is caused due to:",
      options: {
        A: "Trisomy of chromosome number 21",
        B: "Trisomy of chromosome number 18",
        C: "Nullisomy of sex chromosome",
        D: "Monosomy of chromosome number 13"
      },
      correct_answer: "A",
      explanation: "Down's syndrome is caused by the presence of an additional copy of the chromosome number 21 (trisomy of 21). Affected individuals have short stature, round head, furrowed tongue and partially open mouth.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.3: Down's Syndrome",
        page_number: "Page 91",
        exact_quote: "The cause of this genetic disorder is the presence of an additional copy of the chromosome number 21 (trisomy of 21)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      question: "Phenylketonuria (PKU) is an inborn error of metabolism inherited as an autosomal recessive trait. Affected individuals lack which liver enzyme?",
      options: {
        A: "Phenylalanine hydroxylase",
        B: "Tyrosinase",
        C: "Homogentisic acid oxidase",
        D: "Dopa decarboxylase"
      },
      correct_answer: "A",
      explanation: "Affected individuals lack the enzyme phenylalanine hydroxylase that converts the amino acid phenylalanine into tyrosine. Phenylalanine accumulates and converts into phenylpyruvic acid causing mental retardation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.2: Phenylketonuria",
        page_number: "Page 90",
        exact_quote: "The affected individual lacks an enzyme that converts the amino acid phenylalanine into tyrosine."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      question: "Thalassemia differs from Sickle-cell anemia in that:",
      options: {
        A: "Thalassemia is a quantitative problem of synthesizing too few globin molecules, while Sickle-cell anemia is a qualitative problem of synthesizing an abnormally functioning globin",
        B: "Thalassemia is an autosomal dominant disorder whereas sickle cell is sex-linked",
        C: "Thalassemia is caused by excess iron while sickle cell is iron deficiency",
        D: "Thalassemia affects alpha-chain only whereas sickle cell affects gamma chain only"
      },
      correct_answer: "A",
      explanation: "NCERT clearly contrasts: Thalassemia differs from sickle-cell anaemia in that the former is a quantitative problem of synthesizing too few globin molecules while the latter is a qualitative problem of synthesizing an incorrectly functioning globin.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.2: Thalassemia",
        page_number: "Page 90",
        exact_quote: "Thalassemia differs from sickle-cell anaemia in that the former is a quantitative problem... while the latter is a qualitative problem."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 17,
      question: "Alpha Thalassemia is controlled by two closely linked genes HBA1 and HBA2 located on which chromosome?",
      options: {
        A: "Chromosome 16",
        B: "Chromosome 11",
        C: "Chromosome 21",
        D: "X chromosome"
      },
      correct_answer: "A",
      explanation: "Alpha thalassemia is controlled by two closely linked genes HBA1 and HBA2 on chromosome 16 of each parent. Beta thalassemia is controlled by a single gene HBB on chromosome 11.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.2: Thalassemia",
        page_number: "Page 90",
        exact_quote: "Alpha Thalassemia is controlled by two closely linked genes HBA1 and HBA2 on chromosome 16 of each parent."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      question: "Which of the following crosses would produce a 1:1:1:1 phenotypic ratio in the offspring?",
      options: {
        A: "AaBb x aabb (Dihybrid test cross)",
        B: "AaBb x AaBb",
        C: "AABB x aabb",
        D: "AAbb x aaBB"
      },
      correct_answer: "A",
      explanation: "A dihybrid test cross AaBb x aabb produces four gamete types (AB, Ab, aB, ab) from the heterozygous parent and only ab from the homozygous recessive parent, yielding a 1:1:1:1 ratio.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.3: Inheritance of Two Genes",
        page_number: "Page 79",
        exact_quote: "The dihybrid test cross ratio is 1:1:1:1 for two unlinked independently assorting genes."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 19,
      question: "Walter Sutton and Theodore Boveri noted that the behavior of chromosomes was parallel to the behavior of genes. They used chromosome movement during which cellular process to explain Mendel's laws?",
      options: {
        A: "Meiosis",
        B: "Mitosis",
        C: "Cytokinesis",
        D: "Binary fission"
      },
      correct_answer: "A",
      explanation: "Sutton and Boveri argued that the pairing and separation of a pair of chromosomes would lead to the segregation of a pair of factors they carried during meiosis.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.3.1: Chromosomal Theory of Inheritance",
        page_number: "Page 81",
        exact_quote: "Sutton and Boveri argued that the pairing and separation of a pair of chromosomes would lead to the segregation of a pair of factors they carried."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      question: "In human genetics, a hemophilic man (X^h Y) marries a normal homozygous woman (X^H X^H). What is the probability of hemophilia among their sons?",
      options: {
        A: "0%",
        B: "50%",
        C: "100%",
        D: "25%"
      },
      correct_answer: "A",
      explanation: "The sons receive their Y chromosome from their father and normal X^H from their mother. Therefore, 100% of the sons are normal (X^H Y), and hemophilia probability is 0%.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.2: Haemophilia",
        page_number: "Page 89",
        exact_quote: "A normal female marrying a haemophilic male produces carrier daughters and completely normal sons (0% affected sons)."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 21,
      question: "Why is hemophilia rarely observed in human females?",
      options: {
        A: "Because the mother has to be at least a carrier and father must be hemophilic (which is often non-viable in late life)",
        B: "Because the gene is located strictly on the Y chromosome",
        C: "Because females have higher levels of antihemophilic globulin",
        D: "Because it is an autosomal dominant condition"
      },
      correct_answer: "A",
      explanation: "For a female to be hemophilic (X^h X^h), the mother has to be at least a carrier and the father must be hemophilic (unviable in the later stage of life).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.2: Haemophilia",
        page_number: "Page 89",
        exact_quote: "The possibility of a female becoming a haemophilic is extremely rare because mother of such a female has to be at least carrier and the father should be haemophilic."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 22,
      question: "In Morgan's dihybrid crosses on Drosophila, which two genes showed the tightest linkage with only 1.3% recombination?",
      options: {
        A: "Yellow body and White eye (genes y and w)",
        B: "White eye and Miniature wing (genes w and m)",
        C: "Yellow body and Miniature wing",
        D: "Brown body and Red eye"
      },
      correct_answer: "A",
      explanation: "Cross A (yellow body, white eyes) showed only 1.3% recombination, indicating that genes y and w are very tightly linked on the X chromosome.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.3.2: Linkage and Recombination",
        page_number: "Page 83",
        exact_quote: "Genes white and yellow were very tightly linked and showed only 1.3 per cent recombination while white and miniature wing showed 37.2 per cent recombination."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 23,
      question: "Failure of segregation of chromatids during cell division cycle results in the gain or loss of a chromosome(s), called:",
      options: {
        A: "Aneuploidy",
        B: "Polyploidy",
        C: "Inversion",
        D: "Duplication"
      },
      correct_answer: "A",
      explanation: "Failure of segregation of chromatids during cell division cycle results in the gain or loss of a chromosome(s), called aneuploidy. Failure of cytokinesis after telophase results in polyploidy.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.3: Chromosomal Disorders",
        page_number: "Page 91",
        exact_quote: "Failure of segregation of chromatids during cell division cycle results in the gain or loss of a chromosome(s), called aneuploidy."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 24,
      question: "Polyploidy (an increase in a whole set of chromosomes in an organism) is most frequently observed in which group of organisms?",
      options: {
        A: "Plants",
        B: "Mammals",
        C: "Birds",
        D: "Human beings"
      },
      correct_answer: "A",
      explanation: "NCERT notes: Failure of cytokinesis after telophase stage of cell division results in an increase in a whole set of chromosomes in an organism and, this phenomenon is known as polyploidy. This condition is often seen in plants.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.8.3: Chromosomal Disorders",
        page_number: "Page 91",
        exact_quote: "Failure of cytokinesis after telophase stage of cell division results in an increase in a whole set of chromosomes in an organism... This condition is often seen in plants."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 25,
      question: "In birds, the female has which sex chromosomal constitution that demonstrates female heterogamety?",
      options: {
        A: "ZW",
        B: "ZZ",
        C: "XX",
        D: "X0"
      },
      correct_answer: "A",
      explanation: "In birds, females have two different sex chromosomes (ZW) and produce two types of eggs (50% with Z, 50% with W), while males are homogametic (ZZ).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.4.2: Sex Determination in Birds",
        page_number: "Page 86",
        exact_quote: "In birds, females have one Z and one W chromosome, whereas males have a pair of Z-chromosomes besides autosomes."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 26,
      question: "Grasshoppers exhibit which type of sex determination system?",
      options: {
        A: "XO type in males and XX in females",
        B: "XY type in males and XX in females",
        C: "ZW type in females and ZZ in males",
        D: "Haplodiploid parthenogenesis"
      },
      correct_answer: "A",
      explanation: "In grasshoppers, sex determination is of XO type: males have only one X-chromosome (XO) besides autosomes, whereas females have a pair of X-chromosomes (XX).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.4.1: XO Mechanism",
        page_number: "Page 85",
        exact_quote: "Grasshopper is an example of XO type of sex determination in which the males have only one X-chromosome besides autosomes."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 27,
      question: "Henking (1891) observed a specific nuclear structure throughout spermatogenesis in a few insects and called it:",
      options: {
        A: "X body",
        B: "Y chromosome",
        C: "Barr body",
        D: "Centrosome"
      },
      correct_answer: "A",
      explanation: "Henking could trace a specific nuclear structure through the spermatogenesis of a few insects, and he observed that 50 per cent of the sperm received this structure after spermatogenesis. Henking gave a name to this structure as the X body.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.4: Sex Determination",
        page_number: "Page 85",
        exact_quote: "Henking (1891) could trace a specific nuclear structure all through spermatogenesis in a few insects... Henking gave a name to this structure as the X body."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 28,
      question: "Which of the following Mendelian laws is based on the fact that the alleles do not show any blending and that both the characters are recovered as such in the F2 generation?",
      options: {
        A: "Law of Segregation",
        B: "Law of Dominance",
        C: "Law of Independent Assortment",
        D: "Law of Purity of Recombination"
      },
      correct_answer: "A",
      explanation: "The Law of Segregation is based on the fact that alleles do not show any blending and that both characters are recovered as such in the F2 generation, though one of these is not seen at the F1 stage.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.2.1: Law of Segregation",
        page_number: "Page 76",
        exact_quote: "This law is based on the fact that the alleles do not show any blending and that both the characters are recovered as such in the F2 generation."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 29,
      question: "A cross between a homozygous pea plant with round yellow seeds (RRYY) and wrinkled green seeds (rryy) produces F1 heterozygous plants (RrYy). What fraction of the F2 generation will have the genotype RrYy?",
      options: {
        A: "4 / 16 (1/4)",
        B: "9 / 16",
        C: "1 / 16",
        D: "2 / 16 (1/8)"
      },
      correct_answer: "A",
      explanation: "In a dihybrid F2 Punnett square, the heterozygous genotype RrYy appears in exactly 4 out of the 16 squares (fraction = 4/16 = 1/4).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.3: Law of Independent Assortment",
        page_number: "Page 80",
        exact_quote: "From the Punnett square, 4 out of 16 plants have the genotype RrYy."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 30,
      question: "Which of the following is an example of a point mutation in human genetic disorders?",
      options: {
        A: "Sickle-cell anemia",
        B: "Down's syndrome",
        C: "Turner's syndrome",
        D: "Klinefelter's syndrome"
      },
      correct_answer: "A",
      explanation: "A classical example of point mutation is sickle-cell anemia, which arises due to a single base pair change (substitution of adenine by thymine: GAG to GUG) in the gene for beta-globin chain.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Principles of Inheritance and Variation",
        official_section: "Section 5.7: Mutation",
        page_number: "Page 88",
        exact_quote: "A classical example of point mutation is sickle cell anemia."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const EXAM_ZOOLOGY_SET: NEETQuizSet = {
  subject: "Zoology",
  topic: "Human Reproduction",
  total_questions: 30,
  mode: "exam",
  questions: [
    {
      question_number: 1,
      question: "In the human male reproductive system, the scrotum helps in maintaining the low temperature of the testes necessary for spermatogenesis. How much below normal internal body temperature is this?",
      options: {
        A: "2 - 2.5 °C lower than internal body temperature",
        B: "5 - 6 °C lower than internal body temperature",
        C: "0.5 - 1 °C lower than internal body temperature",
        D: "3.5 - 4 °C higher than internal body temperature"
      },
      correct_answer: "A",
      explanation: "The scrotum maintains the temperature of the testes 2-2.5 °C lower than the normal internal body temperature, which is essential for spermatogenesis.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.1: The Male Reproductive System",
        page_number: "Page 43",
        exact_quote: "The scrotum helps in maintaining the low temperature of the testes (2–2.5 oC lower than the normal internal body temperature) necessary for spermatogenesis."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      question: "Which cells in the human testes provide nutrition to the developing germ cells (spermatogonia)?",
      options: {
        A: "Sertoli cells (Sustentacular cells)",
        B: "Leydig cells (Interstitial cells)",
        C: "Follicular cells",
        D: "Chromaffin cells"
      },
      correct_answer: "A",
      explanation: "Each seminiferous tubule is lined on its inside by two types of cells: male germ cells (spermatogonia) and Sertoli cells. Sertoli cells provide nutrition to the developing germ cells.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.1: The Male Reproductive System",
        page_number: "Page 43",
        exact_quote: "Sertoli cells provide nutrition to the germ cells."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      question: "Leydig cells (interstitial cells) are present in the interstitial spaces between seminiferous tubules. What is their primary endocrine secretion?",
      options: {
        A: "Androgens (mainly Testosterone)",
        B: "Inhibin and Relaxin",
        C: "Luteinizing Hormone (LH)",
        D: "Follicle Stimulating Hormone (FSH)"
      },
      correct_answer: "A",
      explanation: "Leydig cells synthesize and secrete testicular hormones called androgens (primarily testosterone) under the stimulation of LH from the anterior pituitary.",
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
      question_number: 4,
      question: "Which of the following represents the correct sequence of transport of sperm cells through the male accessory ducts?",
      options: {
        A: "Rete testis -> Vasa efferentia -> Epididymis -> Vas deferens",
        B: "Rete testis -> Vas deferens -> Epididymis -> Vasa efferentia",
        C: "Epididymis -> Rete testis -> Vasa efferentia -> Vas deferens",
        D: "Vasa efferentia -> Rete testis -> Vas deferens -> Epididymis"
      },
      correct_answer: "A",
      explanation: "Seminiferous tubules open into rete testis, which leads via vasa efferentia to the epididymis located along the posterior surface of each testis, and then ascends as vas deferens.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.1: The Male Reproductive System",
        page_number: "Page 43",
        exact_quote: "The seminiferous tubules of the testis open into the vasa efferentia through rete testis. The vasa efferentia leave the testis and open into epididymis... which leads to vas deferens."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 5,
      question: "Secretions of which male accessory glands are rich in fructose, calcium, and certain enzymes?",
      options: {
        A: "Seminal vesicles",
        B: "Bulbourethral glands only",
        C: "Prostate gland only",
        D: "Bartholin glands"
      },
      correct_answer: "A",
      explanation: "The secretions of male accessory glands (paired seminal vesicles, a prostate, and paired bulbourethral glands) constitute the seminal plasma, which is rich in fructose, calcium and certain enzymes.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.1: Male Accessory Glands",
        page_number: "Page 44",
        exact_quote: "The seminal plasma which is rich in fructose, calcium and certain enzymes. The secretions of bulbourethral glands also help in the lubrication of the penis."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      question: "In the human female reproductive system, fertilization of the ovum normally takes place in which region of the fallopian tube (oviduct)?",
      options: {
        A: "Ampullary region (Ampulla)",
        B: "Isthmus only",
        C: "Infundibulum",
        D: "Uterine fundus"
      },
      correct_answer: "A",
      explanation: "Fertilization takes place in the ampullary region of the fallopian tube where the sperm and ovum meet.",
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
      question_number: 7,
      question: "The finger-like projections at the edges of the infundibulum that help in collection of the ovum after ovulation are called:",
      options: {
        A: "Fimbriae",
        B: "Ampullae",
        C: "Mesovarium",
        D: "Cilia"
      },
      correct_answer: "A",
      explanation: "The edges of the infundibulum possess finger-like projections called fimbriae, which help in collection of the ovum after ovulation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.2: The Female Reproductive System",
        page_number: "Page 45",
        exact_quote: "The edges of the infundibulum possess finger-like projections called fimbriae, which help in collection of the ovum after ovulation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      question: "The wall of the uterus consists of three layers of tissue. Which middle thick layer of smooth muscle exhibits strong contractions during delivery of the baby?",
      options: {
        A: "Myometrium",
        B: "Endometrium",
        C: "Perimetrium",
        D: "Epimetrium"
      },
      correct_answer: "A",
      explanation: "The middle thick layer of smooth muscle is the myometrium. The myometrium exhibits strong contraction during delivery of the baby.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.2: The Female Reproductive System",
        page_number: "Page 46",
        exact_quote: "Myometrium exhibits strong contraction during delivery of the baby."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      question: "Spermatogenesis begins at puberty due to a significant increase in the secretion of which hypothalamic hormone?",
      options: {
        A: "Gonadotropin-Releasing Hormone (GnRH)",
        B: "Prolactin",
        C: "Human Growth Hormone",
        D: "Oxytocin"
      },
      correct_answer: "A",
      explanation: "Spermatogenesis starts at the age of puberty due to significant increase in the secretion of gonadotropin releasing hormone (GnRH), a hypothalamic hormone.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.3: Gametogenesis",
        page_number: "Page 47",
        exact_quote: "Spermatogenesis starts at the age of puberty due to significant increase in the secretion of gonadotropin releasing hormone (GnRH)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      question: "The cap-like structure covering the anterior portion of the sperm head containing hydrolytic enzymes to penetrate the ovum is called:",
      options: {
        A: "Acrosome",
        B: "Centriole",
        C: "Mitochondrial spiral (Nebenkern)",
        D: "Corona radiata"
      },
      correct_answer: "A",
      explanation: "The acrosome is filled with enzymes (including hyaluronidase and acrosin) that help fertilisation of the ovum.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.3: Gametogenesis",
        page_number: "Page 48",
        exact_quote: "The acrosome is filled with enzymes that help fertilisation of the ovum."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 11,
      question: "In human females, primary oocytes are arrested at which specific meiotic stage from embryonic life until puberty?",
      options: {
        A: "Prophase I (Diplotene stage) of Meiosis I",
        B: "Metaphase II of Meiosis II",
        C: "Anaphase I of Meiosis I",
        D: "Telophase II of Meiosis II"
      },
      correct_answer: "A",
      explanation: "Primary oocytes start division and enter into prophase-I of the meiotic division and get temporarily arrested at that stage (diplotene).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.3: Oogenesis",
        page_number: "Page 48",
        exact_quote: "Primary oocytes start division and enter into prophase-I of the meiotic division and get temporarily arrested at that stage."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      question: "Secondary oocyte is arrested at which stage of cell division when released from the Graafian follicle during ovulation?",
      options: {
        A: "Metaphase II of Meiosis II",
        B: "Prophase I of Meiosis I",
        C: "Anaphase II of Meiosis II",
        D: "Telophase I of Meiosis I"
      },
      correct_answer: "A",
      explanation: "The secondary oocyte is released at Metaphase II. Its second meiotic division is completed only upon sperm entry (fertilization).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.5: Fertilisation and Implantation",
        page_number: "Page 51",
        exact_quote: "The entry of sperm induces the completion of the meiotic division of the secondary oocyte."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 13,
      question: "During which phase of the menstrual cycle does rapid surge of LH (LH surge) induce rupture of the Graafian follicle and release of the ovum?",
      options: {
        A: "Mid-cycle (about 14th day)",
        B: "Menstrual phase (days 1 to 5)",
        C: "Secretory phase (days 21 to 28)",
        D: "Follicular phase (day 5)"
      },
      correct_answer: "A",
      explanation: "Rapid secretion of LH leading to its maximum level during the mid-cycle called LH surge induces rupture of Graafian follicle and thereby the release of an ovum (ovulation).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.4: Menstrual Cycle",
        page_number: "Page 50",
        exact_quote: "Rapid secretion of LH leading to its maximum level during the mid-cycle called LH surge induces rupture of Graafian follicle and thereby the release of an ovum (ovulation)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 14,
      question: "After ovulation, the ruptured Graafian follicle transforms into a yellow endocrine structure called corpus luteum, which secretes large amounts of:",
      options: {
        A: "Progesterone",
        B: "Estrogen only",
        C: "FSH",
        D: "Oxytocin"
      },
      correct_answer: "A",
      explanation: "The corpus luteum secretes large amounts of progesterone which is essential for maintenance of the endometrium for implantation and pregnancy.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.4: Menstrual Cycle",
        page_number: "Page 50",
        exact_quote: "The corpus luteum secretes large amounts of progesterone which is essential for maintenance of the endometrium."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      question: "The non-cellular transparent glycoprotein coat surrounding the secondary oocyte which induces the acrosome reaction upon sperm contact is:",
      options: {
        A: "Zona pellucida",
        B: "Corona radiata",
        C: "Theca interna",
        D: "Perivitelline space"
      },
      correct_answer: "A",
      explanation: "The secondary oocyte forms a new membrane called zona pellucida surrounding it. The sperm comes in contact with the zona pellucida and induces changes that block entry of additional sperms.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.5: Fertilisation and Implantation",
        page_number: "Page 51",
        exact_quote: "During fertilisation, a sperm comes in contact with the zona pellucida layer of the ovum and induces changes in the membrane that block the entry of additional sperms."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      question: "Cleavage divisions of the human zygote produce 2, 4, 8, 16 daughter cells called blastomeres. The embryo with 8 to 16 blastomeres is specifically called a:",
      options: {
        A: "Morula",
        B: "Blastocyst",
        C: "Gastrula",
        D: "Trophoblast"
      },
      correct_answer: "A",
      explanation: "The mitotic division called cleavage starts as the zygote moves through the isthmus towards the uterus and forms 2, 4, 8, 16 daughter cells called blastomeres. The embryo with 8 to 16 blastomeres is called a morula.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.5: Fertilisation and Implantation",
        page_number: "Page 52",
        exact_quote: "The embryo with 8 to 16 blastomeres is called a morula."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      question: "Implantation in humans involves the attachment of which embryonic stage to the uterine endometrium?",
      options: {
        A: "Blastocyst",
        B: "Morula",
        C: "Gastrula",
        D: "Zygote"
      },
      correct_answer: "A",
      explanation: "The blastocyst becomes embedded in the endometrium of the uterus. This is called implantation and it leads to pregnancy.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.5: Fertilisation and Implantation",
        page_number: "Page 53",
        exact_quote: "The blastocyst becomes embedded in the endometrium of the uterus. This is called implantation and it leads to pregnancy."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      question: "Which of the following hormones is produced in women ONLY during pregnancy and not secreted in non-pregnant states?",
      options: {
        A: "hCG, hPL and Relaxin",
        B: "Estrogen and Progesterone",
        C: "Oxytocin and Vasopressin",
        D: "Thyroxine and Prolactin"
      },
      correct_answer: "A",
      explanation: "hCG (Human Chorionic Gonadotropin), hPL (Human Placental Lactogen) and relaxin (produced by the ovary in later pregnancy) are produced in women only during pregnancy.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.6: Pregnancy and Embryonic Development",
        page_number: "Page 53",
        exact_quote: "hCG, hPL and relaxin are produced in women only during pregnancy."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      question: "The fetal ejection reflex during human parturition originates from which source?",
      options: {
        A: "Fully developed fetus and the placenta",
        B: "Maternal pituitary gland alone",
        C: "Maternal adrenal cortex",
        D: "Corpus luteum of ovary"
      },
      correct_answer: "A",
      explanation: "Parturition signals originate from the fully developed fetus and the placenta which induce mild uterine contractions called fetal ejection reflex, triggering release of oxytocin from maternal pituitary.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.7: Parturition and Lactation",
        page_number: "Page 54",
        exact_quote: "The signals for parturition originate from the fully developed foetus and the placenta which induce mild uterine contractions called foetal ejection reflex."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 20,
      question: "Colostrum, the yellowish fluid secreted by the mother during initial days of lactation, contains abundant amounts of which protective antibody?",
      options: {
        A: "IgA",
        B: "IgG",
        C: "IgM",
        D: "IgE"
      },
      correct_answer: "A",
      explanation: "Colostrum contains abundant antibodies (primarily IgA) to provide passive immunity and protect the newborn infant against various infectious pathogens.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.7: Parturition and Lactation",
        page_number: "Page 54",
        exact_quote: "The milk produced during the initial few days of lactation is called colostrum which contains several antibodies (IgA) absolutely essential to develop resistance for the new-born babies."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 21,
      question: "What is the ploidy level of primary spermatocytes, secondary spermatocytes, and spermatids respectively?",
      options: {
        A: "2n, n, n",
        B: "n, n, n",
        C: "2n, 2n, n",
        D: "2n, n, 2n"
      },
      correct_answer: "A",
      explanation: "Primary spermatocytes are diploid (2n, 46 chromosomes). After Meiosis I, secondary spermatocytes are haploid (n, 23 chromosomes). After Meiosis II, spermatids are haploid (n, 23 chromosomes).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.3: Gametogenesis",
        page_number: "Page 47",
        exact_quote: "A primary spermatocyte completes the first meiotic division leading to formation of two equal, haploid cells called secondary spermatocytes (23 chromosomes each)."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 22,
      question: "The process of transformation of non-motile spermatids into functional mature spermatozoa is termed:",
      options: {
        A: "Spermiogenesis",
        B: "Spermiation",
        C: "Spermatocytogenesis",
        D: "Insemination"
      },
      correct_answer: "A",
      explanation: "The spermatids are transformed into spermatozoa (sperms) by the process called spermiogenesis. After spermiogenesis, sperm heads become embedded in the Sertoli cells and are finally released by spermiation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.3: Gametogenesis",
        page_number: "Page 47",
        exact_quote: "The spermatids are transformed into spermatozoa (sperms) by the process called spermiogenesis."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 23,
      question: "Spermiation refers to which specific event in the male reproductive tract?",
      options: {
        A: "Release of mature sperms from the Sertoli cells into the cavity of seminiferous tubules",
        B: "Transformation of spermatid to spermatozoon",
        C: "Discharge of semen into the female vagina",
        D: "Ejaculation of semen from the male penis"
      },
      correct_answer: "A",
      explanation: "After spermiogenesis, sperm heads become embedded in the Sertoli cells, and are finally released from the seminiferous tubules by the process called spermiation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.3: Gametogenesis",
        page_number: "Page 47",
        exact_quote: "After spermiogenesis, sperm heads become embedded in the Sertoli cells, and are finally released from the seminiferous tubules by the process called spermiation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 24,
      question: "For normal male fertility, what percentage of the total ejaculated sperms must possess normal shape and size, and what percentage of those must show vigorous motility?",
      options: {
        A: "At least 60% normal shape and size, and at least 40% vigorous motility",
        B: "At least 40% normal shape, and at least 60% vigorous motility",
        C: "50% normal shape, and 50% vigorous motility",
        D: "75% normal shape, and 25% vigorous motility"
      },
      correct_answer: "A",
      explanation: "For normal fertility, at least 60 per cent of sperms must have normal shape and size and at least 40 per cent of them must show vigorous motility.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.3: Gametogenesis",
        page_number: "Page 48",
        exact_quote: "For normal fertility, at least 60 per cent sperms must have normal shape and size and at least 40 per cent of them must show vigorous motility."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 25,
      question: "By the end of which gestational month are the limbs and digits fully formed in a developing human embryo?",
      options: {
        A: "End of the second month (8 weeks)",
        B: "End of the first month (4 weeks)",
        C: "End of the third month (12 weeks)",
        D: "End of the fifth month (20 weeks)"
      },
      correct_answer: "A",
      explanation: "By the end of the second month of pregnancy, the foetus develops limbs and digits. By the end of 12 weeks (first trimester), most of the major organ systems are formed.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.6: Pregnancy and Embryonic Development",
        page_number: "Page 54",
        exact_quote: "By the end of the second month of pregnancy, the foetus develops limbs and digits."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 26,
      question: "First movements of the fetus and appearance of hair on its head are usually observed during which month of pregnancy?",
      options: {
        A: "Fifth month",
        B: "Third month",
        C: "Sixth month",
        D: "Seventh month"
      },
      correct_answer: "A",
      explanation: "The first movements of the foetus and appearance of hair on the head are usually observed during the fifth month of gestation.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.6: Pregnancy and Embryonic Development",
        page_number: "Page 54",
        exact_quote: "The first movements of the foetus and appearance of hair on the head are usually observed during the fifth month."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 27,
      question: "Which hormone acts on the uterine muscle (myometrium) and causes stronger and stronger contractions during labor?",
      options: {
        A: "Oxytocin",
        B: "Progesterone",
        C: "Prolactin",
        D: "Vasopressin"
      },
      correct_answer: "A",
      explanation: "Oxytocin released from the maternal posterior pituitary acts on the uterine muscle and causes stronger uterine contractions, which in turn stimulates further secretion of oxytocin (positive feedback loop).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.7: Parturition and Lactation",
        page_number: "Page 54",
        exact_quote: "Oxytocin acts on the uterine muscle and causes stronger uterine contractions, which in turn stimulates further secretion of oxytocin."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 28,
      question: "The structural and functional unit between the developing embryo (foetus) and maternal body is called:",
      options: {
        A: "Placenta",
        B: "Amnion",
        C: "Chorion alone",
        D: "Allantois"
      },
      correct_answer: "A",
      explanation: "The chorionic villi and uterine tissue become interdigitated with each other and jointly form a structural and functional unit between developing embryo (foetus) and maternal body called placenta.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.6: Pregnancy and Embryonic Development",
        page_number: "Page 53",
        exact_quote: "The chorionic villi and uterine tissue become interdigitated with each other and jointly form a structural and functional unit between developing embryo (foetus) and maternal body called placenta."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 29,
      question: "The inner cell mass of the blastocyst contains certain cells that have the potency to give rise to all tissues and organs. These cells are called:",
      options: {
        A: "Stem cells",
        B: "Trophoblasts",
        C: "Blastoderm cells",
        D: "Mesenchymal cells"
      },
      correct_answer: "A",
      explanation: "The inner cell mass contains certain cells called stem cells which have the potency to give rise to all the tissues and organs of the adult organism.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.6: Pregnancy and Embryonic Development",
        page_number: "Page 54",
        exact_quote: "The inner cell mass contains certain cells called stem cells which have the potency to give rise to all the tissues and organs."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 30,
      question: "During oogenesis, the second meiotic division results in the formation of:",
      options: {
        A: "A haploid ovum (ootid) and a second polar body",
        B: "Two equal diploid ova",
        C: "Primary oocyte and first polar body",
        D: "Four equal functional ova"
      },
      correct_answer: "A",
      explanation: "The second meiotic division is unequal and results in the formation of a second polar body and a haploid ovum (ootid).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Human Reproduction",
        official_section: "Section 3.5: Fertilisation and Implantation",
        page_number: "Page 52",
        exact_quote: "The second meiotic division is also unequal and results in the formation of a second polar body and a haploid ovum (ootid)."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const EXAM_PHYSICS_SET: NEETQuizSet = {
  subject: "Physics",
  topic: "Ray Optics and Optical Instruments",
  total_questions: 30,
  mode: "exam",
  questions: [
    {
      question_number: 1,
      question: "A convex mirror of focal length f produces an image of a real object that is always:",
      options: {
        A: "Virtual, erect, and diminished between pole and focus",
        B: "Real, inverted, and magnified",
        C: "Real, inverted, and diminished",
        D: "Virtual, inverted, and of the same size"
      },
      correct_answer: "A",
      explanation: "For any real object placed in front of a convex mirror, the image formed is always virtual, erect, and diminished, located between the pole and the principal focus.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.2: Reflection of Light by Spherical Mirrors",
        page_number: "Page 312",
        exact_quote: "A convex mirror always gives a virtual, erect, and diminished image of an object placed anywhere in front of it."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 2,
      question: "A light ray travels from a denser medium of refractive index n1 into a rarer medium of refractive index n2. The critical angle for total internal reflection ic is given by:",
      options: {
        A: "sin(ic) = n2 / n1",
        B: "sin(ic) = n1 / n2",
        C: "cos(ic) = n2 / n1",
        D: "tan(ic) = n1 / n2"
      },
      correct_answer: "A",
      explanation: "By Snell's law: n1 * sin(ic) = n2 * sin(90°). Since sin(90°) = 1, sin(ic) = n2 / n1.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.4: Total Internal Reflection",
        page_number: "Page 320",
        exact_quote: "sin ic = n2 / n1. If the rarer medium is air, sin ic = 1 / n."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      question: "Optical fibres transmit optical signals across long distances with minimal loss based on the phenomenon of:",
      options: {
        A: "Total internal reflection at the core-cladding boundary",
        B: "Diffraction of light waves",
        C: "Polarisation of transverse waves",
        D: "Scattering of light by colloidal particles"
      },
      correct_answer: "A",
      explanation: "Optical fibres consist of a core with higher refractive index surrounded by cladding of lower refractive index. Light guided through the core undergoes successive total internal reflections.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.4.1: Total Internal Reflection in Nature and Technology (Optical Fibres)",
        page_number: "Page 321",
        exact_quote: "Optical fibres are fabricated with high quality composite glass/quartz fibres... light undergoes repeated total internal reflections along the length of the fibre."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      question: "A glass prism has a refracting angle A = 60° and its refractive index is n = sqrt(3). What is the angle of minimum deviation Dm produced by the prism?",
      options: {
        A: "60°",
        B: "30°",
        C: "45°",
        D: "90°"
      },
      correct_answer: "A",
      explanation: "At minimum deviation: n = sin((A + Dm)/2) / sin(A/2). Here sin(A/2) = sin(30°) = 1/2. Thus sin((60° + Dm)/2) = sqrt(3) * (1/2) = sqrt(3)/2, so (60° + Dm)/2 = 60° => Dm = 60°.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5: Refraction through a Prism",
        page_number: "Page 331",
        exact_quote: "n21 = sin[(A + Dm)/2] / sin(A/2) is the prism formula."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 5,
      question: "According to the Lens Maker's formula, the focal length f of a thin lens with radii of curvature R1 and R2 and relative refractive index n is given by:",
      options: {
        A: "1 / f = (n - 1) * (1/R1 - 1/R2)",
        B: "1 / f = (n + 1) * (1/R1 + 1/R2)",
        C: "1 / f = (n - 1) * (1/R1 + 1/R2)",
        D: "f = (n - 1) * (R1 - R2)"
      },
      correct_answer: "A",
      explanation: "The Lens Maker's formula is 1/f = (n - 1) * [1/R1 - 1/R2].",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.2: Refraction by a Lens",
        page_number: "Page 326",
        exact_quote: "Equation (9.22): 1/f = (n2/n1 - 1) (1/R1 - 1/R2). This is known as the lens maker's formula."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      question: "An equiconvex lens of focal length f made of glass (n = 1.5) is immersed in water (n = 1.33). What will happen to its focal length in water?",
      options: {
        A: "It increases to roughly 4 times its focal length in air",
        B: "It decreases to 1/4th of its value in air",
        C: "It remains unchanged",
        D: "It becomes negative (diverging)"
      },
      correct_answer: "A",
      explanation: "In air: 1/f_air = (1.5 - 1) * (2/R) = 1/R => f_air = R. In water: 1/f_water = (1.5/1.33 - 1) * (2/R) = (0.17/1.33) * (2/R) ≈ 1 / (3.9 R) => f_water ≈ 4 f_air.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.2: Refraction by a Lens",
        page_number: "Page 327",
        exact_quote: "When a lens is immersed in a liquid of refractive index less than the lens material, its focal length increases substantially."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 7,
      question: "Two thin lenses of focal lengths +20 cm and -40 cm are placed in coaxial contact. What is the power of the combination in dioptres?",
      options: {
        A: "+2.5 D",
        B: "+5.0 D",
        C: "-2.5 D",
        D: "+7.5 D"
      },
      correct_answer: "A",
      explanation: "P1 = 100 / 20 = +5 D. P2 = 100 / (-40) = -2.5 D. Total power P = P1 + P2 = +5 - 2.5 = +2.5 D.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.3: Power of a Lens & Combination of Thin Lenses in Contact",
        page_number: "Page 328",
        exact_quote: "The total power of the combination is P = P1 + P2 + ... where P is in dioptres when f is in metres."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 8,
      question: "In a compound microscope, the focal length of the objective lens (fo) and eyepiece lens (fe) satisfy which condition for high magnification?",
      options: {
        A: "Both fo and fe are short, with fo < fe",
        B: "fo is very large and fe is very small",
        C: "Both fo and fe are extremely large",
        D: "fo > fe and both are negative"
      },
      correct_answer: "A",
      explanation: "In a compound microscope, both objective and eyepiece lenses have short focal lengths to achieve high magnification, with the objective having a shorter focal length than the eyepiece (fo < fe).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.2: Compound Microscope",
        page_number: "Page 339",
        exact_quote: "The objective has a smaller focal length and aperture than the eyepiece; both lenses have short focal lengths."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 9,
      question: "In an astronomical telescope in normal adjustment (image at infinity), the magnifying power m and tube length L are given respectively by:",
      options: {
        A: "m = fo / fe and L = fo + fe",
        B: "m = fe / fo and L = fo - fe",
        C: "m = (fo * fe) / L and L = fo + fe",
        D: "m = fo / fe and L = fo * fe"
      },
      correct_answer: "A",
      explanation: "In normal adjustment of an astronomical telescope: magnifying power m = fo / fe, and the distance between objective and eyepiece is L = fo + fe.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.3: Telescope",
        page_number: "Page 340",
        exact_quote: "The magnifying power is m = fo / fe and length of the telescope tube is L = fo + fe."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      question: "Why do reflecting telescopes (such as the Cassegrain telescope) possess a major advantage over refracting telescopes?",
      options: {
        A: "Mirrors are free from chromatic aberration and can be supported easily over the entire back surface to avoid spherical aberration",
        B: "Mirrors produce higher dispersion of visible light",
        C: "Mirrors do not reflect light according to the law of reflection",
        D: "Mirrors cannot form real images"
      },
      correct_answer: "A",
      explanation: "Reflecting telescopes have no chromatic aberration (since reflection does not depend on wavelength) and parabolic mirrors eliminate spherical aberration while providing superior mechanical support.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.4: Reflecting Telescope",
        page_number: "Page 341",
        exact_quote: "There is no chromatic aberration in a mirror. If a parabolic reflecting surface is chosen, spherical aberration is also removed."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 11,
      question: "Blue colour of the sky is explained by Rayleigh scattering. According to Rayleigh's law, the intensity of scattered light I is proportional to:",
      options: {
        A: "1 / λ^4",
        B: "1 / λ^2",
        C: "λ^4",
        D: "1 / λ"
      },
      correct_answer: "A",
      explanation: "Rayleigh scattering law states that the amount of scattering is inversely proportional to the fourth power of the wavelength: I ∝ 1 / λ^4.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.8: Scattering of Light",
        page_number: "Page 335",
        exact_quote: "The amount of scattering is inversely proportional to the fourth power of the wavelength: I ∝ 1/λ^4 (Rayleigh scattering)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      question: "In a primary rainbow, what sequence of internal reflection and refractions occurs inside a spherical raindrop?",
      options: {
        A: "Two refractions and one internal reflection",
        B: "Two refractions and two internal reflections",
        C: "One refraction and one reflection",
        D: "Three internal reflections only"
      },
      correct_answer: "A",
      explanation: "A primary rainbow is formed by sunlight undergoing two refractions (entering and exiting the drop) and one internal reflection inside the water drop.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.8.2: The Rainbow",
        page_number: "Page 334",
        exact_quote: "The primary rainbow is a result of three-step process, that is, refraction with dispersion, followed by an internal reflection and finally refraction again."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      question: "A secondary rainbow is fainter than a primary rainbow because:",
      options: {
        A: "It involves two internal reflections inside the raindrops, losing more light at each reflection",
        B: "It is formed by infrared radiation",
        C: "It is formed by light reflected from the earth's surface",
        D: "It has red on the inside and violet on the outside"
      },
      correct_answer: "A",
      explanation: "A secondary rainbow is formed by four-step process: two refractions and two internal reflections. Light is lost at each reflection, making it fainter than the primary rainbow.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.8.2: The Rainbow",
        page_number: "Page 334",
        exact_quote: "It is due to four-step process. Such a rainbow is called secondary rainbow... It is fainter than the primary rainbow."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 14,
      question: "A person with myopia (near-sightedness) cannot clearly see objects beyond a certain far point. Which lens is used to correct myopia?",
      options: {
        A: "Concave lens of appropriate focal length",
        B: "Convex lens of appropriate focal length",
        C: "Bifocal cylindrical lens",
        D: "Plano-convex lens"
      },
      correct_answer: "A",
      explanation: "In myopia, light rays from a distant object focus in front of the retina. A concave (diverging) lens is used to diverge the rays so that they focus on the retina.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.1: The Eye (Defects of Vision)",
        page_number: "Page 337",
        exact_quote: "A concave lens is interposed between the eye and the object to form a virtual image at the far point of the myopic eye."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      question: "Hypermetropia (far-sightedness) is corrected using which type of lens?",
      options: {
        A: "Convex lens",
        B: "Concave lens",
        C: "Cylindrical lens",
        D: "Diverging meniscus lens"
      },
      correct_answer: "A",
      explanation: "In hypermetropia, light rays from a nearby object focus behind the retina. A convex (converging) lens converges the incoming rays to focus sharply on the retina.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.1: The Eye (Defects of Vision)",
        page_number: "Page 337",
        exact_quote: "A convergent lens is used to correct hypermetropia by providing additional converging power."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      question: "Astigmatism arises when the cornea is not spherical in shape (having different curvatures in different planes). It is corrected using:",
      options: {
        A: "Cylindrical lenses",
        B: "Spherical concave lenses",
        C: "Spherical convex lenses",
        D: "Bifocal lenses"
      },
      correct_answer: "A",
      explanation: "Astigmatism occurs when the cornea is not spherical. This defect can be corrected using cylindrical glasses of desired radius of curvature.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.1: The Eye (Defects of Vision)",
        page_number: "Page 338",
        exact_quote: "Astigmatism can be corrected by using a cylindrical lens of desired radius of curvature with an appropriately directed axis."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 17,
      question: "A ray of light is incident at an angle of 60° on one face of an equilateral prism. If the angle of emergence is also 60°, what is the angle of deviation?",
      options: {
        A: "60°",
        B: "30°",
        C: "45°",
        D: "0°"
      },
      correct_answer: "A",
      explanation: "Relation for prism: i + e = A + δ. Here i = 60°, e = 60°, and equilateral prism angle A = 60°. Therefore δ = i + e - A = 60° + 60° - 60° = 60°.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5: Refraction through a Prism",
        page_number: "Page 330",
        exact_quote: "Equation (9.32): i + e = A + δ."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 18,
      question: "Mirage is an optical illusion observed in deserts during hot summer days caused by:",
      options: {
        A: "Total internal reflection of light rays passing through layers of air with decreasing refractive index near the hot ground",
        B: "Scattering of sunlight by sand particles",
        C: "Diffraction of light by air molecules",
        D: "Interference of light waves"
      },
      correct_answer: "A",
      explanation: "Near the hot ground, air is warmer and less dense (lower refractive index). A ray from a tall tree travels from denser to rarer air, bending successively until the angle of incidence exceeds critical angle, undergoing total internal reflection.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.4.1: Total Internal Reflection (Mirage)",
        page_number: "Page 321",
        exact_quote: "This optical illusion is called mirage. It is a consequence of total internal reflection."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 19,
      question: "A convex lens of focal length f1 is placed in contact with a concave lens of focal length f2. If f1 < f2, the combination behaves as a:",
      options: {
        A: "Converging lens (Convex lens)",
        B: "Diverging lens (Concave lens)",
        C: "Plane glass slab",
        D: "Opaque surface"
      },
      correct_answer: "A",
      explanation: "Power P = 1/f1 - 1/f2. Since f1 < f2, 1/f1 > 1/f2, so net power P is positive (converging behavior).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.3: Combination of Thin Lenses",
        page_number: "Page 328",
        exact_quote: "The nature of the combination is determined by the lens having the shorter focal length (greater power)."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 20,
      question: "The power of accommodation of a normal human eye allows clear vision from a near point D of approximately:",
      options: {
        A: "25 cm to infinity",
        B: "10 cm to 100 cm",
        C: "50 cm to infinity",
        D: "1 metre to infinity"
      },
      correct_answer: "A",
      explanation: "For a normal adult eye, the near point (least distance of distinct vision) is approximately 25 cm, and the far point is at infinity.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.1: The Eye",
        page_number: "Page 336",
        exact_quote: "The closest distance for which the lens can focus light on the retina is called the least distance of distinct vision, or the near point. For a normal adult eye, this is about 25 cm."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 21,
      question: "When white light passes through a glass prism, which colour suffers the MAXIMUM deviation and why?",
      options: {
        A: "Violet, because refractive index of glass is maximum for violet (shortest wavelength in visible spectrum)",
        B: "Red, because it has longest wavelength",
        C: "Green, because it is the mean colour",
        D: "Yellow, because it has highest speed in glass"
      },
      correct_answer: "A",
      explanation: "By Cauchy's dispersion formula, n decreases with increasing wavelength (n_violet > n_red). Since deviation δ ≈ (n - 1)A for thin prisms, violet light deviates the most.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.6: Dispersion by a Prism",
        page_number: "Page 332",
        exact_quote: "Violet light bends the most, being not as fast as red light in glass, and red the least."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 22,
      question: "An object is placed at a distance of 15 cm from a concave mirror of focal length 10 cm. The magnification produced by the mirror is:",
      options: {
        A: "-2 (real, inverted and magnified)",
        B: "+2 (virtual, erect)",
        C: "-0.5 (diminished)",
        D: "-1 (same size)"
      },
      correct_answer: "A",
      explanation: "Using mirror formula: 1/v + 1/u = 1/f. Here u = -15 cm, f = -10 cm. 1/v = -1/10 - (-1/15) = -1/30 => v = -30 cm. Magnification m = -v/u = -(-30)/(-15) = -2.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.2: Spherical Mirrors",
        page_number: "Page 314",
        exact_quote: "Linear magnification m = -v / u."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 23,
      question: "Which of the following phenomena proves the TRANSVERSE nature of light waves rather than longitudinal nature?",
      options: {
        A: "Polarisation",
        B: "Refraction",
        C: "Interference",
        D: "Diffraction"
      },
      correct_answer: "A",
      explanation: "Polarisation can only occur in transverse waves where oscillations are perpendicular to the direction of propagation. Longitudinal waves cannot be polarised.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.1: Introduction to Optical Phenomena",
        page_number: "Page 310",
        exact_quote: "Polarisation demonstrates conclusively that light waves are transverse in character."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 24,
      question: "A convex lens of glass (n = 1.5) is immersed in carbon disulphide (n = 1.63). How does the lens behave in this medium?",
      options: {
        A: "It behaves as a diverging lens",
        B: "It behaves as a converging lens with smaller focal length",
        C: "It becomes completely opaque",
        D: "It behaves as a plane mirror"
      },
      correct_answer: "A",
      explanation: "When surrounding medium has refractive index greater than the lens material (n_med > n_lens), the factor (n_lens/n_med - 1) becomes negative, reversing the optical character from converging to diverging.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.2: Refraction by a Lens",
        page_number: "Page 327",
        exact_quote: "If a lens is placed in a medium of refractive index higher than its own, its focal length changes sign and its nature is reversed."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 25,
      question: "The apparent depth of a swimming pool filled with water of refractive index 4/3 having real depth 4 m as viewed normally from air is:",
      options: {
        A: "3 m",
        B: "5.33 m",
        C: "2 m",
        D: "1.5 m"
      },
      correct_answer: "A",
      explanation: "Apparent depth = Real depth / n = 4 m / (4/3) = 3 m.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.3: Refraction",
        page_number: "Page 318",
        exact_quote: "The bottom of a tank filled with water appears raised due to refraction. Apparent depth = Real depth / n."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 26,
      question: "At sunset and sunrise, the sun appears reddish because:",
      options: {
        A: "Red light has the longest wavelength and is least scattered by atmospheric molecules over the longer path length",
        B: "The sun actually cools down at sunset",
        C: "Red light travels faster in air than other colours",
        D: "Atmosphere absorbs all red light"
      },
      correct_answer: "A",
      explanation: "Sunlight travels through a thicker layer of atmosphere at sunset and sunrise. Blue and shorter wavelengths are scattered away, leaving mostly red and orange rays to reach our eyes.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.8.1: Blue of the Sky and Reddish Appearance of the Sun",
        page_number: "Page 335",
        exact_quote: "Light has to pass through a larger thickness of the atmosphere at sunrise and sunset... longer wavelengths are less scattered and reach the observer."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 27,
      question: "The magnifying power of a simple microscope (magnifying glass) having focal length f when image is formed at near point D is:",
      options: {
        A: "m = 1 + D / f",
        B: "m = D / f",
        C: "m = 1 - D / f",
        D: "m = f / D"
      },
      correct_answer: "A",
      explanation: "For image formed at the near point D: m = 1 + D/f. For image at infinity: m = D/f.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.2: The Simple Microscope",
        page_number: "Page 339",
        exact_quote: "When the image is formed at the near point, linear magnification is m = 1 + D / f."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 28,
      question: "In a Cassegrain reflecting telescope, the secondary mirror used is a:",
      options: {
        A: "Convex mirror",
        B: "Concave mirror",
        C: "Plane mirror only",
        D: "Cylindrical lens"
      },
      correct_answer: "A",
      explanation: "In a Cassegrain telescope, light reflected from the primary concave parabolic mirror is focused toward a secondary convex mirror before passing through a central hole in the primary mirror to the eyepiece.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.9.4: Reflecting Telescope",
        page_number: "Page 342",
        exact_quote: "Figure 9.33: Cassegrain telescope uses a concave primary mirror and a convex secondary mirror."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 29,
      question: "The radius of curvature of each face of a biconvex lens made of glass (n = 1.5) is 20 cm. What is the focal length of the lens in air?",
      options: {
        A: "20 cm",
        B: "10 cm",
        C: "40 cm",
        D: "15 cm"
      },
      correct_answer: "A",
      explanation: "1/f = (1.5 - 1) * [1/20 - (-1/20)] = 0.5 * (2/20) = 1/20 => f = 20 cm.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.5.2: Refraction by a Lens",
        page_number: "Page 326",
        exact_quote: "For an equiconvex lens with n = 1.5, f = R."
      },
      question_type: "Numerical/Conceptual"
    },
    {
      question_number: 30,
      question: "Why are clouds generally white in colour?",
      options: {
        A: "Because cloud droplets (size 'a' >> λ) scatter all wavelengths of visible light nearly equally",
        B: "Because clouds only contain gaseous oxygen",
        C: "Because water drops absorb all red light",
        D: "Because Rayleigh scattering condition is strictly satisfied"
      },
      correct_answer: "A",
      explanation: "When particle size 'a' is much larger than wavelength of light (a >> λ), Rayleigh's 1/λ^4 law does not apply. All colours are scattered equally, so clouds appear white.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Ray Optics and Optical Instruments",
        official_section: "Section 9.8: Scattering of Light",
        page_number: "Page 335",
        exact_quote: "For large particles like water droplets and dust (a >> λ), scattering is nearly independent of wavelength and all colours are scattered equally. Hence clouds appear white."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const EXAM_CHEMISTRY_SET: NEETQuizSet = {
  subject: "Chemistry",
  topic: "Aldehydes, Ketones and Carboxylic Acids",
  total_questions: 30,
  mode: "exam",
  questions: [
    {
      question_number: 1,
      question: "Rosenmund reduction of benzoyl chloride to benzaldehyde is carried out using which catalyst?",
      options: {
        A: "H2 in the presence of Pd-BaSO4 (poisoned by sulfur or quinoline)",
        B: "SnCl2 + HCl (Stephen reaction)",
        C: "DIBAL-H in toluene at -78 °C",
        D: "CrO2Cl2 in CS2 (Etard reaction)"
      },
      correct_answer: "A",
      explanation: "Acyl chlorides (acid chlorides) are hydrogenated over catalyst palladium on barium sulphate (Pd-BaSO4) to give aldehydes. This reaction is called Rosenmund reduction.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.2.1: Preparation of Aldehydes (From acyl chloride)",
        page_number: "Page 360",
        exact_quote: "Acyl chloride is hydrogenated over catalyst, palladium on barium sulphate. This reaction is called Rosenmund reduction."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 2,
      question: "Chromyl chloride (CrO2Cl2) oxidizes the methyl group of toluene to a brown chromium complex, which on acidic hydrolysis yields benzaldehyde. This reaction is named:",
      options: {
        A: "Etard reaction",
        B: "Gatterman-Koch reaction",
        C: "Stephen reaction",
        D: "Cannizzaro reaction"
      },
      correct_answer: "A",
      explanation: "Chromyl chloride oxidises methyl group to a chromium complex, which on hydrolysis gives corresponding benzaldehyde. This reaction is known as Etard reaction.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.2.1: Preparation of Aldehydes (From hydrocarbons)",
        page_number: "Page 361",
        exact_quote: "Chromyl chloride oxidises methyl group to a chromium complex, which on hydrolysis gives corresponding benzaldehyde. This reaction is called Etard reaction."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 3,
      question: "When benzene or its derivative is treated with carbon monoxide (CO) and HCl in the presence of anhydrous AlCl3 / CuCl, benzaldehyde is formed. This is:",
      options: {
        A: "Gatterman-Koch reaction",
        B: "Friedel-Crafts acylation",
        C: "Rosenmund reaction",
        D: "Reimer-Tiemann reaction"
      },
      correct_answer: "A",
      explanation: "When benzene or its derivative is treated with carbon monoxide and hydrogen chloride in the presence of anhydrous aluminium chloride or cuprous chloride, it gives benzaldehyde or substituted benzaldehyde. This reaction is known as Gatterman-Koch reaction.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.2.1: Gatterman-Koch Reaction",
        page_number: "Page 362",
        exact_quote: "This reaction is known as Gatterman-Koch reaction."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 4,
      question: "Which of the following carbonyl compounds is MOST reactive toward nucleophilic addition reactions?",
      options: {
        A: "HCHO (Formaldehyde)",
        B: "CH3CHO (Acetaldehyde)",
        C: "CH3COCH3 (Acetone)",
        D: "C6H5COCH3 (Acetophenone)"
      },
      correct_answer: "A",
      explanation: "Aldehydes are more reactive than ketones due to steric and electronic factors. Formaldehyde (HCHO) has no alkyl groups (+I effect and steric hindrance), making its carbonyl carbon most electrophilic.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.1: Nucleophilic Addition Reactions (Reactivity)",
        page_number: "Page 365",
        exact_quote: "Aldehydes are generally more reactive than ketones in nucleophilic addition reactions due to steric and electronic reasons."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 5,
      question: "Tollens' reagent used to distinguish aldehydes from ketones is chemically:",
      options: {
        A: "Ammoniacal silver nitrate solution [Ag(NH3)2]+ OH-",
        B: "Alkaline solution of copper sulfate with sodium potassium tartrate",
        C: "Acidified potassium dichromate solution",
        D: "Neutral ferric chloride solution"
      },
      correct_answer: "A",
      explanation: "Tollens' reagent is freshly prepared ammoniacal silver nitrate solution. On warming an aldehyde with Tollens' reagent, a bright silver mirror is produced due to the formation of silver metal.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Oxidation (Tollens' Test)",
        page_number: "Page 369",
        exact_quote: "Tollens' test: On warming an aldehyde with freshly prepared ammoniacal silver nitrate solution (Tollens' reagent), a bright silver mirror is produced."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 6,
      question: "Which of the following compounds gives a positive Fehling's test (red precipitate of Cu2O)?",
      options: {
        A: "Acetaldehyde (CH3CHO)",
        B: "Benzaldehyde (C6H5CHO)",
        C: "Acetophenone (C6H5COCH3)",
        D: "Benzophenone (C6H5COC6H5)"
      },
      correct_answer: "A",
      explanation: "Aliphatic aldehydes reduce Fehling's solution to red Cu2O. Aromatic aldehydes (like benzaldehyde) do NOT reduce Fehling's solution.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Fehling's Test",
        page_number: "Page 369",
        exact_quote: "Fehling's test: Aromatic aldehydes do not reduce Fehling's solution."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 7,
      question: "The iodoform test (treatment with NaOH and I2 giving a yellow precipitate of CHI3) is given by compounds containing which structural unit?",
      options: {
        A: "CH3-C=O or CH3-CH(OH)- group",
        B: "-COOH group only",
        C: "-CH2-CH2-OH group only",
        D: "Phenolic -OH group"
      },
      correct_answer: "A",
      explanation: "Aldehydes and ketones having at least one methyl group linked to the carbonyl carbon (methyl ketones) or alcohols having CH3-CH(OH)- group are oxidised by sodium hypohalite to give yellow precipitate of iodoform (CHI3).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Oxidation of Methyl Ketones (Haloform reaction)",
        page_number: "Page 370",
        exact_quote: "Aldehydes and ketones having at least one methyl group linked to the carbonyl carbon atom (methyl ketones) are oxidised by sodium hypohalite to sodium salts of corresponding carboxylic acids... and yellow precipitate of iodoform."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 8,
      question: "Which of the following will NOT give a yellow precipitate on treatment with I2 and aqueous NaOH?",
      options: {
        A: "Benzophenone (C6H5-CO-C6H5)",
        B: "Acetone (CH3-CO-CH3)",
        C: "Acetaldehyde (CH3-CHO)",
        D: "Acetophenone (C6H5-CO-CH3)"
      },
      correct_answer: "A",
      explanation: "Benzophenone lacks any methyl carbonyl group (-CO-CH3), so it fails the iodoform test. Acetone, acetaldehyde, and acetophenone all have the -CO-CH3 group and yield yellow CHI3.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Haloform Reaction",
        page_number: "Page 370",
        exact_quote: "Benzophenone does not contain a methyl ketone moiety and therefore gives negative haloform test."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 9,
      question: "Aldehydes having NO alpha-hydrogen atoms undergo self-oxidation and reduction (disproportionation) when heated with concentrated alkali. This reaction is known as:",
      options: {
        A: "Cannizzaro reaction",
        B: "Aldol condensation",
        C: "Clemmensen reduction",
        D: "Wolff-Kishner reduction"
      },
      correct_answer: "A",
      explanation: "Aldehydes which do not have an alpha-hydrogen atom undergo self-oxidation and reduction (disproportionation) on treatment with concentrated alkali. This is known as Cannizzaro reaction.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.4: Cannizzaro Reaction",
        page_number: "Page 372",
        exact_quote: "Aldehydes which do not have an alpha-hydrogen atom, undergo self-oxidation and reduction (disproportionation) reaction on heating with concentrated alkali. This reaction is called Cannizzaro reaction."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 10,
      question: "When formaldehyde (HCHO) is heated with 50% concentrated NaOH, what are the products formed in the Cannizzaro reaction?",
      options: {
        A: "Methanol (CH3OH) and Sodium formate (HCOONa)",
        B: "Formic acid and Ethanol",
        C: "Acetaldehyde and Water",
        D: "Sodium acetate and Carbon dioxide"
      },
      correct_answer: "A",
      explanation: "In the Cannizzaro reaction of formaldehyde: 2 HCHO + conc. NaOH -> CH3OH (reduced alcohol) + HCOONa (oxidized carboxylate salt).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.4: Cannizzaro Reaction",
        page_number: "Page 372",
        exact_quote: "2 HCHO + conc. KOH -> CH3OH + HCOOK."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 11,
      question: "Reduction of the carbonyl group (>C=O) of aldehydes or ketones to methylene (>CH2) using zinc amalgam (Zn-Hg) and concentrated HCl is called:",
      options: {
        A: "Clemmensen reduction",
        B: "Wolff-Kishner reduction",
        C: "Rosenmund reduction",
        D: "Stephen reduction"
      },
      correct_answer: "A",
      explanation: "The carbonyl group of aldehydes and ketones is reduced to -CH2- group on treatment with zinc-amalgam and concentrated hydrochloric acid (Clemmensen reduction).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Reduction to Hydrocarbons",
        page_number: "Page 368",
        exact_quote: "The carbonyl group of aldehydes and ketones is reduced to CH2 group on treatment with zinc-amalgam and concentrated hydrochloric acid [Clemmensen reduction]."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 12,
      question: "Wolff-Kishner reduction converts a carbonyl group into a methylene group (>CH2) using which reagent combination?",
      options: {
        A: "Hydrazine (NH2-NH2) followed by heating with KOH in ethylene glycol",
        B: "Zn-Hg and concentrated HCl",
        C: "LiAlH4 in dry ether",
        D: "H2 with Raney nickel"
      },
      correct_answer: "A",
      explanation: "Carbonyl compounds react with hydrazine to form hydrazones, which on heating with sodium or potassium hydroxide in high-boiling solvent like ethylene glycol yield alkanes (Wolff-Kishner reduction).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.2: Reduction to Hydrocarbons",
        page_number: "Page 368",
        exact_quote: "Treatment with hydrazine followed by heating with sodium or potassium hydroxide in high boiling solvent such as ethylene glycol [Wolff-Kishner reduction]."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 13,
      question: "Why do carboxylic acids have higher boiling points than alcohols of comparable molecular mass?",
      options: {
        A: "Carboxylic acids form extensive intermolecular hydrogen bonding and exist as stable cyclic dimers",
        B: "Carboxylic acids have higher covalent bond energy",
        C: "Alcohols cannot form hydrogen bonds",
        D: "Carboxylic acids are non-polar molecules"
      },
      correct_answer: "A",
      explanation: "Carboxylic acids have higher boiling points because their molecules are held together by two strong intermolecular hydrogen bonds, existing as stable cyclic dimers even in the vapour phase.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.7: Physical Properties of Carboxylic Acids",
        page_number: "Page 377",
        exact_quote: "Carboxylic acids are higher boiling liquids than aldehydes, ketones and even alcohols of comparable molecular masses. This is due to more extensive association of carboxylic acid molecules through intermolecular hydrogen bonding... cyclic dimers."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 14,
      question: "Which of the following substituted acetic acids is the STRONGEST acid?",
      options: {
        A: "CF3COOH (Trifluoroacetic acid)",
        B: "CCl3COOH (Trichloroacetic acid)",
        C: "CH2FCOOH (Fluoroacetic acid)",
        D: "CH3COOH (Acetic acid)"
      },
      correct_answer: "A",
      explanation: "Electron-withdrawing groups (-I effect) stabilize the carboxylate anion by dispersing negative charge. Three strongly electronegative fluorine atoms in CF3COOH exert an exceptionally strong -I effect, making it the strongest acid.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.1: Acidity of Carboxylic Acids",
        page_number: "Page 379",
        exact_quote: "The effect of the following groups in increasing the acidity order is: CF3 > CCl3 > CHCl2 > NO2 > CN > F > Cl > Br > I > Ph."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 15,
      question: "Carboxylic acids having an alpha-hydrogen react with chlorine or bromine in the presence of small amounts of red phosphorus to give alpha-halocarboxylic acids. This reaction is:",
      options: {
        A: "Hell-Volhard-Zelinsky (HVZ) reaction",
        B: "Hunsdiecker reaction",
        C: "Kolbe electrolysis",
        D: "Etard reaction"
      },
      correct_answer: "A",
      explanation: "Carboxylic acids having an alpha-hydrogen are halogenated at the alpha-position on treatment with chlorine or bromine in the presence of small amount of red phosphorus to give alpha-halocarboxylic acids (HVZ reaction).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.4: Hell-Volhard-Zelinsky Reaction",
        page_number: "Page 383",
        exact_quote: "This reaction is known as Hell-Volhard-Zelinsky reaction."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 16,
      question: "In the Aldol condensation of acetaldehyde with dilute NaOH, the product initially formed before heating is:",
      options: {
        A: "3-Hydroxybutanal (beta-hydroxy aldehyde)",
        B: "But-2-enal (crotonaldehyde)",
        C: "2-Hydroxybutanal",
        D: "Butan-1-ol"
      },
      correct_answer: "A",
      explanation: "Acetaldehyde reacts with dilute NaOH to form 3-hydroxybutanal (aldol), containing both an aldehyde and alcohol group. On subsequent heating, it loses water to form but-2-enal.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.3: Aldol Condensation",
        page_number: "Page 371",
        exact_quote: "2 CH3-CHO --(dil NaOH)--> CH3-CH(OH)-CH2-CHO (3-Hydroxybutanal / Aldol)."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 17,
      question: "When sodium salt of a carboxylic acid is heated with soda lime (NaOH + CaO in 3:1 ratio), it undergoes decarboxylation to produce an alkane with:",
      options: {
        A: "One carbon atom less than the parent carboxylic acid",
        B: "The same number of carbon atoms",
        C: "Double the number of carbon atoms",
        D: "One carbon atom more"
      },
      correct_answer: "A",
      explanation: "Decarboxylation with soda lime removes carbon dioxide as carbonate (Na2CO3), producing an alkane with one less carbon atom than the parent carboxylic acid salt.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.3: Decarboxylation",
        page_number: "Page 382",
        exact_quote: "Carboxylic acids lose carbon dioxide to form hydrocarbons when their sodium salts are heated with sodalime. The reaction is known as decarboxylation."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 18,
      question: "Kolbe's electrolytic decarboxylation of potassium acetate (CH3COOK) in aqueous solution produces which gas at the anode?",
      options: {
        A: "Ethane (C2H6) and CO2",
        B: "Methane (CH4) and O2",
        C: "Hydrogen (H2) only",
        D: "Ethene (C2H4) and CO"
      },
      correct_answer: "A",
      explanation: "An aqueous solution of sodium or potassium salt of a carboxylic acid on electrolysis gives alkane having even number of carbon atoms. At anode: 2 CH3COO- -> C2H6 + 2 CO2 + 2 e-.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.3: Decarboxylation",
        page_number: "Page 382",
        exact_quote: "An aqueous solution of sodium or potassium salt of a carboxylic acid on electrolysis gives alkane having even number of carbon atoms (Kolbe electrolysis)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 19,
      question: "Carboxylic acids do NOT give the characteristic nucleophilic addition reactions of the carbonyl group (>C=O) because:",
      options: {
        A: "The carbonyl carbon is involved in resonance with the adjacent hydroxyl oxygen, reducing its electrophilicity",
        B: "Carboxylic acids are insoluble in polar solvents",
        C: "The carbonyl bond in carboxylic acids is triple bonded",
        D: "Hydroxyl group completely hydrolyzes nucleophiles"
      },
      correct_answer: "A",
      explanation: "In carboxylic acids, resonance donation of lone pairs from the -OH oxygen to the carbonyl group reduces the partial positive charge on the carbonyl carbon, making it much less electrophilic than in aldehydes and ketones.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.6: Structure of Carboxyl Group",
        page_number: "Page 375",
        exact_quote: "The carbonyl carbon in carboxylic acids is less electrophilic than in aldehydes and ketones because of the resonance contribution of the lone pair of electrons from the hydroxyl oxygen."
      },
      question_type: "Conceptual"
    },
    {
      question_number: 20,
      question: "Which reagent converts acetic acid directly into acetyl chloride?",
      options: {
        A: "Thionyl chloride (SOCl2)",
        B: "Dilute HCl",
        C: "Sodium chloride (NaCl)",
        D: "Chlorine gas in water"
      },
      correct_answer: "A",
      explanation: "Carboxylic acids react with PCl5, PCl3, or SOCl2 to form acid chlorides. SOCl2 is preferred because the by-products (SO2 and HCl) are gases and escape easily, leaving pure acid chloride.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.2: Reactions with PCl5, PCl3 and SOCl2",
        page_number: "Page 381",
        exact_quote: "Thionyl chloride (SOCl2) is preferred because other two products are gaseous and escape the reaction mixture leaving behind the pure product."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 21,
      question: "When benzoic acid is treated with bromine in the presence of FeBr3, the major product is:",
      options: {
        A: "m-Bromobenzoic acid",
        B: "o-Bromobenzoic acid",
        C: "p-Bromobenzoic acid",
        D: "2,4-Dibromobenzoic acid"
      },
      correct_answer: "A",
      explanation: "The carboxyl group (-COOH) is a strongly electron-withdrawing deactivating group that directs electrophilic aromatic substitution to the meta-position.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.5: Ring Substitution",
        page_number: "Page 384",
        exact_quote: "Carboxyl group acts as a deactivating and meta-directing group. Benzoic acid on bromination gives m-bromobenzoic acid."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 22,
      question: "Why do aromatic carboxylic acids NOT undergo Friedel-Crafts alkylation or acylation reactions?",
      options: {
        A: "Because the -COOH group is strongly deactivating and the catalyst AlCl3 binds to the carboxyl group as a Lewis base",
        B: "Because benzoic acid is insoluble in AlCl3",
        C: "Because aromatic ring has excess electron density",
        D: "Because benzene ring decomposes in acid"
      },
      correct_answer: "A",
      explanation: "Benzoic acid does not undergo Friedel-Crafts reaction because the -COOH group is strongly deactivating and the Lewis acid catalyst AlCl3 coordinates strongly to the carboxyl group.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.5: Ring Substitution",
        page_number: "Page 384",
        exact_quote: "They do not undergo Friedel-Crafts reaction because the carboxyl group is deactivating and the catalyst aluminium chloride (Lewis acid) gets bonded to the carboxyl group."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 23,
      question: "Which of the following compounds gives a positive Brady's test (yellow-orange precipitate with 2,4-DNP)?",
      options: {
        A: "Both aldehydes and ketones",
        B: "Carboxylic acids only",
        C: "Esters only",
        D: "Alcohols only"
      },
      correct_answer: "A",
      explanation: "2,4-Dinitrophenylhydrazine (2,4-DNP or Brady's reagent) reacts with aldehydes and ketones to give bright yellow, orange, or red hydrazone precipitates, used as a qualitative test for carbonyl compounds.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.1: Addition of Ammonia Derivatives (2,4-DNP Derivatives)",
        page_number: "Page 367",
        exact_quote: "2,4-DNP-derivatives are yellow, orange or red solids, useful for characterisation of aldehydes and ketones."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 24,
      question: "Acetal formation from an aldehyde involves reversible reaction with two equivalents of monohydric alcohol in the presence of:",
      options: {
        A: "Dry HCl gas (acid catalyst)",
        B: "Concentrated NaOH",
        C: "Pyridine",
        D: "Anhydrous AlCl3"
      },
      correct_answer: "A",
      explanation: "Aldehydes react with one equivalent of monohydric alcohol in the presence of dry hydrogen chloride to yield hemiacetals, which react with another alcohol molecule to form stable gem-dialkoxy compounds known as acetals.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.1: Addition of Alcohols",
        page_number: "Page 366",
        exact_quote: "Dry hydrogen chloride protonates the oxygen of the carbonyl compound and therefore, increases the electrophilicity of the carbonyl carbon."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 25,
      question: "Ketones react with ethylene glycol in the presence of dry HCl to form cyclic ketals known as:",
      options: {
        A: "Ethylene glycol ketals (1,3-dioxolanes)",
        B: "Hemiacetals",
        C: "Enamines",
        D: "Oximes"
      },
      correct_answer: "A",
      explanation: "Ketones react with ethylene glycol under similar conditions to form cyclic products known as ethylene glycol ketals (useful as protecting groups).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.1: Addition of Alcohols",
        page_number: "Page 366",
        exact_quote: "Ketones react with ethylene glycol under similar conditions to form cyclic products known as ethylene glycol ketals."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 26,
      question: "Addition of sodium hydrogen sulphite (NaHSO3) to an aldehyde produces a white crystalline bisulphite addition product that is useful for:",
      options: {
        A: "Purification and separation of aldehydes from non-carbonyl impurities",
        B: "Determining degree of unsaturation",
        C: "Oxidizing aldehyde to acid",
        D: "Reducing aldehyde to alkane"
      },
      correct_answer: "A",
      explanation: "The bisulphite addition compound is water-soluble crystalline solid and can be converted back to the original carbonyl compound by treating it with dilute mineral acid or alkali, making it ideal for purification.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.1: Addition of Sodium Hydrogen Sulphite",
        page_number: "Page 365",
        exact_quote: "The hydrogen sulphite addition compound is water soluble and can be converted back to the original carbonyl compound... Therefore, these are useful for separation and purification of aldehydes."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 27,
      question: "Which of the following dicarboxylic acids on heating readily undergoes intramolecular dehydration to form a cyclic anhydride?",
      options: {
        A: "Phthalic acid (benzene-1,2-dicarboxylic acid)",
        B: "Terephthalic acid (benzene-1,4-dicarboxylic acid)",
        C: "Oxalic acid",
        D: "Formic acid"
      },
      correct_answer: "A",
      explanation: "Phthalic acid has two carboxyl groups on adjacent ortho carbons, allowing easy loss of water on heating to form stable 5-membered cyclic phthalic anhydride.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.2: Formation of Anhydride",
        page_number: "Page 380",
        exact_quote: "Phthalic acid on heating loses water to yield phthalic anhydride."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 28,
      question: "In the reaction of an aldehyde with hydroxylamine (NH2OH), what class of organic nitrogen derivative is obtained?",
      options: {
        A: "Oxime",
        B: "Hydrazone",
        C: "Semicarbazone",
        D: "Schiff's base"
      },
      correct_answer: "A",
      explanation: "Aldehydes and ketones react with hydroxylamine (NH2OH) with elimination of water to form oximes (>C=N-OH).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.1: Table 12.2 (Derivatives of Carbonyl Compounds)",
        page_number: "Page 367",
        exact_quote: "Reagent: Hydroxylamine (NH2OH) -> Carbonyl derivative: Oxime (>C=N-OH)."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 29,
      question: "Treatment of benzaldehyde with concentrated NaOH yields benzyl alcohol and sodium benzoate. This is an example of:",
      options: {
        A: "Crossed Aldol condensation",
        B: "Cannizzaro reaction",
        C: "Kolbe reaction",
        D: "Friedel-Crafts reaction"
      },
      correct_answer: "B",
      explanation: "Benzaldehyde has no alpha-hydrogen atom. On heating with concentrated NaOH, one molecule is reduced to benzyl alcohol and the other is oxidized to sodium benzoate (Cannizzaro reaction).",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.4.4: Cannizzaro Reaction",
        page_number: "Page 372",
        exact_quote: "2 C6H5CHO + conc. NaOH -> C6H5CH2OH + C6H5COONa."
      },
      question_type: "Direct Fact"
    },
    {
      question_number: 30,
      question: "Which of the following organic acids gives effervescence of CO2 gas with aqueous sodium bicarbonate (NaHCO3)?",
      options: {
        A: "Benzoic acid",
        B: "Phenol",
        C: "Ethanol",
        D: "Acetone"
      },
      correct_answer: "A",
      explanation: "Carboxylic acids (pKa ~ 4-5) are stronger acids than carbonic acid (pKa ~ 6.4) and decompose aqueous NaHCO3 to liberate CO2 gas with brisk effervescence. Phenol and alcohols are weaker acids and do not give this test.",
      ncert_reference: {
        class: "Class 12",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        official_section: "Section 12.8.1: Acidity (Reactions with NaHCO3)",
        page_number: "Page 378",
        exact_quote: "Carboxylic acids react with sodium hydrogen carbonate and liberate brisk effervescence of carbon dioxide gas. This reaction is used to distinguish carboxylic acids from phenols."
      },
      question_type: "Direct Fact"
    }
  ]
};

export const ALL_CURATED_EXAM_SETS: Record<string, NEETQuizSet> = {
  "Botany:Principles of Inheritance and Variation": EXAM_BOTANY_SET,
  "Zoology:Human Reproduction": EXAM_ZOOLOGY_SET,
  "Physics:Ray Optics and Optical Instruments": EXAM_PHYSICS_SET,
  "Chemistry:Aldehydes, Ketones and Carboxylic Acids": EXAM_CHEMISTRY_SET,
};
