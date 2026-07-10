export default function DashboardCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 text-white ${color}`}
    >
      <h2 className="text-lg">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}