import React, { useState } from 'react';

const Profile = () => {
  // Sample user data, you can replace this with actual user data from your backend
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Cityville',
    dateOfBirth: '1990-01-01', // Format: YYYY-MM-DD
    gender: 'Male',
  });

  // State variable to manage the form in edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the updated data to your backend
    // For simplicity, let's just log the updated data to the console
    console.log('Updated User Data:', userData);
    // Exit edit mode after submission
    setIsEditMode(false);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {isEditMode ? (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={userData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData.phoneNumber}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Date of Birth:</strong> {userData.dateOfBirth}
          </p>
          <p>
            <strong>Gender:</strong> {userData.gender}
          </p>
          <button onClick={() => setIsEditMode(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
