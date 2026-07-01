"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function Publications() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className={styles.main}>
      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Publications & Preprints</motion.h1>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>
          
          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>PREPRINT</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>Verifier Exploitation in NLI-Guided Iterative Refinement</h2>
            <p className={styles.projectAuthor}>Arnav Gupta · Independent Researcher, Nepal · Research Square, 2026</p>
            <p className={styles.projectDescription}>A Controlled Empirical Analysis.</p>
            <div className={styles.abstractBlock}>
              <h3 className={styles.abstractTitle}>Abstract</h3>
              <p>Iterative refinement pipelines that use neural verifiers as feedback signals are increasingly common in faithfulness-constrained text generation, yet their susceptibility to verifier exploitation has been documented only in systems involving gradient updates. We demonstrate that this failure mode extends to zero-gradient, prompt-only settings, where no parameter update occurs and the entire refinement loop operates through in-context instruction. Using AnchorSum — a modular, training-free multi-document summarization pipeline combining anchor-conditioned generation, sentence-level NLI auditing, and entity hallucination filtering — as a controlled experimental setting, we show that a second revision cycle inflates SummaCConv by +0.185 while collapsing BARTScore_s→d by -2.566 nats at less than 0.4% length change — confirmed by Wilcoxon W=0 (p=2.68×10⁻⁸³), meaning not a single instance among 498 escaped the degradation. Instance-level analysis reveals the specific mechanism: truncation-exploiting content removal, in which the revision process targets genuine source-grounded content falling outside the NLI auditor's 512-token attention boundary, achieving higher per-sentence entailment scores at the cost of lower informativeness and source fidelity. An independent non-NLI faithfulness signal (AlignScore, Δ&lt;0.001) confirms that the gain does not transfer across evaluation frameworks — the decisive diagnostic signature distinguishing exploitation from genuine improvement. We formalize a three-condition detection protocol applicable to any NLI-guided iterative refinement pipeline, requiring no human annotation. On 498 Multi-News instances, AnchorSum with a single revision cycle achieves a 6.3% relative SummaCConv inconsistency reduction over its unaugmented base (p=4.49×10⁻²⁸) and outperforms fine-tuned baselines across all dimensions in a dual-judge LLM-as-judge evaluation. Our results establish that verifier exploitation is a property of feedback structure rather than optimization mechanism, and that single-metric NLI auditing is an unreliable faithfulness proxy whenever the auditor also serves as the revision signal.</p>
            </div>
            <ul className={styles.projectBullets}>
              <li>First controlled empirical documentation of verifier exploitation in zero-gradient, prompt-only iterative refinement.</li>
              <li>Identified truncation-exploiting content removal as the exploitation mechanism; formalized an annotation-free detection protocol.</li>
              <li>AnchorSum achieves a 6.3% relative SummaCConv inconsistency reduction over 498 Multi-News instances.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://doi.org/10.21203/rs.3.rs-10187492/v1" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Research Square Preprint &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>PREPRINT</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>A Spectral Phase Diagram for Binary Few-Shot Classification: Intrinsic Dimensionality, Geometric Saturation, and Representational Diagnosis</h2>
            <p className={styles.projectAuthor}>Arnav Gupta · Independent Researcher, Nepal · arXiv, 2026</p>
            <p className={styles.projectDescription}>Intrinsic Dimensionality, Geometric Saturation, and Representational Diagnosis.</p>
            <div className={styles.abstractBlock}>
              <h3 className={styles.abstractTitle}>Abstract</h3>
              <p>Deciding when to stop collecting labeled examples is a fundamental but undertheorized problem in applied machine learning. The saturation index S(K) = erank(Σ̂⁽ᴷ⁾_W)/K measures the ratio of the effective rank of the pooled within-class sample covariance to the shot count; we prove it falls below a threshold precisely when the covariance estimator is well-concentrated around the population covariance and the linear discriminant has stabilized. The index is computable in O(d³) time from support features alone, requiring no test labels or trained classifier. Evaluated across N = 246 doubling-pair observations from seventeen binary tasks and six datasets, sixteen of seventeen tasks have a positive within-task Spearman correlation between S(K) and marginal accuracy gain (median ρ = 0.811). The pooled Spearman correlation is ρ = 0.548 (p = 1.1 × 10⁻²⁰, N = 246). A three-phase diagram (exploration, transition, saturation) with mean marginal gains of 3.48%, 2.40%, and 0.82% is supported by all pairwise significance tests (p ≤ 0.008). As a binary stopping rule, the index achieves AUC = 0.752, providing meaningful probabilistic guidance for annotation decisions.</p>
            </div>
            <ul className={styles.projectBullets}>
              <li>Introduced the label-free saturation index S(K) = erank(Σ̂⁽ᴷ⁾_W)/K grounded in classical high-dimensional covariance estimation.</li>
              <li>Established a three-phase diagram (exploration, transition, saturation) across 246 doubling-pair observations with high correlation (ρ = 0.811).</li>
              <li>Proved covariance concentration bounds under sub-Gaussian class-conditionals.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://doi.org/10.48550/arXiv.2606.24903" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View arXiv Preprint &rarr;
              </a>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>
    </main>
  );
}
