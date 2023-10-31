
import './css/App.css';

// src/App.js
import React from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import UserProvider from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <div className="container">
        <h1>React CRUD App with Context</h1>
        <UserForm />
        <div className="user-table">
        <UserTable />
        </div>
      </div>
    </UserProvider>
  );
};

export default App;