import { PatientFormData } from "../types/Patient";
import { ReservationFormData } from "../types/Reservation";
import { checkDuplicateReservation } from "../services/reservationService";
import { getPatientById } from "../services/patientService";

export interface ValidationErrors {
  [key: string]: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}

export const validatePatient = (patient: PatientFormData): ValidationResult => {
  const errors: ValidationErrors = {};

  if (!patient.fullName || patient.fullName.trim() === "") {
    errors.fullName = "Patient name is required.";
  }

  if (!patient.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required.";
  } else {
    const dob = new Date(patient.dateOfBirth);
    const today = new Date();
    if (dob >= today) {
      errors.dateOfBirth = "Date of birth must be in the past.";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateReservation = (
  reservation: ReservationFormData,
  excludeReservationId?: string
): ValidationResult => {
  const errors: ValidationErrors = {};
  const now = new Date();

  if (!reservation.patientId) {
    errors.patientId = "Patient is required.";
  } else {
    const patient = getPatientById(reservation.patientId);
    if (!patient) {
      errors.patientId = "Selected patient does not exist.";
    }
  }

  if (!reservation.appointmentDate) {
    errors.appointmentDate = "Appointment date is required.";
  }

  if (!reservation.appointmentTime) {
    errors.appointmentTime = "Appointment time is required.";
  }

  if (reservation.appointmentDate && reservation.appointmentTime) {
    const appointmentDateTime = new Date(
      `${reservation.appointmentDate}T${reservation.appointmentTime}`
    );

    if (appointmentDateTime <= now) {
      errors.appointmentDateTime =
        "Appointment must be scheduled in the future.";
    }

    if (reservation.patientId) {
      const isDuplicate = checkDuplicateReservation(
        reservation.patientId,
        reservation.appointmentDate,
        reservation.appointmentTime,
        excludeReservationId
      );

      if (isDuplicate) {
        errors.duplicate =
          "A reservation already exists for this patient at the same date and time.";
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};
