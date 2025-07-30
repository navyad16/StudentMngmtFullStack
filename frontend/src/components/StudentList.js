import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import Pagination from './Pagination';
import FilterBar from './FilterBar';
import { RefreshContext } from './RefreshContext';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [pageInfo, setPageInfo] = useState({ next: null, prev: null });
  const { refresh } = useContext(RefreshContext); // 👈 listen to context change

  const fetchStudents = async (page = 1) => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/students/?page=${page}`);
    setStudents(res.data.results);
    setPageInfo({ next: res.data.next, prev: res.data.previous });
    } catch (err) {
    toast.error("Failed to load students");
    console.error("Fetch error:", err);
    }
    };


  useEffect(() => {
    fetchStudents();
  }, [refresh]); // 👈 refetch on refresh change

  const deleteStudent = async (id) => {
  await axios.delete(`http://127.0.0.1:8000/api/students/${id}/`);
  toast.success("Deleted");
  fetchStudents(1); // go back to first page
};


  return (
    <>
      <FilterBar setStudents={setStudents} setPageInfo={setPageInfo} fetchStudents={fetchStudents} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Class</th><th>Marks</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.studentClass}</td>
              <td>{s.marks}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteStudent(s.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pageInfo={pageInfo} onPageChange={fetchStudents} />
    </>
  );
};

export default StudentList;
