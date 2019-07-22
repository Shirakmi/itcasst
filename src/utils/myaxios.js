import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
// 添加拦截器
axios.interceptors.request.use(function (config) {
  var token = localStorage.getItem('itcasst_token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
