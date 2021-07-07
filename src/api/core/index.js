import axios from 'axios'

// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})

// request interceptor
request.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
		const res = response.data
		// do something with respones
    return res
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export default request