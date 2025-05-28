import { healthData } from '../data/healthData';
import styles from '../styles/AnatomySection.module.css';
import human from '../assets/human.jpg'

function AnatomySection() {
  return (
    <div className={styles.anatomyCard}>
      <div className={styles.anatomyContent}>
        <div className={styles.indicators}>
          {healthData.map((item, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${styles[item.position]}`}
            >
              <span>{item.name}</span>
              <span
                className={styles.statusDot}
                style={{ backgroundColor: item.color }}
              ></span>
            </div>
          ))}
        </div>
        <img
          src={human}
          alt="Anatomical Illustration"
          className={styles.anatomyImage}
        />
      </div>
    </div>
  );
}

export default AnatomySection;