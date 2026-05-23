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
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>About</motion.h1>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Abstract</h2>
          <div className={styles.prose}>
            <p>
              I am an independent NLP/ML researcher based in Nepal. My research interests span multi-document summarization, faithfulness evaluation, iterative refinement pipelines, and feature selection.
            </p>
            <p>
              Operating independently alongside my formal high school education, I have developed state-of-the-art evaluation pipelines, authored papers on NLI-guided iterative refinement, and engaged with leading minds as an AI Fellow. I am also broadly interested in mathematics, physics, and existentialist philosophy, and I publish on productivity and ideas at Medium.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Mathematics Coursework</h2>
          <span className={styles.blockSubtitle}>MIT OpenCourseWare</span>
          <ul className={styles.courseList}>
            <li>
              <strong>18.01 &ndash; Single Variable Calculus (Completed):</strong> Differential and integral calculus with rigorous problem-solving.
            </li>
            <li>
              <strong>18.06 &ndash; Linear Algebra (In Progress):</strong> Matrix theory, eigendecomposition, orthogonality, and applications to deep learning.
            </li>
          </ul>
        </motion.div>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Technical Skills</h2>
          <ul className={styles.skillList}>
            <li><strong>Languages:</strong> Python, C++, SQL</li>
            <li><strong>Libraries/Frameworks:</strong> NumPy, Pandas, Scikit-Learn, Matplotlib, Transformers, Hugging Face, TensorFlow, PyTorch, OpenCV, DeepFace</li>
            <li><strong>Tools & Platforms:</strong> Git/GitHub, Docker, REST APIs, Jupyter, VS Code, Firebase, MySQL, CUDA, Obsidian, Zotero, Notion</li>
            <li><strong>Typesetting & Writing:</strong> LaTeX, Markdown</li>
          </ul>
        </motion.div>

        <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
          <h2 className={styles.blockTitle}>Other Interests</h2>
          <ul className={styles.skillList}>
            <li>
              <strong>Philosophy & Physics:</strong> Broadly interested in calculus, differential equations, linear algebra, classical mechanics, and existentialist philosophy.
            </li>
            <li>
              <strong>Writing:</strong> Publishes articles on productivity, deep work, and machine learning on Medium (featured in ILLUMINATION).
            </li>
            <li>
              <strong>Rubik&apos;s Cube (3x3):</strong> Average: 22.39s | Personal Record: 13.69s
            </li>
          </ul>
        </motion.div>

      </motion.section>
    </main>
  );
}
