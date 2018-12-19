import axios from 'axios'

const request = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
})

const createRequest = request => new Promise((resolve, reject) => {
  request
    .then((res) => {
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
  request.get('/topics', { params: { ...params, limit: 20 } })
)

const api_getTopicDetailById = (id) => createRequest(
  request.get('/topic/' + id)
)

export default {
  api_getIndexTopicsData,
  api_getTopicDetailById
}
