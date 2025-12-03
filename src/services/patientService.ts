import { Patient, PatientFormData } from "../types/Patient";

const STORAGE_KEY = "medical_agency_patients";

const getStoredPatients = (): Patient[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const savePatients = (patients: Patient[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
};

export const getPatients = (): Patient[] => {
  const patients = getStoredPatients();
  // Sort by createdAt descending (most recent first)
  return patients.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

export const getPatientById = (patientId: string): Patient | undefined => {
  const patients = getStoredPatients();
  return patients.find((patient) => patient.patientId === patientId);
};

export const createPatient = (formData: PatientFormData): Patient => {
  const patients = getStoredPatients();
  const newPatient: Patient = {
    ...formData,
    patientId: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  patients.push(newPatient);
  savePatients(patients);
  return newPatient;
};

export const updatePatient = (
  patientId: string,
  formData: Partial<PatientFormData>
): Patient | null => {
  const patients = getStoredPatients();
  const index = patients.findIndex(
    (patient) => patient.patientId === patientId
  );
  if (index !== -1) {
    patients[index] = { ...patients[index], ...formData };
    savePatients(patients);
    return patients[index];
  }
  return null;
};

export const deletePatient = (patientId: string): boolean => {
  const patients = getStoredPatients();
  const index = patients.findIndex(
    (patient) => patient.patientId === patientId
  );
  if (index !== -1) {
    patients.splice(index, 1);
    savePatients(patients);
    return true;
  }
  return false;
};
