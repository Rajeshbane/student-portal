"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import StudentTable from "../../components/StudentTable";

import {
  getStudents,
  deleteStudent,
} from "../../services/studentService";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      setLoading(true);

      const data = await getStudents();

      setStudents(data);
    } catch (error) {
      console.error("Error loading students:", error);
      alert("Unable to load students.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteStudent(id);

      alert("Student deleted successfully.");

      loadStudents();
    } catch (error) {
      console.error("Delete Error:", error);

      alert("Unable to delete student.");
    }
  }

  return (
    <main className="p-10">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Student Management
        </h1>

        <Link href="/students/add">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded">
            + Add Student
          </button>
        </Link>

      </div>

      {loading ? (
        <p className="text-blue-600">
          Loading Students...
        </p>
      ) : (
        <StudentTable
          students={students}
          onDelete={handleDelete}
        />
      )}

    </main>
  );
}