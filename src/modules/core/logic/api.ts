import { useTokenStore } from '@auth/logic/store'
import axios, { AxiosRequestTransformer, AxiosResponseTransformer } from 'axios'
import humps from 'humps'


const transformRequest: AxiosRequestTransformer = (data) => {
    return humps.decamelizeKeys(data)
}

const transformResponse: AxiosResponseTransformer = (data) => {
    return humps.camelizeKeys(JSON.parse(data))
}

const apiConfig = {
    baseURL: 'http://143.198.104.247:8000/api/v1',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },


    transformRequest: ([transformRequest] as any).concat(axios.defaults.transformRequest),

    transformResponse: ([transformResponse] as any).concat(axios.defaults.transformResponse),


    // onUploadProgress: function (progressEvent) {
    //     // Делайте все, что хотите, с родным событием прогресса
    // },

    // onDownloadProgress: function (progressEvent) {
    //     // Делайте все, что хотите, с родным событием прогресса
    // },


    // validateStatus: function (status) {
    //     return status >= 200 && status < 300 // по умолчанию
    // },
}

export const api = axios.create(apiConfig)

api.interceptors.request.use((config) => {
    const { token } = useTokenStore.getState()

    if (config.headers && token) {
        config.headers.Authorization = `Token ${token}`
    }

    return config
})