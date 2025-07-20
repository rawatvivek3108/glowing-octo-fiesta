import styles from './Navbar.module.css';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className={styles.navbar} aria-label="Main navigation">
            <ul className={styles.navList}>
                <li><a href="#home" className={styles.navLink}>Home</a></li>
                <li><a href="#skills" className={styles.navLink}>Skills</a></li>
                <li><a href="#about" className={styles.navLink}>About</a></li>
                <li>
                    <a
                        href="https://github.com/rawatvivek92658/glowing-octo-broccoli"
                        className={styles.navLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Vivek Rawat's GitHub Projects (opens in new tab)"
                    >
                        <FaGithub className={styles.icon} />
                        <span className={styles.linkText}>Projects</span>
                    </a>
                </li>
                <li><a href="#contact" className={styles.navLink}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;