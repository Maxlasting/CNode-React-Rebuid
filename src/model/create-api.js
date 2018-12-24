import axios from 'axios'

const request = axios.create({
  baseURL: '/api'
})

const createRequest = request => new Promise((resolve, reject) => {
  request
    .then((res) => {
      console.log(res)
      if (res.data.success) {
        resolve({ status: res.status, data: res.data })
      } else {
        reject(new Error(`API 接口请求失败，Code: ${res.status}`))
      }
    })
    .catch(err => reject(err))
})

// page, tab, limit
const api_getIndexTopicsData = (params) => createRequest(
  request.get('/topics', { params })
)

const api_getTopicDetailById = (id) => createRequest(
  request.get('/topicDetail', { params: {topicId: id}})
)

const api_userRegister = (params) => createRequest(
  request.post('/register', params)
)

const api_userLogin = (params) => createRequest(
  request.post('/login', params)
)

const api_userLogout = () => createRequest(
  request.get('/logout')
)

const api_checkLoginStatus = () => createRequest(
  request.get('/checkIfLogin')
)

export default {
  api_getIndexTopicsData,
  api_getTopicDetailById,
  api_userRegister,
  api_userLogin,
  api_userLogout,
  api_checkLoginStatus
}
