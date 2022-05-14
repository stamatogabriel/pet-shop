import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bem-me-care-backend.herokuapp.com/api/v1',
})

export default api