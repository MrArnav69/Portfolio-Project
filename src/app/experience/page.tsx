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
          
          <motion.div className={styles.experienceItem} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Independent Researcher</h2>
              <span className={styles.date}>2025 - Present</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={styles.role}>MACHINE LEARNING & NLP</span>
              <span className={styles.location}>Remote</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Conduct independent research spanning multi-document summarization, faithfulness evaluation, and iterative refinement.</li>
              <li>Designed AnchorSum, a modular training-free summarization pipeline combining entity-guided anchor extraction and dual-mode NLI faithfulness auditing.</li>
              <li>Empirically documented verifier exploitation in prompt-only iterative refinement and proposed a multi-metric triangulation protocol for its detection.</li>
              <li>Outperformed fine-tuned encoder-decoder baselines (BART, PEGASUS, PRIMERA) across all LLM-as-judge dimensions using a zero-shot inference-time pipeline.</li>
            </ul>
          </motion.div>

          <motion.div className={styles.experienceItem} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Suvidha Foundation</h2>
              <span className={styles.date}>September 2025 - November 2025</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={styles.role}>MACHINE LEARNING INTERN</span>
              <span className={styles.location}>Remote</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Researched Multi-Document Abstractive Summarization with transformers under mentorship of a PhD in NLP.</li>
              <li>Built Proof-of-Concept summarization system with hierarchical context aggregation.</li>
              <li>Participated in community outreach programs supporting underserved populations.</li>
            </ul>
          </motion.div>

          <motion.div className={styles.experienceItem} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Harvard Computer Society AI Bootcamp</h2>
              <span className={styles.date}>2025</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={styles.role}>ARTIFICIAL INTELLIGENCE FELLOW</span>
              <span className={styles.location}>Remote</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Completed intensive AI program collaborating with Harvard students, focusing on frontier AI systems and real-world deployment challenges.</li>
              <li>Studied Transformers in depth and implemented one from scratch; covered embeddings, positional encoding, self-attention, cross-attention, feed-forward networks.</li>
              <li>Explored Reinforcement Learning: MDPs, Value Iteration, Policy Iteration, SARSA, Q-Learning, and Multi-Armed Bandits.</li>
              <li>Analyzed LLM architectures (ChatGPT, Claude, Gemini, Perplexity) and researched hallucination mitigation strategies.</li>
              <li>Completed hands-on projects: fine-tuned BERT, built mini-LLM, implemented Vision Transformers, and built neural networks from first principles.</li>
            </ul>
          </motion.div>

        </motion.div>
      </motion.section>
    </main>
  );
}
