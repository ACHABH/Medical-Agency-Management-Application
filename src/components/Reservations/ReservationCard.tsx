import React from "react";
import { Reservation } from "../../types/Reservation";
import { Patient } from "../../types/Patient";
import { formatDate, formatTime } from "../../utils/validation";
import Button from "../UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "./ReservationCard.css";

interface ReservationCardProps {
  reservation: Reservation;
  patient?: Patient;
  onEdit: (reservation: Reservation) => void;
  onCancel: (reservationId: string) => void;
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  reservation,
  patient,
  onEdit,
  onCancel,
}) => {
  const { t, language } = useLanguage();
  const isPast =
    new Date(`${reservation.appointmentDate}T${reservation.appointmentTime}`) <
    new Date();

  const getMonthName = (date: string) => {
    const localeMap = { en: "en-US", fr: "fr-FR", ar: "ar-SA" };
    return new Date(date).toLocaleString(localeMap[language], {
      month: "short",
    });
  };

  return (
    <div className={`reservation-card ${isPast ? "past" : ""}`}>
      <div className="reservation-card-header">
        <div className="reservation-datetime">
          <div className="date-badge">
            <span className="day">
              {new Date(reservation.appointmentDate).getDate()}
            </span>
            <span className="month">
              {getMonthName(reservation.appointmentDate)}
            </span>
          </div>
          <div className="time-info">
            <span className="time">
              {formatTime(reservation.appointmentTime)}
            </span>
            <span className="date-full">
              {formatDate(reservation.appointmentDate)}
            </span>
          </div>
        </div>
        {isPast && <span className="status-badge past">{t.past}</span>}
        {!isPast && <span className="status-badge upcoming">{t.upcoming}</span>}
      </div>

      <div className="reservation-card-body">
        <div className="patient-info">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="patient-name">
            {patient?.fullName || t.unknownPatient}
          </span>
        </div>

        {reservation.reason && (
          <div className="reservation-reason">
            <span className="reason-label">{t.reason}:</span>
            <p>{reservation.reason}</p>
          </div>
        )}
      </div>

      <div className="reservation-card-actions">
        <Button
          variant="secondary"
          size="small"
          onClick={() => onEdit(reservation)}
          disabled={isPast}
        >
          {t.edit}
        </Button>
        <Button
          variant="danger"
          size="small"
          onClick={() => onCancel(reservation.reservationId)}
        >
          {isPast ? t.delete : t.cancelReservation}
        </Button>
      </div>
    </div>
  );
};

export default ReservationCard;
