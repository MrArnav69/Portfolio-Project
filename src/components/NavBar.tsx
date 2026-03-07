"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Research & Projects", href: "/research" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Arnav Gupta
        </Link>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className={styles.activeIndicator}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
