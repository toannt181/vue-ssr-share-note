import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3333/api'

function request(options) {
  const { originData } = options
  return axios(options)
    .then(response => Promise.resolve(originData ? response : response.data))
    .catch(error => {
      return Promise.reject(error)
    })
}

const Request = {
  get(options) {
    return request({ method: 'GET', ...options })
  },
  post(options) {
    return request({ method: 'POST', ...options })
  },
  put(options) {
    return request({ method: 'PUT', ...options })
  },
  delete(options) {
    return request({ method: 'DELETE', ...options })
  },
}

export default Request
