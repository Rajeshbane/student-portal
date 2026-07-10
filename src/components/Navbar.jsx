import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">

      <div className="flex gap-8">

        <Link href="/">Dashboard</Link>

        <Link href="/students">
          Students
        </Link>

        <Link href="/courses">
          Courses
        </Link>

        <Link href="/reports">
          Reports
        </Link>

      </div>

    </nav>
  );
}