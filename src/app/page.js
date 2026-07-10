import Link from "next/link";
import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Student Learning Portal
      </h1>

      <div className="grid grid-cols-4 gap-5 mb-10">

        <DashboardCard
          title="Students"
          value="245"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Courses"
          value="18"
          color="bg-green-600"
        />

        <DashboardCard
          title="Attendance"
          value="221"
          color="bg-purple-600"
        />

        <DashboardCard
          title="Tests"
          value="32"
          color="bg-red-600"
        />

      </div>

      <div className="space-x-4">

        <Link href="/students">
          <button className="bg-blue-600 text-white px-5 py-2 rounded">
            Student Management
          </button>
        </Link>

      </div>

    </main>
  );
}