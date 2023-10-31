import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import "../css/UserTable.css"

const UserTable = () => {
  const { state, dispatch } = useUser();
  const [editMode, setEditMode] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const handleEditClick = (index) => {
    setEditMode(index);
    // Set the edited user details to pre-fill the input fields
    setEditedUser(state.users[index]);
  };

  useEffect(() =>{
    console.log("users",state.users)
  },[state])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSaveClick = () => {
    dispatch({ type: 'EDIT_USER', payload: { index: editMode, user: editedUser,id:editedUser.id } });
    setEditMode(null);
  };

  const handleDeleteClick = (userId) => {
    dispatch({ type: 'DELETE_USER', payload: {id:userId} });
  };
  const handleCancelClick = () => {
    setEditMode(null);
  };

  return (
    <div className="table-container">
    <table>
     <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.users.map((user, index) => (
          <tr key={user.id}>
            <td>
              {editMode === index ? (
                <input
                  type="text"
                  name="firstName"
                  value={editedUser.firstName}
                  onChange={handleInputChange}
                />
              ) : (
                user.firstName
              )}
            </td>
            <td>
              {editMode === index ? (
                <input
                  type="text"
                  name="lastName"
                  value={editedUser.lastName}
                  onChange={handleInputChange}
                />
              ) : (
                user.lastName
              )}
            </td>
            <td>
              {editMode === index ? (
                <input
                  type="text"
                  name="age"
                  value={editedUser.age}
                  onChange={handleInputChange}
                />
              ) : (
                user.age
              )}
            </td>
           
            <td>
              {editMode === index ? (
                <input
                  type="text"
                  name="city"
                  value={editedUser.city}
                  onChange={handleInputChange}
                />
              ) : (
                user.city
              )}
            </td>

            <td>
              {editMode === index ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedUser.phoneNumber}
                  onChange={handleInputChange}
                />
              ) : (
                user.phoneNumber
              )}
            </td>
            
            <td className='action-container'>
              {editMode === index ? (
                <><button className="save-button" onClick={handleSaveClick}>Save</button>
                 <button className="cancel-button"  onClick={handleCancelClick}>cancel</button>
                </>
                
              ) : (
               <> <button className="edit-button" onClick={() => handleEditClick(index)}>Edit</button>
               <button className="delete-button"  onClick={() => handleDeleteClick(user.id)}>Delete</button>
               </>
              )}


              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default UserTable;