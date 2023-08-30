import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <span>
          <span className={styles.the}>THE </span>
          <span className={styles.wildfire}>WILDFIRE</span>
        </span>
      </div>
      <div className={styles.links}>
        <span>HOME</span>
        <span>PACKAGES</span>
        <span>SONGS</span>
        <span>CONTACT</span>
        <span>GALLERY</span>
      </div>
    </div>
  );
}
