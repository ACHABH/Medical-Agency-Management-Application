import React, { useState, useEffect } from "react";
import { Reservation, ReservationFormData } from "../../types/Reservation";
import { Patient } from "../../types/Patient";
import { validateReservation, ValidationErrors } from "../../utils/validation";
import Input from "../UI/Input";
import DatePicker from "../UI/DatePicker";
import Button from "../UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "./ReservationForm.css";

interface ReservationFormProps {
  patients: Patient[];
  onSubmit: (formData: ReservationFormData) => void;
  onCancel: () => void;
  existingReservation?: Reservation;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  patients,
  onSubmit,
  onCancel,
  existingReservation,
}) => {
  const { t } = useLanguage();
  const [patientId, setPatientId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (existingReservation) {
      setPatientId(existingReservation.patientId);
      setAppointmentDate(existingReservation.appointmentDate);
      setAppointmentTime(existingReservation.appointmentTime);
      setReason(existingReservation.reason || "");
    }
  }, [existingReservation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: ReservationFormData = {
      patientId,
      appointmentDate,
      appointmentTime,
      reason: reason.trim() || undefined,
    };

    const validation = validateReservation(
      formData,
      existingReservation?.reservationId
    );

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="form-group">
        <label className="form-label">
          {t.patient} <span className="required-marker">*</span>
        </label>
        <select
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className={`form-select ${errors.patientId ? "has-error" : ""}`}
          required
        >
          <option value="">{t.selectPatient}</option>
          {patients.map((patient) => (
            <option key={patient.patientId} value={patient.patientId}>
              {patient.fullName}
            </option>
          ))}
        </select>
        {errors.patientId && (
          <span className="form-error">{errors.patientId}</span>
        )}
      </div>

      <DatePicker
        label={t.appointmentDate}
        value={appointmentDate}
        onChange={setAppointmentDate}
        minDate={today}
        required
        error={errors.appointmentDate}
      />

      <div className="form-group">
        <label className="form-label">
          {t.appointmentTime} <span className="required-marker">*</span>
        </label>
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          className={`form-input ${errors.appointmentTime ? "has-error" : ""}`}
          required
        />
        {errors.appointmentTime && (
          <span className="form-error">{errors.appointmentTime}</span>
        )}
      </div>

      {(errors.appointmentDateTime || errors.duplicate) && (
        <div className="form-alert">
          {errors.appointmentDateTime && <p>{errors.appointmentDateTime}</p>}
          {errors.duplicate && <p>{errors.duplicate}</p>}
        </div>
      )}

      <Input
        label={t.reasonNotes}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder={t.reasonPlaceholder}
        multiline
        rows={2}
      />

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onCancel}>
          {t.cancel}
        </Button>
        <Button type="submit" variant="primary">
          {existingReservation ? t.updateReservation : t.createReservation}
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;
