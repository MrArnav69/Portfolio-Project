"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import { Github, Linkedin, Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Contact() {
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
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Contact</motion.h1>

        <motion.div className={styles.contactGrid} variants={containerVariants}>
          <motion.a 
            href="mailto:arnavgupta6969@icloud.com" 
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Mail size={32} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Email</h2>
            <span className={styles.cardValue}>arnavgupta6969@icloud.com</span>
          </motion.a>

          <motion.a 
            href="tel:+9779863744666" 
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Phone size={32} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Phone</h2>
            <span className={styles.cardValue}>+977 9863744666</span>
          </motion.a>

          <motion.a 
            href="https://github.com/MrArnav69" 
            target="_blank" 
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Github size={32} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>GitHub</h2>
            <span className={styles.cardValue}>@MrArnav69</span>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/mrarnav69/" 
            target="_blank" 
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Linkedin size={32} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>LinkedIn</h2>
            <span className={styles.cardValue}>in/mrarnav69</span>
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/mrarnav69/" 
            target="_blank" 
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Instagram size={32} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Instagram</h2>
            <span className={styles.cardValue}>@mrarnav69</span>
          </motion.a>

          <motion.a 
            href="https://www.facebook.com/arnav.gupta.612918" 
            target="_blank" 
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Facebook size={32} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Facebook</h2>
            <span className={styles.cardValue}>Arnav Gupta</span>
          </motion.a>

        </motion.div>
      </motion.section>
    </main>
  );
}
