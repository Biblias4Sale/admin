import axios from 'axios'
import { ApiURL } from '../../config'
import { GET_PAYMENTS, GET_PAYMENT_ID } from '../constants'

export const getPaymentsData = () => async (dispatch) => {
  const payments = await axios.get(`${ApiURL}/admin/getorders`)
  if (payments) {
    return dispatch({
      type: GET_PAYMENTS,
      payload: payments.data
    })
  }
}
