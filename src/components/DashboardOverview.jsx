import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import styles from '../styles/DashboardOverview.module.css';

function DashboardOverview() {
  return (
    <div className={styles.overview}>
      <div className={styles.leftColumn}>
        <AnatomySection />
        <HealthStatusCards />
        <div className={styles.activity}>
          <ActivityFeed />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <CalendarView />
      </div>
    </div>
  );
}

export default DashboardOverview;