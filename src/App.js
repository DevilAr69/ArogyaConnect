import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Register from './Register';
import PatientAppointments from './PatientAppointments';
import DoctorManagement from './DoctorManagement';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import About from './About.js';
import { StatusProvider } from './StatusContext';
import Profile from './Profile.js';
import CRM from './CRM.js';
import QRCode from 'react-qr-code';
import QRCodePage from './QR.js';

function App() {
  const [user, setUser] = useState({ isAuthenticated: false, type: null });

  const mainContentStyle = {
    marginTop: "65px",
  };

  return (
    <StatusProvider>
      <Router>
        <Navbar />
        <div className="App" style={mainContentStyle}>
          <Routes>
            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/doctormanagement" element={<DocElement user={user}><DoctorManagement /></DocElement>} />
            <Route path="/patientappointments" element={<PatElement user={user}><PatientAppointments /></PatElement>} />
            <Route path="/patientappointments" element={<PatientAppointments />} />
            <Route path="/doctormanagement" element={<DoctorManagement />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/crm' element={<CRM/>}/>
            <Route path='/qr' element={<QRCodePage/>}/>

            {user.isAuthenticated ? (
                <Route path="/*" element={<Navigate to={user.type === 'doctor' ? "/doctormanagement" : "/patientappointments"} />} />
              ) : (
                <Route path="/*" element={<Navigate to="/homepage" />} />
              )}
          </Routes>
        </div>
      </Router>
    </StatusProvider>
  );
}

function PatElement({ children, user }) {
  if (user && user.type === 'patient') {
    return <>{children}</>;
  } else {
    return (
      <div className="deniedMessageContainer"> {/* Container div */}
        <div className="deniedMessage">Access Denied: You are not a Patient</div>
      </div>
    );
  }
}

function DocElement({ children, user }) {
  if (user && user.type === 'doctor') {
    return <>{children}</>;
  } else {
    return (
      <div className="deniedMessageContainer"> {/* Container div */}
        <div className="deniedMessage">Access Denied: You are not a Doctor</div>
      </div>
    );
  }
}

export default App;
