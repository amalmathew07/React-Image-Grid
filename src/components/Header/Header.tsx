import logo from './test.svg';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  </header>
);
