import { CheckCircle, Eye, Heart, Brain } from 'lucide-react';
import styles from '../styles/SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ title, time, icon }) {
    const icons = {
        'check-circle': <CheckCircle size={16} color="#1e90ff" />,
        eye: <Eye size={16} color="#1e90ff" />,
        heart: <Heart size={16} color="#ff6b6b" />,
        brain: <Brain size={16} color="#1e90ff" />,
    };

    return (
        <div className={styles.card}>
            <div>
                <div className={styles.icon}>
                    <h5>{title}</h5>
                    {icons[icon]}
                </div>
                <p>{time}</p>
            </div>
        </div>
    );
}

export default SimpleAppointmentCard;