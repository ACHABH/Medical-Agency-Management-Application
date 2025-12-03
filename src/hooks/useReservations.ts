import { useState, useEffect, useCallback } from "react";
import { Reservation, ReservationFormData } from "../types/Reservation";
import * as reservationService from "../services/reservationService";

const useReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadReservations = useCallback(() => {
    try {
      setLoading(true);
      const fetchedReservations = reservationService.getReservations();
      setReservations(fetchedReservations);
      setError(null);
    } catch (err) {
      setError("Failed to fetch reservations");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReservations();
  }, [loadReservations]);

  const addReservation = (
    formData: ReservationFormData
  ): Reservation | null => {
    try {
      const newReservation = reservationService.createReservation(formData);
      setReservations((prev) => [newReservation, ...prev]);
      return newReservation;
    } catch (err) {
      setError("Failed to create reservation");
      return null;
    }
  };

  const editReservation = (
    reservationId: string,
    formData: Partial<ReservationFormData>
  ): Reservation | null => {
    try {
      const updatedReservation = reservationService.updateReservation(
        reservationId,
        formData
      );
      if (updatedReservation) {
        setReservations((prev) =>
          prev.map((res) =>
            res.reservationId === reservationId ? updatedReservation : res
          )
        );
      }
      return updatedReservation;
    } catch (err) {
      setError("Failed to update reservation");
      return null;
    }
  };

  const removeReservation = (reservationId: string): boolean => {
    try {
      const success = reservationService.deleteReservation(reservationId);
      if (success) {
        setReservations((prev) =>
          prev.filter((res) => res.reservationId !== reservationId)
        );
      }
      return success;
    } catch (err) {
      setError("Failed to delete reservation");
      return false;
    }
  };

  const getReservation = (reservationId: string): Reservation | undefined => {
    return reservationService.getReservationById(reservationId);
  };

  return {
    reservations,
    loading,
    error,
    addReservation,
    editReservation,
    removeReservation,
    getReservation,
    refreshReservations: loadReservations,
  };
};

export default useReservations;
