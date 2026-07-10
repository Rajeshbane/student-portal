import db from "../lib/db";

export async function getAllStudents() {
  const [rows] = await db.query(
    "SELECT * FROM students ORDER BY id"
  );

  return rows;
}

export async function addStudent(student) {
  const { name, course, city } = student;

  const [result] = await db.query(
    `
    INSERT INTO students
    (name, course, city)
    VALUES (?, ?, ?)
    `,
    [name, course, city]
  );

  return result.insertId;
}