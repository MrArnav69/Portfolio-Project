"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className={styles.main}>
      <motion.section 
        className={`${styles.section} ${styles.hero}`}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroText}>
            <motion.div className={styles.heroTop} variants={fadeUpVariant}>
              <span className={styles.heroLabel}>Independent Researcher</span>
              <span className={styles.heroGpa}>GPA: 3.72</span>
            </motion.div>
            
            <motion.h1 className={styles.heroTitle} variants={fadeUpVariant}>
              Arnav<br/>Gupta.
            </motion.h1>
            
            <motion.p className={styles.heroContext} variants={fadeUpVariant}>
              Grade 9 student at <a href="https://sagarmathaschoolmirchaiya.edu.np/" target="_blank" rel="noreferrer">Sagarmatha Secondary School</a>, Nepal. Investigating Multi-Document Abstractive Summarization and Natural Language Processing.
            </motion.p>

            <motion.div className={styles.heroActions} variants={fadeUpVariant}>
              <Link href="/about" className={styles.primaryAction}>
                Read Biography <ArrowRight size={16} />
              </Link>
              <a href="/Arnav_Gupta_Resume.pdf" target="_blank" rel="noreferrer" className={styles.secondaryAction} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} /> Download CV
              </a>
            </motion.div>
          </div>

          <motion.div className={styles.heroImageWrapper} variants={fadeUpVariant}>
            <Image 
              src="/profile.png" 
              alt="Arnav Gupta" 
              fill 
              priority
              className={styles.heroImage} 
            />
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
