import axios from 'axios'

export const apiWiremock = axios.create({
  baseURL: 'http://localhost:8081',
})
