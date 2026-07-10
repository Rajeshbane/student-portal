export default function StudentCard({ student }) {
  return (
    <div className="border rounded p-4 mb-3 shadow">
      <h2 className="text-xl font-semibold">
        {student.name}
      </h2>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>City:</strong> {student.city}
      </p>
    </div>
  );
}