import { Home, Clock, Calendar, FileText, BarChart, MessageSquare, HelpCircle, Settings, } from 'lucide-react';
import { navLinks } from '../data/navLinks.js'; 
import styles from '../styles/Sidebar.module.css';


const icons = { Home, Clock, Calendar, FileText, BarChart, MessageSquare, HelpCircle, Settings };

function Sidebar() {
  const generalLinks = navLinks.filter(link =>
    ['Dashboard', 'History', 'Calendar', 'Appointments', 'Statistics'].includes(link.name)
  );
  const toolsLinks = navLinks.filter(link =>
    ['Chat', 'Support', 'Settings'].includes(link.name)
  );

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.heading}>GENERAL</h3>
      <nav>
        <ul className={styles.navList}>
          {generalLinks.map((link, index) => {
            const Icon = icons[link.icon];
            return (
              <li
                key={`general-${index}`}
                className={`${styles.navItem} ${link.name === 'Dashboard' ? styles.active : ''
                  }`}
              >
                {Icon && <Icon size={20} />}
                <span>{link.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
      <h3 className={styles.heading}>TOOLS</h3>
      <nav>
        <ul className={styles.navList}>
          {toolsLinks.map((link, index) => {
            const Icon = icons[link.icon];
            return (
              <li
                key={`tools-${index}`}
                className={`${styles.navItem} ${link.name === 'Dashboard' ? styles.active : ''
                  }`}
              >
                {Icon && <Icon size={20} />}
                <span>{link.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
