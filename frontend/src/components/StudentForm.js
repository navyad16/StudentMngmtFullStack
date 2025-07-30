import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RefreshContext } from './RefreshContext';


const StudentForm = () => {
  const [form, setForm] = useState({ name: '', studentClass: '', marks: '' });
  const { toggleRefresh } = useContext(RefreshContext); // 👈 Context use

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/students/', form);
      toast.success("Student added!");
      setForm({ name: '', studentClass: '', marks: '' });
      toggleRefresh(); // 👈 trigger StudentList refresh
    } catch {
      toast.error("Failed to add.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col">
          <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" required />
        </div>
        <div className="col">
          <input name="studentClass" value={form.studentClass} onChange={handleChange} className="form-control" placeholder="Class" required />
        </div>
        <div className="col">
          <input name="marks" value={form.marks} onChange={handleChange} className="form-control" placeholder="Marks" required />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
