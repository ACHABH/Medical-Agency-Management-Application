import { Reservation, ReservationFormData } from "../types/Reservation";

const STORAGE_KEY = "medical_agency_reservations";

const getStoredReservations = (): Reservation[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveReservations = (reservations: Reservation[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
};

export const getReservations = (): Reservation[] => {
  const reservations = getStoredReservations();
  // Sort by createdAt descending (most recent first)
  return reservations.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

export const getReservationById = (
  reservationId: string
): Reservation | undefined => {
  const reservations = getStoredReservations();
  return reservations.find(
    (reservation) => reservation.reservationId === reservationId
  );
};

export const getReservationsByPatientId = (
  patientId: string
): Reservation[] => {
  const reservations = getStoredReservations();
  return reservations.filter(
    (reservation) => reservation.patientId === patientId
  );
};

export const createReservation = (
  formData: ReservationFormData
): Reservation => {
  const reservations = getStoredReservations();
  const newReservation: Reservation = {
    ...formData,
    reservationId: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  reservations.push(newReservation);
  saveReservations(reservations);
  return newReservation;
};

export const updateReservation = (
  reservationId: string,
  formData: Partial<ReservationFormData>
): Reservation | null => {
  const reservations = getStoredReservations();
  const index = reservations.findIndex(
    (reservation) => reservation.reservationId === reservationId
  );
  if (index !== -1) {
    reservations[index] = { ...reservations[index], ...formData };
    saveReservations(reservations);
    return reservations[index];
  }
  return null;
};

export const deleteReservation = (reservationId: string): boolean => {
  const reservations = getStoredReservations();
  const index = reservations.findIndex(
    (reservation) => reservation.reservationId === reservationId
  );
  if (index !== -1) {
    reservations.splice(index, 1);
    saveReservations(reservations);
    return true;
  }
  return false;
};

export const checkDuplicateReservation = (
  patientId: string,
  appointmentDate: string,
  appointmentTime: string,
  excludeReservationId?: string
): boolean => {
  const reservations = getStoredReservations();
  return reservations.some(
    (res) =>
      res.patientId === patientId &&
      res.appointmentDate === appointmentDate &&
      res.appointmentTime === appointmentTime &&
      res.reservationId !== excludeReservationId
  );
};
