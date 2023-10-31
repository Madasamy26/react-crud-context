import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import "../css/UserForm.css"
import { v4 as uuidv4 } from 'uuid';

const UserForm = () => {
    const { dispatch } = useUser();
    const [formData, setFormData] = useState({
       id: uuidv4(),
      firstName: '',
      lastName: '',
      age: '',
      city: '',
      phoneNumber: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: 'ADD_USER', payload: formData });
      setFormData({
        id: uuidv4(),
        firstName: '',
        lastName: '',
        age: '',
        city: '',
        phoneNumber: '',
      });
    };
  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="add-button">
            Add User
          </button>
        </form>
      </div>
    );
  };
  
  export default UserForm;

