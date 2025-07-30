import React, { useState } from 'react';
import axios from 'axios';

export default function FilterBar({ setStudents, setPageInfo }) {
  const [filters, setFilters] = useState({ search: '', studentClass: '', marks: '' });

  const applyFilters = async (page = 1) => {
    let url = `http://127.0.0.1:8000/api/students/?page=${page}`;
    Object.entries(filters).forEach(([k, v]) => { if (v) url += `&${k}=${v}`; });
    const res = await axios.get(url);
    setStudents(res.data.results);
    setPageInfo({ next: res.data.next, prev: res.data.previous });
  };

  return (
    <div className="mb-3 d-flex gap-2">
      <input name="search" onChange={e => setFilters({ ...filters, search: e.target.value })} className="form-control" placeholder="Search Name" />
      <input name="studentClass" onChange={e => setFilters({ ...filters, studentClass: e.target.value })} className="form-control" placeholder="Filter Class" />
      <input name="marks" onChange={e => setFilters({ ...filters, marks: e.target.value })} className="form-control" placeholder="Filter Marks" />
      <button className="btn btn-secondary" onClick={() => applyFilters(1)}>Apply</button>
    </div>
  );
}
