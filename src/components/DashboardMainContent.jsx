import DashboardOverview from './DashboardOverview';
import styles from '../styles/DashboardMainContent.module.css';

function DashboardMainContent() {
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.title}>Dashboard</h1>
      <DashboardOverview />
    </main>
  );
}

export default DashboardMainContent;