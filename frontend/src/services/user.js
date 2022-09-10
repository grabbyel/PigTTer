import axios from "axios";
const url = "http://localhost:3001/api/users";

const getUser = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`)
    return response.data;
  } catch {
    alert("El usuario debe ser único");
  }
};


const register = async (userRegisterInfo) => {
  try {
    const response = await axios.post(url, userRegisterInfo);
    return response.data;
  } catch {
    alert("El usuario debe ser único y la contraseña debe tener al menos 5 caracteres");
  }
};

const editar = async (id, userToUpdate) => {

  try {
    const response = await axios.put(`${url}/${id}`, userToUpdate)
    return response.data
  } catch {
    alert("Error. Comprueba los datos");
  }

}

export default {register, editar, getUser};
