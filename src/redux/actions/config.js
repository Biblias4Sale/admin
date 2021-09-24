import axios from 'axios'
import {
  GET_NOTIFICATIONS_CONFIG,
  SET_NOTIFICATIONS_CONFIG
} from '../constants'
import { ApiURL } from 'src/config'

export const setConfigs = (options) => async (dispatch) => {
  const newConfig = await axios.post(`${ApiURL}/configureMarketing`, options, { withCredentials: true })
  if (newConfig) {
    const getNewConfig = await axios.get(`${ApiURL}/configureMarketing`)
    console.log(getNewConfig.data)
    return dispatch({
      type: SET_NOTIFICATIONS_CONFIG,
      payload: getNewConfig.data.data
    })
  }
}

export const getConfigs = () => async (dispatch) => {
  const getNewConfig = await axios.get(`${ApiURL}/configureMarketing`)
  if (getNewConfig) {
    console.log(getNewConfig.data)
    return dispatch({
      type: GET_NOTIFICATIONS_CONFIG,
      payload: getNewConfig.data
    })
  }
}
