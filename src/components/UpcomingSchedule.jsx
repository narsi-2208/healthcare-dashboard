import { upcomingAppointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import styles from '../styles/UpcomingSchedule.module.css';

function UpcomingSchedule() {
    return (
        <div className={styles.scheduleCard}>
            <h3>THE UPCOMING SCHEDULE</h3>
            {upcomingAppointments.map((day, index) => (
                <div key={index} className={styles.dayGroup}>
                    <h4>{day.day}</h4>
                    <div className={styles.appt}>
                        {day.appointments.map((appt, i) => (
                            <SimpleAppointmentCard key={i} {...appt} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingSchedule;