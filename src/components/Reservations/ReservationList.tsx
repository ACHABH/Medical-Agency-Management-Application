import React, { useState } from "react";
import { Reservation, ReservationFormData } from "../../types/Reservation";
import useReservations from "../../hooks/useReservations";
import usePatients from "../../hooks/usePatients";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "./ReservationList.css";

const ReservationList: React.FC = () => {
  const { t } = useLanguage();
  const {
    reservations,
    loading,
    error,
    addReservation,
    editReservation,
    removeReservation,
  } = useReservations();
  const { patients } = usePatients();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReservation, setEditingReservation] = useState<
    Reservation | undefined
  >(undefined);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleAddClick = () => {
    setEditingReservation(undefined);
    setIsModalOpen(true);
  };

  const handleEditClick = (reservation: Reservation) => {
    setEditingReservation(reservation);
    setIsModalOpen(true);
  };

  const handleCancelClick = (reservationId: string) => {
    setDeleteConfirm(reservationId);
  };

  const confirmCancel = () => {
    if (deleteConfirm) {
      removeReservation(deleteConfirm);
      setDeleteConfirm(null);
    }
  };

  const handleFormSubmit = (formData: ReservationFormData) => {
    if (editingReservation) {
      editReservation(editingReservation.reservationId, formData);
    } else {
      addReservation(formData);
    }
    setIsModalOpen(false);
    setEditingReservation(undefined);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingReservation(undefined);
  };

  const getPatientById = (patientId: string) => {
    return patients.find((p) => p.patientId === patientId);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{t.loadingReservations}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="reservation-list-container">
      <div className="list-header">
        <h2>{t.reservations}</h2>
        <Button
          variant="primary"
          onClick={handleAddClick}
          disabled={patients.length === 0}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          {t.newReservation}
        </Button>
      </div>

      {patients.length === 0 && (
        <div className="warning-banner">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{t.addPatientFirst}</span>
        </div>
      )}

      {reservations.length === 0 ? (
        <div className="empty-state">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <p>{t.noReservationsYet}</p>
          {patients.length > 0 && (
            <Button variant="primary" onClick={handleAddClick}>
              {t.createFirstReservation}
            </Button>
          )}
        </div>
      ) : (
        <div className="reservation-grid">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.reservationId}
              reservation={reservation}
              patient={getPatientById(reservation.patientId)}
              onEdit={handleEditClick}
              onCancel={handleCancelClick}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={editingReservation ? t.editReservation : t.newReservation}
      >
        <ReservationForm
          patients={patients}
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
          existingReservation={editingReservation}
        />
      </Modal>

      <Modal
        isOpen={deleteConfirm !== null}
        onClose={() => setDeleteConfirm(null)}
        title={t.confirmCancellation}
        size="small"
      >
        <div className="delete-confirm">
          <p>{t.cancelReservationConfirm}</p>
          <div className="delete-actions">
            <Button variant="secondary" onClick={() => setDeleteConfirm(null)}>
              {t.keepIt}
            </Button>
            <Button variant="danger" onClick={confirmCancel}>
              {t.yesCancel}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReservationList;
