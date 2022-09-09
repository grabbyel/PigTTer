import axios from "axios";
const url = "http://localhost:3001/api/users";

const register = async (userRegisterInfo) => {
  try {
    const response = await axios.post(url, userRegisterInfo);
    return response.data;
  } catch {
    alert("El usuario debe ser unico");
  }
};

export default { register };
