"use client";

import Link from "next/link";

export default function StudentTable({
  students,
  onDelete,
}) {
  return (
    <table className="min-w-full border border-gray-300 shadow-lg">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-3">ID</th>
          <th className="border p-3">Name</th>
          <th className="border p-3">Course</th>
          <th className="border p-3">City</th>
          <th className="border p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td
              colSpan="5"
              className="text-center p-4 text-gray-500"
            >
              No Students Found
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>
              <td className="border p-3 text-center">
                {student.id}
              </td>

              <td className="border p-3">
                {student.name}
              </td>

              <td className="border p-3">
                {student.course}
              </td>

              <td className="border p-3">
                {student.city}
              </td>

              <td className="border p-3">

                <Link href={`/students/edit/${student.id}`}>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => onDelete(student.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}