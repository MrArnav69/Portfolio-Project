"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function About() {
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
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>About</motion.h1>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Abstract</h2>
          <div className={styles.prose}>
            <p>
              I am a self-taught AI/ML engineer and independent NLP researcher bridging the gap between rigorous academic inquiry and practical, scalable systems. My primary focus lies in enhancing the faithfulness of Large Language Models in abstractive summarization.
            </p>
            <p>
              Operating independently alongside my formal high school education, I have developed state-of-the-art evaluation pipelines, contributed to MVP architectures at startups, and engaged with leading minds as an AI Fellow.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Mathematics Coursework</h2>
          <span className={styles.blockSubtitle}>MIT OpenCourseWare</span>
          <ul className={styles.courseList}>
            <li>
              <strong>18.01 &ndash; Single Variable Calculus:</strong> Differential and integral calculus with rigorous problem-solving.
            </li>
            <li>
              <strong>18.06 &ndash; Linear Algebra:</strong> Matrix theory, eigen decomposition, orthogonality, and applications to deep learning.
            </li>
            <li>
              <strong>18.05 &ndash; Introduction to Probability and Statistics:</strong> Probabilistic modeling, Bayesian reasoning, and statistical inference.
            </li>
          </ul>
        </motion.div>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Technical Skills</h2>
          <ul className={styles.skillList}>
            <li><strong>Languages:</strong> Python, C++, SQL</li>
            <li><strong>Libraries/Frameworks:</strong> NumPy, Pandas, Scikit-Learn, Matplotlib, Seaborn, Plotly, Transformers, Hugging Face, LLMs, TensorFlow, PyTorch</li>
            <li><strong>Tools & Platforms:</strong> Git/GitHub, Docker, REST APIs, Jupyter, VS Code, Firebase, MySQL, CUDA</li>
          </ul>
        </motion.div>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Other Interests</h2>
          <ul className={styles.skillList}>
            <li>
              <strong>Rubik&apos;s Cube (3x3):</strong> Average: 22.39s | Personal Record: 13.69s
            </li>
            <li>
              <strong>Music:</strong> Alice in Chains, Metallica, Soundgarden, Nirvana, Pearl Jam, Pink Floyd, The Smiths, Fleetwood Mac, The Weeknd, Tame Impala, and others.
            </li>
            <li>
              <strong>Geography & Trivia:</strong> Guessed 143/197 country flags in 18 minutes.
            </li>
          </ul>
        </motion.div>

      </motion.section>
    </main>
  );
}
