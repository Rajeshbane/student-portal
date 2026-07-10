import axios from "axios";

const API_URL = "/api/students";

export async function getStudents() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function addStudent(student) {
  const response = await axios.post(API_URL, student);
  return response.data;
}

export async function deleteStudent(id) {

    const response = await axios.delete(`${API_URL}?id=${id}`);

    return response.data;

}