// CRM.js
import React, { useState } from 'react';
import AddPatientForm from './AddPatientForm';
import PatientList from './PatientList';
import './CRM.css';

const CRM = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <div>
      <h1>Health Care CRM</h1>
      <AddPatientForm onAddPatient={addPatient} />
      <PatientList patients={patients} />
    </div>
  );
};

export default CRM;
