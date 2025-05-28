import { Search, Bell, User, Plus } from 'lucide-react';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>Health</span>
                    <span className={styles.logoDot}>CARE.</span>
                </div>
                <div className={styles.searchBar}>
                    <Search size={16} color="#666" />
                    <input type="text" placeholder="Search" />
                </div>
                <Bell size={20} color="#666" />
            </div>
            <div className={styles.actions}>
                <User size={20} color="#666" />
                <button className={styles.addButton}>
                    <Plus size={16} color="#fff" />
                </button>
            </div>
        </header>
    );
}

export default Header;