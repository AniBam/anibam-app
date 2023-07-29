import axios from 'axios'

const axiosApi = axios.create({
    baseURL: 'https://api.anilibria.tv/v3',
})

export const getTitleSearch = async (params: string) => {
    const response = await axiosApi.get(`title/search?search=${params}`)
    return response.data
}

export const getUpdates = async () => {
    const response = await axiosApi.get('title/updates')
    return response.data
}
export const getTitle = async (code: string) => {
    const response = await axiosApi.get(`title?code=${code}`)
    return response.data
}
