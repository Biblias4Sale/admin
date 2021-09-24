import { GET_PAYMENTS, GET_PAYMENT_ID } from '../constants'

const initialState = {
  paymentsData: []

}

const payments = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENTS:
      return {
        ...state,
        paymentsData: action.payload
      }
    case GET_PAYMENT_ID:
      return {
        ...state,
        paymentByID: action.payload
      }
    default:
      return state
  }
}

export default payments
