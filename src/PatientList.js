// PatientList.js
import React from 'react';

const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <strong>Name:</strong> {patient.name} <br />
            <strong>Health Status:</strong> {patient.healthStatus} <br />
            <strong>Vaccination Report:</strong> {patient.vaccinationReport}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
