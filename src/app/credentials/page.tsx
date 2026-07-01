"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
import { Star, Award } from "lucide-react";
import Counter from "@/components/Counter";

export default function Credentials() {
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
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Credentials</motion.h1>

        {/* ── Major Fellowships & Internships ── */}
        <motion.h2 className={styles.categoryTitle} variants={fadeUpVariant}>Major Fellowships & Internships</motion.h2>
        
        <motion.a href="/certifications/Harvard_AI_Bootcamp.png" target="_blank" rel="noreferrer" className={styles.featuredHonorCard} variants={fadeUpVariant}>
          <div className={styles.featuredHonorImageWrapper}>
            <Image src="/certifications/Harvard_AI_Bootcamp.png" alt="Harvard AI Bootcamp" fill className={styles.honorImage} />
          </div>
          <div className={styles.featuredHonorContent}>
            <span className={styles.honorType}>FELLOWSHIP</span>
            <h3 className={styles.featuredHonorTitle}>Harvard Computer Society AI Bootcamp</h3>
            <span className={styles.honorOrg}>Harvard University Group (2025)</span>
            <p className={styles.featuredHonorProse}>
              An intensive fellowship collaborating with Harvard students, focused on frontier AI systems, modern architectures, and real-world deployment challenges.
            </p>
          </div>
        </motion.a>

        <motion.a href="/certifications/Suvidha_Machine_Learning.png" target="_blank" rel="noreferrer" className={styles.featuredHonorCard} variants={fadeUpVariant}>
          <div className={styles.featuredHonorImageWrapper}>
            <Image src="/certifications/Suvidha_Machine_Learning.png" alt="Suvidha Machine Learning Internship" fill className={styles.honorImage} />
          </div>
          <div className={styles.featuredHonorContent}>
            <span className={styles.honorType}>INTERNSHIP</span>
            <h3 className={styles.featuredHonorTitle}>Machine Learning Internship</h3>
            <span className={styles.honorOrg}>Suvidha Foundation</span>
            <p className={styles.featuredHonorProse}>
              Researched multi-document abstractive summarization with transformer-based models under the mentorship of a PhD in NLP, building a hierarchical context aggregation pipeline.
            </p>
          </div>
        </motion.a>


        {/* ── Core Machine Learning Foundations ── */}
        <motion.h2 className={styles.categoryTitle} variants={fadeUpVariant} style={{ marginTop: '4rem' }}>Core Foundations</motion.h2>
        
        <motion.a href="/certifications/CS50AI.png" target="_blank" rel="noreferrer" className={styles.featuredHonorCard} variants={fadeUpVariant}>
          <div className={styles.featuredHonorImageWrapper}>
            <Image src="/certifications/CS50AI.png" alt="CS50 Intro to AI" fill className={styles.honorImage} />
          </div>
          <div className={styles.featuredHonorContent}>
            <span className={styles.honorType}>MACHINE LEARNING</span>
            <h3 className={styles.featuredHonorTitle}>CS50: Intro to AI with Python</h3>
            <span className={styles.honorOrg}>Harvard University (edX)</span>
            <p className={styles.featuredHonorProse}>
              A rigorous exploration of AI algorithms, covering graph search, adversarial search, probability, machine learning, and neural network optimization.
            </p>
          </div>
        </motion.a>

        <motion.a href="/certifications/Advance Learning Algorithms.png" target="_blank" rel="noreferrer" className={styles.featuredHonorCard} variants={fadeUpVariant}>
          <div className={styles.featuredHonorImageWrapper}>
            <Image src="/certifications/Advance Learning Algorithms.png" alt="Advanced Learning Algorithms" fill className={styles.honorImage} />
          </div>
          <div className={styles.featuredHonorContent}>
            <span className={styles.honorType}>MACHINE LEARNING</span>
            <h3 className={styles.featuredHonorTitle}>Advanced Learning Algorithms</h3>
            <span className={styles.honorOrg}>DeepLearning.AI & Stanford</span>
            <p className={styles.featuredHonorProse}>
              Advanced foundational training in neural networks, decision trees, and ensemble methods, directed by Andrew Ng.
            </p>
          </div>
        </motion.a>

        <motion.a href="/certifications/Supervised Machine Learning.png" target="_blank" rel="noreferrer" className={styles.featuredHonorCard} variants={fadeUpVariant}>
          <div className={styles.featuredHonorImageWrapper}>
            <Image src="/certifications/Supervised Machine Learning.png" alt="Supervised ML" fill className={styles.honorImage} />
          </div>
          <div className={styles.featuredHonorContent}>
            <span className={styles.honorType}>MACHINE LEARNING</span>
            <h3 className={styles.featuredHonorTitle}>Supervised ML: Regression & Classification</h3>
            <span className={styles.honorOrg}>DeepLearning.AI & Stanford</span>
            <p className={styles.featuredHonorProse}>
              Comprehensive foundational training in linear regression, logistic regression, and gradient descent.
            </p>
          </div>
        </motion.a>

        <motion.a href="/certifications/Calculus for Machine Learning and Data Science.png" target="_blank" rel="noreferrer" className={styles.featuredHonorCard} variants={fadeUpVariant}>
          <div className={styles.featuredHonorImageWrapper}>
            <Image src="/certifications/Calculus for Machine Learning and Data Science.png" alt="Calculus for ML" fill className={styles.honorImage} />
          </div>
          <div className={styles.featuredHonorContent}>
            <span className={styles.honorType}>MATHEMATICS</span>
            <h3 className={styles.featuredHonorTitle}>Calculus for Machine Learning</h3>
            <span className={styles.honorOrg}>DeepLearning.AI</span>
            <p className={styles.featuredHonorProse}>
              Mathematical foundations essential for deep learning, focusing on multivariate calculus and gradient descent optimization.
            </p>
          </div>
        </motion.a>

        <motion.a href="/certifications/Linear Algebra fo Machine Learning and Data Science.png" target="_blank" rel="noreferrer" className={styles.featuredHonorCard} variants={fadeUpVariant}>
          <div className={styles.featuredHonorImageWrapper}>
            <Image src="/certifications/Linear Algebra fo Machine Learning and Data Science.png" alt="Linear Algebra" fill className={styles.honorImage} />
          </div>
          <div className={styles.featuredHonorContent}>
            <span className={styles.honorType}>MATHEMATICS</span>
            <h3 className={styles.featuredHonorTitle}>Linear Algebra for Machine Learning</h3>
            <span className={styles.honorOrg}>DeepLearning.AI</span>
            <p className={styles.featuredHonorProse}>
              Rigorous training in matrix spaces, eigendecomposition, and orthogonal projections for machine learning applications.
            </p>
          </div>
        </motion.a>

        {/* ── Supplementary Certifications (Grid) ── */}
        <motion.h2 className={styles.categoryTitle} variants={fadeUpVariant} style={{ marginTop: '4rem' }}>Supplementary Certifications</motion.h2>
        <motion.div className={styles.honorsGrid} variants={containerVariants}>
          
          <motion.a href="/certifications/Arnav Gupta - Intermediate Machine Learning.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Arnav Gupta - Intermediate Machine Learning.png" alt="Intermediate Machine Learning" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>MACHINE LEARNING</span>
              <h3 className={styles.honorTitle}>Intermediate Machine Learning</h3>
              <span className={styles.honorOrg}>Kaggle</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Arnav Gupta - Feature Engineering.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Arnav Gupta - Feature Engineering.png" alt="Feature Engineering" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>MACHINE LEARNING</span>
              <h3 className={styles.honorTitle}>Feature Engineering</h3>
              <span className={styles.honorOrg}>Kaggle</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Introduction to Machine Learning.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Introduction to Machine Learning.png" alt="Intro to ML" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>MACHINE LEARNING</span>
              <h3 className={styles.honorTitle}>Intro to Machine Learning</h3>
              <span className={styles.honorOrg}>Kaggle</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Problem Solving(Basic).png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Problem Solving(Basic).png" alt="Problem Solving Basic" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>PROGRAMMING</span>
              <h3 className={styles.honorTitle}>Problem Solving (Basic)</h3>
              <span className={styles.honorOrg}>HackerRank</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Top_10_Python.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Top_10_Python.png" alt="Top 10% Python" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>PROGRAMMING</span>
              <h3 className={styles.honorTitle}>Python (Top 10%)</h3>
              <span className={styles.honorOrg}>TestDome</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Scientific Computing with Python.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Scientific Computing with Python.png" alt="Scientific Computing" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>PROGRAMMING</span>
              <h3 className={styles.honorTitle}>Scientific Computing with Python</h3>
              <span className={styles.honorOrg}>freeCodeCamp</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Python for Data Science, AI and Development.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Python for Data Science, AI and Development.png" alt="Python for Data Science" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>DATA SCIENCE</span>
              <h3 className={styles.honorTitle}>Python for Data Science & AI</h3>
              <span className={styles.honorOrg}>IBM</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Python Data Analytics.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Python Data Analytics.png" alt="Python Data Analytics" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>DATA ANALYTICS</span>
              <h3 className={styles.honorTitle}>Python Data Analytics</h3>
              <span className={styles.honorOrg}>Meta / IBM</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Amazon Bedrock Getting Started.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Amazon Bedrock Getting Started.png" alt="Amazon Bedrock" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>CLOUD & AI</span>
              <h3 className={styles.honorTitle}>Amazon Bedrock Getting Started</h3>
              <span className={styles.honorOrg}>AWS</span>
            </div>
          </motion.a>

          <motion.a href="/certifications/Introduction to Generative AI.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Introduction to Generative AI.png" alt="Intro to GenAI" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>CLOUD & AI</span>
              <h3 className={styles.honorTitle}>Introduction to Generative AI</h3>
              <span className={styles.honorOrg}>AWS</span>
            </div>
          </motion.a>
          
          <motion.a href="/certifications/Planning a Generative AI Project.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Planning a Generative AI Project.png" alt="Planning GenAI" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>CLOUD & AI</span>
              <h3 className={styles.honorTitle}>Planning a Generative AI Project</h3>
              <span className={styles.honorOrg}>AWS</span>
            </div>
          </motion.a>
          
          <motion.a href="/certifications/Introduction to Machine Learning The Art of Possible.png" target="_blank" rel="noreferrer" className={styles.honorCard} variants={fadeUpVariant}>
            <div className={styles.honorImageWrapper}>
              <Image src="/certifications/Introduction to Machine Learning The Art of Possible.png" alt="ML Art of Possible" fill className={styles.honorImage} />
            </div>
            <div className={styles.honorContent}>
              <span className={styles.honorType}>CLOUD & AI</span>
              <h3 className={styles.honorTitle}>Intro to ML: Art of the Possible</h3>
              <span className={styles.honorOrg}>AWS</span>
            </div>
          </motion.a>

        </motion.div>


        {/* ── Verified Platform Honors (Metrics Row) ── */}
        <motion.h2 className={styles.categoryTitle} variants={fadeUpVariant} style={{ marginTop: '4rem' }}>Platform Honors</motion.h2>
        <motion.div className={styles.metricsRow} variants={containerVariants}>
          
          <motion.div className={styles.metricWidget} variants={fadeUpVariant}>
            <div className={styles.metricValueBlock}>
              <span className={styles.metricNumber}><Counter value={5} /></span>
              <Star size={22} className={styles.metricIcon} fill="currentColor" />
            </div>
            <div className={styles.metricLabelBlock}>
              <span className={styles.metricTopic}>Python</span>
              <span className={styles.metricSource}>HackerRank</span>
            </div>
          </motion.div>

          <motion.div className={styles.metricWidget} variants={fadeUpVariant}>
            <div className={styles.metricValueBlock}>
              <span className={styles.metricNumber}><Counter value={3} /></span>
              <Star size={22} className={styles.metricIcon} fill="currentColor" />
            </div>
            <div className={styles.metricLabelBlock}>
              <span className={styles.metricTopic}>C++</span>
              <span className={styles.metricSource}>HackerRank</span>
            </div>
          </motion.div>

          <motion.div className={styles.metricWidget} variants={fadeUpVariant}>
            <div className={styles.metricValueBlock}>
              <span className={styles.metricNumber}><Counter value={17} /></span>
              <Award size={22} className={styles.metricIcon} strokeWidth={2.5} />
            </div>
            <div className={styles.metricLabelBlock}>
              <span className={styles.metricTopic}>Platform Badges</span>
              <span className={styles.metricSource}>Kaggle</span>
            </div>
          </motion.div>

        </motion.div>

      </motion.section>
    </main>
  );
}
