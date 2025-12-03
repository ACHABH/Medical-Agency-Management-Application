import React, { useState } from "react";
import { Patient, PatientFormData } from "../../types/Patient";
import usePatients from "../../hooks/usePatients";
import PatientCard from "./PatientCard";
import PatientForm from "./PatientForm";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "./PatientList.css";

const PatientList: React.FC = () => {
  const { t } = useLanguage();
  const { patients, loading, error, addPatient, editPatient, removePatient } =
    usePatients();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState<Patient | undefined>(
    undefined
  );
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleAddClick = () => {
    setEditingPatient(undefined);
    setIsModalOpen(true);
  };

  const handleEditClick = (patient: Patient) => {
    setEditingPatient(patient);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (patientId: string) => {
    setDeleteConfirm(patientId);
  };

  const confirmDelete = () => {
    if (deleteConfirm) {
      removePatient(deleteConfirm);
      setDeleteConfirm(null);
    }
  };

  const handleFormSubmit = (formData: PatientFormData) => {
    if (editingPatient) {
      editPatient(editingPatient.patientId, formData);
    } else {
      addPatient(formData);
    }
    setIsModalOpen(false);
    setEditingPatient(undefined);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingPatient(undefined);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{t.loadingPatients}</p>
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
    <div className="patient-list-container">
      <div className="list-header">
        <h2>{t.patients}</h2>
        <Button variant="primary" onClick={handleAddClick}>
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
          {t.addPatient}
        </Button>
      </div>

      {patients.length === 0 ? (
        <div className="empty-state">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <p>{t.noPatientsYet}</p>
          <Button variant="primary" onClick={handleAddClick}>
            {t.addFirstPatient}
          </Button>
        </div>
      ) : (
        <div className="patient-grid">
          {patients.map((patient) => (
            <PatientCard
              key={patient.patientId}
              patient={patient}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={editingPatient ? t.editPatient : t.addNewPatient}
      >
        <PatientForm
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
          existingPatient={editingPatient}
        />
      </Modal>

      <Modal
        isOpen={deleteConfirm !== null}
        onClose={() => setDeleteConfirm(null)}
        title={t.confirmDelete}
        size="small"
      >
        <div className="delete-confirm">
          <p>{t.deletePatientConfirm}</p>
          <div className="delete-actions">
            <Button variant="secondary" onClick={() => setDeleteConfirm(null)}>
              {t.cancel}
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              {t.delete}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PatientList;
