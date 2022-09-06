import axios from 'axios'
const url = '/api/login'

const login = async userLoginInfo => {
    const response = await axios.post(url, userLoginInfo)
    return response.data
}

export default {login}