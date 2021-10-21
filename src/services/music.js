import axios from 'axios'
import configService from './config'

const MusicService = axios.create({
  baseUrl: configService.apiUrl
})

export default MusicService
