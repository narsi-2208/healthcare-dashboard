import { calendarAppointments, appointmentDetails } from '../data/appointments';
import UpcomingSchedule from './UpcomingSchedule';
import styles from '../styles/CalendarView.module.css';

function CalendarView() {

  const startDate = new Date(2025, 4, 26);
  const daysOfWeek = 7;
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];


  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);


  const headerText = `${monthNames[startDate.getMonth()]
    } ${startDate.getDate()} - ${monthNames[endDate.getMonth()]
    } ${endDate.getDate()}, ${startDate.getFullYear()}`;

  return (
    <div className={styles.calendarCard}>
      <div className={styles.calendarHeader}>
        <h3>{headerText}</h3>
        <div className={styles.navArrows}>
          <span>←</span>
          <span>→</span>
        </div>
      </div>
      <div className={styles.calendarGrid}>
        {['Mon', 'Tues', 'Wed', 'Thrs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className={styles.dayHeader}>
            {day}
          </div>
        ))}
        {Array.from({ length: daysOfWeek }).map((_, index) => {
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + index);
          const day = currentDate.getDate();
          const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
          const year = currentDate.getFullYear();
          const date = `${year}-${month}-${day.toString().padStart(2, '0')}`;
          const appointment = calendarAppointments.find((a) => a.date === date);
          return (
            <div key={index} className={styles.day}>
              {day}
              {appointment && (
                <div className={styles.times}>
                  {appointment.times.map((time, i) => (
                    <span key={i} className={styles.time}>
                      {time}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.appointmentDetails}>
        {appointmentDetails.map((appt, index) => (
          <div key={index} className={styles.detailCard}>
            <div className={styles.detailIcon}></div>
            <div>
              <h4>{appt.title}</h4>
              <p className={styles.time}>{appt.time}</p>
              <p className={styles.doctor}>{appt.doctor}</p>
            </div>
          </div>
        ))}
      </div>
      <UpcomingSchedule />
    </div>
  );
}

export default CalendarView;