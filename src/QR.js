// QRCodePage.js
import React, { useState } from 'react';
import QRCode from 'react-qr-code';

import './QR.css';

const QRCodePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle the pop-up message
  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <h1>QR Code Page</h1>

      {/* Display QR Code */}
      <div style={{ margin: '20px' }}>
        <QRCode value="Your QR Code Data" onClick={handlePopup} />
      </div>

      {/* Pop-up Message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <p>This is the pop-up message when the QR code is scanned!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodePage;
