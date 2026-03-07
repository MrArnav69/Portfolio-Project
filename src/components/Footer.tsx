import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <p className={styles.copyright}>&copy; {currentYear} Arnav Gupta.</p>
          <p className={styles.school}>Sagarmatha Secondary School, Nepal</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://github.com/MrArnav69" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/mrarnav69/" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="mailto:arnavgupta6969@icloud.com" className={styles.socialLink}>Email</a>
        </div>
      </div>
    </footer>
  );
}
