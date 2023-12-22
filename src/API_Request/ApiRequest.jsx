import axios from "axios";

// Create new task
export const createNewTask = async (task) => {
   const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/task`,
      task
   );
   return data;
};

// Get all task
export const getAllTask = async (email) => {
   const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/task?email=${email}`
   );
   return data;
};
