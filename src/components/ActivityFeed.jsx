import styles from '../styles/ActivityFeed.module.css';

function ActivityFeed() {
  const barHeights = [40, 60, 20, 80, 30, 50, 10]; 

  return (
    <div className={styles.activityCard}>
      <h3>ACTIVITY</h3>
      <p>3 appointments on this week</p>
      <div className={styles.barChart}>
        {barHeights.map((height, index) => (
          <div
            key={index}
            className={styles.bar}
            style={{ height: `${height}px` }}
          ></div>
        ))}
      </div>
      <div className={styles.days}>
        {['Mon', 'Tues', 'Wed', 'Thrs', 'Fri', 'Sat', 'Sun'].map(
          (day, index) => (
            <span key={index}>{day}</span>
          )
        )}
      </div>
    </div>
  );
}

export default ActivityFeed;