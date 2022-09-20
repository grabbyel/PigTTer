import axios from 'axios'
const url = '/api/comments'

const getComments = async () => {
    const response = await axios.get(url)
    return response.data
}

const getSingleComment = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}`)
      return response.data;
    } catch {
      alert("El comment no existe");
    }
  };

  const removeComment = async id => {
    try {
      const response = await axios.delete(`${url}/${id}`)
    return response
    } catch {
      alert("El comment no existe");
    }
}

export default {getComments, getSingleComment, removeComment}