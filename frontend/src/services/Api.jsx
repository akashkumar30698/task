import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URI}`;

export const fetchTasks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async (title) => {
  try {
    const res = await axios.post(API_URL, { title });
    return res.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const updateTask = async (id, completed) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, { completed });
    return res.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const removeTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error removing task:", error);
    throw error;
  }
};
