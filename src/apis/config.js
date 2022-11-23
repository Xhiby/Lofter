import axios from 'axios'

export const baseUrl = import.meta.env.VITE_API_BASE_URL

axios.defaults.timeout = 30000

function fetchData(method, url, data = {}) {
  return new Promise((resolve, reject) => {
    let request
    if (method === 'get' || method === 'delete') {
      request = axios[method](baseUrl + url, { params: data })
    } else {
      request = axios[method](baseUrl + url, data)
    }
    request
      .then((res) => {
        resolve(res)
      })
      .catch((e) => {
        if (!axios.isCancel(e) || e.message !== 'canceled') {
          reject(e)
        }
      })
  })
}

export const get = function (url, params) {
  return fetchData('get', url, params)
}

export const post = function (url, data) {
  return fetchData('post', url, data)
}

export const put = function (url, data) {
  return fetchData('put', url, data)
}

export const remove = function (url, params) {
  return fetchData('delete', url, params)
}

export const upload = function (url, data) {
  const formData = new FormData()
  Object.keys(data).forEach((child) => {
    formData.append(child, data[child])
  })
  return post(url, formData)
}
