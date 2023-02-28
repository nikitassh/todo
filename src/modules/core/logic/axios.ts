import axios from 'axios'

const config = {
    baseURL: 'http://143.198.104.247:8000/api/v1',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },

    // transformRequest: [function (data, headers) {
    //     return data
    // }],
    //
    // transformResponse: [function (data) {
    //     return data
    // }],


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

export const baseApi = axios.create(config)