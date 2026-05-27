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
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Research & Projects</motion.h1>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>
          
          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>RESEARCH PAPER (PREPRINT)</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>Verifier Exploitation in NLI-Guided Iterative Refinement</h2>
            <p className={styles.projectDescription}>A Controlled Empirical Analysis. Preprint submitted to arXiv (on hold).</p>
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
              <a href="https://github.com/MrArnav69/AnchorSum" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>TECHNICAL IMPLEMENTATION</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Transformer from Scratch</h2>
            <ul className={styles.projectBullets}>
              <li>Implemented the full Transformer encoder architecture from first principles in PyTorch.</li>
              <li>Trained on a synthetic cyclic next-token prediction task demonstrating end-to-end autoregressive sequence modeling.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/MrArnav69/Transformer-from-scratch" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>MACHINE LEARNING</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>House Price Prediction</h2>
            <ul className={styles.projectBullets}>
              <li>Built a regression pipeline on the Ames Housing dataset covering EDA, data cleaning, and complex feature engineering.</li>
              <li>Compared Ridge Regression against tuned XGBoost (CV RMSE_log 0.1229) using GridSearchCV with cross-validation.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/MrArnav69/House-Price-Prediction" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>DATA VISUALIZATION</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>10D Hypercube Visualization</h2>
            <ul className={styles.projectBullets}>
              <li>Constructed and visualized a 10-dimensional hypercube (1,024 vertices; 5,120 edges) using PCA and t-SNE.</li>
              <li>Generated comparative visualization panels across all methods with edges color-coded by varying dimension.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/MrArnav69/10D-Visualization" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>MACHINE LEARNING</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Live Emotion Detection</h2>
            <ul className={styles.projectBullets}>
              <li>Built a real-time facial emotion classifier using DeepFace with MTCNN-based face detection for 7-class emotion recognition.</li>
              <li>Implemented temporal smoothing via a 10-frame sliding window to stabilize predictions.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/MrArnav69/Emotion_Detection" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>WEB APPLICATION</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>Focus Time</h2>
            <ul className={styles.projectBullets}>
              <li>Minimalist focus-session application with configurable timers and six ambient audio profiles.</li>
              <li>Supports cross-platform launch scripts for macOS and Windows.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/MrArnav69/Focus-Time" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

        </motion.div>

        <motion.h2 className={styles.pageTitle} variants={fadeUpVariant} style={{ marginTop: '5rem', marginBottom: '2rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Writing</motion.h2>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>
           <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>MEDIUM ARTICLE</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>The Real Productivity Hack Nobody Talks About: Mastering Task Switching</h2>
            <p className={styles.projectDescription}>Published in ILLUMINATION, one of Medium’s largest curated publications.</p>
            <div className={styles.projectLinks}>
              <a href="https://mrarnav69.medium.com/the-real-productivity-hack-nobody-talks-about-mastering-task-switching-17d49a6101a1" target="_blank" rel="noreferrer" className={styles.projectLink}>
                Read on Medium &rarr;
              </a>
            </div>
          </motion.div>
          
          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>MEDIUM ARTICLE</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Your Productivity Problem Isn’t Focus — It’s Leisure</h2>
            <p className={styles.projectDescription}>On the underappreciated role of deliberate leisure in sustainable deep work.</p>
            <div className={styles.projectLinks}>
              <a href="https://mrarnav69.medium.com/your-productivity-problem-isnt-focus-it-s-leisure-5a0b7be92662" target="_blank" rel="noreferrer" className={styles.projectLink}>
                Read on Medium &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>MEDIUM ARTICLE</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Understanding the Transformer Architecture from ‘Attention Is All You Need’</h2>
            <p className={styles.projectDescription}>Technical breakdown of the original Transformer paper; part of an ongoing series of ML paper summaries.</p>
            <div className={styles.projectLinks}>
              <a href="https://mrarnav69.medium.com/understanding-the-transformer-architecture-from-attention-is-all-you-need-f41a09e743a7" target="_blank" rel="noreferrer" className={styles.projectLink}>
                Read on Medium &rarr;
              </a>
            </div>
          </motion.div>
        </motion.div>

      </motion.section>
    </main>
  );
}
