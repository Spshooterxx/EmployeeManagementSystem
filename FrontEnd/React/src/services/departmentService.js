import axios from "axios";

const API_URL = "http://localhost:8080/api/departments";

export const getAllDepartments = () => axios.get(API_URL);
export const addDepartment = (department) => axios.post(API_URL, department);
export const updateDepartment = (id, department) => axios.put(`${API_URL}/${id}`, department);
export const deleteDepartment = (id) => axios.delete(`${API_URL}/${id}`);
