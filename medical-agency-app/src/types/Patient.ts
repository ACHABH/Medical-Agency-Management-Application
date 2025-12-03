export interface Patient {
  patientId: string;
  fullName: string;
  dateOfBirth: string;
  contactInformation: string;
  medicalNotes?: string;
  createdAt: string;
}

export interface PatientFormData {
  fullName: string;
  dateOfBirth: string;
  contactInformation: string;
  medicalNotes?: string;
}
