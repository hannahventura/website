import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.parentContainer}>
        <header className={styles.childrenContainer}>
          <div className={styles.navbar}>
            {/* Logo Image */}
            <div className={styles.logoContainer}>
              <Image src="/inspire-updated-logo.png" alt="Company Logo" width={80} height={80} />
              <h1 className={styles.logo}>Inspire Next Global Inc.</h1>
            </div>

            {/* Navigation Links */}
            <nav>
              <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className={styles.childrenContainer1}>
          <div className={styles.box1}>
            <h3 className={styles.titleCompanyOverview}>Company Overview</h3>
            <div className={styles.companyoverviewText}>
              Inspire Next Global Inc. is a visionary management and company with diverse interests spanning construction<br />
              and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and specialized<br />
              services - serving both private and public sectors. In true adherence to the Conglomerate Model, it orchestrates<br />
              a cohesive ecosystem, where the company operates as the central financial hub, capitalizing and harmonizing its<br />
              subsidiaries and affiliates to drive innovation, efficiency, and collaboration.<br />
              This forward-thinking entity is on a mission to make a direct and meaningful impact on the lives of individuals,<br />
              while also wielding its influence to create positive shifts in geopolitics. Simultaneously, it remains dedicated<br />
              to delivering substantial returns to its valued shareholders. 
            </div>

            {/* Company Introduction Video */}
            <div className={styles.videoContainer}>
              <video width="100%" controls>
                <source src="/hello.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.box2}>
          <h3>Contact Us</h3>
          <p>8596-3717 / 8596-3670</p>
          <p><a href="https://inspirenextglobal.com">inspirenextglobal.com</a></p>
          <p><a href="mailto:inspirenextglobal@gmail.com">inspirenextglobal@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}
