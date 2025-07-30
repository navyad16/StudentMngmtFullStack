import React, { useState } from 'react';
import { RefreshContext } from './components/RefreshContext';

import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => setRefresh(!refresh);

  return (
    <RefreshContext.Provider value={{ refresh, toggleRefresh }}>
      <div className="container mt-4">
        <h2 className="text-center mb-4">📚 Student Records System</h2>
        <StudentForm />
        <StudentList />
        <ToastContainer />
      </div>
    </RefreshContext.Provider>
  );
}

export default App;
