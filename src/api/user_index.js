import axios from '@/utils/myaxios.js'

export const login = (data) => {
  return axios({
    url: 'login',
    method: 'post',
    data
  })
}
export const getAllUserList = (params) => {
  return axios({
    url: 'users',
    params
  })
}
