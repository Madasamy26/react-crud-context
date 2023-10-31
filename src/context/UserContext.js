// src/UserContext.js
import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const initialState = {
  users: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'EDIT_USER':
      // Logic to edit user based on id
      const editedUsers = state.users.map(user => {
        if (user.id === action.payload.id) {
          return {  ...action.payload.user };
        }
        else return user;
      });
      console.log("saved user",editedUsers)
      return { ...state, users: editedUsers };
    case 'DELETE_USER':
      // Logic to delete user based on id
      const updatedUsers = state.users.filter(user => user.id !== action.payload.id);
      return { ...state, users: updatedUsers };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;