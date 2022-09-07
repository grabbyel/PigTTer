import axios from 'axios'
const url = 'http://localhost:3001/api/users'

const register = async userRegisterInfo => {
    const response = await axios.post(url, userRegisterInfo)
    return response.data
}

export default {register}