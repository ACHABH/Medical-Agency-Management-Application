import React, { useState, useEffect } from "react";
import { Patient, PatientFormData } from "../../types/Patient";
import { validatePatient, ValidationErrors } from "../../utils/validation";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "./PatientForm.css";

interface PatientFormProps {
  onSubmit: (formData: PatientFormData) => void;
  onCancel: () => void;
  existingPatient?: Patient;
}

const PatientForm: React.FC<PatientFormProps> = ({
  onSubmit,
  onCancel,
  existingPatient,
}) => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactInformation, setContactInformation] = useState("");
  const [medicalNotes, setMedicalNotes] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    if (existingPatient) {
      setFullName(existingPatient.fullName);
      setDateOfBirth(existingPatient.dateOfBirth);
      setContactInformation(existingPatient.contactInformation);
      setMedicalNotes(existingPatient.medicalNotes || "");
    }
  }, [existingPatient]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: PatientFormData = {
      fullName: fullName.trim(),
      dateOfBirth,
      contactInformation: contactInformation.trim(),
      medicalNotes: medicalNotes.trim() || undefined,
    };

    const validation = validatePatient(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <Input
        label={t.fullName}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder={t.enterPatientName}
        required
        error={errors.fullName}
      />

      <Input
        label={t.dateOfBirth}
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
        error={errors.dateOfBirth}
      />

      <Input
        label={t.contactInfo}
        value={contactInformation}
        onChange={(e) => setContactInformation(e.target.value)}
        placeholder={t.phoneOrEmail}
      />

      <Input
        label={t.medicalNotes}
        value={medicalNotes}
        onChange={(e) => setMedicalNotes(e.target.value)}
        placeholder={t.medicalNotesPlaceholder}
        multiline
        rows={3}
      />

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onCancel}>
          {t.cancel}
        </Button>
        <Button type="submit" variant="primary">
          {existingPatient ? t.updatePatient : t.addPatient}
        </Button>
      </div>
    </form>
  );
};

export default PatientForm;
