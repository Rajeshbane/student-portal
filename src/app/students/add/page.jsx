"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addStudent } from "../../../services/studentService";

export default function AddStudent() {
  const router = useRouter();

  const [student, setStudent] = useState({
    name: "",
    course: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  }

  async function saveStudent(e) {
    e.preventDefault();

    // Validation
    if (
      student.name.trim() === "" ||
      student.course.trim() === "" ||
      student.city.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await addStudent(student);

      alert("Student added successfully!");

      // Reset form
      setStudent({
        name: "",
        course: "",
        city: "",
      });

      // Redirect to Student List
      router.push("/students");

    } catch (error) {
      console.error(error);
      alert("Unable to save student.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Add Student
      </h1>

      <form
        onSubmit={saveStudent}
        className="max-w-lg space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={student.city}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
        >
          {loading ? "Saving..." : "Save Student"}
        </button>

      </form>

    </main>
  );
}