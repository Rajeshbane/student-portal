import {
  getAllStudents,
  addStudent,
} from "../../../repositories/studentRepository";

export async function GET() {
  try {
    const students = await getAllStudents();

    return Response.json(students);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Database Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const student = await request.json();

    const id = await addStudent(student);

    return Response.json({
      id,
      message: "Student Added Successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Database Error",
      },
      {
        status: 500,
      }
    );
  }
}