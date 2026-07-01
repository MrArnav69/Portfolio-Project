"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function Experience() {
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
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Experience</motion.h1>

        <motion.div className={styles.experienceList} variants={containerVariants}>
          
          {/* ── Featured: Independent Researcher ── */}
          <motion.div className={`${styles.experienceItem} ${styles.featured}`} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Independent Researcher</h2>
              <span className={styles.date}>2025 — Present</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={`${styles.role} ${styles.rolePill}`}>Machine Learning &amp; NLP</span>
            </div>
            <p className={styles.focusStatement}>
              Investigating when the spectral and geometric character of learned representations determines what a system can and cannot do — and what that implies about when pipelines will fail.
            </p>
            <ul className={styles.bulletList}>
              <li>Designed AnchorSum, a modular training-free summarization pipeline combining entity-guided anchor extraction and dual-mode NLI faithfulness auditing.</li>
              <li>Empirically documented verifier exploitation in prompt-only iterative refinement and proposed a multi-metric triangulation protocol for its detection.</li>
              <li>Outperformed fine-tuned encoder-decoder baselines (BART, PEGASUS, PRIMERA) across all LLM-as-judge dimensions using a zero-shot inference-time pipeline.</li>
              <li>Introduced the saturation index S(K) for binary few-shot classification — a closed-form, label-free scalar predicting annotation diminishing returns.</li>
            </ul>
          </motion.div>

          {/* ── Suvidha Foundation ── */}
          <motion.div className={styles.experienceItem} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Suvidha Foundation</h2>
              <span className={styles.date}>Sep 2025 — Nov 2025</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={styles.role}>Machine Learning Intern</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Researched multi-document abstractive summarization with transformer-based models under mentorship of a PhD in NLP.</li>
              <li>Built a proof-of-concept summarization system incorporating hierarchical context aggregation across multiple source documents.</li>
              <li>Participated in community outreach programs supporting underserved populations alongside technical work.</li>
            </ul>
          </motion.div>

          {/* ── Harvard AI Fellowship ── */}
          <motion.div className={styles.experienceItem} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Harvard Computer Society AI Bootcamp</h2>
              <span className={styles.date}>2025</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={styles.role}>Artificial Intelligence Fellow</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Completed an intensive AI fellowship collaborating with Harvard students, focused on frontier AI systems, modern architectures, and real-world deployment challenges.</li>
              <li>Implemented a Transformer from scratch: sinusoidal positional encoding, multi-head self-attention, cross-attention, and position-wise feed-forward networks.</li>
              <li>Explored Reinforcement Learning foundations: MDPs, Value Iteration, Policy Iteration, SARSA, Q-Learning, and Multi-Armed Bandits.</li>
              <li>Completed hands-on projects: fine-tuned BERT, built a mini-LLM, implemented Vision Transformers, and constructed neural networks from first principles.</li>
            </ul>
          </motion.div>

        </motion.div>
      </motion.section>
    </main>
  );
}
