import axios from 'axios'
const url = '/api/login'

const login = async userLoginInfo => {
    try {
        const response = await axios.post(url, userLoginInfo)
        return response.data
    } catch {
        alert("Usuario o contraseña erróneos");
      }
}

export default {login}