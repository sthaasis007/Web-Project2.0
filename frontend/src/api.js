import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
