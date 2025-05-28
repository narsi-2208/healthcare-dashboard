import { healthStatusCards } from '../data/healthData';
import styles from '../styles/HealthStatusCards.module.css';

function HealthStatusCards() {
  return (
    <div className={styles.cardsContainer}>
      {healthStatusCards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>🩺</span>
            <h4>{card.name}</h4>
          </div>
          <p className={styles.date}>Date: {card.date}</p>
          <p className={styles.status} style={{ color: card.color }}>
            {card.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;