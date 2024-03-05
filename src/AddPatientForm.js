// AddPatientForm.js
import React, { useState } from 'react';

const AddPatientForm = ({ onAddPatient }) => {
  const [name, setName] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [vaccinationReport, setVaccinationReport] = useState('');

  const handleAddPatient = () => {
    const newPatient = {
      name,
      healthStatus,
      vaccinationReport,
    };

    onAddPatient(newPatient);

    setName('vishAL');
    setHealthStatus('');
    setVaccinationReport('');
  };

  return (
    <div>
      <h2>Add New Patient</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Health Status:</label>
          <input type="text" value={healthStatus} onChange={(e) => setHealthStatus(e.target.value)} />
        </div>
        <div>
          <label>Vaccination Report:</label>
          <textarea value={vaccinationReport} onChange={(e) => setVaccinationReport(e.target.value)} />
        </div>
        <button type="button" onClick={handleAddPatient}>
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatientForm;
