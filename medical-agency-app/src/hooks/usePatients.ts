import { useState, useEffect, useCallback } from "react";
import { Patient, PatientFormData } from "../types/Patient";
import * as patientService from "../services/patientService";

const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadPatients = useCallback(() => {
    try {
      setLoading(true);
      const fetchedPatients = patientService.getPatients();
      setPatients(fetchedPatients);
      setError(null);
    } catch (err) {
      setError("Failed to fetch patients");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPatients();
  }, [loadPatients]);

  const addPatient = (formData: PatientFormData): Patient | null => {
    try {
      const createdPatient = patientService.createPatient(formData);
      setPatients((prev) => [createdPatient, ...prev]);
      return createdPatient;
    } catch (err) {
      setError("Failed to add patient");
      return null;
    }
  };

  const editPatient = (
    patientId: string,
    formData: Partial<PatientFormData>
  ): Patient | null => {
    try {
      const updatedPatient = patientService.updatePatient(patientId, formData);
      if (updatedPatient) {
        setPatients((prev) =>
          prev.map((p) => (p.patientId === patientId ? updatedPatient : p))
        );
      }
      return updatedPatient;
    } catch (err) {
      setError("Failed to update patient");
      return null;
    }
  };

  const removePatient = (patientId: string): boolean => {
    try {
      const success = patientService.deletePatient(patientId);
      if (success) {
        setPatients((prev) => prev.filter((p) => p.patientId !== patientId));
      }
      return success;
    } catch (err) {
      setError("Failed to delete patient");
      return false;
    }
  };

  const getPatient = (patientId: string): Patient | undefined => {
    return patientService.getPatientById(patientId);
  };

  return {
    patients,
    loading,
    error,
    addPatient,
    editPatient,
    removePatient,
    getPatient,
    refreshPatients: loadPatients,
  };
};

export default usePatients;
