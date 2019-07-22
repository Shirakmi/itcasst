import axios from '@/utils/myaxios.js'

export const login = (data) => {
  return axios({
    url: 'login',
    method: 'post',
    data
  })
}
<<<<<<< HEAD
export const getAllUserList = (params) => {
  return axios({
    url: 'users',
    params
  })
}
=======
>>>>>>> d47c9d17bf34076c250316392e880de4b190a7b0
