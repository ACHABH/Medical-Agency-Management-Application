import React from "react";
import { Patient } from "../../types/Patient";
import { formatDate } from "../../utils/validation";
import Button from "../UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "./PatientCard.css";

interface PatientCardProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
  onDelete: (patientId: string) => void;
}

const PatientCard: React.FC<PatientCardProps> = ({
  patient,
  onEdit,
  onDelete,
}) => {
  const { t } = useLanguage();

  return (
    <div className="patient-card">
      <div className="patient-card-header">
        <div className="patient-avatar">
          {patient.fullName.charAt(0).toUpperCase()}
        </div>
        <div className="patient-info">
          <h3 className="patient-name">{patient.fullName}</h3>
          <p className="patient-dob">
            <span className="label">{t.dob}:</span>{" "}
            {formatDate(patient.dateOfBirth)}
          </p>
        </div>
      </div>

      <div className="patient-card-body">
        {patient.contactInformation && (
          <p className="patient-contact">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {patient.contactInformation}
          </p>
        )}
        {patient.medicalNotes && (
          <div className="patient-notes">
            <span className="notes-label">{t.medicalNotes}:</span>
            <p>{patient.medicalNotes}</p>
          </div>
        )}
      </div>

      <div className="patient-card-actions">
        <Button
          variant="secondary"
          size="small"
          onClick={() => onEdit(patient)}
        >
          {t.edit}
        </Button>
        <Button
          variant="danger"
          size="small"
          onClick={() => onDelete(patient.patientId)}
        >
          {t.delete}
        </Button>
      </div>
    </div>
  );
};

export default PatientCard;
