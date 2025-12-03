export interface Reservation {
  reservationId: string;
  patientId: string;
  appointmentDate: string;
  appointmentTime: string;
  reason?: string;
  createdAt: string;
}

export interface ReservationFormData {
  patientId: string;
  appointmentDate: string;
  appointmentTime: string;
  reason?: string;
}
