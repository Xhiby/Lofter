import { post, upload, get, put, remove } from './config'

export const getUserInfo = () => get('src/assets/json/getUserInfo.json')

export const getArtList = () => get('src/assets/json/getArtList.json')
