"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function Research() {
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
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Research & Projects</motion.h1>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>
          
          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>RESEARCH PAPER</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Research Paper X</h2>
            <p className={styles.projectDescription}>Currently under ACL Review. Title and details anonymized in accordance with ACL's double-blind review policy.</p>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>TECHNICAL IMPLEMENTATION</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Transformer from Scratch</h2>
            <ul className={styles.projectBullets}>
              <li>Implemented full Transformer architecture from scratch: multi-head self-attention, positional encoding, feed-forward networks, and stacked encoder layers.</li>
              <li>Trained model for next-token prediction, demonstrating sequence modeling and attention mechanisms without high-level libraries.</li>
              <li>Modularized components with step-by-step Jupyter notebook bridging theory and code.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/MrArnav69/Transformer-from-scratch" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>AI ENGINEERING</span>
              <span className={styles.projectYear}>2024</span>
            </div>
            <h2 className={styles.projectTitle}>Financial Statement Analyzer AI</h2>
            <ul className={styles.projectBullets}>
              <li>Built AI tool to analyze financial statements and generate strategic insights with voice-enabled explanations.</li>
              <li>Calculated 20+ financial ratios and performed trend analysis producing multi-format reports.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/MrArnav69/Financial-Statement-Analyzer" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>SOFTWARE SYSTEM</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Ledger Management System</h2>
            <ul className={styles.projectBullets}>
              <li>Developed management system to track credits, debits, and transaction history with persistent storage.</li>
              <li>Implemented automated calculations and Excel export functionality to streamline financial record-keeping.</li>
            </ul>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>MACHINE LEARNING</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Emotion Detection System</h2>
            <ul className={styles.projectBullets}>
              <li>Developed text-based emotion detection model classifying multiple emotional categories.</li>
              <li>Applied preprocessing, tokenization, and feature engineering to improve model accuracy.</li>
              <li>Optimized model performance via hyperparameter tuning and evaluation metrics.</li>
            </ul>
          </motion.div>

        </motion.div>

        <motion.h2 className={styles.pageTitle} variants={fadeUpVariant} style={{ marginTop: '5rem', marginBottom: '2rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Notes & Paper Summaries</motion.h2>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>
           <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>RESEARCH SUMMARY</span>
              <span className={styles.projectYear}>Present</span>
            </div>
            <h2 className={styles.projectTitle}>Academic Reading & Notes</h2>
            <p className={styles.projectDescription}>I regularly read and summarize the latest advancements in Natural Language Processing and abstractive summarization. My technical notes and paper summaries will be fully indexed here shortly.</p>
            <div className={styles.projectLinks}>
              <a href="https://www.linkedin.com/in/mrarnav69/" target="_blank" rel="noreferrer" className={styles.projectLink}>
                Read current summaries on LinkedIn &rarr;
              </a>
            </div>
          </motion.div>
        </motion.div>

      </motion.section>
    </main>
  );
}
